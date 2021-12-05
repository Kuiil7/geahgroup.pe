const logosData = [

{
  id: 1,
  name: "Medicina Estética",
  imageUrl: (process.env.PUBLIC_URL + "../images/geah_logo2.jpeg"),
  alt: "GEAH logo with GEAH Medicina Estetica texto"
},

{
  id: 2,
  name: "Salud y Belleza",
  imageUrl: (process.env.PUBLIC_URL + "../images/geah_logos_sbv2.png"),
  alt: "GEAH logo with GEAH Salud y belleza texto"
},
{
  id: 3,
  name: "PHARM",
  imageUrl: (process.env.PUBLIC_URL + "../images/geah_logo_pharm_3.png"),
  alt: "GEAH logo with PHARM texto"
},
]

  function Logos () {
  return (

<>
<div className="columns is-flex-wrap-wrap is-centered is-mobile px-3">
{logosData.map((logoDataIndex, j) => (
<div className="column
is-3-desktop
is-3-tablet
is-4-mobile
mt-3
"
key={logoDataIndex.id}
>
<figure className="image" >
<img  src={logoDataIndex.imageUrl} alt={logoDataIndex.alt} className=" is-rounded fade-in"/>
</figure>
</div>
))}
</div>
</>
);
};

export default Logos;