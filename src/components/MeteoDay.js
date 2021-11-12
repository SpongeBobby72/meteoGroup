import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Sunrise from "../assets/sunrise.svg";
import Sunset from "../assets/sunset.svg";
import NotFavorite from "../assets/addFavoris.svg";
import Favorite from "../assets/deleteFavoris.svg";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { store } from "../store";

import { postCountry, getCountry } from "../store/actions/FavoriteActions";

const MeteoDay = () => {
  const data = useSelector((state) => state.weather.data);
  const dataCountry = useSelector((state) => state.favorite.dataCountry);
  const [Favoris, setFavoris] = useState("");

  useEffect(() => {
    store.dispatch(getCountry());
    if (data.name) checkIsFavorite(data.name);
  }, [data]);

  function checkIsFavorite(country) {
    if (dataCountry.length > 0) {
      const icon = dataCountry.some((item) => item.name === country);
      if (icon) {
        setFavoris(Favorite);
      } else {
        setFavoris(NotFavorite);
      }
    }
  }

  function handleChangeFavorite(e) {
    const checkExist = dataCountry.some((item) => item.name === data.name);
    if (!checkExist) {
      // console.log('pas dans la db');
      setFavoris(Favorite);
      const form = { name: data.name };
      store.dispatch(postCountry(form));
    } else {
      // console.log('dans la db');
      setFavoris(NotFavorite);
    }
  }

  // console.log(Math.floor(Date.now() / 1000));
  // const [weatherStyle, setWeatherStyle] = useState("night");
  // const [playOnce, setPlayOnce] = useState(true);

  // if(playOnce){
  //   if (data.sys) {
  //     const sunRise = data.sys.sunrise;
  //     const sunSet = data.sys.sunset;
  //     const time = Math.floor(Date.now() / 1000);
  // console.log(sunRise);
  // console.log(sunSet);
  // console.log(time);
  //     if (sunRise < time && time < sunSet) {
  //       setWeatherStyle(data.weather[0].main);
  //       setPlayOnce (false);
  //     } else {
  //       setWeatherStyle("night");
  //       setPlayOnce (false);
  //     }
  //   }
  // }
  // console.log(weatherStyle);

  return (
    <Card className="meteoDay">
      {data.weather && (
        <Card className="CountryIndice">

          <Card sx={{ maxWidth: 345 }}>
            {/* Image de fond */}
            <CardMedia
              className="bg-dark text-white"
              id={data.weather[0].main}
            />

            {/* Favoris */}
            <CardActions>
              <Button
                size="small"
                variant="contained"
                id="favoriteButton"
                value={data.name}
                onClick={(e) => handleChangeFavorite(e)}
              >
                <img src={Favoris} alt="Favoris" />
              </Button>
            </CardActions>

            {/* Nom de la ville */}
            <CardContent>
              <Typography
                gutterBottom
                className="ville"
                variant="h5"
                component="div"
              >
                {data.name}
              </Typography>

              {/* Température actuelle */}
              <Typography
                gutterBottom
                className="temperature"
                variant="h5"
                component="div"
              >
                {Math.round(data.main.temp)}°
              </Typography>

              {/* Description du temps */}
              <Typography className="weatherDescr">
                {data.weather[0].description}
              </Typography>

              {/* Levée et couchée de soleil */}
              <CardContent className="sunriseSunset">
                {/* Levée de soleil */}
                <CardContent className="sunriseCard">
                  <CardMedia
                    component="img"
                    height="35"
                    src={Sunrise}
                    className="imageSun"
                    alt="Couché de soleil"
                  />
                  <Typography
                    className="weatherDescrSun"
                    variant="body2"
                    color="text.secondary"
                  >
                    {new Date(data.sys.sunrise * 1000)
                      .toLocaleString()
                      .slice(12, 17)}
                  </Typography>
                </CardContent>

                {/* Couchée de soleil */}
                <CardContent className="sunsetCard">
                  <CardMedia
                    component="img"
                    height="35"
                    src={Sunset}
                    className="imageSun"
                    alt="Couché de soleil"
                  />
                  <Typography
                    className="weatherDescrSun"
                    variant="body2"
                    color="text.secondary"
                  >
                    {new Date(data.sys.sunset * 1000)
                      .toLocaleString()
                      .slice(12, 17)}
                  </Typography>
                </CardContent>
              </CardContent>
            </CardContent>
          </Card>
        </Card>
      )}
    </Card>
  );
};

export default MeteoDay;
