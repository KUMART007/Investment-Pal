import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const PostModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="success" size="lg" onClick={toggle}>{buttonLabel} Create a Post</Button>
      <Modal size="xl" isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Make a Post</ModalHeader>
        <ModalBody>
            <Form>
                <FormGroup >
                    <Label for="exampleText">Title</Label>
                    <Input />
                    <Label for="exampleText">Text Area</Label>
                    <Input style={{height: '200px'}} type="textarea" name="text" id="exampleText" />
                </FormGroup>
            </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="outline-success" onClick={toggle}>Post</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default PostModal;