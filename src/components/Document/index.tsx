import './index.scss';
import Topbar from '../Topbar';
import CreateDoc from '../CreateDoc';
import DocsList from '../DocsList';
import { useState } from 'react';

export default function Document({photoURL} : TopbarProps) {

  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState("");

  const openDoc = (id: string) => {
    setIsEdit(true);
    setId(id);
  }

  const handleEdit = () => {
      setIsEdit(!isEdit);
  };

  return (
    <div>
      <Topbar photoURL={photoURL}/>
      <CreateDoc isEdit={isEdit} handleEdit={handleEdit} id= {id} />
      { isEdit ? <></> : <DocsList openDoc={openDoc}/>}
    </div>
  )
}


