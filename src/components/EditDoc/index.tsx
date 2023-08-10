import React, {useState} from "react";
import "./index.scss";
import {BiArrowBack} from "react-icons/bi";
import ReactQuill from 'react-quill';

export default function EditDoc({handleEdit}: functionInterface) {

    const [value, setValue] = useState('');

  return (
    <div className="edit-container">
      <BiArrowBack onClick={handleEdit} size={30} className="react-icons"/>
      <div className="quill-container">
      <ReactQuill className="react-quill" theme="snow" value={value} onChange={setValue} />
      </div>
    </div>
  )
}
