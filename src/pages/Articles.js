import { useSelector } from "react-redux";
import Cards from "../components/Cards";
// import Navigation from "../components/Navigation";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";

import { store } from "../store";
import { getImages } from "../store/actions/ImagesActions";
const Articles = () => {
  // UseSelector permet d'aller chercher le STORE de l'application
  const data = useSelector((state) => state.images.data);

  useEffect(() => {
    store.dispatch(getImages());
  }, []);

  return (
    <div className="article">
      <h1>Cats</h1>
      <div className="card">
        {[0].map((id) => (
          <Grid key={id}>
            <Box
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
            </Box>
          </Grid>
        ))}
      </div>
    </div>
  );
};

export default Articles;
