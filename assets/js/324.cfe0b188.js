(window.webpackJsonp=window.webpackJsonp||[]).push([[324],{1747:function(t,e,a){t.exports=a.p+"assets/img/img020.4992f66f.png"},2443:function(t,e,a){"use strict";a.r(e);var v=a(54),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#_1、aqs-简介"}},[t._v("1、AQS 简介")])]),v("li",[v("a",{attrs:{href:"#_2、aqs-核心方法介绍"}},[t._v("2、AQS 核心方法介绍")])])])]),v("p"),t._v(" "),v("h1",{attrs:{id:"第四节-aqs"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第四节-aqs"}},[t._v("#")]),t._v(" 第四节 AQS")]),t._v(" "),v("h2",{attrs:{id:"_1、aqs-简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、aqs-简介"}},[t._v("#")]),t._v(" 1、AQS 简介")]),t._v(" "),v("p",[t._v("首先来认识一个"),v("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("抽象类")]),t._v("：")]),t._v(" "),v("p",[v("img",{attrs:{src:a(1747),alt:"images"}})]),t._v(" "),v("p",[t._v("根据类的名字 AbstractQueuedSynchronizer 我们姑且可以翻译为：抽象的队列式同步器。AQS 定义了一套多线程访问共享资源的"),v("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("同步器框架")]),t._v("，许多同步类实现都依赖于它。")]),t._v(" "),v("p",[t._v("它维护了一个 volatile int state（代表共享资源）和一个 FIFO 线程等待队列（多线程争用资源被阻塞时会进入此队列）。这里 volatile 是核心关键词。state 的访问方式有三种：")]),t._v(" "),v("ul",[v("li",[t._v("getState()")]),t._v(" "),v("li",[t._v("setState()")]),t._v(" "),v("li",[t._v("compareAndSetState()")])]),t._v(" "),v("p",[t._v("AQS定义两种资源共享方式：Exclusive（独占，只有一个线程能执行，如ReentrantLock）和 Share（共享，多个线程可同时执行，如 Semaphore、CountDownLatch 等。")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("独占锁：排斥所有其它锁，例如：写锁。")])]),t._v(" "),v("li",[v("p",[t._v("共享锁：共享锁之间不排斥，排斥独占锁，例如：读锁。")])])]),t._v(" "),v("p",[t._v("注意：如果是同一个线程对同一个对象加锁，那么它可以在加了独占锁之后继续加共享锁，或者，在加了共享锁之后继续加独占锁。所以上面所说的排斥是指线程之间。")])]),t._v(" "),v("h2",{attrs:{id:"_2、aqs-核心方法介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、aqs-核心方法介绍"}},[t._v("#")]),t._v(" 2、AQS 核心方法介绍")]),t._v(" "),v("p",[t._v("不同的自定义同步器争用共享资源的方式也不同。自定义同步器在实现时只需要实现共享资源 "),v("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("state 的获取与释放")]),t._v("方式即可，至于具体线程等待队列的维护（如获取资源失败入队/唤醒出队等），AQS已经在顶层实现好了。自定义同步器实现时主要实现以下几种方法：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("方法名")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("boolean isHeldExclusively()")]),t._v(" "),v("td",[t._v("该线程是否正在独占资源。只有用到 condition 才需要去重写它。")])]),t._v(" "),v("tr",[v("td",[t._v("boolean tryAcquire(int)")]),t._v(" "),v("td",[t._v("尝试以独占方式获取资源，成功则返回true，失败则返回false。"),v("br"),t._v("int 类型的参数是用来累加 state 的")])]),t._v(" "),v("tr",[v("td",[t._v("boolean tryRelease(int)")]),t._v(" "),v("td",[t._v("尝试以独占方式释放资源，成功则返回true，失败则返回false。"),v("br"),t._v("int 类型的参数是用来从 state 中减去的")])]),t._v(" "),v("tr",[v("td",[t._v("int tryAcquireShared(int)")]),t._v(" "),v("td",[t._v("尝试以共享方式获取资源。"),v("br"),t._v("返回负数：获取失败"),v("br"),t._v("返回正数：获取成功且有剩余资源"),v("br"),t._v("返回0：获取成功但没有剩余资源")])]),t._v(" "),v("tr",[v("td",[t._v("boolean tryReleaseShared(int)")]),t._v(" "),v("td",[t._v("尝试以共享方式释放资源，"),v("br"),t._v("如果释放后允许唤醒后续等待结点返回 true，否则返回 false。")])])])]),t._v(" "),v("p",[v("RouterLink",{attrs:{to:"/pro017-JUC/lecture/chapter05/verse03.html"}},[t._v("上一节")]),t._v(" "),v("RouterLink",{attrs:{to:"/pro017-JUC/lecture/chapter05/index.html"}},[t._v("回目录")])],1)])}),[],!1,null,null,null);e.default=_.exports}}]);