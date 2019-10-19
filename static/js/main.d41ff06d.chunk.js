(this["webpackJsonpvigoler-ui"]=this["webpackJsonpvigoler-ui"]||[]).push([[0],{100:function(e,t,o){e.exports=o(278)},105:function(e,t,o){},205:function(e,t,o){},278:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),i=o(18),r=o.n(i),l=(o(105),o(27)),s=o(28),d=o(30),c=o(29),u=o(31),h=o(36),m=o(32),v=o.n(m),f=o(45),p=function(e){function t(e){var o;Object(l.a)(this,t),o=Object(d.a)(this,Object(c.a)(t).call(this,e));var a=null;return e.video.finish&&(a=O.URL+"/"+o.props.video.id+"/download"),o.state={downloadUrl:a,isDownloading:!1,ids:[]},o.startDownloadVideo=o.startDownloadVideo.bind(Object(h.a)(o)),o.fetchVideo=o.fetchVideo.bind(Object(h.a)(o)),o.downloadVideoTimeout=null,o}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){null!==this.downloadVideoTimeout&&clearTimeout(this.downloadVideoTimeout)}},{key:"startDownloadVideo",value:function(){var e=this;this.setState({isDownloading:!0}),fetch(O.URL+"/"+this.props.video.id,{method:"POST"}).then((function(o){200===o.status&&(e.downloadVideoTimeout=setTimeout(e.fetchVideo,t.FETCH_VIDEO_PERIODIC))}))}},{key:"fetchVideo",value:function(){var e=this;null===this.state.downloadUrl&&fetch(O.URL+"/"+this.props.video.id,{method:"GET"}).then((function(o){200===o.status?e.setState({downloadUrl:O.URL+"/"+e.props.video.id+"/download"}):202===o.status&&o.json().then((function(o){if(null!=o.ids){var a=o.ids.filter((function(t){return!e.state.ids.includes(t)})),n=!0,i=!1,r=void 0;try{for(var l,s=a[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var d=l.value;e.props.addVideoCallback(d)}}catch(c){i=!0,r=c}finally{try{n||null==s.return||s.return()}finally{if(i)throw r}}e.setState({ids:o.ids})}e.downloadVideoTimeout=setTimeout(e.fetchVideo,t.FETCH_VIDEO_PERIODIC)}))}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,null===this.state.downloadUrl&&n.a.createElement("div",{className:"Flex-div"},n.a.createElement(v.a,{disabled:!0},e.props.video.name),e.state.isDownloading?n.a.createElement("div",{className:"Download-Video"},n.a.createElement(f.PulseLoader,{loading:e.state.isDownloading,sizeUnit:"px",size:15,color:"blue"})):n.a.createElement(v.a,{onClick:e.startDownloadVideo},"process")),null!==this.state.downloadUrl&&n.a.createElement(v.a,{href:this.state.downloadUrl},this.props.video.name))}}]),t}(a.Component);p.FETCH_VIDEO_PERIODIC=1e3;var b=o(37),w=function(e){function t(e){var o;return Object(l.a)(this,t),(o=Object(d.a)(this,Object(c.a)(t).call(this,e))).state={isStillShow:!0},setTimeout((function(){o.setState({isStillShow:!1}),null!=e.timeoutCallback&&e.timeoutCallback()}),e.timeout),Object(b.b)(e.errorMessage,{type:"error"}),o}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null)}}]),t}(a.Component),E=(o(205),o(98)),g=o.n(E),y=(o(206),function(e){function t(e){var o;return Object(l.a)(this,t),(o=Object(d.a)(this,Object(c.a)(t).call(this,e))).state={youUrl:"",videos:[],isLoading:!1,error:!1},b.b.configure(),o}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,o=function(o){fetch(t.URL+"/"+o,{method:"GET"}).then((function(t){t.ok?t.json().then((function(t){var o=e.state.videos;t.finish=!0,o.push(t),e.setState({videos:o})})):e.setState({error:!0})}),(function(e){console.log(e)}))};return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h2",null,"Download videos from youtube and many more")),n.a.createElement(b.a,{position:"bottom-center",autoClose:this.props.timeout,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnVisibilityChange:!0,draggable:!1,pauseOnHover:!1}),this.state.error&&n.a.createElement(w,{timeout:2e3,errorMessage:"can not find any video.",timeoutCallback:function(){e.setState({error:!1})}}),n.a.createElement(g.a,{label:"video url",className:"Video-url",fullWidth:!0,value:this.state.youUrl,onChange:function(t){e.setState({youUrl:t.target.value})}}),n.a.createElement("div",{className:"Download-url"},n.a.createElement(v.a,{variant:"contained",color:"primary",className:"Download-url",onClick:function(){e.state.isLoading||(e.setState({isLoading:!0}),fetch(t.URL,{body:e.state.youUrl,method:"POST"}).then((function(t){t.ok?t.json().then((function(t){var o=e.state.videos,a=!0,n=!1,i=void 0;try{for(var r,l=t[Symbol.iterator]();!(a=(r=l.next()).done);a=!0){var s=r.value;o.push(s)}}catch(d){n=!0,i=d}finally{try{a||null==l.return||l.return()}finally{if(n)throw i}}e.setState({videos:o})})):e.setState({error:!0}),e.setState({isLoading:!1})}),(function(e){console.log(e)})))}},"Download")),this.state.videos.map((function(e){return n.a.createElement(p,{key:e.id,video:e,addVideoCallback:o})})),n.a.createElement("div",{className:"Video-loading"},n.a.createElement(f.RingLoader,{loading:this.state.isLoading,sizeUnit:"px",size:150,color:"blue"})))}}]),t}(a.Component));y.URL="https://vigoler.eastus2.azurecontainer.io:443/videos";var O=y;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[100,1,2]]]);
//# sourceMappingURL=main.d41ff06d.chunk.js.map