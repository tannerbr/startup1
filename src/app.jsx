import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Suggest1 } from './suggest/suggest';
import { Talks } from './allTalks/allTalks';
import { TalkofDay } from './talkofDay/talkofDay';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
      <div className='body bg-dark text-light'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <div className='navbar-brand'>
              Startup<sup>&reg;</sup>
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to=''>
                  Login
                </NavLink>
              </li>
              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='suggest'>
                    Suggest
                  </NavLink>
                </li>
              )}
              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='allTalks'>
                    All Talks
                  </NavLink>
                </li>
              )}
              <li className='nav-item'>
                <NavLink className='nav-link' to='talkofDay'>
                  Talk of the Day
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
          <Route path='/login' element={<Login userName={userName} />} />
          { <Route path='/suggest' element={<Suggest1 />} /> }
          { <Route path='/allTalks' element={<Talks />} /> }
          {<Route path='/talkofDay' element={<TalkofDay />} />}
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className='bg-light text-dark text-muted'>
          <div className='container-fluid'>
            <span className='text-reset'>Tanner Briggs</span>
            <a className='text-reset' href='https://github.com/tannerbr/startup1'>
              My Github
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
   );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;
