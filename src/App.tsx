
import './App.css';
import React, { useState, useEffect } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { firestoreDb } from './firebase';
function App() {
	const [tasks, setTasks] = useState([{ title: "", category: "" }]);
	useEffect(() => {
    const q = query(collection(firestoreDb, "vinyles"));

    const unSub = onSnapshot(q, (snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({ title: doc.data().title, category: doc.data().category }))
      );
    });
    return () => unSub();
  }, []);
/* 	const newTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    addDoc(collection(db, "tasks"), { title: input });
    setInput("");
  }; */
	console.log(tasks)
 return (
    <div className="App">
      <header className="App-header">
				{tasks.map((task) => (
          <li key={task.title} id={task.title} title={task.category}></li>
        ))}
      </header>
    </div>
  );
}

export default App;
