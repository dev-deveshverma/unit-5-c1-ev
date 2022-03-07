import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[countBook,setBook]=useState(0);
  const[countPen,setPen]=useState(0);
  const[countNotebook,setNotebook]=useState(0);
  const[countInkpen,setInkpen]=useState(0);
  const countHandleeee=(value)=>{
    setInkpen(countInkpen+value)
  }
  const countHandle=(value)=>{
    setBook(countBook+value)
  }
  const countHandleee=(value)=>{
     
    setNotebook(countNotebook+value)
  }
  const countHandlee=(value)=>{
     
    setPen(countPen+value)
  }
  return (
    <div className="items">
    <span>Books:</span>
    <button className="addBook" onClick={()=>{countHandle(1)}}>
        +
    </button>
    <button className="remBook"
    onClick={()=>{
      if(countBook>0){countHandle(-1)}
    }}>
        -
    </button>
    <span className="totalBooks">{countBook}</span>

         <br />
         <span>Pens:</span>
    <button className="addPen" onClick={()=>{countHandlee(1)}}>
        +
    </button>
    <button className="remPen"
    onClick={()=>{
      if(countPen>0){countHandlee(-1)}
    }}>
        -
    </button>
    <span className="totalPens">{countPen}</span>
    <br />
    <span>NoteBooks:</span>
    <button className="addNotebook" onClick={()=>{countHandleee(1)}}>
        +
    </button>
    <button className="remNotebook"
    onClick={()=>{
      if(countNotebook>0){countHandleee(-1)}
    }}>
        -
    </button>
    <span className="totalNotebooks">{countNotebook}</span>
    <br />
    <span>NoteInkPen:</span>
    <button className="addInkpen" onClick={()=>{countHandleeee(1)}}>
        +
    </button>
    <button className="remInkpen"
    onClick={()=>{
      if(countInkpen>0){countHandleeee(-1)}
    }}>
        -
    </button>
    <span className="totalInkpens">{countInkpen}</span>

    <div className="total">Total: {countBook+countPen+countNotebook+countInkpen}</div>
   </div>
   
   
  );
}

export default App;
