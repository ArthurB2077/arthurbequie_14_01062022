import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { employeeReducer } from './reducers/employees'
import NavBar from './layout/NavBar'
import Home from './pages/Home'
import NewEmployee from './pages/NewEmployee'
import Employees from './pages/Employees'
import "./style/main.scss"

const store = configureStore({
  reducer: {
    employeeReducer: employeeReducer,
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add-employee" element={<NewEmployee/>} />
        <Route path="/employees" element={<Employees/>} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
