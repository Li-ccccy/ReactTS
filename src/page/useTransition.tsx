import React, {
  useState,
  useEffect,
  useTransition,
  useDeferredValue,
} from "react";

const App: React.FC = () => {
  const [state, setState] = useState(0);
  const [list, setList] = useState<any[]>([]);
  const [isPending, startTransition] = useTransition();
  // isPending 并发更新是否完成
  useEffect(() => {
    // 使用了并发特性，开启并发更新
    startTransition(() => {
      setList(new Array(1000).fill(null));
    });
  }, []);
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
      {list.map((_, i) => (
        <div key={i}>{i}</div>
      ))}
    </>
  );
};

export default App;
