import React from 'react'
import {Button,Carousel, Container,Row,Col,Card,Image} from 'react-bootstrap';
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";

import { GoLocation} from "react-icons/go";
import { FiPhoneCall} from "react-icons/fi";
import { AiOutlineMail} from "react-icons/ai";
import { AiFillFacebook} from "react-icons/ai";
import { TiSocialInstagram} from "react-icons/ti";
import { TiSocialTumbler} from "react-icons/ti";
import { TiSocialYoutube} from "react-icons/ti";
import { TiSocialSkype} from "react-icons/ti";




















































export default function Footer() {
  const history = useHistory();
  const contactus=()=>{
    history.push("/Contactus")
 }
  const About=()=>{
    history.push("/About")
 }
//   const =()=>{
//     history.push("/Contactus")
//  }




    return (
        <div>
             
             {/* <!-- Footer --> */}
<footer class="page-footer font-small stylish-color-dark pt-4">

  {/* <!-- Footer Links --> */}
  <div class="container text-center text-md-left">

    {/* <!-- Grid row --> */}
    <div class="row">

      {/* <!-- Grid column --> */}
      <div class="col-md-4 mx-auto">

        {/* <!-- Content --> */}
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">About The Store</h5>
        <p id="footertestP">One of the most popular on the web is shopping.</p>
                  <p id="footertestP"><GoLocation/>  4585  Pinnickinnick Street,New York</p>
                         <p id="footertestP"> <FiPhoneCall/>  518-466-7412 / 732-868-7566 </p>
                         <p id="footertestP"> <AiOutlineMail/> 39rpt9bn4q@temporary-mail.net</p>



      </div>
      {/* <!-- Grid column --> */}

    

      {/* <!-- Grid column --> */}
      <div class="col-md-2 mx-auto">

        {/* <!-- Links --> */}
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4" id="cardtitl">ABOUT</h5>

        <ul class="list-unstyled">
          <li>
            <a   onClick={contactus} id="cardlink1"  >Contact Us</a>
          </li>
          <li>
            <a id="cardlink1"  onClick={About}>About Us</a>
          </li>
          <li>
            <a  id="cardlink1">Career</a>
          </li>
          
        </ul>

      </div>
      {/* <!-- Grid column --> */}

    

      {/* <!-- Grid column --> */}
      <div class="col-md-2 mx-auto">

        {/* <!-- Links --> */}
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">HELP</h5>

        <ul class="list-unstyled">
          <li>
            <a  id="cardlink1">Payments</a>
          </li>
          <li>
            <a  id="cardlink1">Shipping</a>
          </li>
          <li>
            <a  id="cardlink1">Cancellation & Returns</a>
          </li>
         
        </ul>

      </div>
      {/* <!-- Grid column --> */}

     
      {/* <!-- Grid column --> */}
      <div class="col-md-2 mx-auto">

        {/* <!-- Links --> */}
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">POLICY</h5>

        <ul class="list-unstyled">
          <li>
            <a id="cardlink1">Return Policy</a>
          </li>
          <li>
            <a  id="cardlink1">Terms Of Use</a>
          </li>
          <li>
            <a  id="cardlink1">Security</a>
          </li>
          <li>
            <a  id="cardlink1">Privacy</a>
          </li>
        </ul>

      </div>
      {/* <!-- Grid column --> */}

    </div>
    {/* <!-- Grid row --> */}

  </div>
  {/* <!-- Footer Links --> */}

 

  {/* <!-- Call to action --> */}





  {/* <!-- Copyright --> */}
  <div class="footer-copyright text-center py-3" id="footercopyright">© 2020-2021 Copyright:
    <a href="https://mdbootstrap.com/"> souro'scart.com</a><br />
             
            <AiFillFacebook/>
            <TiSocialInstagram/>
            <TiSocialTumbler/>
            <TiSocialYoutube/>
            <TiSocialSkype/>



  </div>
  {/* <!-- Copyright --> */}

</footer>
{/* <!-- Footer --> */}
        </div>
    )
}
