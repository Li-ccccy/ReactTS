import React, { useState, useEffect, useRef } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
type TestVal = number | null | undefined;
function Child() {
  const [test, setTest] = useState(0);
  let location = useLocation();
  let params = useParams();
  let [getParams, setParams] = useSearchParams();
  let Ford = useRef<TestVal>(null);
  useEffect(() => console.log(999), []);
  useEffect(() => {
    console.log("我默认执行一次");
    console.log("----", test);
    Ford.current = test;
    console.log("Location信息：", location);
    console.log("params信息：", params);
    console.log("searchParams信息：", getParams.getAll("sex"));
    console.log("我重新执行了");
  }, [test, location, params, getParams]);
  const changeParams = async () => {
    console.log("我开始修改了啊");
    await setTest(test + 1);
    console.log(Ford);
    setParams({ age: "50", sort: "-1" });
    console.log("我执行了改变参数方法");
  };
  return (
    <div>
      <div>我是child组件 {test}</div>
      <button className="bg-red-300" onClick={changeParams}>
        我来修改搜索参数
      </button>
    </div>
  );
}

export default Child;
