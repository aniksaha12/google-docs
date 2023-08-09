import React from 'react';
import ModalComponents from '../components/Modal';
import { loginwithgoogle } from "../API/Auth";
import useCheckAuth from '../Hooks/useCheckAuth';
import Topbar from '../components/Topbar';

const  Docs: React.FC = () => {
    const handlelogin = () => {
        loginwithgoogle ()
    };

    let { isAuthenticated, userData } = useCheckAuth();
    console.log( userData)
    
  return (
    <div className='docs-container'>
      {!isAuthenticated ? <ModalComponents 
        title='Login with Google' 
        handlelogin={handlelogin}
        >
       </ModalComponents>: 
       <>
       <Topbar photoURL={userData?.photoURL}/>
       </>
       }
    </div>
  )
}

export default Docs;
