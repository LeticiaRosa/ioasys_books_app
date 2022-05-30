import { useGetDetailsBooks } from "../../../Hooks/getDetailsBooks";
import {
  BoxDetailsBook,
  ButtonClose,
  ContainerButton,
  ContainerDescription,
  ContainerInfo,
  ContainerModal,
  ContainerResenha,
  ImageBook,
  InfoBook,
  Row,
} from "./styles";

type DetailsBooksProps = {
  isOpen: boolean;
  handleClose: () => void;
  idBook: string | null;
};

type DetailsBooksData = {
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

export function DetailsBook({
  isOpen,
  handleClose,
  idBook,
}: DetailsBooksProps) {
  const { data } = useGetDetailsBooks<DetailsBooksData>(idBook);
  return (
    <ContainerModal isOpen={isOpen}>
      <ContainerButton>
        <ButtonClose onClick={handleClose}></ButtonClose>
      </ContainerButton>
      <BoxDetailsBook>
        <ContainerInfo>
          <ImageBook url={data ? data.imageUrl : null}></ImageBook>
          <InfoBook>
            <p className="title">{data?.title}</p>
            <p className="authors">{data?.authors}</p>
            <ContainerDescription>
              <Row>
                <span>INFORMAÇÕES</span>
              </Row>
              <Row>
                <span>Páginas</span>
                <p> {data?.pageCount} páginas</p>
              </Row>
              <Row>
                <span>Editora</span>
                <p> {data?.publisher}</p>
              </Row>
              <Row>
                <span>Publicação</span>
                <p> {data?.published}</p>
              </Row>
              <Row>
                <span>Idioma</span>
                <p> {data?.language}</p>
              </Row>
              <Row>
                <span>Título Original</span>
                <p> {data?.title}</p>
              </Row>
              <Row>
                <span>ISBN-10</span>
                <p> {data?.isbn10}</p>
              </Row>
              <Row>
                <span>ISBN-13</span>
                <p> {data?.isbn13}</p>
              </Row>
            </ContainerDescription>
            <ContainerResenha>
              <span>RESENHA DA EDITORA</span>

              <p>{data?.description}</p>
            </ContainerResenha>
          </InfoBook>
        </ContainerInfo>
      </BoxDetailsBook>
    </ContainerModal>
  );
}
