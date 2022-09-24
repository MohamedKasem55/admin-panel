export let selectTabs=[
    {
        name:" العدد الكلي",
        number:'3',
    },
    {
        name:" السجلات الفرعية",
        number:'1',
    },
    {
        name:" عدد سجلات المؤسسات",
        number:'3',
    },
    {
        name:"السجلات المفضلة",
        number:'0',
    },
]

export const Tabs=[
    {id:"all",name:"allDocs",number:0},
    {id:"secondary",name:"secondaryDocs",number:0},
    {id:"establishment",name:"establishmentDocs",number:0},
    {id:"favourite",name:"favouriteDocs",number:0},
]
/* export let Tabs2={
    "all":{name:"allDocs",number:0},
    "secondary":{name:"secondaryDocs",number:0},
    "establishment":{name:"establishmentDocs",number:0},
    "favourite":{name:"favouriteDocs",number:0},
} */

/*  export let Tabs2=  new Map([
    ['all', {id:"all",name:"allDocs",number:0}],
    ['secondary', {id:"secondary",name:"secondaryDocs",number:0}],
    ['establishment', {id:"establishment",name:"establishmentDocs",number:0}],
    ['favourite', {id:"favourite",name:"favouriteDocs",number:0}]
  ]);  */

/* 
  if(doc.docType === 'سجل فرعي')
  arr['secondary']={...arr['secondary'],number:arr['secondary'].number+1}
  if(doc.entityType === 'مؤسسه')
  arr['establishment']={...arr['establishment'],number:arr['establishment'].number+1}
  if(doc.favourite === true)
  arr['favourite']={...arr['favourite'],number:arr['favourite'].number+1} */