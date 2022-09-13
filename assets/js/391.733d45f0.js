(window.webpackJsonp=window.webpackJsonp||[]).push([[391],{2085:function(t,a,s){"use strict";s.r(a);var n=s(54),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1、依赖的传递性"}},[t._v("1、依赖的传递性")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1概念"}},[t._v("①概念")])]),s("li",[s("a",{attrs:{href:"#_2传递的原则"}},[t._v("②传递的原则")])])])]),s("li",[s("a",{attrs:{href:"#_2、使用-compile-范围依赖-spring-core"}},[t._v("2、使用 compile 范围依赖 spring-core")])]),s("li",[s("a",{attrs:{href:"#_3、验证-test-和-provided-范围不能传递"}},[t._v("3、验证 test 和 provided 范围不能传递")])])])]),s("p"),t._v(" "),s("h1",{attrs:{id:"实验七-测试依赖的传递性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实验七-测试依赖的传递性"}},[t._v("#")]),t._v(" 实验七：测试依赖的传递性")]),t._v(" "),s("h2",{attrs:{id:"_1、依赖的传递性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、依赖的传递性"}},[t._v("#")]),t._v(" 1、依赖的传递性")]),t._v(" "),s("h3",{attrs:{id:"_1概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1概念"}},[t._v("#")]),t._v(" ①概念")]),t._v(" "),s("p",[t._v("A 依赖 B，B 依赖 C，那么在 A 没有配置对 C 的依赖的情况下，A 里面能不能直接使用 C？")]),t._v(" "),s("h3",{attrs:{id:"_2传递的原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2传递的原则"}},[t._v("#")]),t._v(" ②传递的原则")]),t._v(" "),s("p",[t._v("在 A 依赖 B，B 依赖 C 的前提下，C 是否能够传递到 A，取决于 B 依赖 C 时使用的依赖范围。")]),t._v(" "),s("ul",[s("li",[t._v("B 依赖 C 时使用 compile 范围：可以传递")]),t._v(" "),s("li",[t._v("B 依赖 C 时使用 test 或 provided 范围：不能传递，所以需要这样的 jar 包时，就必须在需要的地方明确配置依赖才可以。")])]),t._v(" "),s("h2",{attrs:{id:"_2、使用-compile-范围依赖-spring-core"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、使用-compile-范围依赖-spring-core"}},[t._v("#")]),t._v(" 2、使用 compile 范围依赖 spring-core")]),t._v(" "),s("p",[t._v("测试方式：让 pro01-maven-java 工程依赖 spring-core")]),t._v(" "),s("p",[t._v("具体操作：编辑 pro01-maven-java 工程根目录下 pom.xml")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- https://mvnrepository.com/artifact/org.springframework/spring-core --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-core"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("4.0.0.RELEASE"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("使用 mvn dependency:tree 命令查看效果：")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("[INFO] com.atguigu.maven:pro01-maven-java:jar:1.0-SNAPSHOT"),s("br"),t._v("\n[INFO] +- junit:junit:jar:4.12:test"),s("br"),t._v("\n[INFO] |  \\- org.hamcrest:hamcrest-core:jar:1.3:test"),s("br"),t._v("\n[INFO] \\- org.springframework:spring-core:jar:4.0.0.RELEASE:compile"),s("br"),t._v("\n[INFO]    \\- commons-logging:commons-logging:jar:1.1.1:compile")])]),t._v(" "),s("p",[t._v("还可以在 Web 工程中，使用 mvn dependency:tree 命令查看效果（需要重新将 pro01-maven-java 安装到仓库）：")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("[INFO] com.atguigu.maven:pro02-maven-web:war:1.0-SNAPSHOT"),s("br"),t._v("\n[INFO] +- junit:junit:jar:4.12:test"),s("br"),t._v("\n[INFO] |  \\- org.hamcrest:hamcrest-core:jar:1.3:test"),s("br"),t._v("\n[INFO] +- javax.servlet:javax.servlet-api:jar:3.1.0:provided"),s("br"),t._v("\n[INFO] \\- com.atguigu.maven:pro01-maven-java:jar:1.0-SNAPSHOT:compile"),s("br"),t._v("\n[INFO]    \\- org.springframework:spring-core:jar:4.0.0.RELEASE:compile"),s("br"),t._v("\n[INFO]       \\- commons-logging:commons-logging:jar:1.1.1:compile")])]),t._v(" "),s("h2",{attrs:{id:"_3、验证-test-和-provided-范围不能传递"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、验证-test-和-provided-范围不能传递"}},[t._v("#")]),t._v(" 3、验证 test 和 provided 范围不能传递")]),t._v(" "),s("p",[t._v("从上面的例子已经能够看到，pro01-maven-java 依赖了 junit，但是在 pro02-maven-web 工程中查看依赖树的时候并没有看到 junit。")]),t._v(" "),s("p",[t._v("要验证 provided 范围不能传递，可以在 pro01-maven-java 工程中加入 servlet-api 的依赖。")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("javax.servlet"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("javax.servlet-api"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("3.1.0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("provided"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("效果还是和之前一样：")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("[INFO] com.atguigu.maven:pro02-maven-web:war:1.0-SNAPSHOT"),s("br"),t._v("\n[INFO] +- junit:junit:jar:4.12:test"),s("br"),t._v("\n[INFO] |  \\- org.hamcrest:hamcrest-core:jar:1.3:test"),s("br"),t._v("\n[INFO] +- javax.servlet:javax.servlet-api:jar:3.1.0:provided"),s("br"),t._v("\n[INFO] \\- com.atguigu.maven:pro01-maven-java:jar:1.0-SNAPSHOT:compile"),s("br"),t._v("\n[INFO]    \\- org.springframework:spring-core:jar:4.0.0.RELEASE:compile"),s("br"),t._v("\n[INFO]       \\- commons-logging:commons-logging:jar:1.1.1:compile")])]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/pro002-maven/chapter03/verse06.html"}},[t._v("上一节")]),t._v(" "),s("RouterLink",{attrs:{to:"/pro002-maven/chapter03/index.html"}},[t._v("回目录")]),t._v(" "),s("RouterLink",{attrs:{to:"/pro002-maven/chapter03/verse08.html"}},[t._v("下一节")])],1)])}),[],!1,null,null,null);a.default=r.exports}}]);