import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Form from './Form.jsx';
import FilledForm from './FilledForm.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/info" element={<FilledForm />} />
    </Routes>
  );
};

export default App;
