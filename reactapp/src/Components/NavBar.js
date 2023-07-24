import { Link } from "react-router-dom";
import "../Assets/css/NavBar.css";
import HomeIcon from '@mui/icons-material/Home';
import { Grid } from "@mui/material";
import { Call, Search } from "@mui/icons-material";
import Searchbar from "./Search";
import Dropdown from "./DropdownMenu";
function Navbar(){
    // const handleSearch = (searchTerm) => {
    //     console.log('Search term:', searchTerm);
    //   };
    const handleButtonClick = (event, path) => {
        event.preventDefault();
        window.location.href = path;
      };
    return(
        <div className="navbar">
            <Link to="/home">
                <Grid container alignItems="center" spacing={1}>
                    <Grid item><HomeIcon /></Grid>
                    <Grid item><span>Home</span></Grid>
                </Grid>
            </Link>
            {/* <Link>
            <Grid container alignItems="center" spacing={1} style={{paddingTop:'10px'}}>
                    <Grid item><Searchbar onSearch={handleSearch}/></Grid>
                    <Grid item><span><Search style={{paddingBottom:'15px'}} /></span></Grid>
                </Grid>
                
                
            </Link> */}
        <Link to="/volunteerprofilecreation">Volunteer Profile Creation</Link>
        {/* <div className='home-btn7'>
              <button type='button' onClick={(e) => handleButtonClick(e, '/volunteerprofilrcreation')}>
                <span className="box">
                  Volunteer Profile Creation
                </span>
              </button>
            </div> */}
            {/* <Link to="/volunteerprofilrcreation">
                <Grid container alignItems="center" spacing={1}>
                    <Grid item><Call /></Grid>
                    <Grid item><span>Volunteer Profile Creation</span></Grid>
                </Grid>
            </Link> */}
            {/* <Link>
                <Dropdown/>
            </Link> */}
            <Link to="/volunteerdetails">Volunteer Details</Link>
        <Link to="/contact">
                <Grid container alignItems="center" spacing={1}>
                    <Grid item><Call /></Grid>
                    <Grid item><span>Contact</span></Grid>
                </Grid>
            </Link>
            <Link>
                <Dropdown/>
            </Link>

        </div>
    );
}
export default Navbar; 