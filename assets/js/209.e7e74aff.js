(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{2065:function(t,a,e){"use strict";e.r(a);var v=e(54),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#_1、http基础概念"}},[t._v("1、HTTP基础概念")])]),v("li",[v("a",{attrs:{href:"#_2、请求报文"}},[t._v("2、请求报文")]),v("ul",[v("li",[v("a",{attrs:{href:"#_1请求行"}},[t._v("①请求行")])]),v("li",[v("a",{attrs:{href:"#_2请求消息头"}},[t._v("②请求消息头")])]),v("li",[v("a",{attrs:{href:"#_3请求体"}},[t._v("③请求体")])])])]),v("li",[v("a",{attrs:{href:"#_3、响应报文"}},[t._v("3、响应报文")]),v("ul",[v("li",[v("a",{attrs:{href:"#_1响应状态行"}},[t._v("①响应状态行")])]),v("li",[v("a",{attrs:{href:"#_2响应消息头"}},[t._v("②响应消息头")])]),v("li",[v("a",{attrs:{href:"#_3响应体"}},[t._v("③响应体")])])])])])]),v("p"),t._v(" "),v("h1",{attrs:{id:"http协议笔记"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http协议笔记"}},[t._v("#")]),t._v(" HTTP协议笔记")]),t._v(" "),v("h2",{attrs:{id:"_1、http基础概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、http基础概念"}},[t._v("#")]),t._v(" 1、HTTP基础概念")]),t._v(" "),v("ul",[v("li",[t._v("HTTP："),v("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("H")]),t._v("yper "),v("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("T")]),t._v("ext "),v("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("T")]),t._v("ransfer "),v("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("P")]),t._v("rotocol超文本传输协议")]),t._v(" "),v("li",[t._v("作用：定义请求报文和响应报文的数据格式")])]),t._v(" "),v("h2",{attrs:{id:"_2、请求报文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、请求报文"}},[t._v("#")]),t._v(" 2、请求报文")]),t._v(" "),v("h3",{attrs:{id:"_1请求行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1请求行"}},[t._v("#")]),t._v(" ①请求行")]),t._v(" "),v("ul",[v("li",[v("RouterLink",{attrs:{to:"/pro001-javaweb/note/note004-HTTP-method.html"}},[t._v("请求方式")])],1),t._v(" "),v("li",[t._v("请求地址")]),t._v(" "),v("li",[t._v("协议版本")])]),t._v(" "),v("h3",{attrs:{id:"_2请求消息头"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2请求消息头"}},[t._v("#")]),t._v(" ②请求消息头")]),t._v(" "),v("p",[t._v("作用：通过具体的参数对本次请求进行详细的说明")]),t._v(" "),v("p",[t._v("格式：键值对，键和值之间使用冒号隔开")]),t._v(" "),v("p",[t._v("相对比较重要的请求消息头：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("功能")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Host")]),t._v(" "),v("td",[t._v("服务器的主机地址")])]),t._v(" "),v("tr",[v("td",[t._v("Accept")]),t._v(" "),v("td",[t._v("声明当前请求能够接受的『媒体类型』")])]),t._v(" "),v("tr",[v("td",[t._v("Referer")]),t._v(" "),v("td",[t._v("当前请求来源页面的地址")])]),t._v(" "),v("tr",[v("td",[t._v("Content-Length")]),t._v(" "),v("td",[t._v("请求体内容的长度")])]),t._v(" "),v("tr",[v("td",[t._v("Content-Type")]),t._v(" "),v("td",[t._v("请求体的"),v("RouterLink",{attrs:{to:"/pro001-javaweb/note/note004-HTTP-MIME.html"}},[t._v("内容类型")]),t._v("，这一项的具体值是媒体类型中的某一种")],1)]),t._v(" "),v("tr",[v("td",[t._v("Cookie")]),t._v(" "),v("td",[t._v("浏览器访问服务器时携带的Cookie数据")])])])]),t._v(" "),v("h3",{attrs:{id:"_3请求体"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3请求体"}},[t._v("#")]),t._v(" ③请求体")]),t._v(" "),v("p",[t._v("作用：作为请求的主体，发送数据给服务器。具体来说其实就是POST请求方式下的请求参数。")]),t._v(" "),v("p",[t._v("格式：")]),t._v(" "),v("h4",{attrs:{id:"_1-form-data"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-form-data"}},[t._v("#")]),t._v(" [1]form data")]),t._v(" "),v("p",[t._v("含义：当前请求体是一个表单提交的请求参数。")]),t._v(" "),v("p",[v("img",{attrs:{src:e(771),alt:"./images"}})]),t._v(" "),v("p",[t._v("查看源码后，发现格式如下：")]),t._v(" "),v("blockquote",[v("p",[t._v("username=tom&password=123456")])]),t._v(" "),v("ul",[v("li",[t._v("每一组请求参数是一个键值对")]),t._v(" "),v("li",[t._v("键和值中间是等号")]),t._v(" "),v("li",[t._v("键值对之间是&号")])]),t._v(" "),v("h4",{attrs:{id:"_2-request-payload"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-request-payload"}},[t._v("#")]),t._v(" [2]Request Payload")]),t._v(" "),v("p",[t._v("含义：整个请求体以某种特定格式来组织数据，例如JSON格式。")]),t._v(" "),v("p",[v("img",{attrs:{src:e(772),alt:"./images"}})]),t._v(" "),v("h2",{attrs:{id:"_3、响应报文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、响应报文"}},[t._v("#")]),t._v(" 3、响应报文")]),t._v(" "),v("h3",{attrs:{id:"_1响应状态行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1响应状态行"}},[t._v("#")]),t._v(" ①响应状态行")]),t._v(" "),v("blockquote",[v("p",[t._v("HTTP/1.1 200 OK")])]),t._v(" "),v("ul",[v("li",[t._v("HTTP协议版本")]),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/pro001-javaweb/note/note004-HTTP-code.html"}},[v("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("响应状态码")])])],1),t._v(" "),v("li",[t._v("响应状态的说明文字")])]),t._v(" "),v("h3",{attrs:{id:"_2响应消息头"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2响应消息头"}},[t._v("#")]),t._v(" ②响应消息头")]),t._v(" "),v("ul",[v("li",[t._v("响应体的说明书。")]),t._v(" "),v("li",[t._v("服务器端对浏览器端设置数据，例如：服务器端返回Cookie信息。")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("功能")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Content-Type")]),t._v(" "),v("td",[t._v("响应体的"),v("RouterLink",{attrs:{to:"/pro001-javaweb/note/note004-HTTP-MIME.html"}},[t._v("内容类型")])],1)]),t._v(" "),v("tr",[v("td",[t._v("Content-Length")]),t._v(" "),v("td",[t._v("响应体的内容长度")])]),t._v(" "),v("tr",[v("td",[t._v("Set-Cookie")]),t._v(" "),v("td",[t._v("服务器返回新的Cookie信息给浏览器")])]),t._v(" "),v("tr",[v("td",[t._v("location")]),t._v(" "),v("td",[t._v("在"),v("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("重定向")]),t._v("的情况下，告诉浏览器访问下一个资源的地址")])])])]),t._v(" "),v("h3",{attrs:{id:"_3响应体"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3响应体"}},[t._v("#")]),t._v(" ③响应体")]),t._v(" "),v("p",[t._v("服务器返回的数据主体，有可能是各种数据类型。")]),t._v(" "),v("ul",[v("li",[t._v("HTML页面")]),t._v(" "),v("li",[t._v("图片")]),t._v(" "),v("li",[t._v("视频")]),t._v(" "),v("li",[t._v("以下载形式返回的文件")]),t._v(" "),v("li",[t._v("CSS文件")]),t._v(" "),v("li",[t._v("JavaScript文件")])]),t._v(" "),v("p",[v("RouterLink",{attrs:{to:"/pro001-javaweb/note/index.html"}},[t._v("回到上一级目录")])],1)])}),[],!1,null,null,null);a.default=_.exports},771:function(t,a){t.exports="data:image/png;base64,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"},772:function(t,a,e){t.exports=e.p+"assets/img/img005.35d6260c.png"}}]);