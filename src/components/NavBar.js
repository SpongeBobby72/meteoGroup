import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
// import { NavLink } from "react-router-dom";
import Buttons from "../components/Buttons";
import InputTown from "./InputTown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const NavBar = () => {
  return (
    <div className="navbar">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        ></AccordionSummary>
        <AccordionDetails>
          <InputTown />
          {/* <NavLink exact to="/article" activeClassname="nav-active"> */}
            <Buttons />
          {/* </NavLink> */}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default NavBar;
