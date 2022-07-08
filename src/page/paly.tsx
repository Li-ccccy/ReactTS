import React, { ReactElement } from "react";
import { Outlet } from "react-router-dom";
export default function paly(props: any): ReactElement {
  return (
    <>
      <div>paly</div>
      <div>OUtlet 应该在我下面</div>
      <Outlet></Outlet>
    </>
  );
}
