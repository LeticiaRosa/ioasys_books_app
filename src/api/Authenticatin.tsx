import { api } from "./api";

type SinginRequestProps = {
  email: string;
  password: string;
};
export async function SinginRequest(props: SinginRequestProps) {
  return await api
    .post("/auth/sign-in", { email: props.email, password: props.password })
    .then((response) => ({ data: response.data, headers: response.headers }))
    .catch((response) => {
      return { Error: 401 };
    });
}
