import { useEffect, useState } from 'react';
import { Container, Typography , TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Box } from '@mui/system';
import Modal from '@mui/material/Modal';
import { Pagination, Stack } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    color: "white",
    bgcolor: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const A = () => {

    const [posts, setposts] = useState<any[]>([])
    const [filtres, setFilt] = useState<any[]>([]);
    const [searchInp, setSearchInp] = useState('');
    const [pageCount, setPageCount] = useState(0)
    const [model, setmodel] = useState<any>([])
    const [showmod, setshowmod] = useState<any>(false)
    const [show, setshow] = useState<boolean>(false)
    
    const hanSho = () => setshow(true)
    const hanClo = () => setshow(false)


    const loadData = async() => {
        await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pageCount}`)
        .then (res => res.json())
        .then((result) => {
            console.log([...result.hits])
            setposts([...result.hits]);
            setPageCount(pageCount + 1)
        })
        .catch((e) => console.error(e));
    }
        useEffect(() => {
            setInterval(() => {
                loadData()
            }, 10000)
        }, [])

    const tood = () => {
        setshowmod(hanSho)
    }
    const ModelCao = () => {
        return(
        <Modal open={show} onClose={hanClo}>
            <Box sx={{ ...style, width: 500 }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">Details</Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}> Author:- {model.author} </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}> Created_At:- {model.created_at} </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}> Title:- {model.title} </Typography>
            </Box>
        </Modal>
        )
    }

    const searchItems = (searchValue:any) => {
        setSearchInp(searchValue)
        if (searchInp !== '') {
            const filtDa = posts.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInp.toLowerCase())
            })
            setFilt(filtDa)
        }
        else{
            setFilt(posts)
        }
    }

    return (
        <>
        <Container>
            <Box m={2}> <TextField label='Search...' variant="outlined" onChange={(e) => searchItems(e.target.value)} /> </Box>
            <TableContainer>
                <Table>
                <TableHead>
                <TableRow>
                <TableCell>Created_At </TableCell>
                <TableCell>Title </TableCell>
                <TableCell>URL </TableCell>
                <TableCell>Author </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {
                    searchInp.length > 1 ?(
                        filtres.map((item:any , i) => {
                            return(
                                <TableRow key={i}>
                                    <TableCell> {item.created_at} </TableCell>
                                    <TableCell> {item.title} </TableCell>
                                    <TableCell> {item.url} </TableCell>
                                    <TableCell> {item.author} </TableCell>
                                </TableRow>
                            )
                        })
                    ): (
                        posts.slice(0,5).map((item:any ,i)=>{
                            return(
                                <TableRow key={i} onClick={(e) => {setmodel(item) 
                                tood()}}>
                                    <TableCell> {item.created_at} </TableCell>
                                    <TableCell> {item.title} </TableCell>
                                    <TableCell> {item.url} </TableCell>
                                    <TableCell> {item.author} </TableCell>
                                </TableRow>
                            )
                        })
                    )
                }
                </TableBody>
                </Table>
            </TableContainer>
            {show ? <ModelCao /> : null}
            <Stack>
                <Pagination
                    count={pageCount} 
                    variant="outlined" 
                    color="primary"
                    showFirstButton={true}
                    showLastButton={true}
                    hideNextButton={true}
                    hidePrevButton={true}
                />
            </Stack>
        </Container>
        </>
    );
};

export default A;