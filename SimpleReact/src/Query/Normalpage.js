import React, { useEffect, useState } from 'react';
import axios from "axios";

const Normalpage = () => {

    const [Load, setLoad] = useState(true);
    const [data, setdata] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:4000/superheroes").then((res)=>{
        setdata(res.data);
        setLoad(false);
      })
    }, [])
    
    if(Load){
        return <h2>Loading...</h2>
    }

    return (
        <>
            <h2> Normal data fetch. </h2>
            {
                data.map((hero) =>{
                    return(
                        <div key={hero.name}> {hero.name} </div>
                    )
                })
            }
        </>
    );
};

export default Normalpage;