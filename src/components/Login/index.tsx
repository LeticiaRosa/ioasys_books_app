import {
  ContainerHeader,
  ImgLogo,
  ContainerForm,
  ContainerEmail,
  ContainerSenha,
} from "./styles";
import { AuthContext } from "../../contexts/auth";
import { useState, useContext, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { Singin, isAutenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const arg = Singin({ email, password });
    if (isAutenticated) navigate("books", { replace: true });
  };

  return (
    <>
      <ContainerHeader>
        <ImgLogo></ImgLogo>
        <p>Books</p>
      </ContainerHeader>

      <ContainerForm onSubmit={handleSubmit}>
        <ContainerEmail>
          <p>Email</p>
          <input
            type="e-mail"
            placeholder="books@ioasys.com.br"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </ContainerEmail>
        <ContainerSenha>
          <p>Senha</p>
          <input
            type="password"
            required
            placeholder="••••••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" name="Entrar" id="Entrar" value="Entrar" />
        </ContainerSenha>
      </ContainerForm>
    </>
  );
};
