import React, { useState } from 'react';
import { Button } from 'antd';

type ModalProps = {
    title : string;
    handlelogin: () => void;
}

const ModalComponents: React.FC<ModalProps> = ({
    title, 
    handlelogin
}: ModalProps) => {
    

  return (
    <>
      <Button size='large' type="primary" onClick={handlelogin}>
        {title}
      </Button>
    </>
  );
};

export default ModalComponents;