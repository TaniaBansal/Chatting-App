import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';


function App() {
  return (
    <BrowserRouter>
    <div className="App"> 
    <Routes>
    <Route path="/" exact element={<HomePage />}></Route>
    <Route path="/chats" exact element={<ChatPage />}></Route>

    </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
