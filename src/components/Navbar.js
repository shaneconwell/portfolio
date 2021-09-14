import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import "../styles/Navbar.css";
import { VscMenu } from "react-icons/vsc";

import {Button, Menu, MenuItem} from "@material-ui/core";



const StyledMenu = withStyles({
  paper: {
    border: '1px solid #00FFFF',
    backgroundColor:'#000',
    boxShadow: '0px 1px 6px rgb(0, 255, 234) inset, 0px 5px 10px rgb(0, 255, 234)',

  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.contrastText,

  },
}))(MenuItem);


function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar navbar-expand-lg navbar-light align-self-end ">
      <div className="container justify-content-between ">
        <Link
          
          className="col-4 navbar-brand angle"
          aria-current="page"
          href="#"
          to="/"
        >
          <h1 >SHANE CONWELL</h1>
        </Link>
        <div className="mobileNav">
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            color="primary.light"
            variant="contained"
          ><VscMenu /></Button>
        </div>
        <div
          className="justify-content-end collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="#" to="/">
                About Me{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                href="#"
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                href="#"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          <ul>
   
              <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
              <StyledMenuItem>
                <Link className="nav-link" aria-current="page" href="#" to="/">
                  About Me{" "}
                </Link>
                </ StyledMenuItem>
                <StyledMenuItem>
                <Link
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  to="/projects"
                >
                  Projects
                </Link>
                </StyledMenuItem>
                <StyledMenuItem>
                <Link
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  to="/contact"
                >
                  Contact
                </Link>
              </StyledMenuItem>
              </StyledMenu>
            {/* </Menu> */}
          </ul>
          {/* </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
