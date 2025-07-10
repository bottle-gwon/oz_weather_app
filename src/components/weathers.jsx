import { useEffect, useState } from "react"
import useLocationCall from "./location"
import Weather_card from "./card";
import styled from "styled-components";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const CardList = styled.div`
    margin-top: 300px;
  display: flex;
  justify-content: space-around;

`;


const Weathers = () =>{
    const [position, setPosition] = useState({latitude:null, longitude:null})
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState([]);
    useLocationCall({setPosition, setError})
    console.log(position)

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

    console.log(weather);
    

   

    // console.log(useCurrentWeather(useLocationCall().position.latitude,useLocationCall().position.longitude))
    return (
        <Main>
            <h2>
                현재 날씨
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