import React from 'react'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Button,Carousel, Container,Row,Col,Card,Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';




import { GiWorld } from "react-icons/gi";
import { AiOutlineCheck} from "react-icons/ai";
export default function About() {
    return (
        <div>
            <section id="sectionppp1">
         <Container>
           <Row>
           <Col lg="6">
             <h3>About Us</h3>
           </Col>
           <Col lg="6">
           <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" as={Link} to='/Home'  id="linkheadC">
        Home
      </Link>
     
      
  <Typography color="textPrimary">About</Typography>
    </Breadcrumbs>
           </Col>

           </Row>
         </Container>
         </section>

            <section id="about2">
                <Container>
                  <Row>
                     <Col lg="6"  xs={6}>
 <Image src="https://livani-react.envytheme.com/_next/static/images/about1-a718ab6bf0ecaa2f6fedc3ae7a3edb1d.jpg" roundedCircle />
                        </Col>
                     <Col lg="6"  xs={6}>
                            <h2>Souro's cartTrusted Online Shopping Site in the World</h2>
                            <p>Souro's cart.com offers you flexible and responsive shopping experience.

Dipta is an eCommerce website which features millions of products, i.e. clothes, shoes, bags, electronic items and much more, with all at incredible prices.

One of the most popular on the web is shopping. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              <h2> <GiWorld/>Ships to more than 10 countries and regions</h2>
                              <p>We provide customers with a hassle-free and worry-free international shopping experience from buying to delivery.</p>
                        </Col>
                   </Row>
                   </Container>
                 </section>
 
              <section id="part1CU">
                <Container>
                <Row>
                <Col lg="4">
                    <h2>Our Story</h2>
                    <hr />
                    <p>One of the most popular on the web is shopping.</p>
                   
                    <h6><AiOutlineCheck/>  People like Livani</h6>
                      <h6> <AiOutlineCheck/> World's finest Livani</h6>
                     <h6> <AiOutlineCheck/> The original Livani</h6>
                    <h6> <AiOutlineCheck/> We trust Livani</h6>
                </Col>
                <Col lg="4">
                    <h2>Our Values</h2>
                    <hr />
                    <p>The best of both worlds. Store and web.</p>
                   
                    <h6><AiOutlineCheck/>  Always in style!</h6>
                      <h6> <AiOutlineCheck/> Discover your favorite shopping</h6>
                     <h6> <AiOutlineCheck/> The original Livani</h6>
                    <h6> <AiOutlineCheck/> We trust Livani</h6>
                </Col>
                <Col lg="4">
                    <h2>Our Story</h2>
                    <hr />
                    <p>One of the most popular on the web is shopping.</p>
                   
                    <h6><AiOutlineCheck/>  People like Livani</h6>
                      <h6> <AiOutlineCheck/> World's finest Livani</h6>
                     <h6> <AiOutlineCheck/> The original Livani</h6>
                    <h6> <AiOutlineCheck/> We trust Livani</h6>
                </Col>

                
                
                
                
                </Row>
                 </Container>
                </section>
           
           
           
                <section id="sectionppp1">
         <Container>
           <Row>
           <Col lg="6">
             <h3>People with us</h3>
           </Col>
           <Col lg="6">
           <Breadcrumbs aria-label="breadcrumb">
      
     
      
  <Typography color="textPrimary">Details</Typography>
    </Breadcrumbs>
           </Col>

           </Row>
         </Container>
         </section>
   
           
           
           
           <section>
            
            <Container>
                <Row>
               
               
           <figure class="snip1336">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
  <figcaption>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg" alt="profile-sample4" class="profile" />
    <h2>Hans Down<span>Engineer</span></h2>
    <p>I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...? </p>
    <a href="#" class="follow">Follow</a>
    <a href="#" class="info">More Info</a>
  </figcaption>
</figure>


 
<figure class="snip1336 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample74.jpg" alt="sample74" />
  <figcaption>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample2.jpg" alt="profile-sample2" class="profile" />
    <h2>Wisteria Widget<span>Photographer</span></h2>
    <p>Calvin: I'm a genius, but I'm a misunderstood genius. Hobbes: What's misunderstood about you? Calvin: Nobody thinks I'm a genius.</p>
    <a href="#" class="follow">Follow</a>
    <a href="#" class="info">More Info</a>
  </figcaption>
</figure>



<figure class="snip1336"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample69.jpg" alt="sample69" />
  <figcaption>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="profile-sample5" class="profile" />
    <h2>Desmond Eagle<span>Accountant</span></h2>
    <p>If you want to stay dad you've got to polish your image. I think the image we need to create for you is "repentant but learning".</p>
    <a href="#" class="follow">Follow</a>
    <a href="#" class="info">More Info</a>
  </figcaption>
</figure>

                
</Row>
</Container>
           </section>


















        </div>

       
    )
}
