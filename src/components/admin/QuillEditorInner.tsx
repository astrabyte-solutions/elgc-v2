"use client";

import { useEffect, useRef } from "react";
import "quill/dist/quill.snow.css";
import {
  createImageHandler,
  FULL_TOOLBAR,
  registerImageResize,
} from "@/lib/admin/quill-config";

export default function QuillEditorInner({
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
  const containerRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<import("quill").default | null>(null);
  const onChangeRef = useRef(onChange);
  const initialValueRef = useRef(value);

  onChangeRef.current = onChange;

  useEffect(() => {
    if (!containerRef.current || quillRef.current) return;

    let mounted = true;

    void import("quill").then(({ default: Quill }) => {
      if (!mounted || !containerRef.current || quillRef.current) return;

      registerImageResize(Quill);

      const editor = new Quill(containerRef.current, {
        theme: "snow",
        placeholder: placeholder ?? "Write your content...",
        modules: {
          toolbar: {
            container: FULL_TOOLBAR,
            handlers: {
              image: function (this: { quill: import("quill").default }) {
                createImageHandler(this.quill)();
              },
            },
          },
          imageResize: true,
        },
      });

      if (initialValueRef.current) {
        editor.clipboard.dangerouslyPasteHTML(initialValueRef.current);
      }

      editor.on("text-change", () => {
        onChangeRef.current(editor.root.innerHTML);
      });

      quillRef.current = editor;
    });

    return () => {
      mounted = false;
    };
  }, [placeholder]);

  useEffect(() => {
    const editor = quillRef.current;
    if (!editor || value === editor.root.innerHTML) return;
    if (document.activeElement === editor.root || editor.root.contains(document.activeElement)) {
      return;
    }
    editor.clipboard.dangerouslyPasteHTML(value || "");
  }, [value]);

  return (
    <div className={`admin-quill admin-quill--full ${className ?? ""}`}>
      <div ref={containerRef} />
    </div>
  );
}
