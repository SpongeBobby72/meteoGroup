import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Sunrise from "../assets/sunrise.svg";
import Sunset from "../assets/sunset.svg";
import NotFavorite from "../assets/addFavoris.svg";
import Favorite from "../assets/deleteFavoris.svg";

// import component mui
import * as theme from "../theme";

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
    <theme.Card className="meteoDay">
      {data.weather && (
        <theme.Card className="CountryIndice">
          <theme.Card sx={{ maxWidth: 345 }}>
            {/* Image de fond */}
            <theme.CardMedia
              className="bg-dark text-white"
              id={data.weather[0].main}
            />

            {/* Favoris */}
            <theme.CardActions>
              <theme.Button
                size="small"
                variant="contained"
                id="favoriteButton"
                value={data.name}
                onClick={(e) => handleChangeFavorite(e)}
              >
                <img src={Favoris} alt="Favoris" />
              </theme.Button>
            </theme.CardActions>

            {/* Nom de la ville */}
            <theme.CardContent>
              <theme.Typography
                gutterBottom
                className="ville"
                variant="h5"
                component="div"
              >
                {data.name}
              </theme.Typography>

              {/* Température actuelle */}
              <theme.Typography
                gutterBottom
                className="temperature"
                variant="h5"
                component="div"
              >
                {Math.round(data.main.temp)}°
              </theme.Typography>

              {/* Description du temps */}
              <theme.Typography className="weatherDescr">
                {data.weather[0].description}
              </theme.Typography>

              {/* Levée et couchée de soleil */}
              <theme.CardContent className="sunriseSunset">
                {/* Levée de soleil */}
                <theme.CardContent className="sunriseCard">
                  <theme.CardMedia
                    component="img"
                    height="35"
                    src={Sunrise}
                    className="imageSun"
                    alt="Couché de soleil"
                  />
                  <theme.Typography
                    className="weatherDescrSun"
                    variant="body2"
                    color="text.secondary"
                  >
                    {new Date(data.sys.sunrise * 1000)
                      .toLocaleString()
                      .slice(12, 17)}
                  </theme.Typography>
                </theme.CardContent>

                {/* Couchée de soleil */}
                <theme.CardContent className="sunsetCard">
                  <theme.CardMedia
                    component="img"
                    height="35"
                    src={Sunset}
                    className="imageSun"
                    alt="Couché de soleil"
                  />
                  <theme.Typography
                    className="weatherDescrSun"
                    variant="body2"
                    color="text.secondary"
                  >
                    {new Date(data.sys.sunset * 1000)
                      .toLocaleString()
                      .slice(12, 17)}
                  </theme.Typography>
                </theme.CardContent>
              </theme.CardContent>
            </theme.CardContent>
          </theme.Card>
        </theme.Card>
      )}
    </theme.Card>
  );
};

export default MeteoDay;
