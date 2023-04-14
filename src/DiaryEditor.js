import React, { useEffect, useRef, useState } from "react";

const DiaryEditor = ({ onCreate }) => {
  useEffect(() => {
    console.log("DiaryEditor 렌더");
  });

  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      //   alert("작성자명은 최소 한 글자 이상 입력해주세요");
      authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      //   alert("일기는 최소 다섯 글자 이상 입력해주세요.");
      contentInput.current.focus();
      return;
    }

    console.log(state);
    onCreate(state.author, state.content, state.emotion);
    alert("저장 성공");
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={(e) => {
            handleChangeState(e);
          }}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={(e) => {
            handleChangeState(e);
          }}
        />
      </div>
      <div>
        오늘의 감정 점수:
        <select
          name="emotion"
          value={state.emotion}
          onChange={(e) => {
            handleChangeState(e);
          }}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default React.memo(DiaryEditor);
