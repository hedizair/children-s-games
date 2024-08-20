import React, { Suspense } from 'react';
import './styles/globalStyles.css';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Bingo from './pages/Bingo';
import Loto from './pages/Loto';

function App() {
  return (
            <BrowserRouter>
              <Routes>
                <Route
                  element={ // Add a <ProtectedRoutes> if an authentication is added (check backoffice project)
                      <Suspense fallback={<div>loading</div>}>
                        <Outlet />
                      </Suspense>
                  }
                >
                  <Route index element={<Navigate replace to="home" />} />
                  <Route path="home" element={<Home />} />
                  <Route path="games">
                    <Route index element={<Navigate replace to="/home" />} />
                    <Route path="bingo" element={<Bingo />} />
                    <Route path="loto" element={<Loto />} />
                    {/* <Route path="services/:serviceId" element={<Service />} /> */}
                  </Route>
                </Route>
{/* 
                <Route path="login" element={<Login />} />
                <Route path="logged" element={<Logged />} /> */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
  );
}

export default App;
