(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{2031:function(s,t,a){"use strict";a.r(t);var n=a(54),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#_1、提出问题"}},[s._v("1、提出问题")])]),n("li",[n("a",{attrs:{href:"#_2、解决方案"}},[s._v("2、解决方案")]),n("ul",[n("li",[n("a",{attrs:{href:"#_1结论"}},[s._v("①结论")])]),n("li",[n("a",{attrs:{href:"#_2demo体验"}},[s._v("②demo体验")])])])])])]),n("p"),s._v(" "),n("h1",{attrs:{id:"第一节-提出问题与解决方案核心代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第一节-提出问题与解决方案核心代码"}},[s._v("#")]),s._v(" 第一节 提出问题与解决方案核心代码")]),s._v(" "),n("h2",{attrs:{id:"_1、提出问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、提出问题"}},[s._v("#")]),s._v(" 1、提出问题")]),s._v(" "),n("p",[n("img",{attrs:{src:a(735),alt:"./images"}})]),s._v(" "),n("p",[s._v("保持用户登录状态，背后的底层逻辑是：服务器在接收到用户请求的时候，有办法判断这个请求来自于之前的某一个用户。所以保持登录状态，本质上是保持"),n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[s._v("『会话状态』")])]),s._v(" "),n("h2",{attrs:{id:"_2、解决方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、解决方案"}},[s._v("#")]),s._v(" 2、解决方案")]),s._v(" "),n("h3",{attrs:{id:"_1结论"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1结论"}},[s._v("#")]),s._v(" ①结论")]),s._v(" "),n("p",[s._v("使用HttpSession对象，将数据存入"),n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[s._v("会话域")]),s._v("就能保持会话状态。")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HttpSession")]),s._v(" session "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSession")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nsession"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setAttribute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"_2demo体验"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2demo体验"}},[s._v("#")]),s._v(" ②demo体验")]),s._v(" "),n("h4",{attrs:{id:"_1-准备环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备环境"}},[s._v("#")]),s._v(" [1]准备环境")]),s._v(" "),n("p",[s._v("参考"),n("a",{attrs:{href:"pro08-cookie-and-session.zip"}},[s._v("会话控制demo原始纯净版")])]),s._v(" "),n("h4",{attrs:{id:"_2-创建将数据存入会话域的servlet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建将数据存入会话域的servlet"}},[s._v("#")]),s._v(" [2]创建将数据存入会话域的Servlet")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HelloWorldServlet")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ModelBaseServlet")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setValue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HttpServletRequest")]),s._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HttpServletResponse")]),s._v(" response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ServletException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IOException")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1.通过request对象获取session对象")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HttpSession")]),s._v(" session "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSession")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2.设置数据名称和数据的值")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" attrName "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sessionHelloAttrName"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" attrValue "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sessionHelloAttrValue"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3.将数据存入会话域")]),s._v("\n        session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setAttribute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("attrName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" attrValue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 4.渲染视图")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("processTemplate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"page-target"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h4",{attrs:{id:"_3-在其他页面从会话域取出数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-在其他页面从会话域取出数据"}},[s._v("#")]),s._v(" [3]在其他页面从会话域取出数据")]),s._v(" "),n("p",[n("img",{attrs:{src:a(736),alt:"./images"}})]),s._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("th:")]),s._v("if")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("${#strings.isEmpty(session.sessionHelloAttrName)}"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    没有从会话域获取到数据\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("th:")]),s._v("if")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("${not #strings.isEmpty(session.sessionHelloAttrName)}"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("从会话域读取到："),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("th:")]),s._v("text")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("${session.sessionHelloAttrName}"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h4",{attrs:{id:"_4-操作效果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-操作效果"}},[s._v("#")]),s._v(" [4]操作效果")]),s._v(" "),n("p",[n("img",{attrs:{src:a(737),alt:"./images"}})]),s._v(" "),n("p",[n("RouterLink",{attrs:{to:"/pro001-javaweb/lecture/chapter09/index.html"}},[s._v("回目录")]),s._v(" "),n("RouterLink",{attrs:{to:"/pro001-javaweb/lecture/chapter09/verse02.html"}},[s._v("下一节")])],1)])}),[],!1,null,null,null);t.default=e.exports},735:function(s,t,a){s.exports=a.p+"assets/img/img001.98859ab4.png"},736:function(s,t){s.exports="data:image/png;base64,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"},737:function(s,t){s.exports="data:image/png;base64,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"}}]);