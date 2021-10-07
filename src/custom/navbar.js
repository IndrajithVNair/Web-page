import React from "react";
import "./navbar.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "../components/SidebarData";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: false,
      SidebarData: SidebarData,
    };
  }
  showSidebar = () => {
    let sidebar = this.state.sidebar;
    this.setState({
      sidebar: !sidebar,
    });
  };

  showSubnav = (index, status) => {
    let SidebarData = this.state.SidebarData;
    SidebarData[index]["subNavIsOpen"] = !status;
    console.log(SidebarData);
    this.setState({
      SidebarData: SidebarData,
    });
  };
  render() {
    return (
      <>
        <div className="navbar">
          <Link to="#" className="menu-bars-hamburger">
            <FaIcons.FaBars onClick={this.showSidebar} />
          </Link>
        </div>
        <nav className={this.state.sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars" onClick={this.showSidebar}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              if (item.subNav) {
                return (
                  <>
                    <li key={index} className={item.cName}>
                      {/* the onclick function checks if the item has a sub nav */}
                      <a
                        href={"#" + item.path}
                        onClick={() => {
                          this.showSubnav(index, item.subNavIsOpen);
                        }}
                      >
                        {item.icon}
                        <span>{item.title}</span>
                        {/* this is used to check if the item has subnav and if so to
                      display them  */}
                        <div>
                          {item.subNav && item.subNavIsOpen
                            ? item.iconOpened
                            : item.subNav
                            ? item.iconClosed
                            : null}
                        </div>
                      </a>
                    </li>
                    <ul className="sub-nav">
                      {item.subNavIsOpen &&
                        item.subNav.map((item, index) => {
                          return (
                            <li className="nav-text">
                              <Link to={item.path} key={index}>
                                {item.icon}
                                <span>{item.title}</span>
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </>
                );
              } else {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
      </>
    );
  }
}
