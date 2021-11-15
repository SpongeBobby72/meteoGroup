
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Buttons from "../components/Buttons";

//import component MUI
import * as theme from "../theme";

const NavBar = () => {
  return (
    <div className="navbar" id="navBarSelectionTown" >
      <theme.Accordion>
        <theme.AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        ></theme.AccordionSummary>
        <theme.AccordionDetails>
          <theme.InputTown />
            <Buttons /> 
        </theme.AccordionDetails>
      </theme.Accordion>
    </div>
  );
};

export default NavBar;
