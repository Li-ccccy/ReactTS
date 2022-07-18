import { makeAutoObservable, runInAction } from "mobx";

class CounterStore {
  // 数值状态
  public count: number = 10;
  constructor() {
    // 将参数对象中的属性设置为 observable state
    // 将参数对象中的方法设置为 action
    makeAutoObservable(this);
  }
  get double() {
    return this.count * 2;
  }
  // 使数值状态加一
  increment() {
    console.log(999);
    this.count += 1;
  }
  // 重置数值状态
  reset() {
    this.count = 0;
  }
  // Generator 想要ts自动获取类型需要在函数声明一个泛型T接收
  *addT<T extends number>() {
    let Val: T = yield Mfeat();
    console.log(Val);
    runInAction(() => (this.count += 200));
    console.log("定时器结束");
  }
}

export default CounterStore;

function Mfeat(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 3000);
  });
}
