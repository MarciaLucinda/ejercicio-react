import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphones,
  faSearch,
  faHeart,
  faPlay,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

import {
  Card, CardImg
} from 'reactstrap';



const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}></span>
      <div class="text-center im">
      <img
              alt="perfil" width="50%" 
              src="http://marcialucindasantos.com/prueba/chiqui.jpg" class="rounded-circle"
            ></img>    
             <h5>Lucinda</h5>
            </div>
            
     
    </div>
    <div className="side-menu">


      <Nav vertical className="list-unstyled pb-3">
        <NavItem>
          <NavLink tag={Link} to={"/"}>
            <FontAwesomeIcon icon={faHeadphones} className="mr-2" />
            Discover
          </NavLink>
          </NavItem>
          <NavItem>
          <NavLink tag={Link} to={"/search"}>
            <FontAwesomeIcon icon={faSearch} className="mr-2" />
            Search
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/fav"}>
            <FontAwesomeIcon icon={faHeart} className="mr-2" />
            Favourites
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/play"}>
            <FontAwesomeIcon icon={faPlay} className="mr-2" />
            Playlist
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/chart"}>
            <FontAwesomeIcon icon={faChartBar} className="mr-2" />
            Charts
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

export default SideBar;
