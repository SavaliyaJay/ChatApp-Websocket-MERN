import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Chatpage from './Pages/Chatpage';
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chatpage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
