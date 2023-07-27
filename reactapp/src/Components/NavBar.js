import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { Call } from "@mui/icons-material";
import Dropdown from "./DropdownMenu";
import "../Assets/css/NavBar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/home" className="nav-link">
        <Grid container alignItems="center" spacing={1}>
          <Grid item><HomeIcon /></Grid>
          <Grid item><span>Home</span></Grid>
        </Grid>
      </Link>
      <Link to="/volunteerprofilecreation" className="nav-link">
        <span>Volunteer Profile Creation</span>
      </Link>
      <Link to="/volunteerdetails" className="nav-link">
        <span>Volunteer Details</span>
      </Link>
      <Link to="/contact" className="nav-link">
        <Grid container alignItems="center" spacing={1}>
          <Grid item><Call /></Grid>
          <Grid item><span>Contact</span></Grid>
        </Grid>
      </Link>
      <Link to="#" className="nav-link">
        <Dropdown />
      </Link>
    </div>
  );
}

export default Navbar;
