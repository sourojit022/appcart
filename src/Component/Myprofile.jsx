import React from 'react'
import { Container, Row, Col,Card,Button,Image,Carousel } from "react-bootstrap";
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';







export default function Myprofile() {
    const user=(localStorage.getItem("full_name"))
    const user1=(localStorage.getItem("email"))
    return (
        <div>
           <section id="sectionppp1">
         <Container>
           <Row>
           <Col lg="6">
             <h3>My Profile</h3>
           </Col>
           <Col lg="6">
           <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" as={Link} to='/Home'  id="linkheadC">
        Home
      </Link>
     
      <Typography color="textPrimary">My Profile</Typography>
    </Breadcrumbs>
           </Col>

           </Row>
         </Container>
         </section>
                   
            {/* <Container>
              <Row>
                  <Col lg="12">
         <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
      {
          localStorage.getItem("full_name")?
          <>
    <Card.Title>  User Name:{user}    </Card.Title>
    <Card.Text>
              User Email:{user1}
    </Card.Text>
    </>
    : 
    null
         }
  </Card.Body>
</Card>
</Col>
</Row>
</Container>   */}











<div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center">
            <div class="col-xl-6 col-md-12">
                <div class="card user-card-full">
                    <div class="row m-l-0 m-r-0">
                        <div class="col-sm-4 bg-c-lite-green user-profile">
                            <div class="card-block text-center text-white">
                                <div class="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image"/> </div>
                                <Card.Title id="myprofiletitleM">  {user}    </Card.Title>
                                <p>Customer profile</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="card-block">
                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                {
          localStorage.getItem("full_name")?
          <>
    <Card.Title>  User Name:{user}    </Card.Title>
    <Card.Text>
              User Email:{user1}
    </Card.Text>
    </>
    : 
    null
         }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>













         
         </div>
    )
}


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

// export default function MediaCard() {
//   const user=(localStorage.getItem("full_name"))
//      const user1=(localStorage.getItem("email"))
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image="/static/images/cards/contemplative-reptile.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }