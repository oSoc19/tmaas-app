(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(156),c=a(158),l=a(144),i=a.n(l),s=a(162),m=a.n(s),u=a(172),d=a.n(u);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"About",keywords:["Jan Temmerman","portfolio","about"],description:"Portfolio website of jan temmerman, about"}),r.a.createElement("section",{className:"centered"},r.a.createElement("div",{className:i.a.container},r.a.createElement("h1",{className:i.a.greet},"About Me"),r.a.createElement("p",{className:i.a.intro},"Hi I'm Jan Temmerman! I'm currently a student at Artevelde Hogeschool where I study New Media Development. In my free time, I like to workout, play badminton, play videogames or work on my own projects."),r.a.createElement("div",{className:i.a.profilepic}),r.a.createElement("p",{className:i.a.intro},"I have knowledge of ",r.a.createElement("b",null,"HTML"),", ",r.a.createElement("b",null,"CSS"),", ",r.a.createElement("b",null,"JS"),", ",r.a.createElement("b",null,"PHP"),", ",r.a.createElement("b",null,"SQL"),". For projects I have worked with ",r.a.createElement("b",null,"React Native")," and ",r.a.createElement("b",null,"Laravel"),". Every project is managed using ",r.a.createElement("b",null,"Git")," source control."),r.a.createElement("p",{className:i.a.intro},"Good news! I got selected for ",r.a.createElement("a",{href:"https://2019.summerofcode.be/",className:i.a.download},"Open Summer Of Code 2019"),"!"),r.a.createElement("p",{className:i.a.intro},r.a.createElement("a",{href:d.a,className:i.a.download},"Take a peek at my CV")," or learn more about me on LinkedIn."),r.a.createElement("div",{className:i.a.iconContainer},r.a.createElement("a",{href:"https://www.linkedin.com/in/jan-temmerman-896b07146/"},r.a.createElement("img",{className:i.a.icon,src:m.a,alt:"linkedin"}))))))}},152:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),o=a(4),c=a.n(o),l=a(33),i=a.n(l);a.d(t,"a",function(){return i.a});a(153);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},153:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Jan Temmerman"}}}}},155:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),l=a(55),i=a(2),s=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},156:function(e,t,a){"use strict";var n=a(154),r=a(0),o=a.n(r),c=a(4),l=a.n(c),i=a(152),s=(a(157),a(143)),m=a.n(s),u=function(){return o.a.createElement("header",null,o.a.createElement("div",{className:m.a.container},o.a.createElement(i.a,{className:m.a.linklogo,to:"/"}," ",o.a.createElement("h1",{className:m.a.logo},"JAN TEMMERMAN")," "),o.a.createElement("div",{className:m.a.linkContainer},o.a.createElement(i.a,{className:m.a.link,to:"/"},"Home"),o.a.createElement(i.a,{className:m.a.link,to:"/contact"},"Contact"),o.a.createElement(i.a,{className:m.a.link,to:"/about"},"About"))))},d=function(e){var t=e.children;return o.a.createElement(i.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u,null),o.a.createElement("main",null,t))},data:n})};d.propTypes={children:l.a.node.isRequired};t.a=d},158:function(e,t,a){"use strict";var n=a(159),r=a(0),o=a.n(r),c=a(4),l=a.n(c),i=a(161),s=a.n(i);function m(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,l=e.title,i=n.data.site,m=t||i.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"google-site-verification",content:"tp8GPGYtzFXmZELkekHvCbAahcb73axhg_9MR-XCBYE"},{name:"description",content:m},{property:"og:title",content:l},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:m}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Jan Temmerman",description:"Portfolio website of Jan Temmerman",author:"@jantemmerman"}}}}},162:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAEdUlEQVR4nO2dTYheNRSGn0zVSlXUyhTEgn9VKy6UVtBRcKEbRcEZdNGNC7eKRZFqxVmrtRtBROhCBEEQBGfcKS7cCIo/KJSCtFrBQUFFQSqlyszrIldBmflukpvcyf3ueeCDWZycc5KXTJKb3BswDMMwDMMwDMPoF5dSSNI5wAJwP7AH2AmclzGvIfIHsAJ8ASwBS865P2OdRAsi6QHgReCq2LIj4xvggHPunZhCwYJI2gIcAp6MTGzsHAYOOufWQozPinBsYqRxABDwdIhxUA9p/k293SEpAxacc0ttRq2CNAP4MeDqHFmNmJPA7raBfibA0QImRg6uxM9KJxIiyHz3XIyGLILszZCI4bm5zSBEkEszJGJ4LmszCBnUlScXA8A5N7HNQ3qI0SMmSGWYIJVhglSGCVIZfQhyDHgEuBbY1vyuAx4DjvcQf1CUnva+Cjy+0fMbSecCR4CHOsQYFG3T3pKCvAfc45ybWL7ZZ/kIuCUxzqDYzHXIC21iADjnVoHnCuYxKEr2kAucc6dCDCVdDPyaGGdQbGYP2RJhG7S9OQZKCnJ7hO1csSwGRklBFpsBeyKSZoBnCuYxKEoKMge8IWnbRgaStuKnvXcUzGNQ9PH4/STwMvB+8zfA5cCdwH78gnE0bOY6xFgH2w8ZGCZIZZgglWGCVIYJUhkxh62jaJtN/J+NZnO5/ABHgQ+AD4ETwC/Nbzswiz+icxdwN3BjTMxeUSK54nT0sybpTUm3RvrYLel1Saup9c9Vn7YKFgtcwM9XkjrtsUi6TdJ3qW2Qoz6TKlg0cGY/r8nvRnZG0iWSPklth671WS+hXgJn9POSpKR3Jyf4vFDS0dS2iKlPsUcnmzioz4S+PhbpdxfwJR1fbh3do5MSYjR+TwCLJXz/J06bwdB6SEnk3yb7Grgi1cfoekhJmuNMrxSN0WYwLT1EfqNs1Tl3pqOfWeBH4s4M/Muoe4ikOUlvSfoN/6WF05JWJB2RdEOKT+fcz8DHWRONodT0LjROh7wXNXmlfUbSo4m+n++rXdYL3kvgnBWQ9HBgmmuS9iX4f7BUu0zdGCLpIvx3RrYHFvkJuMY593tEjD3A5zF5/cMYx5B9hIsBsKMpE8NKpH0w0yjIvQll7ou0Dzoim8I0CpKyl3FTpP3phBhBTKMgOxLKzMYYh5zqT2UaBdmaUCbLo/ocTKMgg8YEqQwTpDJMkMowQSrDBKkME6QyTJDKMEEqwwSpDBOkMkyQyjBBKsMEqQwTpDJMkMowQSrDBKkME6Qy7FsnPTPGg3KDxgSpDBOkMkIEKXZscoS0HugOEeSHDIkYnta2DBHkswyJGJ5P2wxCBFnOkIjhebfNIGQdcjb+hoNdOTIaMd8C13e+WNI59xfwVK6sRoqAJ0Ku8w6a9jZXUB/umtWIOeSca/13BXHrkIP4e9SNcIS/ZfvZ0AIpF9zP43uLjSmTOY6/4D5qUpT0lYRmoJ/H3+26F9gJnJ/ia4o4BXyPfzt3GVhuxl/DMAzDMAzDMIyq+Rt6wijo66g7ZAAAAABJRU5ErkJggg=="},172:function(e,t,a){e.exports=a.p+"static/resume-3329d7d6b1009333fa137bfa04f9c7c5.pdf"}}]);
//# sourceMappingURL=component---src-pages-about-js-3a6d9c8341b1a76ec19e.js.map