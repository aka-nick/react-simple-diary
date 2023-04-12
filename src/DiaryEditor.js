import { useState } from "react";

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: "",
    content: "",
  });

  const changeAuthor = (e) => {
    console.log(e.target.value);
    setState({
      ...state,
      author: e.target.value,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          value={state.author}
          onChange={(e) => {
            changeAuthor(e);
          }}
        />
      </div>
      <div>
        <textarea
          value={state.content}
          onChange={(e) => {
            setState({
              ...state,
              content: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
};

export default DiaryEditor;
