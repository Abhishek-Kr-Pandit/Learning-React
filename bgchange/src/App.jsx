import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full min-h-screen duration-200 absolute top-0 left-0" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
          onClick={()=>setColor("red")} //onclick expects a function that's why aise likha
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
          <button
          onClick={()=>setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>green</button>
          <button
          onClick={()=>setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg k" style={{backgroundColor:"blue"}}>blue</button>
          <button
          onClick={()=>setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"yellow"}}>yelllow</button>
          <button
          onClick={()=>setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>black</button>

          <button
          onClick={()=>setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>orange</button>
        </div>
      </div>
    </div>
  );
}

export default App;
