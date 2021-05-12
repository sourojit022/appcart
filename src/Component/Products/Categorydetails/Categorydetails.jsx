import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subcatagory } from "../../../Actions/Product.action";
import { Card,Container,Row,Button,Col,Image} from 'react-bootstrap';
import {Link  } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { productdetails } from "../../../Actions/Product.action";

export default function Categorydetails({ match }) {
  let cdetails = match.params.cname;
  console.log(cdetails);
  const DispatchMethod = useDispatch();

  const ProductCategory2 = useSelector((state) => state.Productdata);
  // const product = ProductCategory2.pdata

  console.log(ProductCategory2);
   useEffect(() => {
    DispatchMethod(subcatagory(cdetails));
  }, [DispatchMethod]);

  
  
  return (
    <div>
        {/* {ProductCategory2.Specific_Categorydat.map((e)=> (
           <Col lg="6">
           <h3> { e.id}</h3>
           </Col>
           ))} 
          */}
        
        
        <section id="sectionppp1">
         <Container>
           <Row>
           <Col lg="6">
             <h3>{cdetails}</h3>
           </Col>
           <Col lg="6">
           <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" as={Link} to='/Home'  id="linkheadC">
        Home
      </Link>
     
      <Typography color="textPrimary">Products</Typography>
    </Breadcrumbs>
           </Col>

           </Row>
         </Container>
         </section>



        <Container>
            <Row>
      {ProductCategory2.Specific_Categorydat.map((e)=> (
        <Col md='4'>
         
        <Card id="cardcat1">
          <Card.Img variant="top" src={e.image}  id="cardimg1"/>
          <Card.Body>
            
            <Card.Title id="card-title">{e.title}</Card.Title>
            <Card.Title>Price:{e.price}$   <Image src="data:image/png;base64,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" id="startimg" />     </Card.Title>
           
            <Row>
              
           
            <Col lg="6">
              <Link to={`/ProductDetails/${e.id}`} id="catlink1">
              <Button variant="secondary" id="btn4">Details</Button>
            
            </Link>
            </Col>
            </Row>
          
          </Card.Body>
        </Card>
        
        </Col>
       
      ))}
      </Row>
      </Container>
    </div>
  );
}
