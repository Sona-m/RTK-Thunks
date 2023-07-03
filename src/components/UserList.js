import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../redux/store";
import UserListItem from "./UserListItem";
import Button from "./Button";
import Skeleton from "./Skeleton";

const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUser = () => {
    dispatch(addUser());
  };

  const { data, isLoading, error } = useSelector((state) => state.user);

  let content = "";
  if (isLoading) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (error) {
    content = <div>Error fetching data</div>;
  } else {
    content = data.map((user) => {
      return <UserListItem key={user.id} user={user} className= "mx-10"/>;
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between m-3 items-center bg-black text-white py-5">
        <h1 className="m-2 text-xl">List of Users</h1>
        <Button onClick={handleAddUser} className="text-white bg-black mr-10">+ Add User</Button>
      </div>
      {content}
    </div>
  );
};

export default UserList;
