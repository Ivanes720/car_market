import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import carddefault from '../../assetc/img/carddefault.png';
import classes from '../AdvertisementPage/cardPage.module.css'
function MediaCard() {
  return (
    <div className={classes.card_block}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={carddefault} />
      <Card.Body>
        <Card.Title>Bentley</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">1000$</Card.Subtitle>
        <Card.Text>
        Car from dealer
        </Card.Text>
        <Button variant="dark">More</Button>
        <Button variant="dark">Add busket</Button>
      </Card.Body>
    </Card>
    
    </div>
  );
}

export default MediaCard;