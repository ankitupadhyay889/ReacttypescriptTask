import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Pagination, Stack } from '@mui/material';

interface IProps {
    id: number,
    created_at: number | any,
    title: string | any,
    url: string | any,
    author: string,
    // children: any
}

type usePro = Array<IProps>

const Das = () => {
    const [hitsdata, setHitsData] = useState<usePro>([]);
    //for pagination
    const [pageCount, setPageCount] = useState<number>(0)

    
    const loadData = async() => {
        await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pageCount}`)
        .then (res => res.json())
        .then((result) => {
            console.log([...result.hits])
            setHitsData([...result.hits])
            setPageCount(pageCount + 1)
        })
        .catch((e) => console.error(e));
    }
        useEffect(() => {
            setInterval(() => {
                loadData()
            }, 10000)
        }, [])
       
        const showData = () => {
            console.log('click me')
        }
      
  return (
    <div>
        <h1>API Data of Story</h1>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Created_at</TableCell>
                        <TableCell>Titel</TableCell>
                        <TableCell>Author</TableCell>
                        <TableCell>URL</TableCell>
                    </TableRow> 
                </TableHead>
                <TableBody>
                    {
                        hitsdata.map((item, index) => {
                            return(
                                <TableRow key={index} onClick={showData}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.created_at}</TableCell>
                                    <TableCell>{item.title}</TableCell>
                                    <TableCell>{item.author}</TableCell>
                                    <TableCell>{item.url}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
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
            {/* <Button onClick={loadData}>loadmore</Button> */}
        </TableContainer>
    </div>
  )
}
export default Das;














// import { Button } from '@mui/material';
// import React from 'react';

// const Pagination = (props:any) => {
//   const {
//     postperpage,
//     totalPost,
//     currentPage,
//     paginate,
//     prevPage,
//     nextPage
//   } = props;

//   const pagNum = [];

//   let i:any
//   for(i-1; i<=Math.ceil(totalPost/postperpage); i++){
//     pagNum.push(i)
//   }

//   return (
//     <nav>
//     <div className='pagination justify-content-center'>
//         {
//           currentPage !==1 && (
//             <li>
//               <Button onClick={() => prevPage()}> Prev </Button>
//             </li>
//           )
//         }
//         {
//           pagNum.map((num) => {
//             <li key={num}>
//               <a onClick={() => paginate()}> {num} </a>
//             </li>
//           })
//         }
//         {
//           pagNum.length !== currentPage && (
//             <li>
//               <Button onClick={() => nextPage()}> Next </Button>
//             </li>
//           )
//         }
//     </div>
//     </nav>
//   );
// };

// export default Pagination;