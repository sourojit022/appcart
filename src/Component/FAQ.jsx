import React from 'react'
import { Container, Row, Col,Card,Button,Image,Carousel,Accordion } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';


import { BsFillFlagFill } from "react-icons/bs";
import {GiPriceTag} from "react-icons/gi";
import {FaStoreAlt} from "react-icons/fa";
import {MdDataUsage} from "react-icons/md";
import {RiGuideLine} from "react-icons/ri";










export default function FAQ() {
    return (
        <div>
            <Image src="https://www.actis.co.in/wp-content/uploads/2015/01/FAQ-banner.jpg" fluid />
             
            <section id="sectionppp1">
         <Container>
           <Row>
           <Col lg="6">
             <h3>FAQ</h3>
           </Col>
           <Col lg="6">
           <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" as={Link} to='/Home'  id="linkheadC">
        Home
      </Link>
     
      <Typography color="textPrimary">FAQ</Typography>
    </Breadcrumbs>
           </Col>

           </Row>
         </Container>
         </section>

       
               

              <Container>
                <Row>
                  <Col lg="2">
                  <div class="card" >
  <div class="card-body">
      <BsFillFlagFill/>  <h5 class="card-title">Getting Started</h5>
    
    
  </div>
</div>
                 </Col>
                  <Col lg="2">
                  <div class="card" >
  <div class="card-body">
       <GiPriceTag/>         <h5 class="card-title">Pricing & Plans</h5>
    
    
  </div>
</div>
                 </Col>
                  <Col lg="2">
                  <div class="card" >
  <div class="card-body">
      <FaStoreAlt/>         <h5 class="card-title">Sales Question</h5>
    
    
  </div>
</div>
                 </Col>
                  <Col lg="2">
                  <div class="card" >
  <div class="card-body">
     <MdDataUsage/>           <h5 class="card-title">Usage Guides</h5>
    
    
  </div>
</div>
                 </Col>
                  <Col lg="2">
                  <div class="card" >
  <div class="card-body">
     <RiGuideLine/>       <h5 class="card-title">General Guide</h5>
    
    
  </div>
</div>
                 </Col>
                </Row>
              </Container>



































         <Container>
            <Accordion id="faqA">
  
    <Card.Header id="faqAc">
      <Accordion.Toggle as={Button} variant="link" eventKey="0" id="faqb">
        What Shipping methods are available?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad eius sequi placeat maiores. Sed nam, eligendi minus aut voluptatum temporibus rerum ipsum reprehenderit exercitationem! Odio quod consequuntur sint molestiae explicabo!     </Card.Body>
    </Accordion.Collapse>
  
 
    <Card.Header id="faqAc">
      <Accordion.Toggle as={Button} variant="link" eventKey="1" id="faqb">
      What are shipping times and cost?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad eius sequi placeat maiores. Sed nam, eligendi minus aut voluptatum temporibus rerum ipsum reprehenderit exercitationem! Odio quod consequuntur sint molestiae explicabo!</Card.Body>
    </Accordion.Collapse>
    
    <Card.Header id="faqAc">
      <Accordion.Toggle as={Button} variant="link" eventKey="2" id="faqb">
      What payment methods can i use?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad eius sequi placeat maiores. Sed nam, eligendi minus aut voluptatum temporibus rerum ipsum reprehenderit exercitationem! Odio quod consequuntur sint molestiae explicabo!</Card.Body>
    </Accordion.Collapse>
    
    <Card.Header id="faqAc">
      <Accordion.Toggle as={Button} variant="link" eventKey="3" id="faqb">
      Can i use my own domain name?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad eius sequi placeat maiores. Sed nam, eligendi minus aut voluptatum temporibus rerum ipsum reprehenderit exercitationem! Odio quod consequuntur sint molestiae explicabo!</Card.Body>
    </Accordion.Collapse>
    
    
    
    
    
 
</Accordion>
</Container>
           
            
        </div>
    )
}
