import React, { FormEvent, useState } from 'react';

const Nrmlform = () => {
  
  const [data, setdata] = useState<string>()

  const han = (e: React.ChangeEvent<HTMLInputElement>) => {
    setdata(e.target.value)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    if(!data){
      e.preventDefault();
      alert("Please fill first")
    }else{
      e.preventDefault();
      console.log(data);
    }
  }; 

  return (
      <div>
        <p> {data} </p>
        <form onSubmit={onSubmit}>
          <input type="text" value={data} onChange={han} />
        <br/>
        <button type="submit">Submit</button>
        </form>
      </div>
  );
}

export default Nrmlform;