import "./App.css";
import { useEffect, useRef, useState } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import LifeCycle from "./LifeCycle";

// https://jsonplaceholder.typicode.com/comments

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current++;
    setData([newItem, ...data]);
  };
  const onRemove = (id) => {
    const newDiaryList = data.filter((it) => it.id !== id);
    setData(newDiaryList);
    console.log("deleted : ", id);
  };
  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: 5,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });

    setData(initData);
    console.log(initData);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {/* <LifeCycle /> */}
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit} />
    </div>
  );
}

export default App;
