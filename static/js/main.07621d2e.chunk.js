(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{13:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(5),i=c.n(a),r=(c(11),c(3)),o=c(0);function j(e){var t=e.title,c=e.children;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:t}),c]})}var l=c(6),b=c.n(l);function d(e){var t=e.options,c=e.handleClick;return Object(o.jsx)("div",{children:t.map((function(e,t){return Object(o.jsx)("button",{type:"button",name:e,onClick:c,className:b.a.button,children:e},t)}))})}function u(e){var t=e.good,c=e.neutral,n=e.bad,s=e.total,a=e.positivePercentage;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:["Good:",Object(o.jsx)("span",{children:t})]}),Object(o.jsxs)("p",{children:["Neutral:",Object(o.jsx)("span",{children:c})]}),Object(o.jsxs)("p",{children:["Bad:",Object(o.jsx)("span",{children:n})]}),Object(o.jsxs)("p",{children:["Total:",Object(o.jsx)("span",{children:s})]}),Object(o.jsxs)("p",{children:["Positive feedback:",Object(o.jsxs)("span",{children:[a," %"]})]})]})}function p(e){var t=e.message;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("p",{children:t})})}var h=c(2),O=c.n(h),x=["good","neutral","bad"];function f(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(0),i=Object(r.a)(a,2),l=i[0],b=i[1],h=Object(n.useState)(0),f=Object(r.a)(h,2),v=f[0],k=f[1],g=function(){return c+l+v},m=g(),_=c?Math.ceil(c/g()*100):0;return Object(o.jsxs)("div",{className:O.a.App,children:[Object(o.jsx)(j,{title:"Please, leave feedback",className:O.a.title,children:Object(o.jsx)(d,{options:x,handleClick:function(e){switch(e.target.name){case"good":s((function(e){return e+1}));break;case"neutral":b((function(e){return e+1}));break;case"bad":k((function(e){return e+1}))}}})}),0===m?Object(o.jsx)(p,{message:"No feedback given"}):Object(o.jsx)(j,{title:"Statistics",className:O.a.title2,children:Object(o.jsx)(u,{good:c,neutral:l,bad:v,total:m,positivePercentage:_})})]})}i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))},2:function(e,t,c){e.exports={App:"App_App__to4Zl",title:"App_title__172-i","second-title":"App_second-title__W7STo"}},6:function(e,t,c){e.exports={button:"FeedbackOptions_button__1w8ZE"}}},[[13,1,2]]]);
//# sourceMappingURL=main.07621d2e.chunk.js.map