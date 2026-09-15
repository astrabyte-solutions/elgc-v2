"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Upload, X } from "lucide-react";

export function ImageUploadField({
  label,
  value,
  onChange,
  hint,
}: {
  label: string;
  value: string;
  onChange: (url: string) => void;
  hint?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleFile(file: File) {
    setUploading(true);
    setError("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed");
      onChange(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <label className="admin-label">{label}</label>
      {hint && <p className="mb-2 text-xs text-[#94a3b8]">{hint}</p>}

      {value ? (
        <div className="relative mb-3 overflow-hidden rounded-lg border border-[#e8ecf0]">
          <div className="relative h-40 w-full bg-[#f8fafc]">
            <Image src={value} alt="Preview" fill className="object-cover" unoptimized />
          </div>
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute right-2 top-2 rounded-full bg-white/90 p-1.5 text-[#64748b] shadow hover:text-red-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : null}

      <div
        className="cursor-pointer rounded-lg border-2 border-dashed border-[#dde3ea] bg-[#fafbfc] px-4 py-6 text-center transition-colors hover:border-[#22c55e]"
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
        role="button"
        tabIndex={0}
      >
        <Upload className="mx-auto mb-2 h-8 w-8 text-[#9ca3af]" strokeWidth={1.5} />
        <p className="text-sm text-[#5a6472]">
          {uploading ? "Uploading..." : "Click to upload image"}
        </p>
        <p className="mt-1 text-xs text-[#9ca3af]">JPG, PNG, WebP — max 10MB</p>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) void handleFile(file);
          e.target.value = "";
        }}
      />

      <div className="mt-2">
        <input
          className="admin-input text-xs"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Or paste image URL"
        />
      </div>

      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
