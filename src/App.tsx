import React from "react";
import './App.css';
import Home from './components/Home.tsx'
import SearchPage from "./pages/SearchPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path = "/" element = {<Home></Home>}> 
      <Route path = '/search' element = {<SearchPage></SearchPage>}></Route>
      <Route path = '*' element = {<NotFoundPage/>}/>
    </Route>
   
  )
  )

  return (
    <>
     <RouterProvider router = {router}></RouterProvider>
    </>
  )
}

export default App;