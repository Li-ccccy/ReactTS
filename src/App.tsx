import React from "react";
import { css } from "@emotion/css";

function App() {
  return (
    <div className="App">
      <div
        className={css({
          fontSize: "40px",
          background: "#000",
          color: "#fff",
        })}
      >
        你好👋，我在测试1233444 🚀
      </div>
      <div className="shadow-xl  w-60 h-20">
        <form>
          <input className="border rounded-md border-red-500 border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
          <button className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
            测试123
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
