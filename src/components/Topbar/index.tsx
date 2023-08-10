
import "./index.scss";
import docs_img from "../../assets/docs_img.png";


export default function Topbar({photoURL}: TopbarProps) {
  return (
    <div className='top-bar'>
      <div className="topbar-left">
        <img className="docs-icon" src={docs_img}/>
        <p className="top-title">Docs</p>
      </div>
      <img className="top-image" src={photoURL}/>
    </div>
  )
}
