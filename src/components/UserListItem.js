import React from "react";
import { GoXCircleFill } from "react-icons/go";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/store";
import Expandable from "./Expandable";
import AlbumsList from "./AlbumsList";

const UserListItem = ({ user }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = (user) => {
    dispatch(removeUser(user));
  };

  const header = (
    <>
      <Button className="ml-5 mr-5 bg-black text-white" onClick={() => handleDeleteClick(user)}>
        <GoXCircleFill />
      </Button>
      {user.name}
    </>
  );
  return (
    <Expandable header={header} className="mx-5">
      <AlbumsList user={user} />
    </Expandable>
  );
};

export default UserListItem;
