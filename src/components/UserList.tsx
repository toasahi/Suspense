import { memo, useEffect, VFC } from "react";
import { useGetNextUsers, useQueryUsers } from "../hooks/useUsers";

export const UserList: VFC = memo(() => {
  // const {data,status} = useQueryUsers();
  const { users, useNextUsers } = useGetNextUsers();
  useEffect(() => {
    useNextUsers();
  }, []);
  return (
    <ul>
      {users?.map((user, index) => (
        <li key={index}>{user.name}</li>
      ))}
    </ul>
  );
});
