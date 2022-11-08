import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import Addquery from './components/addquery';
import QueryForm from './components/queryform';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="signup" element={<SignUpForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="addquery" element={<Addquery />} />
        <Route path="queryform" element={<QueryForm />} />
      </Routes>
    </BrowserRouter>);
}

export default App;
