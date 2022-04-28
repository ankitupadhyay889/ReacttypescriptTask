import { Button } from '@mui/material';
import React from 'react';

const Pagination = (props:any) => {
  const {
    postperpage,
    totalPost,
    currentPage,
    paginate,
    prevPage,
    nextPage
  } = props;

  const pagNum = [];

  let i:any
  for(i-1; i<=Math.ceil(totalPost/postperpage); i++){
    pagNum.push(i)
  }

  return (
    <div>
        {
          currentPage !==1 && (
            <li>
              <Button onClick={() => prevPage()}> Prev </Button>
            </li>
          )
        }
        {
          pagNum.map((num) => {
            <li key={num}>
              <a onClick={() => paginate()}> {num} </a>
            </li>
          })
        }
        {
          pagNum.length !== currentPage && (
            <li>
              <Button onClick={() => nextPage()}> Next </Button>
            </li>
          )
        }
    </div>
  );
};

export default Pagination;