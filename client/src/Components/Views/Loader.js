import React from "react";

const Loader = ({ active }) => {
  return (
    <div class="loader-container ">
      <div className={`ui dimmer ${active && "active"}`}></div>
      <div class="ui text loader">Loading</div>
      <p></p>
    </div>
  );
};

export default Loader;
