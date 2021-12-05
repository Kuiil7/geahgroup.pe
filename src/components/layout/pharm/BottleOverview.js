import React from "react";
import ProjectHeader from "./ProjectHeader";

function BottleOverview(props) {
const ComingSoon =<p className="title is-3">Coming soon!</p>
const BottleImg = <img alt={props.altText} width={props.width}  src={props.bottleImage} />

  return (
    <>
<div className="container">
<ProjectHeader/>
<div className="columns-reverse ">
<div className="column ">{ComingSoon}</div>
<div className="column is-3">{BottleImg}</div>
</div>
</div>
    </>
  );
}
export default BottleOverview;

