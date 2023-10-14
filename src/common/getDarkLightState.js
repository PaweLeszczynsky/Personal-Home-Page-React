import { useState } from "react";

export const useDarkLightState = () => {

    const [darkLightState, setDarkLightState] = useState(false);
    const changeVal = () => {
        setDarkLightState(darkLightState => darkLightState = !darkLightState);
    }
   
    return [darkLightState, changeVal];
}