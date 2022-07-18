import React, { useEffect, useState } from "react";
import TemplateStore from "../store";
import { observer } from "mobx-react";
import { flowResult } from "mobx";
const templateStore = new TemplateStore();
interface type {
  num?: number;
  age?: number;
}
const project = async () => {
  await flowResult(templateStore.addT());
};
// ts 在声明 React.FC组件，需要传递泛型，来声明该组件接收的类型
function Hoc(Templat: React.FC<type>) {
  return (props: type) => {
    return () => <Templat {...props}></Templat>;
  };
}
function Mobx(props: type) {
  const [timer] = useState(templateStore);
  useEffect(() => {
    // project();
    console.log("可以监听到不是useSate对象的变化");
  }, [timer.count]);
  return (
    <>
      <div>{props?.num}</div>
      <div>Mobx</div>
      <div>{templateStore.count}</div>
      <div>{templateStore.double}</div>
      <button onClick={() => templateStore.increment()}>+</button>
      <br />
      <button onClick={() => templateStore.reset()}>reset</button>
      <br />
      <button onClick={() => project()}>promessAdd</button>
    </>
  );
}
export default Hoc(observer(Mobx))({ num: 999 });
