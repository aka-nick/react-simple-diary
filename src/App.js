import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

function App() {
  const dummyList = [
    {
      id: 1,
      author: "김길동",
      content: "아 졸리다",
      emotion: 3,
      created_date: new Date().getTime(),
    },
    {
      id: 2,
      author: "최길동",
      content: "아 개운하다",
      emotion: 5,
      created_date: new Date().getTime(),
    },
    {
      id: 3,
      author: "박길동",
      content: "잠 잘 잤다",
      emotion: 4,
      created_date: new Date().getTime(),
    },
    {
      id: 4,
      author: "홍길동",
      content: "낮잠 최고",
      emotion: 2,
      created_date: new Date().getTime(),
    },
    {
      id: 5,
      author: "이길동",
      content: "개운한 머리로 열심히 하자",
      emotion: 1,
      created_date: new Date().getTime(),
    },
    {
      id: 6,
      author: "길길동",
      content: "오늘 하루도 열심히 보냈다",
      emotion: 5,
      created_date: new Date().getTime(),
    },
    {
      id: 7,
      author: "우길동",
      content: "열심히 열심히 꾸준히 꾸준히",
      emotion: 4,
      created_date: new Date().getTime(),
    },
  ];

  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
