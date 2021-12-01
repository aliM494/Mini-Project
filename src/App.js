<<<<<<< HEAD
import React, { useState } from 'react';
import Content from './Content';
import Sidebar from './Sidebar';
import {MainContext} from './contexts/MainContext'
import { BrowserRouter } from 'react-router-dom';

const App = ()=>{

    const [showMenu , setShowMenu] = useState(false);

    return (
        <BrowserRouter>
            <div>
                <MainContext.Provider value={{showMenu , setShowMenu}}>
                    <Sidebar/>
                    <Content/>            
                </MainContext.Provider>
            </div>
        </BrowserRouter>
    ) 
=======
import React, { useState } from "react";
import { taskContext } from "./taskContext";
import TaskItems from "./TaskItems";
import TopForm from "./TopForm";

function readData() {
  let request = new XMLHttpRequest();

  request.open("GET", "data.json");

  request.responseType = "json";

  request.send();

  console.log(request);
>>>>>>> 7e33624d7027a255e23fc5614731804651a4e0f2
}

const App = () => {
  const [taskItems, setTaskItems] = useState([
    {
      id: 1,
      title: "کار شماره 1",
      done: false,
    },
    {
      id: 2,
      title: "کار شماره 2",
      done: true,
    },
    {
      id: 3,
      title: "کار شماره 3",
      done: false,
    },
  ]);

  return (
    <div className="container w-100 h-100 p-3">
      <div className="row h-100 justify-content-center align-align-items-start">
        <div className="col-12 col-md-8 col-lg-6 bg-light shadow rounded-3 p-3 h_fit">
          <taskContext.Provider
            value={{
              taskItems,
              setTaskItems,
            }}
          >
            <TopForm />
            <TaskItems />
          </taskContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default App;
