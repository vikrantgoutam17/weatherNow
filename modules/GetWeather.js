import React from "react";

const GetWeather = async (city, country) => {
  console.log(city);
  const data = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=53c3cde21b8aad41e55436e8e9c452b0`
  );
  return data.json();
};
export default GetWeather;
