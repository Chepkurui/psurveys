import React from "react";
import HeaderView from "../header/header";

export default function LayoutView(props) {
  const { content } = props;

  return (
    <div className="root">
      {/* Begin Hero Bg */}
      <div id="parallax"></div>
      <HeaderView />
      {content}
    </div>
  );
}
