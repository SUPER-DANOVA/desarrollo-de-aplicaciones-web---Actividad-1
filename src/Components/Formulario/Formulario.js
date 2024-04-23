import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.scss';


function Formulario() {
  return (

    <Form className='form-row align-items-center'>

      <Form.Group  controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <br></br>
      <div className="d-grid gap-2 col-6 mx-auto">
        <Button variant="primary" type="submit" className='rounded-pill btn-info btn-formulario'>
          ADD GOAL
        </Button>
      </div>
    </Form>
    
  );
}

export default Formulario;