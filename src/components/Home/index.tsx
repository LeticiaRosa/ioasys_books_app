import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import {
  BackgroundStyle,
  Container,
  ContainerCard,
  ContainerFooter,
  ContainerHeader,
  ImgBack,
  ImgLogo,
  ImgLogOut,
  ImgNext,
  LogOut,
} from "./styles";
import { useNavigate } from "react-router-dom";
import CardBooks from "../../components/Home/Card Books";
import { useGetBooks } from "../../Hooks/getBooks";
import { DetailsBook } from "./DetailsBook";

type BooksData = {
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

export const Home = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { data, page, totalPages, setPage } = useGetBooks<BooksData[] | null>();
  const [idBook, setIdBook] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleClick = () => {
    localStorage.clear();
    navigate("/", { replace: true });
  };

  const handleNext = () => {
    if (page + 1 <= totalPages) {
      setPage(page + 1);
    }
  };

  const handleBack = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleClose = () => {
    setModalIsOpen(false);
    setIdBook(null);
  };

  return (
    <BackgroundStyle>
      <ContainerHeader>
        <Container>
          <ImgLogo></ImgLogo>
          <p>Books</p>
        </Container>
        <LogOut>
          <p>Bem vindo(a), {user?.name}</p>
          <ImgLogOut onClick={handleClick}></ImgLogOut>
        </LogOut>
      </ContainerHeader>

      <ContainerCard>
        {data?.map((item) => {
          return (
            <CardBooks
              setModalIsOpen={setModalIsOpen}
              setIdBook={setIdBook}
              key={item.id}
              publisher={item.publisher}
              id={item.id}
              title={item.title}
              description={item.description}
              authors={item.authors}
              pageCount={item.pageCount}
              category={item.category}
              imageUrl={item.imageUrl}
              isbn10={item.isbn10}
              isbn13={item.isbn13}
              language={item.language}
              published={item.published}
            />
          );
        })}
      </ContainerCard>

      <ContainerFooter>
        Página {page} de {totalPages}
        <ImgBack onClick={handleBack}></ImgBack>
        <ImgNext onClick={handleNext}></ImgNext>
      </ContainerFooter>
      {idBook && (
        <DetailsBook
          isOpen={modalIsOpen}
          handleClose={handleClose}
          idBook={idBook}
        />
      )}
    </BackgroundStyle>
  );
};
