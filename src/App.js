import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';
import React from 'react';
import Header from './components/Header/Header';
import { Link } from "react-router-dom";





const App = () => {

  return (

    <div className="app-container">
      <Header />
      <div>
        test Link
        <div>
          <button>
            <Link to="/users">go to user page</Link>
          </button>
          <button>
            <Link to="/admins">go to Admin page</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

