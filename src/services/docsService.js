import { db } from "../environment/firebase";

export const mapDocs = (snapshot) => {
    let tempArr=[]
     snapshot.forEach(docSnapshot =>{
        let doc=docSnapshot.data();
        console.log(doc);
        tempArr.push(
            {
                id:docSnapshot.id,
                favourite:doc.favourite,
                name:doc.name,
                docStatus:doc.docStatus,
                docType:doc.docType,
                expirationDate:new Date(doc.expirationDate.seconds*1000),
                infos:[
                    {name:"entityType",value:doc["entityType"],iconClassName:"fa-solid fa-landmark"},
                    {name:"expirationDate",value:new Date(doc.expirationDate.seconds*1000),iconClassName:"fa-solid fa-calendar-days"},
                    {name:"unifiedNumber",value:doc["unifiedNumber"],iconClassName:"fa-solid fa-check"},
                    {name:"docNumber",value:doc["docNumber"],iconClassName:"fa-sharp fa-solid fa-file"},
                ]
            }
        )
    })
    return tempArr;
}
export const dateFormatter=(date)=>{
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
}
export const getDocs= async()=>{
   let snapshot= await db.collection('commercialDocs').get()
   return mapDocs(snapshot)
}
export const docFavouriteToggle=async (doc)=>{
    let response =await db.collection('commercialDocs').doc(doc.id).update({favourite: !doc.favourite})
}

/* 
docNumber: doc.docNumber,
unifiedNumber: doc.unifiedNumber,
entityType:doc.entityType, */
