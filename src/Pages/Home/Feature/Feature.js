import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CgDesignmodo } from "react-icons/cg";
import { FaHeartbeat, FaLaptopCode } from "react-icons/fa";
import { GiHorseHead } from "react-icons/gi";
import "./Feature.css";

const Feature = () => {
  return (
    <Container className="my-5">
      <h1 className="fw-bold text-color">Features Courses</h1>
      <p className="w-50 mx-auto text-color">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturie
      </p>
      <Row>
        <Col sm={6} xs={12} md={3} className="border p-5">
          <FaHeartbeat className="fs-icon d-block mx-auto mb-2 text-primary"></FaHeartbeat>
          Web Development
        </Col>
        <Col sm={6} xs={12} md={3} className="border p-5 ">
          <FaLaptopCode className="fs-icon d-block mx-auto mb-2 text-warning"></FaLaptopCode>
          Programming Languages
        </Col>
        <Col sm={6} xs={12} md={3} className="border p-5">
          <GiHorseHead className="fs-icon d-block mx-auto mb-2 text-danger"></GiHorseHead>
          App Development
        </Col>
        <Col sm={6} xs={12} md={3} className="border p-5 ">
          <CgDesignmodo className="fs-icon d-block mx-auto mb-2 text-info"></CgDesignmodo>
          Web Design
        </Col>
      </Row>
    </Container>
  );
};

export default Feature;
