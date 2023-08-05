import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Instructors from './Inst';
import Ta from './ta';
import Coursecat from './coursecat';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Coursecat />
   <Instructors />
   <Ta />
  </React.StrictMode>
);

