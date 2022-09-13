(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{2022:function(t,a,s){"use strict";s.r(a);var n=s(54),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#_1、修改标签文本值"}},[t._v("1、修改标签文本值")]),n("ul",[n("li",[n("a",{attrs:{href:"#_1th-text作用"}},[t._v("①th:text作用")])]),n("li",[n("a",{attrs:{href:"#_2字面量"}},[t._v("②字面量")])])])]),n("li",[n("a",{attrs:{href:"#_2、修改指定属性值"}},[t._v("2、修改指定属性值")])]),n("li",[n("a",{attrs:{href:"#_3、解析url地址"}},[t._v("3、解析URL地址")]),n("ul",[n("li",[n("a",{attrs:{href:"#_1基本语法"}},[t._v("①基本语法")])]),n("li",[n("a",{attrs:{href:"#_2首页使用url地址解析"}},[t._v("②首页使用URL地址解析")])]),n("li",[n("a",{attrs:{href:"#_3给url地址后面附加请求参数"}},[t._v("③给URL地址后面附加请求参数")])])])]),n("li",[n("a",{attrs:{href:"#_4、直接执行表达式"}},[t._v("4、直接执行表达式")])])])]),n("p"),t._v(" "),n("h1",{attrs:{id:"第五节-基本语法-表达式语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第五节-基本语法-表达式语法"}},[t._v("#")]),t._v(" 第五节 基本语法：表达式语法")]),t._v(" "),n("h2",{attrs:{id:"_1、修改标签文本值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、修改标签文本值"}},[t._v("#")]),t._v(" 1、修改标签文本值")]),t._v(" "),n("p",[t._v("代码示例：")]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("th:")]),t._v("text")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("标签体新值"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("标签体原始值"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("h3",{attrs:{id:"_1th-text作用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1th-text作用"}},[t._v("#")]),t._v(" ①th:text作用")]),t._v(" "),n("ul",[n("li",[t._v("不经过服务器解析，直接用浏览器打开HTML文件，看到的是『标签体原始值』")]),t._v(" "),n("li",[t._v("经过服务器解析，Thymeleaf引擎根据th:text属性指定的『标签体新值』去"),n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("替换")]),t._v("『标签体原始值』")])]),t._v(" "),n("h3",{attrs:{id:"_2字面量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2字面量"}},[t._v("#")]),t._v(" ②字面量")]),t._v(" "),n("p",[t._v("『字面量』是一个经常会遇到的概念，我们可以对照『变量』来理解它的含义。")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a是变量，100是字面量")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a = "')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("ul",[n("li",[t._v("变量：变量名字符串本身不是它的值，它指向的才是它的值")]),t._v(" "),n("li",[t._v("字面量：它就是字面上的含义，我们从『字面』上看到的直接就是它的值")])]),t._v(" "),n("p",[t._v("现在我们在th:text属性中使用的就是『字面量』，它"),n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("不指代任何其他值")]),t._v("。")]),t._v(" "),n("h2",{attrs:{id:"_2、修改指定属性值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、修改指定属性值"}},[t._v("#")]),t._v(" 2、修改指定属性值")]),t._v(" "),n("p",[t._v("代码示例：")]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("username"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("th:")]),t._v("value")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("文本框新值"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("文本框旧值"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("语法：任何HTML标签原有的属性，前面加上『th:』就都可以通过Thymeleaf来设定新值。")]),t._v(" "),n("h2",{attrs:{id:"_3、解析url地址"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、解析url地址"}},[t._v("#")]),t._v(" 3、解析URL地址")]),t._v(" "),n("h3",{attrs:{id:"_1基本语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1基本语法"}},[t._v("#")]),t._v(" ①基本语法")]),t._v(" "),n("p",[t._v("代码示例：")]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("th:")]),t._v("text")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@{/aaa/bbb/ccc}"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("标签体原始值"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("经过解析后得到：")]),t._v(" "),n("blockquote",[n("p",[t._v("/view/aaa/bbb/ccc")])]),t._v(" "),n("p",[t._v("所以@{}的作用是"),n("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("在字符串前附加『上下文路径』")])]),t._v(" "),n("blockquote",[n("p",[t._v("这个语法的好处是：实际开发过程中，项目在不同环境部署时，Web应用的名字有可能发生变化。所以上下文路径不能写死。而通过@{}动态获取上下文路径后，不管怎么变都不怕啦！")])]),t._v(" "),n("h3",{attrs:{id:"_2首页使用url地址解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2首页使用url地址解析"}},[t._v("#")]),t._v(" ②首页使用URL地址解析")]),t._v(" "),n("p",[n("img",{attrs:{src:s(705),alt:"./images"}})]),t._v(" "),n("p",[t._v("如果我们直接访问index.html本身，那么index.html是不需要通过Servlet，当然也不经过模板引擎，所以index.html上的Thymeleaf的任何表达式都不会被解析。")]),t._v(" "),n("p",[t._v("解决办法：通过Servlet访问index.html，这样就可以让模板引擎渲染页面了：")]),t._v(" "),n("p",[n("img",{attrs:{src:s(706),alt:"./images"}})]),t._v(" "),n("blockquote",[n("p",[t._v("进一步的好处：")]),t._v(" "),n("p",[t._v("通过上面的例子我们看到，所有和业务功能相关的请求都能够确保它们通过Servlet来处理，这样就方便我们统一对这些请求进行特定规则的限定。")])]),t._v(" "),n("h3",{attrs:{id:"_3给url地址后面附加请求参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3给url地址后面附加请求参数"}},[t._v("#")]),t._v(" ③给URL地址后面附加请求参数")]),t._v(" "),n("p",[t._v("参照官方文档说明：")]),t._v(" "),n("p",[n("img",{attrs:{src:s(346),alt:"./images"}})]),t._v(" "),n("h2",{attrs:{id:"_4、直接执行表达式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、直接执行表达式"}},[t._v("#")]),t._v(" 4、直接执行表达式")]),t._v(" "),n("p",[t._v("Servlet代码：")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"reqAttrName"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<span>hello-value</span>"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("页面代码：")]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("有转义效果：[[${reqAttrName}]]"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("无转义效果：[(${reqAttrName})]"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("执行效果：")]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("有转义效果："),n("span",{pre:!0,attrs:{class:"token entity named-entity",title:"<"}},[t._v("&lt;")]),t._v("span"),n("span",{pre:!0,attrs:{class:"token entity named-entity",title:">"}},[t._v("&gt;")]),t._v("hello-value"),n("span",{pre:!0,attrs:{class:"token entity named-entity",title:"<"}},[t._v("&lt;")]),t._v("/span"),n("span",{pre:!0,attrs:{class:"token entity named-entity",title:">"}},[t._v("&gt;")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("无转义效果："),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hello-value"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[n("RouterLink",{attrs:{to:"/pro001-javaweb/lecture/chapter08/verse04.html"}},[t._v("上一节")]),t._v(" "),n("RouterLink",{attrs:{to:"/pro001-javaweb/lecture/chapter08/index.html"}},[t._v("回目录")]),t._v(" "),n("RouterLink",{attrs:{to:"/pro001-javaweb/lecture/chapter08/verse06.html"}},[t._v("下一节")])],1)])}),[],!1,null,null,null);a.default=e.exports},346:function(t,a,s){t.exports=s.p+"assets/img/img037.78b02342.png"},705:function(t,a,s){t.exports=s.p+"assets/img/img018.3954c282.png"},706:function(t,a,s){t.exports=s.p+"assets/img/img019.7663465a.png"}}]);