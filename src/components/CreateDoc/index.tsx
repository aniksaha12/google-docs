import React, {useState} from 'react';
import './index.scss';
import addDoc from "../../assets/addDoc.png";
import EditDoc from '../EditDoc';
import { createDoc } from '../../API/Firestore';


export default function CreateDoc() {

    const [isEdit, setIsEdit] = useState(false);

    const handleEdit = () => {
        setIsEdit(!isEdit);
    };

    const createDocument = async() => {
      try {
      let payload = {
        value: '',
      };
        await createDoc(payload);
      handleEdit();
    } catch (error) {
      console.log('Error creating doc', error);
    }

  };

    if(isEdit) return <EditDoc handleEdit={handleEdit}/>

  return (
    <div className='new-doc-container'>
        <div className='new-doc-inner'>
      <p>
        Start a new document
      </p>
      <img 
        className='start-doc' 
        src={addDoc} onClick={createDocument}/>
        <p className='title'>Blank</p>
      </div>
    </div>
  )
}
