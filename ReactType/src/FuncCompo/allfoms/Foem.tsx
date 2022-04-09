import React, { useState } from 'react';

// this is controlled form component

const Simpleform = () => {

    const [dt, setdt] = useState<string>("");
    const [err, seterr] = useState({dt:""})

    const sub = (e: any) => {
        e.preventDefault(); 
        let cou = 0
        if(dt === ""){
            cou++
            seterr((prevState)=>{
                return{...prevState , dt: "Name is required"}
            })
        }else{
            seterr((prevState)=>{
                return{...prevState , dt: ""}
            })
        }
        if(cou===0){
            const formdata = {dt};
            console.log(formdata);
            setdt("");
        }
    }

    const haC = (e:any) => {
        setdt(e.currentTarget.value)
    }

    return (
        <div>
            <form onSubmit={sub}>
                <label> Enter name: </label> 
                <input type="text" name="name" value={dt} onChange={haC} />
                {err.dt && <p> {err.dt} </p>}
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Simpleform;