import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
<<<<<<< HEAD
=======
// import { NavLink } from "react-router-dom";
import Buttons from "../components/Buttons";
>>>>>>> 05da7c96ca90f92b08b8fbd9baa8fc07ebee8446
import InputTown from "./InputTown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Buttons from "../components/Buttons";

const NavBar = () => {
  return (
    <div className="navbar" id="navBarSelectionTown" >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        ></AccordionSummary>
        <AccordionDetails>
          <InputTown />
<<<<<<< HEAD
            <Buttons /> 
=======
          {/* <NavLink exact to="/article" activeClassname="nav-active"> */}
            <Buttons />
          {/* </NavLink> */}
>>>>>>> 05da7c96ca90f92b08b8fbd9baa8fc07ebee8446
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default NavBar;
