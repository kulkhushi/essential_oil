import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

 type ShowModalTypes={
    showModal:boolean,    
    sethandleClose:()=>void,
    sethandleOpen?:()=>void,
    children:React.ReactNode,
  };

const ModalContainer=({showModal,sethandleClose,children}:ShowModalTypes)=>{
  const [show, setShow] = useState(showModal);


 // const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
        show={showModal}
        onHide={sethandleClose}
        backdrop="static"
        keyboard={false}
      >
        {children}
      </Modal>
    </>
  );
}

export default ModalContainer;