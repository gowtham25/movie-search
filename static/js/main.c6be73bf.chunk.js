(this["webpackJsonpmovie-search-sourcecode"]=this["webpackJsonpmovie-search-sourcecode"]||[]).push([[0],{23:function(e,n,t){e.exports=t(36)},28:function(e,n,t){},29:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(18),o=t.n(r),l=(t(28),t(11)),c=t(6),s=t(4),d=t(7),m=t(1),u=t(5);t(29);function p(){var e=Object(s.a)(["\n    background: #222323;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    .movie-detail-container {\n        display: flex;\n        flex-direction: row;\n        .movie-detail-image {\n            width: 300px;\n            height: 428px;\n        }\n        .details-container {\n            display: flex;\n            flex-direction: column;\n            align-items: baseline;\n            .people-details {\n                display: flex;\n                flex-direction: column;\n                align-items: baseline;\n                left: 7px;\n                margin-left: 9px;\n                margin-top: 14px;            \n            }\n            h1 {\n                font-weight: 300;\n                text-transform: capitalize;\n                color: #FFF;\n                font-size: 2rem;\n                font-family: Roboto,sans-serif;\n                margin-bottom: 0;\n                left: 8px;\n                position: relative;\n            }\n            .time-details {\n                font-weight: 400;\n                color: #9e9e9e;\n                font-size: 1rem;\n                padding: 0 8px;\n                line-height: 1.5rem;\n            }\n            .details-row, .about {\n                display: flex;\n                flex-direction: row;\n                align-items: baseline;\n                justify-content: center;\n                .row-header, .row-value {\n                    font-size: 17px;\n                    font-weight: 700;\n                    font-family: Roboto,sans-serif;\n                }\n                .row-header {\n                    margin-right: 3px;\n                    color: #9e9e9e;\n                }\n                .row-value {\n                    color: #d8272c;\n                }\n            }\n            .about {\n                display: flex;\n                flex-direction: column;\n                margin-left: 9px;\n                margin-top: 7px;\n                .plot-details {\n                    line-height: 1.5rem;\n                    font-size: 1rem;\n                    font-weight: 700;\n                    color: #FFF;\n                }\n            }\n        }\n    }\n    @media screen and (max-width: 1024px) {\n        padding: 13px;\n        height: 94vh;\n        .movie-detail-container { \n            display: flex;\n            flex-direction: column;\n            .movie-detail-image {\n                width: 200px;\n                height: 280px;\n            }\n        }\n    }\n    @media screen and (max-width: 700px) {\n        padding: 13px;\n        height: 94vh;\n        .movie-detail-container { \n            display: flex;\n            flex-direction: column;\n            .movie-detail-image {\n                width: 200px;\n                height: 280px;\n            }\n        }\n\t}\n"]);return p=function(){return e},e}var f=u.a.div(p()),v=function(e){e.movieData;var n=Object(m.f)().id,t=void 0===n?"":n,r=Object(a.useState)({}),o=Object(c.a)(r,2),l=o[0],s=o[1],d=Object(a.useState)(!1),u=Object(c.a)(d,2),p=u[0],v=u[1];Object(a.useEffect)((function(){v(!0),fetch("http://www.omdbapi.com/?i=".concat(t,"&apikey=6001b816")).then((function(e){return e.json()})).then((function(e){s(e),v(!1)}))}),[t]);var h=l||{},x=h.Poster,g=void 0===x?"":x,w=h.Title,E=void 0===w?"":w,b=h.Actors,y=h.Year,N=h.Runtime,j=h.Genre,F=h.Director,O=h.Plot,k=h.Language,S=void 0===k?"":k,D=h.imdbRating;return i.a.createElement(f,null,p?i.a.createElement("p",null,"Loading Please wait..."):i.a.createElement("div",{className:"movie-detail-container"},i.a.createElement("img",{src:g,alt:E,className:"movie-detail-image"}),i.a.createElement("div",{className:"details-container"},E&&i.a.createElement("h1",null,"".concat(E," - ").concat(S)),N&&i.a.createElement("div",{className:"time-details"},i.a.createElement("div",null,"".concat(N,".").concat(y))),i.a.createElement("div",{className:"people-details"},F&&i.a.createElement("div",{className:"details-row"},i.a.createElement("div",{className:"row-header"},"Director: "),i.a.createElement("div",{className:"row-value"},F)),j&&i.a.createElement("div",{className:"details-row"},i.a.createElement("div",{className:"row-header"},"Genre: "),i.a.createElement("div",{className:"row-value"},j)),b&&i.a.createElement("div",{className:"details-row"},i.a.createElement("div",{className:"row-header"},"Actors: "),i.a.createElement("div",{className:"row-value"},b))),O&&i.a.createElement("div",{className:"about"},i.a.createElement("div",{className:"row-header"},"About"),i.a.createElement("div",{className:"plot-details"},O)),i.a.createElement("div",{className:"people-details"},D&&i.a.createElement("div",{className:"details-row"},i.a.createElement("div",{className:"row-header"},"Rating: "),i.a.createElement("div",{className:"row-value"},D))))))},h=t(22);function x(){var e=Object(s.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    .movie-title {\n        font-size: 20px;\n        color: #999;\n        font-weight: 400;\n        padding: 10px 0 0;\n        width: 100%;\n        transition: all .1s linear;\n        display: flex;\n        justify-content: center;\n        padding: 0px\n    }\n    .poster {\n        width: 200px;\n        height: 280px;\n    }\n    .details-container {\n        display: flex;\n        flex-direction: column;\n        .details-row {\n            display: flex;\n            flex-direction: row;\n            align-items: baseline;\n            justify-content: center;\n            .row-header, .row-value {\n                font-size: 17px;\n                font-weight: 700;\n                font-family: monospace;\n            }\n        }\n        button {\n            padding: 6px 15px;\n            color: #FFF;\n            border-radius: 10px;\n            outline: none;\n            border: none;\n            cursor: pointer;\n            font-size: 13px;\n            font-weight: bold;\n            &.not-favourite {\n                background: green;\n            }\n            &.favourite {\n                background: red; \n            }\n        }\n        .view-more-details {\n            font-size: 13px;\n            text-align: center;\n            font-weight: 700;\n            cursor: pointer;\n            color: #8282cb;\n        }\n    }\n"]);return x=function(){return e},e}var g=u.a.div(x()),w=Object(m.g)((function(e){var n=e.data,t=e.handleFavourite,a=Object(h.a)(e,["data","handleFavourite"]),r=n||{},o=r.Poster,l=r.Title,c=r.Type,s=r.Year,d=r.imdbID,m=r.isFavourite,u=void 0===m||m;return i.a.createElement(g,{key:d},i.a.createElement("h1",{className:"movie-title"},l),i.a.createElement("img",{src:o,alt:l,className:"poster"}),i.a.createElement("div",{className:"details-container"},i.a.createElement("div",{className:"details-row"},i.a.createElement("div",{className:"row-header"},"Type :"),i.a.createElement("div",{className:"row-value"},c)),i.a.createElement("div",{className:"details-row"},i.a.createElement("div",{className:"row-header"},"Release Date :"),i.a.createElement("div",{className:"row-value"},s)),i.a.createElement("button",{onClick:function(){t(d,!u)},className:u?"favourite":"not-favourite"},u?"Remove Favourite":"Set As Favourite"),i.a.createElement("span",{onClick:function(){a.history.push("/movie/".concat(d))},className:"view-more-details"},"View Movie Details")))}));function E(){var e=Object(s.a)(["\n    p {\n        text-align: center;\n        font-size: 17px;\n        font-weight: 700;\n        font-family: sans-serif;\n    }\n"]);return E=function(){return e},e}function b(){var e=Object(s.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    grid-gap: 10px;\n    padding-bottom: 10px;\n    @media screen and (max-width: 1024px) {\n        grid-template-columns: 1fr 1fr;\n    }\n    @media screen and (max-width: 700px) {\n\t\tgrid-template-columns: 1fr;\n\t}\n"]);return b=function(){return e},e}var y=u.a.div(b()),N=u.a.div(E()),j=function(e){var n=e.movieData,t=e.loading,a=e.handleFavourite,r=e.favourite,o=n||{},l=o.Response,c=void 0===l||l,s=o.Search,d=void 0===s?[]:s;return i.a.createElement(i.a.Fragment,null,i.a.createElement(y,null,!r&&!t&&c&&d&&d.length>0&&d.map((function(e){var n=(e||{}).imdbID,t=void 0===n?"":n;return i.a.createElement(w,{data:e,key:t,handleFavourite:a})})),r&&!t&&c&&d&&d.length>0&&d.filter((function(e){return e.isFavourite})).map((function(e){var n=(e||{}).imdbID,t=void 0===n?"":n;return i.a.createElement(w,{data:e,key:t,handleFavourite:a})}))),i.a.createElement(N,null,!t&&(!c||!d.length)&&i.a.createElement("p",null,"No Results Found..."),t&&i.a.createElement("p",null,"Loading Please Wait...")))};function F(){var e=Object(s.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    .search-input-container {\n        .search-text {\n            width: 500px;\n            height: 30px;\n            outline: none;\n            padding-left: 11px;\n            font-size: 17px;\n            font-weight: 600;\n        }\n        .select-type {\n            height: 36px;\n            border-left: none;\n            outline: none;\n            width: 154px;\n            position: relative;    \n            top: -1px;\n        }\n    }\n    .search-button {\n        margin-left: 60px;\n        width: 150px;\n        cursor: pointer;\n        background: transparent;\n        outline: none;\n        border: 2px solid #CCC;\n        border-radius: 6px;\n    }\n    @media screen and (max-width: 1024px) {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n\t\t.search-input-container {\n            display: flex;\n            flex-direction: row;\n            width: 90%;\n            .search-text {\n                width: 70%;\n            }\n            .select-type {\n                width: 30%;\n                top: 0px;\n            }\n        }\n        .search-button {\n            height: 29px;\n            margin-top: 12px;\n            margin-left: -12px;        \n        }\n\t}\n    }\n    @media screen and (max-width: 700px) {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n\t\t.search-input-container {\n            display: flex;\n            flex-direction: row;\n            width: 90%;\n            .search-text {\n                width: 70%;\n            }\n            .select-type {\n                width: 30%;\n                top: 0px;\n            }\n        }\n        .search-button {\n            height: 29px;\n            margin-top: 12px;\n            margin-left: -12px;        \n        }\n\t}\n"]);return F=function(){return e},e}var O=u.a.div(F()),k=function(e){var n=e.getData,t=Object(a.useState)(""),r=Object(c.a)(t,2),o=r[0],l=r[1],s=Object(a.useState)(""),d=Object(c.a)(s,2),m=d[0],u=d[1];return i.a.createElement(O,null,i.a.createElement("div",{className:"search-input-container"},i.a.createElement("input",{className:"search-text",type:"text",value:o,onChange:function(e){l(e.target.value)}}),i.a.createElement("select",{value:m,className:"select-type",onChange:function(e){u(e.target.value)}},i.a.createElement("option",{value:""},"All"),i.a.createElement("option",{value:"movie"},"Movies"),i.a.createElement("option",{value:"series"},"Series"),i.a.createElement("option",{value:"episode"},"Episodes"))),i.a.createElement("button",{className:"search-button",onClick:function(){n(o,m)}},"Search"))};function S(){var e=Object(s.a)(["\n\theader {\n\t\tposition: sticky;\n\t\ttop: 0;\n\t\tbackground: #FFF;\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\t\tpadding: 0 20px;\n\t\theight: 35px;\n\t\tborder: 1px solid #000;\n\t\ta {\n\t\t\tcolor: #000;\n\t\t\ttext-decoration: none;\n\t\t\t.home{\n\t\t\t\tfont-size: 16px;\n\t\t\t\tfont-weight: 700;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t}\n\t}\n\t.App {\n\t\tmargin-top: 50px;\n\t}\n"]);return S=function(){return e},e}var D=u.a.div(S());var z=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)(!1),s=Object(c.a)(o,2),u=s[0],p=s[1],f=function(e,n){var a=(t||{}).Search,i=void 0===a?[]:a,o=i&&i.length>0&&i.map((function(t){return t.imdbID===e?Object(l.a)({},t,{isFavourite:n}):t}));r(Object(l.a)({},t,{Search:o}))};return i.a.createElement(D,null,i.a.createElement(d.a,null,i.a.createElement("header",null,i.a.createElement(d.b,{to:"/"},i.a.createElement("div",{className:"home"},"Home")),i.a.createElement(d.b,{to:"/favourites"},i.a.createElement("div",{className:"home"},"Favourites"))),i.a.createElement(m.c,null,i.a.createElement(m.a,{path:"/",exact:!0,children:i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"App"},i.a.createElement(k,{getData:function(e,n){p(!0),fetch("http://www.omdbapi.com/?s=".concat(e,"&apikey=6001b816&y=").concat(e,"&type=").concat(n)).then((function(e){return e.json()})).then((function(e){var n=(e||{}).Search,t=void 0===n?[]:n,a=t&&t.length>0&&t.map((function(e){return Object(l.a)({},e,{isFavourite:!0})}));r(Object(l.a)({},e,{Search:a||[]})),p(!1)}))}})),i.a.createElement(j,{movieData:t,loading:u,handleFavourite:f}))}),i.a.createElement(m.a,{path:"/favourites",exact:!0,children:i.a.createElement(j,{favourite:!0,movieData:t,loading:u,handleFavourite:f})}),i.a.createElement(m.a,{path:"/movie/:id",exact:!0,children:i.a.createElement(v,{movieData:t.Search})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.c6be73bf.chunk.js.map