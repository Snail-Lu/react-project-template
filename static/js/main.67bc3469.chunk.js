(this["webpackJsonpreact-project-template"]=this["webpackJsonpreact-project-template"]||[]).push([[0],{10:function(e,t,i){e.exports={todolist_container:"TodoList_todolist_container__2qPoq",title:"TodoList_title__2jbcz",todo_item:"TodoList_todo_item__3VvMs",filter_box:"TodoList_filter_box__1mOot",current_filter_item:"TodoList_current_filter_item__3JsId",filter_item:"TodoList_filter_item__1vz3n"}},12:function(e,t,i){e.exports={top_nav:"TopNav_top_nav__1n7GW",nav_item:"TopNav_nav_item__2CSnb",nav_item_selected:"TopNav_nav_item_selected__3a0Pg"}},13:function(e,t,i){e.exports={topics_container:"Topics_topics_container__noln7",topics_nav:"Topics_topics_nav__143el",topics_nav_item:"Topics_topics_nav_item__VcVeK",topic_content:"Topics_topic_content__3X-2l",selected:"Topics_selected__14SmY"}},15:function(e,t,i){e.exports={weather_box:"Weather_weather_box__1KzPJ",weather_info:"Weather_weather_info__Skrbt"}},17:function(e,t,i){e.exports={home:"Home_home__1JeZt",home_content:"Home_home_content__1SXZc"}},20:function(e,t,i){e.exports={addtodo_box:"AddTodo_addtodo_box__2wftH",input_box:"AddTodo_input_box__1WOtc",submit_button:"AddTodo_submit_button__3I_5u"}},21:function(e,t,i){e.exports={title:"App_title__2C-7r",app:"App_app__3BT4Y",content:"App_content__11LHs"}},26:function(e,t,i){e.exports={copy_right_container:"CopyRight_copy_right_container__1fEBD",github_link:"CopyRight_github_link__3UdTp"}},46:function(e,t,i){e.exports=i(74)},51:function(e,t,i){},74:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),o=i(18),r=i.n(o),s=(i(51),i(9)),u=i(2),c=i(8),l=i(38),m=i.n(l);var p=i(10),d=i.n(p),_=function(e){var t=e.onClick,i=e.completed,a=e.text,o=e.deleteTodo;return n.a.createElement("li",{className:d.a.todo_item},n.a.createElement("span",{className:d.a.todo_item_content,style:{textDecoration:i?"line-through":"none"},onClick:t},a),n.a.createElement("span",{className:d.a.close_btn,onClick:o},"x"))},v=function(e){var t=e.active,i=e.children,a=e.onClick;return t?n.a.createElement("span",{className:d.a.current_filter_item},i):n.a.createElement("a",{href:"",onClick:function(e){e.preventDefault(),a()},className:d.a.filter_item},i)},E=Object(c.b)((function(e,t){return{active:t.filter===e.visibilityFilter}}),(function(e,t){return{onClick:function(){e({type:"SET_VISIBILITY_FILTER",filter:t.filter})}}}))(v),h=i(20),f=i.n(h),b=function(e){var t,i=e.dispatch;return n.a.createElement("div",{className:f.a.addtodo_box},n.a.createElement("form",{onSubmit:function(e){(e.preventDefault(),t.value.trim())&&(i({type:"ADD_TODO",id:1,text:t.value}),t.value="")}},n.a.createElement("input",{ref:function(e){t=e},className:f.a.input_box,placeholder:"\u8f93\u5165\u5f85\u529e\u4e8b\u9879"}),n.a.createElement("button",{type:"submit",className:f.a.submit_button},"\u6dfb\u52a0")))},T=b=Object(c.b)()(b),g=function(e){var t=e.todos,i=e.onTodoClick,a=e.onDeleteClick;return n.a.createElement("div",{className:d.a.todolist_container},n.a.createElement(T,null),n.a.createElement("div",{className:d.a.filter_box},"\u663e\u793a: ",n.a.createElement(E,{filter:"SHOW_ALL"},"\u5168\u90e8"),", ",n.a.createElement(E,{filter:"SHOW_ACTIVE"},"\u5f85\u5b8c\u6210"),", ",n.a.createElement(E,{filter:"SHOW_COMPLETED"},"\u5df2\u5b8c\u6210")),n.a.createElement("ul",null,t.map((function(e,t){return n.a.createElement(_,Object.assign({key:t},e,{onClick:function(){return i(t)},deleteTodo:function(){return a(t)}}))}))))},x=function(e,t){switch(t){case"SHOW_ALL":return e;case"SHOW_COMPLETED":return e.filter((function(e){return e.completed}));case"SHOW_ACTIVE":return e.filter((function(e){return!e.completed}))}},C=Object(c.b)((function(e){return{todos:x(e.todos,e.visibilityFilter)}}),(function(e){return{onTodoClick:function(t){e({type:"TOGGLE_TODO",index:t})},onDeleteClick:function(t){e({type:"DELETE_TODO",index:t})}}}))(g),q=i(39),N=i(40),S=i(45),O=i(44),y=i(15),w=i.n(y),L=function(e){Object(S.a)(i,e);var t=Object(O.a)(i);function i(e){var a;return Object(q.a)(this,i),(a=t.call(this,e)).weather=function(e){if(!e||!e.status)return n.a.createElement("div",null,"\u6682\u65e0\u5929\u6c14\u6570\u636e");switch(e.status){case"LOADING":return n.a.createElement("span",{className:w.a.weather_info},"\u6b63\u5728\u83b7\u53d6\u5929\u6c14\u4fe1\u606f...");case"SUCCESS":return n.a.createElement("span",{className:w.a.weather_info},e.weather.wea," ",e.weather.win," ",e.weather.win_speed," ",e.weather.tem_night,"\u2103 ~ ",e.weather.tem_day,"\u2103");case"FAIL":return n.a.createElement("span",{className:w.a.weather_info},"\u83b7\u53d6\u5929\u6c14\u5931\u8d25");default:return n.a.createElement("span",{className:w.a.weather_info},"\u6682\u65e0\u5929\u6c14\u6570\u636e")}},a.changeCity=function(e){var t=e.target.value;a.setState({cityCode:t}),a.props.selectCity(t)},a.state={cityCode:"101020100"},a}return Object(N.a)(i,[{key:"componentDidMount",value:function(){this.props.selectCity(101020100)}},{key:"render",value:function(){var e=this.weather(this.props.weather),t=this.state.cityCode;return n.a.createElement("div",{className:w.a.weather_box},e,n.a.createElement("select",{value:t,onChange:this.changeCity},n.a.createElement("option",{value:"101020100"},"\u4e0a\u6d77"),n.a.createElement("option",{value:"101010100"},"\u5317\u4eac")))}}]),i}(a.Component),A=Object(c.b)((function(e){return{weather:e.weatherInfo}}),(function(e){return{selectCity:function(t){e(function(e){return function(t){t({type:"REQUEST_WEATHER_START"}),m.a.get("/free/day",{params:{appid:59541261,appsecret:"Gl7WsQ3d",cityid:e}}).then((function(e){200===e.status&&t({type:"REQUEST_WEATHER_SUCCESS",weather:e.data})})).catch((function(e){t({type:"REQUEST_WEATHER_FAIL",error:e})}))}}(t))}}}))(L),D=i(17),H=i.n(D),I=function(){return n.a.createElement("div",{className:H.a.home},n.a.createElement(A,null),n.a.createElement("div",{className:H.a.home_content},"Lorem ipsum dolor sit amet, eum dolorem omnesque in, vim inani malorum honestatis eu. Tincidunt reprimique ius id, vim accusata indoctum cu, ludus melius assueverit duo ei. Mei tation graeco principes an, cu atqui nominati maluisset eos. Mel atqui detraxit ne. Vix in noluisse petentium, no mea eripuit principes, vero luptatum sententiae est id. Prompta repudiare adipiscing ea mel, nec integre periculis no. His at veri ludus eloquentiam, eam te appetere imperdiet neglegentur, usu in convenire repudiandae. His an minimum vivendum, cu vix dicam libris integre. Novum essent no nec, vis magna copiosae gloriatur ut. Sapientem moderatius complectitur te sea, te eos expetenda qualisque euripidis, sea ut malorum convenire. Cum id paulo probatus persecuti, an sea quem posse. Cu vix audire aperiri detracto, nominavi contentiones his id. At cum vidisse probatus. Vis ex viderer argumentum, vix te assentior interesset, odio nostrud sanctus pro id. Vel ei posidonium vituperatoribus, inermis omittam sea eu, odio ullamcorper et vel. Eos integre insolens id, sea ad nulla minimum deterruisset. Mel sumo aperiri no, per sale nobis salutatus ut, te persequeris disputationi sit. Qui ad cibo ornatus albucius, sea no feugait civibus convenire, alii idque oporteat sea an. Vitae molestiae hendrerit ut est. Sed mediocrem petentium salutandi in. An cum appetere philosophia delicatissimi, falli recteque tincidunt id vis. Hinc causae nominati mei no, ut quas voluptatum qui. Duo munere equidem euripidis at, postulant voluptatibus duo et. Quo in zril aliquid."),n.a.createElement("div",{className:H.a.home_content},"Lorem ipsum dolor sit amet, eum dolorem omnesque in, vim inani malorum honestatis eu. Tincidunt reprimique ius id, vim accusata indoctum cu, ludus melius assueverit duo ei. Mei tation graeco principes an, cu atqui nominati maluisset eos. Mel atqui detraxit ne. Vix in noluisse petentium, no mea eripuit principes, vero luptatum sententiae est id. Prompta repudiare adipiscing ea mel, nec integre periculis no. His at veri ludus eloquentiam, eam te appetere imperdiet neglegentur, usu in convenire repudiandae. His an minimum vivendum, cu vix dicam libris integre. Novum essent no nec, vis magna copiosae gloriatur ut. Sapientem moderatius complectitur te sea, te eos expetenda qualisque euripidis, sea ut malorum convenire. Cum id paulo probatus persecuti, an sea quem posse. Cu vix audire aperiri detracto, nominavi contentiones his id. At cum vidisse probatus. Vis ex viderer argumentum, vix te assentior interesset, odio nostrud sanctus pro id. Vel ei posidonium vituperatoribus, inermis omittam sea eu, odio ullamcorper et vel. Eos integre insolens id, sea ad nulla minimum deterruisset. Mel sumo aperiri no, per sale nobis salutatus ut, te persequeris disputationi sit. Qui ad cibo ornatus albucius, sea no feugait civibus convenire, alii idque oporteat sea an. Vitae molestiae hendrerit ut est. Sed mediocrem petentium salutandi in. An cum appetere philosophia delicatissimi, falli recteque tincidunt id vis. Hinc causae nominati mei no, ut quas voluptatum qui. Duo munere equidem euripidis at, postulant voluptatibus duo et. Quo in zril aliquid."),n.a.createElement("div",{className:H.a.home_content},"Lorem ipsum dolor sit amet, eum dolorem omnesque in, vim inani malorum honestatis eu. Tincidunt reprimique ius id, vim accusata indoctum cu, ludus melius assueverit duo ei. Mei tation graeco principes an, cu atqui nominati maluisset eos. Mel atqui detraxit ne. Vix in noluisse petentium, no mea eripuit principes, vero luptatum sententiae est id. Prompta repudiare adipiscing ea mel, nec integre periculis no. His at veri ludus eloquentiam, eam te appetere imperdiet neglegentur, usu in convenire repudiandae. His an minimum vivendum, cu vix dicam libris integre. Novum essent no nec, vis magna copiosae gloriatur ut. Sapientem moderatius complectitur te sea, te eos expetenda qualisque euripidis, sea ut malorum convenire. Cum id paulo probatus persecuti, an sea quem posse. Cu vix audire aperiri detracto, nominavi contentiones his id. At cum vidisse probatus. Vis ex viderer argumentum, vix te assentior interesset, odio nostrud sanctus pro id. Vel ei posidonium vituperatoribus, inermis omittam sea eu, odio ullamcorper et vel. Eos integre insolens id, sea ad nulla minimum deterruisset. Mel sumo aperiri no, per sale nobis salutatus ut, te persequeris disputationi sit. Qui ad cibo ornatus albucius, sea no feugait civibus convenire, alii idque oporteat sea an. Vitae molestiae hendrerit ut est. Sed mediocrem petentium salutandi in. An cum appetere philosophia delicatissimi, falli recteque tincidunt id vis. Hinc causae nominati mei no, ut quas voluptatum qui. Duo munere equidem euripidis at, postulant voluptatibus duo et. Quo in zril aliquid."))},R=i(12),j=i.n(R),k=function(){return n.a.createElement("ul",{className:j.a.top_nav},n.a.createElement("li",{className:j.a.nav_item},n.a.createElement(s.b,{to:"/",exact:!0,activeClassName:j.a.nav_item_selected},"Home")),n.a.createElement("li",{className:j.a.nav_item},n.a.createElement(s.b,{to:"/todolist",activeClassName:j.a.nav_item_selected},"TodoList")),n.a.createElement("li",{className:j.a.nav_item},n.a.createElement(s.b,{to:"/topics",activeClassName:j.a.nav_item_selected},"Topics")))},V=function(){var e=Object(u.f)().topicId;return n.a.createElement("h3",null,"Requested topic ID: ",e)},W=i(13),M=i.n(W),Q=function(){var e=Object(u.g)();return n.a.createElement("div",{className:M.a.topics_container},n.a.createElement("ul",{className:M.a.topics_nav},n.a.createElement("li",{className:M.a.topics_nav_item},n.a.createElement(s.b,{activeClassName:M.a.selected,to:"".concat(e.url,"/topic1")},"Topic1")),n.a.createElement("li",{className:M.a.topics_nav_item},n.a.createElement(s.b,{activeClassName:M.a.selected,to:"".concat(e.url,"/topic2")},"Topic2"))),n.a.createElement("div",{className:M.a.topic_content},n.a.createElement(u.c,null,n.a.createElement(u.a,{path:"".concat(e.path,"/:topicId")},n.a.createElement(V,null)),n.a.createElement(u.a,{path:e.path},n.a.createElement("h3",null,"Please select a topic.")))))},U=i(26),F=i.n(U),P=function(){return n.a.createElement("div",{className:F.a.copy_right_container},"CopyRight \xa9 2020 ",n.a.createElement("a",{href:"https://github.com/Snail-Lu/react-project-template",className:F.a.github_link},"Snail-Lu"))},G=i(21),z=i.n(G),B=function(){return n.a.createElement(s.a,null,n.a.createElement("div",{className:z.a.app},n.a.createElement("h1",{className:z.a.title},"react\u5355\u9875\u5e94\u7528\u6a21\u677f"),n.a.createElement(k,null),n.a.createElement("div",{className:z.a.content},n.a.createElement(u.c,null,n.a.createElement(u.a,{path:"/todolist"},n.a.createElement(C,null)),n.a.createElement(u.a,{path:"/topics"},n.a.createElement(Q,null)),n.a.createElement(u.a,{path:"/",exact:!0},n.a.createElement(I,null)))),n.a.createElement(P,null)))},J=i(43),Y=i(11);var K=Object(Y.combineReducers)({visibilityFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SHOW_ALL",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(J.a)(e),[{id:t.id,text:t.text,completed:!1}]);case"TOGGLE_TODO":return e.map((function(e,i){return i===t.index?Object.assign({},e,{completed:!e.completed}):e}));case"DELETE_TODO":return e.filter((function(e,i){return i!==t.index}));default:return e}},weatherInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_WEATHER_START":return{status:"LOADING"};case"REQUEST_WEATHER_SUCCESS":return{status:"SUCCESS",weather:t.weather};case"REQUEST_WEATHER_FAIL":return{status:"FAIL",error:t.error};default:return e}}}),X=i(41),Z=i(42),$=[X.a],ee=Object(Z.composeWithDevTools)({}),te=Object(Y.createStore)(K,ee(Y.applyMiddleware.apply(void 0,$)));r.a.render(n.a.createElement(c.a,{store:te},n.a.createElement(B,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.67bc3469.chunk.js.map