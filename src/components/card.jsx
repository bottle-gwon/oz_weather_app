import styled from "styled-components";

const Div_design = styled.div`
    display: flex;
    flex-direction: column;
    border: solid gray 1px;
    border-radius: 10px;
    padding: 10px;
    div{
        display: flex;
        align-items: center
    }
    li{
        list-style: none;
    }

`

const Weather_card = ({ weather }) => {



    return (
        <Div_design>
            <div>
                <p>{weather.dt_txt}</p>
            </div>
            <ul>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="아이콘" />
                <li>{weather.weather[0].description}</li>
                <li>{weather.main.temp}</li>
            </ul>
        </Div_design>
    )
}

export default Weather_card;