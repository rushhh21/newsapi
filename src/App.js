import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import News from './components/News'

const App = () => {

    const country = 'in';
    const apiKey = process.env.REACT_APP_NEWS_API;

    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<News key="1" country={country} apiKey={apiKey} category='general' />} />
                <Route path='/business' element={<News key="2" country={country} apiKey={apiKey} category='business' />} />
                <Route path='/entertainment' element={<News key="3" country={country} apiKey={apiKey} category='entertainment' />} />
                <Route path='/health' element={<News key="4" country={country} apiKey={apiKey} category='health' />} />
                <Route path='/science' element={<News key="5" country={country} apiKey={apiKey} category='science' />} />
                <Route path='/sports' element={<News key="6" country={country} apiKey={apiKey} category='sports' />} />
                <Route path='/technology' element={<News key="7" country={country} apiKey={apiKey} category='technology' />} />
                <Route path='*' element={<h1>ERROR : 404</h1>} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
