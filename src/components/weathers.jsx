import { useEffect, useState } from "react"
import useLocationCall from "./location"
import Weather_card from "./card";
import styled from "styled-components";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 80vh;
    h2{
        text-align: center;
    }
`;

const CardList = styled.div`
  display: flex;
  justify-content: space-around;

`;


const Weathers = () =>{
    const [position, setPosition] = useState({latitude:null, longitude:null})
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState([]);
    useLocationCall({setPosition, setError})

    useEffect(() => {
        if(position){
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${position.latitude}&lon=${position.longitude}&units=metric&lang=kr&appid=${import.meta.env.VITE_API_WEATHER_API_KEY}`)
            .then((res)=>res.json())
            .then((res)=>{
                setWeather(res.list.filter((data)=>{
                  return data.dt_txt.includes("12:00:00")
                 }));
            })
        }

    },[position])

    return (
        <Main>
            <h2>
                5일간의 날씨
            </h2>
        <CardList >
            {weather.map((el)=>
                <Weather_card key={el.dt} weather={el}/>
            )}
        </CardList>
        </Main>
    )
}

export default Weathers