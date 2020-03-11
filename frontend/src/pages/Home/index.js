import React, {useState, useEffect} from 'react'
import axios from "axios";

import style from "./index.module.css"

import Main from "../../components/Main"
import Sidebar from "../../components/Sidebar"

function Home() {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({
    temperature: undefined,
    location: undefined
  });

  console.log("renderira", loading);

  useEffect(()=>{
    console.log("koristi se useEffect");
    getWeather();
  }, []);

  function getWeather(){
    console.log("tu hvatamo vrijeme:");
    axios(process.env.REACT_APP_PREFIX+"/api/weather/current")
    .then(res => {
      console.log("fetchano:", res.data);
      setWeather(res.data);
      setLoading(false);
    });
  }

  return (
      <div>
        {
          (loading) ?
            <p>Loada se</p>
            :
            <p className={style.iggy}>trenutna temperatura je: {weather.temperature} u gradu: {weather.location}</p>
          }
      </div>
  )
}

export default Home
