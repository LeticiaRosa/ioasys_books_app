import { useEffect, useState } from "react";

import { api } from "../api/api";

export function useGetDetailsBooks<T = unknown>(id: string | null) {
  const [data, setData] = useState<T | null>(null);
  useEffect(() => {
    api.get(`/books/${id}`).then((response) => ({
      data: setData(response.data),
    }));
  }, [id]);

  return { data };
}

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("Token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem("refresh-token");
      localStorage.removeItem("Token");
      await api
        .post("/auth/refresh-token", { refreshToken: refreshToken })
        .then((response) => {
          localStorage.setItem("Token", response.headers["authorization"]);
          localStorage.removeItem("refresh-token");
          localStorage.setItem(
            "refresh-token",
            response.headers["refresh-token"]
          );
        });
    }
    const token = localStorage.getItem("Token");

    error.headers.Authorization = token ? `Bearer ${token}` : "";
    return error;
  }
);
