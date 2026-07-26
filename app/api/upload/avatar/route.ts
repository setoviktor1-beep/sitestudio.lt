import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { isS3Configured, uploadToS3 } from "@/lib/s3";

export const dynamic = "force-dynamic";

const MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = new Set(["image/png", "image/jpeg", "image/webp"]);

/**
 * Example profile-picture upload.
 * POST multipart/form-data with a single `file` field. Requires a session.
 * Returns 501 until the S3_* environment variables are configured.
 */
export async function POST(request: NextRequest) {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isS3Configured()) {
    return NextResponse.json(
      { error: "S3 storage is not configured (set the S3_* env vars)" },
      { status: 501 }
    );
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Missing file field" }, { status: 400 });
  }
  if (!ALLOWED_TYPES.has(file.type)) {
    return NextResponse.json(
      { error: "Only PNG, JPEG and WebP images are allowed" },
      { status: 400 }
    );
  }
  if (file.size > MAX_SIZE_BYTES) {
    return NextResponse.json(
      { error: "File too large (max 5 MB)" },
      { status: 400 }
    );
  }

  const ext = file.type.split("/")[1];
  const key = `avatars/${session.user.id}/${crypto.randomUUID()}.${ext}`;
  const buffer = Buffer.from(await file.arrayBuffer());

  try {
    const result = await uploadToS3({
      key,
      body: buffer,
      contentType: file.type,
    });
    return NextResponse.json(result);
  } catch (error) {
    console.error("[upload] S3 upload failed:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
