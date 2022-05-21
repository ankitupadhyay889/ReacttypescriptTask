import React, { useState } from 'react';

const Todo = () => {

    const [input, setinput] = useState<any>("");
    const [show, setshow] = useState<any[]>([]);

    const add = () => {
        if(!input){
            
        }
        else{
            setshow([...show , input]);
            setinput("");
        }
    }

    const dele = (id:any) => {
        const update = show.filter((ele, ind) => {
            return ind !== id;
        })
        setshow(update);
    }

    return (
        <div>
            <input data-testid="input" type="text" placeholder='adding' value={input} onChange={(e) => setinput(e.target.value)}/>
            <button data-testid="add" onClick={add}> Add </button>
            <br/><br/>
            {
                show.map((element , ind:number) => {
                    return(
                        <div className="todo">
                            <p> {element} </p>
                            <button data-testid="del" onClick={() => dele(ind)}> Delete </button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Todo;