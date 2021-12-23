import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route index path='/' element={<Profile />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default App
