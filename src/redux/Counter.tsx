import { memo, useReducer, VFC } from "react";
//counterの初期値を0に設定
const initialState = 0;
//reducer関数を作成
//countStateとactionを渡して、新しいcountStateを返すように実装する
const reducerFunc = (countState: number, action: any) => {
  //reducer関数にincrement、increment、reset処理を書く
  //どの処理を渡すかはactionを渡すことによって判断する
  switch (action) {
    case "increment":
      return countState + 1;
    case "decrement":
      return countState - 1;
    case "reset":
      return initialState;
    default:
      return countState;
  }
};

export const Counter: VFC = memo(() => {
  const [count, dispatch] = useReducer(reducerFunc, initialState);
  return (
    <>
      <h2>カウント:{count}</h2>
      <div className="flex w-1/3 justify-around">
        <button
          className="rounded bg-cyan-200 w-32 h-32"
          onClick={() => dispatch("increment")}
        >
          increment
        </button>
        <button
          className="rounded bg-cyan-200 w-32 h-32"
          onClick={() => dispatch("decrement")}
        >
          decrement
        </button>
        <button
          className="rounded bg-cyan-200 w-32 h-32"
          onClick={() => dispatch("reset")}
        >
          reset
        </button>
      </div>
    </>
  );
});
