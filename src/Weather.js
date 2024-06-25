import React from "react";
import axios from "axios";
import { Bars } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `the weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}°C`
    );
  }
  let apiKey = "1270a595e9f33378eae69b900458b3bd";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <Bars
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
