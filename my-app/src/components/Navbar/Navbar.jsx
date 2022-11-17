import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { SidebarData } from "./SidebarData";

import { IconContext } from "react-icons";

import "../../assets/css/components/navbar.css";

let sidebar = false;

function Navbar() {
  const [, update] = useState(new Date());

  function showSidebar() {
    sidebar = !sidebar;
    update(new Date());
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#E8C64A" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars ">
            <FaIcons.FaBars onClick={() => showSidebar()} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={() => showSidebar()}>
            <li className="navbar-toggle ">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} onClick={item.onclick}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
