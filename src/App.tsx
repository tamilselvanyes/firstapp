import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from "react"

interface AppProps {
  name: string;
}
const App :React.FC<AppProps>= ({name}) =>  {

  const [count , setCount] = useState<number>(0);
  return(
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    )
  
  
}

export default App;
