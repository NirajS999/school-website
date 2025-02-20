import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar} from './components';
import { AboutPage, AcademicsPage, ContactPage, FacultyPage, StudentsPage } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App /> }></Route>
      <Route path='/students' element={<StudentsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/academics" element={<AcademicsPage />} />
      <Route path="/faculty" element={<FacultyPage />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
