import React, { useEffect, useState } from "react";

// 그냥 값 컴포넌트는 일반적인 memo(값 비교를 통한 memo)만으로도 충분하다.
const CountA = React.memo(({ count }) => {
  useEffect(() => {
    console.log("count A ", count);
  });
  return <div>{count}</div>;
});

// const CountB = ({ obj }) => { // memo의 판단에 얕은 비교(값 비교)로 인한 리렌더 발생
//   useEffect(() => {
//     console.log("count B ", obj.count);
//   });
//   return <div>{obj.count}</div>;
// };

// 객체의 memo에 필요한 동등성 판단 함수
const areEqual = (prevProps, nextProps) => {
  return prevProps.obj.count === nextProps.obj.count;
};

// 동등성 판단 함수를 인자로 주는 강화된 React.memo()
const MemoizedCountB = React.memo(({ obj }) => {
  useEffect(() => {
    console.log("Memoization count B ", obj.count);
  });
  return <div>{obj.count}</div>;
}, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({ count: 1 });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>countA</h2>
        <CountA count={count} />
        <button onClick={() => setCount(count)}>aButton</button>
      </div>
      <div>
        <h2>countB</h2>
        <MemoizedCountB obj={obj} />
        <button onClick={() => setObj({ count: obj.count })}>bButton</button>
      </div>
    </div>
  );
};

export default OptimizeTest;
