import React from "react";
import { useFetchAlbumsQuery, useAddAlbumMutation } from "../redux/store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import Expandable from "./Expandable";
import AlbumListItem from "./AlbumListItem";

const AlbumsList = ({ user }) => {
  const { data, isLoading, error } = useFetchAlbumsQuery(user);
  console.log(data, isLoading, error);

  const [addAlbum, results] = useAddAlbumMutation();
  console.log(results);

  let content = "";
  if (isLoading) {
    return (content = <Skeleton times={3} className="h-10 w-full" />);
  } else if (error) {
    return (content = <div>Error loading Albums</div>);
  } else {
    content = data.map((album) => {
      return <AlbumListItem album={album} key={album.id} />;
    });
  }

  const handleAddAlbumClick = () => {
    addAlbum(user);
  };
  return (
    <div className="mx-18">
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button onClick={handleAddAlbumClick}>+ Add Album</Button>
      </div>
      <div className="">{content}</div>
    </div>
  );
};

export default AlbumsList;
