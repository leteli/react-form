import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Form from './Form.jsx';
import FilledForm from './FilledForm.jsx';
import NotFound from './NotFound.jsx';

const App = () => {
  const initialData = {value: '', isValid: null, message: null };
  const inputNames = ['name', 'surname', 'birthday', 'phone', 'website', 'personal', 'techStack', 'lastProject'];
  const initialState = {};
  inputNames.forEach((name) => initialState[name] = { ...initialData });
  const [values, setValues] = useState(initialState);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form values={values} setValues={setValues}/>} />
      <Route path="/info" element={<FilledForm state={values}/>} />
      <Route path="/*" element={<NotFound />}/>
    </Routes>
  );
};

export default App;
