/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Button,
  Collapse,
  Drawer,
  Dropdown,
  Popover,
  Space,
  message,
} from "antd";
import React, { useEffect, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { DownOutlined } from "@ant-design/icons";
import { HiHome } from "react-icons/hi";
import { FaExchangeAlt } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import {
  AiFillApi,
  AiFillBank,
  AiFillCloud,
  AiFillDatabase,
  AiFillAppstore,
} from "react-icons/ai";
import {
  MdOutlineWork,
  MdPublic,
  MdPrecisionManufacturing,
  MdPermMedia,
} from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";
import { GiHealthNormal, GiHeartPlus } from "react-icons/gi";
import { BiCode, BiSolidLandscape } from "react-icons/bi";
import { HiShoppingCart } from "react-icons/hi";
import { TbApi } from "react-icons/tb";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaShuttleSpace, FaRobot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [navbarStatus, setnavbarStatus] = useState(false);
  const [navBarMonitor, setnavBarMonitor] = useState(false);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  // const onHover = () => {
  //   setHover(true)
  // }
  // const onHoverOut = () => {
  //    setHover(false)
  // }

  //Products
  const contentProducts = (
    <div className="service-inner-menu">
      <div
        className="inner-menu-item"
        onClick={() => navigate("/products/dealerportal")}
      >
        <div className="inner-menu-item-top">
          <AiFillAppstore
            className="inner-menu-icon"
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>DealerPortal</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Sales platform for dealers.</p>
        </div>
      </div>
      <div
        className="inner-menu-item"
        onClick={() => navigate("/products/timehseetapplication")}
      >
        <div className="inner-menu-item-top">
          <AiFillAppstore
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>Timesheet</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Work hours tracking tool.</p>
        </div>
      </div>
      <div
        className="inner-menu-item"
        onClick={() => navigate("/products/dispatchplanner")}
      >
        <div className="inner-menu-item-top">
          <AiFillAppstore
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>Dispatch Planner</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Task scheduling software</p>
        </div>
      </div>
      <div
        className="inner-menu-item"
        onClick={() => navigate("/products/barcodeapplication")}
      >
        <div className="inner-menu-item-top">
          <AiFillAppstore
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>Barcode Application</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Scan and manage inventory.</p>
        </div>
      </div>

      <div
        className="inner-menu-item"
        onClick={() => navigate("/products/supplierportal")}
      >
        <div className="inner-menu-item-top">
          <AiFillAppstore
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>Supplier Portal</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Supplier access hub.</p>
        </div>
      </div>

      <div
        className="inner-menu-item"
        onClick={() => navigate("/products/ticketmanagement")}
      >
        <div className="inner-menu-item-top">
          <AiFillAppstore
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>Ticketting Tool</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Ticket tracking system</p>
        </div>
      </div>

      <div
        className="inner-menu-item"
        onClick={() => navigate("/products/assessmentportal")}
      >
        <div className="inner-menu-item-top">
          <AiFillAppstore
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>Assessment Portal</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Online assessment platform.</p>
        </div>
      </div>

      <div
        className="inner-menu-item"
        onClick={() => navigate("/products/tendermanagement")}
      >
        <div className="inner-menu-item-top">
          <AiFillAppstore
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>Tender Management</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Bid and contract handling</p>
        </div>
      </div>

      <div
        className="inner-menu-item"
        onClick={() => navigate("/products/hiringapplication")}
      >
        <div className="inner-menu-item-top">
          <AiFillAppstore
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>Hiring Application</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Recruitment software platform.</p>
        </div>
      </div>

      <div
        className="inner-menu-item"
        onClick={() => navigate("/products/eprocurement")}
      >
        <div className="inner-menu-item-top">
          <AiFillAppstore
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>E-Procurement Application</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Online procurement platform.</p>
        </div>
      </div>
    </div>
  );

  //Services
  const contentService = (
    <div className="service-inner-menu">
      <div
        className="inner-menu-item"
        onClick={() => navigate("/services/ERP-Service")}
      >
        <div className="inner-menu-item-top">
          <GrOracle
            className="inner-menu-icon"
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>ERP Services</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Business software solutions</p>
        </div>
      </div>
      <div
        className="inner-menu-item"
        onClick={() => navigate("/services/API-Service")}
      >
        <div className="inner-menu-item-top">
          <TbApi
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>API Services</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Integration solutions provider</p>
        </div>
      </div>
      <div
        className="inner-menu-item"
        onClick={() => navigate("/services/Out-Sourcing")}
      >
        <div className="inner-menu-item-top">
          <MdOutlineWork
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3> Out Sourcing</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>External resource procurement.</p>
        </div>
      </div>
      <div
        className="inner-menu-item"
        onClick={() => navigate("/services/Customer-centric")}
      >
        <div className="inner-menu-item-top">
          <RiCustomerServiceFill
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>Customer centric</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Focusing on customers.</p>
        </div>
      </div>
    </div>
  );
  //Solutions

  const contentSolutions = (
    <div className="service-inner-menu">
      <div
        className="inner-menu-item"
        onClick={() => navigate("/solutions/Dataquality and MDM")}
      >
        <div className="inner-menu-item-top">
          <AiFillDatabase
            className="inner-menu-icon"
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>Data Quality & MDM</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Data integrity management.</p>
        </div>
      </div>
      <div
        className="inner-menu-item"
        onClick={() => navigate("/solutions/ECommerce(B2B,B2C)")}
      >
        <div className="inner-menu-item-top">
          <HiShoppingCart
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>Ecommerce(B2B,B2C)</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Online commerce platforms.</p>
        </div>
      </div>
      <div
        className="inner-menu-item"
        onClick={() => navigate("/solutions/IT-Managed Services")}
      >
        <div className="inner-menu-item-top">
          <MdOutlineWork
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>IT Managed Services</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Technology management solutions.</p>
        </div>
      </div>
      <div
        className="inner-menu-item"
        onClick={() => navigate("/solutions/Application Migration")}
      >
        <div className="inner-menu-item-top">
          <FaExchangeAlt
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>Application Migration</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Software transition services.</p>
        </div>
      </div>
    </div>
  );

  //Platforms
  const contentPlatforms = (
    <div className="service-inner-menu">
      <div
        className="inner-menu-item"
        onClick={() => navigate("/platforms/Oracle")}
      >
        <div className="inner-menu-item-top">
          <GrOracle
            className="inner-menu-icon"
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>Oracle</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Oracle Services Provider</p>
        </div>
      </div>
      <div
        className="inner-menu-item"
        onClick={() => navigate("/platforms/SAP")}
      >
        <div className="inner-menu-item-top">
          <AiFillApi
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>SAP</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>SAP Services Provider</p>
        </div>
      </div>
      <div
        className="inner-menu-item"
        onClick={() => navigate("/platforms/Product Development")}
      >
        <div className="inner-menu-item-top">
          <BiCode
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>Product Development</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Product Development Services</p>
        </div>
      </div>
      <div
        className="inner-menu-item"
        onClick={() => navigate("/platforms/Cloud")}
      >
        <div className="inner-menu-item-top">
          <AiFillCloud
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>Cloud</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Cloud Solutions</p>
        </div>
      </div>
    </div>
  );

  //Products
  const contentVerticals = (
    <div className="service-inner-menu">
      <div
        className="inner-menu-item"
        onClick={() => navigate("/verticals/Automative")}
      >
        <div className="inner-menu-item-top">
          <FaRobot
            className="inner-menu-icon"
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>Automative</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Automotive Industry Solutions</p>
        </div>
      </div>
      <div
        className="inner-menu-item"
        onClick={() => navigate("/verticals/Realestate")}
      >
        <div className="inner-menu-item-top">
          <BiSolidLandscape
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>Real Estate</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Real Estate Services</p>
        </div>
      </div>
      <div
        className="inner-menu-item"
        onClick={() => navigate("/verticals/Insurance")}
      >
        <div className="inner-menu-item-top">
          <MdOutlineWork
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>Insurance</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Insurance Solutions Provider</p>
        </div>
      </div>
      <div
        className="inner-menu-item"
        onClick={() => navigate("/verticals/Healthcare")}
      >
        <div className="inner-menu-item-top">
          <GiHeartPlus
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>Healthcare</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Healthcare Services and Solutions</p>
        </div>
      </div>

      <div
        className="inner-menu-item"
        onClick={() => navigate("/verticals/Publicsector")}
      >
        <div className="inner-menu-item-top">
          <MdPublic
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>Public Sector</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Public Sector Solutions</p>
        </div>
      </div>

      <div
        className="inner-menu-item"
        onClick={() => navigate("/verticals/Manufacturing")}
      >
        <div className="inner-menu-item-top">
          <MdPrecisionManufacturing
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>Manufacturing</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Manufacturing Solutions</p>
        </div>
      </div>

      <div
        className="inner-menu-item"
        onClick={() => navigate("/verticals/Energy And Utilities")}
      >
        <div className="inner-menu-item-top">
          <BsFillLightningChargeFill
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>Energy and Utilities</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Energy and Utilities Services</p>
        </div>
      </div>

      <div
        className="inner-menu-item"
        onClick={() => navigate("/verticals/Aerospace And Defense")}
      >
        <div className="inner-menu-item-top">
          <FaShuttleSpace
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>Aerospace and Defense</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Aerospace and Research Solutions</p>
        </div>
      </div>

      <div
        className="inner-menu-item"
        onClick={() => navigate("/verticals/Hospitality And Travel")}
      >
        <div className="inner-menu-item-top">
          <GiHealthNormal
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>Hospitality and Travel</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Hospitality and Travel Solutions</p>
        </div>
      </div>

      <div
        className="inner-menu-item"
        onClick={() => navigate("/verticals/Media And Entertainment")}
      >
        <div className="inner-menu-item-top">
          <MdPermMedia
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>Media and Entertainment</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Media and Entertainment Services</p>
        </div>
      </div>

      <div
        className="inner-menu-item"
        onClick={() => navigate("/verticals/Banking And Capital Markets")}
      >
        <div className="inner-menu-item-top">
          <AiFillBank
            style={{
              position: "relative",
              top: "0.3em",
              fontSize: "2em",
            }}
          />
          &nbsp;
          <h3>Banking and capital markets</h3>
        </div>
        <div className="inner-menu-item-bottom">
          <p>Banking and Capital Solutions</p>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      e.isTrusted && window.scrollY > 0
        ? setnavbarStatus(true)
        : setnavbarStatus(false);
    });
    console.log("Window y position", window.scrollY);
    console.log("windowWidth", window.innerWidth);
    window.innerWidth < 1150 ? setnavBarMonitor(true) : setnavBarMonitor(false);
    window.addEventListener("resize", (e) => {
      e.isTrusted && window.innerWidth < 1150
        ? setnavBarMonitor(true)
        : setnavBarMonitor(false);
    });
  }, []);

  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  const items = [
    {
      label: "1st menu item",
      key: "1",
    },
    {
      label: "2nd menu item",
      key: "2",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  const items2 = [
    {
      key: "1",
      label: <span className="drawer-antd-btn1">Products</span>,
      children: (
        <ul className="inner-accord">
          <li onClick={() => navigate("/products/timehseetapplication")}>
            Dealer portal
          </li>
          <li onClick={() => navigate("/products/timehseetapplication")}>
            Timesheet Application
          </li>
          <li onClick={() => navigate("/products/timehseetapplication")}>
            Dispatch Planner
          </li>
          <li onClick={() => navigate("/products/timehseetapplication")}>
            Barcode Application
          </li>
          <li onClick={() => navigate("/products/timehseetapplication")}>
            Supplier Portal
          </li>
          <li onClick={() => navigate("/products/timehseetapplication")}>
            Ticket Management Tool
          </li>
          <li onClick={() => navigate("/products/timehseetapplication")}>
            Asessment Portal
          </li>
          <li onClick={() => navigate("/products/timehseetapplication")}>
            Tender Management
          </li>
          <li onClick={() => navigate("/products/timehseetapplication")}>
            Hiring Application
          </li>
          <li onClick={() => navigate("/products/timehseetapplication")}>
            E-Procurement Application
          </li>
        </ul>
      ),
    },
    {
      key: "2",
      label: <span className="drawer-antd-btn1">Solutions</span>,
      children: (
        <ul className="inner-accord">
          <li onClick={() => navigate("/products/timehseetapplication")}>
            Master Data Management
          </li>
          <li onClick={() => navigate("/products/timehseetapplication")}>
            E-Commerce(B2B,B2C)
          </li>
          <li onClick={() => navigate("/products/timehseetapplication")}>
            IT Managed Services
            <ul>
              <li>Consulting</li>
              <li>Customization</li>
              <li>Development</li>
              <li>Integration</li>
              <li>Implementation</li>
              <li>Application Migration</li>
              <li>Maintenance / Upgrade</li>
              <li>Training</li>
              <li>Testing System Audit / Process Audit</li>
              <li>Application Management</li>
            </ul>
          </li>
        </ul>
      ),
    },
    {
      key: "3",
      label: <span className="drawer-antd-btn1">Services</span>,
      children: (
        <ul className="inner-accord">
          <li onClick={() => navigate("/products/timehseetapplication")}>
            ERP Services
          </li>
          <li onClick={() => navigate("/products/timehseetapplication")}>
            API Services
          </li>
          <li onClick={() => navigate("/products/timehseetapplication")}>
            Sustainability
          </li>
          <li onClick={() => navigate("/products/timehseetapplication")}>
            Customer Centric - CRM
          </li>
        </ul>
      ),
    },
    {
      key: "4",
      label: <span className="drawer-antd-btn1">Platforms</span>,
      children: (
        <ul className="inner-accord">
          <li onClick={() => navigate("/products/timehseetapplication")}>
            Oracle
          </li>
          <li onClick={() => navigate("/products/timehseetapplication")}>
            SAP
          </li>
          <li onClick={() => navigate("/products/timehseetapplication")}>
            Product Development
          </li>
          <li onClick={() => navigate("/products/timehseetapplication")}>
            Cloud
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div>
      {navBarMonitor ? (
        <div
          className="navbar2"
          style={{
            backgroundColor: "#fff",
          }}
        >
          <button className="hamburger-cus" onClick={showDrawer}>
            <HiMenuAlt1
              style={{
                width: "3em",
                height: "3em",
              }}
            />
          </button>
        </div>
      ) : (
        <div
          className="navbar"
          style={{
            backgroundColor: navbarStatus ? "#fff" : "transparent",
          }}
        >
          <ul className="left-nav">
            <li className="logo">
              FOCUSR <sup>Right to Focus</sup>
            </li>
          </ul>
          <ul className="right-nav">
            <li onClick={() => navigate("/")}>Home</li>
            <li>
              <Popover content={contentService} trigger="hover">
                Services
              </Popover>
            </li>
            <li>
              <Popover content={contentProducts} trigger="hover">
                Products
              </Popover>
            </li>
            <li>
              <Popover content={contentSolutions} trigger="hover">
                Solutions
              </Popover>
            </li>
            <li>
              <Popover content={contentPlatforms} trigger="hover">
                Platforms
              </Popover>
            </li>
            <li>
              <Popover content={contentVerticals} trigger="hover">
                Verticals
              </Popover>
            </li>
            <li>Company</li>
            <li>
              <a className="primary-btn-cus" href="#">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      )}
      <Drawer
        title={
          <h1 className="logo-small">
            FOCUSR{" "}
            <span>
              <sub
                style={{
                  fontSize: "9px",
                  letterSpacing: "0px",
                }}
              >
                Right to Focus
              </sub>
            </span>
          </h1>
        }
        placement="top"
        onClose={onClose}
        open={open}
        height="100%"
      >
        <button className="drawer-antd-btn">Home</button>

        <button className="drawer-antd-btn">About</button>
        <Collapse
          defaultActiveKey={["1"]}
          ghost
          items={items2}
          expandIconPosition="right"
        />
        <button className="drawer-antd-btn">Case Studies</button>
        <button className="drawer-antd-btn">Blogs</button>
        <button className="drawer-antd-btn">Verticals</button>
        <button className="drawer-antd-btn">Demo</button>
        <button className="drawer-antd-btn">Contact</button>
      </Drawer>
    </div>
  );
};

export default Navbar;
