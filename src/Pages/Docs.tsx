import React from 'react';
import ModalComponents from '../components/Modal';
import { loginwithgoogle } from "../API/Auth";

const  Docs: React.FC = () => {
    const handlelogin = () => {
        loginwithgoogle ()
    }
  return (
    <div className='docs-container'>
      <ModalComponents 
        title='Login with Google' 
        handlelogin={handlelogin}
        >
       </ModalComponents>
    </div>
  )
}

export default Docs;
