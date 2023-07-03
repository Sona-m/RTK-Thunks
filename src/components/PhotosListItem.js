import React from "react";
import { GoXCircleFill } from "react-icons/go";
import { useRemovePhotoMutation } from "../redux/store";
const PhotosListItem = ({ photo }) => {
  const [removePhoto] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };
  return (
    <div onClick={handleRemovePhoto} className="relative cursor-pointer m-2">
      <img className="h-20 w-20 " src={photo.url} alt="random photo" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoXCircleFill className="text-3xl" />
      </div>
    </div>
  );
};

export default PhotosListItem;
