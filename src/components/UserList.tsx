import { memo, VFC } from "react";
import { useQueryUsers } from "../hooks/useUsers";

export const UserList: VFC = memo(() => {
  const { status, data } = useQueryUsers();
  return (
    <ul>
      {data?.map((user, index) => (
        <li key={index}>{user.name}</li>
      ))}
    </ul>
  );
});
