
import './reset.scss';
import React, { useState, useEffect } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { firestoreDb } from './firebase';
import Carousel from './Components/Carousel';
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
      </header>
			<main className='container'>
				<div className="carousel">
					<Carousel tasks={tasks} />
				</div>
				<div className="info-container">
					{tasks.map((task) => (
						<li key={task.title} id={task.title}>title: {task.title}</li>
					))}

				</div>
			</main>
    </div>
  );
}

export default App;
