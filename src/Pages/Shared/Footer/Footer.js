import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRightShort } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { SiCodeigniter } from "react-icons/si";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer py-4">
      <Container>
        <Row>
          <Col className=" text-start text-white" sm={4} xs={12} md={4}>
            <div className="d-flex align-items-center">
              <SiCodeigniter className="fs-3 nav-icon-color"></SiCodeigniter>
              <h5 className="text-white p-0 m-0 mt-1">Learn Free Code</h5>
            </div>
            <p className="mt-3 w-75">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              explicabo assumenda, tempore voluptatum earum quod est quibusdam
              odit eaque. Assumenda.
            </p>
            <div className="d-flex">
              <FaTwitter className="footer-icon fs-1 me-2"></FaTwitter>
              <FaFacebookF className="footer-icon fs-1 me-2"></FaFacebookF>
              <FaInstagram className="footer-icon fs-1 me-2"></FaInstagram>
              <FaPinterestP className="footer-icon fs-1 me-2"></FaPinterestP>
              <FaLinkedinIn className="footer-icon fs-1"></FaLinkedinIn>
            </div>
          </Col>
          <Col className="text-white text-start" sm={4} xs={12} md={4}>
            <h5>Contact</h5>
            <p className="mt-3">
              {" "}
              <MdLocationOn className="me-1"></MdLocationOn>Level-180,
              Satirpara, Narsingdi, Dhaka
            </p>
            <p>
              <MdEmail className="me-1"></MdEmail>Official:
              web@programming-hero.com
            </p>
            <p>
              <MdPhone className="me-1"></MdPhone>Helpline : 01322810867 ,
              01322810869
            </p>
            <p>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>
          </Col>
          <Col className="text-white text-start" sm={4} xs={12} md={4}>
            <h5>Newsletter</h5>
            <p className="mt-3">
              Subscribe Our Newsletter to Get More Update and Join Our Course
              Information
            </p>
            <div>
              <input
                className="input-bg py-3 px-4 "
                type="email"
                name=""
                id=""
              />
              <BsArrowRightShort className="fs-1 text-warning nav-icon-color"></BsArrowRightShort>
            </div>
          </Col>
        </Row>
        <hr className="text-white" />
        <small className="text-white">
          &#169; Learn Free Code.All Rights Reserved By Parvez Ahmed Prottoy
        </small>
      </Container>
    </div>
  );
};

export default Footer;
