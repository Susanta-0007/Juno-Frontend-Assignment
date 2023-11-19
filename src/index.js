import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sidebar from './Components/Sidebar';
import Body from './Components/Body';

const AppLayout=()=>{
  return(
    <div className='flex w-[100%]'>
      <Sidebar/>
      <Body/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>
);


