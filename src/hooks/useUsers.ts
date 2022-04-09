import axios from "axios";
import { Api } from "../types/Api";
import { useQuery } from "react-query";
import { useCallback, useState } from "react";

export const useUsers = async () => {
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

export const useNextUsers = async () => {
  const [users, setUsers] = useState<Array<Api>>([]);
  await axios
    .get<Array<Api>>("https://jsonplaceholder.typicode.com/users")
    .then((result) => setUsers(result.data));
  return users;
};

export const useGetNextUsers = () => {
  const [users, setUsers] = useState<Array<Api>>([]);
  const useNextUsers = useCallback(() => {
    axios
      .get<Array<Api>>("https://jsonplaceholder.typicode.com/users")
      .then((result) => setUsers(result.data));
  }, []);
  return { users, useNextUsers };
};
