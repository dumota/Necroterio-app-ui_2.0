"use client";

import { useCallback, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

// Polyfill para findDOMNode no React 19 (necessário para react-quill)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ReactDOMAny = ReactDOM as any;
if (!ReactDOMAny.findDOMNode && typeof window !== "undefined") {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ReactDOMAny.findDOMNode = function (instance: any): Element | Text | null {
    if (instance == null) {
      return null;
    }
    
    // Se já é um elemento DOM
    if (instance.nodeType === 1 || instance.nodeType === 3) {
      return instance;
    }
    
    // Tentar encontrar através da árvore de fibers do React
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fiber = (instance as any)._reactInternalFiber || (instance as any)._reactInternalInstance;
    
    if (fiber) {
      let node = fiber;
      while (node) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const stateNode = (node as any).stateNode;
        if (stateNode) {
          if (stateNode.nodeType === 1 || stateNode.nodeType === 3) {
            return stateNode;
          }
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        node = (node as any).return || (node as any)._return;
      }
    }
    
    // Tentar através de refs diretos
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((instance as any).ref && typeof (instance as any).ref === "object") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const refCurrent = (instance as any).ref.current;
      if (refCurrent && (refCurrent.nodeType === 1 || refCurrent.nodeType === 3)) {
        return refCurrent;
      }
    }
    
    return null;
  };
}

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { checkImage, ImageUpload } from "@/services/ImageUploadService";
import { toast } from "sonner";

interface IProps {
  setBody: (value: string) => void;
  body: string;
}

const Quill = (props: IProps) => {
  const quillRef = useRef<ReactQuill>(null);
  const modules = { toolbar: { container } };

  const handleChange = (e: string) => {
    props.setBody(e);
  };

  //custom to images
  const handleChangeImage = useCallback(() => {
    if (typeof document === "undefined") return;
    
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();

    input.onchange = async () => {
      const files = input.files;
      if (!files) return toast.error("File does not exist.");

      const file = files[0];
      const check = checkImage(file);

      if (check) return toast.error(check);

      toast.loading("Uploading image...");

      const photo = await ImageUpload(file);
      const quill = quillRef.current;
      const range = quill?.getEditor().getSelection()?.index;
      if (range !== undefined) {
        quill?.getEditor().insertEmbed(range, "image", `${photo.url}`);
      }
    };
  }, []);

  useEffect(() => {
    const quill = quillRef.current;
    if (!quill) return;

    const toolbar = quill.getEditor().getModule("toolbar");
    toolbar.addHandler("image", handleChangeImage);
  }, [handleChangeImage]);

  return (
    <div className="react-quill-wrapper w-full">
      <ReactQuill
        theme="snow"
        modules={modules}
        placeholder="write somethings"
        onChange={handleChange}
        ref={quillRef}
        value={props.body}
      />
    </div>
  );
};

const container = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["link", "image", "video"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"],
  // remove formatting button
];

export default Quill;
