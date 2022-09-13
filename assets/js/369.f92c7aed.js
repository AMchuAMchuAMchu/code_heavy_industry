(window.webpackJsonp=window.webpackJsonp||[]).push([[369],{2043:function(t,s,a){"use strict";a.r(s);var e=a(54),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1、实用性"}},[t._v("1、实用性")])]),a("li",[a("a",{attrs:{href:"#_2、具体用法"}},[t._v("2、具体用法")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1创建监听器类"}},[t._v("①创建监听器类")])]),a("li",[a("a",{attrs:{href:"#_2注册监听器"}},[t._v("②注册监听器")])])])])])]),a("p"),t._v(" "),a("h1",{attrs:{id:"第三节-servletcontextlistener"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三节-servletcontextlistener"}},[t._v("#")]),t._v(" 第三节 ServletContextListener")]),t._v(" "),a("h2",{attrs:{id:"_1、实用性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、实用性"}},[t._v("#")]),t._v(" 1、实用性")]),t._v(" "),a("p",[t._v("将来学习SpringMVC的时候，会用到一个ContextLoaderListener，这个监听器就实现了ServletContextListener接口，表示对ServletContext对象本身的生命周期进行监控。")]),t._v(" "),a("h2",{attrs:{id:"_2、具体用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、具体用法"}},[t._v("#")]),t._v(" 2、具体用法")]),t._v(" "),a("h3",{attrs:{id:"_1创建监听器类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1创建监听器类"}},[t._v("#")]),t._v(" ①创建监听器类")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AtguiguListener")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletContextListener")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("contextInitialized")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Event对象代表本次事件，通过这个对象可以获取ServletContext对象本身")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletContextEvent")]),t._v(" sce"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello，我是ServletContext，我出生了！"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletContext")]),t._v(" servletContext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sce"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getServletContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"servletContext = "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" servletContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("contextDestroyed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletContextEvent")]),t._v(" sce"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello，我是ServletContext，我打算去休息一会儿！"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("h3",{attrs:{id:"_2注册监听器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2注册监听器"}},[t._v("#")]),t._v(" ②注册监听器")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 每一个listener标签对应一个监听器配置，若有多个监听器，则配置多个listener标签即可 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("listener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 配置监听器指定全类名即可 --\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("listener-class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.atguigu.listener.AtguiguListener"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("listener-class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("listener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("事件触发过程中控制台日志的打印：")]),t._v(" "),a("blockquote",[a("p",[t._v("Connected to server\n[2021-03-20 04:23:20,982] Artifact pro10-listener:war exploded: Artifact is being deployed, please wait...\n三月 20, 2021 4:23:21 下午 org.apache.catalina.deploy.WebXml setVersion\n警告: Unknown version string [4.0]. Default version will be used.\nHello，我是ServletContext，我出生了！\nservletContext = org.apache.catalina.core.ApplicationContextFacade@6a66017e\n[2021-03-20 04:23:21,426] Artifact pro10-listener:war exploded: Artifact is deployed successfully\n[2021-03-20 04:23:21,426] Artifact pro10-listener:war exploded: Deploy took 444 milliseconds\n三月 20, 2021 4:23:30 下午 org.apache.catalina.startup.HostConfig deployDirectory\n信息: Deploying web application directory D:\\software\\apache-tomcat-7.0.57\\webapps\\manager\n三月 20, 2021 4:23:31 下午 org.apache.catalina.startup.HostConfig deployDirectory\n信息: Deployment of web application directory D:\\software\\apache-tomcat-7.0.57\\webapps\\manager has finished in 124 ms\n[2021-03-20 04:24:06,422] Artifact pro10-listener:war exploded: Artifact is being deployed, please wait...\nHello，我是ServletContext，我打算去休息一会儿！\nHello，我是ServletContext，我出生了！\nservletContext = org.apache.catalina.core.ApplicationContextFacade@2a55374c\n[2021-03-20 04:24:07,115] Artifact pro10-listener:war exploded: Artifact is deployed successfully\n[2021-03-20 04:24:07,115] Artifact pro10-listener:war exploded: Deploy took 694 milliseconds")])]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/pro001-javaweb/lecture/chapter11/verse02.html"}},[t._v("上一节")]),t._v(" "),a("RouterLink",{attrs:{to:"/pro001-javaweb/lecture/chapter11/index.html"}},[t._v("回目录")])],1)])}),[],!1,null,null,null);s.default=n.exports}}]);