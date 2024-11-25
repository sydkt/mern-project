import React,{useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import uploadProImg from '../assets/uploadProImg.jpg'

const Edit = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const Show = () => setShow(true);
  return (
    <>
      <button className="btn"><i className="fa-solid.fa-edit"></i></button>
      <Modal size='lg' centered show={Show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Project Details.!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-4">
         <label>
            <input style={{display:'none'}} type="file" />
            <img width={'200px'} height={'200px'} className='rounded-circle py-2' src={uploadProImg} alt="" />
          </label>
          <div className="text-info fw-bolder">

          </div>
          <div className="col-lg-8">
            <div className="mb-2">
              <input type="text" className='form-control' />
            </div>
          </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel </Button>
          <Button variant="primary">
            Update </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit