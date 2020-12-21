(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(e){e.exports=JSON.parse('{"projects":[{"url":"","github":"https://github.com/kchhan/issue-tracker","title":"Issue Tracker","description":"A web app for tracking bugs and features with tickets in projects. Includes graphs for data visualization, authentication, and authorization! Log in details in GitHub repo.","tags":[{"name":"PHP","icon":"fab fa-php"},{"name":"Laravel","icon":"fab fa-laravel"},{"name":"TailwindCSS","icon":"fab fa-tailwindcss"},{"name":"MySQL","icon":"fas fa-database"},{"name":"Docker","icon":"fab fa-docker"}],"image":"/images/issue-tracker.png"},{"url":"https://kchhan-blog-view.herokuapp.com","github":"https://github.com/kchhan/blog-app","title":"Blog App","description":"A personal blog app to showcase a CRUD application. The editor\'s front-end application is different from the reader\'s application but both utilize the same database.","tags":[{"name":"HTML5","icon":"fab fa-html5"},{"name":"CSS3","icon":"fab fa-css3"},{"name":"JavaScript","icon":"fab fa-js"},{"name":"React","icon":"fab fa-react"},{"name":"NodeJS","icon":"fab fa-node-js"},{"name":"Express","icon":"fab fa-express"},{"name":"MongoDB","icon":"fas fa-database"}],"image":"/images/blog-app.png"}]}')},22:function(e,t,r){},31:function(e,t,r){"use strict";r.r(t);var a=r(0),c=r(1),s=r.n(c),n=r(15),i=r.n(n),o=(r(22),r(7)),l=r(2);function b(){return Object(a.jsxs)("section",{className:"h-screen flex flex-col items-center justify-between bg-dark_mode-default text-gray-500",children:[Object(a.jsx)("div",{}),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"m-2 p-1 bg-green-400 rounded",children:Object(a.jsx)("h1",{className:"p-4 text-4xl text-center text-white bg-dark_mode-default",children:"Kevin Chhan"})}),Object(a.jsx)("h2",{className:"text-xl text-center",children:"Fullstack Web Developer"})]}),Object(a.jsxs)("div",{className:"mb-5",children:[Object(a.jsx)(o.b,{to:"/about",className:"m-2 py-3 hover:text-white border-t-2 border-gray-800 hover:border-green-500",children:"About"}),Object(a.jsx)(o.b,{to:"/projects",className:"m-2 py-3 hover:text-white border-t-2 border-gray-800 hover:border-blue-500",children:"Projects"}),Object(a.jsx)(o.b,{to:"/contact",className:"m-2 py-3 hover:text-white border-t-2 border-gray-800 hover:border-red-500",children:"Contact"})]})]})}function d(){return Object(a.jsxs)("header",{className:"flex justify-around w-full py-5 px-3",children:[Object(a.jsx)("div",{className:"py-2 border border-green-400 rounded",children:Object(a.jsx)(o.b,{to:"/",className:"py-2 px-3 text-2xl text-white bg-dark_mode-default",children:"KC"})}),Object(a.jsxs)("div",{className:"flex",children:[Object(a.jsx)("div",{children:Object(a.jsx)(o.b,{to:"/about",className:"p-3 hover:text-white border-b-2 border-gray-800 hover:border-green-500",children:"About"})}),Object(a.jsx)("div",{children:Object(a.jsx)(o.b,{to:"/projects",className:"p-3 hover:text-white border-b-2 border-gray-800 hover:border-blue-500",children:"Projects"})}),Object(a.jsx)("div",{children:Object(a.jsx)(o.b,{to:"/contact",className:"p-3 hover:text-white border-b-2 border-gray-800 hover:border-red-500",children:"Contact"})})]})]})}function h(){return Object(a.jsxs)("footer",{className:"block w-full",children:[Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"flex justify-center block",children:[Object(a.jsx)("a",{href:"https://github.com/kchhan",target:"_blank",rel:"noreferrer",className:"m-2 py-1 hover:text-white border-t-2 border-gray-800 hover:border-purple-500",children:Object(a.jsx)("i",{className:"fab fa-github-square fa-3x"})}),Object(a.jsx)("a",{href:"https://www.linkedin.com/in/kevinchhan/",target:"_blank",rel:"noreferrer",className:"m-2 py-1 hover:text-white border-t-2 border-gray-800 hover:border-yellow-500",children:Object(a.jsx)("i",{className:"fab fa-linkedin fa-3x"})})]})]})}function j(){return Object(a.jsxs)("section",{className:"h-screen flex flex-col items-center justify-between bg-dark_mode-default text-gray-500",children:[Object(a.jsx)(d,{}),Object(a.jsxs)("article",{className:"flex flex-col-reverse md:flex-row items-center justify-items-center ",children:[Object(a.jsxs)("div",{className:"mx-3 max-w-lg",children:[Object(a.jsx)("p",{className:"my-2 p-2",children:"Hello I'm Kevin! I am passionate about learning and I always want to keep improving my skills. If only there was more time! Clear communication and trust are things that I emphasize when working with others. I am seeking to shift into the web development industry."}),Object(a.jsx)("p",{className:"my-2 p-2",children:"When I am not programming I usually am tinkering with some tech, playing some video games, or drinking some nice hot tea!"})]}),Object(a.jsx)("img",{src:window.location.origin+"/images/profile.png",alt:"It's a me! Kevin!",className:"max-w-xs rounded-full"})]}),Object(a.jsx)(h,{})]})}var m=r(14);function x(){return Object(a.jsxs)("section",{className:"flex flex-col items-center justify-between min-h-screen bg-dark_mode-default text-gray-500",children:[Object(a.jsx)(d,{}),Object(a.jsx)("div",{children:m.projects.map((function(e){return Object(a.jsxs)("article",{className:"flex flex-col md:flex-row mx-auto my-10  max-w-4xl border border-gray-400 bg-dark_mode-default",children:[Object(a.jsx)("img",{src:window.location.origin+e.image,alt:"Project",className:"w-full sm:max-w-md"}),Object(a.jsxs)("div",{className:"p-2 sm:max-w-md ",children:[Object(a.jsx)("h2",{className:"m-1 text-center text-xl font-bold text-blue-500",children:e.title}),Object(a.jsx)("div",{children:e.tags.map((function(t){return Object(a.jsxs)("span",{className:"mx-1 px-1",children:[Object(a.jsx)("i",{className:t.icon}),"\xa0",t.name]},e.tags.indexOf(t))}))}),Object(a.jsx)("p",{className:"text-gray-400",children:e.description}),Object(a.jsxs)("div",{className:"text-center my-1",children:[Object(a.jsx)("a",{href:e.github,target:"_blank",rel:"noreferrer",className:"inline-block mx-2 py-1 px-2 rounded bg-blue-700 text-gray-400 hover:text-white",children:"View Code"}),Object(a.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",className:"inline-block mx-2 py-1 px-2 rounded bg-green-700 text-gray-400 hover:text-white",children:"Live Demo"})]})]})]},m.projects.indexOf(e))}))}),Object(a.jsx)("div",{children:Object(a.jsx)("a",{href:"https://github.com/kchhan",target:"_blank",rel:"noreferrer",className:"p-2",children:"Click here to check out more of my work on GitHub!"})}),Object(a.jsx)(h,{})]})}function f(){return Object(a.jsxs)("section",{className:"h-screen flex flex-col items-center justify-between bg-dark_mode-default text-gray-500",children:[Object(a.jsx)(d,{}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"text-xl",children:"I'm Available! Let's Chat!"}),Object(a.jsx)("h2",{className:"p-2 text-xl border text-center text-white",children:Object(a.jsx)("a",{href:"mailto:kvnchhan@gmail.com",className:"p-2",children:"kvnchhan@gmail.com"})})]}),Object(a.jsx)(h,{})]})}var p=function(){return Object(a.jsx)("main",{children:Object(a.jsx)(o.a,{children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",component:b}),Object(a.jsx)(l.a,{path:"/about",component:j}),Object(a.jsx)(l.a,{path:"/projects",component:x}),Object(a.jsx)(l.a,{path:"/contact",component:f})]})})})};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.4c0252c8.chunk.js.map