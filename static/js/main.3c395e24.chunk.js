(this["webpackJsonplights-out-game"]=this["webpackJsonplights-out-game"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=(n(13),n(1)),l=n(2),s=n(4),u=n(3),m=n(5),p=(n(14),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){n.props.click(n.props.index)},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e="Square ".concat(this.props.on?"Square-on":"");return r.a.createElement("div",{className:e,onClick:this.handleClick})}}]),t}(a.Component));function h(e,t){return 0===e?[e,e+1,e+t]:e===t-1?[e,e-1,e+t]:e===t*(t-1)?[e,e-t,e+1]:e===t*t-1?[e,e-t,e-1]:e>0&&e<t-1?[e,e-1,e+1,e+t]:e%t===0?[e,e+1,e-t,e+t]:e%t===t-1?[e,e-1,e-t,e+t]:e>t*(t-1)&&e<t*t-1?[e,e-1,e+1,e-t]:[e,e-1,e+1,e-t,e+t]}n(15);var d=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={board:Array(n.props.size*n.props.size).fill(!1)},n.componentDidMount=function(){for(var e=n.props.size,t=[];t.length<Math.floor(e*e/3);){var a=Math.floor(Math.random()*(e*e));t.includes(a)||t.push(a)}console.log(t);var r=n.state.board;t.map((function(e){return r[e]=!0})),n.setState({board:r})},n.click=function(e){var t=n.state.board;h(e,n.props.size).map((function(e){return t[e]=!t[e]})),n.setState({board:t})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.board.map((function(t,n){return r.a.createElement(p,{key:n,index:n,on:t,click:e.click})}));return r.a.createElement("div",{className:"Flex-item Board"},t)}}]),t}(a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Flex-item Menu"},r.a.createElement("button",null,"Restart"),r.a.createElement("div",{className:"Menu-click"},r.a.createElement("h4",null,"Clikced: 0")))}}]),t}(a.Component);n(16);var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"App-header"},"Lights Out Game"),r.a.createElement("div",{className:"App-content"},r.a.createElement(d,{size:5}),r.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.3c395e24.chunk.js.map