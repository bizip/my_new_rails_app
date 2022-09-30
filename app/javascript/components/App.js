import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import MessageList from './MessageList';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<MessageList />} />
        </Routes>
    </Router>
);

export default App;