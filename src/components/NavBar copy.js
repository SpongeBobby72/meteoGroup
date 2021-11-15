import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputTown from "./InputTown";


const NavBar = () => {
  return (
    <div className="navbar" id="navBarSelectionTown">
      <Accordion>
       
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        ></AccordionSummary>
        <AccordionDetails>
          <InputTown />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default NavBar;
