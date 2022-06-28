import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { collection, onSnapshot, addDoc, query } from "firebase/firestore";
import { firestoreDb } from './firebase';
function App() {
	const [tasks, setTasks] = useState([{ title: "", category: "" }]);
	useEffect(() => {
    const q = query(collection(firestoreDb, "vinyles"));

    const unSub = onSnapshot(q, (snapshot) => {
			console.log(snapshot.docs)
      setTasks(
        snapshot.docs.map((doc) => ({ title: doc.data().title, category: doc.data().category }))
      );
    });
    return () => unSub();
  }, []);
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
