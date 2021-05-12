import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import currencyFormatter from "currency-formatter";
import {BsDash, BsPlus} from "react-icons/bs";
import { BsReverseBackspaceReverse } from "react-icons/bs";
import { Container, Row, Col,Card,Button,Image,Carousel,Accordion } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";


import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
const Cart = () => {
const {products,totalqty,totalprice} = useSelector(state => state.CartData);


const dispatchMethod = useDispatch();

const history = useHistory();
const orderC=()=>{
  history.push("/Checkout")
}








return (
<div className="cart">

<section id="sectionppp1">
         <Container>
           <Row>
           <Col lg="6">
             <h3>Cart</h3>
           </Col>
           <Col lg="6">
           <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" as={Link} to='/Home' id="linkheadC" >
        Home
      </Link>
     
      <Link color="inherit" href="/getting-started/installation/"  as={Link} to='/Productcategory'  id="linkheadC">
    Continue Shopping
  </Link>
  <Typography color="textPrimary">Cart</Typography>
    </Breadcrumbs>
           </Col>

           </Row>
         </Container>
         </section>

<div className="container">
<h3>Your cart</h3>
{products.length > 0 ? <>
<div className="row">
<div className="col-9">
<div className="cart__heading">
<div className="row">
<div className="col-2">Picture</div>
<div className="col-2">Name</div>
<div className="col-2">Price</div>
<div className="col-2">Inc/Dec</div>
<div className="col-2">Total Price</div>
<div className="col-2">Remove</div>
</div>
</div>
{products.map(product => (
<div className="row verticalAlign" key={product.id}>
<div className="col-2">
<div className="cart__image">
<img src={product.image} alt=""/>
</div>
</div>
<div className="col-2">
<div className="cart__name">
{product.title}
</div>
<div className="cart__name">
{product.category}
</div>
</div>
<div className="col-2">
<div className="cart__price">
{currencyFormatter.format(product.price, {code: 'USD'})}
</div>
</div>
<div className="col-2">
<div className="details__info cart__incDec">
<div className="details__incDec">
<span className="dec" onClick={() => dispatchMethod({type: 'dec', payload: product.id})}><BsDash /></span>
<span className="quantity">{product.qty}</span>
<span className="inc" onClick={() => dispatchMethod({type: 'inc', payload: product.id})}><BsPlus/></span>
</div>
</div>
</div>
<div className="col-2">
<div className="cart__total text-center">
{currencyFormatter.format(product.price * product.qty, {code: 'USD'})}
</div>
</div>
<div className="col-2">
<div className="cart__remove" onClick={() => dispatchMethod({type: 'REMOVE', payload: product.id})}>
<BsReverseBackspaceReverse />
</div>
</div>
</div>
))}
</div>
<div className="col-3 summary-col">
<div className="summary">
<div className="summary__heading">
Summary
</div>
<div className="summary__details">
<div className="row mb-10">
<div className="col-6">
Total Items:
</div>
<div className="col-6">{totalqty}</div>
</div>
<div className="row mb-10">
<div className="col-6">
Total Price
</div>
<div className="col-6">
{currencyFormatter.format(totalprice, {code: 'USD'})}
</div>
</div>
<button type="button" className="checkout"  onClick={orderC} >Checkout</button>
</div>
</div>
</div>
</div>
</> : 'Your cart is empty!'}
</div>
</div>
)
}

export default Cart