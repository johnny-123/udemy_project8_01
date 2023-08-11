import React from "react";
import pexels from "../img/Pexels_logo.png";

const About = () => {
  return (
    <div className="about">
      <h2>特別感謝Pexels</h2>
      <br />
      Pexels是庫存攝影和庫存素材的供應商。Pexels於2014年在德國成立，是個擁有超過320萬張免費庫存照片和視頻的線上資料庫。
      <br />
      該網站圖片來源以及銜接之API皆來自於Pexels網站提供之開源免費功能，詳細商業用途等規定請詳閱Pexels網站。
      <br />
      Pexels網址:
      <a
        className="pexels"
        href="https://www.pexels.com/zh-tw/"
        title="前往pexels官網"
      >
        https://www.pexels.com/zh-tw/
      </a>
      <br />
      <img className="pexels-logo" src={pexels} alt="pexels" />
    </div>
  );
};

export default About;
