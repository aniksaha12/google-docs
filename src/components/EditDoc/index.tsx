import React, {useState, useRef, useEffect} from "react";
import "./index.scss";
import {BiArrowBack} from "react-icons/bi";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "../../Toolbar";
import { editDoc } from "../../API/Firestore";


export default function EditDoc({handleEdit, id}: functionInterface) {

    let quillRef = useRef<any>(null);

    const [value, setValue] = useState('');
    const [title, setTitle] = useState("");

    function editDocument() {
      let payload = {
        value,
      }
      editDoc(payload, id)
    }

    useEffect (() => {
      const debounced = setTimeout(() => {
        editDocument();
      }, 2000 );

      return () => clearTimeout(debounced)

    }, [value])

    useEffect(() => {
        quillRef.current.focus()
    }, [])

  return (
    <div className="edit-container">
      <BiArrowBack onClick={handleEdit} size={30} className="react-icons"/>

      <input className="title-input" placeholder="Untitled" onChange={(event) => {setTitle(event.target.value)}} value={title}/>

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
