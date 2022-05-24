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
            <p data-testid="todoCount">{show.length} todos</p>
            <input data-testid="input" type="text" placeholder='adding' value={input} onChange={(e) => setinput(e.target.value)}/>
            <button data-testid="add" onClick={add}> Add </button>
            <br/><br/>
            {
                show.map((element , ind:number) => {
                    return(
                        <div className="todo" data-testid="todo">
                            <p> {element} </p>
                            <button data-testid="deletebtn" onClick={() => dele(ind)}> Delete </button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Todo;