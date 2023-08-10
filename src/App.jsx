import './App.css'
import CreateForm from './components/CreateForm'
import CategoriesForm from './components/CategoriesForm'
import ClozeForm from './components/ClozeForm'
import ComprehensionForm from './components/ComprehensionForm'
import Home from './components/Home'
// import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/createform" element={<CreateForm/>} />
          <Route path="/clozeform" element={<ClozeForm/>} />
          <Route path="/categoriesform" element={<CategoriesForm/>} />
          <Route path="/comprehensionform" element={<ComprehensionForm/>} />
          <Route exact path="*" element={<Home/>} />
        </Routes>
      </Router>
    </>
  )
}