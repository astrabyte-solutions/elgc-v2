"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

const QuillEditorInner = dynamic(() => import("./QuillEditorInner"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-[420px] items-center justify-center rounded border border-[#ccc] bg-[#fafbfc] text-sm text-[#9ca3af]">
      Loading editor...
    </div>
  ),
});

export function QuillEditor({
  value,
  onChange,
  placeholder,
  className,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}) {
  const key = useMemo(() => "quill-editor", []);
  return (
    <QuillEditorInner
      key={key}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
}
