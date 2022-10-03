import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate, useLocation } from 'react-router';
import { RootState } from '.';
import './App.css';
import TodoPage from './TodoPage/TodoPage';
import WelcomePage from './WelcomePage/WelcomePage';

function App() {
  const userName = useSelector((state: RootState) => state.userInfo.userName);
  const location = useLocation();

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/todolist"
          element={
            userName ? (
              <TodoPage />
            ) : (
              <Navigate to="/" state={{ from: location }} replace />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
