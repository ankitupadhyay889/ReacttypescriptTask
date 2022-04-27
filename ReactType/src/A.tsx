import React, { useEffect, useState } from 'react';

const A = () => {

    const [alerts, setAlerts] = useState([])


    const getD = () => {
        try {
            setInterval(async() => {
                const res = await fetch("https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0")
                const result = await res.json();
                console.log(result.hits);
                setAlerts(result.hits);
            },5000)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getD()
    }, [])

    return (
        <>
            {
                alerts.map((item:any , id) => {
                    return(
                        <div key={id}> {item.title} </div>
                    )
                })
            }
        </>
    );
};

export default A;