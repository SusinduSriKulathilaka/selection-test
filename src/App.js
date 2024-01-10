import axios, { isCancel, AxiosError } from 'axios';
import { useEffect, useState } from 'react';
// import store from "./stores/AuthProvider.js";
import LoginForm from './login.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   useRouteError,
//   Route,
//   Link,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/dashboard",
//     element: Dashboard,
//     errorElement: ErrorBoundary
//   },
//   {
//     path: "login",
//     element: LoginForm
//   }
// ]);

function ErrorBoundary() {
  // let error = useRouteError();
  // console.error(error);
  // // Uncaught ReferenceError: path is not defined
  // return <div>Dang!</div>;
}

function App() {

  const [user, setUser] = useState("");


  // const unsubscribe = store.subscribe(() => console.log(store.getState()));

  useEffect(() => {
    // Make a request for a user with a given ID

  }, []);


  const getUser = () => {
    axios.get('https://reqres.in/api/users?page=2')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  // store.dispatch({ type: 'INCREMENT' })

  // const handleChange = (type) => {
  //   store.dispatch({ type: type })
  // }

  // unsubscribe();


  return (
    <div className="App">
      {/* <RouterProvider router={router} />
      <br>
      </br>
      <button onClick={() => handleChange('INCREMENT')}>
        INCREMENT
      </button>
      <button onClick={() => handleChange('DECREMENT')}>
        DECREMENT
      </button>
      {user} */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
