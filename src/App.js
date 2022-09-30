import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import AddBooks from './fetaures/books/AddBooks';
import ViewBooks from './fetaures/books/ViewBooks'


function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/showbooks" element={<ViewBooks />}></Route>
      <Route path="/addbook" element={<AddBooks />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
