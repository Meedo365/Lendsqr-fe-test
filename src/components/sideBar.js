import React from "react";
import { Link } from "react-router-dom";
import briefcase from '../assets/images/briefcase 1.svg';
import vector2 from '../assets/images/Vector2.svg';
import home from '../assets/images/home1.png';
import users from '../assets/images/user-friends 1.svg';
import guarantors from '../assets/images/users 1.png';
import loan from '../assets/images/sack 1.svg';
import decision from '../assets/images/Vector.png';
import savings from '../assets/images/piggy-bank 1.svg';
import loanReq from '../assets/images/Group 104.png';
import white from '../assets/images/user-check 1.svg';
import karma from '../assets/images/user-times 1.svg';
import savingProduct from '../assets/images/Group.svg';
import fees from '../assets/images/coins-solid 1.svg';
import transact from '../assets/images/icon.svg';
import service from '../assets/images/galaxy 1.svg';
import serviceAcc from '../assets/images/user-cog 1.svg';
import settle from '../assets/images/scroll 1.svg';
import report from '../assets/images/chart-bar 2.svg';
import pricing from '../assets/images/badge-percent 1.svg';
import prefer from '../assets/images/sliders-h 1.svg';
import audit from '../assets/images/clipboard-list 1.svg';
import logout from '../assets/images/sign-out 1.svg';
import systems from '../assets/images/tire 1.svg';


function Sidebar(props) {
    return <>
        <div id="sidebar-lg">
            <Link to="#">
                <span className="flex" style={{ marginBottom: '52px' }}>
                    <img src={briefcase} alt="" />
                    <p>switch organization</p>
                    <img src={vector2} alt="" style={{ width: '12px', height: '12px', marginTop: '5px', marginRight: '0px' }} />
                </span>
            </Link>


            <Link to="#">
                <span className="flex">
                    <img src={home} alt="" />
                    <p>Dashboard </p>
                </span>
            </Link>

            <ul>
                <h6>Customers</h6>
                <li id="active-link">
                    <Link to="/users">
                        <span className="flex">
                            <img src={users} alt="" />
                            <p>users</p>
                        </span>
                    </Link>
                </li>

                <li>
                    <Link to="#">
                        <span className="flex">
                            <img src={guarantors} alt="" />
                            <p>guarantors</p>
                        </span>
                    </Link>
                </li>

                <li>
                    <Link to="#">
                        <span className="flex">
                            <img src={loan} alt="" />
                            <p>loans</p>
                        </span>
                    </Link>
                </li>

                <li>
                    <Link to="#">
                        <span className="flex">
                            <img src={decision} alt="" />
                            <p>decision models</p>
                        </span>
                    </Link>
                </li>

                <li>
                    <Link to="#">
                        <span className="flex">
                            <img src={savings} alt="" />
                            <p>savings</p>
                        </span>
                    </Link>
                </li>

                <li>
                    <Link to="#">
                        <span className="flex">
                            <img src={loanReq} alt="" />
                            <p>loan requests</p>
                        </span>
                    </Link>
                </li>

                <li>
                    <Link to="#">
                        <span className="flex">
                            <img src={white} alt="" />
                            <p>whitelist</p>
                        </span>
                    </Link>
                </li>

                <li>
                    <Link to="#">
                        <span className="flex">
                            <img src={karma} alt="" />
                            <p>karma</p>
                        </span>
                    </Link>
                </li>
            </ul>

            <ul>
                <h6>businesses</h6>
                <li>
                    <Link to="#">
                        <span className="flex">
                            <img src={briefcase} alt="" />
                            <p>organization</p>
                        </span>
                    </Link>
                </li>

                <li>
                    <Link to="#">
                        <span className="flex">
                            <img src={loanReq} alt="" />
                            <p>loan products</p>
                        </span>
                    </Link>
                </li>

                <li>
                    <Link to="#">
                        <span className="flex">
                            <img src={savingProduct} alt="" />
                            <p>saving products</p>
                        </span>
                    </Link>
                </li>

                <li>
                    <Link to="#">
                        <span className="flex">
                            <img src={fees} alt="" />
                            <p>fees and charges </p>
                        </span>
                    </Link>
                </li>

                <li>
                    <Link to="#">
                        <span className="flex">
                            <img src={transact} alt="" />
                            <p>transactions</p>
                        </span>
                    </Link>
                </li>

                <li>
                    <Link to="#">
                        <span className="flex">
                            <img src={service} alt="" />
                            <p>services</p>
                        </span>
                    </Link>
                </li>

                <li>
                    <Link to="#">
                        <span className="flex">
                            <img src={serviceAcc} alt="" />
                            <p>service account</p>
                        </span>
                    </Link>
                </li>

                <li>
                    <Link to="#">
                        <span className="flex">
                            <img src={settle} alt="" />
                            <p>settlements</p>
                        </span>
                    </Link>
                </li>

                <li>
                    <Link to="#">
                        <span className="flex">
                            <img src={report} alt="" />
                            <p>reports</p>
                        </span>
                    </Link>
                </li>
            </ul>

            <ul>
                <h6>settings</h6>
                <li>
                    <Link to="#">
                        <span className="flex">
                            <img src={prefer} alt="" />
                            <p>preferences</p>
                        </span>
                    </Link>
                </li>

                <li>
                    <Link to="#">
                        <span className="flex">
                            <img src={pricing} alt="" />
                            <p>fees and pricing</p>
                        </span>
                    </Link>
                </li>

                <li>
                    <Link to="#">
                        <span className="flex">
                            <img src={audit} alt="" />
                            <p>audit logs</p>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <span className="flex">
                            <img src={systems} alt="" />
                            <p>Systems messages </p>
                        </span>
                    </Link>
                </li>

            </ul>

            <div className={props.logoutSection}>
                <hr />
                <ul>
                    <li>
                        <Link to="#">
                            <span className="flex">
                                <img src={logout} alt="" />
                                <p>Logout </p>
                            </span>
                        </Link>
                    </li>

                    <li>
                        <span className="flex">
                            <p style={{ textTransform: "lowercase" }}>v.1.2.0 </p>
                        </span>
                    </li>
                </ul>
            </div>

        </div>
    </>
}

export default Sidebar;