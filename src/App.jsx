// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import Hero from './sections/Hero';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';


function Home() {
  return (
    <>
      <Hero />
    </>
  );
}


function OnProgress() {
  return (
    <div className='pt-24 px-10 flex justify-center items-center '>
      <div className='p-4 border border-neutral-50/10  flex flex-col items-center'>
        <h2 className='text-xl font-bold'>Sorry for the Blank Page twin! </h2>
        <p className='text-indigo-400'>I'll build ts asap!</p>
      </div>
    </div>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<OnProgress />} />
          <Route path="/work" element={<OnProgress />} />
          <Route path="/contact" element={<OnProgress />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}