import { useEffect } from "react";

const useLocationCall = ({setPosition,setError}) =>{

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
         (position) => {
             setPosition({
                 latitude: position.coords.latitude,
                 longitude: position.coords.longitude,
             });
             setError(null);
         },
         (error) => {
             setError(error);
             console.error('위치 정보를 가져오는데 실패 했음', error)
         }
       )
    }, []);
}



export default useLocationCall;