import { Button, Form, FormGroup } from "react-bootstrap";
//import React
import style from "./ComContractForm.module.css"

function ContractForm(){
    return (
        <Form className={style.formbox}>
            <FormGroup>
                <Form.Label className={style.formtitle}>Get in Touch</Form.Label>
            </FormGroup>
                <Form.Group className={style.formgroup}  controlId="exampleForm.ControlInput1">
                    <Form.Label className={style.titleDetail}>Name</Form.Label>
                    <Form.Control className={style.inputForm} type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className={style.formgroup} controlId="exampleForm.ControlInput1">
                    <Form.Label className={style.titleDetail}>Email</Form.Label>
                    <Form.Control className={style.inputForm} type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className={style.formgroup} controlId="exampleForm.ControlInput1">
                    <Form.Label className={style.titleDetail}>Number</Form.Label>
                    <Form.Control className={style.inputForm} type="number" placeholder="Your Phone number" />
                </Form.Group>
                <Form.Group className={style.formgroup} controlId="exampleForm.ControlTextarea1">
                    <Form.Label className={style.titleDetail}>Message</Form.Label>
                    <Form.Control className={style.textbox} as="textarea" rows={10} cols={87} />
                </Form.Group>
                <FormGroup>
                    <Button className={style.BtnSubmit}>Submit</Button>
                </FormGroup>
        </Form>
    )
}

export default ContractForm;