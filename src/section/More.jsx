import React from "react";
import { vids } from "../components/Data";
import { Timage, Tspan } from "../components/Tags";

function More({ setSrc }) {
  return (
    <div className="bowl_more">
      {vids.map(({ id, title, src, banar }) => {
        return (
          <div className="card_video" key={id} onClick={() => setSrc(src)}>
            <Timage src={banar} clas="banar_card" />
            <Tspan title={title} clas="title_Card" />
          </div>
        );
      })}
    </div>
  );
}

export default More;
