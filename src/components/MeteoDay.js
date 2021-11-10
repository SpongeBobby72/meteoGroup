import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "@mui/material/Button";
import Sunrise from "../assets/sunrise.svg";
import Sunset from "../assets/sunset.svg";
import NotFavorite from "../assets/addFavoris.svg";
import Favorite from "../assets/deleteFavoris.svg";

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
    <div className="meteoDay">
      {data.weather && (
        <div className="CountryIndice">
          {/* Image de fond */}
          <Card className="bg-dark text-white" id={data.weather[0].main}>
            <Card.ImgOverlay>
              {/* Favoris */}
              <Button
                variant="contained"
                id="favoriteButton"
                value={data.name}
                onClick={(e) => handleChangeFavorite(e)}
              >
                <img src={Favoris} alt="Favoris" />
              </Button>

              {/* Nom de la ville */}
              <Card.Title className="ville">{data.name}</Card.Title>

              {/* Température actuelle */}
              <Card.Text className="temperature">
                {Math.round(data.main.temp)}°
              </Card.Text>

              {/* Description du temps */}
              <Card.Text className="weatherDescr">
                {data.weather[0].description}
              </Card.Text>

              {/* Levée et couchée de soleil */}

              <Card className="sunriseSunset">
                {/* Levée de soleil */}
                <Card className="sunriseCard">
                  <Card.Img className="imageSun" variant="top" src={Sunrise} />
                  <Card.Text className="weatherDescrSun">
                    {new Date(data.sys.sunrise * 1000)
                      .toLocaleString()
                      .slice(12, 17)}
                  </Card.Text>
                </Card>

                {/* Couchée de soleil */}
                <Card className="sunsetCard">
                  <Card.Img className="imageSun" variant="top" src={Sunset} />
                  <Card.Text className="weatherDescrSun">
                    {new Date(data.sys.sunset * 1000)
                      .toLocaleString()
                      .slice(12, 17)}
                  </Card.Text>
                </Card>
              </Card>
            </Card.ImgOverlay>
          </Card>
        </div>
      )}
    </div>
  );
};

export default MeteoDay;
