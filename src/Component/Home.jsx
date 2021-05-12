
import {Button,Carousel, Container,Row,Col,Card,Media,Image,Form} from 'react-bootstrap';
import ProduCtcategory from './Products/Productcategory/Productcategory';
import Categorydetails from "../Component/Products/Categorydetails/Categorydetails";
import Tabs from "../Component/tabs";
import Photosd from "../Component/photosd";


 import React, { useEffect } from "react";
//   import { useDispatch, useSelector } from "react-redux";
//    import { ProductCate } from "../Actions/Product.action";
//    import { Link } from 'react-router-dom';
  
  // mterialui
 


  import {BiShoppingBag } from "react-icons/bi";
  import {CgScrollV } from "react-icons/cg";













export default function Home() {
  
  
  //  const DispatchMethod = useDispatch();
  // const ProductCategory = useSelector((state) => state.Productdata);
  // console.log(ProductCategory);
  //   useEffect(() => {
  //     DispatchMethod(ProductCate());
  // });
    return (
        <div>
          
            <Carousel className="Carausel1"  >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.freegreatpicture.com/files/75/24496-hd-women-shopping.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://realbusinessda.s3.eu-west-2.amazonaws.com/wp-content/uploads/2012/01/media.caspianmedia.comimage6635b9e03bb6b02f13bdabd17b241f31-177ce8c3134dbf056ce13fd95830796121ae44b3.jpg"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.wallpapertip.com/wmimgs/29-293385_sc-stores-hd-pictures-for-shopping-website.jpg"
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.steinconstructionllc.com/wp-content/uploads/2020/03/energy-efficient-scaled.jpeg"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>

 
<section id="sectionppp1">
         <Container>
           <Row>
           <Col lg="6">
             <h3>Please scroll down / Go to Shop page <CgScrollV/></h3>
           </Col>
           <Col lg="6">
             <h2> HAPPY SHOPPING <BiShoppingBag/></h2>
           </Col>

           </Row>
         </Container>
         </section>



        <section >
       <Container>
           <Row >
             <Col lg="3" id="homecatcardsection">
             <Card style={{ width: '18rem' }}>
  <Card.Img  id="homecatcard"      variant="top"  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhYZGBgaGhgcGhgYGBkYGhoaHCEcGhwaGhkcIS4lHB4rHxwZJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzElJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ9NDQxNP/AABEIAKUBMgMBIgACEQEDEQH/xAAbAAAABwEAAAAAAAAAAAAAAAAAAgMEBQYHAf/EAEwQAAIBAgQCBgYGBQsDAgcAAAECEQADBBIhMQVBBiJRYXGREzKBobHBQlJystHwByMkYuEUFTNDU3OCkqLC8RY0Y5PSF0VVZHSD4v/EABkBAAMBAQEAAAAAAAAAAAAAAAACAwQBBf/EACcRAAICAQQBBQACAwAAAAAAAAABAhEDEiExMgQTIkFRcTNhBYGh/9oADAMBAAIRAxEAPwCyejX6o8hXGUSNBv2dxpYJNJX21TxP3TUDQgiKM/8Ah/3U9YfGo+2362P3P91SH41yjrAfWXxJ91PFXTypqV66/wCL4CnSj410A8UYfn8K7Fcj8/nwoFBcppjj1V+2vxFOroprixov2119ooZ1Bra+yKO4127KFn8z3Uod/aK4DEnOvn5aUS5tXbnrDwNC6NBQdXA3s7+2n1k6t4CmNodantg6sO4UHGKIsT3x7tKRxApwvL2j50hf7D2/n4UHDtsaD20qopO0NBSin5UAJX3iab3n0/P5509uAc6bqg1mOfOkabY6aSIwDqv4/Knlswk/a9xNN3KjPqOXMdlOA6+jbUfS5jnNFHWwy70uvKmeGuAgagkSNCDTsGupgztwUlib6Ipd2VEGpLEKBtzNKudqyXprxb02KKiWS2cirPVLD1mjtkkeCiqRjqZOTouV3pfhs/ULuBALJbaOexaKmOGcTtXvUcEx6p6rDxU6+2srt8TuAAQm0hQmkctS1S3D3W7sMrpBMEgidmU7jn3irrCnwyDzNcrY04jnScQPxqjM2J1yYy4I+iSjR7WXN76hL/GcRmIGKvsBuyBAB26gCkeJodZYs01zEk6Aak8gKrPFOlltZWyPTMCAWnKgj96Ot7POqhfZrgl79y4Pqu5I9q0stmFGVGaZChBMxqduQFUhgbe4ss30SqdNypi5ZgdqPJHfDAfGrLgOIJfQPbaVJgg6EHeCORqoYPjQS26CyDJ6xgZpiMpkjTnzFR/R7EXMNeDshW3cOVzGgBMhh25ZB8Ce2pSjJSaapL/paO6TTtvn+jRGWmFxevT96aFesPGpjIXihR4oV2xRyrGJ7dqZ4y6VKMeROnsNPlMDyiojpAsoviY8v40rHjyd4ddL3Hb90x7IqaVJqvdHzLwdwpnx0/hVmFFAwIOuPBjTparHFeluHw9zIxZ3UQwQAwTrBJIE91OeC9LsNiHCKzI5mFcRPcGEgnumu6XyJqXBZBXD+Fdrij5fn30AJYi4qDM7BVG7MQAOzU1GYjjWFgftFrQz668j41H9MOAXcYURLiolvMWD5jmYxBgdkHzqGw/6NnCXEN2yWfJlfI5a3lbMcuv0hoarHHasm8ml0WVekeEB1xNr/OD29ldXpRgyY/lNuZ01Px8qrCforc74tPZZY/76cJ+ijtxflZ//ALrvpIPVLg41EbRoRqCPnVOx+GYu59Jd1ZyAHMDU6ADYRpU9wXCtZz4ZnL+hKorkFSy5EaYkxqxqGxinO5AnVpnY6zvH2qWMfc0GWXtTGhwYic94nX+s8NdPz5UBhVP9ZdPaRdPd2+2jMW1O2p5aHn2TyG9K25zaTHskR2a7c/aKppRnt/Y3PDhze6NvpyO/eirw1Du7zpu/nTgg7akgSCI32j4+VdIYjWddQDOkmT8aKQWxp/N6H6TAd7nv7BQPD7ZiJM6Rnfcb8udPUfTLp2gaDblpEazSquRMQTp3QI057wN/ySkFsiW4dbgSDznrty9vwrh4OhOgPdq0HU1I3G5ELqZ3iNuXlQVyCYg76ER6skH+PfRSC2RacMtkkFX3MdZ9Y3A7eVKPwm2NlblEl557iZH8KeuwPWMAgg6CfVJ7d+VFbKQddgRG0GRzjXnRSC2O+jmFRLhyqQxRhuSIBBJ1+NWtdqpNu/6O7aYscpeGYZo6y5RmkDq5soPs7auLPC1nydjXi6jTj3EhZsPc5qpj7X0R5kVigkQx1knXtPP21e/0h4+ESyD6zZ28F0HvPuqr8MdcjI4BB5H49xq2KOxPI6YytYqImdBAI7OQ1qY6PXz6R32ATKdYEkggT7CaZPhLU7tHiPjFL6BVRZEhTpBILjMBJIjTLr2z3AWVrkm6aHt27+uVwLbAEEo4LBtwykTBU77TNFw/FSiXLSW7eW4TBZELASRoza6LSFjgWJUuXtuFQIXJE5A+2YSCums8hrUdiSyOyE6qSDB5gxuO/nQ6ZxImXdBZSyApZGZzdUKZzgKyNmU5wI0fTcxpuiMewAFu5lYcw2pmAZI7YqIuX80KfVBE9/ax7aVFuWIkaHQco5R+NNGWl2gcb5JfB4NnDMbttXaSS5YCF2GgJJMk+yorFY251kZpAJBEkidFJHsApF7kkidtJ7R86RfapzblJt7jY24vZ0aX0YxvpcMhJll6jdsroCfFcpp266jxqq/o+xMNdtzuFcezqt7ivlVtfceNZpKmaYu0KxQo8UK4dDl+Xf8AIVFccfqL4mpBzMxrH51qJ4ueqgO4zn4Uq5GfATo403vFZ+H8KfdMuKNYw3UMO5CKea6Esw74EDvIph0f0vafVPxHyih+kHCl7CuAT6Nwx8DKz5kU8a1biSurM5G/460ojEEEaEagjQ+c6Ulmo8jtHvrQZzY+hnFziMOGcy6HIx7YAIY95B8wanlqn/o2wrJhnc6ekeR9lRln261b1rNKtWxaPAmD1z4L86XNwAEkwACSe4ammx9dvBfnSwggg6g6EdoPKtcOqMmTsxhwbpImIulEDQEzSVjYwSTPesCO2eyrGpqs8I6N2bFz0iFy0MAGYQA3cAJ001qxI1dZxMrDXT/KcUJ2dNOybds/M+dVu8AS2ZZEtyERJ1J5b1NX3jF4vTnaM9v6tKhnRiDvBkxl84nu+FQj2ZfJ1QU5Z6zEHfT/AJPj7KMwWdzvuCZ0iBHh8aNknUq3OerER26REfnsIySRAKwR1ttYOm21UIAS4QIGbaNpHj38qNaJOpbTl1iJ07deyhbXKOeby7uzs1ri7Bc09gbnvr46UAcKGTMCY0HITz2Mx3VxVHWGvbsTP57KDRmLMwMc17tRr5UZrZ1M6aa5DJ7/AONAHLzdgZY3mfiBoKKrADvIOsdx8thSgWFk5jv8OR59tFvIRHImd9e8AjtPPxoAJmVYIGuvMiNTuKPdQknYg6kSADy5DtPwrgXLBBOsyI7/AH8/OlIyga7zOg025ctIoATLLmyXAMlxGQtyGZdDMQII07zU7wy6z2LTP6xRST29/t3qMsATPIg6EDXaZHPyqSuYiEJ7qz5OxsxdTNel+Kz4lxySFHxPvJ8qibdyBXMVdzu7n6TE+ZmiA1eOyJS3Yo9wmpDhHEURw1y0l0ZcmVuqRHqXLb/Rddu8Coqa5XbOUWLhfSB7XpFcC6lyWKXjmDPARXuSSbgVfoExoNoqAd5M+XhRK7NFhRyjZzESY7JNFoUHQwNAmi0KDhO9Db2XFJ+8HXzEj3qK0G8NfbWYcCfLibJ/8iDzOX51p2IPyqM+S+PgczQombuoUg1CPC8GUa5LM+diRP0RyA17/dTXitghpO0sVHYDln3yfbUy7xpzPPsqH6T4tbSBm10IHbr/AMVxc7HX/YTgyfrpG2Q/IfGrBeRHBRoIIYEeNY5ieKXHPrkDsB/Dem6ux3Y+ZqnptkvUSLHxXom6u3ocjpyBdAwnlDHWnXAuhNx3DX4VBqVVgzN3dXQCm/A+HpGYorHvUH404xmAgyiKh5FOofNYq7xS08kPVjq4NOw1pUQIghVACgcgKOh+fx1rIcP0sxVloF0uoPqvDjwzHre+tA6J9IUxaMQuR0jOkyADMMp5qYNZpQlHk0RkpEtcaHPgvzpVHprfbrnwHzo6tWvH1Rjy9mP0enCNUej05RqZoVMrOLH7Tim7WtCP/wBSVRuNXMTY2ctbJJBlhEmYYTpv4Vd8Z/T4r7Vn320FQ/F7YIdeRUj3VjbqbNyipQVlJHHb/wBdv8zD50U8Yu82+P40ydIMVwLVdiWlD1+MXTu0+M/jRTxW59b4/jTOKFBzShz/ADk/b8fxofzi/b7qbUIoO6UO/wCdbu2f2Vw8SuTObXtjXzptFcIoDSh1/OVz61cPEX+t7qakU5weFzsOz86UOg0WWXomHZi7HSMoEcjBJ92lTWIxf7K7Trlb3Aj5UtwXDAW0gfRphxK1+odR9Zx5lvxrO3cjSopRoz6hQoyrNaTMFo0UvbwrNoBT61wS40ab1xySGUWyKihFWROi1w0H6LXBS6kd0MrcUWpfE8FuJutR12yV3EUykmK4tCNCukVymOD7giZsTZA/tE9zA/KtPxS1R+hGBL3xcI6qAwe1iIEeAk+VXvF7VCb3L41sdFcoKdBvQpLKUSAQEmaof6SL59JbTkEze1iR8qviH41Q/wBItkm4j/u5T5kj4mmhWolK6KYK6DFFoVoID/DcUuJ6re4Va8Lgr2Jsqz4nDpInIxJeP3oHVPdVItuVIZSQQZBBggjmCKVxmMuXWz3HZ2iMzksYHKTXdTFcUO+N8JfDsAzo4aYa2+YadoIBB1qV/R7iSmLAnR0ZSO3YiqwTVk6BWi2LQ9gPypJcMpHk03GGLh8F+LVwXO8TROIt+s/wr8WoiPVsXVGfL2Y5tXGkSV74Bmn1u5Uap7zTlHpmIQ17XFXx32j5ItMOIIST4Gpi3anE3j2rbP8Apj5Glb2EBrDPuz0MfVGScQw5VzpTVLZNaXxLgYYHTWicP6PLBkfS+QoUwcPkzc2T4eNdGGGmpgmBoNeR1JHOrV0nwotuqKp6wJYAawvWj3RprURh7eTExdRhaRiXDI5C5lKg5WUFRMRIkRziqxftslLZ0NMFw9LjqvpAitIzuDlB7ys6bTExMkRrSBwrAwRsSNNpGhg86cCy4uN+qfKczhMjLFtjo+WPVAgz3DXSrT0cwQdcrwzDMAcyzlWB6maQJzagR30SdKwirdFONg9h8qc2uDYh4y2XM7Qh1rU+A8Gt+nIZQcihgD2mdfdVwaxtp3wBHI1NSKONGC2+jOKJ/wC3uf5ameG9H76upay4UDU5edautwkerO+xO+kLp3H3Ue1dfMoy6EakZtO7UUrnZ1KimcJXqKOYLA+ZpvirGZLq9jk+YB+dTPSLHW7F9VI1cBoGUbaEgEySewSaWt2AXYHmo+Y+VTaaKppoxbE4Uq7KRqDUlw/hLNqR3x4Vp2L6O2nM5RPbTi1wdEUgAbGqepaJaUmV/hfR8KdRyHzqc/kaKskaCfdT22Adf3V99ExqdRvD8aRux1sZ/d6aXAxyWrYUMQJzE5QYE670f/rS5/Z2/J//AHVU7o3+0fjSlerDDBxWxjlOV8lkudLHbezb/wBX41EY7HC5uir4E0wmuZqb0cf0Lrl9hWwoPOPZ/GgmGAMzPdFGzUM1N6UPo5qkWnoxxWbiWQgAIOoPYJ2juqzY78+VUXoof2pPB/umrxj9q87yIxjKomzDJyW4qg0HgKFJ29h4Cu1ArQ/s/wAaguk2DziP3f8Aip9Pz7abvbzzoTK+Pf8AhSu/gFV7mQYjDlTDCPgaQKD8itUu9HhcRQyGZPKq/jOhTg9QEiTyNXjNtbkZwSezKVloZatK9DMT9Q7kbGjp0OuzDaU7kkIolUVJrR/0d8IZCbrCCYjwpzwfogiHMwk99W/DWlQZR3e6pSneyKKNFJ/SDir9p0e0xAIIeFB713B/e91U3/qDGH+sf2In/trXeJ8Mt4hClxZBPbBHeDyqsv0Iw3pCsvEA+uNyY3injl0qhZYtTspH8/Y3+0f2Io/213+fMd/a3PID/bV+t9BcJzDn/GaMnQvBhwMjEb+sYoedHPQEugbu6O9xi7MVGcmZy6aHsG3sq1lRSGEwyIoVBlUAQKXqMnqdlUqVCd1ARFGwSDK2n0j8B+FBzFEwuIQAgmDqYg84/ClGKt0pcpctXERWdHVlzbb7e33TNROO6XYj9enoLcXsqAjMSqgR1p1YkHZoOtWXpTgluW2OblvWb4a5iGfJbJZlGgyB20kb5STrOvfWjC7VEMsd7LNZ6a3ixuGwiobfo4LvKlZMrm1YHN6vqjTXtfdCrbRn3B3BGo1Gx7DvHKqY7Xw/onJVmydUIq89JgDQbgbeVaf0c4YbSLqT49lGV0qDFH5C8ea9YdMTYUvlBFxPrIfmNTSH/wATrAHWtvm5rAmfaQKsxqt9LOjrYlAEyqwaQSOUEEGKjGW9Mq1aG5/SrZG1i74zbHwY11/0oodEsOW5CRUdwb9H4R0e64YAg5QNCe+eVXVOH209VFBEwQoHwFM5R+BVF/JVOEW3xOIOJxKDObYNtNf1a5t/tGrKWi4vgRPv199MMCesjdqMvkxP4VJONQe/8alJ2yqSQ5ajx89PbSbHSjmmRNiKrBjuA+NJYleoaVPrH89ppPE+qfz3UHTE8Tu/22+9XSa5jPXf+8b71A17OPqvxGGXIUiilaNQpjgAPOuUDXBQBLdFj+1J/j+61XnHnSqJ0Y/7q34t91qvWN2rzvL7/wCjZg4DrsK7QU6ChWYuSKUx4xfdMM5RirekRZkjfKNxy1p+hiozjg/Z/G/b+X4c6v4qvIjNn6MijiHUgNiL06SczDSNTlKzvyO++m1cTGtA/X4j6M9c9uo9TkNZ57ab0VH1eCPo7M0bcp1pZDrvz+sa9fSjztbHGEvXBdtFbrujXArB3YiCx6wMAHQbcpHbrY7FyblxTydo8hVW4Z69jb+lX6375327Y9s8qsmFP627/eN8BWPy1US+F+5EktdFIvdVQWYhQBJYkAAdpJqpdJumK20Awro7liGJDEKInTYEnx7K82MW3sbpOi3Bqj7t8ekcZgDC7kd81ny9LsWtxUd1hioPqOArQJm3zAMwDIqtu0hibrlgxCgqxzD62ct1fCNZqnpN8i+oka9xrjS4a3nYFtwomCT2eFZzf6X4tmLB8n7qABR4SSaPZBxNm0HvWUCDIEe7lbQ6uwKk858BXRwe3A/acNLbD0xnaet1IUgcjHZvpTQxRXIksjb2HHCumeIVxnbOIIysYBnYyAYIrSOHYxbttLibNy5gjQqe8EVjGPsLbuFFdHACnMj511AJEwNRO0Va+jfHDh7DyjOXuEoAVEdUSWk6CQPOuTh9DRl9mg3m086bIRmA7qhB0usFUDh0ZwJkDKrGNCZnQ91S+J6sN2H3HSoNNcl4tPgc30BQyOys94Di0TGXXKdQqwEKWGjNr1RrI+NXzHYjKn57Kx/iuIdbzgO69aYDMBqAdgargfuZLOm4loa4j4+2wEqRbEnTUByR4zGlaTbFY30TuO2JSWZoDHVieXea2DDt1R4CjM7kcxRqIuzQKg26X4QMyNcysjFTmECVJUxO+oqZc8qw3jH/AHF7+9ufeauY4qTdnZyaWxrR6W4P+3WjYbpThrlxbSOXd5AhdNATqfAGsYBqb6GH9usfab7jVSWOKROM5WW/iOcpZRGdSbgBKKzNlyhzousaHao61iHS45zs41GVy8AnLrBO4iPaadcXxTW0RkMEOi6hWBDF0YEMCDKmKY3HJJJOvsE+waCr+LBSi0+DJ5+aUJLS9x3c4q5BGVRIiQXkeGtIWMZcRMhcuet12Zy+swZnlOlO8dhsOqSlxmeR1TroZnZBt41GTWhYMdbIxPys97sIl6/ky+mc8j1mzdu81ZOCBxnYu7oyIVD58ogtJUvo0hhseQ7argO35+VSnRvFO1y7bJGVLSEdVQTrk6zASxyoglpMKKl5GNRhsaPEyylk9zso+KPWf7bfeoGi4v13+233qBrRj6r8NM+TldrldphTlcrprlAEj0bP7Va8T91qvmNXaqF0cP7VZ+38jV/xR1Hj8687y+6/Dbg6gCUKcRXKzFbHaNuajuOf0KD/AO4T8xzqRQaVGceJFpO/EpHl/CtHifyozeR0IhX9cgk+rrIfkPpc/Gu4TEFztznSDv29h7RyribvMb8wDsB9XTypYKBtHLk3OvZPMD8Lf9ZhhP8AWH6U8mO30fDnv9Gp625Fy7ET6R/lUHwr+kwu/rt9X6pJjnv269mk1IYu9lGKYEKQ16GJiDl0M8taw+YriacDqSKv054+XQ4YDQOMzA6Nl3WOwNHtFVbhaWGYjEO6LGhRA5nXcHlt79RTK5dLGSZ0otZYxUVSNMpOTtj7HW7Sx6BncQcxdcpGvVgA9mv/ADAaBj2kVyj2LeY6mFAljvA8OZ5UwpxMvOT4ae804RLLQMzoe1gHX3ZSPfRRfUaKiAc2dc7Hv10Hs86cLlK9ZUYQBKDI6/vAHRv4cq6cY3xGHZIMKyn1XUkqY94PcQD3UW3ebWSx0IHWYQeR0oEsg7UYexgPgQff46oheU1w6GdmMSSfEn51qvB+PpiUdBIdFUkEaEbZgdt50rKHWNDvVh6LuFxlvL6sMDrBMo0z2wT4aVPJFOI8JNSNJu9dR+eVZR0jWMQ/fH4fKtZwS8u4Ee8fL31nXT/ChMSI+lbU/wCp6hh7F83UR6CgfyofYb4r8q19FgAeFZD0GX9ttDtDj/ST8q2CfwpsvYTG/ac3rEOND9ovf3tz7xrbGY8qxPjQP8ovaf1r/eNdw8s5l4Qwqc6ICMbh/tt91qh8h7DU70Vj+WYbcH0h+6YrRJe1kYvdE70oEKnZ6VPeQ1Nswj96d55fmKd9KBCIf/InuJHyqMBEkc9Y0mq+H1f6Y/8AIr3r8JHA8Oe6C6JmRWyMxAZU6uc3HQ+soEQIOvfBDbGoFJaw4cLJDejKAiJKkTMQZBnyjVxwni9zD5sgBV1UOpMTEwQRsRJG2vsBomNx7OIiBEbzp2CNhTTxSc7tiYssI40thu5kk0+6NEenujn6FPLOY+dR8096Nf8Ac3O/Dj3P/Gn8n+Nk/D/mKbi/Xf7bfGuUMV67/bb71Cmx9V+G+fJyhNdNcmqigrhruaik0p0kOj5/abP2x8DWgYw6r41nfBD+02ftr79K0K6JdPGvP8vsjZ4/DHv52oV2hWUoLhqiukbfq7X/AOQPgT+HjtzqYKCmHFcPZe2EvXltBXLSWVdYjdj3mtHjNRyWzPm3jsV6SpICk7+r1IgCRl5EdnLwiVUut9RtSoHW7dRy5inIw+E/+oj/ANW3PZvP/POaOLeDH/zEf+qnyP8AxsIGlen68Psw6GF4UsX8KNPXc7DXqHXQw28ZuWw3mhxq1nXFITlBe5rv6uVtvZS2BucPt3FunHW3Zds9y32EaRtudBUTieMW3XEXBmyF7kNHrB4VYG+tZPJyKS2ZfDB2jP1OnlXKAoVIqdNdDmCs6EgkeEx8TRacYYBgU5mCm2rDTLPKZ91Bwb0Y6f8AM/CnAwr5c2UkbEgbHsPfptSDj8mgAy3BkKmdwV7B9bSeenLkKIa7ctlYnmJidY5SOVEoAMxmprovpiVI+oT5gVB1ZuhNrNedvq24HiSB8BSTftY0OyNE4SxIE8hHkdKpX6SxGItnttx5M341deHpDa85+VVD9Jw/WWD+448iv41DF2L5epC9C2/brA/efY6eo9bC35+FY50NP7bY+23vR62MCmzdhcXATUn4VjHGny4i9P8AaP7esa2F7mUr3zWO8cYDEXyVDTcuRJYZST63VImOw6V3BywzcIbekXJmGfN2ZBk3+vmnbuqU6LXJxeGI/tB8DUP6YZe+NqlOi7A4vDEKF/WINCxk6y3WJ1M8tKvJ7MzxW5aelv8AQjuvD75qNK6z50+6XH9W47LqH/Nr86ZZZNV8LqzJ/kr1KvoIRzJHf+eVJNjEA9byBPwFIcaYi03ioPhNV62EyuWLZtMkQQddc01bJlcXSIYPGWSNyZYL2OCgMQwDTlLKRm+zO48KkuiWNFy85CxFkjx6y60fjXC3PCsLda87LbS2UQogRfSkCA4GZoG0zUX0Fb9dc/uj7mWsuXJKS3N+HDGDtENiPWf7bfeoGi392+03xrs1sx9V+BLkBpFnpQtRCBPZRJ/QIOpoUUMK7NCYDzhB/aLX20+IrQtS4MaLWd8KP6+1/eJ94VpR3rD5a9yNOF0mOM3dQpOaFZqKkkpG/hURxfhqXgVbn2e2pdF5cqbtufzzNdfAkeSup0Nsxua6nQ2zB399WO0+kUdtm8DS6mPpRQE6OW85E6axvyqUxfCV/kzoo3Ux4gyPeKfPYnujn7KXw46pDcmI84ilcmOooyWKc4jDqFRlYkMNZ5HmKmOkvBjbYuoOUkk9gJqIwRBYIx6rHyPI1qUtStGVx0umNstACpzE8EZFnlTUcOPZyB86NaDQxpYxToZVivgSO7Ue2kCZp8+EIFN/Qmu6gcREChlp7awhOnhUphODZhtzNK5pHVBsrwSrl0ItwCfrH3fkGozinDVt2yx0mAB2k/wmpfoKjH1iY5A9gjbzNJOVxtDwjUqZdLZ66jv+Rqq/pMskrYuASozoe4tlI+B8qtl1IYeI/D505v4NLqG3cUOjCCD8ZGoPfyqMJaZWVmrjRlnQbDs+MtlRomZ2jkApHxYVrwtvvl/OlMuC8DsYZSLKZc8FmLFmO8Ak8h2VMq2gqknqdko+1UQuMRpUZTI91ZFxwRibwP8AaPp7a3S/YzEGYqHxvCcOzNmtIY5lQSfE86IS0NsJLUqMYD9XL9GZjTfx3qS6Nn9rw8cribeO9aavAMNv6C3/AJac4bhdlCGS0intCifOqPMmuBVip8lR6VXVAzOmZSySNBsWXc6Dl5VBWccjAsMwXMcoaWYDlJHPw7a0PE4dXBV1DKSdCJG9Q7dEsKxLZCJ5BjFcw5/T2OZ/GWWt6KrY4jZDr6ay163JzIJWewyTyMH2VWb4GZoUqMxhSZKidATzgQJ7q1L/AKMwv1D/AJjQPQnDaaMNfrGnlnUnbFh4+hUmUHDWy2Fe4cQi+jdFXDu0u4MdZFJiBJ5fRbbnYOiLWmWUQq622FxuTSeUMY+iYKiI51Y+H9EsMjMSmeDoH1GwqTfhyIjC0ipO+UAT41N5bVFI46Zjl0+t9pvjQNWBOjpzsjsUm4FUAAzmkknuGlRz8CxA+gf4VvWWMYpv5IODcmiPzV0tTl+EXxujeVItgbg3Q+Vc9eAenITzVyaM2HcfRPlRRbbsPlXfWiGhi/DzF22f/In3hWpnwrP+B8GNx1bOBkZWjLMwZ7e6r87xoKy55Rk1RbHFpbh83hQpGaFQKksx2HdTWYPs+dChRISJxW99LFpVvD8aFCpoqyJB39vuiksIczW1OxOY95AkUKFcYyHGLtC4HVtoI/0mskYanuJoUKth+SOf4L7w++buCRm31BPblJAPlTm9hFkjuX8K7QpJcsePCG+IwShaisRhFAMUKFdiDFOH4YZj7PjQ41xdrDejtgAsT1jrG2y7UKFC7HHwVd7r3Gl3ZidyTP8AxWhdHLIU24+qP9woUKbLwJi5LNjNwfD4inqGhQqKKvgdpt7Pxo3LyoUKoibFVNM7o1bxNChQwiEZBXJ0ihQpBxgTqfE0daFClHDzS31fGhQrqFZzD7N4/IUd9jQoV058lfxFsG8hPIOw8Yj5VIoZ86FCtObrH8JQ5f6EuHuoNZWPVG3ZQoVBlEIPhbZnqCm97h9s/QG340KFdR0Rw2BRC2URP40utChQjjBFChQoOH//2Q==" />
  <Card.Body>

    <Card.Text  id="cardtexthomecat">
    Buy ₹500 more, save extra 10%
    </Card.Text>
    
  </Card.Body>
</Card>
             </Col>
             <Col lg="3" id="homecatcardsection">
             <Card style={{ width: '18rem' }}>
  <Card.Img  id="homecatcard"     variant="top" src="data:image/jpeg;base64,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" />
  <Card.Body>
   
    <Card.Text id="cardtexthomecat">
    Buy ₹500 more, save extra 10%
    </Card.Text>
    
  </Card.Body>
</Card>
             </Col>
             <Col lg="3" id="homecatcardsection">
             <Card style={{ width: '18rem' }}>
  <Card.Img  id="homecatcard"    variant="top" src="data:image/jpeg;base64,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" />
  <Card.Body>
    
    <Card.Text  id="cardtexthomecat">
    Buy ₹500 more, save extra 10%
    </Card.Text>
   
  </Card.Body>
</Card>
             </Col>
             <Col lg="3" id="homecatcardsection">
             <Card style={{ width: '18rem' }}>
  <Card.Img  id="homecatcard"         variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ29kld4_a96TSNaZIojyaJ7tzQvaYBas_Ckw&usqp=CAU" />
  <Card.Body>
    
    <Card.Text  id="cardtexthomecat">
    Buy ₹500 more, save extra 10%
    </Card.Text>
   
  </Card.Body>
</Card>
             </Col>
           </Row>
           </Container>
         


        </section>




















  <div id="catarogusection">
         
   < ProduCtcategory/>    
    </div>


   {/* <section id="sectionppp1">
         <Container>
           <Row>
           <Col lg="6">
             <h3>Our Product Catagory</h3>
           </Col>
           <Col lg="6">
           
           </Col>

           </Row>
         </Container>
         </section>

   <Container>
       <Row>
            
            
      {ProductCategory.AllCategories.map((e) => (
        <Col lg="6">
        <Card  id="paductcatcard">
        <Card.Img variant="top"/>
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
        </Container> */}


       
   
   

   
   
   
   
   
   
   
   
   
   

   
   
   
   
   
   
   

    {/* Daily Blogs */}
   {/* <div>
   <section id="sectionppp1">
         <Container>
           <Row>
           <Col lg="6">
             <h3>Daily Blogs</h3>
           </Col>
           <Col lg="6">
           
           </Col>

           </Row>
         </Container>
         </section>


      <section id="dailyB" >
     <Container> 
       <Row>
         <Col lf="6"> 
         <Tabs/>
         </Col>

         <Col lf="6"> 
         <Photosd/>
         </Col>
     
     </Row>
     </Container>
     </section>
     </div> */}

   
   
<section id="sectionppp1">
         <Container>
           <Row>
           <Col lg="6">
             <h3>Daily Blogs</h3>
           </Col>
           <Col lg="6">
           
           </Col>

           </Row>
         </Container>
         </section>




   
  <Container>
    <Row>
      <Col lg="4">
<div class="card" >
  <img
    src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the
      card's content.
    </p>
  </div>
</div>
</Col>
      <Col lg="4">
<div class="card" >
  <img
    src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the
      card's content.
    </p>
  </div>
</div>
</Col>
      <Col lg="4">
<div class="card" >
  <img
    src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the
      card's content.
    </p>
  </div>
</div>
</Col>
</Row>
</Container>   

     
    
      {/* Follw on social media */}
      <section id="sectionppp1">
         <Container>
           <Row>
           <Col lg="6">
             <h3>Best Selling Items</h3>
           </Col>
           <Col lg="6">
           
           </Col>

           </Row>
         </Container>
         </section>

      <div class="items">
        <Row>
          <Col lg="2">
     <div><img src="https://images-na.ssl-images-amazon.com/images/I/91IlUJPNgtL._AC_SL1500_.jpg" id="itmssss"/></div>
     </Col>
          <Col lg="2">
     <div><img src="https://images-na.ssl-images-amazon.com/images/I/51s8xpR%2BlCL._AC_SL1000_.jpg" id="itmssss" /></div>
     </Col>
          <Col lg="2" >
     <div><img src="https://images-na.ssl-images-amazon.com/images/I/71%2BVzbtPINL._AC_UL1500_.jpg"id="itmssss" /></div>
     </Col>
          <Col lg="2">
     <div><img src="https://images-na.ssl-images-amazon.com/images/I/91OKFLVV20L._AC_UL1500_.jpg" id="itmssss"/></div>
     </Col>
          <Col lg="2">
     <div><img src="https://images-na.ssl-images-amazon.com/images/I/518mtsUu1RS._AC_UL1402_.jpg" id="itmssss"/></div>
     </Col>
          <Col lg="2">
     <div><img src="https://images-na.ssl-images-amazon.com/images/I/81-JIDpmhyL._AC_SL1500_.jpg"id="itmssss"/></div>
     </Col>
   
     </Row>
 </div>


        



  </div>
    )
}



// photo galla


