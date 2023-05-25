import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../components/navBar";
import Sidebar from "../components/sideBar";
import CardView from "../components/userCard";
import icon from '../assets/images/filter.svg';
import Table from 'react-bootstrap/Table';
import icon2 from '../assets/images/icvert.png';
import Pagination from 'react-bootstrap/Pagination';
import activate from '../assets/images/activate.svg';
import blacklist from '../assets/images/blacklist.svg';
import viewUser from '../assets/images/view.svg';
import { Link } from "react-router-dom/dist";


function Users() {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        show ? setShow(false) : setShow(true)
    };
    const [date, setDate] = useState('');

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleInputFocus = (e) => {
        e.target.type = 'date';
        e.target.placeholder = 'Select a date';
    };
    let [users, setUsers] = useState([]);
    let [page, setPage] = useState(1);
    let items = [];
    let [active, setActive] = useState(1);
    let [totalPages, setTotalPages] = useState(5);
    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item variant="secondary" key={number} active={number === active} onClick={() => { setActive(number); setPage(number) }} >
                {number}
            </Pagination.Item >,
        );
    };

    useEffect(() => {
        loadUsers();
    }, []);

    let loadUsers = () => {
        let url = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";
        fetch(url)
            .then(res => res.json())
            .then(result => setUsers(result))
    };

    return <>
        <Container>
            <div className="nav-bottom-border">
                <NavBar />
            </div>
            <Row className="dashboard mt-1">
                <Col md='3'>
                    <Sidebar logoutSection="none" />
                </Col>
                <Col className="user-container" lg='9' >
                    <div className="m-4 user-container-border ">
                        <CardView />
                        <div className="">
                            <div className="usertable mt-5">
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className="flex">
                                                    <h6>organization</h6>
                                                    <img onClick={handleShow} src={icon} alt="" style={{ width: "20px" }} />
                                                </div>
                                            </th>
                                            <th >
                                                <div className="flex">
                                                    <h6>username</h6>
                                                    <img onClick={handleShow} src={icon} alt="" />
                                                </div>
                                            </th>
                                            <th colSpan={2}>
                                                <div className="flex">
                                                    <h6>email</h6>
                                                    <img onClick={handleShow} src={icon} alt="" />
                                                </div>
                                            </th>
                                            <th>
                                                <div className="flex">
                                                    <h6>phone number</h6>
                                                    <img onClick={handleShow} src={icon} alt="" />
                                                </div>
                                            </th>
                                            <th>
                                                <div className="flex">
                                                    <h6>date joined</h6>
                                                    <img onClick={handleShow} src={icon} alt="" />
                                                </div>
                                            </th>
                                            <th>
                                                <div className="flex">
                                                    <h6>status</h6>
                                                    <img onClick={handleShow} src={icon} alt="" />
                                                </div>
                                            </th>
                                            <th>
                                                <div className="flex">
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="p-5">
                                        {show ? <div className="col-sm-12 col-md-2 float-form p-2" >
                                            <div>
                                                <div className="row">
                                                    <div className="mb-2 col-12">
                                                        <label className="form-label">organization</label>
                                                        <select className="form-select">
                                                            <option>Select</option>
                                                        </select>
                                                    </div>
                                                    <div className="mb-2 col-12">
                                                        <label className="form-label">username</label>
                                                        <input type="text" className="form-control" placeholder="Username" />
                                                    </div>
                                                    <div className="mb-2 col-12">
                                                        <label className="form-label">email</label>
                                                        <input type="email" className="form-control" placeholder="Email" />
                                                    </div>
                                                    <div className="mb-2 col-12">
                                                        <label className="form-label">date</label>
                                                        <input type="text"
                                                            value={date} className="form-control" onChange={handleDateChange} placeholder="Date"
                                                            onFocus={handleInputFocus} />
                                                    </div>
                                                    <div className="mb-2 col-12">
                                                        <label className="form-label">phone</label>
                                                        <input type="tel" className="form-control" placeholder="Phone Number" />
                                                    </div>
                                                    <div className="mb-2 col-12">
                                                        <label className="form-label">Status</label>
                                                        <select className="form-select">
                                                            <option>Select</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="flexBtw filter-modal my-2">
                                                    <button id="reset-btn" type="button" >Submit</button>
                                                    <button id="filter-btn" type="button" >Filter</button>
                                                </div>

                                            </div>
                                        </div> : <div></div>}

                                        {users.length === 0 ? <div className="p-5 pb-0 ps-0">Loading Data ...</div> : users.map((e, i) => {
                                            let active;
                                            let activeStyle;
                                            let time = new Date(e.createdAt).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                                            let day = new Date(e.createdAt).getDate();
                                            let month = new Date(e.createdAt).toLocaleDateString('en-us', { month: 'short' });
                                            let year = new Date(e.createdAt).getFullYear();
                                            let date = month + " " + day + "," + " " + year + " " + time;
                                            if (i % 2 == 0) {
                                                active = "active"; activeStyle = "active-text-active";
                                            } else if (i % 3 == 0) {
                                                active = "blacklisted"; activeStyle = "active-text-blacklist";
                                            } else if (i % 5 == 0) {
                                                active = "pending"; activeStyle = "active-text-pending";
                                            } else {
                                                active = "inactive"; activeStyle = "active-text-inactive";
                                            }
                                            return (
                                                <tr key={i}>
                                                    <td>{e?.orgName}</td>
                                                    <td style={{ maxWidth: "100px", overflowWrap: "break-word" }} >{e?.userName}</td>
                                                    <td colSpan={2} style={{ textTransform: "lowercase", overflowWrap: "break-word" }}>{e?.email}</td>
                                                    <td>{e?.phoneNumber}</td>
                                                    <td>{date}</td>
                                                    <td>
                                                        <p className={`active-text ${activeStyle}`}>{active}</p>
                                                    </td>
                                                    <td >
                                                        <div class="dropdown">
                                                            <p
                                                                type="button"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >  <img src={icon2} /></p>
                                                            <ul className="dropdown-menu _menue-down _fs-sm">
                                                                <Link to={`/user/${e?.id}`}>
                                                                    <li className="fs-sm text-left action-btn" >
                                                                        <span>
                                                                            <img src={viewUser} alt="" style={{ height: 20, width: 30 }} /> View Details
                                                                        </span>
                                                                    </li>  </Link>
                                                                <li className="fs-sm text-left action-btn"  >
                                                                    <span>
                                                                        <img src={blacklist} alt="" style={{ height: 20, width: 30 }} /> Blacklist User
                                                                    </span>
                                                                </li>
                                                                <li className="fs-sm text-left action-btn"  >
                                                                    <span>
                                                                        <img src={activate} alt="" style={{ height: 20, width: 30 }} />  Activate User User
                                                                    </span>

                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })}

                                    </tbody>
                                </Table>
                            </div>
                            <div className="mt-4 flexBtw table-footer-container">
                                <div className="table-footer">
                                    Showing <span>
                                        <select>
                                            <option>100</option>
                                        </select>
                                    </span> out of 100
                                </div>
                                <div>
                                    <Pagination>
                                        <Pagination.Prev id="page-btn" />
                                        <Pagination.Item active>{1}</Pagination.Item>
                                        <Pagination.Item>{2}</Pagination.Item>
                                        <Pagination.Item>{3}</Pagination.Item>
                                        <Pagination.Ellipsis />
                                        <Pagination.Item>{15}</Pagination.Item>
                                        <Pagination.Item>{16}</Pagination.Item>
                                        <Pagination.Next id="page-btn" />
                                    </Pagination>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>

            </Row>
        </Container >
    </>
}

export default Users;