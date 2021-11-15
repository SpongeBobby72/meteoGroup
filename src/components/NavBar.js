import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
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
            <Buttons /> 
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default NavBar;
