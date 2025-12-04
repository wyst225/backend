import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
const [count, setCount] = useState(0);
const [running, setRunning] = useState(false);


useEffect(() => {
if (!running) return;
const interval = setInterval(() => setCount(c => c + 1), 1000);
return () => clearInterval(interval);
}, [running]);

const [text, setText] = useState("");

useEffect(() => {
const saved = localStorage.getItem("inputText");
if (saved) setText(saved);
}, []);

useEffect(() => {
localStorage.setItem("inputText", text);
}, [text]);

const resetInput = () => {
setText("");
localStorage.removeItem("inputText");
};

const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


useEffect(() => {
const controller = new AbortController();


axios
.get("https://jsonplaceholder.typicode.com/users", {
signal: controller.signal,
})
.then(res => {
setData(res.data);
setLoading(false);
})
.catch(err => {
if (axios.isCancel(err)) return;
setError("Hiba történt");
setLoading(false);
});


return () => controller.abort();
}, []);


return (
<div className="container">
<div className="box">
<h2>Számláló</h2>
<p className="count">{count}</p>
<button onClick={() => setRunning(r => !r)} className="btn animated">
{running ? "Stop" : "Start"}
</button>
</div>


<div className="box">
<h2>Input figyelés</h2>
<input
value={text}
onChange={(e) => setText(e.target.value)}
placeholder="Írj valamit..."
/>
<button onClick={resetInput} className="btn animated reset-btn">Reset</button>
</div>


<div className="box">
<h2>API Users</h2>
{loading && <p>Betöltés...</p>}
{error && <p>{error}</p>}
{data && (
<ul className="user-list">
{data.map(u => (
<li key={u.id}>{u.name}</li>
))}
</ul>
)}
</div>
</div>
);
}

export default App
