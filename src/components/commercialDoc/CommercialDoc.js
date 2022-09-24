import React from 'react'
import { FormattedMessage } from 'react-intl';
import Info from '../info/Info';
import { Dropdown } from '../items';
import "./commercialDoc.scss"
function CommercialDoc({ doc,toggleFavourite,scratchDocToggle }) {

return (
    <div className='mainWrapper'>
      <div className='d-flex justify-content-between' >
        <p className='title'>{doc.name}</p>
        <div className='d-flex' >
          <div className={`favouriteWrapper ${doc.favourite? "favourite":"non-favourite"}`} onClick={()=>toggleFavourite(doc)} >
            <i  className={`fa-star ${doc.favourite?"fa-solid":"fa-regular "}`}></i>
            </div>
          <Dropdown id={doc.id} scratchDocToggleHandler={scratchDocToggle} />
        </div>
      </div>
      <div className='statusWrapper' >
        <p className={doc.docStatus === "سجل مشطوب" ? "inactive" : "active"} ><FormattedMessage id={"docStatus"} />:<span>{doc.docStatus}</span></p>
        <p className={doc.docType === "سجل فرعي" ? "inactive" : "active"}><FormattedMessage id={"docType"} />:<span>{doc.docType}</span></p>
      </div>
      <div className='infosWrapper' >
        {doc.infos.map((info, i) =>
          <div key={i}>
            <Info info={info} />
          </div>
        )}
      </div>
    </div>
  )
}

export default CommercialDoc