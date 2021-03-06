import React, { useEffect, useState } from 'react';
import axios,{AxiosResponse} from "axios";
import List from '@mui/material/List';

type Sma = {
    title: string;
    image?: string;
    description: string;   
}

const Firstapi = () => {

    const [covid, setcovid] = useState<Sma[]>([])    

    const getCovid = () => {
        axios.get("https://fakestoreapi.com/products").then((res: AxiosResponse) => {
            console.log(res.data);
            setcovid(res.data);
        })
    }

    useEffect(() => {
      getCovid()
    }, [])
    
    return (
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {
                    covid.map((item , id: number) => {
                        return(
                            <>
                                <ul className="mdc-list" key={id}>
                                <li className="mdc-image-list__item">
                                    <div className="mdc-image-list__image-aspect-container">
                                    <img className="mdc-image-list__image" src={item.image} alt="io"/>
                                    </div>
                                    <div className="mdc-image-list__supporting">
                                    <span className="mdc-image-list__label">{item.title}</span>
                                    </div>
                                </li>
                                </ul>
                            </>
                        )
                    })
                }   
            </List>   
        </>      
    );
};

export default Firstapi;

                            /* <ListItem key={id}>
                                <ListItemAvatar>
                                    <Avatar src={item.image} alt="im" />
                                </ListItemAvatar>
                                <ListItemText>{item.title}</ListItemText>
                            </ListItem> 
                            */