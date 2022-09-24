import React, { useEffect, useState } from 'react'
import SelectTab from '../selectTab/SelectTab'
import "./commercialDocs.scss"
import CommercialDoc from '../commercialDoc/CommercialDoc';
import { docFavouriteToggle, getDocs } from '../../services/docsService';

function CommercialDocs() {
    const [tabs, setTabs] = useState([])
    const [selectedTabId, setSelectedTabId] = useState('all')

    const [allDocs, setAllDocs] = useState([])
    const [renderedDocs, setRenderedDocs] = useState([])

    const tabsFormation = () => {
        const arr=[
            {id:"all",name:"allDocs",number:0},
            {id:"secondary",name:"secondaryDocs",number:0},
            {id:"establishment",name:"establishmentDocs",number:0},
            {id:"favourite",name:"favouriteDocs",number:0},
        ]
        arr[0].number = allDocs.length
        allDocs.forEach(doc => {
            if (doc.docType === 'سجل فرعي')
                arr[1].number++
            if (doc.infos.find(info=>info.name==='entityType').value === 'مؤسسه')
                arr[2].number++
            if (doc.favourite === true)
                arr[3].number++
        })
        setTabs([...arr])
    }

    useEffect(() => {
        getAllDocs()
    }, [])

    const getAllDocs=async()=>{
        let arr=await getDocs()
        setAllDocs([...arr])
    }
    const handleRenderedDocs = ()=>{
        let filteredDocs=[]
        switch (selectedTabId) {
            case "all":
                filteredDocs=[...allDocs]
                break;
            case "secondary":
                filteredDocs=allDocs.filter(doc => doc.docType === 'سجل فرعي')
                break;
                case "establishment":
                filteredDocs=allDocs.filter(doc => (doc.infos.find(info=>info.name==='entityType').value) === 'مؤسسه')
                break;
                case "favourite":
                filteredDocs=allDocs.filter(doc => doc.favourite === true)
                break;
        }
        setRenderedDocs([...filteredDocs])
    }


    const toggoleFavouriteHandler =(handledDoc)=>{
        let arr = allDocs.map(doc=>{
            if(doc.id===handledDoc.id)
            return{...doc,favourite: !handledDoc.favourite}
            else
            return doc
        })
        setAllDocs([...arr])
        docFavouriteToggle(handledDoc)
    }
    
    const scartDocToggleHandler=(id,identifer)=>{
        let arr = allDocs.map(doc=>{
            if(doc.id===id)
            return{...doc,docStatus:(identifer==="scratch"?"سجل مشطوب":"سجل قائم")}
            else
            return doc
        })
        setAllDocs([...arr])
    }
    useEffect(() => {
      tabsFormation()
      handleRenderedDocs()
    }, [allDocs,selectedTabId])
    return (
        <>
            <span className='mainTitle'>قائمه السجلات التجاريه</span>
            <div className='tabsWrapper' >
                {tabs.map((tab) =>
                (<div key={tab.id} onClick={()=>setSelectedTabId(tab.id)}>
                    <SelectTab name={tab.name} number={tab.number} selected={tab.id === selectedTabId ? true : false} />
                </div>)
                )}
            </div>
            {renderedDocs.length!=0 && renderedDocs.map((doc, i) =>
            (<div key={doc.id}>
                <CommercialDoc doc={doc} toggleFavourite={toggoleFavouriteHandler} scratchDocToggle={scartDocToggleHandler}/>
            </div>)
            )}
        </>
    )
}

export default CommercialDocs