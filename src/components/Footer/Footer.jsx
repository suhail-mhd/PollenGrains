// import React from "react";

// import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
// import { Link } from "react-router-dom";
// import "../../styles/footer.css";
// import footLogo from "../../assets/all-images/Motohire white.png";

// const quickLinks = [
//   {
//     path: "/about",
//     display: "About",
//   },

//   {
//     path: "/cars",
//     display: "Car Listing",
//   },

//   {
//     path: "/contact",
//     display: "Contact",
//   },
// ];

// const Footer = (props) => {
//   const date = new Date();
//   const year = date.getFullYear();
//   return (
//     <footer className="footer">
      
      
//       <Container>
//         <Row>
//           <Col lg="4" md="4" sm="12">
//             <div className="logo footer__logo">
//               <h1>
//                 <Link to="/home" className=" d-flex align-items-center gap-2">
//                 <img src={footLogo} style={{ width: "150px", margin:0, padding:0
//                       }} alt='MotoHire Logo' />
//                 </Link>
//               </h1>
//               <p className="footer__logo-content">
//             Are you looking to rent a car in Kerala? Then, you have come to the right place. MotoHire, the premium rental services provides car booking in Kochi and other locations of the state. With attractive prices, our car rental services remove those frustrating transport woes from the minds of NRIs and tourists.
//             </p>
//             </div>
//           </Col>

//           <Col lg="4" md="4" sm="6">
//             <div className="mb-4">
//               <h5 className="footer__link-title">Quick Links</h5>
//               <ListGroup>
//                 {quickLinks.map((item, index) => (
//                   <ListGroupItem key={index} className="p-0 mt-3 quick__link">
//                     <Link to={item.path}>{item.display}</Link>
//                   </ListGroupItem>
//                 ))}
//               </ListGroup>
//             </div>
//           </Col>

//           <Col lg="4" md="4" sm="6">
//             <div className="mb-4">
//               <h5 className="footer__link-title mb-4">Contact Us</h5>
//               <p className="office__info"><b>Location: </b>Ernakulam, Kochi</p>
//               <p className="office__info"><b>Phone: </b>+91 9526103163</p>
//               <p className="office__info"><b>Email: </b>suhailmhd070@gmail.com</p>
//             </div>
//           </Col>

//           <Col lg="12">
//             <div className="footer__bottom">
//               <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
//                 <i class="ri-copyright-line"></i>Copyright {year}, Developed by
//                 Mohamed Suhail. All rights reserved.
//               </p>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;
