import React from 'react'
import  "./selectTab.scss";
import { FormattedMessage } from 'react-intl';

function SelectTab({name,number,selected}) {
  return (
    <div className={selected?"selectedTab":"unSelectedTab"}>
        <span  ><FormattedMessage id={name} /></span>
        <span>{number}</span>
    </div>
  )
}

export default SelectTab