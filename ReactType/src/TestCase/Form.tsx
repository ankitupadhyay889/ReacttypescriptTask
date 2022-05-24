import { Button } from '@mui/material';
import React, { useState } from 'react';


const Form = () => {

    const [name, setname] = useState<any>("");
    const [show, setshow] = useState<Array<any>>([])

    const sub = (e:any) => {
        e.preventDefault();
        const all = {data:name};
        setshow([...show , all]);
        setname("");
    }
    
    const resetForm = () => {
        setname("")
    }

    const haC = (e:any) => {
        setname(e.currentTarget.value)
    }

    return (
        <div>
            <form onSubmit={sub}>
                <label> Enter name: </label> 
                <input data-testid="name" type="text" placeholder='Enter Name' name="name" value={name} onChange={haC} />
                <br/>
                <Button data-testid="submit" type="submit">Submit</Button>
                <Button data-testid="sub" onClick={resetForm}>Reset</Button>
            </form>
            <div>
                {
                    show.map((curEl:any , id:number) => {
                        return(
                            <div key={id}>
                                <p> {curEl.name} </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Form;