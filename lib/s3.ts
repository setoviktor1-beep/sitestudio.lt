import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

/**
 * Optional S3-compatible storage helper (AWS S3, MinIO, Cloudflare R2, ...).
 * Fully env-driven: when S3_BUCKET is not set, `isS3Configured()` is false
 * and upload endpoints can return 501 instead of failing at import time.
 */
export function isS3Configured(): boolean {
  return Boolean(
    process.env.S3_BUCKET &&
      process.env.S3_ACCESS_KEY_ID &&
      process.env.S3_SECRET_ACCESS_KEY
  );
}

let client: S3Client | null = null;

function getClient(): S3Client {
  if (!client) {
    client = new S3Client({
      region: process.env.S3_REGION ?? "auto",
      // Leave S3_ENDPOINT empty for AWS; set it for MinIO/R2/etc.
      endpoint: process.env.S3_ENDPOINT || undefined,
      forcePathStyle: Boolean(process.env.S3_ENDPOINT), // needed by most S3-compatible services
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID!,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
      },
    });
  }
  return client;
}

export async function uploadToS3(params: {
  key: string;
  body: Buffer;
  contentType: string;
}): Promise<{ key: string; url: string }> {
  const bucket = process.env.S3_BUCKET!;
  await getClient().send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: params.key,
      Body: params.body,
      ContentType: params.contentType,
    })
  );

  // S3_PUBLIC_URL should be the public base URL of the bucket (or CDN in front of it).
  const base = process.env.S3_PUBLIC_URL?.replace(/\/$/, "");
  const url = base ? `${base}/${params.key}` : params.key;
  return { key: params.key, url };
}
