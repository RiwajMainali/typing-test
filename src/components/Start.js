import { useEffect, useState } from "react";
import Gen from "./Gen";

const SECONDS = 60;

function Start() {
  var words = Gen();
  w = function () {
    for (var i = 0; i < words.length; i++) {
      console.log(words[i]);
    }
  };

  return (
    <div>
      <>
        <span>{w}</span>
      </>
    </div>
  );
}
export default Start;
