import {useState , useEffect} from "react";
import axios, { AxiosResponse } from "axios";
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Box } from "@mui/system";
import { List, ListItemText, ListItemButton, ListItemIcon, Container, Grid } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

const Apical = () => {

    const [state, setdata] = useState([]);
    const [load, setload] = useState(true);

    const getCoi = () => {
        axios.get("https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0").then((res:AxiosResponse)=>{
            console.log(res.data);
            setdata(res.data.hits);
            setload(false);
        })
    }

    useEffect(() => {
      getCoi()
    }, [])    

    const datas = useNavigate()
    const handleClick = (state: any) => {
        datas("/data" , {state: state});
    }
    if(load){
        return(
            <Box m={2} fontSize={25} color="primary.main"> Loading..... </Box>
        )
    }

    return (
        <>
        {/* <Link to="/data" state={getCoi} >Send Data</Link> */}
            {
                state && state.map((item:any , id) => {
                    return(
                        <Container key={id}>
                            <Grid container spacing={2} p={2} direction="column">
                            <Grid item sm={12} xs={12} lg={12} md={12}>
                            <Box border={1}>
                                <List component="nav" aria-label="main mailbox folders">
                                    <ListItemButton onClick={() => handleClick(item)} alignItems="flex-start">
                                        <ListItemIcon>
                                            <StarIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary={item.title} />
                                    </ListItemButton>
                                </List>
                            </Box>
                            </Grid>
                            </Grid>
                        </Container>
                    )
                })
            }
        </>
    );
};

export default Apical;




// import {useState , useEffect} from "react";
// import axios, { AxiosResponse } from "axios";
// import {Link} from "react-router-dom";

// const Apical = () => {

//     const [state, setdata] = useState([])

//     const getCoi = () => {
//         axios.get("https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0").then((res:AxiosResponse)=>{
//             console.log(res.data);
//             setdata(res.data.hits);
//         })
//     }

//     useEffect(() => {
//       getCoi()
//     }, [])    
    
//     return (
//         <>
//             {
//                 state && state.map((item:any , id) => {
//                     return(
//                         <div key={id}>
//                             <Link to={`/data/${item.title}`}> <li> {item?.title} </li> </Link>
//                         </div>
//                     )
//                 })
//             }
//         </>
//     );
// };

// export default Apical;