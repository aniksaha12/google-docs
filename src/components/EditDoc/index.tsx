import React, {useState, useRef, useEffect} from "react";
import "./index.scss";
import {BiArrowBack} from "react-icons/bi";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "../../Toolbar";

export default function EditDoc({handleEdit}: functionInterface) {

    let quillRef = useRef<any>(null);

    const [value, setValue] = useState('');

    useEffect(() => {
        quillRef.current.focus()
    }, [])

  return (
    <div className="edit-container">
      <BiArrowBack onClick={handleEdit} size={30} className="react-icons"/>
      <div className="quill-container">
      <EditorToolbar/>
      <ReactQuill 
        className="react-quill" 
        theme="snow" 
        value={value} 
        ref={quillRef} 
        onChange={setValue} 
        modules={modules}
        formats={formats}
        />
      </div>
    </div>
  )
}