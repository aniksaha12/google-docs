import React from 'react';
import '../Document/index.scss';
import Topbar from '../Topbar';

export default function Document({photoURL} : TopbarProps) {
  return (
    <div>
      <Topbar photoURL={photoURL}/>
    </div>
  )
}
