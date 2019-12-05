import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Typography from "@material-ui/core/Typography";
import "./itemDetails.scss";

const AdressInfo = data => {
  const { city, name, street } = data;
  return (
    <div>
      <Typography variant="body1" gutterBottom>
        {name}
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
      >{`${street}, ${city}`}</Typography>
    </div>
  );
};
const MapInfo = data => {
  const { lan, lon } = data;
  return (
    <div className="map-link-block">
      <LocationOnIcon />{" "}
      <a
        href={`http://www.google.com/maps/place/${lan},${lon}`}
        target="_blank" rel="noopener noreferrer"
      >
        <span>MAP</span>
      </a>
    </div>
  );
};

const infoDataDetails = data => {
  const {    
    position,
    start,
    time,
    rate,
    rateHouer,
    adress,
    requirements,
    description
  } = data;
  return [
    { size: 12, label: "Stanowisko", text: position },
    [
      { size: 6, label: "Data", text: start },
      { size: 6, label: "Czas", text: time }
    ],
    {
      size: 12,
      label: "Wynagrodzenie na reke",
      text: `${rate}zl | ${rateHouer}zl/h`
    },
    [
      { size: 8, label: "Mejsce realizacji", text: AdressInfo(adress) },
      { size: 4, label: null, text: MapInfo(adress) }
    ],
    { size: 12, label: "Wymagania", text: requirements },
    { size: 12, label: "Wymagania:", text: description }
  ];
};

export default infoDataDetails;
