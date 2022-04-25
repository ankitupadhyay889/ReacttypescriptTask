import {useState , useEffect} from "react";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from 'react-router-dom';

const Apical = () => {

    const [state, setdata] = useState([])

    const getCoi = () => {
        axios.get("https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0").then((res:AxiosResponse)=>{
            console.log(res.data);
            setdata(res.data.hits);
        })
    }

    useEffect(() => {
      getCoi()
    }, [])    

    const datas = useNavigate()
    const datasend = () => {
        datas("/" , {state});
    }
    
    return (
        <>
        <button onClick={datasend}>Data send to home page</button>
            {
                state.map((item:any , id) => {
                    return(
                        <div key={id}>
                            <li> {item?.created_at} </li>
                            <li> {item?.title} </li>
                            <li> {item?.author} </li>
                            <li> {item?.url} </li>
                        </div>
                    )
                })
            }
        </>
    );
};

export default Apical;