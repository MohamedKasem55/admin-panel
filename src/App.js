import './App.css';
import { I18nProvider, locales } from './i18n';
import { useDispatch, useSelector } from 'react-redux';
import { localeAction } from './store/localeSlice';
import SelectTab from './components/selectTab/SelectTab';
import CommercialDocs from './components/commercialDocs/CommercialDocs';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ImportedRequests from './pages/ImportedRequests';
import Navbar from './components/navbar/Navbar';
function App() {
  let locale = useSelector(state => state.locale.locale)
  let dispatch = useDispatch()
  let direction = locale === locales.ENGLISH ? 'ltr' : 'rtl'
  return (
    <div style={{ direction: direction }}>
      <I18nProvider locale={locale}>
        <Router>
          <div className=' m-5 row ' style={{minHeight:"100vh"}} >
            <div className='col-3'  >
              <Navbar />
            </div>
            <div className='col-9'>
              <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/importedRequests' element={<ImportedRequests />} />
              </Routes>
            </div>
          </div>
        </Router>

      </I18nProvider>
    </div>
  );
}

export default App;
