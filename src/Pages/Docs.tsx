import React from 'react';
import ModalComponents from '../components/Modal';
import { loginwithgoogle } from "../API/Auth";
import useCheckAuth from '../Hooks/useCheckAuth';
import Document from '../components/Document';

const  Docs: React.FC = () => {
    const handlelogin = () => {
        loginwithgoogle ()
    };

    let { isAuthenticated, userData } = useCheckAuth();
    console.log( userData)
    
  return (
    <div className='docs-container'>
      {!isAuthenticated ? (
      <ModalComponents 
        title='Login with Google' 
        handlelogin={handlelogin}
        >
       </ModalComponents>
      ): (
       <>
       <Document photoURL={userData?.photoURL}/>
       
       </>
       )}
    </div>
  )
}

export default Docs;
