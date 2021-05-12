import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col,Card,Button,Image,Carousel } from "react-bootstrap";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
export default function Help() {
    return (
        <div>
            <section id="sectionppp1">
         <Container>
           <Row>
           <Col lg="6">
             <h3>Help </h3>
           </Col>
           <Col lg="6">
           <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" as={Link} to='/Home' id="linkheadC">
        Home
      </Link>
     
      <Typography color="textPrimary">Help</Typography>
    </Breadcrumbs>
           </Col>

           </Row>
         </Container>
         </section>
           
            <section id="helpbody">
            <h2 >your queries please describe</h2>
            <html>
  <head>
    <title>Awesome Search Box</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"/>
  </head>
  {/* <!-- Coded with love by Mutiullah Samim--> */}
  <body>
    <div class="container h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="searchbar">
          <input class="search_input" type="text" name="" placeholder="Search..."/>
          <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
        </div>
      </div>
    </div>
  </body>
</html>
</section>
        </div>
    )
}
