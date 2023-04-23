import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import '..//Styles/book-card.css' //css importato per le immagini delle card
import React, {useState} from 'react'


const SingleCard = ({ title, asin, img, catogory, price }) => { //destrutturiamo l'oggetto

    const [selected, setSelected] = useState(false);
    //funzione che permette di effettuare il toggle (mette lo stato selected al contrario di quello dichiarato)
    //console.log(selected);
    const toggleSelected = () => {
        setSelected(!selected)
    }

    return (
        <Card 
            className={`${selected ? 'border border-danger shadow' :null}`} //se è selezionato bordo rosso altrimenti null
            style={{ width: '18rem' }} onClick={toggleSelected}>
            <Card.Img className="object-fit-cover w-100 book-card" variant="top" src={img} />
            <Card.Body>
                <Card.Title as='h6'>{asin}</Card.Title>
                <Card.Title className="text-truncate">{title}</Card.Title>
                <Card.Text>{catogory}</Card.Text>
                <Card.Text>{price}</Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
        </Card>
    )
}

export default SingleCard;