import type Quill from "quill";

type QuillConstructor = typeof Quill;

export function createImageHandler(quill: Quill) {
  return () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/jpeg,image/png,image/webp,image/gif");
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("file", file);

      try {
        const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Upload failed");

        const range = quill.getSelection(true);
        const index = range?.index ?? quill.getLength();
        quill.insertEmbed(index, "image", data.url, "user");
        quill.setSelection(index + 1);
      } catch (err) {
        console.error(err);
        alert("Image upload failed. Please try again.");
      }
    };
  };
}

export const FULL_TOOLBAR = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ size: ["small", false, "large", "huge"] }],
  ["bold", "italic", "underline", "strike"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ align: [] }],
  ["blockquote", "code-block"],
  ["link", "image", "video"],
  ["clean"],
] as const;

export function registerImageResize(QuillClass: QuillConstructor) {
  class ImageResizeModule {
    quill: Quill;
    overlay: HTMLDivElement | null = null;
    handle: HTMLDivElement | null = null;
    activeImg: HTMLImageElement | null = null;
    startX = 0;
    startWidth = 0;
    dragging = false;

    constructor(quill: Quill) {
      this.quill = quill;
      this.onEditorClick = this.onEditorClick.bind(this);
      this.onDocumentClick = this.onDocumentClick.bind(this);
      this.onMouseDown = this.onMouseDown.bind(this);
      this.onMouseMove = this.onMouseMove.bind(this);
      this.onMouseUp = this.onMouseUp.bind(this);

      quill.root.addEventListener("click", this.onEditorClick);
      document.addEventListener("mousedown", this.onDocumentClick);
      document.addEventListener("mousedown", this.onMouseDown);
      document.addEventListener("mousemove", this.onMouseMove);
      document.addEventListener("mouseup", this.onMouseUp);
    }

    onEditorClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.tagName === "IMG") {
        e.preventDefault();
        this.selectImage(target as HTMLImageElement);
      }
    }

    onDocumentClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (
        this.activeImg &&
        target !== this.activeImg &&
        !this.overlay?.contains(target) &&
        !this.handle?.contains(target)
      ) {
        this.clearSelection();
      }
    }

    selectImage(img: HTMLImageElement) {
      this.clearSelection();
      this.activeImg = img;
      img.classList.add("ql-image-selected");

      const parent = this.quill.root.parentElement;
      if (!parent) return;
      parent.style.position = "relative";

      const rect = img.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();

      this.overlay = document.createElement("div");
      this.overlay.className = "ql-image-resize-overlay";
      this.overlay.style.left = `${rect.left - parentRect.left + parent.scrollLeft}px`;
      this.overlay.style.top = `${rect.top - parentRect.top + parent.scrollTop}px`;
      this.overlay.style.width = `${rect.width}px`;
      this.overlay.style.height = `${rect.height}px`;

      this.handle = document.createElement("div");
      this.handle.className = "ql-image-resize-handle";
      this.overlay.appendChild(this.handle);
      parent.appendChild(this.overlay);
    }

    clearSelection() {
      if (this.activeImg) {
        this.activeImg.classList.remove("ql-image-selected");
        this.activeImg = null;
      }
      this.overlay?.remove();
      this.overlay = null;
      this.handle = null;
    }

    onMouseDown(e: MouseEvent) {
      if (e.target === this.handle) {
        e.preventDefault();
        this.dragging = true;
        this.startX = e.clientX;
        this.startWidth = this.activeImg?.width ?? this.activeImg?.clientWidth ?? 200;
      }
    }

    onMouseMove(e: MouseEvent) {
      if (!this.dragging || !this.activeImg || !this.overlay) return;
      const delta = e.clientX - this.startX;
      const newWidth = Math.max(120, this.startWidth + delta);
      this.activeImg.setAttribute("width", String(Math.round(newWidth)));
      this.activeImg.style.width = `${newWidth}px`;
      this.activeImg.style.height = "auto";

      const parent = this.quill.root.parentElement;
      if (!parent) return;
      const rect = this.activeImg.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();
      this.overlay.style.width = `${rect.width}px`;
      this.overlay.style.height = `${rect.height}px`;
      this.overlay.style.left = `${rect.left - parentRect.left + parent.scrollLeft}px`;
      this.overlay.style.top = `${rect.top - parentRect.top + parent.scrollTop}px`;
    }

    onMouseUp() {
      this.dragging = false;
    }
  }

  QuillClass.register("modules/imageResize", ImageResizeModule);
}
