"use client";

import { useRef, useState } from "react";

/**
 * Example client for the /api/upload/avatar endpoint.
 * Renders nothing useful until S3_* env vars are configured.
 */
export function AvatarUpload() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function upload(file: File) {
    setBusy(true);
    setStatus(null);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload/avatar", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus(data.error ?? "Upload failed");
      } else {
        setStatus(`Uploaded: ${data.url}`);
      }
    } catch {
      setStatus("Upload failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) upload(file);
        }}
      />
      <button
        onClick={() => inputRef.current?.click()}
        disabled={busy}
        className="w-fit rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium transition hover:bg-gray-100 disabled:opacity-50"
      >
        {busy ? "Uploading…" : "Upload profile picture"}
      </button>
      {status && <p className="text-sm text-gray-600">{status}</p>}
    </div>
  );
}
