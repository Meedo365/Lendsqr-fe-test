import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import bg from '../assets/images/bg.PNG';
import logo from '../assets/images/logo.png';
import { Col, Form, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
    let [showPassword, setShowPassword] = useState("password");
    let [show1, setShow] = useState("show");
    let switchPassword = () => {
        if (showPassword === "password") {
            setShowPassword('text');
            setShow("hide");
        } else {
            setShowPassword('password');
            setShow("show");
        }
    };
    return <>
        <Container>
            <Row>
                <Col className="login-bg mt-5" lg="6" md='5'>
                    <img id="logo" src={logo} alt='logo' />
                    <img src={bg} alt='logo' />
                </Col>
                <Col className="login-form p-5" lg="6" md='7'>
                    <Form className="m-5">
                        <h3>Welcome!</h3>
                        <p>Enter details to login.</p>
                        <FormGroup className="mb-4" >
                            <span className="flex">
                                <Form.Control
                                    type='email'
                                    placeholder="Email"
                                />
                            </span>
                        </FormGroup>
                        <FormGroup className="mb-4" >
                            <span className="flex1">
                                <Form.Control
                                    type={showPassword}
                                    placeholder="Password"
                                />
                                <p id='showPassword' onClick={() => switchPassword()}>{show1}</p>
                            </span>
                        </FormGroup>
                        <Link to="#">forgot password?</Link>
                        <br />
                        <Link to="/users">
                            <button>
                                log in
                            </button>
                        </Link>

                    </Form>
                </Col>
            </Row>
        </Container>
    </>
}
export default Login