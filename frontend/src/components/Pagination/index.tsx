import React from "react";
import { Button, Container, ContainerUl } from "./styles";

const Pagination = ({ postsPerPage, totalPosts, paginate }: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <ContainerUl>
        {pageNumbers.map((number, index) => (
          
            <Button key={index} onClick={() => paginate(number)}>{number}</Button>
         
        ))}
      </ContainerUl>
    </Container>
  );
};

export default Pagination;
