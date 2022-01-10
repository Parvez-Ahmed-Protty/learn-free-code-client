import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BiChevronsRight } from "react-icons/bi";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bg-dark p-4 banner">
      <Container>
        <Row className="d-flex align-items-center">
          <Col className="text-start" sm={6} xs={12} md={6}>
            <h1 className="text-white">
              Learn Effectively that will take you towards your goal
            </h1>
            <Button
              variant="outline-warning btn-banner"
              className="text-white py-2 px-3 mt-2 fw-bold"
            >
              Our Courses
              <BiChevronsRight className="fs-3"></BiChevronsRight>
            </Button>
          </Col>
          <Col sm={6} xs={12} md={6}>
            <img
              className="img-fluid"
              src="https://i.ibb.co/9HfzGYk/banner.png"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
