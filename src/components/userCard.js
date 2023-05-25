import React from "react";
import { Col, Row } from "react-bootstrap";
import icon1 from '../assets/images/icon.png';
import icon2 from '../assets/images/icon2.png';
import icon3 from '../assets/images/icon3.png';
import icon4 from '../assets/images/icon4.png';

function CardView() {
    return <>
        <div className="cardTopSection">
            <h2>Users</h2>
            <Row style={{ rowGap: "20px" }}>
                <Col md="6" lg="3">
                    <div className="cardContainer">
                        <img src={icon1} alt="" />
                        <p>users</p>
                        <h3>2,453</h3>
                    </div>
                </Col>
                <Col md="6" lg="3">
                    <div className="cardContainer">
                        <img src={icon2} alt="" />
                        <p>active users</p>
                        <h3>2,453</h3>
                    </div>
                </Col>
                <Col md="6" lg="3">
                    <div className="cardContainer">
                        <img src={icon3} alt="" />
                        <p>users with loans</p>
                        <h3>12,453</h3>
                    </div>
                </Col>
                <Col md="6" lg="3">
                    <div className="cardContainer">
                        <img src={icon4} alt="" />
                        <p>users with savings</p>
                        <h3>102,453</h3>
                    </div>
                </Col>
            </Row>
        </div>
    </>
}

export default CardView;