import{_ as H,j as M,s as i,c as e,B as q,H as j}from"./box-BKmhzZsK.js";import{j as n}from"./jsx-runtime-Bo0vyzkr.js";import{t as z,T as D,_ as d,a as B}from"./constants-CMML4tV4.js";import{r as u}from"./iframe-M09O0K0E.js";function c(t,r){var a=z[t];a||(a=D);var s=r?"var(".concat(a,", ").concat(r,")"):"var(".concat(a,")");return s}var f="--ds-grid--grid-template-areas",x="--ds-grid--grid-template-columns",T="--ds-grid--grid-template-rows",U={start:e({justifyContent:"start"}),center:e({justifyContent:"center"}),end:e({justifyContent:"end"}),"space-between":e({justifyContent:"space-between"}),"space-around":e({justifyContent:"space-around"}),"space-evenly":e({justifyContent:"space-evenly"}),stretch:e({justifyContent:"stretch"})};e({justifyItems:"start"}),e({justifyItems:"center"}),e({justifyItems:"end"}),e({justifyItems:"stretch"});var Z={start:e({alignContent:"start"}),center:e({alignContent:"center"}),end:e({alignContent:"end"}),"space-between":e({alignContent:"space-between"}),"space-around":e({alignContent:"space-around"}),"space-evenly":e({alignContent:"space-evenly"}),stretch:e({alignContent:"stretch"})},K={start:e({alignItems:"start"}),center:e({alignItems:"center"}),baseline:e({alignItems:"baseline"}),end:e({alignItems:"end"})},P=e({display:"grid",boxSizing:"border-box",gridTemplateAreas:"var(".concat(f,")"),gridTemplateColumns:"var(".concat(x,")"),gridTemplateRows:"var(".concat(T,")")}),W={row:e({gridAutoFlow:"row"}),column:e({gridAutoFlow:"column"}),dense:e({gridAutoFlow:"dense"}),"row dense":e({gridAutoFlow:"row dense"}),"column dense":e({gridAutoFlow:"column dense"})},I=u.memo(u.forwardRef(function(t,r){var a=t.as,s=t.alignItems,m=t.alignContent,p=t.justifyContent,g=t.gap,v=t.columnGap,y=t.rowGap,F=t.children,G=t.id,R=t.role,k=t.testId,b=t.autoFlow,l=t.templateAreas,w=t.templateRows,C=t.templateColumns,N=t.xcss,S=a||"div",h=H(N),V=u.useMemo(function(){return d(d(d({},f,l&&l.map(function(E){return'"'.concat(E,'"')}).join(`
`)||"initial"),x,C||"initial"),T,w||"initial")},[l,C,w]);return M(S,{id:G,role:R,style:V,className:h.static,css:[P,g&&i.gap[g],v&&i.columnGap[v],y&&i.rowGap[y],s&&K[s],m&&Z[m],p&&U[p],b&&W[b]].concat(B(h.emotion||[])),"data-testid":k,ref:r},F)}));I.displayName="Grid";function A(t){return n.jsx(q,{backgroundColor:"color.background.neutral.hovered",padding:"space.100",style:{alignItems:"center",borderRadius:c("radius.large","0.5rem"),borderWidth:c("border.width","0.0625rem"),display:"flex",height:"12rem",justifyContent:"center",textAlign:"center"},children:n.jsxs("div",{children:[n.jsx(j,{as:"h1",size:"xxlarge",children:n.jsx("span",{style:{color:c("color.text.accent.green","#216E4E")},children:t.value})}),n.jsx("br",{}),n.jsx(j,{as:"h2",size:"medium",children:t.label})]})})}A.__docgenInfo={description:"",methods:[],displayName:"Formula",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""}}};function O(t){return n.jsx(I,{rowGap:"space.050",columnGap:"space.050",templateColumns:"1fr 1fr 1fr",children:t.data.map(({label:r,value:a},s)=>n.jsx(A,{label:r,value:a},s))})}O.__docgenInfo={description:"",methods:[],displayName:"View",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:`{
  label: string;
  value: string;
}[]`},description:""}}};const Y={title:"UI/View",component:O,tags:["autodocs"],parameters:{layout:"fullscreen"}},o={args:{data:[{label:"One Hundredth",value:"0.01"},{label:"One Tenth",value:"0.1"},{label:"Zero",value:"0"},{label:"One Hundred",value:"100"},{label:"One Thousand",value:"1000"}]}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      label: 'One Hundredth',
      value: '0.01'
    }, {
      label: 'One Tenth',
      value: '0.1'
    }, {
      label: 'Zero',
      value: '0'
    }, {
      label: 'One Hundred',
      value: '100'
    }, {
      label: 'One Thousand',
      value: '1000'
    }]
  }
}`,...o.parameters?.docs?.source}}};const _=["Default"];export{o as Default,_ as __namedExportsOrder,Y as default};
