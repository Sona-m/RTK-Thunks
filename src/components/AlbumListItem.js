import Button from "./Button";
import Expandable from "./Expandable";
import { GoXCircleFill } from "react-icons/go";
import { useRemoveAlbumMutation } from "../redux/store";
import React from "react";
import PhotosList from "./PhotosList";

const AlbumListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleDeleteAlbumClick = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button className="mr-5" onClick={handleDeleteAlbumClick}>
        <GoXCircleFill />
      </Button>
      {album.title}
    </>
  );
  return (
    <Expandable header={header} key={album.id}>
      <PhotosList album={album} />
    </Expandable>
  );
};

export default AlbumListItem;
