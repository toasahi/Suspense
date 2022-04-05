import axios from "axios";
import { Api } from "../types/Api";
import { useQuery } from "react-query";

export const useUsers = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // return res.json();

  const { data } = await axios.get<Array<Api>>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
};

export const useQueryUsers = () => {
  return useQuery<Api[], Error>({
    queryFn: useUsers,
    cacheTime: 10000,
    staleTime: 0,
  });
};
