import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";

import 'swiper/css';

// // bootstrap css
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
// import '././assets/css/icofont.min.css';
// import '././assets/css/animate.css';
// import '././assets/css/style.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
