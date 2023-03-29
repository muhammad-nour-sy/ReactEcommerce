import { useEffect, useState } from "react";
const useFetch = (url) => {
    const [isPending, setIsPendig] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal })
            .then((res) => {
                if (!res.ok) {
                    throw Error("data not found");
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPendig(false);
                setError(null);
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted");
                } else {
                    setIsPendig(false);
                    setError(err.message);
                }
            });
        return () => abortCont.abort();
    }, [url]);
    return { data, isPending, error };
};
export default useFetch;
