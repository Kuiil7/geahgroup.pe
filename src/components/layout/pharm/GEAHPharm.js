import React from "react";
import ImageGallery from 'react-image-gallery';
import CamuBottle from "../../images/geah_slideshow_combo_1.jpg"
import CitratoBottle from "../../images/geah_slideshow_combo_2.jpg"
import BiotinaBottle from "../../images/geah_slideshow_combo_3.jpg"
import ProductosTab from "./TabsProductos"

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



const MainContent =
<div className="container">
{Title}
<ProductosTab />
<div className="mt-4"><ImageGallery items={images} /></div>
</div>
 return (
<>
{MainContent}
</>
);
}

export default GEAHPharm;