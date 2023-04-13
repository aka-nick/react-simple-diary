import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("mount");

    return () => {
      // unmount 시점에 실행되는 코드.
      console.log("unmount");
    };
  }, []);
  return <div>unmount testing component</div>;
};

const LifeCycle = () => {
  //   const [count, setCount] = useState(0);
  //   const [text, setText] = useState("");

  //   useEffect(() => {
  //     console.log("mount");
  //   }, []);

  //   useEffect(() => {
  //     console.log("update");
  //   });

  //   useEffect(() => {
  //     console.log("count update");
  //   }, [count]);

  //   useEffect(() => {
  //     console.log("text update");
  //   }, [text]);

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisible = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggleVisible}>on/off</button>
      {isVisible && <UnmountTest />}
      {/* <div>
        {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div> */}
    </div>
  );
};

export default LifeCycle;
