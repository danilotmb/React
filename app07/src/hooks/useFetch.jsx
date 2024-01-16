import { useEffect, useState } from "react";



export default function useFetch(url, option = { method: "GET", mode: "cors" }) {

    const [data, setData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    //const url = "http://127.0.0.1:5000/read_folder";

    useEffect(() => {
        fetch(url, option)
            .then(data => data.json())
            .then(data => { setData(data); setLoading(false) })
            .catch(error => setError(error));
    }, [])


    return { data, error, loading } 













}