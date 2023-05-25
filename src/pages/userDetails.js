import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../components/navBar";
import Sidebar from "../components/sideBar";
import { Link, useParams } from "react-router-dom/dist";
import Back from "../assets/images/Vector.svg";
import userImg from "../assets/images/user.svg";
import star from "../assets/images/star.svg";
import star1 from "../assets/images/star1.svg";


function UserDetails() {
    let [user, setUser] = useState();
    let { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    let loadUser = () => {
        let url = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(result => setUser(result))
    };

    return <>
        <Container>
            <div className="nav-bottom-border">
                <NavBar />
            </div>
            <Row className="dashboard mt-2">
                <Col md='3' className="">
                    <Sidebar />
                </Col>
                <Col className="user-container" lg='9' >
                    <div className="m-4 user-container-border ">
                        <div className="page-back">
                            <Link to={"/users"}>
                                <span style={{ color: "initial" }}>
                                    <img src={Back} alt="back" className="me-2" /> Back to Users
                                </span>
                            </Link>
                        </div>

                        <div className="details-btn mt-4 flexBtw">
                            <div className="details-section">User Details</div>
                            <div>
                                <button id="blacklist-user-btn">blacklist user</button>
                                <button id="activate-user-btn">activate user</button>
                            </div>
                        </div>

                        {/* user details top card section */}
                        <div className="details-top-card mt-4">
                            <div className="details-top-top">
                                <div className="flexjcac pe-4 rule">
                                    <div className="me-3" id="userImage">
                                        <img src={user?.profile.avatar} alt={user?.profile.firstName} />
                                    </div>
                                    <div>
                                        <h3>{user?.profile.firstName} {user?.profile.lastName}</h3>
                                        <p>{user?.accountNumber}</p>
                                    </div>
                                </div>
                                <div className="user-tier px-4 rule">
                                    <p>User's Tier</p>
                                    <span>
                                        <img src={star} alt="rating" />
                                        <img src={star1} alt="rating" />
                                        <img src={star1} alt="rating" />
                                    </span>
                                </div>
                                <div className="ps-4">
                                    <h3>&#8358; {user?.accountBalance}</h3>
                                    <p style={{ fontSize: "12px" }}>9912345678 {user?.orgName}</p>
                                </div>
                            </div>
                            <div className="details-tab">
                                <h4 id="activeDetailsTab">General Details</h4>
                                <h4>Documents</h4>
                                <h4>Bank Details</h4>
                                <h4>Loan</h4>
                                <h4>Savings</h4>
                                <h4>App and System</h4>
                            </div>
                        </div>

                        {/* user full details section */}

                        <div className="details-bottom-card p-3 mt-4">
                            {/* Personal info section */}
                            <div>
                                <h3>Personal Information</h3>
                                <div className="row" >
                                    <div className="col-lg-2 col-md-4 col-6">
                                        <h6>full name</h6>
                                        <p>{user?.profile.firstName} {user?.profile.lastName}</p>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-6">
                                        <h6>phone number</h6>
                                        <p>{user?.profile.phoneNumber}</p>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6">
                                        <h6>email address</h6>
                                        <p>{user?.email}</p>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-6">
                                        <h6>bvn</h6>
                                        <p>{user?.profile.bvn}</p>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-6">
                                        <h6>gender</h6>
                                        <p>{user?.profile.gender}</p>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-6">
                                        <h6>marital status</h6>
                                        <p>Single</p>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-6">
                                        <h6>children</h6>
                                        <p>None</p>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6">
                                        <h6>type of residence</h6>
                                        <p>Parent's Apartment</p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            {/* education section */}
                            <div>
                                <h3>Education and Employment</h3>
                                <div className="row" style={{ columnGap: "0px" }}>
                                    <div className="col-lg-3 col-md-4 col-6">
                                        <h6>level of education</h6>
                                        <p>{user?.education.level}</p>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6">
                                        <h6>employment status</h6>
                                        <p>{user?.education.employmentStatus}</p>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6">
                                        <h6>sector of employment</h6>
                                        <p>{user?.education.sector}</p>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6">
                                        <h6>duration of employment</h6>
                                        <p>{user?.education.duration}</p>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6">
                                        <h6>office email</h6>
                                        <p>{user?.education.officeEmail}</p>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6">
                                        <h6>monthly income</h6>
                                        <p>&#8358;{user?.education.monthlyIncome[0].toLocaleString()} - &#8358;{user?.education.monthlyIncome[user.education.monthlyIncome.length - 1].toLocaleString()}</p>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6">
                                        <h6>loan repayment</h6>
                                        <p>{user?.education.loanRepayment}</p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            {/* socials */}
                            <div>
                                <h3>Socials</h3>
                                <div className="row">
                                    <div className="col-lg-2 col-md-4 col-6">
                                        <h6>twitter</h6>
                                        <p>{user?.socials.twitter}</p>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-6">
                                        <h6>facebook</h6>
                                        <p>{user?.socials.facebook}</p>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-6">
                                        <h6>instagram</h6>
                                        <p>{user?.socials.instagram}</p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            {/* guarantor section  */}
                            <div>
                                <h3>Guarantor</h3>
                                <div className="row">
                                    <div className="col-lg-2 col-md-4 col-6 ">
                                        <h6>full name</h6>
                                        <p>{user?.guarantor.firstName} {user?.guarantor.lastName}</p>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-6 ">
                                        <h6>phone number</h6>
                                        <p>{user?.guarantor.phoneNumber}</p>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6 ">
                                        <h6>email address</h6>
                                        <p>grace@gmail.com</p>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-6">
                                        <h6>relationship</h6>
                                        <p>Sister</p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </Col>

            </Row>
        </Container >
    </>
}

export default UserDetails;