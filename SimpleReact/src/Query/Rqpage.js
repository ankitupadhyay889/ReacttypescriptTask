import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const Rqpage = () => {

    const { isLoading , data , isError , error } = useQuery("yeekKeyHai", () => {
        return axios.get("http://localhost:4000/superheroes")
    })

    if(isLoading){
        return(
            <h2>Loading....</h2>
        )
    }

    if(isError){
        return(
            <h2> {error.message} </h2>
        )
    }

    return (
        <>
            <h2>RQ data fetch</h2>
            {
                data?.data.map((hero) => {
                    return(
                        <div key={hero.name}> {hero.name} </div>
                    )
                })
            }
        </>
    );
};

export default Rqpage;