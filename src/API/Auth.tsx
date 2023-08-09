
import { auth } from  "../firebaseConfig";
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';

let provider = new GoogleAuthProvider;

export const loginwithgoogle =  () => {
    signInWithPopup(auth , provider) 
    .then((response) => {
        const user = response.user;
        console.log(user);
    })
};

