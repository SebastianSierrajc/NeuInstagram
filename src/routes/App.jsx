import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Profile from '@pages/Profile'
import NotFound from '@pages/NotFound'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route index path='/profile' element={<Profile />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default App
