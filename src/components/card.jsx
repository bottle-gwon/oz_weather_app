import styled from "styled-components";

const Div_design = styled.div`
    display: flex;
    flex-direction: column;
    border: solid gray 1px;
    border-radius: 10px;
    padding: 10px;
    padding-left: 30px;
    padding-right: 30px;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 3px #666;
    div{
        flex: 110;
    }
    ul{
        margin:0;
        padding:0;
        display:flex;
        flex-direction: column
    }
    li{ 
        
        text-align: center;
        list-style: none;
    }

`

const Weather_card = ({ weather }) => {

    const title = weather.dt_txt.split(" ");

    return (
        <Div_design>
            <div>
                <p>{title[0]}</p>
            </div>
            <ul>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="아이콘" />
                <li>{weather.weather[0].description}</li>
                <li>🌡️ {weather.main.temp} °C</li>
            </ul>
        </Div_design>
    )
}

export default Weather_card;