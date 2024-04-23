import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';
function Item() {
  return (
    <Card style={{ width: '35rem' }} className='text-center card-rounded'>
      <Card.Body>
      <Card.Text className='fw-bold'>
          Name
        </Card.Text>
        <Card.Text>Realizar Proyecto</Card.Text>
        <Card.Text className='fw-bold'>
          Description
        </Card.Text>
        <Card.Text>
          Elaborar proyecto del curso de DAW.
        </Card.Text>
        <div className="d-grid gap-2">
        <Button variant="info" className='size="lg" rounded-pill'>Remove</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Item;