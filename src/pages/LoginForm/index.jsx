//import react bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
//import react hook
import { useState } from 'react';
// import css
import style from './Loginform.module.css';
// import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faGoogle} from '@fortawesome/free-brands-svg-icons';



function LoginForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
<div>
      <h5 className={style.loginBtn} onClick={handleShow}>Login</h5>

      <Modal show={show} onHide={handleClose} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title >Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-4'>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className={style.formlabel}>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your email"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label className={style.formlabel}>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Your password"
                autoFocus
              />
            </Form.Group>
            <Button className={style.viewmoreBtn}>Login</Button>
            <h6 className={style.Ortext}>Or</h6>
            <div className={style.socialBtn}>
              <Button className={style.facebookBtn}>
                <FontAwesomeIcon icon={faFacebook} className={style.iconBtn}/>
                Facebook</Button>
              <Button className={style.googleBtn}>
                <FontAwesomeIcon icon={faGoogle} className={style.iconBtn}/>
                Google</Button>
            </div>
            <div className={style.swapLogin}>
              <h6 className={style.LoginText}>Don't have account?</h6>
              <span className={style.Regisswap}>Create here</span>
            </div>
          </Form>
        </Modal.Body>
        
      </Modal>
    </div>
  );
}

export default LoginForm;