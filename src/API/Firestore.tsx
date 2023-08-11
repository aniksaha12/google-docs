
import { firestore, auth } from "../firebaseConfig";
import { addDoc, collection, doc , updateDoc } from "firebase/firestore";

let docs = collection(firestore, 'docs');

type payloadType = {
    value: string
}

export const createDoc = (payload: payloadType) => {
    addDoc(docs, {...payload, userName: auth.currentUser?.displayName});
}

export const editDoc = (payload: payloadType, id) => {
    let docToEdit = doc(docs, id)
    updateDoc(docToEdit, {...payload }, id);
}

