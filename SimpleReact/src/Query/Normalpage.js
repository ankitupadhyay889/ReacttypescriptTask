import React, { useEffect, useState } from 'react';
import axios from "axios";

const Normalpage = () => {

    const [Load, setLoad] = useState(true);
    const [data, setdata] = useState([]);
    const [error, seterror] = useState("");

    useEffect(() => {
      axios.get("http://localhost:4000/superheroes").then((res)=>{
        setdata(res.data);
        setLoad(false);
      }).catch((error) => {
          seterror(error.message);
          setLoad(false)
      })
    }, [])
    
    if(Load){
        return(
            <h2>Loading...</h2>
        ) 
    }

    if(error){
        return(
            <h2> {error.message} </h2>
        )
    }

    return (
        <>
            <h2> Normal data fetch. </h2>
            {
                data.map((hero) =>{
                    return(
                        <div key={hero.id}>{hero.id} {hero.name}</div>
                    )
                })
            }
        </>
    );
};

export default Normalpage;