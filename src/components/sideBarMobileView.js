import React from "react";
import { Link } from "react-router-dom";
import briefcase from '../assets/images/briefcase1.png';
import vector2 from '../assets/images/Vector2.png';
import home from '../assets/images/home1.png';
import users from '../assets/images/user-friends 1.png';
import guarantors from '../assets/images/users 1.png';
import loan from '../assets/images/sack 1.png';
import decision from '../assets/images/Vector.png';
import savings from '../assets/images/Vector (1).png';
import loanReq from '../assets/images/Group 104.png';
import white from '../assets/images/user-check 1.png';
import karma from '../assets/images/user-times 1.png';
import savingProduct from '../assets/images/Group.png';
import fees from '../assets/images/coins-solid 1.png';
import transact from '../assets/images/icon@2x.png';
import service from '../assets/images/galaxy 1.png';
import serviceAcc from '../assets/images/user-cog 1.png';
import settle from '../assets/images/scroll 1.png';
import report from '../assets/images/chart-bar 2.png';
import pricing from '../assets/images/badge-percent 1.png';
import prefer from '../assets/images/sliders-h 1.png';
import audit from '../assets/images/clipboard-list 1.svg';

function SidebarMobile() {
    return <>
        <div id='sidebar-md'>
            <Link to="#">
                <span className="flex" style={{ marginBottom: '52px' }}>
                    <img src={briefcase} alt="" />
                    <p>switch organization</p>
                    <img src={vector2} alt="" style={{ width: '12px', height: '12px', marginTop: '5px', marginRight: '0px' }} />
                </span>
            </Link>


            <Link to="/dashboard">
                <span className="flex">
                    <img src={home} alt="" />
                    <p>Dashboard </p>
                </span>
            </Link>

            <ul>
                <h6>Customers</h6>
                <li id="active-link">
                    <Link to="/dashboard">
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
            </ul>
        </div>
    </>
}

export default SidebarMobile;