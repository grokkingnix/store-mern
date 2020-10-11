import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';

function ProductScreen({match}) {
    const product = products.find(p => p._id === match.params.id);
    return (
	<React.Fragment>
	    <Link className="btn btn-light my-3" to="/">Go Back</Link>
	    <Row>
		<Col md={6}>
		    <Image src={product.image[0]} alt={product.name} fluid/>
		</Col>
		<Col md={3}>
		    <ListGroup variant="flush">
			<ListGroup.Item>
			    <h3>{product.name}</h3>
			</ListGroup.Item>
			<ListGroup.Item>
			    <Rating value={product.rating} text={`${product.reviews} reviews`}/>
			</ListGroup.Item>
			<ListGroup.Item>
			    Price: ${product.price}
			</ListGroup.Item>
			<ListGroup.Item>
			    Description: ${product.description}
			</ListGroup.Item>
		    </ListGroup>
		</Col>
		<Col md={3}>
		    <Card>
			<ListGroup variant="flush">
			    <ListGroup.Item>
			        <Row>
				   <Col>
			    	       Price:
			    	   </Col>
			    	   <Col className="productPrice">
			    	       ${product.price}
			    	   </Col>
			        </Row>
			    </ListGroup.Item>
			    <ListGroup.Item>
			        <Row>
				   <Col>
				       Status:
			    	   </Col>
			    	   <Col>
				       {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
			    	   </Col>
			        </Row>
			    </ListGroup.Item>
			    <ListGroup.Item>
				<Button className="btn-block" type="button" disabled={product.stock === 0}>
				    Add to Cart
				</Button>
			    </ListGroup.Item>
			</ListGroup>
		    </Card>
		</Col>
	    </Row>
	    <Row>
		<Col md={6}>
		<Image className="thumbnail" md={1} src={product.image[0]} fluid/>
		<Image className="thumbnail" md={1} src={product.image[1]} fluid/>
		<Image className="thumbnail" md={1} src={product.image[2]} fluid/>
		<Image className="thumbnail" md={1} src={product.image[3]} fluid/>
		<Image className="thumbnail" md={1} src={product.image[4]} fluid/>
		    </Col>
	    </Row>
	</React.Fragment>
    )
}

export default ProductScreen;
