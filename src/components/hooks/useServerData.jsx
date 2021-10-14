import React, {useEffect, useState} from 'react';
import axios from "axios";

const useServerData = ({url, isButtonClick}) => {
    const [contactData, setContactData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!isButtonClick) {
            return
        }
        setIsLoading(true)
        axios.get(url).then((resp) => {
            setContactData(resp.data)
            setIsLoading(false)
            setIsLoaded(true)

        })

    }, [url, isButtonClick])

    return [{contactData, isLoading, isLoaded, setContactData, setIsLoading}]
}
 export default useServerData;