import React, {
  useState,
  useEffect,
  useTransition,
  useDeferredValue,
} from "react";

const App: React.FC = (): React.ReactElement => {
  const [state, setState] = useState(0);
  const [list, setList] = useState<any[]>([]);
  const [isPending, startTransition] = useTransition();
  // isPending 并发更新是否完成
  useEffect(() => {
    // 使用了并发特性，开启并发更新
    // 分为紧急更新与缓更新，默认是紧急更新

    startTransition(() => {
      setList(new Array(1000).fill(null));
    });
  }, []);
  useEffect(() => {
    console.log(isPending);
  }, [isPending]);
  // 和上面用startTransition 效果一样  延迟更新
  const deferredList = useDeferredValue(list);
  return (
    <>
      <div
        className="w-20 h-6 bg-red-500 caret-yellow-800"
        onClick={() => {
          setState(state + 1);
        }}
      >
        {state}
      </div>
      {deferredList.map((_, i) => (
        <div key={i}>{i}</div>
      ))}
    </>
  );
};

export default App;
