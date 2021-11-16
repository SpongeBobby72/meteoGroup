import { useSelector } from "react-redux";
import Cards from "../components/Cards";

// MUI
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
import * as Mui from "@mui/material";

import { useEffect } from "react";

import { store } from "../store";
import { getImages } from "../store/actions/ImagesActions";
import ButtonBack from "../components/ButtonBack";

const Articles = () => {
  // UseSelector permet d'aller chercher le STORE de l'application
  const data = useSelector((state) => state.images.data);

  useEffect(() => {
    store.dispatch(getImages());
  }, []);

  return (
    <div className="article">
      
      <h1>Cats</h1>
      <ButtonBack />
      <div className="card">
        {[0].map((id) => (
          <Mui.Grid key={id}>
            <Mui.Box
              sx={{ width: 1 }}
              display="grid"
              // Colonne 4
              gridTemplateColumns="repeat(3, 1fr)"
              gap={4}
            >
              {data.length > 0 &&
                data.map((data) => {
                  return <Cards data={data} key={data.id} />;
                })}
            </Mui.Box>
          </Mui.Grid>
        ))}
      </div>
    </div>
  );
};

export default Articles;
