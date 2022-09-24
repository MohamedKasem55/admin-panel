import React from 'react'
import  "./navbar.scss"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { locales } from '../../i18n';
import { localeAction } from '../../store/localeSlice';

function Navbar() {
    let locale = useSelector(state => state.locale.locale)
    let dispatch = useDispatch()
    const languageToggleHandler = () => {
      console.log(locale);
      locale === locales.ENGLISH && dispatch(localeAction.setLocale(locales.ARABIC))
      locale === locales.ARABIC && dispatch(localeAction.setLocale(locales.ENGLISH))
    }
    return (
        <div className='main'>
            <ul className="nav flex-column">
                <li className="nav-item">
            <button onClick={languageToggleHandler}> {locale==='ar'?"English":"العربيه"} </button>
                </li>
                <li className="nav-item">
                <Link className="nav-item list" to={'/'}>  {locale==='ar'?"الرئيسيه":"Main Page"}</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-item list" to={'/importedRequests'}>{locale==='ar'?"الطلبات الوارده ":"Imported Requests"}</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar