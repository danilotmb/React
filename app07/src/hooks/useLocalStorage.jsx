import { useState } from "react";


 export default function useLocalStorage(key, initialValue) {
    const [state, setState] = useState();
    const [empty, setEmpty] = useState(true);


    if (empty) {
        const json = window.localStorage.getItem(key);
        const data = JSON.parse(json);
        if (data) {
            setState(data);
        }
        else {
            setState(initialValue);
        }

        setEmpty(false);
    }


    const setStorage = (newValue) => {
        setState(newValue);
        const json = JSON.stringify(newValue);
        window.localStorage.setItem(key, json);
    }



    return [state, setStorage];
}