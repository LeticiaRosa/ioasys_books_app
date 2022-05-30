import React from "react";
import { Container, ContainerDescription, ImageBook, InfoBook } from "./styles";

type BookProps = {
  setIdBook: (id: string) => void;
  setModalIsOpen: (arg: boolean) => void;
  id: string;
  title: string;
  description: string;
  authors: Array<string>;
  pageCount: number;
  category: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  publisher: string;
  published: number;
};

export function CardBooks(props: BookProps) {
  const handleDetailsBooks = () => {
    props.setIdBook(props.id);
    props.setModalIsOpen(true);
  };
  return (
    <Container onClick={handleDetailsBooks} className="container">
      <ImageBook url={props.imageUrl ? props.imageUrl : null}></ImageBook>
      <InfoBook>
        <p className="title">{props.title}</p>
        <p className="authors">{props.authors[0]}</p>
        <ContainerDescription>
          <p className="pageCount">{props.pageCount} páginas</p>
          <p className="publisher">{props.publisher}</p>
          <p className="published">Publicado em {props.published}</p>
        </ContainerDescription>
      </InfoBook>
    </Container>
  );
}

export default CardBooks;
