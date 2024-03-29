import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";
const useFetch = (url, method = "GET", params = null, body = null) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);

        fetchDataFromApi(url,method,params,body)
            .then((res) => {
                setLoading(false);
                setData(res);
            })
            .catch((err) => {
                setLoading(false);
                setError("Something went wrong!");
            });
    }, [url,method,params,body]);

    return { data, loading, error };
};

export default useFetch;