import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCate } from "../../../Actions/Product.action";
import { Container, Row, Col,Card,Button,Image,Carousel } from "react-bootstrap";
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Link from '@material-ui/core/Link';

function handleClick(event) {
  event.preventDefault("./home");
  console.info('You clicked a breadcrumb.');
}



<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>





export default function Productcategory() {
  const DispatchMethod = useDispatch();
  const ProductCategory = useSelector((state) => state.Productdata);
  console.log(ProductCategory);
  useEffect(() => {
    DispatchMethod(ProductCate());
  },[]);



  
  return (
   
   
   <div>
               <section>
               <Carousel className="Carausel1"  >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://c.s-microsoft.com/en-us/CMSImages/1920_Panel01_Hero_FamilyDevices_V2.jpg?version=e08e2f88-b8bc-6568-ca7e-75fe1ebf3905"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="cheading">Upto 70% OFF</h3>
      <p  className="cpara">Electronics</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://c0.wallpaperflare.com/preview/984/867/753/jewellery-gold-wedding-indian.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="cheading">30% OFF</h3>
      <p  className="cpara">All type jewelery</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.hipwallpaper.com/i/96/56/cKY4xO.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="cheading">Upto 50% OFF</h3>
      <p  className="cpara">men's clothing</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://fashion.luxury/wp-content/uploads/2018/06/6-Womens-Clothing-Boutiques-in-New-York-City-fashion-feature-1024x581.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="cheading">Upto 60% OFF</h3>
      <p className="cpara">women's clothing</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
               </section>
         
         <section id="sectionppp1">
         <Container>
           <Row>
           <Col lg="6">
             <h3>Product Catagory</h3>
           </Col>
           <Col lg="6">
           <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" as={Link} to='/Home'  id="linkheadC">
        Home
      </Link>
     
      <Typography color="textPrimary">Product Catagory</Typography>
    </Breadcrumbs>
           </Col>

           </Row>
         </Container>
         </section>
         
        
        
        
        <Container>
       <Row>
            
            
      {ProductCategory.AllCategories.map((e) => (
        <Col lg="6">
        <Card  id="paductcatcard">
        <Card.Img  variant="top" />
        <Card.Body>
          <Card.Title>{e}</Card.Title>
         
          <Link to={`/Categorydetails/${e}`}>
           <Button variant="primary">Click</Button>
          </Link>
        </Card.Body>
      </Card>
      </Col>
       ))}
       
      </Row>
        </Container>
    </div>
  );
}
