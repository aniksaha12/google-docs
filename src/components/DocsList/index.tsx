import "./index.scss";
import { getDocuments } from "../../API/Firestore";
import { useEffect, useState} from "react";

type OpenDocType = {
    openDoc: (id: string) => void;
}

export default function DocsList({openDoc}: OpenDocType) {

    const[docs, setDocs] = useState([{
        id: '',
        username: '',
        value: '',
    }]);

    const getDocs = async () => {
        await getDocuments(setDocs);
    };

    useEffect(()=> {
        getDocs();
    }, []);

  return (
    <div className="doc-main">
      {docs.map((doc) => {
        return <div onClick={()=> openDoc(doc.id)} className="doc-cart">{docs.value}</div>
      })}
    </div>
  )
}
