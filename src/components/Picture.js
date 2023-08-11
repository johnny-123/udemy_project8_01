import React from "react";

const Picture = ({ data }) => {
  const handleClickImg = () => {
    console.log(data);
  };
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" onClick={handleClickImg} />
      </div>
      <p>
        在此下載圖片:
        <a target="_blank" href={data.url} download={data.src.large}>
          按一下
        </a>
      </p>
    </div>
  );
};

export default Picture;
