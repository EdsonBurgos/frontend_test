import {useState, useEffect} from 'react'

export const UseFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [controller, setController] = useState(null)

    useEffect(() => {
        const abortController = new AbortController()
        setController(abortController);
        setLoading(true);
        fetch(url, {signal: abortController.signal})
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.error("Request canceled")
                } else {
                    setError(err)
                }
            })
            .finally(() => setLoading(false))

        return () => abortController.abort()
    }, [])

    const handleCancelRequest = () => {
        if (controller){
            controller.abort();
            setError("Request canceled")
        }
    }

    return {data, loading, error, handleCancelRequest}
}