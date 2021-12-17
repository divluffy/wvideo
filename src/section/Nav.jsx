import React from "react";
import { Timage, Tinput } from "../components/Tags";
import avatar from "../assets/wow.jpg";
import {
  Sgrid,
  Slogo,
  Snotification,
  Ssearch,
  Suploadvideo,
} from "../components/Svg";
function Nav() {
  return (
    <nav>
      <Timage src={avatar} clas="mrlt avatar_nav" />
      <Snotification clas="mrlt svg_ico" />
      <Sgrid clas="mrlt svg_ico" />
      <Suploadvideo clas="mrlt svg_ico" />
      <div className="bowl_Search">
        <Ssearch clas=" svg_ico" />
        <Tinput plc="searc Aa.." clas="input_Search" />
      </div>
      <Slogo clas="logo_site" />
    </nav>
  );
}

export default Nav;
