import React from "react";
import ProjectHeader from "./ProjectHeader";
import ImageGallery from 'react-image-gallery';
import CamuBottle from "../../images/geah_slideshow_combo_1.jpg"
import CitratoBottle from "../../images/geah_slideshow_combo_2.jpg"
import BiotinaBottle from "../../images/geah_slideshow_combo_3.jpg"

function GEAHPharm () {
  const images = [
    {
      original: CamuBottle,
      thumbnail: CamuBottle,
    },
    {
      original: BiotinaBottle,
      thumbnail: BiotinaBottle,
    },
    {
      original: CitratoBottle,
      thumbnail: CitratoBottle,
    },
  ];

 const Title =  <p className="title">GEAH PHARM</p>
const Subtitle = <p className="subtitle">Bienvenidos!</p>

 return (
<>
<div className="container has-text-centered">
{Title}
{Subtitle}
<ProjectHeader/>
<ImageGallery items={images} />
</div>
</>
);
}

export default GEAHPharm;