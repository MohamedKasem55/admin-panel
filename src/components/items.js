import "./items.scss"
export const Dropdown = ({id,scratchDocToggleHandler}) => (
    <div className="dropdown">
        <button className="btn dropdownbutton" type="button" id={id} data-bs-toggle="dropdown" aria-expanded="false">
            <div style={{width:"23",height:"32px"}}>
        <i class="fa-solid fa-ellipsis-vertical pt-1" style={{color:"blue",fontSize:"25px"}}></i>
            </div>
        </button>
        <ul className="dropdown-menu" aria-labelledby={id}>
            <li>تعديل السجل التجاري </li>
            <li onClick={()=>scratchDocToggleHandler(id,"unscratch")} >تجديد السجل التجاري </li>
            <li onClick={()=>scratchDocToggleHandler(id,"scratch")}>شطب السجل التجاري </li>
        </ul>
    </div>)