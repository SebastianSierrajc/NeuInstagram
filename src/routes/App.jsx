import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from '@containers/Layout'
import Home from '@pages/Home'
import Profile from '@pages/Profile'
import NotFound from '@pages/NotFound'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route index path='profile' element={<Profile />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
