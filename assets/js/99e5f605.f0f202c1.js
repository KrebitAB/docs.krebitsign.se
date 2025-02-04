"use strict";(self.webpackChunkkrebit_apidocs=self.webpackChunkkrebit_apidocs||[]).push([[638],{69440:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>R,contentTitle:()=>b,default:()=>z,frontMatter:()=>h,metadata:()=>s,toc:()=>x});const s=JSON.parse('{"id":"signings/remind-unsigned","title":"Remind all unsigned recipients of the signing","description":"Remind all unsigned recipients","source":"@site/docs/signings/remind-unsigned.api.mdx","sourceDirName":"signings","slug":"/signings/remind-unsigned","permalink":"/docs/signings/remind-unsigned","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"remind-unsigned","title":"Remind all unsigned recipients of the signing","description":"Remind all unsigned recipients","sidebar_label":"Remind all unsigned recipients of the signing","hide_title":true,"hide_table_of_contents":true,"api":"eJyNU8GO2jAQ/RVrzi6BqqfcOK566GphTygHkwzEIthZzxhKI/97NU7QAouqnpLYL2/evHkzAJs9QbmBld076/YElYYGqQ62Z+sdlPCGR+saZbpORUd277BRAWvbW3RMoMH3GIyAXxooIWT4+4QEDQGp946QoBzg+3wuj/sKy+fU6owB1ciHjaJY10i0i113gaThxzOqdYuKxlZUbZzzrLbjCTbjT4sn9dXJdLZRJnKLjm2du1HsD+jU2ZASmj74kxUdZ8ut4laUfUQkhpQ0ENYxWL5AuRlgiyZgWEZuodxUqdJwRG69uNN7YtDQG7mDwvS2WMzmxSSZiiFG26RibPpb/HSRMJwwUOaPoYMSWuaeyqIYfNgbZ/9k0Wl2CLi1PCOEx0H+zDdKJq2Wry9qpAQNJxOs2XbjhG7ZRqt2JnYMJdwX+kIv1t8iFHsVCSElceBq0Kpu8ThWurVpAL70OHUl7WYYlBMoe2zdzmek5Q6f9NP4Oh7R8Sj9qzxLylKe3Be02vmQbx44xRwMNDIsZvPZXEIkQzya7I4zWeW/d0T5XSafpvwobYDaO0bH/7Nsk02Mv7noO2OdCMqBGKZUbcD0FrTIFSOve62hlGzlhbwPV6WhlViWGxiGrSF8D11KcvwRMUikq8+M5ETfBPr112oNGsz9FKep6euLpHa6Mu6SI9dF+RqGEbGWXUsSqgNepD/5hlSllP4CzomePw==","sidebar_class_name":"post api-method","info_path":"openapi-docs/api/krebit-sign-api-documentation","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"Remind a recipient","permalink":"/docs/signings/remind-recipient"},"next":{"title":"Send a signing draft for signing","permalink":"/docs/signings/send-signing"}}');var d=n(74848),t=n(28453),l=n(57742),a=n.n(l),o=n(78178),r=n.n(o),p=n(19624),u=n.n(p),g=n(96226),c=n.n(g),m=(n(77675),n(19365),n(51107));const h={id:"remind-unsigned",title:"Remind all unsigned recipients of the signing",description:"Remind all unsigned recipients",sidebar_label:"Remind all unsigned recipients of the signing",hide_title:!0,hide_table_of_contents:!0,api:"eJyNU8GO2jAQ/RVrzi6BqqfcOK566GphTygHkwzEIthZzxhKI/97NU7QAouqnpLYL2/evHkzAJs9QbmBld076/YElYYGqQ62Z+sdlPCGR+saZbpORUd277BRAWvbW3RMoMH3GIyAXxooIWT4+4QEDQGp946QoBzg+3wuj/sKy+fU6owB1ciHjaJY10i0i113gaThxzOqdYuKxlZUbZzzrLbjCTbjT4sn9dXJdLZRJnKLjm2du1HsD+jU2ZASmj74kxUdZ8ut4laUfUQkhpQ0ENYxWL5AuRlgiyZgWEZuodxUqdJwRG69uNN7YtDQG7mDwvS2WMzmxSSZiiFG26RibPpb/HSRMJwwUOaPoYMSWuaeyqIYfNgbZ/9k0Wl2CLi1PCOEx0H+zDdKJq2Wry9qpAQNJxOs2XbjhG7ZRqt2JnYMJdwX+kIv1t8iFHsVCSElceBq0Kpu8ThWurVpAL70OHUl7WYYlBMoe2zdzmek5Q6f9NP4Oh7R8Sj9qzxLylKe3Be02vmQbx44xRwMNDIsZvPZXEIkQzya7I4zWeW/d0T5XSafpvwobYDaO0bH/7Nsk02Mv7noO2OdCMqBGKZUbcD0FrTIFSOve62hlGzlhbwPV6WhlViWGxiGrSF8D11KcvwRMUikq8+M5ETfBPr112oNGsz9FKep6euLpHa6Mu6SI9dF+RqGEbGWXUsSqgNepD/5hlSllP4CzomePw==",sidebar_class_name:"post api-method",info_path:"openapi-docs/api/krebit-sign-api-documentation",custom_edit_url:null},b=void 0,R={},x=[];function f(i){const e={p:"p",...(0,t.R)(),...i.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Remind all unsigned recipients of the signing"}),"\n",(0,d.jsx)(a(),{method:"post",path:"/api/1.0/signings/{uuid}/remind-unsigned",context:"endpoint"}),"\n",(0,d.jsx)(e.p,{children:"Remind all unsigned recipients"}),"\n",(0,d.jsx)(r(),{parameters:void 0}),"\n",(0,d.jsx)(u(),{title:"Body",body:void 0}),"\n",(0,d.jsx)(c(),{id:void 0,label:void 0,responses:{200:{description:"All unsigned recipients were reminded successfully"},400:{description:"The signing cannot be signed"},401:{description:"A valid authentication token was not provided with the request"}}})]})}function z(i={}){const{wrapper:e}={...(0,t.R)(),...i.components};return e?(0,d.jsx)(e,{...i,children:(0,d.jsx)(f,{...i})}):f(i)}}}]);