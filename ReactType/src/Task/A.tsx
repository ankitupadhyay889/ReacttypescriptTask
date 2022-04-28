import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container, Typography , TextField } from '@mui/material';
import { Box } from '@mui/system';
import Modal from '@mui/material/Modal';
import Pagination  from './Pagination';
// import ReactPaginate from 'react-paginate';

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
    const [totapos , settotapos] = useState<any>(0);
    const [postperpage] = useState<any>(10);
    const [currentPage, setcurrentPage] = useState<number>(1);
    const [model, setmodel] = useState<any>([])
    const [showmod, setshowmod] = useState<any>(false)
    const [show, setshow] = useState<boolean>(false)
    const hanSho = () => setshow(true)
    const hanClo = () => setshow(false)
    
    useEffect(() => {
        getD()
    }, [])

    const getD = () => {
        try {
            setInterval(async() => {
                const res = await fetch("https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0")
                const result = await res.json();
                // console.log(result.hits);
                setposts(result.hits);
                settotapos(result.hits.length);
                // setPageCount(result.nbPages)
            },10000)
        } catch (error) {
            console.log(error)
        }
    }

    // const handlePageChange = (selectedObject:any) => {
	// 	setcurrentPage(selectedObject.selected);
	// 	getD();
	// };
    const indPa = currentPage + postperpage;
    const indeFirpa = indPa - postperpage;
    const currntPos = posts.slice(indeFirpa , indPa);
    const paginate = (pageNum:any) => setcurrentPage(pageNum);
    const prePag = () => setcurrentPage(currentPage - 1);
    const nexPag = () => setcurrentPage(currentPage + 1);

    const shoPag = () => {
        return(
            <Pagination 
            postperpage={postperpage}
            totalPost={totapos}
            currentPage = {currentPage}
            paginate={paginate}
            prevPage={prePag}
            nextPage={nexPag}
            />
        )
    }


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
                        currntPos.slice(0,5).map((item:any ,i)=>{
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
            <div> {shoPag()} </div>
            {/* {
                <ReactPaginate 
                pageCount={pageCount}
                pageRange={2}
                marginPagesDisplayed={2}
                onPageChange={handlePageChange}
                containerClassName={'container'}
                previousLinkClassName={'page'}
                breakClassName={'page'}
                nextLinkClassName={'page'}
                pageClassName={'page'}
                disabledClassName={'disabled'}
                activeClassName={'active'}/>
            } */}
        </Container>
        </>
    );
};

export default A;