import React from "react";
import BottomPart from "./BottomPart";
import { Parallax } from 'react-parallax';
import image from "/Users/naveenm/Coding/Portfolio-master/src/Assets/back.jpg";
import TopPart from "./TopPart";

function Home() {
  return (
    <Parallax blur={7} bgImage={image}
   bgImageAlt="the cat" strength={800}>
      <TopPart />
      <BottomPart />
    </Parallax>
    
  );
}

export default Home;
