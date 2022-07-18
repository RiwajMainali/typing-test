import { useEffect, useState } from "react";
import Gen from "./Gen";

const SECONDS = 60;

function Start() {
  var words = Gen();

  return (
    <div class="max-w-  lg rounded overflow-hidden shadow-lg bg-blue-500">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-gray-700 text-base">
          <span>
            {words.map((i, words) => (
              <>
                <span>
                  <span></span>
                  <span>{i} </span>
                </span>
              </>
            ))}
          </span>
        </p>
      </div>
      <div class="px-6 pt-4 pb-2"></div>
    </div>
  );
}
export default Start;
