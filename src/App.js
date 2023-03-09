import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Digital from './Components/Digital';
import { AppProvider } from './Contexts/app.context';

import TodoApp from './Component1/TodoApp';


function App() {
  return (
    <>




      <AppProvider>


        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Digital />} />
            <Route path="/todo" element={<TodoApp />} />



          </Routes>
        </BrowserRouter>



      </AppProvider>
    </>
  );
}

export default App;
