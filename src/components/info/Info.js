import React from 'react'
import { FormattedMessage } from 'react-intl';
import { dateFormatter } from '../../services/docsService';
import "./info.scss"
function Info({info}) {
     return (
        <div className='info'>
            <i  className={info.iconClassName}></i>
            <div>
            <span className='value' ><FormattedMessage  id={info.name}/></span>
            <p>{info.name==="expirationDate" ?dateFormatter(info.value):info.value}</p>
            </div>
        </div>
    )
}


export default Info