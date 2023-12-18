import './App.css';
import Header from './Header'; 
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import ChatScreen from './ChatScreen';
import Chats from './Chats';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              <TinderCards />
              <SwipeButtons />
            </>
          } />
          <Route path='/chat' element={
            <>
              <Header backButton="/"/>
              <Chats />
            </>
          } />
          <Route path='/chat/:person' element={
            <>
              <Header backButton="/chat"/>
              <ChatScreen />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
