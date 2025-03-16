import React from "react";

function Loading() {
  return (
    <div class="flex justify-center items-center h-screen">
      <div class="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-[#014D4E]"></div>
    </div>
  );
}

export default Loading;
