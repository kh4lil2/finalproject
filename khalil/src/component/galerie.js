import React from "react";
import PhotoAlbum from "react-photo-album";
const galerie = () => {
const photos = [
    {
        src: "card image/1.jpg",
        width: 700,
        height: 400,
    },
    {
        src: "card image/2.jpg",
        width: 700,
        height: 400,
    },
    {
        src: "card image/3.jpg",
        width: 700,
        height: 400,
    },
    {
        src: "card image/4.jpg",
        width: 700,
        height: 400,
    },
    {
        src: "card image/5.jpg",
        width: 700,
        height: 400,
    },
    {
        src: "card image/6.jpg",
        width: 700,
        height: 400,
    },
    {
        src: "card image/7.jpg",
        width: 700,
        height: 900,
    },
    {
        src: "card image/8.jpg",
        width: 700,
        height: 400,
    }
];
  return (
    <div>
      <PhotoAlbum layout="rows" photos={photos} />
    </div>
  )
}

export default galerie
