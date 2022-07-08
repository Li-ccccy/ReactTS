import * as React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Paly from "./page/paly";
import Child from "./page/child";
import Transition from "./page/useTransition";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
const App = React.lazy(() => import("./page/App"));
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* 异步组件的家在状态 */}
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* 路由的Outlet使用 */}
          <Route element={<Paly />} path="/paly">
            <Route element={<App />} path="/paly/aaa"></Route>
          </Route>
          {/* 路由参数使用 */}
          <Route element={<Child />} path="/child/:id"></Route>
          {/* useTransition 使用 */}
          <Route element={<Transition />} path="/Transition"></Route>
          <Route element={<App />} path="*"></Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
