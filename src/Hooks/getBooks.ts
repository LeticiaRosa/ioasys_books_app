import { useEffect, useState } from "react";

import { api } from "../api/api";

export function useGetBooks<T = unknown>() {
  const [data, setData] = useState<T | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<T | null>(null);
  useEffect(() => {
    api.get("/books", { params: { page: 1 } }).then((response) => ({
      data: setData(response.data.data),
      infoPage: setPage(response.data.page),
      totalPages: setTotalPages(response.data.totalPages),
      totalItems: setTotalItems(response.data.setTotalItems),
    }));
  }, [page]);

  return { data, page, totalPages, totalItems, setPage };
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
