import React, { useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    localStorage.setItem('myCat', 'Tom');
    sessionStorage.setItem('isLoggedIn', '1');
    var str = "22";
    localStorage.setItem('key', str);
    var getStr = localStorage.getItem('key');
    console.log(parseInt(getStr));
    let obj = {a: 'a1', b: 'a2'};
    localStorage.setItem('key2', JSON.stringify(obj));
    let getObject = localStorage.getItem('key2');
    console.log(JSON.parse(getObject));
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
