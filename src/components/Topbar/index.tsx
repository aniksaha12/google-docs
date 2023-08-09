
import "./index.scss";
import docs_img from "../../assets/docs_img.png";

type TopbarProps = {
    photoURL: string;
}

export default function Topbar({photoURL}: TopbarProps) {
  return (
    <div className='top-bar'>
        <img src={docs_img}/>
        <p className="top-title"></p>
      <img className="top-image" src={photoURL}/>
    </div>
  )
}
