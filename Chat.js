function loadCss(e) {
    var t = document.createElement("link");
    t.type = "text/css",
    t.rel = "stylesheet",
    t.href = e,
    document.getElementsByTagName("head")[0].appendChild(t)
}
function seriesLoadScripts(e, t) {
    if ("object" != typeof e)
        var e = [e];
    var i = document.getElementsByTagName("head").item(0) || document.documentElement
      , s = new Array
      , n = e.length - 1
      , a = function(r) {
        s[r] = document.createElement("script"),
        s[r].setAttribute("type", "text/javascript"),
        s[r].setAttribute("charset", "UTF-8"),
        s[r].onload = s[r].onreadystatechange = function() {
            this.onload = this.onreadystatechange = null,
            this.parentNode.removeChild(this),
            r != n ? a(r + 1) : "function" == typeof t && t()
        }
        ,
        s[r].setAttribute("src", e[r]),
        i.appendChild(s[r])
    };
    a(0)
}
function getQueryString(e, t) {
    var i = new RegExp("(^|&)" + e + "=([^&]*)(&|$)")
      , s = window.location.search.substr(1).match(i);
    return t && (s = t.split("?")[1].match(i)),
    null != s ? unescape(s[2]) : null
}
function Utemplate(e, t) {
    function i(e, t) {
        return a += t ? e.match(n) ? e + "\n" : "arr.push(" + e + ");\n" : "" != e ? "arr.push('" + e.replace(/"/g, '\\"') + "');\n" : "",
        arguments.callee
    }
    for (var s = /<%([^%>]+)?%>/g, n = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, a = "var arr = []; \n", r = 0; match = s.exec(e); )
        i(e.slice(r, match.index))(match[1], !0),
        r = match.index + match[0].length;
    return i(e.substr(r, e.length - r)),
    a += "return arr.join('')",
    new Function(a.replace(/[\r\t\n]/g, "")).apply(t)
}
function EventManger() {
    var e = {};
    this.subscribe = function(t, i) {
        void 0 === e[t] && (e[t] = []),
        e[t].push({
            context: this,
            callback: i
        })
    }
    ,
    this.publish = function(t) {
        if (void 0 === e[t])
            return !1;
        for (var i = Array.prototype.slice.call(arguments, 1), s = 0, n = e[t].length; s < n; s++) {
            var a = e[t][s];
            a.callback.apply(a.context, i)
        }
    }
}
function getQueryString(e, t) {
    var i = new RegExp("(^|&)" + e + "=([^&]*)(&|$)")
      , s = window.location.search.substr(1).match(i);
    return t && (s = t.split("?")[1].match(i)),
    null != s ? unescape(s[2]) : null
}
function getQueryParams(e) {
    var t = {};
    if (e.split("?").length > 1)
        for (var i = e.split("?")[1], s = i.split("&"), n = 0; n < s.length; n++) {
            var a = s[n].split("=");
            a.length > 1 && (t[a[0]] = a[1])
        }
    return t
}
function isVisiable(e) {
    if (e) {
        var t = e.getBoundingClientRect();
        return t.top > 0 && window.innerHeight - t.top > 0 || t.top <= 0 && t.bottom >= 0
    }
}
function CopyToClipboard(e) {
    var t = !0;
    if (window.clipboardData)
        window.clipboardData.setData("Text", e);
    else {
        var i = CreateElementForExecCommand(e);
        SelectContent(i);
        try {
            window.netscape && netscape.security && netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"),
            t = document.execCommand("copy", !1, null)
        } catch (e) {
            t = !1
        }
        document.body.removeChild(i)
    }
    t ? alert("复制成功") : alert("复制失败，请手动复制该链接")
}
function filterXss(e) {
    return e && !/^\<img.*\>$/.test(e) ? e.replace(/\</g, "&lt;").replace(/\>/g, ">").replace("<phone>", "").replace("</phone>", "").replace("<copy>", "").replace("</copy>", "") : e
}
function localStorageInstance(e, t) {
    if (window.localStorage)
        if ("" == t)
            window.localStorage.removeItem(e);
        else {
            if (!t)
                return window.localStorage[e];
            window.localStorage[e] = t
        }
}
function getUuid(e, t) {
    var i, s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), n = [];
    if (t = t || s.length,
    e)
        for (i = 0; i < e; i++)
            n[i] = s[0 | Math.random() * t];
    else {
        var a;
        for (n[8] = n[13] = n[18] = n[23] = "-",
        n[14] = "4",
        i = 0; i < 36; i++)
            n[i] || (a = 0 | 16 * Math.random(),
            n[i] = s[19 == i ? 3 & a | 8 : a])
    }
    return n.join("")
}
function Prompt(e, t) {
    var i = $('<div class="kz_tishi" style="position:absolute;z-index:9999;"/>').html(e);
    0 == $(".kz_tishi").length && (i.appendTo("body").delay(1500).fadeOut(500, function() {
        $(this).remove()
    }),
    i.css({
        left: 1 == t ? ($(window).width() - i.outerWidth()) / 2 : 0,
        top: 1 == t ? ($(window).height() - i.outerHeight()) / 2 : 0,
        width: 1 == t ? "auto" : "100%",
        position: "fixed"
    }))
}
function Utemplate(e, t) {
    function i(e, t) {
        return a += t ? e.match(n) ? e + "\n" : "arr.push(" + e + ");\n" : "" != e ? "arr.push('" + e.replace(/"/g, '\\"') + "');\n" : "",
        arguments.callee
    }
    for (var s = /<%([^%>]+)?%>/g, n = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, a = "var arr = []; \n", r = 0; match = s.exec(e); )
        i(e.slice(r, match.index))(match[1], !0),
        r = match.index + match[0].length;
    return i(e.substr(r, e.length - r)),
    a += "return arr.join('')",
    new Function(a.replace(/[\r\t\n]/g, "")).apply(t)
}
function __conversion(e) {
    try {
        _T.sendEvent(e)
    } catch (e) {}
}
function __conversion(e) {
    try {
        _T.sendEvent(e)
    } catch (e) {}
}
function ProtobufMessage() {
    this.init()
}
var loadScript = function(e) {
    var t, i;
    if (e && "" != e)
        for (t = e.split(","),
        i = 0; i < t.length; i++)
            $.getScript(t[i])
}
  , DEBUG = !0;
if (void 0 === staticPath)
    var staticPath = "/v2/web/boss/";
else
    staticPath += "/web/boss/";
window.INTERFACE_URLS = {
    homeUrl: "/",
    receiveUrl: "/chatsync.json",
    sendmsgUrl: "/chat/sendmsg.json",
    requestResumeUrl: "/chat/requestResume.json",
    acceptResumeUrl: "/chat/acceptResume.json",
    rejectResumeUrl: "/chat/rejectResume.json",
    niurenInfoUrl: "/chat/geek/info",
    getUserInfoUrl: "/chat/geek.json",
    lookYouListUrl: "/chat/view.json",
    likeYouListUrl: "/chat/recommend.json",
    bossInfoUrl: "/chat/job/info",
    addRelationUrl: "/chat/addRelation.json",
    historyMsgUrl: "/chat/historymsg.json",
    userlistUrl: "/chat/userList.json",
    jobInfoUrl: "/bossweb/jobinfo",
    readMessageUrl: "/chat/readmsg.json",
    chatProtoUrl: "/v2/web/boss/js/module/chat.proto",
    requestPhoneUrl: "/chat/requestContact.json",
    acceptPhoneUrl: "/chat/acceptContact.json",
    rejectPhoneUrl: "/chat/rejectContact.json",
    saveEmailUrl: "/user/updateEmail.json",
    expressionDataUrl: "/v2/chat_v2/js/pages/expression_data.txt",
    getIsFirstTalkUrl: "/chat/firstTalk.json",
    validationEmail: "/user/getEmail.json",
    feedbackReadUrl: "/chat/receiveMsgRead.json",
    feedbackReadSyncUrl: "/chat/receiveMsgReadSync.json",
    assetUrl: "/v2/chat_v2/",
    feedbackReceiveUrl: "/chat/receiveMsg.json",
    weixin: "",
    saveWeixinUrl: "/user/updateWeixin.json",
    validationWeixin: "/chat/validWeixin.json",
    requestWeixinUrl: "/chat/requestWeixin.json",
    acceptWeixinUrl: "/chat/acceptWeixin.json",
    rejectWeixinUrl: "/chat/rejectWeixin.json",
    jobValidationUrl: "/chat/jobValidation.json",
    colleaguesListUrl: "/chat/brandUserList.json",
    colleaguesSubmitUrl: "/chat/shareGeek.json",
    getJobListUrl: "/chat/user/joblist.json",
    setTopUrl: "/chat/friendIsTop.json",
    setBelongGroupL2Url: "/chat/friend/addGroup.json",
    sendInterviewUrl: "/bossweb/interview/invite.json",
    candidateMsgUrl: "/candidate/status.json",
    chatFilterUsersUrl: "/chat/userfilterlist.json",
    chatRankUsersUrl: "/chat/userlistrank.json",
    chatAddUsersUrl: "/chat/userfriend.json",
    candidateJs: staticPath + "js/candidate.js"
},
function() {
    var e = e || {};
    e = {
        form: {
            Prompt: function(e, t) {
                var i = $('<div class="kz_tishi" style="position:absolute;z-index:9999;"/>').html(e);
                0 == $(".kz_tishi").length && (i.appendTo("body").delay(1500).fadeOut(500, function() {
                    $(this).remove()
                }),
                i.css({
                    left: 1 == t ? ($(window).width() - i.outerWidth()) / 2 : 0,
                    top: 1 == t ? ($(window).height() - i.outerHeight()) / 2 : 0,
                    width: 1 == t ? "auto" : "100%",
                    position: "fixed"
                }))
            }
        },
        pageLock: {
            show: function(t, i, s, n, a) {
                if (0 == $(window.parent.document).find(i.selector).length)
                    var r = ($(window.parent.document).width() - $(i).outerWidth()) / 2
                      , o = ($(window).height() - $(i).outerHeight()) / 2;
                else
                    var r = ($(window.parent.document).width() - $(window.parent.document).find(i.selector).outerWidth()) / 2
                      , o = ($(window).height() - $(window.parent.document).find(i.selector).outerHeight()) / 2;
                if (!$(window.parent.document).find("#lockpage").length > 0) {
                    $("<div id='lockpage'/>").css({
                        position: "absolute",
                        zIndex: t || 20,
                        left: 0,
                        top: 0,
                        width: "100%",
                        height: "100%",
                        background: "#000",
                        opacity: .8
                    }).appendTo($(window.parent.document.body))
                }
                0 == $(window.parent.document).find(i.selector).length ? ($(i).appendTo($(window.parent.document.body)),
                $(window.parent.document).find(i).css({
                    position: "fixed",
                    zIndex: t + 1,
                    left: r,
                    top: o,
                    display: "block"
                })) : $(window.parent.document).find(i.selector).css({
                    position: "fixed",
                    zIndex: t + 1,
                    left: r,
                    top: o,
                    display: "block"
                }),
                e.pageLock.hide(s, i, a),
                "function" == typeof n && n()
            },
            hide: function(e, t, i) {
                $(window.parent.document).find(e).click(function(e) {
                    void 0 === i && $(window.parent.document).find(t).appendTo("body"),
                    $(t).hide(),
                    $(window.parent.document).find("#lockpage").remove(),
                    e.preventDefault()
                })
            },
            runHide: function(e) {
                $(window.parent.document).find(e.selector).length > 0 ? setTimeout(function() {
                    $(window.parent.document).find(e).remove()
                }, 100) : $(window.parent.document).find(e).hide(),
                $(window.parent.document).find("#lockpage").remove()
            },
            runRemove: function(e) {
                $(window.parent.document).find(e).appendTo("body"),
                $(e).hide(),
                $(window.parent.document).find("#lockpage").remove()
            }
        }
    };
    var t = ($("img.uploading"),
    $("#add_photo"))
      , i = $("div.add_photo")
      , s = $("#cropWrap")
      , n = null;
    window.cropInit = function() {
        function t(e) {
            $("#cropWrap").find("#x").val(parseInt(e.x, 10)),
            $("#cropWrap").find("#y").val(parseInt(e.y, 10)),
            $("#cropWrap").find("#w").val(parseInt(e.w, 10)),
            $("#cropWrap").find("#h").val(parseInt(e.h, 10))
        }
        instanceCrop = $("#cropbox").Jcrop({
            aspectRatio: 2,
            onSelect: t,
            bgFade: !0,
            allowMove: !0,
            bgOpacity: .2,
            minSize: [2, 1],
            maxSize: [500, 500],
            setSelect: [0, 0, 200, 100]
        }),
        $("#cropWrap a.cancle").on("click", function() {
            i.removeClass("change_bg"),
            $("div.jcrop-holder").remove(),
            s.find("#cropbox").remove(),
            e.pageLock.runHide("#cropWrap"),
            "function" == typeof n && n()
        })
    }
    ,
    window.runCrop = function(i, s, a) {
        $(".crop_container").find(".jcrop-holder").remove(),
        $(".crop_container").find("#cropbox").remove(),
        $(".crop_container").append('<img src="' + i + '" id="cropbox" alt="">'),
        $("#cropWrap #saveCrop").unbind("click").bind("click", s),
        $("#deletePop").on("click", "a.confirm", function() {
            var e = $(this);
            $.ajax({
                url: e.data("url"),
                type: e.data("method"),
                data: {
                    id: orderArr[deleteIndex]
                },
                dataType: "json",
                success: function(e) {
                    e = e || {},
                    1 == e.rescode && ($("div.photo").eq(deleteIndex).remove(),
                    photoFun(),
                    $photoWrap.find("div.photo").length < 5 && t.is(":hidden") && (t.show(),
                    initWebUpload(),
                    $("div.add_photo").show()),
                    orderArr.splice(deleteIndex, 1),
                    $order.val(orderArr.join(",")),
                    hasBtn(),
                    $(window.parent.document).find("#deletePop").hide(),
                    $(window.parent.document).find("#lockpage").remove())
                }
            })
        }),
        n = a,
        e.pageLock.show(100, "#cropWrap", "#cropWrap .cancle", window.cropInit)
    }
}();
var UA = window.navigator.userAgent, isIE, isZpdesk, isWebkit;
(UA.indexOf("Edge/") > -1 || UA.indexOf("MSIE ") > -1 || UA.indexOf("Trident/") > -1) && (isIE = !0),
UA.indexOf("WebKit") > -1 && (isWebkit = !0),
UA.indexOf("ZhipinDesktop/") > -1 && (isZpdesk = !0);
var supportsCalcVh = !!window.CSS && CSS.supports("height", "calc(100vh - 0px)");
isWebkit && !supportsCalcVh && alert("您使用的浏览器太老了，会造成显示异常，请下载最新版本的浏览器");
var VersionStatus = {
    isHunter: !("undefined" == typeof _PAGE || !_PAGE.isHunter),
    preKa: "undefined" != typeof _PAGE && _PAGE.isHunter ? "hunter" : ""
};
isZpdesk && seriesLoadScripts("/v2/web/boss/js/zpdesk.js");
var PAGE_ACTIVITY = !0;
!function() {
    function e(e) {
        var i = {
            focus: !0,
            focusin: !0,
            pageshow: !0,
            blur: !1,
            focusout: !1,
            pagehide: !1
        };
        e = e || window.event,
        PAGE_ACTIVITY = e.type in i ? i[e.type] : !this[t]
    }
    var t = "hidden";
    t in document ? document.addEventListener("visibilitychange", e) : (t = "mozHidden")in document ? document.addEventListener("mozvisibilitychange", e) : (t = "webkitHidden")in document ? document.addEventListener("webkitvisibilitychange", e) : (t = "msHidden")in document ? document.addEventListener("msvisibilitychange", e) : "onfocusin"in document ? document.onfocusin = document.onfocusout = e : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = e,
    window.addEventListener("message", function(e) {
        var t = e.data;
        "wordhrRouter" == t.type && Menu.updateWordhrTopNav(t),
        "handleClickDoc" == t.type && $(document).click()
    }, !1)
}();
var isEmpty = function(e) {
    return Array.isArray(e) && 0 === e.length || Object.prototype.isPrototypeOf(e) && 0 === Object.keys(e).length
};
Date.prototype.Format = function(e) {
    var t = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    };
    /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var i in t)
        new RegExp("(" + i + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[i] : ("00" + t[i]).substr(("" + t[i]).length)));
    return e
}
,
Array.prototype.unique = function(e) {
    if (this.length < 2)
        return [this[0]] || [];
    for (var t = {}, i = [], s = 0; s < this.length; s++) {
        var n = this[s]
          , a = !!e && typeof t[n] != typeof n;
        (void 0 === t[n] || a) && (t[n] = n,
        i.push(n))
    }
    return i
}
,
Array.prototype.indexOf = function(e) {
    for (var t = 0; t < this.length; t++)
        if (this[t] == e)
            return t;
    return -1
}
,
Array.prototype.remove = function(e) {
    var t = this.indexOf(e);
    t > -1 && this.splice(t, 1)
}
,
Array.prototype.filter || (Array.prototype.filter = function(e) {
    "use strict";
    if (void 0 === this || null === this)
        throw new TypeError;
    var t = Object(this)
      , i = t.length >>> 0;
    if ("function" != typeof e)
        throw new TypeError;
    for (var s = [], n = arguments.length >= 2 ? arguments[1] : void 0, a = 0; a < i; a++)
        if (a in t) {
            var r = t[a];
            e.call(n, r, a, t) && s.push(r)
        }
    return s
}
),
Array.prototype.map || (Array.prototype.map = function(e, t) {
    var i, s, n;
    if (null == this)
        throw new TypeError(" this is null or not defined");
    var a = Object(this)
      , r = a.length >>> 0;
    if ("[object Function]" != Object.prototype.toString.call(e))
        throw new TypeError(e + " is not a function");
    for (t && (i = t),
    s = new Array(r),
    n = 0; n < r; ) {
        var o, c;
        n in a && (o = a[n],
        c = e.call(i, o, n, a),
        s[n] = c),
        n++
    }
    return s
}
),
Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
    var i;
    if (null == this)
        throw new TypeError('"this" is null or not defined');
    var s = Object(this)
      , n = s.length >>> 0;
    if (0 === n)
        return -1;
    var a = 0 | t;
    if (a >= n)
        return -1;
    for (i = Math.max(a >= 0 ? a : n - Math.abs(a), 0); i < n; ) {
        if (i in s && s[i] === e)
            return i;
        i++
    }
    return -1
}
),
Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
    value: function(e) {
        if (null == this)
            throw new TypeError('"this" is null or not defined');
        var t = Object(this)
          , i = t.length >>> 0;
        if ("function" != typeof e)
            throw new TypeError("predicate must be a function");
        for (var s = arguments[1], n = 0; n < i; ) {
            var a = t[n];
            if (e.call(s, a, n, t))
                return a;
            n++
        }
    }
}),
"function" != typeof Array.prototype.reduce && (Array.prototype.reduce = function(e, t) {
    "use strict";
    if (null === this || void 0 === this)
        throw new TypeError("Array.prototype.reduce called on null or undefined");
    if ("function" != typeof e)
        throw new TypeError(e + " is not a function");
    var i, s, n = this.length >>> 0, a = !1;
    for (1 < arguments.length && (s = t,
    a = !0),
    i = 0; n > i; ++i)
        this.hasOwnProperty(i) && (a ? s = e(s, this[i], i, this) : (s = this[i],
        a = !0));
    if (!a)
        throw new TypeError("Reduce of empty array with no initial value");
    return s
}
);
var mediator = window.mediator || new EventManger
  , cookie = {
    get: function(e) {
        var t, i = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
        return (t = document.cookie.match(i)) ? unescape(t[2]) : null
    },
    set: function(e, t, i) {
        if (i) {
            var s = new Date;
            s.setMinutes(i),
            document.cookie = e + "=" + encodeURIComponent(t) + ";expires=" + s.toGMTString()
        } else
            document.cookie = e + "=" + encodeURIComponent(t)
    },
    clearcookie: function(e, t, i) {
        cookie.get(e) && (document.cookie = e + "=" + (t ? ";path=" + t : "") + (i ? ";domain=" + i : "") + ";expires=Thu,01-Jan-1970 00:00:01 GMT")
    }
}
  , __stringify = function() {
    function e(e) {
        return /["\\\x00-\x1f]/.test(e) && (e = e.replace(/["\\\x00-\x1f]/g, function(e) {
            var t = n[e];
            return t || (t = e.charCodeAt(),
            "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16))
        })),
        '"' + e + '"'
    }
    function t(e) {
        var t, i, s, n = ["["], a = e.length;
        for (i = 0; i < a; i++)
            switch (typeof (s = e[i])) {
            case "undefined":
            case "function":
            case "unknown":
                break;
            default:
                t && n.push(","),
                n.push(__stringify(s)),
                t = 1
            }
        return n.push("]"),
        n.join("")
    }
    function i(e) {
        return e < 10 ? "0" + e : e
    }
    function s(e) {
        return '"' + e.getFullYear() + "-" + i(e.getMonth() + 1) + "-" + i(e.getDate()) + "T" + i(e.getHours()) + ":" + i(e.getMinutes()) + ":" + i(e.getSeconds()) + '"'
    }
    var n = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    };
    return function(i) {
        switch (typeof i) {
        case "undefined":
            return "undefined";
        case "number":
            return isFinite(i) ? String(i) : "null";
        case "string":
            return e(i);
        case "boolean":
            return String(i);
        default:
            if (null === i)
                return "null";
            if (i instanceof Array)
                return t(i);
            if (i instanceof Date)
                return s(i);
            var n, a, r = ["{"], o = __stringify;
            for (var c in i)
                if (Object.prototype.hasOwnProperty.call(i, c))
                    switch (typeof (a = i[c])) {
                    case "undefined":
                    case "unknown":
                    case "function":
                        break;
                    default:
                        n && r.push(","),
                        n = 1,
                        r.push(o(c) + ":" + o(a))
                    }
            return r.push("}"),
            r.join("")
        }
    }
}()
  , __throttle = function(e, t, i) {
    var s = null;
    return function() {
        (new Date).getTime();
        clearTimeout(s),
        s = setTimeout(e, t)
    }
}
  , Menu = {
    init: function() {
        Menu.sideEl = $(".side-menu"),
        Menu.chatEl = Menu.sideEl.find(".menu-chat"),
        Menu.recommendEl = Menu.sideEl.find(".menu-recommend"),
        Menu.geeksearchEl = Menu.sideEl.find(".menu-geeksearch"),
        Menu.items = Menu.sideEl.find("dl"),
        Menu.continerEls = $(".page-container"),
        Menu.chatEl = $(".chat-container"),
        Menu.toSyncEl = $(".sync-container"),
        Menu.toViewedEl = $(".viewed-container"),
        Menu.toSearchEl = $(".geeksearch-container"),
        Menu.toRsyncEl = $(".rsync-container"),
        Menu.toSetEl = $(".set-container"),
        Menu.topContainer = $("#header"),
        Menu.positionRecommendId = null,
        Menu.positionCommunicaionId = null,
        Menu.isSuportCalc = supportsCalcVh;
        var e = "wordhr.zhipin.com"
          , t = {
            dev: "wordhr-pc.weizhipin.com",
            pre: "preon-hr.wordhr.com",
            online: "wordhr.zhipin.com"
        };
        this.jumpExternalPart(),
        $(".link-help").on("click", function() {
            Menu.showHelpTip()
        }),
        $(".link-promotion").on("click", function() {
            Menu.showPopFrame($(this))
        });
        var i, s = $(".top-user .dropdown-help-and-feedback");
        if (s.on("mouseenter", function() {
            i && clearTimeout(i),
            s.addClass("dropdown-menu-open");
            try {
                _T.sendEvent("help_feedback")
            } catch (e) {}
        }).on("mouseleave", function() {
            i = setTimeout(function() {
                s.removeClass("dropdown-menu-open")
            }, 300)
        }).find(".header-pop-feedback").on("click", function() {
            Feedback.getContent()
        }),
        $(".link-vipaccount").on("click", function() {
            $(this).closest(".dropdown-wrap").find(".vip-frame").html('<iframe src="' + $(this).attr("data-url") + '" />')
        }),
        $(".vip-detail").on("click", function() {
            Menu.items.removeClass("cur"),
            Menu.gotoFramePage("/boss/item/vipprivilege.html", "/boss/item/vipprivilege.html", $(this).attr("data-op"))
        }),
        $(".interview-detail").on("click", function() {
            menuInterview.view()
        }),
        Menu.sideEl.find(".menu-resume").length) {
            var n = Menu.sideEl.find(".menu-resume a")
              , a = $(".top-resume a");
            window.top.location.host.indexOf(".weizhipin.com") > -1 && (n.attr("data-url", n.attr("data-url").replace(e, t.dev)),
            a.each(function() {
                $(this).attr("data-url", $(this).attr("data-url").replace(e, t.dev))
            })),
            "pre-www.zhipin.com" === window.top.location.host && (n.attr("data-url", n.attr("data-url").replace(e, t.pre)),
            a.each(function() {
                $(this).attr("data-url", $(this).attr("data-url").replace(e, t.pre))
            }))
        }
        $(".top-slogan").on("click", function() {
            var e = Menu.sideEl.find(".menu-prop")
              , t = e.find("a").attr("data-url");
            Menu.sideEl.find(".menu-prop").hasClass("cur") || (t.indexOf("tab=mall") < 0 && e.find("a").attr("data-url", t + "?tab=mall"),
            Menu.sideEl.find(".menu-prop a").click(),
            e.find("a").attr("data-url", t),
            __conversion("promotion_threeYears_slogan"))
        });
        var r, o = $(".top-user .dropdown-logout");
        o.on("mouseover", function() {
            r && clearTimeout(r),
            o.addClass("dropdown-menu-open")
        }).on("mouseout", function() {
            r = setTimeout(function() {
                o.removeClass("dropdown-menu-open"),
                o.find(".recruit-tip").hide()
            }, 300)
        }),
        o.find("li").on("click", function() {
            var e = $(this).find("a");
            e.hasClass("link-profile") && Menu.sideEl.find(".menu-user a").click(),
            e.hasClass("link-account") && Menu.sideEl.find(".menu-account a").click(),
            e.hasClass("link-company") && (Menu.sideEl.find("dl").removeClass("cur"),
            Menu.sideEl.find(".menu-user").addClass("cur"),
            Menu.topContainer.find(".top-company a").eq(1).click(),
            Menu.topContainer.find(".top-op").hide(),
            Menu.topContainer.find(".top-company").show()),
            e.hasClass("link-profile") && Menu.sideEl.find(".menu-user a").click(),
            e.hasClass("link-account") && Menu.sideEl.find(".menu-account a").click(),
            e.hasClass("link-msgset") && Menu.sideEl.find(".menu-msgset a").click()
        }),
        o.find(".link-apply").on("click", function(e) {
            o.find(".recruit-tip").fadeIn();
            try {
                _T.sendEvent("menu_dropdown_apply")
            } catch (e) {}
            return !1
        }),
        $("#guide-wrap").on("click", function() {
            $(this).find(".guide-box").each(function(e) {
                if (1 == e && $(this).is(":visible"))
                    try {
                        _T.sendEvent("newpx_autoclose")
                    } catch (e) {}
            }),
            $("#guide-wrap").hide()
        }),
        $(".link-pop-wordhr").on("click", function() {
            Menu.showPopWordhr($(this))
        }),
        Menu.sideEl.on("click", "a", function() {
            if (!$(this).hasClass("link-pop-wordhr")) {
                var e = Menu.sideEl.find("dl.cur");
                if (Menu.items.removeClass("cur"),
                $(this).closest("dl").addClass("cur"),
                Menu.topContainer.find(".top-op").hide(),
                e.hasClass("menu-recommend") && !$(this).closest("dl").hasClass("menu-recommend") && localStorageInstance("recommend-pos", $("#container").scrollTop()),
                e.hasClass("menu-geeksearch") && !$(this).closest("dl").hasClass("menu-geeksearch") && localStorageInstance("search-pos", Menu.toSearchEl.children("iframe.frame-container").contents().scrollTop()),
                $(this).closest("dl").hasClass("menu-chat")) {
                    Menu.continerEls.hide(),
                    Menu.chatEl.show(),
                    e.hasClass("menu-chat") ? $(document).trigger("MENU_ROUTE_CHAT", {
                        action: "flush"
                    }) : $(document).trigger("MENU_ROUTE_CHAT", {}),
                    Menu.topContainer.find(".top-chat").show(),
                    "undefined" != typeof Recommend && (Recommend.visiable = !1),
                    $("#page_key_name").val(VersionStatus.preKa + "bpc_chat");
                    try {
                        _T.sendPageView()
                    } catch (e) {}
                    Menu.setUrl("chat")
                } else
                    Menu.chatEl.hide(),
                    Menu.topContainer.find(".top-chat").hide(),
                    $(document).trigger("MENU_ROUTE_CHAT", {});
                if ($(this).closest("dl").hasClass("menu-recommend")) {
                    "undefined" == typeof Recommend && (window.Recommend = {}),
                    Recommend.visiable = !0,
                    e.hasClass("menu-recommend") ? $(document).trigger("MENU_ROUTE_RECOMMEND", {
                        action: "flush"
                    }) : $(document).trigger("MENU_ROUTE_RECOMMEND", {}),
                    0 == Menu.toSyncEl.find("#recommend-list .sec-content").length && $.get($(this).attr("data-url"), function(e) {
                        1 == e.rescode && "" != e.html && (Menu.toSyncEl.html(e.html),
                        seriesLoadScripts(INTERFACE_URLS.candidateJs))
                    }),
                    Menu.continerEls.hide(),
                    Menu.toSyncEl.show(),
                    Menu.topContainer.find(".top-recommend").show(),
                    Menu.topContainer.find(".top-recommend li").length || Menu.topContainer.find(".top-recommend .dropdown-wrap").hide(),
                    5 == Menu.toSyncEl.find(".sec-operate .op-category a.cur").data("status") && Menu.topContainer.find(".top-recommend .dropdown-wrap").hide(),
                    localStorageInstance("recommend-pos") && $("#container").scrollTop(localStorageInstance("recommend-pos")),
                    $("#page_key_name").val(VersionStatus.preKa + "bpc_geek_rcmd");
                    try {
                        _T.sendPageView()
                    } catch (e) {}
                    if ("recommend" == getQueryString("mu") && getQueryString("jobid"))
                        return;
                    Menu.setUrl("recommend")
                }
                if ($(this).closest("dl").hasClass("menu-position") || $(this).closest("dl").hasClass("menu-user") || $(this).closest("dl").hasClass("menu-account") || $(this).closest("dl").hasClass("menu-msgset") || $(this).closest("dl").hasClass("menu-prop") || $(this).closest("dl").hasClass("menu-company-prop") || $(this).closest("dl").hasClass("menu-colleague") || $(this).parent().hasClass("figure") || $(this).closest("dl").hasClass("menu-resume") ? ($("body").addClass("page-iframe"),
                Menu.toRsyncEl.html('<iframe class="frame-container" name="frameContainer" src="' + $(this).attr("data-url") + '"></iframe>'),
                Menu.continerEls.hide(),
                Menu.toRsyncEl.show(),
                Menu.setUrl($(this).attr("data-url")),
                "undefined" != typeof Recommend && (Recommend.visiable = !1),
                Menu.isSuportCalc || Menu.toRsyncEl.find(".frame-container").css("height", $(window).height() - 68 + "px")) : $("body").removeClass("page-iframe"),
                $(this).closest("dl").hasClass("menu-position") && (Menu.topContainer.find(".top-position").show(),
                $("#page_key_name").val(VersionStatus.preKa + "bpc_job_list")),
                $(this).closest("dl").hasClass("menu-geeksearch")) {
                    $("body").addClass("page-iframe"),
                    0 === Menu.toSearchEl.children("iframe.frame-container").length && Menu.toSearchEl.html('<iframe class="frame-container" name="frameContainer" src="' + $(this).attr("data-url") + '"></iframe>'),
                    e.hasClass("menu-geeksearch") ? Menu.toSearchEl.children("iframe.frame-container").attr("src", "/boss/search/geek.html") : mediator.publish("SEARCH_LIST_FLUSH"),
                    Menu.continerEls.hide(),
                    Menu.toSearchEl.show(),
                    Menu.topContainer.find(".top-geeksearch").show(),
                    "undefined" != typeof Recommend && (Recommend.visiable = !1),
                    localStorageInstance("search-pos") && $(".geeksearch-container iframe").contents().scrollTop(localStorageInstance("search-pos"));
                    try {
                        _T.sendPageView()
                    } catch (e) {}
                    if ($("#page_key_name").val(VersionStatus.preKa + "bpc_geek_search"),
                    "search" == getQueryString("mu"))
                        return;
                    Menu.setUrl("search")
                }
                $(this).closest("dl").hasClass("menu-prop") && (Menu.topContainer.find(".top-prop").show(),
                Menu.topContainer.find(".top-prop a").removeClass("cur"),
                Menu.topContainer.find(".top-prop a").eq(0).addClass("cur"),
                $("#page_key_name").val(VersionStatus.preKa + "bpc_item_mine")),
                $(this).closest("dl").hasClass("menu-user") && (Menu.topContainer.find(".top-company").show(),
                Menu.topContainer.find(".top-company a").removeClass("cur"),
                Menu.topContainer.find(".top-company a").eq(0).addClass("cur"),
                $("#page_key_name").val(VersionStatus.preKa + "bpc_boss_info_v1")),
                ($(this).closest("dl").hasClass("menu-account") || $(this).closest("dl").hasClass("menu-msgset")) && (Menu.topContainer.find(".top-account").show(),
                Menu.topContainer.find(".top-account a").removeClass("cur"),
                Menu.topContainer.find(".top-account a").eq(0).addClass("cur"),
                $("#page_key_name").val(VersionStatus.preKa + "bpc_boss_info_account")),
                $(this).closest("dl").hasClass("menu-company-prop") && $("#page_key_name").val(VersionStatus.preKa + "bpc_meritem_item"),
                $(this).closest("dl").hasClass("menu-colleague") && (Menu.topContainer.find(".top-colleague").show(),
                Menu.topContainer.find(".top-colleague a").removeClass("cur").eq(0).addClass("cur"),
                $("#page_key_name").val(VersionStatus.preKa + "bpc_colleagues")),
                $(this).closest("dl").hasClass("menu-resume") ? (Menu.topContainer.find(".top-resume").show(),
                Menu.topContainer.find(".top-resume a").removeClass("cur").eq(0).addClass("cur"),
                Menu.topContainer.find(".interview-cell").hide(),
                $("#page_key_name").val(VersionStatus.preKa + "bpc_wordhr_resume")) : Menu.topContainer.find(".interview-cell").show(),
                $(this).parent().hasClass("figure") && (Menu.topContainer.find(".top-company").show(),
                Menu.topContainer.find(".top-company a").removeClass("cur"),
                Menu.topContainer.find(".top-company a").eq(0).addClass("cur"),
                $("#page_key_name").val(VersionStatus.preKa + "bpc_boss_info_v1"))
            }
        }),
        Menu.topContainer.find(".top-menu a").on("click", function() {
            var e = $(this);
            e.parent().find("a").removeClass("cur"),
            e.addClass("cur"),
            e.attr("data-url") && ($("body").addClass("page-iframe"),
            e.attr("data-message") ? window.frames.frameContainer.postMessage({
                type: "routerLink",
                url: e.attr("data-message")
            }, "*") : Menu.toRsyncEl.html('<iframe class="frame-container" src="' + $(this).attr("data-url") + '" name="frameContainer"></iframe>'),
            Menu.continerEls.hide(),
            Menu.toRsyncEl.show(),
            Menu.setUrl($(this).attr("data-url")),
            Menu.isSuportCalc || Menu.toRsyncEl.find(".frame-container").css("height", $(window).height() - 68 + "px"))
        }),
        Menu.gotoPage(),
        "onpopstate"in window && (window.onpopstate = function() {
            Menu.gotoPage()
        }
        )
    },
    showHelpTip: function() {
        $.dialog({
            title: "",
            content: $(".hunter-help").prop("outerHTML"),
            closeText: !0,
            confirmText: "确定",
            cancelText: "取消",
            preKa: "",
            wrapClass: "dialog-hunter-welcome",
            lock: !0,
            onOpen: function(e) {},
            onConfirm: function(e) {
                e.remove()
            }
        })
    },
    toggleTopMenu: function(e) {
        $(".top-op").hide(),
        $("." + e).show()
    },
    jumpExternalPart: function() {
        var e = decodeURIComponent(location.href)
          , t = e.indexOf("mu=/hunter/index");
        e.match(/\?mu=(.+)/gim),
        -1 !== t && (Menu.gotoFramePage(RegExp.$1, RegExp.$1, $(this).attr("data-op")),
        Menu.items.removeClass("cur"),
        $(".menu-position").addClass("cur"))
    },
    gotoFramePage: function(e, t, i) {
        Menu.setUrl(e),
        $("body").addClass("page-iframe"),
        Menu.toRsyncEl.html('<iframe class="frame-container" name="frameContainer" src="' + t + '"></iframe>'),
        Menu.continerEls.hide(),
        Menu.toRsyncEl.show(),
        $(".top-inner .top-op").hide(),
        i && $(".top-inner").find("." + i).show()
    },
    gotoPage: function() {
        var e = getQueryString("mu")
          , t = !1;
        e && ("viewed" == e || e.indexOf("/bossweb/tag/2/") > -1 ? (Menu.items.removeClass("cur"),
        Menu.sideEl.find(".menu-viewed").addClass("cur"),
        Menu.sideEl.find(".menu-viewed a").trigger("click")) : "recommend" == e || e.indexOf("/bossweb/recommend") > -1 ? (Menu.items.removeClass("cur"),
        Menu.sideEl.find(".menu-recommend").addClass("cur"),
        Menu.sideEl.find(".menu-recommend a").trigger("click")) : "chat" == e || e.indexOf("/candidate/") > -1 ? (Menu.items.removeClass("cur"),
        Menu.sideEl.find(".menu-chat").addClass("cur"),
        Menu.sideEl.find(".menu-chat a").trigger("click")) : "search" == e || e.indexOf("/boss/search") > -1 ? (Menu.items.removeClass("cur"),
        Menu.sideEl.find(".menu-geeksearch").addClass("cur"),
        Menu.sideEl.find(".menu-geeksearch a").trigger("click")) : e && ((e.indexOf("/bossweb/joblist.html") > -1 || e.indexOf("/bossweb/jobedit") > -1) && (Menu.items.removeClass("cur"),
        Menu.sideEl.find(".menu-position").addClass("cur"),
        Menu.topContainer.find(".top-op").hide(),
        Menu.topContainer.find(".top-position").show(),
        t = !0),
        e.indexOf("/boss/item/mall") > -1 && (Menu.items.removeClass("cur"),
        Menu.sideEl.find(".menu-prop").addClass("cur"),
        Menu.topContainer.find(".top-op").hide(),
        Menu.topContainer.find(".top-prop").show(),
        Menu.topContainer.find(".top-prop .top-menu a").removeClass("cur").eq(0).addClass("cur"),
        t = !0),
        e.indexOf("/boss/item/myitemlist") > -1 && (Menu.items.removeClass("cur"),
        Menu.sideEl.find(".menu-prop").addClass("cur"),
        Menu.topContainer.find(".top-op").hide(),
        Menu.topContainer.find(".top-prop").show(),
        Menu.topContainer.find(".top-prop .top-menu a").removeClass("cur").eq(1).addClass("cur"),
        t = !0),
        e.indexOf("/boss/item/notice") > -1 && (Menu.items.removeClass("cur"),
        Menu.sideEl.find(".menu-prop").addClass("cur"),
        Menu.topContainer.find(".top-op").hide(),
        Menu.topContainer.find(".top-prop").show(),
        Menu.topContainer.find(".top-prop .top-menu a").removeClass("cur").eq(2).addClass("cur"),
        t = !0),
        e.indexOf("/boss/item/vipprivilege") > -1 && (Menu.items.removeClass("cur"),
        Menu.sideEl.find(".menu-prop").addClass("cur"),
        Menu.topContainer.find(".top-op").hide(),
        Menu.topContainer.find(".top-vip-detail").show(),
        t = !0),
        e.indexOf("/enterprise/") > -1 && (Menu.items.removeClass("cur"),
        Menu.sideEl.find(".menu-colleague").addClass("cur"),
        Menu.topContainer.find(".top-op").hide(),
        Menu.topContainer.find(".top-colleague").show(),
        e.indexOf("/enterprise/items") > -1 ? Menu.topContainer.find(".top-colleague .top-menu a").removeClass("cur").eq(1).addClass("cur") : e.indexOf("/enterprise/hot/job/account/") > -1 || e.indexOf("/enterprise/vip/account/") > -1 ? Menu.topContainer.find(".top-colleague .top-menu a").removeClass("cur").eq(2).addClass("cur") : Menu.topContainer.find(".top-colleague .top-menu a").removeClass("cur").eq(0).addClass("cur"),
        t = !0),
        e.indexOf("/user/company") > -1 && (Menu.items.removeClass("cur"),
        Menu.sideEl.find(".menu-user").addClass("cur"),
        Menu.topContainer.find(".top-op").hide(),
        Menu.topContainer.find(".top-company").show(),
        Menu.topContainer.find(".top-company .top-menu a").removeClass("cur").eq(1).addClass("cur"),
        t = !0),
        e.indexOf("/boss/user/") > -1 && (Menu.items.removeClass("cur"),
        Menu.sideEl.find(".menu-user").addClass("cur"),
        Menu.topContainer.find(".top-op").hide(),
        Menu.topContainer.find(".top-company").show(),
        Menu.topContainer.find(".top-company .top-menu a").removeClass("cur").eq(0).addClass("cur"),
        t = !0),
        e.indexOf("/boss/account/management") > -1 && (Menu.items.removeClass("cur"),
        Menu.sideEl.find(".menu-account").addClass("cur"),
        Menu.topContainer.find(".top-op").hide(),
        Menu.topContainer.find(".top-account").show(),
        Menu.topContainer.find(".top-account .top-menu a").removeClass("cur").eq(0).addClass("cur"),
        t = !0),
        e.indexOf("/boss/account/management/?type=1") > -1 && (Menu.items.removeClass("cur"),
        Menu.sideEl.find(".menu-msgset").addClass("cur"),
        Menu.topContainer.find(".top-op").hide(),
        Menu.topContainer.find(".top-account").show(),
        Menu.topContainer.find(".top-account .top-menu a").removeClass("cur").eq(0).addClass("cur"),
        t = !0),
        e.indexOf("zhipin/") > -1 && (Menu.items.removeClass("cur"),
        Menu.sideEl.find(".menu-resume").addClass("cur"),
        Menu.topContainer.find(".top-op").hide(),
        Menu.topContainer.find(".top-resume").show(),
        Menu.topContainer.find(".top-resume .top-menu a").removeClass("cur").eq(0).addClass("cur"),
        t = !0),
        t && ($("body").addClass("page-iframe"),
        Menu.toRsyncEl.html('<iframe class="frame-container" name="frameContainer" src="' + e + '"></iframe>'),
        Menu.continerEls.hide(),
        Menu.toRsyncEl.show(),
        Menu.isSuportCalc || Menu.toRsyncEl.find(".frame-container").css("height", $(window).height() - 68 + "px"))))
    },
    setUrl: function(e, t, i) {
        var e = e || ""
          , s = getQueryString("debug")
          , t = t || getQueryString("jobid")
          , i = i || getQueryString("status");
        e && "" != e && (e = "?mu=" + encodeURIComponent(e)),
        t && e.indexOf("mu=recommend") > -1 && (e += "&jobid=" + t),
        i && e.indexOf("mu=recommend") > -1 && (e += "&status=" + i),
        s && (e += "&debug=1"),
        "pushState"in history && (t && i ? window.history.replaceState(null, null, e) : window.history.pushState(null, null, e)),
        Menu.sideEl.trigger("urlchange", e)
    },
    showPopFrame: function(e) {
        var e = e
          , t = e.attr("data-url");
        $.dialog({
            title: "",
            content: '<iframe class="pop-frame" src="' + t + '"></iframe>',
            closeText: !0,
            confirmText: "",
            cancelText: "",
            preKa: "zd_gift_",
            wrapClass: "dialog-promotion-iframe",
            lock: !0,
            onOpen: function(e) {},
            onConfirm: function(e) {
                e.remove()
            }
        })
    },
    showPopWordhr: function(e) {
        $.dialog({
            title: "",
            content: '<div class="content-wordhr"><a href="https://www.wordhr.com" target="_blank" ka="pop_wordhr_link"><img src="https://z.zhipin.com/web/boss/resource/provision/wordhr-pop-banner.jpg" /></a></div>',
            closeText: !0,
            confirmText: "",
            cancelText: "",
            preKa: "pop_wordhr",
            wrapClass: "dialog-promotion-worhr",
            lock: !0,
            onOpen: function(e) {},
            onConfirm: function(e) {
                e.remove()
            }
        })
    },
    updateWordhrTopNav: function(e) {
        var t = e.url;
        t.indexOf("/zhipin/setting") > -1 ? Menu.topContainer.find(".top-resume a").removeClass("cur").eq(2).addClass("cur") : t.indexOf("/zhipin/interview") > -1 ? Menu.topContainer.find(".top-resume a").removeClass("cur").eq(1).addClass("cur") : Menu.topContainer.find(".top-resume a").removeClass("cur").eq(0).addClass("cur")
    }
}
  , Tab = {
    init: function() {
        var e = $(".mod-tab .data-tab");
        e.each(function(t) {
            var i = $(this).attr("event");
            i || (i = "click"),
            e.eq(t).on(i, "a", function() {
                var e = $(this).index()
                  , t = $(this).closest(".data-tab").children()
                  , i = $(this).closest(".mod-tab").children(".tab-con");
                t.removeClass("cur"),
                $(this).addClass("cur"),
                i.hide(),
                i.eq(e).show()
            })
        })
    }
}
  , PageSet = {
    markerInfo: {},
    getTipData: function(e) {
        if ($(".chat-container").is(":visible") || VersionStatus.isHunter) {
            if (PageSet.markerInfo.rescode)
                return e(PageSet.markerInfo);
            $("#guide-wrap");
            $.get("/setting/notify/marker.json?types=1,5,9,10,11,12,13,15,18", function(t) {
                1 == t.rescode && 1 == t.showGuide && t[1] && (PageSet.hasShowReplyTip = !1),
                VersionStatus.isHunter && window.top == window.self && 1 == t.rescode && t[15] && Menu.showHelpTip(),
                PageSet.markerInfo = t,
                "function" == typeof e && e(PageSet.markerInfo)
            })
        }
    },
    bindEvent: function(e, t) {
        var i = e || Menu.toSetEl;
        i.on("click", ".radio-list .link-modify", function() {
            $(this).closest(".radio").find('input[type="radio"]').prop("checked", "checked"),
            $(this).closest("dl").find(".defined-form").addClass("show-defined-form").removeClass("show-defined-tab"),
            $(this).closest("form").find('input[type="reasonType"]').val(""),
            $(this).closest("form").find(".ipt-area").text($(this).closest("form").find(".ipt-area").attr("data-text")),
            $(this).closest("dl").find(".defined-form .tip-text").text("请不要填写手机、QQ、微信等联系方式或广告信息，否则系统将封禁您的账号！"),
            $(this).closest("dl").find(".count-num").length && PageSet.countArea($(this).closest("dl").find(".ipt-area"))
        }),
        i.find(".defined-form .ipt-area").on("input", function() {
            PageSet.countArea($(this))
        }),
        i.find('.radio-list input[type="radio"]').on("change", function() {
            "0" === $(this).val() && $(this).closest("form").find(".defined-form").removeClass("show-defined-form")
        }),
        i.on("click", ".defined-form .btns .btn", function() {
            if ($(this).hasClass("btn-back"))
                $(this).closest("dl").find(".defined-form").removeClass("show-defined-form");
            else if ("" == $(this).closest("dl").find(".defined-form .ipt-area").val().replace(/(\s*$)/g, "")) {
                if (!$(this).closest(".show-defined-tab").length)
                    return $(this).closest("dl").find(".defined-form .tip-text").text("请输入内容"),
                    $(this).closest("dl").find(".defined-form .ipt-area").focus(),
                    !1;
                PageSet.postData($(this))
            } else {
                if ($(this).closest("dl").find(".defined-form .count-num .red").length)
                    return $(this).closest("dl").find(".defined-form .tip-text").text("内容不能超过200个字"),
                    $(this).closest("dl").find(".defined-form .ipt-area").focus(),
                    !1;
                $(this).closest("dl").find(".defined-form .tip-text").text("请不要填写手机、QQ、微信等联系方式或广告信息，否则系统将封禁您的账号！"),
                PageSet.postData($(this))
            }
        })
    },
    countArea: function(e) {
        var e = e
          , t = e.attr("data-range")
          , i = PageSet.getLength(e.val())
          , s = e.closest(".defined-form").find(".count-num");
        s && s.length && (t = t.split(","),
        s.html("<em" + (i > t[1] ? ' class="red"' : "") + ">" + i + "</em>/" + t[1]))
    },
    postData: function(e, t) {
        var i = e.closest("form")
          , s = i.attr("action")
          , n = i.serialize()
          , a = e.closest(".show-defined-tab").length;
        return i.find(".ipt-area").length && "" == i.find(".ipt-area").val().replace(/(\s*$)/g, "") && !a ? void i.find(".ipt-area").focus() : !e.hasClass("disabled") && (e.addClass("disabled"),
        void $.ajax({
            url: s,
            type: "POST",
            data: n,
            dataType: "JSON",
            timeout: 3e4,
            success: function(s) {
                if (s.rescode)
                    if (a)
                        "radioChange" != t && $.toast({
                            content: "保存成功",
                            type: "success"
                        }),
                        e.closest(".show-defined-tab").find("li.cur").attr("data-text", filterXss(i.find(".ipt-area").val()));
                    else {
                        if (e.closest("dl").find(".defined-form").removeClass("show-defined-form"),
                        "radio" != e.attr("type") && (i.find(".ipt-area").attr("data-text", filterXss(i.find(".ipt-area").val())),
                        e.closest("dl").find(".link-modify").closest("label").find("span").html("发送信息“" + filterXss(i.find(".ipt-area").val()) + "”")),
                        e.closest("dl").find(".sentence-list").length) {
                            var n = e.closest("dl").find("input[name=id]").val();
                            n ? e.closest("dl").find('.sentence-list a[data-id="' + n + '"]').closest("li").replaceWith(s.html) : (e.closest("dl").find(".sentence-list ul").append(s.html),
                            Menu.toSetEl.find(".set-nav li").eq(1).html("常用语（" + e.closest("dl").find(".sentence-list li").length + "条）"))
                        }
                        e.closest("dl").find(".sayhello-list").length && (i.find('input[name="templateId"]').val() ? e.closest("dl").find('input[value="' + i.find('input[name="templateId"]').val() + '"]').closest("li").find("span").text(filterXss(i.find(".ipt-area").val())) : (e.closest("dl").find(".sayhello-list ul").append(s.html),
                        e.closest("dl").find(".op-sentence").hide()))
                    }
                else
                    $.toast({
                        content: s.resmsg,
                        type: "error"
                    });
                e.removeClass("disabled")
            },
            error: function(t) {
                e.removeClass("disabled"),
                $.toast({
                    content: "保存失败，请检查网络后重试",
                    type: "error"
                })
            }
        }))
    },
    getLength: function(e) {
        var t = 0
          , e = e;
        len = e.length,
        charCode = -1;
        for (var i = 0; i < len; i++)
            charCode = e.charCodeAt(i),
            charCode >= 0 && charCode <= 128 ? t += .5 : t += 1;
        return Math.round(t)
    }
};
$(function() {
    Menu.init(),
    Tab.init()
}),
function(e, t, i) {
    "use strict";
    var s = (e(t),
    e(document),
    !1)
      , n = function(t) {
        if ("string" == typeof t)
            var t = {
                content: t
            };
        this.settings = e.extend({}, n.defaults, t),
        this.init()
    };
    n.defaults = {
        content: "提示",
        lock: !1,
        wrapClass: null,
        type: null,
        position: "top",
        parentWrap: "body",
        time: 2300
    },
    n.prototype = {
        init: function() {
            this.create(),
            this.settings.lock && this.lock()
        },
        create: function() {
            var t = ""
              , i = ""
              , s = this;
            this.settings.type && (t = '<i class="icon-toast-' + this.settings.type + '"></i>'),
            i = '<div id="toast"><div class="toast-con">' + t + this.settings.content + "</div></div>",
            e("#toast").length && e("#toast").remove(),
            this.toast = e(i).appendTo(this.settings.parentWrap),
            this.settings.wrapClass && this.toast.addClass(this.settings.wrapClass),
            this.settings.position && this.position(),
            this.time(),
            this.toast.on("click", function() {
                s.close()
            })
        },
        position: function() {
            "top" == this.settings.position && this.toast.css("top", 0),
            "center" == this.settings.position && this.toast.css("bottom", 0),
            "bottom" == this.settings.position && this.toast.css("bottom", 0)
        },
        lock: function() {
            s || (e("html,body").css("overflow", "hidden"),
            s = !0)
        },
        unLock: function() {
            this.settings.lock && s && (e("html,body").css("overflow", "visible"),
            s = !1)
        },
        close: function() {
            var e = this;
            e.toast.addClass("slideup"),
            setTimeout(function() {
                e.toast.removeClass("slideup").remove()
            }, 500),
            e.unLock()
        },
        time: function() {
            var e = this;
            this.settings.time && "loading" != this.settings.type && (this.closeTimer = setTimeout(function() {
                e.close()
            }, this.settings.time))
        }
    },
    e.toast = function(e) {
        new n(e)
    }
}(jQuery, window),
function(e, t, i) {
    "use strict";
    var s = (e(t),
    e(document),
    !-[1] && t.XMLHttpRequest,
    !1)
      , n = function(t) {
        this.settings = e.extend({}, n.defaults, t),
        this.init()
    };
    n.defaults = {
        bind: !1,
        wrapClass: "",
        content: "请稍等...",
        title: "提示",
        onCancel: null,
        onOpen: null,
        onConfirm: null,
        onClose: null,
        closeText: !0,
        confirmText: "确定",
        cancelText: "取消",
        position: "center",
        inline: !1,
        isSelecter: !1,
        element: null,
        preKa: "",
        autoTime: null,
        lock: !0,
        closeLayer: !0,
        opacityLock: !1
    },
    n.prototype = {
        init: function() {
            this.create()
        },
        create: function() {
            var t = ""
              , i = ""
              , s = ""
              , n = ""
              , a = ""
              , r = ""
              , o = "";
            this.settings.type && (t = '<i class="icon-dialog icon-dialog-' + this.settings.type + '"></i>'),
            this.settings.lock && (s = '<div class="dialog-layer"></div>',
            this.settings.opacityLock && (s = '<div class="dialog-layer dialog-opacity-layer"></div>')),
            this.settings.preKa && (n = this.settings.preKa + "_"),
            ("around" == this.settings.position || this.settings.inline) && (a = '<span class="icon-dialog-arrow"></span>'),
            this.settings.closeText && (r = '<a href="javascript:;" class="close" ka="' + n + 'dialog_close"><i class="icon-close"></i></a>'),
            (this.settings.confirmText || this.settings.cancelText) && (o = '<div class="dialog-footer"><div class="btns"></div></div>'),
            i = '<div class="dialog-wrap">' + s + '<div class="dialog-container">' + a + '<div class="dialog-title">' + t + '<h3 class="title">' + this.settings.title + "</h3>" + r + '</div><div class="dialog-con">' + this.settings.content + "</div>" + o + "</div></div>",
            e(".dialog-wrap").length && !this.settings.inline && e(".dialog-wrap").remove(),
            this.settings.inline && this.settings.element ? this.dialog = e(i).appendTo(e(this.settings.element).parent()) : this.dialog = e(i).appendTo("body"),
            (this.settings.onConfirm || this.settings.confirmText) && this.onConfirm(),
            (this.settings.onCancel && !1 !== this.settings.cancelText || this.settings.cancelText) && this.onCancel(),
            this.settings.wrapClass && this.dialog.addClass(this.settings.wrapClass),
            this.settings.type && this.dialog.addClass("dialog-icons-default"),
            this.settings.position && this.position(),
            this.bindEvent(),
            e("body").addClass("dialog-open"),
            e.isFunction(this.settings.onOpen) && (this.settings.bind ? this.settings.onOpen.apply(this, this.dialog) : this.settings.onOpen(this.dialog)),
            this.settings.lock && this.lock(),
            this.autoInter && clearInterval(this.autoInter),
            e.isNumeric(this.settings.autoTime) && this.autoCloseTimer()
        },
        onConfirm: function() {
            var t = this
              , i = this.dialog.find(".dialog-footer .btns");
            e("<span>", {
                ClASS: "btn btn-sure",
                text: t.settings.confirmText,
                ka: (t.settings.preKa ? t.settings.preKa + "_" : "") + "dialog_confirm",
                click: function() {
                    e.isFunction(t.settings.onConfirm) ? t.settings.bind ? t.settings.onConfirm.apply(t, t.dialog) : t.settings.onConfirm(t.dialog) : t.close("confirm")
                }
            }).prependTo(i)
        },
        onCancel: function() {
            var t = this
              , i = this.dialog.find(".dialog-footer .btns");
            e("<span>", {
                ClASS: "btn btn-outline btn-cancel",
                text: t.settings.cancelText,
                ka: (t.settings.preKa ? t.settings.preKa + "_" : "") + "dialog_cancel",
                click: function() {
                    e.isFunction(t.settings.onCancel) ? t.settings.bind ? t.settings.onCancel.apply(t, t.dialog) : t.settings.onCancel(t.dialog) : t.close("cancel")
                }
            }).prependTo(i)
        },
        size: function() {
            var e = this.dialog.find(".dialog-con");
            this.dialog.find(".dialog-container");
            e.css({
                width: this.settings.width,
                height: this.settings.height
            })
        },
        position: function() {
            if (this.settings.element) {
                var i = this
                  , s = i.settings.element
                  , n = i.dialog.find(".dialog-container").outerWidth()
                  , a = e(s).offset()
                  , r = a.left + s.width() / 2;
                r < n && (r = n / 2),
                i.settings.inline || "around" != i.settings.position || i.dialog.css({
                    left: r + "px",
                    top: a.top + "px"
                }),
                i.settings.inline && (i.dialog.get(0).getBoundingClientRect().top > 330 && t.innerHeight - i.dialog.get(0).getBoundingClientRect().top < 280 && i.dialog.addClass("dialog-up-default"),
                i.settings.isSelecter && e(document).on("click", function(t) {
                    t.target == s.get(0) || t.target.parentNode == s.get(0) || e(t.target).closest(".dialog-selecter-default").length || (i.dialog.closest(".dropdown-wrap").removeClass("dropdown-menu-open"),
                    i.close())
                }))
            }
        },
        lock: function() {
            if (!s) {
                var e = this;
                e.dialog.find(".dialog-container");
                this.settings.closeLayer && e.dialog.find(".dialog-layer").on("click", function() {
                    e.close()
                })
            }
        },
        unLock: function() {
            this.settings.lock && s && (e("html,body").css("overflow", "visible"),
            s = !1)
        },
        close: function(t) {
            e.isFunction(this.settings.onClose) && this.settings.onClose(this.dialog, t || ""),
            this.dialog.remove(),
            this.unLock(),
            this.autoInter && clearInterval(this.autoInter),
            e("body").removeClass("dialog-open")
        },
        hide: function(t) {
            e.isFunction(this.settings.onClose) && this.settings.onClose(this.dialog, t || ""),
            this.dialog.hide(),
            this.unLock(),
            e("body").removeClass("dialog-open")
        },
        autoCloseTimer: function() {
            var e = this
              , t = e.dialog.find(".btn-sure")
              , i = e.settings.autoTime
              , s = t.text();
            i && (e.autoInter && clearInterval(e.autoInter),
            e.autoInter = setInterval(function() {
                i <= 1 ? (clearInterval(e.autoInter),
                e.close("timer")) : (i--,
                t.text(s + "(" + i + "s)"))
            }, 1e3))
        },
        bindEvent: function() {
            var i = this;
            this.dialog.find(".close").on("click", function() {
                i.close("")
            }),
            e(t).on("resize.dialog", function() {
                i.settings.onResize && i.settings.onResize(i.dialog)
            })
        }
    },
    e.dialog = function(e) {
        return new n(e)
    }
}(jQuery, window);
var DropDown = {
    init: function(e) {
        var e = e || $("body")
          , t = e.find(".dropdown-wrap").not(".sync-container .dropdown-wrap");
        t.each(function() {
            var e = $(this)
              , i = e.attr("role-type")
              , s = e.find(".dropdown-select,.dropdown-label")
              , n = s.find("input[readonly]")
              , a = s.find('input[type="hidden"]')
              , r = "false" != e.attr("data-fill");
            i && "customize-event" == i || (s.on("click", function(i) {
                e.hasClass("dropdown-disabled") || ($(i.target).closest(".dropdown-menu-open").length ? e.removeClass("dropdown-menu-open") : (t.not(this.parent).removeClass("dropdown-menu-open"),
                e.toggleClass("dropdown-menu-open")))
            }),
            e.on("click", "li", function() {
                var t = a.val();
                if (!$(this).hasClass("disabled")) {
                    if ($(this).hasClass("tip-blank"))
                        return void e.removeClass("dropdown-menu-open");
                    n.length && t != $(this).attr("data-val") && !$(this).hasClass("no-set") && (r && n.val($(this).text()),
                    n.addClass("sel-active"),
                    e.find(".tip-text").remove(),
                    $(this).parent().find("li").removeClass("cur"),
                    $(this).addClass("cur"),
                    $(this).attr("data-val") && a.val($(this).attr("data-val")),
                    e.trigger("dropdown.selected")),
                    e.removeClass("dropdown-menu-open")
                }
            }))
        }),
        $(document).on("click", function(e) {
            $(e.target).parents(".dropdown-wrap").length || (t.removeClass("dropdown-menu-open"),
            t.trigger("dropdown.close")),
            e.stopPropagation()
        }),
        $(document).on("click", ".js-report", function(e) {
            t.removeClass("dropdown-menu-open"),
            t.trigger("dropdown.close"),
            e.stopPropagation()
        })
    }
};
if ($(function() {
    DropDown.init()
}),
"undefined" == typeof jQuery)
    throw new Error("jquery-confirm requires jQuery");
var jconfirm, Jconfirm;
!function(e) {
    "use strict";
    e.fn.confirm = function(t, i) {
        return void 0 === t && (t = {}),
        "string" == typeof t && (t = {
            content: t,
            title: i || !1
        }),
        e(this).each(function() {
            var i = e(this);
            i.on("click", function(s) {
                s.preventDefault();
                var n = e.extend({}, t);
                i.attr("data-title") && (n.title = i.attr("data-title")),
                i.attr("data-content") && (n.content = i.attr("data-content")),
                n.$target = i,
                i.attr("href") && !t.confirm && (n.confirm = function() {
                    location.href = i.attr("href")
                }
                ),
                e.confirm(n)
            })
        }),
        e(this)
    }
    ,
    e.confirm = function(e, t) {
        return void 0 === e && (e = {}),
        "string" == typeof e && (e = {
            content: e,
            title: t || !1
        }),
        jconfirm(e)
    }
    ,
    e.alert = function(e, t) {
        return void 0 === e && (e = {}),
        "string" == typeof e && (e = {
            content: e,
            title: t || !1
        }),
        e.cancelButton = !1,
        jconfirm(e)
    }
    ,
    jconfirm = function(t) {
        void 0 === t && (t = {}),
        jconfirm.defaults && e.extend(jconfirm.pluginDefaults, jconfirm.defaults);
        var t = e.extend({}, jconfirm.pluginDefaults, t);
        return new Jconfirm(t)
    }
    ,
    Jconfirm = function(t) {
        e.extend(this, t),
        this._init()
    }
    ,
    Jconfirm.prototype = {
        _init: function() {
            var e = this;
            this._rand = Math.round(99999 * Math.random()),
            this._buildHTML(),
            this._bindEvents(),
            setTimeout(function() {
                e.open(),
                e._watchContent()
            }, 0)
        },
        _buildHTML: function() {
            var t = this;
            this.animation = "anim-" + this.animation.toLowerCase(),
            this.closeAnimation = "anim-" + this.closeAnimation.toLowerCase(),
            this.theme = "jconfirm-" + this.theme.toLowerCase(),
            "anim-none" == this.animation && (this.animationSpeed = 0),
            this._lastFocused = e("body").find(":focus"),
            this.$el = e(this.template).appendTo(this.container).addClass(this.theme),
            this.$el.find(".jconfirm-box-container").addClass(this.columnClass),
            this.$el.find(".jconfirm-bg").css(this._getCSS(this.animationSpeed, 1)),
            this.$el.find(".jconfirm-bg").css("opacity", this.opacity),
            this.$b = this.$el.find(".jconfirm-box").css(this._getCSS(this.animationSpeed, this.animationBounce)).addClass(this.animation),
            this.$body = this.$b,
            this.rtl && this.$el.addClass("rtl"),
            this._contentReady = e.Deferred(),
            this._modalReady = e.Deferred(),
            this.$title = this.$el.find(".title"),
            this.contentDiv = this.$el.find("div.content"),
            this.$content = this.contentDiv,
            this.$contentPane = this.$el.find(".content-pane"),
            this.$icon = this.$el.find(".icon-c"),
            this.$closeIcon = this.$el.find(".closeIcon"),
            this.$contentPane.css(this._getCSS(this.animationSpeed, 1)),
            this.setTitle(),
            this.setIcon(),
            this._setButtons(),
            this.closeIconClass && this.$closeIcon.html('<i class="' + this.closeIconClass + '"></i>'),
            t._contentHash = this._hash(t.$content.html()),
            e.when(this._contentReady, this._modalReady).then(function() {
                t.setContent(),
                t.setTitle(),
                t.setIcon()
            }),
            this._getContent(),
            this._imagesLoaded(),
            this.autoClose && this._startCountDown()
        },
        _unwatchContent: function() {
            clearInterval(this._timer)
        },
        _hash: function() {
            if ("function" == typeof btoa)
                return btoa(encodeURIComponent(this.$content.html()))
        },
        _watchContent: function() {
            var e = this;
            this._timer = setInterval(function() {
                var t = e._hash(e.$content.html());
                e._contentHash != t && (e._contentHash = t,
                e.setDialogCenter(),
                e._imagesLoaded())
            }, this.watchInterval)
        },
        _bindEvents: function() {
            var t = this
              , i = !1;
            this.$el.find(".jconfirm-scrollpane").click(function(e) {
                i || t.backgroundDismiss && (t.cancel(),
                t.close()),
                i = !1
            }),
            this.$el.find(".jconfirm-box").click(function(e) {
                i = !0
            }),
            this.$confirmButton && this.$confirmButton.click(function(e) {
                e.preventDefault();
                var i = t.confirm(t.$b);
                t._stopCountDown(),
                t.onAction("confirm"),
                (void 0 === i || i) && t.close()
            }),
            this.$cancelButton && this.$cancelButton.click(function(e) {
                e.preventDefault();
                var i = t.cancel(t.$b);
                t._stopCountDown(),
                t.onAction("cancel"),
                (void 0 === i || i) && t.close()
            }),
            this.$closeButton && this.$closeButton.click(function(e) {
                e.preventDefault(),
                t._stopCountDown(),
                t.cancel(),
                t.onAction("close"),
                t.close()
            }),
            this.keyboardEnabled && setTimeout(function() {
                e(window).on("keyup." + this._rand, function(e) {
                    t.reactOnKey(e)
                })
            }, 500),
            e(window).on("resize." + this._rand, function() {
                t.setDialogCenter(!0)
            })
        },
        _getCSS: function(e, t) {
            return {
                "-webkit-transition-duration": e / 1e3 + "s",
                "transition-duration": e / 1e3 + "s",
                "-webkit-transition-timing-function": "cubic-bezier(.36,1.1,.2, " + t + ")",
                "transition-timing-function": "cubic-bezier(.36,1.1,.2, " + t + ")"
            }
        },
        _imagesLoaded: function() {
            var t = this;
            e.each(this.$content.find("img:not(.loaded)"), function(i, s) {
                var n = setInterval(function() {
                    "0px" !== e(s).css("height") && (e(s).addClass("loaded"),
                    t.setDialogCenter(),
                    clearInterval(n))
                }, 40)
            })
        },
        _setButtons: function() {
            this.$btnc = this.$el.find(".buttons"),
            this.confirmButton && "" !== e.trim(this.confirmButton) && (this.$confirmButton = e('<button type="button" class="btn">' + this.confirmButton + "</button>").appendTo(this.$btnc).addClass(this.confirmButtonClass)),
            this.cancelButton && "" !== e.trim(this.cancelButton) && (this.buttonsReverse ? this.$cancelButton = e('<button type="button" class="btn">' + this.cancelButton + "</button>").prependTo(this.$btnc).addClass(this.cancelButtonClass) : this.$cancelButton = e('<button type="button" class="btn">' + this.cancelButton + "</button>").appendTo(this.$btnc).addClass(this.cancelButtonClass)),
            this.buttonOther && "" !== e.trim(this.buttonOther) && e(this.buttonOther).prependTo(this.$btnc),
            this.confirmButton || this.cancelButton || this.$btnc.hide(),
            this.confirmButton || this.cancelButton || null !== this.closeIcon || (this.$closeButton = this.$b.find(".closeIcon").show()),
            !0 === this.closeIcon && (this.$closeButton = this.$b.find(".closeIcon").show())
        },
        setTitle: function(e) {
            this.title = void 0 !== e ? e : this.title,
            this.$title.html(this.title || "")
        },
        setIcon: function(e) {
            this.title = "undefined" != typeof string ? e : this.title,
            this.$icon.html(this.icon ? '<i class="' + this.icon + '"></i>' : "")
        },
        setContent: function(e) {
            this.content = void 0 === e ? this.content : e,
            "" == this.content ? (this.$content.html(this.content),
            this.$contentPane.hide()) : (this.$content.html(this.content),
            this.$contentPane.show()),
            this.$content.hasClass("loading") && (this.$content.removeClass("loading"),
            this.$btnc.find("button").prop("disabled", !1))
        },
        _getContent: function(t) {
            var i = this;
            if (t = t || this.content,
            this._isAjax = !1,
            this.content)
                if ("string" == typeof this.content)
                    if ("url:" === this.content.substr(0, 4).toLowerCase()) {
                        this._isAjax = !0,
                        this.$content.addClass("loading"),
                        this.$btnc.find("button").prop("disabled", !0);
                        var s = this.content.substring(4, this.content.length);
                        e.get(s).done(function(e) {
                            i.content = e,
                            i._contentReady.resolve()
                        }).always(function(e, t, s) {
                            "function" == typeof i.contentLoaded && i.contentLoaded(e, t, s)
                        })
                    } else
                        this.setContent(this.content),
                        this._contentReady.reject();
                else if ("function" == typeof this.content) {
                    this.$content.addClass("loading"),
                    this.$btnc.find("button").attr("disabled", "disabled");
                    var n = this.content(this);
                    "object" != typeof n ? console.error("The content function must return jquery promise.") : "function" != typeof n.always ? console.error("The object returned is not a jquery promise.") : (this._isAjax = !0,
                    n.always(function(e, t) {
                        i._contentReady.resolve()
                    }))
                } else
                    console.error("Invalid option for property content, passed: " + typeof this.content);
            else
                this.content = "",
                this.setContent(this.content),
                this._contentReady.reject();
            this.setDialogCenter()
        },
        _stopCountDown: function() {
            clearInterval(this.timerInterval),
            this.$cd && this.$cd.remove()
        },
        _startCountDown: function() {
            var t = this.autoClose.split("|");
            if (/cancel/.test(t[0]) && "alert" === this.type)
                return !1;
            if (/confirm|cancel/.test(t[0])) {
                this.$cd = e('<span class="countdown"></span>').appendTo(this["$" + t[0] + "Button"]);
                var i = this;
                i.$cd.parent().click();
                var s = t[1] / 1e3;
                this.timerInterval = setInterval(function() {
                    i.$cd.html(" (" + (s -= 1) + ")"),
                    0 === s && (i.$cd.html(""),
                    i.$cd.parent().trigger("click"),
                    clearInterval(i.timerInterval))
                }, 1e3)
            } else
                console.error("Invalid option " + t[0] + ", must be confirm/cancel")
        },
        reactOnKey: function(t) {
            var i = e(".jconfirm");
            if (i.eq(i.length - 1)[0] !== this.$el[0])
                return !1;
            var s = t.which;
            if (this.contentDiv.find(":input").is(":focus") && /13|32/.test(s))
                return !1;
            -1 !== e.inArray(s, this.cancelKeys) && (this.$cancelButton ? this.$cancelButton.click() : this.close()),
            -1 !== e.inArray(s, this.confirmKeys) && this.$confirmButton && this.$confirmButton.click()
        },
        setDialogCenter: function() {
            if ("none" == this.$contentPane.css("display"))
                var t = 0
                  , i = 0;
            else {
                var t = this.$content.outerHeight()
                  , i = this.$contentPane.height();
                0 == i && (i = t)
            }
            var s = this.$content.outerWidth();
            this.$content.css({
                clip: "rect(0px " + (100 + s) + "px " + t + "px -100px)"
            }),
            this.$contentPane.css({
                height: t
            });
            var n = e(window).height()
              , a = this.$b.outerHeight() - i + t
              , r = (n - a) / 2;
            if (a > n - 100) {
                var o = {
                    "margin-top": 50,
                    "margin-bottom": 50
                };
                e("body").addClass("jconfirm-noscroll")
            } else {
                var o = {
                    "margin-top": r
                };
                e("body").removeClass("jconfirm-noscroll")
            }
            this.$b.css(o)
        },
        close: function() {
            var t = this;
            if (this.isClosed())
                return !1;
            "function" == typeof this.onClose && this.onClose(),
            this._unwatchContent(),
            t._lastFocused.focus(),
            e(window).unbind("resize." + this._rand),
            this.keyboardEnabled && e(window).unbind("keyup." + this._rand),
            t.$el.find(".jconfirm-bg").removeClass("seen"),
            e("body").removeClass("jconfirm-noscroll"),
            this.$b.addClass(this.closeAnimation);
            var i = "anim-none" == this.closeAnimation ? 0 : this.animationSpeed;
            return setTimeout(function() {
                t.$el.remove()
            }, 25 * i / 100),
            jconfirm.record.closed += 1,
            jconfirm.record.currentlyOpen -= 1,
            !0
        },
        open: function() {
            var e = this;
            if (this.isClosed())
                return !1;
            e.$el.find(".jconfirm-bg").addClass("seen"),
            this.$b.removeClass(this.animation),
            this.$b.find("input[autofocus]:visible:first").focus(),
            jconfirm.record.opened += 1,
            jconfirm.record.currentlyOpen += 1,
            "function" == typeof this.onOpen && this.onOpen();
            var t = "jconfirm-box" + this._rand;
            return this.$b.attr("aria-labelledby", t).attr("tabindex", -1).focus(),
            this.$title ? this.$title.attr("id", t) : this.$content && this.$content.attr("id", t),
            setTimeout(function() {
                e.$b.css({
                    "transition-property": e.$b.css("transition-property") + ", margin"
                }),
                e._modalReady.resolve()
            }, this.animationSpeed),
            !0
        },
        isClosed: function() {
            return "" === this.$el.css("display")
        }
    },
    jconfirm.pluginDefaults = {
        template: '<div class="jconfirm"><div class="jconfirm-bg"></div><div class="jconfirm-scrollpane"><div class="container"><div class="row"><div class="jconfirm-box-container"><div class="jconfirm-box" role="dialog" aria-labelledby="labelled" tabindex="-1"><div class="closeIcon">&times;</div><div class="title-c"><span class="icon-c"></span><span class="title"></span></div><div class="content-pane"><div class="content"></div></div><div class="buttons"></div><div class="jquery-clear"></div></div></div></div></div></div></div>',
        title: "提示",
        content: "确定吗",
        contentLoaded: function() {},
        icon: "",
        opacity: null,
        confirmButton: "确定",
        cancelButton: "取消",
        confirmButtonClass: "btn",
        cancelButtonClass: "btn btn-slight",
        buttonsReverse: !1,
        theme: "white",
        animation: "scale",
        closeAnimation: "none",
        animationSpeed: 500,
        animationBounce: 1.2,
        keyboardEnabled: !1,
        rtl: !1,
        confirmKeys: [13],
        cancelKeys: [27],
        container: "body",
        confirm: function() {},
        cancel: function() {},
        backgroundDismiss: !0,
        autoClose: !1,
        closeIcon: null,
        closeIconClass: !1,
        watchInterval: 100,
        columnClass: "pop-container",
        onOpen: function() {},
        onClose: function() {},
        onAction: function() {}
    },
    jconfirm.record = {
        opened: 0,
        closed: 0,
        currentlyOpen: 0
    }
}(jQuery),
jQuery && function(e) {
    function t(t, n) {
        var a = t ? e(this) : n
          , r = e(a.attr("data-jq-dropdown"))
          , o = a.hasClass("jq-dropdown-open");
        if (t) {
            if (e(t.target).hasClass("jq-dropdown-ignore"))
                return;
            t.preventDefault(),
            t.stopPropagation()
        } else if (a !== n.target && e(n.target).hasClass("jq-dropdown-ignore"))
            return;
        if (i(),
        !o && !a.hasClass("jq-dropdown-disabled")) {
            a.addClass("jq-dropdown-open"),
            r.data("jq-dropdown-trigger", a).show(),
            s();
            var c, l, d = a.find('input[type="text"]'), h = a.find("[name]");
            d.focus(),
            r.unbind("click").on("click", "[data-jq-value]", function() {
                l = e(this).attr("data-jq-value"),
                c = e(this).text(),
                d.val(c),
                h.val(l),
                r.find("[data-jq-value]").removeClass("current"),
                e(this).addClass("current"),
                "" != l && 0 != l || d.val("")
            }),
            r.trigger("show", {
                jqDropdown: r,
                trigger: a
            })
        }
    }
    function i(t) {
        var i = t ? e(t.target).parents().addBack() : null;
        if (i && i.is(".jq-dropdown")) {
            if (!i.is(".jq-dropdown-menu"))
                return;
            if (!i.is("A"))
                return
        }
        e(document).find(".jq-dropdown:visible").each(function() {
            var t = e(this);
            t.hide().removeData("jq-dropdown-trigger").trigger("hide", {
                jqDropdown: t
            })
        }),
        e(document).find(".jq-dropdown-open").removeClass("jq-dropdown-open")
    }
    function s() {
        var t = e(".jq-dropdown:visible").eq(0)
          , i = t.data("jq-dropdown-trigger")
          , s = i ? parseInt(i.attr("data-horizontal-offset") || 0, 10) : null
          , n = i ? parseInt(i.attr("data-vertical-offset") || 0, 10) : null;
        0 !== t.length && i && (t.hasClass("jq-dropdown-relative") ? t.css({
            left: t.hasClass("jq-dropdown-anchor-right") ? i.position().left - (t.outerWidth(!0) - i.outerWidth(!0)) - parseInt(i.css("margin-right"), 10) + s : i.position().left + parseInt(i.css("margin-left"), 10) + s,
            top: i.position().top + i.outerHeight(!0) - parseInt(i.css("margin-top"), 10) + n
        }) : t.css({
            left: t.hasClass("jq-dropdown-anchor-right") ? i.offset().left - (t.outerWidth() - i.outerWidth()) + s : i.offset().left + s,
            top: i.offset().top + i.outerHeight() + n
        }))
    }
    e.extend(e.fn, {
        jqDropdown: function(s, n) {
            switch (s) {
            case "show":
                return t(null, e(this)),
                e(this);
            case "hide":
                return i(),
                e(this);
            case "attach":
                return e(this).attr("data-jq-dropdown", n);
            case "detach":
                return i(),
                e(this).removeAttr("data-jq-dropdown");
            case "disable":
                return e(this).addClass("jq-dropdown-disabled");
            case "enable":
                return i(),
                e(this).removeClass("jq-dropdown-disabled")
            }
        }
    }),
    e(document).on("click.jq-dropdown", "[data-jq-dropdown]", t),
    e(document).on("click.jq-dropdown", i),
    e(window).on("resize", s)
}(jQuery),
function(e) {
    function t() {
        return new Date(Date.UTC.apply(Date, arguments))
    }
    var i = function(t, i) {
        var a = this;
        this.element = e(t),
        this.container = i.container || "body",
        this.inDate = i.inDate || [],
        this.language = i.language || this.element.data("date-language") || "en",
        this.language = this.language in s ? this.language : "en",
        this.isRTL = s[this.language].rtl || !1,
        this.formatType = i.formatType || this.element.data("format-type") || "standard",
        this.format = n.parseFormat(i.format || this.element.data("date-format") || s[this.language].format || n.getDefaultFormat(this.formatType, "input"), this.formatType),
        this.isInline = !1,
        this.isVisible = !1,
        this.isInput = this.element.is("input"),
        this.bootcssVer = this.isInput ? this.element.is(".form-control") ? 3 : 2 : this.bootcssVer = this.element.is(".input-group") ? 3 : 2,
        this.component = !!this.element.is(".date") && (3 == this.bootcssVer ? this.element.find(".input-group-addon .glyphicon-th, .input-group-addon .glyphicon-time, .input-group-addon .glyphicon-calendar").parent() : this.element.find(".add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar").parent()),
        this.componentReset = !!this.element.is(".date") && (3 == this.bootcssVer ? this.element.find(".input-group-addon .glyphicon-remove").parent() : this.element.find(".add-on .icon-remove").parent()),
        this.hasInput = this.component && this.element.find("input").length,
        this.component && 0 === this.component.length && (this.component = !1),
        this.linkField = i.linkField || this.element.data("link-field") || !1,
        this.linkFormat = n.parseFormat(i.linkFormat || this.element.data("link-format") || n.getDefaultFormat(this.formatType, "link"), this.formatType),
        this.minuteStep = i.minuteStep || this.element.data("minute-step") || 5,
        this.pickerPosition = i.pickerPosition || this.element.data("picker-position") || "bottom-right",
        this.showMeridian = i.showMeridian || this.element.data("show-meridian") || !1,
        this.initialDate = i.initialDate || new Date,
        this.minLimitYear = i.minLimitYear || !1,
        this._attachEvents(),
        this.formatViewType = "datetime",
        "formatViewType"in i ? this.formatViewType = i.formatViewType : "formatViewType"in this.element.data() && (this.formatViewType = this.element.data("formatViewType")),
        this.minView = 0,
        "minView"in i ? this.minView = i.minView : "minView"in this.element.data() && (this.minView = this.element.data("min-view")),
        this.minView = n.convertViewMode(this.minView),
        this.maxView = n.modes.length - 1,
        "maxView"in i ? this.maxView = i.maxView : "maxView"in this.element.data() && (this.maxView = this.element.data("max-view")),
        this.maxView = n.convertViewMode(this.maxView),
        this.wheelViewModeNavigation = !1,
        "wheelViewModeNavigation"in i ? this.wheelViewModeNavigation = i.wheelViewModeNavigation : "wheelViewModeNavigation"in this.element.data() && (this.wheelViewModeNavigation = this.element.data("view-mode-wheel-navigation")),
        this.wheelViewModeNavigationInverseDirection = !1,
        "wheelViewModeNavigationInverseDirection"in i ? this.wheelViewModeNavigationInverseDirection = i.wheelViewModeNavigationInverseDirection : "wheelViewModeNavigationInverseDirection"in this.element.data() && (this.wheelViewModeNavigationInverseDirection = this.element.data("view-mode-wheel-navigation-inverse-dir")),
        this.wheelViewModeNavigationDelay = 100,
        "wheelViewModeNavigationDelay"in i ? this.wheelViewModeNavigationDelay = i.wheelViewModeNavigationDelay : "wheelViewModeNavigationDelay"in this.element.data() && (this.wheelViewModeNavigationDelay = this.element.data("view-mode-wheel-navigation-delay")),
        this.startViewMode = 2,
        "startView"in i ? this.startViewMode = i.startView : "startView"in this.element.data() && (this.startViewMode = this.element.data("start-view")),
        this.startViewMode = n.convertViewMode(this.startViewMode),
        this.viewMode = this.startViewMode,
        this.viewSelect = this.minView,
        "viewSelect"in i ? this.viewSelect = i.viewSelect : "viewSelect"in this.element.data() && (this.viewSelect = this.element.data("view-select")),
        this.viewSelect = n.convertViewMode(this.viewSelect),
        this.forceParse = !0,
        "forceParse"in i ? this.forceParse = i.forceParse : "dateForceParse"in this.element.data() && (this.forceParse = this.element.data("date-force-parse")),
        this.picker = e(3 == this.bootcssVer ? n.templateV3 : n.template).appendTo(this.isInline ? this.element : this.container).on({
            click: e.proxy(this.click, this),
            mousedown: e.proxy(this.mousedown, this)
        }),
        this.wheelViewModeNavigation && (e.fn.mousewheel ? this.picker.on({
            mousewheel: e.proxy(this.mousewheel, this)
        }) : console.log("Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option")),
        this.isInline ? this.picker.addClass("datetimepicker-inline") : this.picker.addClass("datetimepicker-dropdown-" + this.pickerPosition),
        this.isRTL && (this.picker.addClass("datetimepicker-rtl"),
        3 == this.bootcssVer ? this.picker.find(".prev span, .next span").toggleClass("glyphicon-arrow-left glyphicon-arrow-right") : this.picker.find(".prev i, .next i").toggleClass("icon-arrow-left icon-arrow-right")),
        this.minLimitYear && this.picker.addClass("date-showminyear"),
        e(document).on("click", function(t) {
            0 === e(t.target).closest(".datetimepicker").length && a.hide()
        }),
        this.autoclose = !1,
        "autoclose"in i ? this.autoclose = i.autoclose : "dateAutoclose"in this.element.data() && (this.autoclose = this.element.data("date-autoclose")),
        this.keyboardNavigation = !0,
        "keyboardNavigation"in i ? this.keyboardNavigation = i.keyboardNavigation : "dateKeyboardNavigation"in this.element.data() && (this.keyboardNavigation = this.element.data("date-keyboard-navigation")),
        this.todayBtn = i.todayBtn || this.element.data("date-today-btn") || !1,
        this.todayHighlight = i.todayHighlight || this.element.data("date-today-highlight") || !1,
        this.weekStart = (i.weekStart || this.element.data("date-weekstart") || s[this.language].weekStart || 0) % 7,
        this.weekEnd = (this.weekStart + 6) % 7,
        this.startDate = -1 / 0,
        this.endDate = 1 / 0,
        this.daysOfWeekDisabled = [],
        this.setStartDate(i.startDate || this.element.data("date-startdate")),
        this.setEndDate(i.endDate || this.element.data("date-enddate")),
        this.setDaysOfWeekDisabled(i.daysOfWeekDisabled || this.element.data("date-days-of-week-disabled")),
        this.fillDow(),
        this.fillMonths(),
        this.update(),
        this.showMode(),
        this.timer = null,
        this.isInline && this.show()
    };
    i.prototype = {
        constructor: i,
        _events: [],
        _attachEvents: function() {
            this._detachEvents(),
            this.isInput ? this._events = [[this.element, {
                click: e.proxy(this.show, this),
                keyup: e.proxy(this.update, this),
                keydown: e.proxy(this.keydown, this)
            }]] : this.component && this.hasInput ? (this._events = [[this.element.find("input"), {
                click: e.proxy(this.show, this),
                keyup: e.proxy(this.update, this),
                keydown: e.proxy(this.keydown, this)
            }], [this.component, {
                click: e.proxy(this.show, this)
            }]],
            this.componentReset && this._events.push([this.componentReset, {
                click: e.proxy(this.reset, this)
            }])) : this.element.is("div") ? this.isInline = !0 : this._events = [[this.element, {
                click: e.proxy(this.show, this)
            }]];
            for (var t, i, s = 0; s < this._events.length; s++)
                t = this._events[s][0],
                i = this._events[s][1],
                t.on(i)
        },
        _detachEvents: function() {
            for (var e, t, i = 0; i < this._events.length; i++)
                e = this._events[i][0],
                t = this._events[i][1],
                e.off(t);
            this._events = []
        },
        show: function(t) {
            if (this.picker.is(":visible"))
                return void this.picker.hide();
            e(".datetimepicker").hide(),
            e(".dropdown-select-open").removeClass("dropdown-select-open"),
            e(".dropdown-menu-open").removeClass("dropdown-menu-open"),
            this.element.closest(".dropdown-select").addClass("dropdown-select-open"),
            this.element.closest(".dropdown-wrap").addClass("dropdown-menu-open"),
            this.picker.show(),
            this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(),
            this.forceParse && this.update(),
            this.place(),
            e(window).on("resize", e.proxy(this.place, this)),
            t && (t.stopPropagation(),
            t.preventDefault()),
            this.isVisible = !0,
            this.element.trigger({
                type: "show",
                date: this.date
            })
        },
        hide: function(t) {
            this.isVisible && (this.isInline || (this.element.closest(".dropdown-select").removeClass("dropdown-select-open"),
            this.picker.hide(),
            e(window).off("resize", this.place),
            this.viewMode = this.startViewMode,
            this.showMode(),
            this.isInput || e(document).off("mousedown", this.hide),
            this.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(),
            this.isVisible = !1,
            this.element.trigger({
                type: "hide",
                date: this.date
            })))
        },
        remove: function() {
            this._detachEvents(),
            this.picker.remove(),
            delete this.picker,
            delete this.element.data().datetimepicker
        },
        getDate: function() {
            var e = this.getUTCDate();
            return new Date(e.getTime() + 6e4 * e.getTimezoneOffset())
        },
        getUTCDate: function() {
            return this.date
        },
        setDate: function(e) {
            this.setUTCDate(new Date(e.getTime() - 6e4 * e.getTimezoneOffset()))
        },
        setUTCDate: function(e) {
            e >= this.startDate && e <= this.endDate ? (this.date = e,
            this.setValue(),
            this.viewDate = this.date,
            this.fill()) : this.element.trigger({
                type: "outOfRange",
                date: e,
                startDate: this.startDate,
                endDate: this.endDate
            })
        },
        setFormat: function(e) {
            this.format = n.parseFormat(e, this.formatType);
            var t;
            this.isInput ? t = this.element : this.component && (t = this.element.find("input")),
            t && t.val() && this.setValue()
        },
        setValue: function() {
            var t = this.getFormattedDate();
            this.isInput ? this.element.val(t) : (this.component && this.element.find("input").val(t),
            this.element.data("date", t)),
            this.linkField && e("#" + this.linkField).val(this.getFormattedDate(this.linkFormat))
        },
        getFormattedDate: function(e) {
            return void 0 == e && (e = this.format),
            n.formatDate(this.date, e, this.language, this.formatType)
        },
        setStartDate: function(e) {
            this.startDate = e || -1 / 0,
            this.startDate !== -1 / 0 && (this.startDate = n.parseDate(this.startDate, this.format, this.language, this.formatType)),
            this.update(),
            this.updateNavArrows()
        },
        setEndDate: function(e) {
            this.endDate = e || 1 / 0,
            this.endDate !== 1 / 0 && (this.endDate = n.parseDate(this.endDate, this.format, this.language, this.formatType)),
            this.update(),
            this.updateNavArrows()
        },
        setDaysOfWeekDisabled: function(t) {
            this.daysOfWeekDisabled = t || [],
            e.isArray(this.daysOfWeekDisabled) || (this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/)),
            this.daysOfWeekDisabled = e.map(this.daysOfWeekDisabled, function(e) {
                return parseInt(e, 10)
            }),
            this.update(),
            this.updateNavArrows()
        },
        place: function() {
            if (!this.isInline) {
                var t = 0;
                e("div").each(function() {
                    var i = parseInt(e(this).css("zIndex"), 10);
                    i > t && (t = i)
                });
                var i, s, n, a, r = t + 10;
                a = this.container instanceof e ? this.container.offset() : e(this.container).offset(),
                this.component ? (i = this.component.offset(),
                n = i.left,
                "bottom-left" != this.pickerPosition && "top-left" != this.pickerPosition || (n += this.component.outerWidth() - this.picker.outerWidth())) : (i = this.element.offset(),
                n = i.left),
                n + 220 > document.body.clientWidth && (n = document.body.clientWidth - 220),
                s = "top-left" == this.pickerPosition || "top-right" == this.pickerPosition ? i.top - this.picker.outerHeight() : i.top + this.height,
                s -= a.top,
                n -= a.left,
                this.picker.css({
                    top: s,
                    left: n,
                    zIndex: r
                })
            }
        },
        update: function() {
            var e, t = !1;
            arguments && arguments.length && ("string" == typeof arguments[0] || arguments[0]instanceof Date) ? (e = arguments[0],
            t = !0) : ("string" == typeof (e = (this.isInput ? this.element.val() : this.element.find("input").val()) || this.element.data("date") || this.initialDate) || e instanceof String) && (e = e.replace(/^\s+|\s+$/g, "")),
            e || (e = new Date,
            t = !1),
            this.date = n.parseDate(e, this.format, this.language, this.formatType),
            t && this.setValue(),
            this.date < this.startDate ? this.viewDate = new Date(this.startDate) : this.date > this.endDate ? this.viewDate = new Date(this.endDate) : this.viewDate = new Date(this.date),
            this.fill()
        },
        fillDow: function() {
            for (var e = this.weekStart, t = "<tr>"; e < this.weekStart + 7; )
                t += '<th class="dow">' + s[this.language].daysMin[e++ % 7] + "</th>";
            t += "</tr>",
            this.picker.find(".datetimepicker-days thead").append(t)
        },
        fillMonths: function() {
            for (var e = "", t = 0; t < 12; )
                e += '<span class="month">' + s[this.language].monthsShort[t++] + "</span>";
            this.picker.find(".datetimepicker-months td").html(e)
        },
        fill: function() {
            if (null != this.date && null != this.viewDate) {
                var i = new Date(this.viewDate)
                  , a = i.getUTCFullYear()
                  , r = i.getUTCMonth()
                  , o = i.getUTCDate()
                  , c = i.getUTCHours()
                  , l = i.getUTCMinutes()
                  , d = this.startDate !== -1 / 0 ? this.startDate.getUTCFullYear() : -1 / 0
                  , h = this.startDate !== -1 / 0 ? this.startDate.getUTCMonth() : -1 / 0
                  , u = this.endDate !== 1 / 0 ? this.endDate.getUTCFullYear() : 1 / 0
                  , p = this.endDate !== 1 / 0 ? this.endDate.getUTCMonth() : 1 / 0
                  , f = new t(this.date.getUTCFullYear(),this.date.getUTCMonth(),this.date.getUTCDate()).valueOf()
                  , g = new Date;
                if (this.picker.find(".datetimepicker-days thead th:eq(1)").text(s[this.language].months[r] + " " + a),
                "time" == this.formatViewType) {
                    var m = c % 12 ? c % 12 : 12
                      , v = (m < 10 ? "0" : "") + m
                      , y = (l < 10 ? "0" : "") + l
                      , b = s[this.language].meridiem[c < 12 ? 0 : 1];
                    this.picker.find(".datetimepicker-hours thead th:eq(1)").text(v + ":" + y + " " + (b ? b.toUpperCase() : "")),
                    this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(v + ":" + y + " " + (b ? b.toUpperCase() : ""))
                } else
                    this.picker.find(".datetimepicker-hours thead th:eq(1)").text(o + " " + s[this.language].months[r] + " " + a),
                    this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(o + " " + s[this.language].months[r] + " " + a);
                this.picker.find("tfoot th.today").html('<div class="today-btn">' + s[this.language].today + "</div>").toggle(!1 !== this.todayBtn),
                this.fillMonths();
                var C = t(a, r - 1, 28, 0, 0, 0, 0)
                  , w = n.getDaysInMonth(C.getUTCFullYear(), C.getUTCMonth());
                C.setUTCDate(w),
                C.setUTCDate(w - (C.getUTCDay() - this.weekStart + 7) % 7);
                var T = new Date(C);
                T.setUTCDate(T.getUTCDate() + 42),
                T = T.valueOf();
                for (var k, x = [], E = ""; C.valueOf() < T; ) {
                    var _ = "";
                    if (C.getUTCDay() == this.weekStart && x.push("<tr>"),
                    k = "",
                    E = C.getUTCDate(),
                    C.getUTCFullYear() < a || C.getUTCFullYear() == a && C.getUTCMonth() < r ? k += " old" : (C.getUTCFullYear() > a || C.getUTCFullYear() == a && C.getUTCMonth() > r) && (k += " new"),
                    this.todayHighlight && C.getUTCFullYear() == g.getFullYear() && C.getUTCMonth() == g.getMonth() && E == g.getDate() && (k += " today",
                    E = "今日"),
                    C.valueOf() == f && (k += " active"),
                    C.valueOf() + 864e5 <= this.startDate || C.valueOf() > this.endDate || -1 !== e.inArray(C.getUTCDay(), this.daysOfWeekDisabled))
                        k += " disabled";
                    else {
                        var D = "" + C.getUTCFullYear() + C.getUTCMonth() + C.getUTCDate();
                        this.inDate.filter(function(e) {
                            return "" + e.year + e.month + e.day === D
                        }).length && (_ = '<i class="indate-dot"></i>')
                    }
                    x.push('<td class="day' + k + '"><em>' + C.getUTCDate() + "</em>" + _ + "</td>"),
                    C.getUTCDay() == this.weekEnd && x.push("</tr>"),
                    C.setUTCDate(C.getUTCDate() + 1)
                }
                this.picker.find(".datetimepicker-days tbody").empty().append(x.join("")),
                x = [];
                for (var I = "", S = "", M = "", $ = 0; $ < 24; $++) {
                    var P = t(a, r, o, $);
                    k = "",
                    P.valueOf() + 36e5 <= this.startDate || P.valueOf() > this.endDate ? k += " disabled" : c == $ && (k += " active"),
                    this.showMeridian && 2 == s[this.language].meridiem.length ? (S = $ < 12 ? s[this.language].meridiem[0] : s[this.language].meridiem[1],
                    S != M && ("" != M && x.push("</fieldset>"),
                    x.push('<fieldset class="hour"><legend>' + S.toUpperCase() + "</legend>")),
                    M = S,
                    I = $ % 12 ? $ % 12 : 12,
                    x.push('<span class="hour' + k + " hour_" + ($ < 12 ? "am" : "pm") + '">' + I + "</span>"),
                    23 == $ && x.push("</fieldset>")) : (I = $ + ":00",
                    x.push('<span class="hour' + k + '">' + I + "</span>"))
                }
                this.picker.find(".datetimepicker-hours td").html(x.join("")),
                x = [],
                I = "",
                S = "",
                M = "";
                for (var $ = 0; $ < 60; $ += this.minuteStep) {
                    var P = t(a, r, o, c, $, 0);
                    k = "",
                    P.valueOf() < this.startDate || P.valueOf() > this.endDate ? k += " disabled" : Math.floor(l / this.minuteStep) == Math.floor($ / this.minuteStep) && (k += " active"),
                    this.showMeridian && 2 == s[this.language].meridiem.length ? (S = c < 12 ? s[this.language].meridiem[0] : s[this.language].meridiem[1],
                    S != M && ("" != M && x.push("</fieldset>"),
                    x.push('<fieldset class="minute"><legend>' + S.toUpperCase() + "</legend>")),
                    M = S,
                    I = c % 12 ? c % 12 : 12,
                    x.push('<span class="minute' + k + '">' + I + ":" + ($ < 10 ? "0" + $ : $) + "</span>"),
                    59 == $ && x.push("</fieldset>")) : (I = $ + ":00",
                    x.push('<span class="minute' + k + '">' + c + ":" + ($ < 10 ? "0" + $ : $) + "</span>"))
                }
                this.picker.find(".datetimepicker-minutes td").html(x.join(""));
                var U = this.date.getUTCFullYear()
                  , A = this.picker.find(".datetimepicker-months").find("th:eq(1)").text(a).end().find("span").removeClass("active");
                U == a && A.eq(this.date.getUTCMonth()).addClass("active"),
                (a < d || a > u) && A.addClass("disabled"),
                a == d && A.slice(0, h).addClass("disabled"),
                a == u && A.slice(p + 1).addClass("disabled"),
                x = "",
                a = 10 * parseInt(a / 10, 10);
                var L = this.picker.find(".datetimepicker-years").find("th:eq(1)").text(a + "-" + (a + 9)).end().find("td");
                a -= 1;
                for (var $ = -1; $ < 11; $++) {
                    var j = a;
                    if (this.minLimitYear && a < this.minLimitYear)
                        return;
                    this.minLimitYear && a == this.minLimitYear && (j = a + 1 + "以前"),
                    x += '<span class="year' + (-1 == $ || 10 == $ ? " old" : "") + (U == a ? " active" : "") + (a < d || a > u ? " disabled" : "") + '" data-year="' + a + '">' + j + "</span>",
                    a += 1
                }
                L.html(x),
                this.place(),
                this.updateNavArrows()
            }
        },
        updateNavArrows: function() {
            var e = new Date(this.viewDate)
              , t = e.getUTCFullYear()
              , i = e.getUTCMonth()
              , s = e.getUTCDate()
              , n = e.getUTCHours()
              , a = this.picker.find(".datetimepicker-years").find(".year").last().hasClass("disabled");
            switch (this.viewMode) {
            case 0:
                this.startDate !== -1 / 0 && t <= this.startDate.getUTCFullYear() && i <= this.startDate.getUTCMonth() && s <= this.startDate.getUTCDate() && n <= this.startDate.getUTCHours() ? this.picker.find(".prev").css({
                    visibility: "hidden"
                }) : this.picker.find(".prev").css({
                    visibility: "visible"
                }),
                this.endDate !== 1 / 0 && t >= this.endDate.getUTCFullYear() && i >= this.endDate.getUTCMonth() && s >= this.endDate.getUTCDate() && n >= this.endDate.getUTCHours() ? this.picker.find(".next").css({
                    visibility: "hidden"
                }) : this.picker.find(".next").css({
                    visibility: "visible"
                });
                break;
            case 1:
                this.startDate !== -1 / 0 && t <= this.startDate.getUTCFullYear() && i <= this.startDate.getUTCMonth() && s <= this.startDate.getUTCDate() ? this.picker.find(".prev").css({
                    visibility: "hidden"
                }) : this.picker.find(".prev").css({
                    visibility: "visible"
                }),
                this.endDate !== 1 / 0 && t >= this.endDate.getUTCFullYear() && i >= this.endDate.getUTCMonth() && s >= this.endDate.getUTCDate() ? this.picker.find(".next").css({
                    visibility: "hidden"
                }) : this.picker.find(".next").css({
                    visibility: "visible"
                });
                break;
            case 2:
                this.startDate !== -1 / 0 && t <= this.startDate.getUTCFullYear() && i <= this.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                    visibility: "hidden"
                }) : this.picker.find(".prev").css({
                    visibility: "visible"
                }),
                this.endDate !== 1 / 0 && t >= this.endDate.getUTCFullYear() && i >= this.endDate.getUTCMonth() ? this.picker.find(".next").css({
                    visibility: "hidden"
                }) : this.picker.find(".next").css({
                    visibility: "visible"
                });
                break;
            case 3:
            case 4:
                this.startDate !== -1 / 0 && t <= this.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
                    visibility: "hidden"
                }) : this.picker.find(".prev").css({
                    visibility: "visible"
                }),
                this.endDate !== 1 / 0 && t >= this.endDate.getUTCFullYear() ? this.picker.find(".next").css({
                    visibility: "hidden"
                }) : a ? this.picker.find(".next").css({
                    visibility: "hidden"
                }) : this.picker.find(".next").css({
                    visibility: "visible"
                })
            }
        },
        mousewheel: function(t) {
            if (t.preventDefault(),
            t.stopPropagation(),
            !this.wheelPause) {
                this.wheelPause = !0;
                var i = t.originalEvent
                  , s = i.wheelDelta
                  , n = s > 0 ? 1 : 0 === s ? 0 : -1;
                this.wheelViewModeNavigationInverseDirection && (n = -n),
                this.showMode(n),
                setTimeout(e.proxy(function() {
                    this.wheelPause = !1
                }, this), this.wheelViewModeNavigationDelay)
            }
        },
        click: function(i) {
            i.stopPropagation(),
            i.preventDefault();
            var s = e(i.target).closest("span, td, th, legend");
            if (s.is(".glyphicon") && (s = e(s).parent().closest("span, td, th, legend")),
            1 == s.length) {
                if (s.is(".disabled"))
                    return void this.element.trigger({
                        type: "outOfRange",
                        date: this.viewDate,
                        startDate: this.startDate,
                        endDate: this.endDate
                    });
                switch (s[0].nodeName.toLowerCase()) {
                case "th":
                    switch (s[0].className) {
                    case "switch":
                        this.showMode(1);
                        break;
                    case "prev":
                    case "next":
                        this.picker.find(".prev").css({
                            visibility: "hidden"
                        }),
                        this.picker.find(".next").css({
                            visibility: "hidden"
                        }),
                        this.throttle(function() {
                            var e = n.modes[this.viewMode].navStep * ("prev" == s[0].className ? -1 : 1);
                            switch (this.viewMode) {
                            case 0:
                                this.viewDate = this.moveHour(this.viewDate, e);
                                break;
                            case 1:
                                this.viewDate = this.moveDate(this.viewDate, e);
                                break;
                            case 2:
                                this.viewDate = this.moveMonth(this.viewDate, e);
                                break;
                            case 3:
                            case 4:
                                this.viewDate = this.moveYear(this.viewDate, e)
                            }
                            this.fill(),
                            this.element.trigger({
                                type: s[0].className + ":" + this.convertViewModeText(this.viewMode),
                                date: this.viewDate,
                                startDate: this.startDate,
                                endDate: this.endDate
                            })
                        }, 300);
                        break;
                    case "today":
                        var a = new Date;
                        a = t(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds(), 0),
                        a < this.startDate ? a = this.startDate : a > this.endDate && (a = this.endDate),
                        this.viewMode = this.startViewMode,
                        this.showMode(0),
                        this._setDate(a),
                        this.fill(),
                        this.autoclose && this.hide()
                    }
                    break;
                case "span":
                    if (!s.is(".disabled")) {
                        var r = this.viewDate.getUTCFullYear()
                          , o = this.viewDate.getUTCMonth()
                          , c = this.viewDate.getUTCDate()
                          , l = this.viewDate.getUTCHours()
                          , d = this.viewDate.getUTCMinutes()
                          , h = this.viewDate.getUTCSeconds();
                        if (s.is(".month") ? (this.viewDate.setUTCDate(1),
                        o = s.parent().find("span").index(s),
                        c = this.viewDate.getUTCDate(),
                        this.viewDate.setUTCMonth(o),
                        this.element.trigger({
                            type: "changeMonth",
                            date: this.viewDate
                        }),
                        this.viewSelect >= 3 && this._setDate(t(r, o, c, l, d, h, 0))) : s.is(".year") ? (this.viewDate.setUTCDate(1),
                        r = parseInt(s.text(), 10) || 0,
                        s.text().indexOf("以前") > -1 && (r -= 1),
                        this.viewDate.setUTCFullYear(r),
                        this.element.trigger({
                            type: "changeYear",
                            date: this.viewDate
                        }),
                        this.viewSelect >= 4 && this._setDate(t(r, o, c, l, d, h, 0)),
                        this.minLimitYear && this.minLimitYear == r && (this.viewMode = this.startViewMode,
                        this.showMode(0),
                        this._setDate(t(r, 0, c, l, d, h, 0)),
                        this.fill(),
                        this.hide())) : s.is(".hour") ? (l = parseInt(s.text(), 10) || 0,
                        (s.hasClass("hour_am") || s.hasClass("hour_pm")) && (12 == l && s.hasClass("hour_am") ? l = 0 : 12 != l && s.hasClass("hour_pm") && (l += 12)),
                        this.viewDate.setUTCHours(l),
                        this.element.trigger({
                            type: "changeHour",
                            date: this.viewDate
                        }),
                        this.viewSelect >= 1 && this._setDate(t(r, o, c, l, d, h, 0))) : s.is(".minute") && (d = parseInt(s.text().substr(s.text().indexOf(":") + 1), 10) || 0,
                        this.viewDate.setUTCMinutes(d),
                        this.element.trigger({
                            type: "changeMinute",
                            date: this.viewDate
                        }),
                        this.viewSelect >= 0 && this._setDate(t(r, o, c, l, d, h, 0))),
                        0 != this.viewMode) {
                            var u = this.viewMode;
                            this.minLimitYear && this.minLimitYear == r ? this.showMode(0) : this.showMode(-1),
                            this.fill(),
                            u == this.viewMode && this.autoclose && this.hide()
                        } else
                            this.fill(),
                            this.autoclose && this.hide()
                    }
                    break;
                case "td":
                    if (s.is(".day") && !s.is(".disabled")) {
                        var c = parseInt(s.text(), 10) || 1
                          , r = this.viewDate.getUTCFullYear()
                          , o = this.viewDate.getUTCMonth()
                          , l = this.viewDate.getUTCHours()
                          , d = this.viewDate.getUTCMinutes()
                          , h = this.viewDate.getUTCSeconds();
                        s.is(".old") ? 0 === o ? (o = 11,
                        r -= 1) : o -= 1 : s.is(".new") && (11 == o ? (o = 0,
                        r += 1) : o += 1),
                        this.viewDate.setUTCFullYear(r),
                        this.viewDate.setUTCMonth(o, c),
                        this.element.trigger({
                            type: "changeDay",
                            date: this.viewDate
                        }),
                        this.viewSelect >= 2 && this._setDate(t(r, o, c, l, d, h, 0))
                    }
                    var u = this.viewMode;
                    this.showMode(-1),
                    this.fill(),
                    u == this.viewMode && this.autoclose && this.hide()
                }
            }
        },
        throttle: function(e, t) {
            var i = this;
            clearTimeout(this.timer),
            this.timer = setTimeout(function() {
                e.call(i)
            }, t)
        },
        _setDate: function(e, t) {
            t && "date" != t || (this.date = e),
            t && "view" != t || (this.viewDate = e),
            this.fill(),
            this.setValue();
            var i;
            this.isInput ? i = this.element : this.component && (i = this.element.find("input")),
            i && (i.change(),
            this.autoclose),
            this.element.trigger({
                type: "changeDate",
                date: this.date
            })
        },
        moveMinute: function(e, t) {
            if (!t)
                return e;
            var i = new Date(e.valueOf());
            return i.setUTCMinutes(i.getUTCMinutes() + t * this.minuteStep),
            i
        },
        moveHour: function(e, t) {
            if (!t)
                return e;
            var i = new Date(e.valueOf());
            return i.setUTCHours(i.getUTCHours() + t),
            i
        },
        moveDate: function(e, t) {
            if (!t)
                return e;
            var i = new Date(e.valueOf());
            return i.setUTCDate(i.getUTCDate() + t),
            i
        },
        moveMonth: function(e, t) {
            if (!t)
                return e;
            var i, s, n = new Date(e.valueOf()), a = n.getUTCDate(), r = n.getUTCMonth(), o = Math.abs(t);
            if (t = t > 0 ? 1 : -1,
            1 == o)
                s = -1 == t ? function() {
                    return n.getUTCMonth() == r
                }
                : function() {
                    return n.getUTCMonth() != i
                }
                ,
                i = r + t,
                n.setUTCMonth(i),
                (i < 0 || i > 11) && (i = (i + 12) % 12);
            else {
                for (var c = 0; c < o; c++)
                    n = this.moveMonth(n, t);
                i = n.getUTCMonth(),
                n.setUTCDate(a),
                s = function() {
                    return i != n.getUTCMonth()
                }
            }
            for (; s(); )
                n.setUTCDate(--a),
                n.setUTCMonth(i);
            return n
        },
        moveYear: function(e, t) {
            return this.moveMonth(e, 12 * t)
        },
        dateWithinRange: function(e) {
            return e >= this.startDate && e <= this.endDate
        },
        keydown: function(e) {
            if (this.picker.is(":not(:visible)"))
                return void (27 == e.keyCode && this.show());
            var t, i, s, n = !1;
            switch (e.keyCode) {
            case 27:
                this.hide(),
                e.preventDefault();
                break;
            case 37:
            case 39:
                if (!this.keyboardNavigation)
                    break;
                t = 37 == e.keyCode ? -1 : 1,
                viewMode = this.viewMode,
                e.ctrlKey ? viewMode += 2 : e.shiftKey && (viewMode += 1),
                4 == viewMode ? (i = this.moveYear(this.date, t),
                s = this.moveYear(this.viewDate, t)) : 3 == viewMode ? (i = this.moveMonth(this.date, t),
                s = this.moveMonth(this.viewDate, t)) : 2 == viewMode ? (i = this.moveDate(this.date, t),
                s = this.moveDate(this.viewDate, t)) : 1 == viewMode ? (i = this.moveHour(this.date, t),
                s = this.moveHour(this.viewDate, t)) : 0 == viewMode && (i = this.moveMinute(this.date, t),
                s = this.moveMinute(this.viewDate, t)),
                this.dateWithinRange(i) && (this.date = i,
                this.viewDate = s,
                this.setValue(),
                this.update(),
                e.preventDefault(),
                n = !0);
                break;
            case 38:
            case 40:
                if (!this.keyboardNavigation)
                    break;
                t = 38 == e.keyCode ? -1 : 1,
                viewMode = this.viewMode,
                e.ctrlKey ? viewMode += 2 : e.shiftKey && (viewMode += 1),
                4 == viewMode ? (i = this.moveYear(this.date, t),
                s = this.moveYear(this.viewDate, t)) : 3 == viewMode ? (i = this.moveMonth(this.date, t),
                s = this.moveMonth(this.viewDate, t)) : 2 == viewMode ? (i = this.moveDate(this.date, 7 * t),
                s = this.moveDate(this.viewDate, 7 * t)) : 1 == viewMode ? this.showMeridian ? (i = this.moveHour(this.date, 6 * t),
                s = this.moveHour(this.viewDate, 6 * t)) : (i = this.moveHour(this.date, 4 * t),
                s = this.moveHour(this.viewDate, 4 * t)) : 0 == viewMode && (i = this.moveMinute(this.date, 4 * t),
                s = this.moveMinute(this.viewDate, 4 * t)),
                this.dateWithinRange(i) && (this.date = i,
                this.viewDate = s,
                this.setValue(),
                this.update(),
                e.preventDefault(),
                n = !0);
                break;
            case 13:
                if (0 != this.viewMode) {
                    var a = this.viewMode;
                    this.showMode(-1),
                    this.fill(),
                    a == this.viewMode && this.autoclose && this.hide()
                } else
                    this.fill(),
                    this.autoclose && this.hide();
                e.preventDefault();
                break;
            case 9:
                this.hide()
            }
            if (n) {
                var r;
                this.isInput ? r = this.element : this.component && (r = this.element.find("input")),
                r && r.change(),
                this.element.trigger({
                    type: "changeDate",
                    date: this.date
                })
            }
        },
        showMode: function(e) {
            if (e) {
                var t = Math.max(0, Math.min(n.modes.length - 1, this.viewMode + e));
                t >= this.minView && t <= this.maxView && (this.element.trigger({
                    type: "changeMode",
                    date: this.viewDate,
                    oldViewMode: this.viewMode,
                    newViewMode: t
                }),
                this.viewMode = t)
            }
            this.picker.find(">div").hide().filter(".datetimepicker-" + n.modes[this.viewMode].clsName).css("display", "block"),
            this.updateNavArrows()
        },
        reset: function(e) {
            this._setDate(null, "date")
        },
        convertViewModeText: function(e) {
            switch (e) {
            case 4:
                return "decade";
            case 3:
                return "year";
            case 2:
                return "month";
            case 1:
                return "day";
            case 0:
                return "hour"
            }
        }
    },
    e.fn.datetimepicker = function(t) {
        var s = Array.apply(null, arguments);
        s.shift();
        var n;
        return this.each(function() {
            var a = e(this)
              , r = a.data("datetimepicker")
              , o = "object" == typeof t && t;
            if (r || a.data("datetimepicker", r = new i(this,e.extend({}, e.fn.datetimepicker.defaults, o))),
            "string" == typeof t && "function" == typeof r[t] && void 0 !== (n = r[t].apply(r, s)))
                return !1
        }),
        void 0 !== n ? n : this
    }
    ,
    e.fn.datetimepicker.defaults = {},
    e.fn.datetimepicker.Constructor = i;
    var s = e.fn.datetimepicker.dates = {
        en: {
            days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
            daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
            daysMin: ["日", "一", "二", "三", "四", "五", "六", "日"],
            months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            today: "至今",
            suffix: [],
            meridiem: ["上午", "下午"]
        }
    }
      , n = {
        modes: [{
            clsName: "minutes",
            navFnc: "Hours",
            navStep: 1
        }, {
            clsName: "hours",
            navFnc: "Date",
            navStep: 1
        }, {
            clsName: "days",
            navFnc: "Month",
            navStep: 1
        }, {
            clsName: "months",
            navFnc: "FullYear",
            navStep: 1
        }, {
            clsName: "years",
            navFnc: "FullYear",
            navStep: 10
        }],
        isLeapYear: function(e) {
            return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
        },
        getDaysInMonth: function(e, t) {
            return [31, n.isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
        },
        getDefaultFormat: function(e, t) {
            if ("standard" == e)
                return "input" == t ? "yyyy-mm-dd hh:ii" : "yyyy-mm-dd hh:ii:ss";
            if ("php" == e)
                return "input" == t ? "Y-m-d H:i" : "Y-m-d H:i:s";
            throw new Error("Invalid format type.")
        },
        validParts: function(e) {
            if ("standard" == e)
                return /hh?|HH?|p|P|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g;
            if ("php" == e)
                return /[dDjlNwzFmMnStyYaABgGhHis]/g;
            throw new Error("Invalid format type.")
        },
        nonpunctuation: /[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,
        parseFormat: function(e, t) {
            var i = e.replace(this.validParts(t), "\0").split("\0")
              , s = e.match(this.validParts(t));
            if (!i || !i.length || !s || 0 == s.length)
                throw new Error("Invalid date format.");
            return {
                separators: i,
                parts: s
            }
        },
        parseDate: function(n, a, r, o) {
            if (n instanceof Date) {
                var c = new Date(n.valueOf() - 6e4 * n.getTimezoneOffset());
                return c.setMilliseconds(0),
                c
            }
            if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(n) && (a = this.parseFormat("yyyy-mm-dd", o)),
            /^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(n) && (a = this.parseFormat("yyyy-mm-dd hh:ii", o)),
            /^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(n) && (a = this.parseFormat("yyyy-mm-dd hh:ii:ss", o)),
            /^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(n)) {
                var l, d, h = /([-+]\d+)([dmwy])/, u = n.match(/([-+]\d+)([dmwy])/g);
                n = new Date;
                for (var p = 0; p < u.length; p++)
                    switch (l = h.exec(u[p]),
                    d = parseInt(l[1]),
                    l[2]) {
                    case "d":
                        n.setUTCDate(n.getUTCDate() + d);
                        break;
                    case "m":
                        n = i.prototype.moveMonth.call(i.prototype, n, d);
                        break;
                    case "w":
                        n.setUTCDate(n.getUTCDate() + 7 * d);
                        break;
                    case "y":
                        n = i.prototype.moveYear.call(i.prototype, n, d)
                    }
                return t(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), n.getUTCHours(), n.getUTCMinutes(), n.getUTCSeconds(), 0)
            }
            var f, g, l, u = n && n.match(this.nonpunctuation) || [], n = new Date(0,0,0,0,0,0,0), m = {}, v = ["hh", "h", "ii", "i", "ss", "s", "yyyy", "yy", "M", "MM", "m", "mm", "D", "DD", "d", "dd", "H", "HH", "p", "P"], y = {
                hh: function(e, t) {
                    return e.setUTCHours(t)
                },
                h: function(e, t) {
                    return e.setUTCHours(t)
                },
                HH: function(e, t) {
                    return e.setUTCHours(12 == t ? 0 : t)
                },
                H: function(e, t) {
                    return e.setUTCHours(12 == t ? 0 : t)
                },
                ii: function(e, t) {
                    return e.setUTCMinutes(t)
                },
                i: function(e, t) {
                    return e.setUTCMinutes(t)
                },
                ss: function(e, t) {
                    return e.setUTCSeconds(t)
                },
                s: function(e, t) {
                    return e.setUTCSeconds(t)
                },
                yyyy: function(e, t) {
                    return e.setUTCFullYear(t)
                },
                yy: function(e, t) {
                    return e.setUTCFullYear(2e3 + t)
                },
                m: function(e, t) {
                    for (t -= 1; t < 0; )
                        t += 12;
                    for (t %= 12,
                    e.setUTCMonth(t); e.getUTCMonth() != t; ) {
                        if (isNaN(e.getUTCMonth()))
                            return e;
                        e.setUTCDate(e.getUTCDate() - 1)
                    }
                    return e
                },
                d: function(e, t) {
                    return e.setUTCDate(t)
                },
                p: function(e, t) {
                    return e.setUTCHours(1 == t ? e.getUTCHours() + 12 : e.getUTCHours())
                }
            };
            if (y.M = y.MM = y.mm = y.m,
            y.dd = y.d,
            y.P = y.p,
            n = t(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds()),
            u.length == a.parts.length) {
                for (var p = 0, b = a.parts.length; p < b; p++) {
                    if (f = parseInt(u[p], 10),
                    l = a.parts[p],
                    isNaN(f))
                        switch (l) {
                        case "MM":
                            g = e(s[r].months).filter(function() {
                                var e = this.slice(0, u[p].length);
                                return e == u[p].slice(0, e.length)
                            }),
                            f = e.inArray(g[0], s[r].months) + 1;
                            break;
                        case "M":
                            g = e(s[r].monthsShort).filter(function() {
                                var e = this.slice(0, u[p].length)
                                  , t = u[p].slice(0, e.length);
                                return e.toLowerCase() == t.toLowerCase()
                            }),
                            f = e.inArray(g[0], s[r].monthsShort) + 1;
                            break;
                        case "p":
                        case "P":
                            f = e.inArray(u[p].toLowerCase(), s[r].meridiem)
                        }
                    m[l] = f
                }
                for (var C, p = 0; p < v.length; p++)
                    (C = v[p])in m && !isNaN(m[C]) && y[C](n, m[C])
            }
            return n
        },
        formatDate: function(t, i, a, r) {
            if (null == t)
                return "";
            var o;
            if ("standard" == r)
                o = {
                    yy: t.getUTCFullYear().toString().substring(2),
                    yyyy: t.getUTCFullYear(),
                    m: t.getUTCMonth() + 1,
                    M: s[a].monthsShort[t.getUTCMonth()],
                    MM: s[a].months[t.getUTCMonth()],
                    d: t.getUTCDate(),
                    D: s[a].daysShort[t.getUTCDay()],
                    DD: s[a].days[t.getUTCDay()],
                    p: 2 == s[a].meridiem.length ? s[a].meridiem[t.getUTCHours() < 12 ? 0 : 1] : "",
                    h: t.getUTCHours(),
                    i: t.getUTCMinutes(),
                    s: t.getUTCSeconds()
                },
                2 == s[a].meridiem.length ? o.H = o.h % 12 == 0 ? 12 : o.h % 12 : o.H = o.h,
                o.HH = (o.H < 10 ? "0" : "") + o.H,
                o.P = o.p.toUpperCase(),
                o.hh = (o.h < 10 ? "0" : "") + o.h,
                o.ii = (o.i < 10 ? "0" : "") + o.i,
                o.ss = (o.s < 10 ? "0" : "") + o.s,
                o.dd = (o.d < 10 ? "0" : "") + o.d,
                o.mm = (o.m < 10 ? "0" : "") + o.m;
            else {
                if ("php" != r)
                    throw new Error("Invalid format type.");
                o = {
                    y: t.getUTCFullYear().toString().substring(2),
                    Y: t.getUTCFullYear(),
                    F: s[a].months[t.getUTCMonth()],
                    M: s[a].monthsShort[t.getUTCMonth()],
                    n: t.getUTCMonth() + 1,
                    t: n.getDaysInMonth(t.getUTCFullYear(), t.getUTCMonth()),
                    j: t.getUTCDate(),
                    l: s[a].days[t.getUTCDay()],
                    D: s[a].daysShort[t.getUTCDay()],
                    w: t.getUTCDay(),
                    N: 0 == t.getUTCDay() ? 7 : t.getUTCDay(),
                    S: t.getUTCDate() % 10 <= s[a].suffix.length ? s[a].suffix[t.getUTCDate() % 10 - 1] : "",
                    a: 2 == s[a].meridiem.length ? s[a].meridiem[t.getUTCHours() < 12 ? 0 : 1] : "",
                    g: t.getUTCHours() % 12 == 0 ? 12 : t.getUTCHours() % 12,
                    G: t.getUTCHours(),
                    i: t.getUTCMinutes(),
                    s: t.getUTCSeconds()
                },
                o.m = (o.n < 10 ? "0" : "") + o.n,
                o.d = (o.j < 10 ? "0" : "") + o.j,
                o.A = o.a.toString().toUpperCase(),
                o.h = (o.g < 10 ? "0" : "") + o.g,
                o.H = (o.G < 10 ? "0" : "") + o.G,
                o.i = (o.i < 10 ? "0" : "") + o.i,
                o.s = (o.s < 10 ? "0" : "") + o.s
            }
            for (var t = [], c = e.extend([], i.separators), l = 0, d = i.parts.length; l < d; l++)
                c.length && t.push(c.shift()),
                t.push(o[i.parts[l]]);
            return c.length && t.push(c.shift()),
            t.join("")
        },
        convertViewMode: function(e) {
            switch (e) {
            case 4:
            case "decade":
                e = 4;
                break;
            case 3:
            case "year":
                e = 3;
                break;
            case 2:
            case "month":
                e = 2;
                break;
            case 1:
            case "day":
                e = 1;
                break;
            case 0:
            case "hour":
                e = 0
            }
            return e
        },
        headTemplate: '<thead><tr><th class="prev"><i class="fz fz-arrow-left"></i></th><th colspan="5" class="switch"></th><th class="next"><i class="fz fz-arrow-right"></i></th></tr></thead>',
        headTemplateV3: '<thead><tr><th class="prev"><span class="glyphicon glyphicon-arrow-left"></span> </th><th colspan="5" class="switch"></th><th class="next"><span class="glyphicon glyphicon-arrow-right"></span> </th></tr></thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot class="tfoot"><tr><th colspan="7" class="today"></th></tr></tfoot>'
    };
    n.template = '<div class="datetimepicker"><div class="datetimepicker-minutes"><table class="table-condensed">' + n.headTemplate + n.contTemplate + n.footTemplate + '</table></div><div class="datetimepicker-hours"><table class="table-condensed">' + n.headTemplate + n.contTemplate + n.footTemplate + '</table></div><div class="datetimepicker-days"><table class="table-condensed">' + n.headTemplate + "<tbody></tbody>" + n.footTemplate + '</table></div><div class="datetimepicker-months"><table class="table-condensed">' + n.headTemplate + n.contTemplate + n.footTemplate + '</table></div><div class="datetimepicker-years"><table class="table-condensed">' + n.headTemplate + n.contTemplate + n.footTemplate + "</table></div></div>",
    n.templateV3 = '<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">' + n.headTemplateV3 + n.contTemplate + n.footTemplate + '</table></div><div class="datetimepicker-hours"><table class=" table-condensed">' + n.headTemplateV3 + n.contTemplate + n.footTemplate + '</table></div><div class="datetimepicker-days"><table class=" table-condensed">' + n.headTemplateV3 + "<tbody></tbody>" + n.footTemplate + '</table></div><div class="datetimepicker-months"><table class="table-condensed">' + n.headTemplateV3 + n.contTemplate + n.footTemplate + '</table></div><div class="datetimepicker-years"><table class="table-condensed">' + n.headTemplateV3 + n.contTemplate + n.footTemplate + "</table></div></div>",
    e.fn.datetimepicker.DPGlobal = n,
    e.fn.datetimepicker.noConflict = function() {
        return e.fn.datetimepicker = old,
        this
    }
    ,
    e(document).on("focus.datetimepicker.data-api click.datetimepicker.data-api", '[data-provide="datetimepicker"]', function(t) {
        var i = e(this);
        i.data("datetimepicker") || (t.preventDefault(),
        i.datetimepicker("show"))
    }),
    e(function() {
        e('[data-provide="datetimepicker-inline"]').datetimepicker()
    })
}(window.jQuery),
function(e) {
    e.Jcrop = function(t, i) {
        function s(e) {
            return Math.round(e) + "px"
        }
        function n(e) {
            return L.baseClass + "-" + e
        }
        function a() {
            return e.fx.step.hasOwnProperty("backgroundColor")
        }
        function r(t) {
            var i = e(t).offset();
            return [i.left, i.top]
        }
        function o(e) {
            return [e.pageX - A[0], e.pageY - A[1]]
        }
        function c(t) {
            "object" != typeof t && (t = {}),
            L = e.extend(L, t),
            e.each(["onChange", "onSelect", "onRelease", "onDblClick"], function(e, t) {
                "function" != typeof L[t] && (L[t] = function() {}
                )
            })
        }
        function l(e, t, i) {
            if (A = r(q),
            fe.setCursor("move" === e ? e : e + "-resize"),
            "move" === e)
                return fe.activateHandlers(h(t), m, i);
            var s = he.getFixed()
              , n = u(e)
              , a = he.getCorner(u(n));
            he.setPressed(he.getCorner(n)),
            he.setCurrent(a),
            fe.activateHandlers(d(e, s), m, i)
        }
        function d(e, t) {
            return function(i) {
                if (L.aspectRatio)
                    switch (e) {
                    case "e":
                    case "w":
                        i[1] = t.y + 1;
                        break;
                    case "n":
                    case "s":
                        i[0] = t.x + 1
                    }
                else
                    switch (e) {
                    case "e":
                    case "w":
                        i[1] = t.y2;
                        break;
                    case "n":
                    case "s":
                        i[0] = t.x2
                    }
                he.setCurrent(i),
                pe.update()
            }
        }
        function h(e) {
            var t = e;
            return ge.watchKeys(),
            function(e) {
                he.moveOffset([e[0] - t[0], e[1] - t[1]]),
                t = e,
                pe.update()
            }
        }
        function u(e) {
            switch (e) {
            case "n":
                return "sw";
            case "s":
            case "e":
                return "nw";
            case "w":
                return "ne";
            case "ne":
                return "sw";
            case "nw":
                return "se";
            case "se":
                return "nw";
            case "sw":
                return "ne"
            }
        }
        function p(e) {
            return function(t) {
                return !L.disabled && (!("move" === e && !L.allowMove) && (A = r(q),
                se = !0,
                l(e, o(t)),
                t.stopPropagation(),
                t.preventDefault(),
                !1))
            }
        }
        function f(e, t, i) {
            var s = e.width()
              , n = e.height();
            s > t && t > 0 && (s = t,
            n = t / e.width() * e.height()),
            n > i && i > 0 && (n = i,
            s = i / e.height() * e.width()),
            te = e.width() / s,
            ie = e.height() / n,
            e.width(s).height(n)
        }
        function g(e) {
            return {
                x: e.x * te,
                y: e.y * ie,
                x2: e.x2 * te,
                y2: e.y2 * ie,
                w: e.w * te,
                h: e.h * ie
            }
        }
        function m(e) {
            var t = he.getFixed();
            t.w > L.minSelect[0] && t.h > L.minSelect[1] ? (pe.enableHandles(),
            pe.done()) : pe.release(),
            fe.setCursor(L.allowSelect ? "crosshair" : "default")
        }
        function v(e) {
            if (L.disabled)
                return !1;
            if (!L.allowSelect)
                return !1;
            se = !0,
            A = r(q),
            pe.disableHandles(),
            fe.setCursor("crosshair");
            var t = o(e);
            return he.setPressed(t),
            pe.update(),
            fe.activateHandlers(y, m, "touch" === e.type.substring(0, 5)),
            ge.watchKeys(),
            e.stopPropagation(),
            e.preventDefault(),
            !1
        }
        function y(e) {
            he.setCurrent(e),
            pe.update()
        }
        function b() {
            var t = e("<div></div>").addClass(n("tracker"));
            return R && t.css({
                opacity: 0,
                backgroundColor: "white"
            }),
            t
        }
        function C(e) {
            Y.removeClass().addClass(n("holder")).addClass(e)
        }
        function w(e, t) {
            function i() {
                window.setTimeout(y, h)
            }
            var s = e[0] / te
              , n = e[1] / ie
              , a = e[2] / te
              , r = e[3] / ie;
            if (!ne) {
                var o = he.flipCoords(s, n, a, r)
                  , c = he.getFixed()
                  , l = [c.x, c.y, c.x2, c.y2]
                  , d = l
                  , h = L.animationDelay
                  , u = o[0] - l[0]
                  , p = o[1] - l[1]
                  , f = o[2] - l[2]
                  , g = o[3] - l[3]
                  , m = 0
                  , v = L.swingSpeed;
                s = d[0],
                n = d[1],
                a = d[2],
                r = d[3],
                pe.animMode(!0);
                var y = function() {
                    return function() {
                        m += (100 - m) / v,
                        d[0] = Math.round(s + m / 100 * u),
                        d[1] = Math.round(n + m / 100 * p),
                        d[2] = Math.round(a + m / 100 * f),
                        d[3] = Math.round(r + m / 100 * g),
                        m >= 99.8 && (m = 100),
                        m < 100 ? (k(d),
                        i()) : (pe.done(),
                        pe.animMode(!1),
                        "function" == typeof t && t.call(me))
                    }
                }();
                i()
            }
        }
        function T(e) {
            k([e[0] / te, e[1] / ie, e[2] / te, e[3] / ie]),
            L.onSelect.call(me, g(he.getFixed())),
            pe.enableHandles()
        }
        function k(e) {
            he.setPressed([e[0], e[1]]),
            he.setCurrent([e[2], e[3]]),
            pe.update()
        }
        function x() {
            return g(he.getFixed())
        }
        function E() {
            return he.getFixed()
        }
        function _(e) {
            c(e),
            U()
        }
        function D() {
            L.disabled = !0,
            pe.disableHandles(),
            pe.setCursor("default"),
            fe.setCursor("default")
        }
        function I() {
            L.disabled = !1,
            U()
        }
        function S() {
            pe.done(),
            fe.activateHandlers(null, null)
        }
        function M() {
            Y.remove(),
            B.show(),
            B.css("visibility", "visible"),
            e(t).removeData("Jcrop")
        }
        function $(e, t) {
            pe.release(),
            D();
            var i = new Image;
            i.onload = function() {
                var s = i.width
                  , n = i.height
                  , a = L.boxWidth
                  , r = L.boxHeight;
                q.width(s).height(n),
                q.attr("src", e),
                z.attr("src", e),
                f(q, a, r),
                H = q.width(),
                G = q.height(),
                z.width(H).height(G),
                oe.width(H + 2 * re).height(G + 2 * re),
                Y.width(H).height(G),
                ue.resize(H, G),
                I(),
                "function" == typeof t && t.call(me)
            }
            ,
            i.src = e
        }
        function P(e, t, i) {
            var s = t || L.bgColor;
            L.bgFade && a() && L.fadeTime && !i ? e.animate({
                backgroundColor: s
            }, {
                queue: !1,
                duration: L.fadeTime
            }) : e.css("backgroundColor", s)
        }
        function U(e) {
            L.allowResize ? e ? pe.enableOnly() : pe.enableHandles() : pe.disableHandles(),
            fe.setCursor(L.allowSelect ? "crosshair" : "default"),
            pe.setCursor(L.allowMove ? "move" : "default"),
            L.hasOwnProperty("trueSize") && (te = L.trueSize[0] / H,
            ie = L.trueSize[1] / G),
            L.hasOwnProperty("setSelect") && (T(L.setSelect),
            pe.done(),
            delete L.setSelect),
            ue.refresh(),
            L.bgColor != ce && (P(L.shade ? ue.getShades() : Y, L.shade ? L.shadeColor || L.bgColor : L.bgColor),
            ce = L.bgColor),
            le != L.bgOpacity && (le = L.bgOpacity,
            L.shade ? ue.refresh() : pe.setBgOpacity(le)),
            Q = L.maxSize[0] || 0,
            X = L.maxSize[1] || 0,
            Z = L.minSize[0] || 0,
            ee = L.minSize[1] || 0,
            L.hasOwnProperty("outerImage") && (q.attr("src", L.outerImage),
            delete L.outerImage),
            pe.refresh()
        }
        var A, L = e.extend({}, e.Jcrop.defaults), j = navigator.userAgent.toLowerCase(), R = /msie/.test(j), O = /msie [1-6]\./.test(j);
        "object" != typeof t && (t = e(t)[0]),
        "object" != typeof i && (i = {}),
        c(i);
        var N = {
            border: "none",
            visibility: "visible",
            margin: 0,
            padding: 0,
            position: "absolute",
            top: 0,
            left: 0
        }
          , B = e(t)
          , F = !0;
        if ("IMG" == t.tagName) {
            if (0 != B[0].width && 0 != B[0].height)
                B.width(B[0].width),
                B.height(B[0].height);
            else {
                var V = new Image;
                V.src = B[0].src,
                B.width(V.width),
                B.height(V.height)
            }
            var q = B.clone().removeAttr("id").css(N).show();
            q.width(B.width()),
            q.height(B.height()),
            B.after(q).hide()
        } else
            q = B.css(N).show(),
            F = !1,
            null === L.shade && (L.shade = !0);
        f(q, L.boxWidth, L.boxHeight);
        var H = q.width()
          , G = q.height()
          , Y = e("<div />").width(H).height(G).addClass(n("holder")).css({
            position: "relative",
            backgroundColor: L.bgColor
        }).insertAfter(B).append(q);
        L.addClass && Y.addClass(L.addClass);
        var z = e("<div />")
          , W = e("<div />").width("100%").height("100%").css({
            zIndex: 310,
            position: "absolute",
            overflow: "hidden"
        })
          , K = e("<div />").width("100%").height("100%").css("zIndex", 320)
          , J = e("<div />").css({
            position: "absolute",
            zIndex: 600
        }).dblclick(function() {
            var e = he.getFixed();
            L.onDblClick.call(me, e)
        }).insertBefore(q).append(W, K);
        F && (z = e("<img />").attr("src", q.attr("src")).css(N).width(H).height(G),
        W.append(z)),
        O && J.css({
            overflowY: "hidden"
        });
        var Q, X, Z, ee, te, ie, se, ne, ae, re = L.boundary, oe = b().width(H + 2 * re).height(G + 2 * re).css({
            position: "absolute",
            top: s(-re),
            left: s(-re),
            zIndex: 290
        }).mousedown(v), ce = L.bgColor, le = L.bgOpacity;
        A = r(q);
        var de = function() {
            function e() {
                var e, t = {}, i = ["touchstart", "touchmove", "touchend"], s = document.createElement("div");
                try {
                    for (e = 0; e < i.length; e++) {
                        var n = i[e];
                        n = "on" + n;
                        var a = n in s;
                        a || (s.setAttribute(n, "return;"),
                        a = "function" == typeof s[n]),
                        t[i[e]] = a
                    }
                    return t.touchstart && t.touchend && t.touchmove
                } catch (e) {
                    return !1
                }
            }
            return {
                createDragger: function(e) {
                    return function(t) {
                        return !L.disabled && (!("move" === e && !L.allowMove) && (A = r(q),
                        se = !0,
                        l(e, o(de.cfilter(t)), !0),
                        t.stopPropagation(),
                        t.preventDefault(),
                        !1))
                    }
                },
                newSelection: function(e) {
                    return v(de.cfilter(e))
                },
                cfilter: function(e) {
                    return e.pageX = e.originalEvent.changedTouches[0].pageX,
                    e.pageY = e.originalEvent.changedTouches[0].pageY,
                    e
                },
                isSupported: e,
                support: function() {
                    return !0 === L.touchSupport || !1 === L.touchSupport ? L.touchSupport : e()
                }()
            }
        }()
          , he = function() {
            function e(e) {
                e = r(e),
                f = u = e[0],
                g = p = e[1]
            }
            function t(e) {
                e = r(e),
                d = e[0] - f,
                h = e[1] - g,
                f = e[0],
                g = e[1]
            }
            function i() {
                return [d, h]
            }
            function s(e) {
                var t = e[0]
                  , i = e[1];
                0 > u + t && (t -= t + u),
                0 > p + i && (i -= i + p),
                G < g + i && (i += G - (g + i)),
                H < f + t && (t += H - (f + t)),
                u += t,
                f += t,
                p += i,
                g += i
            }
            function n(e) {
                var t = a();
                switch (e) {
                case "ne":
                    return [t.x2, t.y];
                case "nw":
                    return [t.x, t.y];
                case "se":
                    return [t.x2, t.y2];
                case "sw":
                    return [t.x, t.y2]
                }
            }
            function a() {
                if (!L.aspectRatio)
                    return c();
                var e, t, i, s, n = L.aspectRatio, a = L.minSize[0] / te, r = L.maxSize[0] / te, d = L.maxSize[1] / ie, h = f - u, m = g - p, v = Math.abs(h), y = Math.abs(m), b = v / y;
                return 0 === r && (r = 10 * H),
                0 === d && (d = 10 * G),
                b < n ? (t = g,
                i = y * n,
                e = h < 0 ? u - i : i + u,
                e < 0 ? (e = 0,
                s = Math.abs((e - u) / n),
                t = m < 0 ? p - s : s + p) : e > H && (e = H,
                s = Math.abs((e - u) / n),
                t = m < 0 ? p - s : s + p)) : (e = f,
                s = v / n,
                t = m < 0 ? p - s : p + s,
                t < 0 ? (t = 0,
                i = Math.abs((t - p) * n),
                e = h < 0 ? u - i : i + u) : t > G && (t = G,
                i = Math.abs(t - p) * n,
                e = h < 0 ? u - i : i + u)),
                e > u ? (e - u < a ? e = u + a : e - u > r && (e = u + r),
                t = t > p ? p + (e - u) / n : p - (e - u) / n) : e < u && (u - e < a ? e = u - a : u - e > r && (e = u - r),
                t = t > p ? p + (u - e) / n : p - (u - e) / n),
                e < 0 ? (u -= e,
                e = 0) : e > H && (u -= e - H,
                e = H),
                t < 0 ? (p -= t,
                t = 0) : t > G && (p -= t - G,
                t = G),
                l(o(u, p, e, t))
            }
            function r(e) {
                return e[0] < 0 && (e[0] = 0),
                e[1] < 0 && (e[1] = 0),
                e[0] > H && (e[0] = H),
                e[1] > G && (e[1] = G),
                [Math.round(e[0]), Math.round(e[1])]
            }
            function o(e, t, i, s) {
                var n = e
                  , a = i
                  , r = t
                  , o = s;
                return i < e && (n = i,
                a = e),
                s < t && (r = s,
                o = t),
                [n, r, a, o]
            }
            function c() {
                var e, t = f - u, i = g - p;
                return Q && Math.abs(t) > Q && (f = t > 0 ? u + Q : u - Q),
                X && Math.abs(i) > X && (g = i > 0 ? p + X : p - X),
                ee / ie && Math.abs(i) < ee / ie && (g = i > 0 ? p + ee / ie : p - ee / ie),
                Z / te && Math.abs(t) < Z / te && (f = t > 0 ? u + Z / te : u - Z / te),
                u < 0 && (f -= u,
                u -= u),
                p < 0 && (g -= p,
                p -= p),
                f < 0 && (u -= f,
                f -= f),
                g < 0 && (p -= g,
                g -= g),
                f > H && (e = f - H,
                u -= e,
                f -= e),
                g > G && (e = g - G,
                p -= e,
                g -= e),
                u > H && (e = u - G,
                g -= e,
                p -= e),
                p > G && (e = p - G,
                g -= e,
                p -= e),
                l(o(u, p, f, g))
            }
            function l(e) {
                return {
                    x: e[0],
                    y: e[1],
                    x2: e[2],
                    y2: e[3],
                    w: e[2] - e[0],
                    h: e[3] - e[1]
                }
            }
            var d, h, u = 0, p = 0, f = 0, g = 0;
            return {
                flipCoords: o,
                setPressed: e,
                setCurrent: t,
                getOffset: i,
                moveOffset: s,
                getCorner: n,
                getFixed: a
            }
        }()
          , ue = function() {
            function t(e, t) {
                f.left.css({
                    height: s(t)
                }),
                f.right.css({
                    height: s(t)
                })
            }
            function i() {
                return n(he.getFixed())
            }
            function n(e) {
                f.top.css({
                    left: s(e.x),
                    width: s(e.w),
                    height: s(e.y)
                }),
                f.bottom.css({
                    top: s(e.y2),
                    left: s(e.x),
                    width: s(e.w),
                    height: s(G - e.y2)
                }),
                f.right.css({
                    left: s(e.x2),
                    width: s(H - e.x2)
                }),
                f.left.css({
                    width: s(e.x)
                })
            }
            function a() {
                return e("<div />").css({
                    position: "absolute",
                    backgroundColor: L.shadeColor || L.bgColor
                }).appendTo(p)
            }
            function r() {
                u || (u = !0,
                p.insertBefore(q),
                i(),
                pe.setBgOpacity(1, 0, 1),
                z.hide(),
                o(L.shadeColor || L.bgColor, 1),
                pe.isAwake() ? l(L.bgOpacity, 1) : l(1, 1))
            }
            function o(e, t) {
                P(h(), e, t)
            }
            function c() {
                u && (p.remove(),
                z.show(),
                u = !1,
                pe.isAwake() ? pe.setBgOpacity(L.bgOpacity, 1, 1) : (pe.setBgOpacity(1, 1, 1),
                pe.disableHandles()),
                P(Y, 0, 1))
            }
            function l(e, t) {
                u && (L.bgFade && !t ? p.animate({
                    opacity: 1 - e
                }, {
                    queue: !1,
                    duration: L.fadeTime
                }) : p.css({
                    opacity: 1 - e
                }))
            }
            function d() {
                L.shade ? r() : c(),
                pe.isAwake() && l(L.bgOpacity)
            }
            function h() {
                return p.children()
            }
            var u = !1
              , p = e("<div />").css({
                position: "absolute",
                zIndex: 240,
                opacity: 0
            })
              , f = {
                top: a(),
                left: a().height(G),
                right: a().height(G),
                bottom: a()
            };
            return {
                update: i,
                updateRaw: n,
                getShades: h,
                setBgColor: o,
                enable: r,
                disable: c,
                resize: t,
                refresh: d,
                opacity: l
            }
        }()
          , pe = function() {
            function t(t) {
                var i = e("<div />").css({
                    position: "absolute",
                    opacity: L.borderOpacity
                }).addClass(n(t));
                return W.append(i),
                i
            }
            function i(t, i) {
                var s = e("<div />").mousedown(p(t)).css({
                    cursor: t + "-resize",
                    position: "absolute",
                    zIndex: i
                }).addClass("ord-" + t);
                return de.support && s.bind("touchstart.jcrop", de.createDragger(t)),
                K.append(s),
                s
            }
            function a(e) {
                var t = L.handleSize
                  , s = i(e, x++).css({
                    opacity: L.handleOpacity
                }).addClass(n("handle"));
                return t && s.width(t).height(t),
                s
            }
            function r(e) {
                return i(e, x++).addClass("jcrop-dragbar")
            }
            function o(e, t) {
                L.shade || z.css({
                    top: s(-t),
                    left: s(-e)
                }),
                J.css({
                    top: s(t),
                    left: s(e)
                })
            }
            function c(e, t) {
                J.width(Math.round(e)).height(Math.round(t))
            }
            function l() {
                var e = he.getFixed();
                he.setPressed([e.x, e.y]),
                he.setCurrent([e.x2, e.y2]),
                d()
            }
            function d(e) {
                if (k)
                    return h(e)
            }
            function h(e) {
                var t = he.getFixed();
                c(t.w, t.h),
                o(t.x, t.y),
                L.shade && ue.updateRaw(t),
                k || f(),
                e ? L.onSelect.call(me, g(t)) : L.onChange.call(me, g(t))
            }
            function u(e, t, i) {
                (k || t) && (L.bgFade && !i ? q.animate({
                    opacity: e
                }, {
                    queue: !1,
                    duration: L.fadeTime
                }) : q.css("opacity", e))
            }
            function f() {
                J.show(),
                L.shade ? ue.opacity(le) : u(le, !0),
                k = !0
            }
            function m() {
                C(),
                J.hide(),
                L.shade ? ue.opacity(1) : u(1),
                k = !1,
                L.onRelease.call(me)
            }
            function v() {
                I && K.show()
            }
            function y() {
                if (I = !0,
                L.allowResize)
                    return K.show(),
                    !0
            }
            function C() {
                I = !1,
                K.hide()
            }
            function w(e) {
                e ? (ne = !0,
                C()) : (ne = !1,
                y())
            }
            function T() {
                w(!1),
                l()
            }
            var k, x = 370, E = {}, _ = {}, D = {}, I = !1;
            L.dragEdges && e.isArray(L.createDragbars) && function(e) {
                var t;
                for (t = 0; t < e.length; t++)
                    D[e[t]] = r(e[t])
            }(L.createDragbars),
            e.isArray(L.createHandles) && function(e) {
                var t;
                for (t = 0; t < e.length; t++)
                    _[e[t]] = a(e[t])
            }(L.createHandles),
            L.drawBorders && e.isArray(L.createBorders) && function(e) {
                var i, s;
                for (s = 0; s < e.length; s++) {
                    switch (e[s]) {
                    case "n":
                        i = "hline";
                        break;
                    case "s":
                        i = "hline bottom";
                        break;
                    case "e":
                        i = "vline right";
                        break;
                    case "w":
                        i = "vline"
                    }
                    E[e[s]] = t(i)
                }
            }(L.createBorders),
            e(document).bind("touchstart.jcrop-ios", function(t) {
                e(t.currentTarget).hasClass("jcrop-tracker") && t.stopPropagation()
            });
            var S = b().mousedown(p("move")).css({
                cursor: "move",
                position: "absolute",
                zIndex: 360
            });
            return de.support && S.bind("touchstart.jcrop", de.createDragger("move")),
            W.append(S),
            C(),
            {
                updateVisible: d,
                update: h,
                release: m,
                refresh: l,
                isAwake: function() {
                    return k
                },
                setCursor: function(e) {
                    S.css("cursor", e)
                },
                enableHandles: y,
                enableOnly: function() {
                    I = !0
                },
                showHandles: v,
                disableHandles: C,
                animMode: w,
                setBgOpacity: u,
                done: T
            }
        }()
          , fe = function() {
            function t(t) {
                oe.css({
                    zIndex: 450
                }),
                t ? e(document).bind("touchmove.jcrop", r).bind("touchend.jcrop", c) : u && e(document).bind("mousemove.jcrop", s).bind("mouseup.jcrop", n)
            }
            function i() {
                oe.css({
                    zIndex: 290
                }),
                e(document).unbind(".jcrop")
            }
            function s(e) {
                return d(o(e)),
                !1
            }
            function n(e) {
                return e.preventDefault(),
                e.stopPropagation(),
                se && (se = !1,
                h(o(e)),
                pe.isAwake() && L.onSelect.call(me, g(he.getFixed())),
                i(),
                d = function() {}
                ,
                h = function() {}
                ),
                !1
            }
            function a(e, i, s) {
                return se = !0,
                d = e,
                h = i,
                t(s),
                !1
            }
            function r(e) {
                return d(o(de.cfilter(e))),
                !1
            }
            function c(e) {
                return n(de.cfilter(e))
            }
            function l(e) {
                oe.css("cursor", e)
            }
            var d = function() {}
              , h = function() {}
              , u = L.trackDocument;
            return u || oe.mousemove(s).mouseup(n).mouseout(n),
            q.before(oe),
            {
                activateHandlers: a,
                setCursor: l
            }
        }()
          , ge = function() {
            function t() {
                L.keySupport && (a.show(),
                a.focus())
            }
            function i(e) {
                a.hide()
            }
            function s(e, t, i) {
                L.allowMove && (he.moveOffset([t, i]),
                pe.updateVisible(!0)),
                e.preventDefault(),
                e.stopPropagation()
            }
            function n(e) {
                if (e.ctrlKey || e.metaKey)
                    return !0;
                ae = !!e.shiftKey;
                var t = ae ? 10 : 1;
                switch (e.keyCode) {
                case 37:
                    s(e, -t, 0);
                    break;
                case 39:
                    s(e, t, 0);
                    break;
                case 38:
                    s(e, 0, -t);
                    break;
                case 40:
                    s(e, 0, t);
                    break;
                case 27:
                    L.allowSelect && pe.release();
                    break;
                case 9:
                    return !0
                }
                return !1
            }
            var a = e('<input type="radio" />').css({
                position: "fixed",
                left: "-120px",
                width: "12px"
            }).addClass("jcrop-keymgr")
              , r = e("<div />").css({
                position: "absolute",
                overflow: "hidden"
            }).append(a);
            return L.keySupport && (a.keydown(n).blur(i),
            O || !L.fixedSupport ? (a.css({
                position: "absolute",
                left: "-20px"
            }),
            r.append(a).insertBefore(q)) : a.insertBefore(q)),
            {
                watchKeys: t
            }
        }();
        de.support && oe.bind("touchstart.jcrop", de.newSelection),
        K.hide(),
        U(!0);
        var me = {
            setImage: $,
            animateTo: w,
            setSelect: T,
            setOptions: _,
            tellSelect: x,
            tellScaled: E,
            setClass: C,
            disable: D,
            enable: I,
            cancel: S,
            release: pe.release,
            destroy: M,
            focus: ge.watchKeys,
            getBounds: function() {
                return [H * te, G * ie]
            },
            getWidgetSize: function() {
                return [H, G]
            },
            getScaleFactor: function() {
                return [te, ie]
            },
            getOptions: function() {
                return L
            },
            ui: {
                holder: Y,
                selection: J
            }
        };
        return R && Y.bind("selectstart", function() {
            return !1
        }),
        B.data("Jcrop", me),
        me
    }
    ,
    e.fn.Jcrop = function(t, i) {
        var s;
        return this.each(function() {
            if (e(this).data("Jcrop")) {
                if ("api" === t)
                    return e(this).data("Jcrop");
                e(this).data("Jcrop").setOptions(t)
            } else
                "IMG" == this.tagName ? e.Jcrop.Loader(this, function() {
                    e(this).css({
                        display: "block",
                        visibility: "hidden"
                    }),
                    s = e.Jcrop(this, t),
                    e.isFunction(i) && i.call(s)
                }) : (e(this).css({
                    display: "block",
                    visibility: "hidden"
                }),
                s = e.Jcrop(this, t),
                e.isFunction(i) && i.call(s))
        }),
        this
    }
    ,
    e.Jcrop.Loader = function(t, i, s) {
        function n() {
            r.complete ? (a.unbind(".jcloader"),
            e.isFunction(i) && i.call(r)) : window.setTimeout(n, 50)
        }
        var a = e(t)
          , r = a[0];
        a.bind("load.jcloader", n).bind("error.jcloader", function(t) {
            a.unbind(".jcloader"),
            e.isFunction(s) && s.call(r)
        }),
        r.complete && e.isFunction(i) && (a.unbind(".jcloader"),
        i.call(r))
    }
    ,
    e.Jcrop.defaults = {
        allowSelect: !0,
        allowMove: !0,
        allowResize: !0,
        trackDocument: !0,
        baseClass: "jcrop",
        addClass: null,
        bgColor: "black",
        bgOpacity: .6,
        bgFade: !1,
        borderOpacity: .4,
        handleOpacity: .5,
        handleSize: null,
        aspectRatio: 0,
        keySupport: !0,
        createHandles: ["n", "s", "e", "w", "nw", "ne", "se", "sw"],
        createDragbars: ["n", "s", "e", "w"],
        createBorders: ["n", "s", "e", "w"],
        drawBorders: !0,
        dragEdges: !0,
        fixedSupport: !0,
        touchSupport: null,
        shade: null,
        boxWidth: 0,
        boxHeight: 0,
        boundary: 2,
        fadeTime: 400,
        animationDelay: 20,
        swingSpeed: 3,
        minSelect: [0, 0],
        maxSize: [0, 0],
        minSize: [0, 0],
        onChange: function(e) {},
        onSelect: function() {},
        onDblClick: function() {},
        onRelease: function() {}
    }
}(jQuery),
function(e) {
    var t = 0
      , i = Array.prototype.slice;
    e.cleanData = function(t) {
        return function(i) {
            var s, n, a;
            for (a = 0; null != (n = i[a]); a++)
                try {
                    (s = e._data(n, "events")) && s.remove && e(n).triggerHandler("remove")
                } catch (e) {}
            t(i)
        }
    }(e.cleanData),
    e.widget = function(t, i, s) {
        var n, a, r, o, c = {}, l = t.split(".")[0];
        return t = t.split(".")[1],
        n = l + "-" + t,
        s || (s = i,
        i = e.Widget),
        e.expr[":"][n.toLowerCase()] = function(t) {
            return !!e.data(t, n)
        }
        ,
        e[l] = e[l] || {},
        a = e[l][t],
        r = e[l][t] = function(e, t) {
            return this._createWidget ? void (arguments.length && this._createWidget(e, t)) : new r(e,t)
        }
        ,
        e.extend(r, a, {
            version: s.version,
            _proto: e.extend({}, s),
            _childConstructors: []
        }),
        o = new i,
        o.options = e.widget.extend({}, o.options),
        e.each(s, function(t, s) {
            return e.isFunction(s) ? void (c[t] = function() {
                var e = function() {
                    return i.prototype[t].apply(this, arguments)
                }
                  , n = function(e) {
                    return i.prototype[t].apply(this, e)
                };
                return function() {
                    var t, i = this._super, a = this._superApply;
                    return this._super = e,
                    this._superApply = n,
                    t = s.apply(this, arguments),
                    this._super = i,
                    this._superApply = a,
                    t
                }
            }()) : void (c[t] = s)
        }),
        r.prototype = e.widget.extend(o, {
            widgetEventPrefix: a ? o.widgetEventPrefix || t : t
        }, c, {
            constructor: r,
            namespace: l,
            widgetName: t,
            widgetFullName: n
        }),
        a ? (e.each(a._childConstructors, function(t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, r, i._proto)
        }),
        delete a._childConstructors) : i._childConstructors.push(r),
        e.widget.bridge(t, r),
        r
    }
    ,
    e.widget.extend = function(t) {
        for (var s, n, a = i.call(arguments, 1), r = 0, o = a.length; o > r; r++)
            for (s in a[r])
                n = a[r][s],
                a[r].hasOwnProperty(s) && void 0 !== n && (t[s] = e.isPlainObject(n) ? e.isPlainObject(t[s]) ? e.widget.extend({}, t[s], n) : e.widget.extend({}, n) : n);
        return t
    }
    ,
    e.widget.bridge = function(t, s) {
        var n = s.prototype.widgetFullName || t;
        e.fn[t] = function(a) {
            var r = "string" == typeof a
              , o = i.call(arguments, 1)
              , c = this;
            return r ? this.each(function() {
                var i, s = e.data(this, n);
                return "instance" === a ? (c = s,
                !1) : s ? e.isFunction(s[a]) && "_" !== a.charAt(0) ? (i = s[a].apply(s, o),
                i !== s && void 0 !== i ? (c = i && i.jquery ? c.pushStack(i.get()) : i,
                !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + a + "'")
            }) : (o.length && (a = e.widget.extend.apply(null, [a].concat(o))),
            this.each(function() {
                var t = e.data(this, n);
                t ? (t.option(a || {}),
                t._init && t._init()) : e.data(this, n, new s(a,this))
            })),
            c
        }
    }
    ,
    e.Widget = function() {}
    ,
    e.Widget._childConstructors = [],
    e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(i, s) {
            s = e(s || this.defaultElement || this)[0],
            this.element = e(s),
            this.uuid = t++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.bindings = e(),
            this.hoverable = e(),
            this.focusable = e(),
            s !== this && (e.data(s, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(e) {
                    e.target === s && this.destroy()
                }
            }),
            this.document = e(s.style ? s.ownerDocument : s.document || s),
            this.window = e(this.document[0].defaultView || this.document[0].parentWindow)),
            this.options = e.widget.extend({}, this.options, this._getCreateOptions(), i),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(),
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(t, i) {
            var s, n, a, r = t;
            if (0 === arguments.length)
                return e.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (r = {},
                s = t.split("."),
                t = s.shift(),
                s.length) {
                    for (n = r[t] = e.widget.extend({}, this.options[t]),
                    a = 0; a < s.length - 1; a++)
                        n[s[a]] = n[s[a]] || {},
                        n = n[s[a]];
                    if (t = s.pop(),
                    1 === arguments.length)
                        return void 0 === n[t] ? null : n[t];
                    n[t] = i
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[t] ? null : this.options[t];
                    r[t] = i
                }
            return this._setOptions(r),
            this
        },
        _setOptions: function(e) {
            var t;
            for (t in e)
                this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t,
            "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t),
            t && (this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus"))),
            this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(t, i, s) {
            var n, a = this;
            "boolean" != typeof t && (s = i,
            i = t,
            t = !1),
            s ? (i = n = e(i),
            this.bindings = this.bindings.add(i)) : (s = i,
            i = this.element,
            n = this.widget()),
            e.each(s, function(s, r) {
                function o() {
                    return t || !0 !== a.options.disabled && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? a[r] : r).apply(a, arguments) : void 0
                }
                "string" != typeof r && (o.guid = r.guid = r.guid || o.guid || e.guid++);
                var c = s.match(/^([\w:-]*)\s*(.*)$/)
                  , l = c[1] + a.eventNamespace
                  , d = c[2];
                d ? n.delegate(d, l, o) : i.bind(l, o)
            })
        },
        _off: function(t, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            t.unbind(i).undelegate(i),
            this.bindings = e(this.bindings.not(t).get()),
            this.focusable = e(this.focusable.not(t).get()),
            this.hoverable = e(this.hoverable.not(t).get())
        },
        _delay: function(e, t) {
            function i() {
                return ("string" == typeof e ? s[e] : e).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t),
            this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t),
            this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, s) {
            var n, a, r = this.options[t];
            if (s = s || {},
            i = e.Event(i),
            i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(),
            i.target = this.element[0],
            a = i.originalEvent)
                for (n in a)
                    n in i || (i[n] = a[n]);
            return this.element.trigger(i, s),
            !(e.isFunction(r) && !1 === r.apply(this.element[0], [i].concat(s)) || i.isDefaultPrevented())
        }
    },
    e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, i) {
        e.Widget.prototype["_" + t] = function(s, n, a) {
            "string" == typeof n && (n = {
                effect: n
            });
            var r, o = n ? !0 === n || "number" == typeof n ? i : n.effect || i : t;
            n = n || {},
            "number" == typeof n && (n = {
                duration: n
            }),
            r = !e.isEmptyObject(n),
            n.complete = a,
            n.delay && s.delay(n.delay),
            r && e.effects && e.effects.effect[o] ? s[t](n) : o !== t && s[o] ? s[o](n.duration, n.easing, a) : s.queue(function(i) {
                e(this)[t](),
                a && a.call(s[0]),
                i()
            })
        }
    }),
    e.widget
}(jQuery),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery)
}(function(e) {
    "use strict";
    var t = 0
      , i = e
      , s = "parseJSON";
    "JSON"in window && "parse"in JSON && (i = JSON,
    s = "parse"),
    e.ajaxTransport("iframe", function(i) {
        if (i.async) {
            var s, n, a, r = i.initialIframeSrc || "javascript:false;";
            return {
                send: function(o, c) {
                    s = e('<form style="display:none;"></form>'),
                    s.attr("accept-charset", i.formAcceptCharset),
                    a = /\?/.test(i.url) ? "&" : "?",
                    "DELETE" === i.type ? (i.url = i.url + a + "_method=DELETE",
                    i.type = "POST") : "PUT" === i.type ? (i.url = i.url + a + "_method=PUT",
                    i.type = "POST") : "PATCH" === i.type && (i.url = i.url + a + "_method=PATCH",
                    i.type = "POST"),
                    t += 1,
                    n = e('<iframe src="' + r + '" name="iframe-transport-' + t + '"></iframe>').bind("load", function() {
                        var t, a = e.isArray(i.paramName) ? i.paramName : [i.paramName];
                        n.unbind("load").bind("load", function() {
                            var t;
                            try {
                                if (t = n.contents(),
                                !t.length || !t[0].firstChild)
                                    throw new Error
                            } catch (e) {
                                t = void 0
                            }
                            c(200, "success", {
                                iframe: t
                            }),
                            e('<iframe src="' + r + '"></iframe>').appendTo(s),
                            window.setTimeout(function() {
                                s.remove()
                            }, 0)
                        }),
                        s.prop("target", n.prop("name")).prop("action", i.url).prop("method", i.type),
                        i.formData && e.each(i.formData, function(t, i) {
                            e('<input type="hidden"/>').prop("name", i.name).val(i.value).appendTo(s)
                        }),
                        i.fileInput && i.fileInput.length && "POST" === i.type && (t = i.fileInput.clone(),
                        i.fileInput.after(function(e) {
                            return t[e]
                        }),
                        i.paramName && i.fileInput.each(function(t) {
                            e(this).prop("name", a[t] || i.paramName)
                        }),
                        s.append(i.fileInput).prop("enctype", "multipart/form-data").prop("encoding", "multipart/form-data"),
                        i.fileInput.removeAttr("form")),
                        s.submit(),
                        t && t.length && i.fileInput.each(function(i, s) {
                            var n = e(t[i]);
                            e(s).prop("name", n.prop("name")).attr("form", n.attr("form")),
                            n.replaceWith(s)
                        })
                    }),
                    s.append(n).appendTo(document.body)
                },
                abort: function() {
                    n && n.unbind("load").prop("src", r),
                    s && s.remove()
                }
            }
        }
    }),
    e.ajaxSetup({
        converters: {
            "iframe text": function(t) {
                return t && e(t[0].body).text()
            },
            "iframe json": function(t) {
                return t && i[s](e(t[0].body).text())
            },
            "iframe html": function(t) {
                return t && e(t[0].body).html()
            },
            "iframe xml": function(t) {
                var i = t && t[0];
                return i && e.isXMLDoc(i) ? i : e.parseXML(i.XMLDocument && i.XMLDocument.xml || e(i.body).html())
            },
            "iframe script": function(t) {
                return t && e.globalEval(e(t[0].body).text())
            }
        }
    })
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "jquery-ui/ui/widget"], e) : "object" == typeof exports ? e(require("jquery"), require("./vendor/jquery.ui.widget")) : e(window.jQuery)
}(function(e) {
    "use strict";
    function t(t) {
        var i = "dragover" === t;
        return function(s) {
            s.dataTransfer = s.originalEvent && s.originalEvent.dataTransfer;
            var n = s.dataTransfer;
            n && -1 !== e.inArray("Files", n.types) && !1 !== this._trigger(t, e.Event(t, {
                delegatedEvent: s
            })) && (s.preventDefault(),
            i && (n.dropEffect = "copy"))
        }
    }
    e.support.fileInput = !(new RegExp("(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))").test(window.navigator.userAgent) || e('<input type="file"/>').prop("disabled")),
    e.support.xhrFileUpload = !(!window.ProgressEvent || !window.FileReader),
    e.support.xhrFormDataFileUpload = !!window.FormData,
    e.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice),
    e.widget("blueimp.fileupload", {
        options: {
            dropZone: e(document),
            pasteZone: void 0,
            fileInput: void 0,
            replaceFileInput: !0,
            paramName: void 0,
            singleFileUploads: !0,
            limitMultiFileUploads: void 0,
            limitMultiFileUploadSize: void 0,
            limitMultiFileUploadSizeOverhead: 512,
            sequentialUploads: !1,
            limitConcurrentUploads: void 0,
            forceIframeTransport: !1,
            redirect: void 0,
            redirectParamName: void 0,
            postMessage: void 0,
            multipart: !0,
            maxChunkSize: void 0,
            uploadedBytes: void 0,
            recalculateProgress: !0,
            progressInterval: 100,
            bitrateInterval: 500,
            autoUpload: !0,
            messages: {
                uploadedBytes: "Uploaded bytes exceed file size"
            },
            i18n: function(t, i) {
                return t = this.messages[t] || t.toString(),
                i && e.each(i, function(e, i) {
                    t = t.replace("{" + e + "}", i)
                }),
                t
            },
            formData: function(e) {
                return e.serializeArray()
            },
            add: function(t, i) {
                if (t.isDefaultPrevented())
                    return !1;
                (i.autoUpload || !1 !== i.autoUpload && e(this).fileupload("option", "autoUpload")) && i.process().done(function() {
                    i.submit()
                })
            },
            processData: !1,
            contentType: !1,
            cache: !1,
            timeout: 0
        },
        _specialOptions: ["fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"],
        _blobSlice: e.support.blobSlice && function() {
            return (this.slice || this.webkitSlice || this.mozSlice).apply(this, arguments)
        }
        ,
        _BitrateTimer: function() {
            this.timestamp = Date.now ? Date.now() : (new Date).getTime(),
            this.loaded = 0,
            this.bitrate = 0,
            this.getBitrate = function(e, t, i) {
                var s = e - this.timestamp;
                return (!this.bitrate || !i || s > i) && (this.bitrate = (t - this.loaded) * (1e3 / s) * 8,
                this.loaded = t,
                this.timestamp = e),
                this.bitrate
            }
        },
        _isXHRUpload: function(t) {
            return !t.forceIframeTransport && (!t.multipart && e.support.xhrFileUpload || e.support.xhrFormDataFileUpload)
        },
        _getFormData: function(t) {
            var i;
            return "function" === e.type(t.formData) ? t.formData(t.form) : e.isArray(t.formData) ? t.formData : "object" === e.type(t.formData) ? (i = [],
            e.each(t.formData, function(e, t) {
                i.push({
                    name: e,
                    value: t
                })
            }),
            i) : []
        },
        _getTotal: function(t) {
            var i = 0;
            return e.each(t, function(e, t) {
                i += t.size || 1
            }),
            i
        },
        _initProgressObject: function(t) {
            var i = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
            t._progress ? e.extend(t._progress, i) : t._progress = i
        },
        _initResponseObject: function(e) {
            var t;
            if (e._response)
                for (t in e._response)
                    e._response.hasOwnProperty(t) && delete e._response[t];
            else
                e._response = {}
        },
        _onProgress: function(t, i) {
            if (t.lengthComputable) {
                var s, n = Date.now ? Date.now() : (new Date).getTime();
                if (i._time && i.progressInterval && n - i._time < i.progressInterval && t.loaded !== t.total)
                    return;
                i._time = n,
                s = Math.floor(t.loaded / t.total * (i.chunkSize || i._progress.total)) + (i.uploadedBytes || 0),
                this._progress.loaded += s - i._progress.loaded,
                this._progress.bitrate = this._bitrateTimer.getBitrate(n, this._progress.loaded, i.bitrateInterval),
                i._progress.loaded = i.loaded = s,
                i._progress.bitrate = i.bitrate = i._bitrateTimer.getBitrate(n, s, i.bitrateInterval),
                this._trigger("progress", e.Event("progress", {
                    delegatedEvent: t
                }), i),
                this._trigger("progressall", e.Event("progressall", {
                    delegatedEvent: t
                }), this._progress)
            }
        },
        _initProgressListener: function(t) {
            var i = this
              , s = t.xhr ? t.xhr() : e.ajaxSettings.xhr();
            s.upload && (e(s.upload).bind("progress", function(e) {
                var s = e.originalEvent;
                e.lengthComputable = s.lengthComputable,
                e.loaded = s.loaded,
                e.total = s.total,
                i._onProgress(e, t)
            }),
            t.xhr = function() {
                return s
            }
            )
        },
        _deinitProgressListener: function(t) {
            var i = t.xhr ? t.xhr() : e.ajaxSettings.xhr();
            i.upload && e(i.upload).unbind("progress")
        },
        _isInstanceOf: function(e, t) {
            return Object.prototype.toString.call(t) === "[object " + e + "]"
        },
        _initXHRData: function(t) {
            var i, s = this, n = t.files[0], a = t.multipart || !e.support.xhrFileUpload, r = "array" === e.type(t.paramName) ? t.paramName[0] : t.paramName;
            t.headers = e.extend({}, t.headers),
            t.contentRange && (t.headers["Content-Range"] = t.contentRange),
            a && !t.blob && this._isInstanceOf("File", n) || (t.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(n.uploadName || n.name) + '"'),
            a ? e.support.xhrFormDataFileUpload && (t.postMessage ? (i = this._getFormData(t),
            t.blob ? i.push({
                name: r,
                value: t.blob
            }) : e.each(t.files, function(s, n) {
                i.push({
                    name: "array" === e.type(t.paramName) && t.paramName[s] || r,
                    value: n
                })
            })) : (s._isInstanceOf("FormData", t.formData) ? i = t.formData : (i = new FormData,
            e.each(this._getFormData(t), function(e, t) {
                i.append(t.name, t.value)
            })),
            t.blob ? i.append(r, t.blob, n.uploadName || n.name) : e.each(t.files, function(n, a) {
                (s._isInstanceOf("File", a) || s._isInstanceOf("Blob", a)) && i.append("array" === e.type(t.paramName) && t.paramName[n] || r, a, a.uploadName || a.name)
            })),
            t.data = i) : (t.contentType = n.type || "application/octet-stream",
            t.data = t.blob || n),
            t.blob = null
        },
        _initIframeSettings: function(t) {
            var i = e("<a></a>").prop("href", t.url).prop("host");
            t.dataType = "iframe " + (t.dataType || ""),
            t.formData = this._getFormData(t),
            t.redirect && i && i !== location.host && t.formData.push({
                name: t.redirectParamName || "redirect",
                value: t.redirect
            })
        },
        _initDataSettings: function(e) {
            this._isXHRUpload(e) ? (this._chunkedUpload(e, !0) || (e.data || this._initXHRData(e),
            this._initProgressListener(e)),
            e.postMessage && (e.dataType = "postmessage " + (e.dataType || ""))) : this._initIframeSettings(e)
        },
        _getParamName: function(t) {
            var i = e(t.fileInput)
              , s = t.paramName;
            return s ? e.isArray(s) || (s = [s]) : (s = [],
            i.each(function() {
                for (var t = e(this), i = t.prop("name") || "files[]", n = (t.prop("files") || [1]).length; n; )
                    s.push(i),
                    n -= 1
            }),
            s.length || (s = [i.prop("name") || "files[]"])),
            s
        },
        _initFormSettings: function(t) {
            t.form && t.form.length || (t.form = e(t.fileInput.prop("form")),
            t.form.length || (t.form = e(this.options.fileInput.prop("form")))),
            t.paramName = this._getParamName(t),
            t.url || (t.url = t.form.prop("action") || location.href),
            t.type = (t.type || "string" === e.type(t.form.prop("method")) && t.form.prop("method") || "").toUpperCase(),
            "POST" !== t.type && "PUT" !== t.type && "PATCH" !== t.type && (t.type = "POST"),
            t.formAcceptCharset || (t.formAcceptCharset = t.form.attr("accept-charset"))
        },
        _getAJAXSettings: function(t) {
            var i = e.extend({}, this.options, t);
            return this._initFormSettings(i),
            this._initDataSettings(i),
            i
        },
        _getDeferredState: function(e) {
            return e.state ? e.state() : e.isResolved() ? "resolved" : e.isRejected() ? "rejected" : "pending"
        },
        _enhancePromise: function(e) {
            return e.success = e.done,
            e.error = e.fail,
            e.complete = e.always,
            e
        },
        _getXHRPromise: function(t, i, s) {
            var n = e.Deferred()
              , a = n.promise();
            return i = i || this.options.context || a,
            !0 === t ? n.resolveWith(i, s) : !1 === t && n.rejectWith(i, s),
            a.abort = n.promise,
            this._enhancePromise(a)
        },
        _addConvenienceMethods: function(t, i) {
            var s = this
              , n = function(t) {
                return e.Deferred().resolveWith(s, t).promise()
            };
            i.process = function(t, a) {
                return (t || a) && (i._processQueue = this._processQueue = (this._processQueue || n([this])).then(function() {
                    return i.errorThrown ? e.Deferred().rejectWith(s, [i]).promise() : n(arguments)
                }).then(t, a)),
                this._processQueue || n([this])
            }
            ,
            i.submit = function() {
                return "pending" !== this.state() && (i.jqXHR = this.jqXHR = !1 !== s._trigger("submit", e.Event("submit", {
                    delegatedEvent: t
                }), this) && s._onSend(t, this)),
                this.jqXHR || s._getXHRPromise()
            }
            ,
            i.abort = function() {
                return this.jqXHR ? this.jqXHR.abort() : (this.errorThrown = "abort",
                s._trigger("fail", null, this),
                s._getXHRPromise(!1))
            }
            ,
            i.state = function() {
                return this.jqXHR ? s._getDeferredState(this.jqXHR) : this._processQueue ? s._getDeferredState(this._processQueue) : void 0
            }
            ,
            i.processing = function() {
                return !this.jqXHR && this._processQueue && "pending" === s._getDeferredState(this._processQueue)
            }
            ,
            i.progress = function() {
                return this._progress
            }
            ,
            i.response = function() {
                return this._response
            }
        },
        _getUploadedBytes: function(e) {
            var t = e.getResponseHeader("Range")
              , i = t && t.split("-")
              , s = i && i.length > 1 && parseInt(i[1], 10);
            return s && s + 1
        },
        _chunkedUpload: function(t, i) {
            t.uploadedBytes = t.uploadedBytes || 0;
            var s, n, a = this, r = t.files[0], o = r.size, c = t.uploadedBytes, l = t.maxChunkSize || o, d = this._blobSlice, h = e.Deferred(), u = h.promise();
            return !(!(this._isXHRUpload(t) && d && (c || ("function" === e.type(l) ? l(t) : l) < o)) || t.data) && (!!i || (c >= o ? (r.error = t.i18n("uploadedBytes"),
            this._getXHRPromise(!1, t.context, [null, "error", r.error])) : (n = function() {
                var i = e.extend({}, t)
                  , u = i._progress.loaded;
                i.blob = d.call(r, c, c + ("function" === e.type(l) ? l(i) : l), r.type),
                i.chunkSize = i.blob.size,
                i.contentRange = "bytes " + c + "-" + (c + i.chunkSize - 1) + "/" + o,
                a._trigger("chunkbeforesend", null, i),
                a._initXHRData(i),
                a._initProgressListener(i),
                s = (!1 !== a._trigger("chunksend", null, i) && e.ajax(i) || a._getXHRPromise(!1, i.context)).done(function(s, r, l) {
                    c = a._getUploadedBytes(l) || c + i.chunkSize,
                    u + i.chunkSize - i._progress.loaded && a._onProgress(e.Event("progress", {
                        lengthComputable: !0,
                        loaded: c - i.uploadedBytes,
                        total: c - i.uploadedBytes
                    }), i),
                    t.uploadedBytes = i.uploadedBytes = c,
                    i.result = s,
                    i.textStatus = r,
                    i.jqXHR = l,
                    a._trigger("chunkdone", null, i),
                    a._trigger("chunkalways", null, i),
                    c < o ? n() : h.resolveWith(i.context, [s, r, l])
                }).fail(function(e, t, s) {
                    i.jqXHR = e,
                    i.textStatus = t,
                    i.errorThrown = s,
                    a._trigger("chunkfail", null, i),
                    a._trigger("chunkalways", null, i),
                    h.rejectWith(i.context, [e, t, s])
                }).always(function() {
                    a._deinitProgressListener(i)
                })
            }
            ,
            this._enhancePromise(u),
            u.abort = function() {
                return s.abort()
            }
            ,
            n(),
            u)))
        },
        _beforeSend: function(e, t) {
            0 === this._active && (this._trigger("start"),
            this._bitrateTimer = new this._BitrateTimer,
            this._progress.loaded = this._progress.total = 0,
            this._progress.bitrate = 0),
            this._initResponseObject(t),
            this._initProgressObject(t),
            t._progress.loaded = t.loaded = t.uploadedBytes || 0,
            t._progress.total = t.total = this._getTotal(t.files) || 1,
            t._progress.bitrate = t.bitrate = 0,
            this._active += 1,
            this._progress.loaded += t.loaded,
            this._progress.total += t.total
        },
        _onDone: function(t, i, s, n) {
            var a = n._progress.total
              , r = n._response;
            n._progress.loaded < a && this._onProgress(e.Event("progress", {
                lengthComputable: !0,
                loaded: a,
                total: a
            }), n),
            r.result = n.result = t,
            r.textStatus = n.textStatus = i,
            r.jqXHR = n.jqXHR = s,
            this._trigger("done", null, n)
        },
        _onFail: function(e, t, i, s) {
            var n = s._response;
            s.recalculateProgress && (this._progress.loaded -= s._progress.loaded,
            this._progress.total -= s._progress.total),
            n.jqXHR = s.jqXHR = e,
            n.textStatus = s.textStatus = t,
            n.errorThrown = s.errorThrown = i,
            this._trigger("fail", null, s)
        },
        _onAlways: function(e, t, i, s) {
            this._trigger("always", null, s)
        },
        _onSend: function(t, i) {
            i.submit || this._addConvenienceMethods(t, i);
            var s, n, a, r, o = this, c = o._getAJAXSettings(i), l = function() {
                return o._sending += 1,
                c._bitrateTimer = new o._BitrateTimer,
                s = s || ((n || !1 === o._trigger("send", e.Event("send", {
                    delegatedEvent: t
                }), c)) && o._getXHRPromise(!1, c.context, n) || o._chunkedUpload(c) || e.ajax(c)).done(function(e, t, i) {
                    o._onDone(e, t, i, c)
                }).fail(function(e, t, i) {
                    o._onFail(e, t, i, c)
                }).always(function(e, t, i) {
                    if (o._deinitProgressListener(c),
                    o._onAlways(e, t, i, c),
                    o._sending -= 1,
                    o._active -= 1,
                    c.limitConcurrentUploads && c.limitConcurrentUploads > o._sending)
                        for (var s = o._slots.shift(); s; ) {
                            if ("pending" === o._getDeferredState(s)) {
                                s.resolve();
                                break
                            }
                            s = o._slots.shift()
                        }
                    0 === o._active && o._trigger("stop")
                })
            };
            return this._beforeSend(t, c),
            this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending ? (this.options.limitConcurrentUploads > 1 ? (a = e.Deferred(),
            this._slots.push(a),
            r = a.then(l)) : (this._sequence = this._sequence.then(l, l),
            r = this._sequence),
            r.abort = function() {
                return n = [void 0, "abort", "abort"],
                s ? s.abort() : (a && a.rejectWith(c.context, n),
                l())
            }
            ,
            this._enhancePromise(r)) : l()
        },
        _onAdd: function(t, i) {
            var s, n, a, r, o = this, c = !0, l = e.extend({}, this.options, i), d = i.files, h = d.length, u = l.limitMultiFileUploads, p = l.limitMultiFileUploadSize, f = l.limitMultiFileUploadSizeOverhead, g = 0, m = this._getParamName(l), v = 0;
            if (!h)
                return !1;
            if (p && void 0 === d[0].size && (p = void 0),
            (l.singleFileUploads || u || p) && this._isXHRUpload(l))
                if (l.singleFileUploads || p || !u)
                    if (!l.singleFileUploads && p)
                        for (a = [],
                        s = [],
                        r = 0; r < h; r += 1)
                            g += d[r].size + f,
                            (r + 1 === h || g + d[r + 1].size + f > p || u && r + 1 - v >= u) && (a.push(d.slice(v, r + 1)),
                            n = m.slice(v, r + 1),
                            n.length || (n = m),
                            s.push(n),
                            v = r + 1,
                            g = 0);
                    else
                        s = m;
                else
                    for (a = [],
                    s = [],
                    r = 0; r < h; r += u)
                        a.push(d.slice(r, r + u)),
                        n = m.slice(r, r + u),
                        n.length || (n = m),
                        s.push(n);
            else
                a = [d],
                s = [m];
            return i.originalFiles = d,
            e.each(a || d, function(n, r) {
                var l = e.extend({}, i);
                return l.files = a ? r : [r],
                l.paramName = s[n],
                o._initResponseObject(l),
                o._initProgressObject(l),
                o._addConvenienceMethods(t, l),
                c = o._trigger("add", e.Event("add", {
                    delegatedEvent: t
                }), l)
            }),
            c
        },
        _replaceFileInput: function(t) {
            var i = t.fileInput
              , s = i.clone(!0)
              , n = i.is(document.activeElement);
            t.fileInputClone = s,
            e("<form></form>").append(s)[0].reset(),
            i.after(s).detach(),
            n && s.focus(),
            e.cleanData(i.unbind("remove")),
            this.options.fileInput = this.options.fileInput.map(function(e, t) {
                return t === i[0] ? s[0] : t
            }),
            i[0] === this.element[0] && (this.element = s)
        },
        _handleFileTreeEntry: function(t, i) {
            var s, n = this, a = e.Deferred(), r = [], o = function(e) {
                e && !e.entry && (e.entry = t),
                a.resolve([e])
            }, c = function(e) {
                n._handleFileTreeEntries(e, i + t.name + "/").done(function(e) {
                    a.resolve(e)
                }).fail(o)
            }, l = function() {
                s.readEntries(function(e) {
                    e.length ? (r = r.concat(e),
                    l()) : c(r)
                }, o)
            };
            return i = i || "",
            t.isFile ? t._file ? (t._file.relativePath = i,
            a.resolve(t._file)) : t.file(function(e) {
                e.relativePath = i,
                a.resolve(e)
            }, o) : t.isDirectory ? (s = t.createReader(),
            l()) : a.resolve([]),
            a.promise()
        },
        _handleFileTreeEntries: function(t, i) {
            var s = this;
            return e.when.apply(e, e.map(t, function(e) {
                return s._handleFileTreeEntry(e, i)
            })).then(function() {
                return Array.prototype.concat.apply([], arguments)
            })
        },
        _getDroppedFiles: function(t) {
            t = t || {};
            var i = t.items;
            return i && i.length && (i[0].webkitGetAsEntry || i[0].getAsEntry) ? this._handleFileTreeEntries(e.map(i, function(e) {
                var t;
                return e.webkitGetAsEntry ? (t = e.webkitGetAsEntry(),
                t && (t._file = e.getAsFile()),
                t) : e.getAsEntry()
            })) : e.Deferred().resolve(e.makeArray(t.files)).promise()
        },
        _getSingleFileInputFiles: function(t) {
            t = e(t);
            var i, s;
            t.prop("webkitEntries") || t.prop("entries");
            if (i = e.makeArray(t.prop("files")),
            i.length)
                void 0 === i[0].name && i[0].fileName && e.each(i, function(e, t) {
                    t.name = t.fileName,
                    t.size = t.fileSize
                });
            else {
                if (!(s = t.prop("value")))
                    return e.Deferred().resolve([]).promise();
                i = [{
                    name: s.replace(/^.*\\/, "")
                }]
            }
            return e.Deferred().resolve(i).promise()
        },
        _getFileInputFiles: function(t) {
            return t instanceof e && 1 !== t.length ? e.when.apply(e, e.map(t, this._getSingleFileInputFiles)).then(function() {
                return Array.prototype.concat.apply([], arguments)
            }) : this._getSingleFileInputFiles(t)
        },
        _onChange: function(t) {
            var i = this
              , s = {
                fileInput: e(t.target),
                form: e(t.target.form)
            };
            this._getFileInputFiles(s.fileInput).always(function(n) {
                s.files = n,
                i.options.replaceFileInput && i._replaceFileInput(s),
                !1 !== i._trigger("change", e.Event("change", {
                    delegatedEvent: t
                }), s) && i._onAdd(t, s)
            })
        },
        _onPaste: function(t) {
            var i = t.originalEvent && t.originalEvent.clipboardData && t.originalEvent.clipboardData.items
              , s = {
                files: []
            };
            i && i.length && (e.each(i, function(e, t) {
                var i = t.getAsFile && t.getAsFile();
                i && s.files.push(i)
            }),
            !1 !== this._trigger("paste", e.Event("paste", {
                delegatedEvent: t
            }), s) && this._onAdd(t, s))
        },
        _onDrop: function(t) {
            t.dataTransfer = t.originalEvent && t.originalEvent.dataTransfer;
            var i = this
              , s = t.dataTransfer
              , n = {};
            s && s.files && s.files.length && (t.preventDefault(),
            this._getDroppedFiles(s).always(function(s) {
                n.files = s,
                !1 !== i._trigger("drop", e.Event("drop", {
                    delegatedEvent: t
                }), n) && i._onAdd(t, n)
            }))
        },
        _onDragOver: t("dragover"),
        _onDragEnter: t("dragenter"),
        _onDragLeave: t("dragleave"),
        _initEventHandlers: function() {
            this._isXHRUpload(this.options) && (this._on(this.options.dropZone, {
                dragover: this._onDragOver,
                drop: this._onDrop,
                dragenter: this._onDragEnter,
                dragleave: this._onDragLeave
            }),
            this._on(this.options.pasteZone, {
                paste: this._onPaste
            })),
            e.support.fileInput && this._on(this.options.fileInput, {
                change: this._onChange
            })
        },
        _destroyEventHandlers: function() {
            this._off(this.options.dropZone, "dragenter dragleave dragover drop"),
            this._off(this.options.pasteZone, "paste"),
            this._off(this.options.fileInput, "change")
        },
        _destroy: function() {
            this._destroyEventHandlers()
        },
        _setOption: function(t, i) {
            var s = -1 !== e.inArray(t, this._specialOptions);
            s && this._destroyEventHandlers(),
            this._super(t, i),
            s && (this._initSpecialOptions(),
            this._initEventHandlers())
        },
        _initSpecialOptions: function() {
            var t = this.options;
            void 0 === t.fileInput ? t.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]') : t.fileInput instanceof e || (t.fileInput = e(t.fileInput)),
            t.dropZone instanceof e || (t.dropZone = e(t.dropZone)),
            t.pasteZone instanceof e || (t.pasteZone = e(t.pasteZone))
        },
        _getRegExp: function(e) {
            var t = e.split("/")
              , i = t.pop();
            return t.shift(),
            new RegExp(t.join("/"),i)
        },
        _isRegExpOption: function(t, i) {
            return "url" !== t && "string" === e.type(i) && /^\/.*\/[igm]{0,3}$/.test(i)
        },
        _initDataAttributes: function() {
            var t = this
              , i = this.options
              , s = this.element.data();
            e.each(this.element[0].attributes, function(e, n) {
                var a, r = n.name.toLowerCase();
                /^data-/.test(r) && (r = r.slice(5).replace(/-[a-z]/g, function(e) {
                    return e.charAt(1).toUpperCase()
                }),
                a = s[r],
                t._isRegExpOption(r, a) && (a = t._getRegExp(a)),
                i[r] = a)
            })
        },
        _create: function() {
            this._initDataAttributes(),
            this._initSpecialOptions(),
            this._slots = [],
            this._sequence = this._getXHRPromise(!0),
            this._sending = this._active = 0,
            this._initProgressObject(this),
            this._initEventHandlers()
        },
        active: function() {
            return this._active
        },
        progress: function() {
            return this._progress
        },
        add: function(t) {
            var i = this;
            t && !this.options.disabled && (t.fileInput && !t.files ? this._getFileInputFiles(t.fileInput).always(function(e) {
                t.files = e,
                i._onAdd(null, t)
            }) : (t.files = e.makeArray(t.files),
            this._onAdd(null, t)))
        },
        send: function(t) {
            if (t && !this.options.disabled) {
                if (t.fileInput && !t.files) {
                    var i, s, n = this, a = e.Deferred(), r = a.promise();
                    return r.abort = function() {
                        return s = !0,
                        i ? i.abort() : (a.reject(null, "abort", "abort"),
                        r)
                    }
                    ,
                    this._getFileInputFiles(t.fileInput).always(function(e) {
                        if (!s) {
                            if (!e.length)
                                return void a.reject();
                            t.files = e,
                            i = n._onSend(null, t),
                            i.then(function(e, t, i) {
                                a.resolve(e, t, i)
                            }, function(e, t, i) {
                                a.reject(e, t, i)
                            })
                        }
                    }),
                    this._enhancePromise(r)
                }
                if (t.files = e.makeArray(t.files),
                t.files.length)
                    return this._onSend(null, t)
            }
            return this._getXHRPromise(!1, t && t.context)
        }
    })
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(e.jQuery)
}(this, function(e) {
    "use strict";
    function t(t) {
        if (n.webkit && !t)
            return {
                height: 0,
                width: 0
            };
        if (!n.data.outer) {
            var i = {
                border: "none",
                "box-sizing": "content-box",
                height: "200px",
                margin: "0",
                padding: "0",
                width: "200px"
            };
            n.data.inner = e("<div>").css(e.extend({}, i)),
            n.data.outer = e("<div>").css(e.extend({
                left: "-1000px",
                overflow: "scroll",
                position: "absolute",
                top: "-1000px"
            }, i)).append(n.data.inner).appendTo("body")
        }
        return n.data.outer.scrollLeft(1e3).scrollTop(1e3),
        {
            height: Math.ceil(n.data.outer.offset().top - n.data.inner.offset().top || 0),
            width: Math.ceil(n.data.outer.offset().left - n.data.inner.offset().left || 0)
        }
    }
    function i() {
        var e = t(!0);
        return !(e.height || e.width)
    }
    function s(e) {
        var t = e.originalEvent;
        return (!t.axis || t.axis !== t.HORIZONTAL_AXIS) && !t.wheelDeltaX
    }
    var n = {
        data: {
            index: 0,
            name: "scrollbar"
        },
        macosx: /mac/i.test(navigator.platform),
        mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
        overlay: null,
        scroll: null,
        scrolls: [],
        webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent)
    };
    n.scrolls.add = function(e) {
        this.remove(e).push(e)
    }
    ,
    n.scrolls.remove = function(t) {
        for (; e.inArray(t, this) >= 0; )
            this.splice(e.inArray(t, this), 1);
        return this
    }
    ;
    var a = {
        autoScrollSize: !0,
        autoUpdate: !0,
        debug: !1,
        disableBodyScroll: !1,
        duration: 200,
        ignoreMobile: !1,
        ignoreOverlay: !1,
        scrollStep: 30,
        showArrows: !1,
        stepScrolling: !0,
        scrollx: null,
        scrolly: null,
        onDestroy: null,
        onInit: null,
        onScroll: null,
        onUpdate: null
    }
      , r = function(s) {
        n.scroll || (n.overlay = i(),
        n.scroll = t(),
        c(),
        e(window).resize(function() {
            var e = !1;
            if (n.scroll && (n.scroll.height || n.scroll.width)) {
                var i = t();
                i.height === n.scroll.height && i.width === n.scroll.width || (n.scroll = i,
                e = !0)
            }
            c(e)
        })),
        this.container = s,
        this.namespace = ".scrollbar_" + n.data.index++,
        this.options = e.extend({}, a, window.jQueryScrollbarOptions || {}),
        this.scrollTo = null,
        this.scrollx = {},
        this.scrolly = {},
        s.data(n.data.name, this),
        n.scrolls.add(this)
    };
    r.prototype = {
        destroy: function() {
            if (this.wrapper) {
                this.container.removeData(n.data.name),
                n.scrolls.remove(this);
                var t = this.container.scrollLeft()
                  , i = this.container.scrollTop();
                this.container.insertBefore(this.wrapper).css({
                    height: "",
                    margin: "",
                    "max-height": ""
                }).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(t).scrollTop(i),
                this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").andSelf().off(this.namespace),
                this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").andSelf().off(this.namespace),
                this.wrapper.remove(),
                e(document).add("body").off(this.namespace),
                e.isFunction(this.options.onDestroy) && this.options.onDestroy.apply(this, [this.container])
            }
        },
        init: function(t) {
            var i = this
              , a = this.container
              , r = this.containerWrapper || a
              , o = this.namespace
              , c = e.extend(this.options, t || {})
              , l = {
                x: this.scrollx,
                y: this.scrolly
            }
              , d = this.wrapper
              , h = {
                scrollLeft: a.scrollLeft(),
                scrollTop: a.scrollTop()
            };
            if (n.mobile && c.ignoreMobile || n.overlay && c.ignoreOverlay || n.macosx && !n.webkit)
                return !1;
            if (d)
                r.css({
                    height: "auto",
                    "margin-bottom": -1 * n.scroll.height + "px",
                    "margin-right": -1 * n.scroll.width + "px",
                    "max-height": ""
                });
            else {
                if (this.wrapper = d = e("<div>").addClass("scroll-wrapper").addClass(a.attr("class")).css("position", "absolute" == a.css("position") ? "absolute" : "relative").insertBefore(a).append(a),
                a.is("textarea") && (this.containerWrapper = r = e("<div>").insertBefore(a).append(a),
                d.addClass("scroll-textarea")),
                r.addClass("scroll-content").css({
                    height: "auto",
                    "margin-bottom": -1 * n.scroll.height + "px",
                    "margin-right": -1 * n.scroll.width + "px",
                    "max-height": ""
                }),
                a.on("scroll" + o, function(t) {
                    e.isFunction(c.onScroll) && c.onScroll.call(i, {
                        maxScroll: l.y.maxScrollOffset,
                        scroll: a.scrollTop(),
                        size: l.y.size,
                        visible: l.y.visible
                    }, {
                        maxScroll: l.x.maxScrollOffset,
                        scroll: a.scrollLeft(),
                        size: l.x.size,
                        visible: l.x.visible
                    }),
                    l.x.isVisible && l.x.scroll.bar.css("left", a.scrollLeft() * l.x.kx + "px"),
                    l.y.isVisible && l.y.scroll.bar.css("top", a.scrollTop() * l.y.kx + "px")
                }),
                d.on("scroll" + o, function() {
                    d.scrollTop(0).scrollLeft(0)
                }),
                c.disableBodyScroll) {
                    var u = function(e) {
                        s(e) ? l.y.isVisible && l.y.mousewheel(e) : l.x.isVisible && l.x.mousewheel(e)
                    };
                    d.on("MozMousePixelScroll" + o, u),
                    d.on("mousewheel" + o, u),
                    n.mobile && d.on("touchstart" + o, function(t) {
                        var i = t.originalEvent.touches && t.originalEvent.touches[0] || t
                          , s = {
                            pageX: i.pageX,
                            pageY: i.pageY
                        }
                          , n = {
                            left: a.scrollLeft(),
                            top: a.scrollTop()
                        };
                        e(document).on("touchmove" + o, function(e) {
                            var t = e.originalEvent.targetTouches && e.originalEvent.targetTouches[0] || e;
                            a.scrollLeft(n.left + s.pageX - t.pageX),
                            a.scrollTop(n.top + s.pageY - t.pageY),
                            e.preventDefault()
                        }),
                        e(document).on("touchend" + o, function() {
                            e(document).off(o)
                        })
                    })
                }
                e.isFunction(c.onInit) && c.onInit.apply(this, [a])
            }
            e.each(l, function(t, n) {
                var r = null
                  , d = 1
                  , h = "x" === t ? "scrollLeft" : "scrollTop"
                  , u = c.scrollStep
                  , p = function() {
                    var e = a[h]();
                    a[h](e + u),
                    1 == d && e + u >= f && (e = a[h]()),
                    -1 == d && e + u <= f && (e = a[h]()),
                    a[h]() == e && r && r()
                }
                  , f = 0;
                n.scroll || (n.scroll = i._getScroll(c["scroll" + t]).addClass("scroll-" + t),
                c.showArrows && n.scroll.addClass("scroll-element_arrows_visible"),
                n.mousewheel = function(e) {
                    if (!n.isVisible || "x" === t && s(e))
                        return !0;
                    if ("y" === t && !s(e))
                        return l.x.mousewheel(e),
                        !0;
                    var r = -1 * e.originalEvent.wheelDelta || e.originalEvent.detail
                      , o = n.size - n.visible - n.offset;
                    return (r > 0 && f < o || r < 0 && f > 0) && (f += r,
                    f < 0 && (f = 0),
                    f > o && (f = o),
                    i.scrollTo = i.scrollTo || {},
                    i.scrollTo[h] = f,
                    setTimeout(function() {
                        i.scrollTo && (a.stop().animate(i.scrollTo, 240, "linear", function() {
                            f = a[h]()
                        }),
                        i.scrollTo = null)
                    }, 1)),
                    e.preventDefault(),
                    !1
                }
                ,
                n.scroll.on("MozMousePixelScroll" + o, n.mousewheel).on("mousewheel" + o, n.mousewheel).on("mouseenter" + o, function() {
                    f = a[h]()
                }),
                n.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown" + o, function(s) {
                    if (1 != s.which)
                        return !0;
                    d = 1;
                    var o = {
                        eventOffset: s["x" === t ? "pageX" : "pageY"],
                        maxScrollValue: n.size - n.visible - n.offset,
                        scrollbarOffset: n.scroll.bar.offset()["x" === t ? "left" : "top"],
                        scrollbarSize: n.scroll.bar["x" === t ? "outerWidth" : "outerHeight"]()
                    }
                      , l = 0
                      , g = 0;
                    return e(this).hasClass("scroll-arrow") ? (d = e(this).hasClass("scroll-arrow_more") ? 1 : -1,
                    u = c.scrollStep * d,
                    f = d > 0 ? o.maxScrollValue : 0) : (d = o.eventOffset > o.scrollbarOffset + o.scrollbarSize ? 1 : o.eventOffset < o.scrollbarOffset ? -1 : 0,
                    u = Math.round(.75 * n.visible) * d,
                    f = o.eventOffset - o.scrollbarOffset - (c.stepScrolling ? 1 == d ? o.scrollbarSize : 0 : Math.round(o.scrollbarSize / 2)),
                    f = a[h]() + f / n.kx),
                    i.scrollTo = i.scrollTo || {},
                    i.scrollTo[h] = c.stepScrolling ? a[h]() + u : f,
                    c.stepScrolling && (r = function() {
                        f = a[h](),
                        clearInterval(g),
                        clearTimeout(l),
                        l = 0,
                        g = 0
                    }
                    ,
                    l = setTimeout(function() {
                        g = setInterval(p, 40)
                    }, c.duration + 100)),
                    setTimeout(function() {
                        i.scrollTo && (a.animate(i.scrollTo, c.duration),
                        i.scrollTo = null)
                    }, 1),
                    i._handleMouseDown(r, s)
                }),
                n.scroll.bar.on("mousedown" + o, function(s) {
                    if (1 != s.which)
                        return !0;
                    var r = s["x" === t ? "pageX" : "pageY"]
                      , c = a[h]();
                    return n.scroll.addClass("scroll-draggable"),
                    e(document).on("mousemove" + o, function(e) {
                        var i = parseInt((e["x" === t ? "pageX" : "pageY"] - r) / n.kx, 10);
                        a[h](c + i)
                    }),
                    i._handleMouseDown(function() {
                        n.scroll.removeClass("scroll-draggable"),
                        f = a[h]()
                    }, s)
                }))
            }),
            e.each(l, function(e, t) {
                var i = "scroll-scroll" + e + "_visible"
                  , s = "x" == e ? l.y : l.x;
                t.scroll.removeClass(i),
                s.scroll.removeClass(i),
                r.removeClass(i)
            }),
            e.each(l, function(t, i) {
                e.extend(i, "x" == t ? {
                    offset: parseInt(a.css("left"), 10) || 0,
                    size: a.prop("scrollWidth"),
                    visible: d.width()
                } : {
                    offset: parseInt(a.css("top"), 10) || 0,
                    size: a.prop("scrollHeight"),
                    visible: d.height()
                })
            }),
            this._updateScroll("x", this.scrollx),
            this._updateScroll("y", this.scrolly),
            e.isFunction(c.onUpdate) && c.onUpdate.apply(this, [a]),
            e.each(l, function(e, t) {
                var i = "x" === e ? "left" : "top"
                  , s = "x" === e ? "outerWidth" : "outerHeight"
                  , n = "x" === e ? "width" : "height"
                  , r = parseInt(a.css(i), 10) || 0
                  , o = t.size
                  , l = t.visible + r
                  , d = t.scroll.size[s]() + (parseInt(t.scroll.size.css(i), 10) || 0);
                c.autoScrollSize && (t.scrollbarSize = parseInt(d * l / o, 10),
                t.scroll.bar.css(n, t.scrollbarSize + "px")),
                t.scrollbarSize = t.scroll.bar[s](),
                t.kx = (d - t.scrollbarSize) / (o - l) || 1,
                t.maxScrollOffset = o - l
            }),
            a.scrollLeft(h.scrollLeft).scrollTop(h.scrollTop).trigger("scroll")
        },
        _getScroll: function(t) {
            var i = {
                advanced: ['<div class="scroll-element">', '<div class="scroll-element_corner"></div>', '<div class="scroll-arrow scroll-arrow_less"></div>', '<div class="scroll-arrow scroll-arrow_more"></div>', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_inner-wrapper">', '<div class="scroll-element_inner scroll-element_track">', '<div class="scroll-element_inner-bottom"></div>', "</div>", "</div>", '<div class="scroll-bar">', '<div class="scroll-bar_body">', '<div class="scroll-bar_body-inner"></div>', "</div>", '<div class="scroll-bar_bottom"></div>', '<div class="scroll-bar_center"></div>', "</div>", "</div>", "</div>"].join(""),
                simple: ['<div class="scroll-element">', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_track"></div>', '<div class="scroll-bar"></div>', "</div>", "</div>"].join("")
            };
            return i[t] && (t = i[t]),
            t || (t = i.simple),
            t = "string" == typeof t ? e(t).appendTo(this.wrapper) : e(t),
            e.extend(t, {
                bar: t.find(".scroll-bar"),
                size: t.find(".scroll-element_size"),
                track: t.find(".scroll-element_track")
            }),
            t
        },
        _handleMouseDown: function(t, i) {
            var s = this.namespace;
            return e(document).on("blur" + s, function() {
                e(document).add("body").off(s),
                t && t()
            }),
            e(document).on("dragstart" + s, function(e) {
                return e.preventDefault(),
                !1
            }),
            e(document).on("mouseup" + s, function() {
                e(document).add("body").off(s),
                t && t()
            }),
            e("body").on("selectstart" + s, function(e) {
                return e.preventDefault(),
                !1
            }),
            i && i.preventDefault(),
            !1
        },
        _updateScroll: function(t, i) {
            var s = this.container
              , a = this.containerWrapper || s
              , r = "scroll-scroll" + t + "_visible"
              , o = "x" === t ? this.scrolly : this.scrollx
              , c = parseInt(this.container.css("x" === t ? "left" : "top"), 10) || 0
              , l = this.wrapper
              , d = i.size
              , h = i.visible + c;
            i.isVisible = d - h > 1,
            i.isVisible ? (i.scroll.addClass(r),
            o.scroll.addClass(r),
            a.addClass(r)) : (i.scroll.removeClass(r),
            o.scroll.removeClass(r),
            a.removeClass(r)),
            "y" === t && (s.is("textarea") || d < h ? a.css({
                height: h + n.scroll.height + "px",
                "max-height": "none"
            }) : a.css({
                "max-height": h + n.scroll.height + "px"
            })),
            i.size == s.prop("scrollWidth") && o.size == s.prop("scrollHeight") && i.visible == l.width() && o.visible == l.height() && i.offset == (parseInt(s.css("left"), 10) || 0) && o.offset == (parseInt(s.css("top"), 10) || 0) || (e.extend(this.scrollx, {
                offset: parseInt(s.css("left"), 10) || 0,
                size: s.prop("scrollWidth"),
                visible: l.width()
            }),
            e.extend(this.scrolly, {
                offset: parseInt(s.css("top"), 10) || 0,
                size: this.container.prop("scrollHeight"),
                visible: l.height()
            }),
            this._updateScroll("x" === t ? "y" : "x", o))
        }
    };
    var o = r;
    e.fn.scrollbar = function(t, i) {
        return "string" != typeof t && (i = t,
        t = "init"),
        void 0 === i && (i = []),
        e.isArray(i) || (i = [i]),
        this.not("body, .scroll-wrapper").each(function() {
            var s = e(this)
              , a = s.data(n.data.name);
            (a || "init" === t) && (a || (a = new o(s)),
            a[t] && a[t].apply(a, i))
        }),
        this
    }
    ,
    e.fn.scrollbar.options = a;
    var c = function() {
        var e = 0
          , t = 0;
        return function(i) {
            var s, a, r, o, l, d, h;
            for (s = 0; s < n.scrolls.length; s++)
                o = n.scrolls[s],
                a = o.container,
                r = o.options,
                l = o.wrapper,
                d = o.scrollx,
                h = o.scrolly,
                (i || r.autoUpdate && l && l.is(":visible") && (a.prop("scrollWidth") != d.size || a.prop("scrollHeight") != h.size || l.width() != d.visible || l.height() != h.visible)) && (o.init(),
                r.debug && (window.console && console.log({
                    scrollHeight: a.prop("scrollHeight") + ":" + o.scrolly.size,
                    scrollWidth: a.prop("scrollWidth") + ":" + o.scrollx.size,
                    visibleHeight: l.height() + ":" + o.scrolly.visible,
                    visibleWidth: l.width() + ":" + o.scrollx.visible
                }, !0),
                t++));
            clearTimeout(e),
            e = setTimeout(c, 300)
        }
    }();
    window.angular && function(e) {
        e.module("jQueryScrollbar", []).provider("jQueryScrollbar", function() {
            var t = a;
            return {
                setOptions: function(i) {
                    e.extend(t, i)
                },
                $get: function() {
                    return {
                        options: e.copy(t)
                    }
                }
            }
        }).directive("jqueryScrollbar", ["jQueryScrollbar", "$parse", function(e, t) {
            return {
                restrict: "AC",
                link: function(i, s, n) {
                    var a = t(n.jqueryScrollbar)
                      , r = a(i);
                    s.scrollbar(r || e.options).on("$destroy", function() {
                        s.scrollbar("destroy")
                    })
                }
            }
        }
        ])
    }(window.angular)
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(window.jQuery)
}(function(e) {
    "use strict";
    var t = "dmUploader"
      , i = {
        PENDING: 0,
        UPLOADING: 1,
        COMPLETED: 2,
        FAILED: 3,
        CANCELLED: 4
    }
      , s = {
        auto: !0,
        queue: !0,
        dnd: !0,
        hookDocument: !0,
        multiple: !0,
        url: document.URL,
        method: "POST",
        extraData: {},
        headers: {},
        dataType: null,
        fieldName: "file",
        maxFileSize: 0,
        allowedTypes: "*",
        extFilter: null,
        onInit: function() {},
        onComplete: function() {},
        onFallbackMode: function() {},
        onNewFile: function() {},
        onBeforeUpload: function() {},
        onUploadProgress: function() {},
        onUploadSuccess: function() {},
        onUploadCanceled: function() {},
        onUploadError: function() {},
        onUploadComplete: function() {},
        onFileTypeError: function() {},
        onFileSizeError: function() {},
        onFileExtError: function() {},
        onDragEnter: function() {},
        onDragLeave: function() {},
        onDocumentDragEnter: function() {},
        onDocumentDragLeave: function() {}
    }
      , n = function(e, t) {
        this.data = e,
        this.widget = t,
        this.jqXHR = null,
        this.status = i.PENDING,
        this.id = Math.random().toString(36).substr(2)
    };
    n.prototype.upload = function() {
        var t = this;
        if (!t.canUpload())
            return t.widget.queueRunning && t.status !== i.UPLOADING && t.widget.processQueue(),
            !1;
        var s = new FormData;
        s.append(t.widget.settings.fieldName, t.data);
        var n = t.widget.settings.extraData;
        return "function" == typeof n && (n = n.call(t.widget.element, t.id)),
        e.each(n, function(e, t) {
            s.append(e, t)
        }),
        t.status = i.UPLOADING,
        t.widget.activeFiles++,
        t.widget.settings.onBeforeUpload.call(t.widget.element, t.id),
        t.jqXHR = e.ajax({
            url: t.widget.settings.url,
            type: t.widget.settings.method,
            dataType: t.widget.settings.dataType,
            data: s,
            headers: t.widget.settings.headers,
            cache: !1,
            contentType: !1,
            processData: !1,
            forceSync: !1,
            xhr: function() {
                return t.getXhr()
            },
            success: function(e) {
                t.onSuccess(e)
            },
            error: function(e, i, s) {
                t.onError(e, i, s)
            },
            complete: function() {
                t.onComplete()
            }
        }),
        !0
    }
    ,
    n.prototype.onSuccess = function(e) {
        this.status = i.COMPLETED,
        this.widget.settings.onUploadSuccess.call(this.widget.element, this.id, e)
    }
    ,
    n.prototype.onError = function(e, t, s) {
        this.status !== i.CANCELLED && (this.status = i.FAILED,
        this.widget.settings.onUploadError.call(this.widget.element, this.id, e, t, s))
    }
    ,
    n.prototype.onComplete = function() {
        this.widget.activeFiles--,
        this.status !== i.CANCELLED && this.widget.settings.onUploadComplete.call(this.widget.element, this.id),
        this.widget.queueRunning ? this.widget.processQueue() : this.widget.settings.queue && 0 === this.widget.activeFiles && this.widget.settings.onComplete.call(this.element)
    }
    ,
    n.prototype.getXhr = function() {
        var t = this
          , i = e.ajaxSettings.xhr();
        return i.upload && i.upload.addEventListener("progress", function(e) {
            var i = 0
              , s = e.loaded || e.position
              , n = e.total || e.totalSize;
            e.lengthComputable && (i = Math.ceil(s / n * 100)),
            t.widget.settings.onUploadProgress.call(t.widget.element, t.id, i)
        }, !1),
        i
    }
    ,
    n.prototype.cancel = function(e) {
        e = void 0 !== e && e;
        var t = this.status;
        return !!(t === i.UPLOADING || e && t === i.PENDING) && (this.status = i.CANCELLED,
        this.widget.settings.onUploadCanceled.call(this.widget.element, this.id),
        t === i.UPLOADING && this.jqXHR.abort(),
        !0)
    }
    ,
    n.prototype.canUpload = function() {
        return this.status === i.PENDING || this.status === i.FAILED
    }
    ;
    var a = function(t, i) {
        return this.element = e(t),
        this.settings = e.extend({}, s, i),
        this.checkSupport() ? (this.init(),
        this) : (alert("您的浏览器版本太低，不支持上传文件"),
        e.error("Browser not supported by jQuery.dmUploader"),
        this.settings.onFallbackMode.call(this.element),
        !1)
    };
    a.prototype.checkSupport = function() {
        return void 0 !== window.FormData && (!new RegExp("/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1.0|2.0|2.5|3.0))/").test(window.navigator.userAgent) && !e('<input type="file" />').prop("disabled"))
    }
    ,
    a.prototype.init = function() {
        var t = this;
        this.queue = [],
        this.queuePos = -1,
        this.queueRunning = !1,
        this.activeFiles = 0,
        this.draggingOver = 0,
        this.draggingOverDoc = 0;
        var i = t.element.is("input[type=file]") ? t.element : t.element.find("input[type=file]");
        return i.length > 0 && (i.prop("multiple", this.settings.multiple),
        i.on("change.dmUploader", function(i) {
            var s = i.target && i.target.files;
            s && s.length && (t.addFiles(s),
            e(this).val(""))
        })),
        this.settings.dnd && this.initDnD(),
        0 !== i.length || this.settings.dnd ? (this.settings.onInit.call(this.element),
        this) : (e.error("Markup error found by jQuery.dmUploader"),
        null)
    }
    ,
    a.prototype.initDnD = function() {
        var t = this;
        t.element.on("drop.dmUploader", function(e) {
            e.preventDefault(),
            t.draggingOver > 0 && (t.draggingOver = 0,
            t.settings.onDragLeave.call(t.element));
            var i = e.originalEvent && e.originalEvent.dataTransfer;
            if (i && i.files && i.files.length) {
                var s = [];
                t.settings.multiple ? s = i.files : s.push(i.files[0]),
                t.addFiles(s)
            }
        }),
        t.element.on("dragenter.dmUploader", function(e) {
            e.preventDefault(),
            0 === t.draggingOver && t.settings.onDragEnter.call(t.element),
            t.draggingOver++
        }),
        t.element.on("dragleave.dmUploader", function(e) {
            e.preventDefault(),
            0 === --t.draggingOver && t.settings.onDragLeave.call(t.element)
        }),
        t.settings.hookDocument && (e(document).off("drop.dmUploader").on("drop.dmUploader", function(e) {
            e.preventDefault(),
            t.draggingOverDoc > 0 && (t.draggingOverDoc = 0,
            t.settings.onDocumentDragLeave.call(t.element))
        }),
        e(document).off("dragenter.dmUploader").on("dragenter.dmUploader", function(e) {
            e.preventDefault(),
            0 === t.draggingOverDoc && t.settings.onDocumentDragEnter.call(t.element),
            t.draggingOverDoc++
        }),
        e(document).off("dragleave.dmUploader").on("dragleave.dmUploader", function(e) {
            e.preventDefault(),
            0 === --t.draggingOverDoc && t.settings.onDocumentDragLeave.call(t.element)
        }),
        e(document).off("dragover.dmUploader").on("dragover.dmUploader", function(e) {
            e.preventDefault()
        }))
    }
    ,
    a.prototype.releaseEvents = function() {
        this.element.off(".dmUploader"),
        this.element.find("input[type=file]").off(".dmUploader"),
        this.settings.hookDocument && e(document).off(".dmUploader")
    }
    ,
    a.prototype.validateFile = function(t) {
        if (this.settings.maxFileSize > 0 && t.size > this.settings.maxFileSize)
            return this.settings.onFileSizeError.call(this.element, t),
            !1;
        if ("*" !== this.settings.allowedTypes && !t.type.match(this.settings.allowedTypes))
            return this.settings.onFileTypeError.call(this.element, t),
            !1;
        if (null !== this.settings.extFilter) {
            var i = t.name.toLowerCase().split(".").pop();
            if (e.inArray(i, this.settings.extFilter) < 0)
                return this.settings.onFileExtError.call(this.element, t),
                !1
        }
        return new n(t,this)
    }
    ,
    a.prototype.addFiles = function(e) {
        for (var t = 0, i = 0; i < e.length; i++) {
            var s = this.validateFile(e[i]);
            if (s) {
                !1 !== this.settings.onNewFile.call(this.element, s.id, s.data) && (this.settings.auto && !this.settings.queue && s.upload(),
                this.queue.push(s),
                t++)
            }
        }
        return 0 === t ? this : (this.settings.auto && this.settings.queue && !this.queueRunning && this.processQueue(),
        this)
    }
    ,
    a.prototype.processQueue = function() {
        return ++this.queuePos >= this.queue.length ? (0 === this.activeFiles && this.settings.onComplete.call(this.element),
        this.queuePos = this.queue.length - 1,
        this.queueRunning = !1,
        !1) : (this.queueRunning = !0,
        this.queue[this.queuePos].upload())
    }
    ,
    a.prototype.restartQueue = function() {
        this.queuePos = -1,
        this.queueRunning = !1,
        this.processQueue()
    }
    ,
    a.prototype.findById = function(e) {
        for (var t = !1, i = 0; i < this.queue.length; i++)
            if (this.queue[i].id === e) {
                t = this.queue[i];
                break
            }
        return t
    }
    ,
    a.prototype.cancelAll = function() {
        var e = this.queueRunning;
        this.queueRunning = !1;
        for (var t = 0; t < this.queue.length; t++)
            this.queue[t].cancel();
        e && this.settings.onComplete.call(this.element)
    }
    ,
    a.prototype.startAll = function() {
        if (this.settings.queue)
            this.restartQueue();
        else
            for (var e = 0; e < this.queue.length; e++)
                this.queue[e].upload()
    }
    ,
    a.prototype.methods = {
        start: function(t) {
            if (this.queueRunning)
                return !1;
            var s = !1;
            return void 0 === t || (s = this.findById(t)) ? s ? (s.status === i.CANCELLED && (s.status = i.PENDING),
            s.upload()) : (this.startAll(),
            !0) : (e.error("File not found in jQuery.dmUploader"),
            !1)
        },
        cancel: function(t) {
            var i = !1;
            return void 0 === t || (i = this.findById(t)) ? i ? i.cancel(!0) : (this.cancelAll(),
            !0) : (e.error("File not found in jQuery.dmUploader"),
            !1)
        },
        reset: function() {
            return this.cancelAll(),
            this.queue = [],
            this.queuePos = -1,
            this.activeFiles = 0,
            !0
        },
        destroy: function() {
            this.cancelAll(),
            this.releaseEvents(),
            this.element.removeData(t)
        }
    },
    e.fn.dmUploader = function(i) {
        var s = arguments;
        if ("string" != typeof i)
            return this.each(function() {
                e.data(this, t) || e.data(this, t, new a(this,i))
            });
        this.each(function() {
            var n = e.data(this, t);
            n instanceof a ? "function" == typeof n.methods[i] ? n.methods[i].apply(n, Array.prototype.slice.call(s, 1)) : e.error("Method " + i + " does not exist in jQuery.dmUploader") : e.error("Unknown plugin data found by jQuery.dmUploader")
        })
    }
}),
"_PAGE"in window && _PAGE.token ? $.ajaxSettings.beforeSend = function(e, t) {
    e.setRequestHeader("token", _PAGE.token)
}
: "_PAGE"in window.top && window.top._PAGE.token && ($.ajaxSettings.beforeSend = function(e, t) {
    e.setRequestHeader("token", window.top._PAGE.token)
}
),
$.ajaxSettings.statusCode = {
    200: function() {},
    602: function() {
        window.top.location.href = "/logout/"
    },
    603: function() {
        window.top.location.href = "/geek/complete/guide.html"
    },
    5003: function() {
        window.top.$ && window.top.$.dialog && $.dialog({
            title: "",
            content: '<div class="captcha-pop-frame"><iframe src="/captcha/popUpCaptcha"></iframe></div>',
            closeText: !0,
            confirmText: !1,
            cancelText: !1,
            wrapClass: "dialog-captcha-pop",
            lock: !0,
            onOpen: function(e) {
                try {
                    _T.sendEvent("captcha_dialog_show")
                } catch (e) {}
            },
            onClose: function() {
                try {
                    _T.sendEvent("captcha_dialog_hide")
                } catch (e) {}
            },
            onConfirm: function(e) {}
        })
    }
};
var browser = {
    versions: function() {
        var e = navigator.userAgent;
        navigator.appVersion;
        return {
            trident: e.indexOf("Trident") > -1,
            presto: e.indexOf("Presto") > -1,
            webKit: e.indexOf("AppleWebKit") > -1,
            gecko: e.indexOf("Gecko") > -1 && -1 == e.indexOf("KHTML"),
            mobile: !!e.match(/AppleWebKit.*Mobile.*/),
            ios: !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            android: e.indexOf("Android") > -1 || e.indexOf("Adr") > -1,
            iPhone: e.indexOf("iPhone") > -1,
            iPad: e.indexOf("iPad") > -1,
            webApp: -1 == e.indexOf("Safari"),
            weixin: e.indexOf("MicroMessenger") > -1,
            qq: " qq" == e.match(/\sQQ/i)
        }
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
  , VerrifyCode = window.VerrifyCode || function() {
    var e = new Date
      , t = e.getFullYear() + "" + e.getMonth() + e.getDay()
      , i = function(e, i) {
        seriesLoadScripts("//g.alicdn.com/sd/ncpc/nc.js?t=" + t, function() {
            var t = ["BOSS_PC", (new Date).getTime(), Math.random().toString(16)].join(":")
              , s = {
                renderTo: "#" + e.id,
                appkey: e.appkey || "FFFF0N00000000006DC1",
                scene: e.scene || "nc_login",
                token: t,
                customWidth: i.find(".row-code").width(),
                trans: {
                    position: "sign-sms"
                },
                elementID: ["sign-sms"],
                is_Opt: 0,
                language: "cn",
                isEnabled: !0,
                timeout: 3e3,
                times: 5,
                apimap: {},
                callback: function(e) {
                    i.find("input[name=csig]").length || (i.find("form").append('<input type="hidden" name="csig" />'),
                    i.find("form").append('<input type="hidden" name="ctoken" />'),
                    i.find("form").append('<input type="hidden" name="csessionId" />'),
                    i.find("form").append('<input type="hidden" value="FFFF0N00000000006DC1" name="cappKey" />'),
                    i.find("form").append('<input type="hidden" value="nc_login" name="cscene" />')),
                    i.find("input[name=csig]").val(e.sig),
                    i.find("input[name=ctoken]").val(t),
                    i.find("input[name=csessionId]").val(e.csessionid)
                }
            };
            new noCaptcha(s).upLang("cn", {
                _startTEXT: "请按住滑块，拖动到最右边",
                _yesTEXT: "验证通过",
                _error300: '哎呀，出错了，点击<a href="javascript:__nc.reset()">刷新</a>再来一次',
                _errorNetwork: '网络不给力，请<a href="javascript:__nc.reset()">点击刷新</a>'
            })
        })
    }
      , s = function(e, i) {
        seriesLoadScripts("//g.alicdn.com/sd/nch5/index.js?t=" + t, function() {
            var t = ["BOSS_H5", (new Date).getTime(), Math.random().toString(16)].join(":")
              , s = NoCaptcha.init({
                renderTo: "#" + e.id,
                appkey: e.appkey || "FFFF0N00000000006DC1",
                scene: "nc_login_h5",
                token: t,
                customWidth: "100%",
                trans: {
                    position: "sign-h5"
                },
                elementID: ["sign-h5"],
                is_Opt: 0,
                language: "cn",
                timeout: 1e4,
                retryTimes: 5,
                errorTimes: 5,
                inline: !1,
                apimap: {},
                bannerHidden: !1,
                initHidden: !1,
                callback: function(e) {
                    i.find("input[name=csig]").length || (i.find("form").append('<input type="hidden" name="csig" />'),
                    i.find("form").append('<input type="hidden" name="ctoken" />'),
                    i.find("form").append('<input type="hidden" name="csessionId" />'),
                    i.find("form").append('<input type="hidden" value="FFFF0N00000000006DC1" name="cappKey" />'),
                    i.find("form").append('<input type="hidden" value="nc_login" name="cscene" />')),
                    i.find("input[name=csig]").val(e.sig),
                    i.find("input[name=ctoken]").val(t),
                    i.find("input[name=csessionId]").val(e.csessionid)
                },
                error: function(e) {}
            });
            NoCaptcha.setEnabled(!0),
            s.reset(),
            NoCaptcha.upLang("cn", {
                LOADING: "加载中...",
                SLIDER_LABEL: "请向右滑动验证",
                CHECK_Y: "验证通过",
                CHECK_N: "验证未通过"
            })
        })
    }
      , n = function(e, t) {
        var n = e || {}
          , a = t || $(".sign-form:visible");
        if (e || (n.id = a.find(".row-code").attr("id"),
        n.scene = a.find("input[name=cscene]").val(),
        n.appkey = a.find("input[name=cappKey]").val()),
        !n.id)
            return !1;
        browser.versions.mobile ? s(n, a) : i(n, a)
    }
      , a = function(e) {
        if (!e || !e.length)
            return !1;
        var t = e.parents(".sign-form").length ? e.parents(".sign-form") : e.parents("form")
          , i = "verrify" + Math.random().toString(32).substr(-6, 6);
        console.log(t),
        t.find("input[name=csig]").val(""),
        t.find("input[name=ctoken]").val(""),
        t.find("input[name=csessionId]").val(""),
        e.empty(),
        e.attr("id", i),
        n({
            id: i,
            scene: t.find("input[name=cscene]").val(),
            appkey: t.find("input[name=cappKey]").val()
        }, t)
    }
      , r = function() {
        $(".sign-form .row-code").each(function() {
            a($(this))
        })
    };
    return r(),
    {
        build: r,
        reset: a
    }
}()
  , mediator = mediator || new EventManger
  , CoopAssist = function() {
    var e = null;
    return {
        move: function(t, i) {
            e = t,
            Menu.sideEl.find(".menu-colleague a").attr("data-url", "/enterprise/colleague/list.html?uid=" + e + "&name=" + encodeURIComponent(i)).click()
        },
        getId: function() {
            return e
        },
        clear: function() {
            e = null
        }
    }
}();
!function() {
    var e, t = {
        get: {
            remarks: function(e) {
                var t = $.Deferred();
                return $.get("/enterprise/remark/listdata.json", e).success(function(e) {
                    1 == e.rescode ? (e.data = e.data || [],
                    e.total = e.data.length,
                    t.resolve(e)) : (alert(e.resmsg),
                    t.reject(e))
                }).error(function() {
                    t.reject()
                }),
                t
            },
            colleague: function(e) {
                var t = $.Deferred();
                return $.get("/boss/share/geek/matelist.json", e).success(function(e) {
                    if (1 == e.rescode) {
                        var i = {
                            page: e.data.page,
                            hasMore: e.data.hasMore,
                            mateList: e.data.mateList,
                            resume: e.resume,
                            history: e.history || {
                                portrait: "/v2/web/boss/images/figure.png",
                                name: ""
                            },
                            records: e.records || !0,
                            canShareMsg: e.canShareMsg
                        };
                        t.resolve(i)
                    } else
                        t.reject(e),
                        alert(e.resmsg)
                }).error(function() {
                    t.reject()
                }),
                t
            }
        },
        post: {
            remarks: function(e) {
                var t = $.Deferred();
                return $.post("/enterprise/remark/publish.json", e).success(function(e) {
                    1 == e.rescode ? t.resolve(e.data) : (alert(e.resmsg),
                    t.reject(e.data))
                }).error(function(e) {
                    t.reject()
                }),
                t
            },
            remove: function(e) {
                var t = $.Deferred();
                return $.post("/enterprise/remark/delete.json", e).success(function(e) {
                    1 == e.rescode ? t.resolve(e.resmsg) : alert(e.resmsg)
                }),
                t
            },
            forward: function(e) {
                var t = $.Deferred();
                return $.post("/chat/shareGeek.json", e).success(function(e) {
                    1 == e.rescode ? t.resolve(e.resmsg) : alert(e.resmsg)
                }),
                t
            }
        }
    }, i = function(e) {
        for (var t = 0; t < e.data.length; t++)
            e.data[t].title = e.data[t].title.replace(/</g, "&#60;").replace(/>/g, "&#62;"),
            e.data[t].remarks = e.data[t].remarks.replace(/</g, "&#60;").replace(/>/g, "&#62;");
        return Utemplate('<%if(this.total != 0 && this.total != this.data.length){%><p class="remarks-total"><a href="javascript:;">显示全部（<span><%this.total%></span>条）</a></p><%}%><ul><%for(var i=0;i<this.data.length;i++) {%><li><img src="<%this.data[i].portrait%>"><div><p class="action"><%this.data[i].title%></p><%if(this.data[i].remarks != ""){%><p class="gray"><%this.data[i].remarks%></p><%}%><p class="operat"><%this.data[i].date%><%if(this.data[i].operation) {%><a href="javascript:;" data-id="<%this.data[i].id%>">删除</a><%}%></p></div></li><%}%></ul>', e)
    }, s = function(e) {
        return Utemplate('<div class="coop-portrait"><img src="<%this.history.portrait%>" /><%if(this.history.name == ""){%><%}%><p>转发牛人<span><%if(this.history.name != ""){%>给 <%}%><%this.history.name%></span></p></div><p class="showInput"><a href="javascript:">选择BOSS</a></p><div class="coop-search"><div class="coop-input"><input class="ipt" placeholder="姓名、职位、邮箱" type="text" name=""><i class="coop-icon-search"></i><i class="icon-selecter-close"></i></div><div class="dl-lists"><dl></dl><div class="dl-loadmore">正在加载</div></div></div><textarea placeholder="请输入转发留言"></textarea><ul class="check-list"><%if(this.records && this.canShareMsg){%><li><label class="checkbox"><input type="checkbox" checked name="coop-chat" value="manual"/><span>连同聊天记录一并转发</span></label></li><%}%><%if(this.resume){%><li><label class="checkbox"><input type="checkbox" checked name="coop-resume" value="manual"/><span>将获得的附件简历一并转发</span></label></li><%}%></ul><div style="text-align:center;"><a ka="geek_coop_forward" class="btn btn-forward" style="width:60px;margin-right:0;" href="javascript:;">转发</a></div>', e)
    }, n = function(e) {
        if (e.cooperate < 1)
            return '<div class="coop-forward coop-wrap only"></div><div class="coop-pop-footer"><a ka="geek_coop_forwar_tab" data-wrap="coop-forward" data-wrap="coop-remarks" class="forward active" href="javascript:;">转发给同事</a></div>';
        return '<div class="coop-intro coop-wrap"><h3>在这里您可以 </h3><p>把ta转发给同事，<br />对ta进行备注并且和同事共享，<br />了解同事是否和ta已经 沟通过。</p><a href="/chat/im?mu=/enterprise/colleague/list.html">管理我的同事<i class="arrow-right"></i></a></div><div class="coop-forward coop-wrap"></div><div class="coop-remarks coop-wrap"><div class="remark-list"></div><div class="remarks-btns remarks-oprate"><a href="javascript:" class="showRemark">写备注</a></div><div class="remarks-submit"><ul><li><img class="cur_portrait" style="margin-top:0;" src=""><div class="remarks-textarea"><textarea placeholder="请输入备注信息"></textarea></div></li></ul><div class="remark-bnts"><span class="gray"><i class="text-count">0</i>/50</span><a ka="geek_coop_remark_save" class="fr btn saveRemark" href="javascript:;">保存</a><a ka="geek_coop_remark_cancel" class="fr btn btn-slight cancelRemark" href="javascript:;">取消</a></div></div></div><div class="coop-pop-footer"><a ka="geek_coop_info_tab" data-wrap="coop-intro" class="descrip" href="javascript:;"></a><a ka="geek_coop_forwar_tab" data-wrap="coop-forward" data-wrap="coop-remarks" class="forward" href="javascript:;">转发给同事</a><a ka="geep_coop_remark_tab" data-wrap="coop-remarks" data-wrap="coop-remarks" class="remark active" href="javascript:;">备注</a></div>'
    }, a = function(e) {
        var e = {
            data: e
        };
        return Utemplate('<%if(!this.data){%><dt class="gray blank">没有符合条件的同事</dt><dd class="tip"><span>1. 同事的公司全称需与您一致</span><span>2. 同事需发布至少一个在线职位</span><span>3. 确保你输入的搜索信息与该同事的信息一致</span></dd><%}%><%if(this.data){%><%for(var i=0;i<this.data.length;i++){%><dd data-id="<%this.data[i].encryptUserId%>"><%this.data[i].name%><em class="vline"></em><%this.data[i].title%><em class="vline"></em><%this.data[i].mail%><%if(this.data[i].mail ==""){%>-<%}%></dd><%}%><%}%>', e)
    }, r = function(e) {
        var i = this
          , s = {}
          , n = {
            add: !1,
            remove: !1
        }
          , a = function() {
            return {
                total: s.data.length,
                data: s.data.filter(function(e) {
                    return e.star || 1 == e.own
                })
            }
        }
          , r = function(e) {
            for (var t = 0; t < s.data.length; t++)
                s.data[t].id == e && s.data.splice(t, 1)
        };
        this.add = function(i) {
            if (n.add)
                return !1;
            n.add = !0,
            t.post.remarks(i).then(function(t) {
                s.data = s.data || [],
                s.data.push(t),
                e.publish("REMARKS_CHANGED", {
                    action: "add"
                }),
                n.add = !1
            }, function() {
                n.add = !1
            })
        }
        ,
        this.remove = function(i) {
            if (n.remove)
                return !1;
            n.remove = !0,
            t.post.remove(i).then(function() {
                r(i.remarkId),
                e.publish("REMARKS_CHANGED", {
                    action: "remove"
                }),
                n.remove = !1
            }, function() {
                n.remove = !1
            })
        }
        ,
        this.star = function(e, n, r) {
            if (s.data && !n)
                return r(a());
            t.get.remarks({
                geek: e.geek
            }).then(function(t) {
                return 1 == t.rescode ? (s = t,
                a().data.length > 0 ? r(a()) : i.all(e, !1, r)) : r({
                    total: 0,
                    data: []
                })
            }, function() {
                return r({
                    error: !0
                })
            })
        }
        ,
        this.all = function(e, t, i) {
            return i({
                total: s.data.length,
                data: s.data
            })
        }
    }, o = function(t, s) {
        function n(e) {
            var s = $(".remark-list");
            e && "add" == e.action && $(".coop-remarks .remarks-textarea textarea").val("").trigger("input");
            var n = function(e) {
                e.total > 0 ? $(".icon-coop[data-uid='" + a.geekId + "']").addClass("fill") : $(".icon-coop[data-uid='" + a.geekId + "']").removeClass("fill")
            };
            (r ? t.star : t.all)(a, !1, function(e) {
                s.empty().html(i(e)),
                n(e),
                s.scrollTop(s.find("ul").height())
            })
        }
        var a = {}
          , r = !0
          , o = function(i) {
            i.find(".remark-list");
            i.on("click", ".remarks-total a", function() {
                r = !1,
                n()
            }),
            i.on("click", ".remark-list .operat a", function() {
                t.remove({
                    remarkId: $(this).attr("data-id"),
                    geek: a.geek
                })
            }),
            i.on("click", ".link-op", function() {
                e.close(),
                CoopAssist.move($(this).attr("data-id"), $(this).text())
            }),
            i.on("click", ".showRemark", function() {
                i.find(".remarks-oprate").hide(),
                i.find(".remarks-submit").show(),
                i.find(".remark-list").css("max-height", 244).scrollTop(i.find(".remark-list ul").height())
            }),
            i.on("click", ".cancelRemark", function() {
                i.find(".remark-list li").length > 0 && (i.find(".remarks-oprate").show(),
                i.find(".remarks-submit").hide(),
                i.find(".remark-list").css("max-height", 364)),
                i.find(".remarks-textarea textarea").val("").trigger("input")
            }),
            i.on("click", ".saveRemark", function() {
                var e = $.trim(i.find(".remarks-textarea textarea").val());
                if ("" == e)
                    return alert("请填写备注信息"),
                    !1;
                if ($(this).hasClass("disabled"))
                    return !1;
                var s = e.replace(/\n/g, "<br/>").replace(/\s/g, "&nbsp;")
                  , n = {
                    remark: s,
                    geek: a.geek
                };
                t.add(n)
            }),
            i.on("input", ".remarks-textarea textarea", function() {
                var e = PageSet.getLength($(this).val().trim())
                  , t = $(".coop-remarks .text-count");
                e > 50 ? (t.text(e).addClass("red"),
                i.find(".saveRemark").addClass("disabled")) : (t.text(e).removeClass("red"),
                i.find(".saveRemark").removeClass("disabled"))
            })
        };
        s.subscribe("REMARKS_CHANGED", n),
        this.render = function(e, s) {
            a = s,
            $(".cur_portrait").attr("src", window.top.$(".side-menu .figure img").attr("src")),
            o(e),
            t.star(a, !0, function(t) {
                try {
                    var s = "funcn_click_" + t.total;
                    _T.sendEvent(s)
                } catch (e) {}
                return t.error ? (e.find(".coop-remarks").html("<p style='padding-bottom: 30px;'>加载错误<br></p>"),
                !1) : 0 == t.total ? ($(".coop-pop-footer .descrip").trigger("click"),
                e.find(".showRemark").trigger("click"),
                !1) : (e.find(".coop-remarks .remark-list").html(i(t)),
                void $(".remark-list").scrollTop($(".remark-list ul").height()))
            })
        }
    }, c = function() {
        var e, i = !1, n = {}, r = !1, o = [], c = {}, l = {
            forward: !1
        }, d = this, h = function(e, t) {
            var i = function(t) {
                var i = t
                  , s = new RegExp(e,"g");
                return $.each(i, function(t) {
                    i[t] = i[t].replace(s, '<u class="h">' + e + "</u>")
                }),
                i.join('<em class="vline"></em>')
            };
            $.each(t, function() {
                var e = $(this).html().split('<em class="vline"></em>');
                e.length > 1 && $(this).html(i(e))
            })
        }, u = function(e) {
            var t = e
              , i = $(a(t));
            n.$query && h(n.$query, i),
            n.mateList && n.mateList.length ? $(".coop-forward .coop-search dl").append(i) : $(".coop-forward .coop-search dl").empty().html(i)
        }, p = function(e) {
            for (var t, i = 0; i < o.length; i++)
                o[i].encryptUserId == e && (t = o[i]);
            return t
        };
        this.isVisiable = function(e) {
            var t = e.getBoundingClientRect();
            return t.top > 0 && window.innerHeight - t.top > 0 || t.top <= 0 && t.bottom >= 0
        }
        ;
        var f = function(e, t) {
            var i = ["正在加载", "没有更多了", "加载更多"]
              , s = $(".coop-forward .coop-search .dl-loadmore");
            t ? s.hide() : s.html(i[e]).show()
        }
          , g = function() {
            n.mateList = new Array,
            n.$query = "",
            d.__isLoading = !1,
            d.__hasMore = !0,
            d.__page = 1,
            o = [],
            $(".coop-forward .coop-search dl").empty()
        }
          , m = function() {
            if (d.__hasMore && !d.__isLoading) {
                f(0, !0),
                d.__isLoading = !0;
                var e = $.Deferred()
                  , i = {
                    geek: d.geekId,
                    page: d.__page,
                    query: n.$query.toLowerCase()
                };
                return t.get.colleague(i).then(function(t) {
                    if (e.resolve(t),
                    d.__page = t.page + 1,
                    d.__hasMore = t.hasMore,
                    d.__isLoading = !1,
                    r = !1,
                    t.mateList && t.mateList.length)
                        for (var i = 0; i < t.mateList.length; i++)
                            o.push(t.mateList[i]);
                    n = $.extend(n, t)
                }, function() {
                    e.reject(),
                    d.__isLoading = !1
                }),
                e
            }
        }
          , v = function() {
            m().then(function(e) {
                u(e.mateList);
                var t = e.hasMore ? 2 : 1;
                e.mateList ? f(t) : f(0, !0)
            })
        }
          , y = function(i) {
            var i = i.find(".coop-forward");
            i.off();
            var s = i.find(".coop-input input");
            i.on("focus", ".coop-input input", function() {
                r = !0;
                var e = $(this).val();
                g(),
                n.$query = e,
                v(),
                i.find(".coop-search .dl-lists").show(),
                e.length > 0 ? (i.find(".coop-icon-search").hide(),
                i.find(".icon-selecter-close").show()) : (i.find(".coop-icon-search").show(),
                i.find(".icon-selecter-close").hide())
            }),
            i.on("click", ".showInput a", function(e) {
                return $(".showInput").hide(),
                $(".coop-search").show(),
                $(".coop-search .coop-input input").focus(),
                e.preventDefault(),
                !1
            }),
            i.on("click", function() {
                i.find(".showInput").show(),
                i.find(".coop-search").hide()
            }),
            i.on("click", ".coop-search", function(e) {
                return e.preventDefault(),
                !1
            }),
            i.on("click", ".coop-search dd:not(.tip)", function(e) {
                var t = p($(this).attr("data-id"));
                return n.history = t,
                s.val(t.name),
                i.find(".coop-portrait img").attr("src", t.portrait),
                i.find(".coop-portrait span").text("给 " + t.name),
                $(".showInput").show(),
                $(".coop-search").hide(),
                e.preventDefault(),
                !1
            }),
            i.on("input", ".coop-input input", function() {
                var e = $(this).val().trim();
                e.length > 0 ? (i.find(".coop-icon-search").hide(),
                i.find(".icon-selecter-close").show()) : (i.find(".coop-icon-search").show(),
                i.find(".icon-selecter-close").hide()),
                g(),
                n.$query = e,
                v()
            }),
            i.on("click", ".icon-selecter-close", function() {
                i.find(".coop-icon-search").show(),
                i.find(".icon-selecter-close").hide(),
                s.val(""),
                g(),
                v()
            }),
            i.on("click", ".btn-forward", function() {
                if (!n.history.encryptUserId)
                    return alert("请选择一位同事"),
                    !1;
                if (l.forward)
                    return !1;
                l.forward = !0;
                var i = $(".coop-forward textarea").val().trim()
                  , s = {
                    toId: n.history.encryptUserId,
                    geekId: c.geekId,
                    expectId: c.expectId,
                    shareNote: i,
                    canShareMsg: $("input[name='coop-chat']").is(":checked") ? 1 : 0,
                    shareResume: $("input[name='coop-resume']").is(":checked") ? 1 : 0
                };
                t.post.forward(s).then(function() {
                    1 == localStorage.getItem("send_notips") ? Prompt("转发成功", 1) : $.dialog({
                        type: "info",
                        title: "转发成功",
                        content: '<div class="tip-text">已直接为你和同事创建了协同群聊会话，可方便进一步沟通协作</div><div><input class="send-notips" type="checkbox">  不再提示</div>',
                        closeText: !0,
                        confirmText: "知道了",
                        cancelText: "",
                        closeLayer: !1,
                        wrapClass: "dialog-icons-default",
                        lock: !0,
                        onConfirm: function(e) {
                            console.log(e.find(".send-notips:checked").length),
                            e.find(".send-notips:checked").length && localStorage.setItem("send_notips", 1),
                            e.remove()
                        }
                    }),
                    e && e.close(),
                    l.forward = !1
                }, function() {
                    l.forward = !1
                })
            }),
            i.find(".coop-search .dl-lists").off("scroll").on("scroll", function() {
                r || (d.timer && clearTimeout(d.timer),
                d.timer = setTimeout(function() {
                    var e = $(".coop-forward .coop-search .dl-loadmore").get(0);
                    !d.__isLoading && d.isVisiable(e) && d.__hasMore && v()
                }, 200))
            })
        };
        this.render = function(a, r, l) {
            c = $.extend({}, r),
            e = l,
            d.geekId = c.geek,
            d.__isLoading = !1,
            d.__hasMore = !0,
            d.__page = 1,
            n.$query = "",
            t.get.colleague({
                geek: c.geek,
                page: d.__page
            }).then(function(e) {
                n = $.extend({}, e),
                o = e.mateList,
                a.find(".coop-forward").html(s(n)),
                y(a),
                u(n.mateList);
                var t = e.hasMore ? 2 : 1;
                e.mateList ? f(t) : f(0, !0)
            }, function() {
                a.find(".coop-forward").html("<p style='padding-bottom: 30px;'>加载错误<br></p>")
            }),
            i = !0
        }
    }, l = new EventManger, d = new r(l), h = new o(d,l), u = new c;
    mediator.subscribe("COOP_POP_INIT", function(t) {
        var i = $.extend({}, t);
        e = $.confirm({
            title: !1,
            content: n(i),
            columnClass: "coop-stage pop-stage prop-pop",
            closeIcon: !0,
            cancelButton: !1,
            confirmButton: !1,
            onOpen: function() {
                var e = this
                  , t = this.$content;
                t.find(".coop-pop-footer a").off("click").on("click", function() {
                    var s = $(this).attr("data-wrap");
                    t.find(".coop-wrap").hide(),
                    $("." + s).show(),
                    t.find(".coop-pop-footer .active").removeClass("active"),
                    $(this).addClass("active"),
                    "coop-forward" == s && u.render(t, i, e)
                }),
                i.cooperate > 0 ? h.render(t, i) : u.render(t, i, e)
            }
        })
    }),
    $(document).ready(function() {
        $(document).on("click", ".icon-coop", function() {
            var e = $(this);
            e.closest("#recommend-list").length && localStorageInstance("recommend-pos", $("#container").scrollTop()),
            e.attr("data-uid") && "" != e.attr("data-uid") && mediator.publish("COOP_POP_INIT", {
                geek: e.attr("data-eid"),
                geekId: e.attr("data-eid"),
                expectId: e.attr("data-expect"),
                cooperate: parseInt(e.attr("data-cooperate"), 10),
                el: e
            })
        })
    })
}();
var Counselor = function() {
    var e = {}
      , t = 0
      , i = function(e) {
        var t = new Date(e.time)
          , i = new Date;
        return t.getDate() == i.getDate() && t.getMonth() == i.getMonth()
    }
      , s = function(e, t) {
        switch (t) {
        case "content":
            return e.substr(0, e.length - 2);
        case "code":
            return e.substr(-1, 1);
        default:
            return e.split("如需了解更多权益")[0]
        }
    }
      , n = {
        card: function(e) {
            return '<a href="javascript:;" class="counselor-card" target="_blank"><div class="avatar"></div><div class="pannel"><div class="title">招聘助手：<span class="c-close"><i></i></span><div class="c-shield"><i></i><span>30天内不再提示</span></div></div><p class="content">' + s(e.content, "content") + '</p><div class="c-btn">了解更多权益</div></div></a>'
        }
    }
      , a = {};
    a.shieldMsg = function() {
        $.ajax({
            type: "post",
            url: "/block/wangcai/notify/close.json",
            async: !0,
            success: function(e) {
                1 == e.rescode || $.toast({
                    content: e.resmsg,
                    type: "error"
                })
            },
            error: function(e) {
                $.toast({
                    content: "系统异常",
                    type: "error"
                })
            }
        })
    }
    ;
    return function() {
        $(document).on("click", ".counselor-card", function(i) {
            var n = (new Date).getTime()
              , r = "";
            if (Chat.sendReadMessage({
                uid: 990,
                mid: t
            }),
            $(".counselor-card").remove(),
            $(i.target).parents(".c-close").length)
                r = "counselor_close_";
            else if ($(i.target).parents(".c-shield").length)
                r = "counselor_shield_",
                a.shieldMsg();
            else {
                r = "counselor_trigger_";
                var o = "https://www.sobot.com/chat/pc/index.html?sysNum=0ae4336e735c44f7801438a4dbc27c52&color=18c3b1&moduleType=3&groupId=d31552fa751544f5bc0b13f4478b77d6&remark=" + _PAGE.uid + "&powered=false&satDegree_A=false&adminHelloWord=" + s(e.content, "fragment");
                window.open(o)
            }
            try {
                _T.sendEvent("" + r + _PAGE.uid + "_" + e.type + "_" + n)
            } catch (i) {}
            i.preventDefault()
        })
    }(),
    {
        received: function(a) {
            if (t < a.mid && i(a)) {
                t = a.mid,
                e.content = a.body.text,
                e.type = s(e.content, "code"),
                $(".counselor-card").remove(),
                $("body").append(n.card(e));
                try {
                    _T.sendEvent("counselor_receive_" + _PAGE.uid + "_" + e.type + "_" + a.time)
                } catch (e) {}
            }
        }
    }
}()
  , Payment = function() {
    function e(e) {
        var e = $.extend({
            article: "",
            text: "",
            confirmText: "确定",
            close: function() {},
            confirm: function() {}
        }, e)
          , t = function() {
            var t = this.$content
              , i = this;
            t.on("click", ".success-confirm", function() {
                i.close(),
                e.confirm("confirm")
            }),
            t.on("click", ".success-cancel", function() {
                i.close(),
                e.confirm("close")
            })
        };
        $.confirm({
            backgroundDismiss: !1,
            content: r.success(e),
            confirmButton: !1,
            cancelButton: !1,
            buttonsReverse: !0,
            closeIcon: !1,
            columnClass: "pop-payment",
            title: !1,
            onOpen: t,
            onClose: e.close,
            ononfirm: e.confirm
        })
    }
    function t(e, t, i) {
        var s, n = !0, r = {
            orderNo: e.orderNo,
            detailNo: e.detailNo
        };
        e.query && (r = $.extend(r, e.query));
        var t = $.extend({
            success: function() {},
            fail: function() {}
        }, t)
          , o = function(i) {
            n && (s.close(),
            i.ptype = e.data.payType,
            t.success(i))
        }
          , c = function() {
            $(".pop-payment .PaymentCheck").html('<i class="loader-gray-17"></i>正在查询支付结果，请稍后'),
            a.get.queryStatus(r).then(function(e) {
                if (1 != e.state) {
                    $(".pop-payment .PaymentCheck").html('<span class="gray">未支付成功，请您扫码完成支付。</span><a class="PayCheckBtn" href="javascript:">重新查询</a>')
                } else
                    n = !1,
                    o(e)
            })
        }
          , l = function() {
            a.get.queryStatus(r).then(function(e) {
                1 == e.state ? (n && o(e),
                n = !1) : n && setTimeout(l, 3e3)
            })
        }
          , d = function() {
            var e = this.$content;
            s = this,
            setTimeout(l, 1500),
            e.on("click", ".PayCheckBtn", c)
        }
          , h = function() {
            n = !1,
            t.close && t.close()
        }
          , u = function() {};
        !function(e) {
            $.confirm({
                content: e,
                confirmButton: !1,
                cancelButton: !1,
                buttonsReverse: !0,
                closeIcon: !1,
                columnClass: "pop-payment",
                title: !1,
                onOpen: d,
                onClose: h,
                confirm: u
            })
        }(i)
    }
    function i(e, t) {
        var i, o = {
            success: function() {},
            cancel: function() {},
            fail: function() {}
        }, t = $.extend(o, t), e = $.extend({
            recharge: !1
        }, e), c = function(e, t) {
            a.post.purchase(e, t).then(function(a) {
                var r = !!e.condition && e.condition(a);
                return 1 != a.rescode ? ($.toast({
                    type: "error",
                    content: a.resmsg
                }),
                !1) : r ? e.success(a) : 1 == e.data.payType ? (i && i.close("confirm"),
                t.buy && t.buy({
                    pay: e.amount,
                    orderNo: a.orderNo,
                    balance: e.balance,
                    payType: e.data.payType
                }),
                e.success(a)) : (e.qrCode = a.qrUrl,
                e.orderNo = a.orderNo,
                e.detailNo = a.detailNo,
                2 == e.data.payType ? s(e, t) : n(e, t),
                t.buy && t.buy({
                    pay: e.amount,
                    balance: e.balance,
                    payType: e.data.payType,
                    orderNo: a.orderNo
                }),
                void (i && i.close("confirm")))
            }, function() {})
        }, l = function() {
            var s = this.$content;
            i = this,
            s.on("click", ".prop-order-type p", function() {
                if ($(this).hasClass("selected") || $(this).hasClass("disabled"))
                    return !1;
                s.find(".prop-order-type .selected").addClass("disabled").removeClass("selected"),
                $(this).addClass("selected").addClass("disabled"),
                e.data.payType = $(this).attr("data-payType"),
                c(e, t)
            }),
            s.on("click", ".btn-block", function() {
                if ($(this).hasClass("disabled"))
                    return !1;
                e.data.payType = 1,
                $(this).addClass("disabled"),
                c(e, t)
            }),
            s.on("click", ".item-coupon-list span", function() {
                $(this).hasClass("selected") ? $(this).removeClass("selected") : ($(".item-coupon-list .selected").removeClass("selected"),
                $(this).addClass("selected"));
                var t = $(this).index()
                  , i = e.userCouponList[t];
                $(this).hasClass("selected") ? (e.coupon = i.offBean,
                e.data.userCouponId = i.encryptId,
                s.find(".coupon-left").hide(),
                s.find(".coupon-selected").text("-" + e.coupon + "直豆").show()) : (e.coupon = 0,
                e.data.userCouponId = "",
                s.find(".coupon-left").show(),
                s.find(".coupon-selected").hide());
                var n = 1e3 * e.amount
                  , a = 1e3 * e.coupon;
                e.pay = n > a ? (n - a) / 1e3 : 0,
                e.pay <= e.balance ? (e.data.payType = 1,
                e.cost = 0) : (e.pay = e.pay - e.balance,
                e.cost = e.pay),
                s.find(".pay-amount").text(e.pay + "直豆"),
                e.cost > 0 || e.recharge ? (s.find(".prop-order-type").show(),
                s.find(".btn-block").hide()) : (s.find(".btn-block").show(),
                s.find(".prop-order-type").hide())
            }),
            s.on("click", ".coupon-left", function() {
                s.find(".item-coupon").toggleClass("unfold")
            }),
            s.on("click", ".coupon-selected", function() {
                s.find(".item-coupon").toggleClass("unfold")
            }),
            s.on("click", ".bead-close", function() {
                i.close(),
                t.cancel && t.cancel()
            })
        }, d = function() {
            return t.fail()
        }, h = function() {}, u = function(e) {
            $.confirm({
                backgroundDismiss: !1,
                content: e,
                confirmButton: !1,
                cancelButton: !1,
                buttonsReverse: !0,
                closeIcon: !1,
                columnClass: "pop-payment",
                title: !1,
                onOpen: l,
                onClose: d,
                confirm: h
            })
        };
        if ($(".pop-payment").length)
            return !1;
        if (e.recharge)
            u(r.recharge(e));
        else {
            var p = e.itemId || ""
              , f = $.extend(e.data, {
                itemId: p
            })
              , g = e.prePayUrl || "";
            a.get.detail(f, g).then(function(i) {
                var s = i.data
                  , n = parseInt(s.remainBean, 10)
                  , a = {
                    couponId: "",
                    itemIcon: s.itemIcon,
                    balance: n,
                    amount: s.payBean,
                    pay: s.payBean,
                    userCouponList: s.userCouponList,
                    description: s.itemDesc ? s.itemDesc : e.description
                }
                  , o = s.userCouponList.filter(function(e) {
                    return e.selected
                });
                e = $.extend(e, a),
                o.length ? (e.coupon = o[0].offBean,
                e.pay = e.pay > e.coupon ? e.pay - e.coupon : 0,
                e.data.userCouponId = o[0].encryptId) : e.coupon = 0,
                e.pay <= n ? (e.data.payType = 1,
                e.cost = 0) : (e.pay = e.pay - n,
                e.cost = e.pay),
                0 == e.amount ? c(e, t) : u(r.purchase(e))
            })
        }
    }
    function s(e, i) {
        var s = {
            type: "wx",
            name: "微信支付",
            pay: e.pay,
            qrCode: e.qrCode
        };
        t(e, i, r.pay(s)),
        __conversion("payment_wx")
    }
    function n(e, i) {
        var s = {
            type: "zfb",
            name: "支付宝",
            pay: e.pay,
            qrCode: e.qrCode
        };
        t(e, i, r.pay(s)),
        __conversion("payment_zfb")
    }
    var a = {}
      , r = {}
      , o = {};
    return a.get = {},
    a.post = {},
    a.get.detail = function(e, t) {
        var i = $.Deferred()
          , s = "/boss/item/prepay.json";
        return e.priceId && (s = "/boss/block/prepay.json"),
        t && (s = t),
        o.query = $.get(s, e).success(function(e) {
            if (1011 == e.code)
                return window.location.href = "/user/login.html?ka=header-login",
                !1;
            1 == e.rescode ? i.resolve(e) : $.toast({
                type: "error",
                content: e.resmsg
            })
        }),
        i
    }
    ,
    a.get.queryStatus = function(e) {
        var t = $.Deferred();
        return $.ajax({
            method: "post",
            url: "/bean/orderAliSync",
            data: e,
            cache: !1,
            success: function(e) {
                1 == e.rescode ? t.resolve(e) : $.toast({
                    type: "error",
                    content: e.resmsg
                })
            }
        }),
        t
    }
    ,
    a.post.purchase = function(e, t) {
        var i = $.Deferred();
        return $.ajax({
            method: "post",
            url: e.url,
            data: e.data,
            cache: !1,
            success: function(e) {
                if (1 != e.rescode)
                    return $.toast({
                        type: "error",
                        content: e.resmsg
                    }),
                    i.reject(e),
                    t.fail();
                i.resolve(e)
            },
            error: function() {
                return t.fail()
            }
        }),
        i
    }
    ,
    r.pay = function(e) {
        return Utemplate('<div class="mb-payment"><p class="mb-payment-title"><img src="/v2/web/boss/images/icon-shield.png" />安全支付</p><div class="mb-pay-info"><i class="icon-<%this.type%>"></i><%this.name%><i class="currency">￥</i><i class="amount"><%this.pay%></i></div><div class="qr-code"><img src="<%this.qrCode%>" /></div><div class="mb-payment-result PaymentCheck"><span class="gray">使用<%this.name%>扫码支付</span><a class="PayCheckBtn" href="javascript:">我已支付</a></div></div>', e)
    }
    ,
    r.purchase = function(e) {
        return Utemplate('<div class="mb-payment"><p class="mb-payment-title"><img src="/v2/web/boss/images/icon-shield.png" /><%if(this.article){%><%this.article%><%}else{%>确认支付<%}%><i class="bead-close"></i></p><dl class="order-detail"><dt><img src="<%this.itemIcon%>"><span class="item-name"><%this.description%></span><span class="fr"><%this.amount%>直豆</span></dt><%if (0 < this.userCouponList.length) {%><dd class="item-coupon <%if(0 < this.coupon){%>unfold<%}%>"><p>优惠券<span class="fr coupon-selected" <%if(0 < this.coupon){%>style="display: block;"<%}%>>-<%this.coupon%>直豆</span><span class="fr coupon-left" <%if(0 < this.coupon){%>style="display: none;"<%}%>><%this.userCouponList.length%>张可用</span></p><div class="item-coupon-list"><%for(var i=0;i<this.userCouponList.length;i++){%><span data-id="<%this.userCouponList[i].encryptId%>" <%if(this.userCouponList[i].selected){%>class="selected"<%}%>>减<%this.userCouponList[i].offBean%>直豆</span><%}%></div></dd><%}%><dd>直豆余额<span class="fr"><%this.balance%>直豆</span></dd><dd>还需支付<span class="fr pay-amount"><%this.pay%>直豆</span></dd></dl><div class="prop-order"><div class="prop-order-type" <%if(0 == this.cost){%>style="display: none;"<%}%>> <div class="prop-type-article">直豆余额不足，请选择支付方式：</div> <p class="fl payment-wx" data-type="wx" data-payType="2"><i class="icon-wx"></i>微信支付</p> <p class="fr payment-zfb" data-type="zfb" data-payType="3"><i class="icon-zfb"></i>支付宝</p> </div><div class="prop-buttons"><button class="btn btn-block"  <%if(0 != this.cost){%>style="display: none;"<%}%>>立即支付</button></div></div></div>', e)
    }
    ,
    r.recharge = function(e) {
        return Utemplate('<div class="mb-payment"><p class="mb-payment-title"><img src="/v2/web/boss/images/icon-shield.png" />确认支付<i class="bead-close"></i></p><dl class="order-detail"><dt><img src="/v2/web/boss/images/prop/icon-bean.png" /><span class="item-name"><%this.description%></span><span class="fr"><%this.amount%>直豆</span></dt><dd>支付金额<span class="fr pay-amount">￥<%this.pay%></span></dd></dl><div class="prop-order"><div class="prop-order-type"> <div class="prop-type-article">请选择支付方式：</div> <p class="fl payment-wx" data-type="wx" data-payType="2"><i class="icon-wx"></i>微信支付</p> <p class="fr payment-zfb" data-type="zfb" data-payType="3"><i class="icon-zfb"></i>支付宝</p> </div></div></div>', e)
    }
    ,
    r.success = function(e) {
        return Utemplate('<div class="mb-payment"><p class="mb-payment-title"><img src="/v2/web/boss/images/icon-shield.png" />安全支付</p><div class="pay-info-text"><img src="/v2/web/boss/images/layer/succ.png" /><p class="article"><%this.article%></p><div class="text gray"><%this.text%></div><p><%if(this.cancelText){%><a href="javascript:" class="success-cancel btn"><%this.cancelText%></a><%}%><a href="javascript:" class="success-confirm btn"><%this.confirmText%></a></p></div></div>', e)
    }
    ,
    {
        wx: s,
        zfb: n,
        success: e,
        purchase: i,
        balance: a.get.balance
    }
}()
  , Purchase = function() {
    function e(e, t, i) {
        Payment.success({
            article: e || "购买成功",
            text: t || "",
            confirm: function() {
                i.confirm && i.confirm()
            },
            close: function() {
                i.close && i.close()
            }
        })
    }
    function t(t, i, s) {
        "-1" == s.item.view ? s.item.view = "不限" : s.item.view = (s.item.view + "").replace("人", "") + "人";
        var n = s.action ? s.action : "发布"
          , a = {
            ordinary: {
                1: "火爆职位普通版" + n + "成功！可保持职位在线<%this.description%>，期间每日查看牛人上限<%this.view%>，开聊上限<%this.employ%>。",
                2: "",
                3: "火爆职位普通版" + s.action + "成功！可保持职位在线<%this.description%>，期间每日查看牛人上限<%this.view%>，开聊上限<%this.employ%>。",
                4: "已成功升级至火爆职位畅聊版！当前剩余有效期<%this.restDays%>天，期间每日查看牛人<%this.view%>，开聊<%this.employ%>人。"
            },
            carefree: {
                1: "火爆职位畅聊版发布成功！可保持职位在线<%this.description%>，期间每日查看牛人<%this.view%>，开聊牛人<%this.employ%>。",
                2: "",
                3: "火爆职位畅聊版" + s.action + "成功！可保持职位在线<%this.description%>，期间每日查看牛人<%this.view%>，开聊牛人<%this.employ%>。",
                4: "已成功升级至火爆职位畅聊版！当前剩余有效期<%this.restDays%>天，期间每日查看牛人<%this.view%>，开聊<%this.employ%>人。"
            },
            experience: {
                1: "火爆职位普通版发布成功！该职位可免费在线<%this.expiredays%>天，为避免影响招聘，请及时延长招聘时长。",
                2: "火爆职位普通版发布成功！该职位可免费在线<%this.expiredays%>天，为避免影响招聘，请及时延长招聘时长。",
                3: "火爆职位普通版发布成功！该职位可免费在线<%this.expiredays%>天，为避免影响招聘，请及时延长招聘时长。",
                4: "火爆职位普通版发布成功！该职位可免费在线<%this.expiredays%>天，为避免影响招聘，请及时延长招聘时长。",
                5: "火爆职位普通版发布成功！该职位可免费在线<%this.expiredays%>天，为避免影响招聘，请及时延长招聘时长。"
            }
        }
          , r = {
            ordinary: {
                1: "火爆职位-普通版",
                2: "",
                3: "火爆职位-普通版",
                4: "火爆职位-普通版"
            },
            carefree: {
                1: "火爆职位-畅聊版",
                2: "",
                3: "火爆职位-畅聊版",
                4: "火爆职位-畅聊版"
            },
            experience: {
                1: "火爆职位",
                2: "",
                3: "",
                4: "",
                5: "火爆职位"
            }
        }
          , o = {
            0: {
                1: "block_sendjob_purchase_hot_",
                2: "block_extendjob_purchase_hot_",
                3: "block_openjob_purchase_hot_",
                4: "block_upgradejob_purchase_hot_"
            },
            1: {
                1: "block_sendjob_purchase_super_",
                2: "block_extendjob_purchase_super_",
                3: "block_openjob_purchase_super_",
                4: "block_upgradejob_purchase_super_"
            }
        };
        try {
            var c = o[i.hotJobType][i.action] + i.priceId;
            _T.sendEvent(c)
        } catch (e) {}
        var n = s.item.type || "ordinary"
          , l = Utemplate(a[n][i.action], s.item)
          , d = r[n][i.action]
          , h = s.action ? s.action + "成功" : "发布成功"
          , u = function(t) {
            e(h, l, s),
            "function" == typeof s.success && s.success(t)
        }
          , p = {
            url: t,
            data: i,
            description: d,
            amount: s.item.pay,
            success: u
        }
          , f = {
            success: function(e) {
                var t = {
                    1: "bean",
                    2: "wx",
                    3: "zfb"
                };
                window.top.__conversion(o[i.hotJobType][i.action] + t[e.ptype] + "_" + i.priceId),
                u(e)
            }
        };
        Payment.purchase(p, f)
    }
    return {
        vip: function(e, t) {
            var i = t || {}
              , s = function() {
                $.toast({
                    type: "success",
                    content: "您已成功购买VIP账号，可在VIP权益页面查看使用明细"
                }),
                i.success && i.success()
            }
              , n = {
                url: "/boss/item/pay/vipaccount.json",
                data: e,
                description: "购买道具：「VIP账号」- 1个月",
                amount: parseInt(e.amount, 10),
                success: s
            }
              , a = {
                success: s
            };
            Payment.purchase(n, a)
        },
        position: t,
        commercial: function(t, i) {
            var s = 11 == i.item.business ? "普通职位" : "火爆职位"
              , n = "";
            i.item && i.item.categoryList && i.item.categoryList.filter(function(e) {
                return e.name && e.name.indexOf("道具购买折扣") > -1
            }).length && (n = "（VIP道具专享价目前只支持6.12以上版本和网页版使用，暂不支持iOS）");
            var a = {
                1: "免费试用火爆职位",
                2: s + "-<%this.priceName%>",
                3: "升级VIP账号",
                4: "购买聊天加油包",
                5: "升级VIP账号",
                6: s + "-<%this.priceName%>",
                7: "",
                8: ""
            }
              , r = {
                1: "火爆职位发布成功！该职位可<%this.title%>，为避免影响招聘，请及时延长招聘时长。",
                2: s + "<%this.priceName%>发布成功！可保持职位在线一个月，期间可<%this.descList[1].bottomDesc%>牛人<%this.descList[1].count%><%this.descList[1].unitDesc%>，<%this.descList[0].bottomDesc%><%this.descList[0].count%><%this.descList[0].unitDesc%>。",
                3: "您已成功购买VIP账号，可在VIP权益页面查看使用明细" + n,
                4: "您已成功购买「聊天加油包」，<%this.inDate%>内，每日主动沟通人数<%this.chat%>，赠送主动查看人数<%this.view%>。",
                5: "您已成功购买VIP账号，可在VIP权益页面查看使用明细" + n,
                6: s + "<%this.priceName%>发布成功！可保持职位在线<%this.expireName%>，期间可<%this.descList[1].bottomDesc%>牛人<%this.descList[1].count%><%this.descList[1].unitDesc%>，<%this.descList[0].bottomDesc%><%this.descList[0].count%><%this.descList[0].unitDesc%>。",
                7: "",
                8: ""
            };
            4 == i.item.cardId && (i.item.chat = i.item.chatDescList[0],
            i.item.inDate = i.item.chatDescList[1],
            i.item.view = "+" + 2 * parseInt(i.item.chat, 10) + "次");
            var o = i.item
              , c = o.cardId
              , l = Utemplate(a[c], o)
              , d = Utemplate(r[c], o)
              , h = function() {
                var t = function() {};
                i.success ? t = i.success : i.confirm && (t = i.confirm),
                e(l, d, {
                    confirm: t
                })
            }
              , u = {
                url: "/boss/block/pay.json",
                data: t,
                tid: o.p || "",
                description: l,
                amount: parseInt(o.beanCount, 10),
                success: h
            };
            i.item.article && (u.article = i.item.article);
            var p = {
                buy: function(e) {
                    var t = {
                        action: "confirm-payment",
                        p: "",
                        p2: o.beanCount,
                        p3: e.balance,
                        p4: e.pay,
                        p5: e.pay
                    };
                    Block.action(t)
                },
                success: h
            };
            Payment.purchase(u, p)
        }
    }
}()
  , Recharge = function() {
    function e(e) {
        var t = {
            recharge: !0,
            url: e.url || "/boss/item/rechargebean.json",
            amount: e.amount,
            pay: e.pay,
            description: "直豆充值：" + e.amount + "个",
            data: {
                beanCount: e.amount
            }
        }
          , i = {
            success: function(t) {
                e.save ? Payment.success({
                    article: "直豆充值成功",
                    text: "本次充值为您节省了" + e.save + "元"
                }) : Payment.success({
                    article: "直豆充值成功",
                    text: "你可以在 BOSS直聘 APP「钱包」中查看充值明细"
                }),
                "function" == e.callback && e.callback({
                    pay: e.pay,
                    save: e.save,
                    amount: e.amount
                })
            }
        };
        Payment.purchase(t, i)
    }
    function t(t) {
        var i = function(e) {
            var e = $(".recharge-beans-rebate .selected").length ? parseInt($(".recharge-beans-rebate .selected").attr("data-amount"), 10) : $(".recharge-beans-rebate .ipt").val();
            if ($(".recharge-beans-rebate .order-info").remove(),
            e > 0) {
                $(".recharge-beans-rebate .btn-sure").removeClass("disabled");
                var t = a(e, s(e))
                  , i = '<div class="order-info">支付金额<span class="order-amount">￥' + t.pay + '</span><span class="gray">(已减' + t.save + "元）</span></div>";
                $(i).insertBefore($(".recharge-beans-rebate .btns"))
            } else
                $(".recharge-beans-rebate .btn-sure").addClass("disabled")
        }
          , s = function(e) {
            var i = 0;
            for (var s in t.discountInfo.rangeDiscount) {
                e >= parseInt(s, 10) && (i = t.discountInfo.rangeDiscount[s])
            }
            return i
        }
          , r = function(e) {
            $(e).on("input", ".ipt-amount", function() {
                var t = $(this).val().replace(/\D+/g, "");
                t.length && (t = parseInt($(this).val(), 10)),
                $(this).val(t),
                $(e).find(".recharge-rebate-panel .selected").removeClass("selected"),
                i()
            }),
            $(e).on("click", ".recharge-rebate-panel li", function() {
                $(e).find(".recharge-rebate-panel .selected").removeClass("selected"),
                $(this).addClass("selected"),
                i()
            }),
            i()
        }
          , o = function(i) {
            if ($(i).find(".btn-sure").hasClass("disabled"))
                return !1;
            var n = $(".recharge-beans-rebate .selected").length ? parseInt($(".recharge-beans-rebate .selected").attr("data-amount"), 10) : $(".recharge-beans-rebate .ipt").val();
            e($.extend({
                url: t.url,
                callback: t.success
            }, a(n, s(n)))),
            $(i).remove()
        };
        $.dialog({
            title: "直豆充值",
            content: n.rebate(function() {
                return [100, 200, 300, 500, 1e3].map(function(e) {
                    return {
                        amount: e,
                        save: a(e, s(e)).save
                    }
                })
            }()),
            confirmText: "确定充值",
            cancelText: !1,
            wrapClass: "recharge-beans-rebate",
            onOpen: r,
            onConfirm: o
        })
    }
    function i(t) {
        var i = t.discount ? .9 : 1
          , s = function(e) {
            var t = function(t) {
                var t = parseInt(t, 10)
                  , s = a(t, i);
                $(e).find(".order-save").text("-￥" + s.save),
                $(e).find(".order-pay").text("￥" + s.pay),
                t ? $(e).find(".btn-sure").removeClass("disabled") : $(e).find(".btn-sure").addClass("disabled")
            };
            $(e).on("input", ".ipt-amount", function() {
                var e = $(this).val().replace(/\D+/g, "");
                e.length && (e = parseInt($(this).val(), 10)),
                $(this).val(e),
                t(e)
            }),
            t(100)
        }
          , r = function(s) {
            if ($(s).find(".btn-sure").hasClass("disabled"))
                return !1;
            var n = $(s).find(".ipt-amount").val();
            e($.extend({
                callback: t.success,
                url: t.url
            }, a(n, i))),
            $(s).remove()
        };
        $.dialog({
            title: "直豆充值",
            content: n.original(t),
            confirmText: "确定充值",
            cancelText: !1,
            wrapClass: "recharge-beans-original",
            onOpen: s,
            onConfirm: r
        })
    }
    var s = {
        get: {}
    };
    s.get.discount = function() {
        var e = $.Deferred();
        return $.get("/boss/item/recharge/discount/check.json", function(t) {
            1 == t.rescode ? e.resolve(t) : $.toast({
                type: "error",
                content: t.resmsg
            })
        }),
        e
    }
    ;
    var n = {
        rebate: function(e) {
            return Utemplate('<p class="gray ios-off">ios用户独享充值折扣（仅限网页版）</p><div><p class="pull-left">直豆充值</p><div class="recharge-rebate-panel"><ul><%for(var i=0; i<this.list.length; i++){%><li ka="selected_amount_<%this.list[i].amount%>" <%if(this.list[i].amount==500){%> class="selected"<%}%> data-amount="<%this.list[i].amount%>"><p class="rebate-item"><%this.list[i].amount%>直豆<span class="rebate-off">减<%this.list[i].save%>元</span><span class="interval"></span></p></li><%}%></ul><input class="ipt ipt-amount" maxlength="4" placeholder="输入任意直豆数"></div></div>', {
                list: e
            })
        },
        original: function(e) {
            return Utemplate('<ul><li><span class="pull-left">充值直豆个数</span><p><input type="text" value="100" maxlength="4" class="ipt-amount"></p></li><%if(this.discount){%><li><span class="pull-left">iOS用户9折优惠</span><p class="order-save"></p></li><%}%><li><span class="pull-left">金额</span><p  class="order-pay"></p></li></ul>', e)
        }
    }
      , a = function(e, t) {
        if (!e)
            return {
                amount: 0,
                save: 0,
                pay: 0
            };
        var i = 100 * e
          , s = Math.floor(i * t);
        return {
            amount: e,
            save: (i - s) / 100,
            pay: s / 100
        }
    };
    return function(e) {
        s.get.discount().then(function(s) {
            var n = $.extend(e || {}, s);
            return s.discountInfo && s.discountInfo.rangeDiscount && !isEmpty(s.discountInfo.rangeDiscount) ? t(n) : i(n)
        })
    }
}()
  , Prop = {
    getDiscountInfo: function() {
        var e = $.Deferred();
        return $.get("/boss/item/recharge/discount/check.json").success(function(t) {
            e.resolve(t)
        }),
        e
    },
    Url: {
        positionList: "/boss/data-temp/prop/position.json",
        topcardPositionList: "/boss/data-temp/prop/position.json",
        useTopcardPositionList: "/boss/data-temp/prop/position.json",
        useGeekBomb: "/boss/data-temp/prop/",
        useGeekPhone: "/boss/data-temp/prop/",
        buyGeekPhone: "/boss/data-temp/prop/",
        orderRequest: "/boss/data-temp/prop/orderRequest.json",
        exchange: "/boss/data-temp/prop/position.json",
        rechargeBean: "/boss/data-temp/prop/position.json",
        useTopcardSelectDay: "/boss/data-temp/prop/",
        topcardSelectDay: "/boss/data-temp/prop/",
        topcardBuy: "/boss/data-temp/prop/",
        topcardUse: "/boss/data-temp/prop/"
    },
    TRUE_URL: {
        positionList: "/boss/item/geekBombJobList.json",
        topcardPositionList: "/boss/item/jobTopJobList.json",
        useTopcardPositionList: "/boss/item/useJobTopSelJob.json",
        useGeekBomb: "/boss/item/useGeekBomb/",
        useGeekPhone: "/boss/useGeekInfoRight/",
        buyGeekPhone: "/boss/item/buy/othItem/",
        orderRequest: "/boss/item/orderquery.json",
        exchange: "/bossweb/redeemCode/exchange.json",
        rechargeBean: "/boss/item/rechargebean.json",
        useTopcardSelectDay: "/boss/item/useJobTopSelDay/",
        topcardSelectDay: "/boss/item/jobTopSelDay/",
        topcardBuy: "/boss/item/buyJobTop/",
        topcardUse: "/boss/item/useJobTopBooking/"
    },
    getRequestUrl: function(e) {
        var t = !1;
        return t = !(document.domain.indexOf(".bosszhipin.com") > -1 || document.domain.indexOf(".weizhipin.com") > -1) && "172.16.6.191:8080" == window.location.host,
        0 == t ? Prop.TRUE_URL[e] : Prop.Url[e]
    },
    Views: {
        header: {
            niuren: '<img src="/v2/web/boss/images/layer/niuren.png" alt="牛人" class="title-icon">',
            topcard: '<img src="/v2/web/boss/images/layer/top-card.png" alt="牛人直通卡" class="title-icon">',
            zhadan: '<img src="/v2/web/boss/images/layer/zhadan.png" alt="牛人炸弹" class="title-icon">',
            succ: '<img src="/v2/web/boss/images/layer/succ.png" alt="成功" class="title-icon">'
        },
        title: {
            1: '<p class="prop-title">选择职位<span class="use-num"></span></p>',
            2: '<p class="prop-title">选择文案</p>',
            3: '<p class="prop-title prop-date-title">选择置顶日期                <span class="been-use pull-right"><i></i>已占用</span>                <span class="been-reserve pull-right"><i></i>已预定</span>                </p>',
            4: '<div class="pay-title">                    <span class="">使用微信扫码支付</span>                </div>'
        },
        button: {
            1: '<div class="pay-status-area">                    <a href="javascript:" ka="item_mall_nd_wxPay" class="status-btn">我已完成支付</a>                </div>',
            2: '<div class="pay-btn-area">                    <a href="" class="left-btn">前往</a>                    <a href="" class="right-btn">关闭</a>                </div>',
            3: '<div class="btn-area">                    <a href="" class="left-btn">取消</a>                    <a href="" class="right-btn">下一步</a>                    <div class="clear"></div>                </div>',
            4: '<div class="btn-area">                    <a href="" class="define-btn">知道了</a>                </div>'
        }
    },
    Layer: {
        createHeader: function(e) {
            return Prop.Views.header[e]
        },
        createTitle: function(e) {
            return Prop.Views.title[e]
        },
        createSuccMessage: function(e, t) {
            return '<div class="succ-container"><p class="succ-title">' + e + "</p>" + (t ? '<p class="succ-desc">' + t + "</p>" : "") + "</div>"
        },
        createSelectList: function(e) {
            var t = ""
              , i = "";
            for (var s in e)
                0 == s && (t = "<dt>                    <p><span>" + e[s].jobName.replace(/\</g, "&lt;").replace(/\>/g, ">") + "</span><span>" + e[s].locationName + "</span><span>" + e[s].lowSalary + "-" + e[s].highSalary + 'k</span></p>                        <span class="on"><i></i></span>                        <input type="hidden" value="' + e[s].encryptId + '"/>                    </dt>'),
                i += '<li data-val="' + e[s].encryptId + '"><span>' + e[s].jobName.replace(/\</g, "&lt;").replace(/\>/g, ">") + "</span><span>" + e[s].locationName + "</span><span>" + e[s].lowSalary + "-" + e[s].highSalary + "k</span></li>";
            return i = "<dd><ul>" + i + "</ul></dd>",
            '<div class="select-list"><dl>' + t + i + "</dl></div>"
        },
        createRadioList: function(e) {
            return '<div class="radio-list">                        <ul>                            <li class="active" data-id="72"><i></i><p>请查看我发布的' + e.replace(/\</g, "&lt;").replace(/\>/g, ">") + '岗位说明，如感兴趣，我们再详细沟通。</p></li>                            <li data-id="73"><i></i><p>你好，我们急招' + e.replace(/\</g, "&lt;").replace(/\>/g, ">") + '，如有兴趣希望可以深聊。</p></li>                            <li data-id="74"><i></i><p>你好，系统自动匹配了我的招聘信息给你，如果感兴趣，请回复消息。</p></li>                        </ul>                    </div>'
        },
        createDateTime: function(e) {
            return Prop.Layer.createTitle(3) + '<div id="prop-select-date" class="prop-select-date"></div>' + ("buy" == e ? '<p class="topcard-price">牛人直通卡的价格与您选择的日期有关</p>' : "")
        },
        createBuyZhiBean: function(e) {
            return window.top.Utemplate('<div class="niuren-buy"><ul><li class="first"><span class="pull-left">充值直豆个数</span><div class="pull-right"><input maxlength="4" type="text" value="100" class="count bean-count"/></div></li><%if(this.discount){%><li class="privilege"><span class="pull-left">iOS用户9折优惠</span><span class="pull-right privilege">-￥10.8</span></li><%}%><li class="money-item"><span class="pull-left">金额</span><span class="pull-right money">￥100</span></li></ul></div>', e)
        },
        bindRadioSelect: function(e) {
            e.find("li").click(function() {
                $(this).addClass("active").siblings("li").removeClass("active")
            })
        },
        alertSuccLayer: function(e, t, i, s) {
            i.$title && i.$title.html(Prop.Layer.createHeader("succ")),
            "buy" == s && t ? i.$content.find(".prop-layer").html(Prop.Layer.createSuccMessage(e, t) + Prop.Views.button[2]) : i.$content.find(".prop-layer").html(Prop.Layer.createSuccMessage(e, t) + Prop.Views.button[4]),
            i.$btnc.remove(),
            i.$content.find(".prop-layer .define-btn").click(function(e) {
                e.preventDefault(),
                i.close()
            }),
            i.$content.find(".prop-layer .pay-btn-area .left-btn, .prop-layer .pay-btn-area .right-btn").click(function(e) {
                window.location.reload()
            })
        },
        createQrcode: function(e) {
            return Prop.Layer.createTitle(4) + '<div class="qrcode-area">                        <img src="' + e + '" alt="二维码">                    </div>' + Prop.Views.button[1]
        },
        createAlertLayer: function(e) {
            $.confirm({
                content: '<p class="sys-msg">' + e + "</p>",
                cancelButton: !1,
                confirmButton: "知道了",
                columnClass: "pop-stage prop-pop",
                title: !1
            })
        }
    },
    buyZhiBean: function(e, t) {
        var i, s = this, e = $.extend({
            discount: !1
        }, e);
        i = $(".frame-container").length && -1 == $(".frame-container").attr("src").indexOf("wordhr.zhipin.com") && $(".frame-container").contents().find(".prop-list-right").length ? $(".frame-container").contents().find(".prop-list-right") : $("#container").find(".prop-list-right"),
        showConfirm = function() {
            $.confirm({
                content: '<div class="prop-layer">' + s.Layer.createBuyZhiBean(e) + "</div>",
                cancelButton: "取消",
                confirmButton: "确认充值",
                buttonsReverse: !0,
                columnClass: "pop-stage prop-pop",
                title: s.Layer.createHeader("zhadan"),
                onOpen: function() {
                    var t = this;
                    this.$content.find(".money"),
                    Number(i.find(".balance").text());
                    this.$content.find(".count").on("input", function() {
                        $(this).val($(this).val().replace(/\D/g, ""));
                        var i = Number($(this).val());
                        e.discount ? (t.$content.find(".pull-right.privilege").html("- ￥" + (.1 * i).toFixed(2)),
                        t.$content.find(".pull-right.money").html("￥" + (i - .1 * i).toFixed(2))) : t.$content.find(".pull-right.money").html("￥" + i)
                    }).trigger("input")
                },
                confirm: function() {
                    var s = this
                      , n = s.$content.find(".count");
                    if (privilege = (.1 * n.val()).toFixed(2),
                    "" == n.val() || 0 == n.val())
                        return n.focus(),
                        !1;
                    var a = parseInt(n.val(), 10);
                    e.discount && (a = (a - privilege).toFixed(2));
                    var r = {
                        recharge: !0,
                        url: Prop.getRequestUrl("rechargeBean"),
                        amount: parseInt(n.val(), 10),
                        pay: a,
                        description: "直豆充值：" + parseInt(n.val(), 10) + "个",
                        data: {
                            beanCount: parseInt(n.val(), 10)
                        }
                    }
                      , o = {
                        success: function(n) {
                            s.close(),
                            e.discount ? window.top.Payment.success({
                                article: "直豆充值成功",
                                text: "本次充值为您节省了" + privilege + "元"
                            }) : window.top.Payment.success({
                                article: "直豆充值成功",
                                text: "你可以在 BOSS直聘 APP「钱包」中查看充值明细"
                            }),
                            "function" == typeof t && t(),
                            i.find(".balance").text(n.beanCount)
                        }
                    };
                    window.top.Payment.purchase(r, o)
                }
            })
        }()
    }
}
  , iosRecharge = {
    buyHandle: function() {
        $.get("/boss/item/recharge/discount/check.json", function(e) {
            Prop.buyZhiBean({
                discount: e.discount || !1
            })
        })
    },
    showPop: function() {
        PageSet.getTipData(function(e) {
            if (e.rescode && e[13]) {
                if ("true" != sessionStorage.getItem("showPop" + _PAGE.uid)) {
                    $.dialog({
                        title: "",
                        content: '<div class="ios-bg"></div>',
                        confirmText: "",
                        cancelText: "",
                        wrapClass: "prop-ios",
                        onOpen: function(e) {
                            e.find(".ios-bg").click(function() {
                                window.top.Recharge({}),
                                e.remove()
                            })
                        }
                    });
                    ({
                        sendData: function() {
                            $.ajax({
                                type: "post",
                                url: "/setting/notify/set.json",
                                dataType: "JSON",
                                data: {
                                    type: 13
                                },
                                cache: !1,
                                success: function(e) {},
                                error: function() {}
                            })
                        }
                    }).sendData()
                }
                sessionStorage.setItem("showPop" + _PAGE.uid, "true")
            }
        })
    }
};
$(function() {
    "PageSet"in window && (iosRecharge.showPop(),
    $(".top-user .recharge-ios").click(function() {
        $(".frame-container").length && -1 == $(".frame-container").attr("src").indexOf("wordhr.zhipin.com") && $(".frame-container").contents().find(".dialog-wrap:visible,.jconfirm:visible").remove(),
        window.top.Recharge({})
    }))
});
var Block = function() {
    function e(e, t) {
        var i = e
          , s = $.confirm({
            content: t,
            title: !1,
            closeIcon: !0,
            cancelButton: !!i.cancelText && i.cancelText,
            confirmButton: i.confirmText || "确定",
            confirmButtonClass: "fr",
            columnClass: "pop-block " + i.style,
            onOpen: function() {
                i.ka && this.$confirmButton.attr("ka", i.ka),
                i.vka && __conversion(i.vka),
                i.open && i.open(this)
            },
            confirm: function() {
                if (i.next && i.next(this.$content),
                !i.next && i.confirm && i.confirm(),
                0 == i.autoClose)
                    return !1
            },
            cancel: function(e) {
                i.cancel && e && i.cancel()
            },
            onClose: function(e) {
                i.close && i.close()
            }
        });
        return $(document).on("_BEFORE_UNLOAD", function() {
            s.close()
        }),
        s
    }
    function t(t) {
        var i = t
          , s = t.content || a({
            title: i.title,
            description: i.description
        });
        i.style = "pop-block-alert",
        e(i, s)
    }
    function i(t, i) {
        var s = {}
          , n = function(e, t) {
            var s = i.isEdit ? "延长" : "发布";
            e.text("付费" + s + "职位：￥" + t)
        }
          , r = function() {
            if ("vip" == $(".hot-list-tab .checked").attr("data-cls"))
                return s.vip.type = "vip",
                s.vip;
            var e = $("input[name=ordinary]").filter(":checked")
              , t = e.attr("data-type")
              , i = e.attr("data-index");
            return selected = s[t][i],
            selected.type = t,
            selected.ba = s.ba,
            selected
        }
          , o = {
            open: function(e) {
                var t = e.$content;
                if (t.on("change", "input[name='ordinary']", function() {
                    var i = $(this).attr("data-type")
                      , a = $(this).attr("data-index")
                      , r = s[i][a];
                    n(e.$confirmButton, r.pay),
                    t.find("." + i + "-view").text(r.view),
                    t.find("." + i + "-employ").text(r.employ)
                }),
                t.on("click", ".hot-list-tab li", function() {
                    $(".hot-list-tab .checked").removeClass("checked"),
                    $(this).addClass("checked"),
                    t.find(".block-storm").removeClass("combination-ord").removeClass("combination-vip").addClass("combination-" + $(this).attr("data-cls")),
                    "ord" == $(this).attr("data-cls") ? (e.$confirmButton.removeClass("btn-vip-rose"),
                    t.find("input[name=ordinary]").filter(":checked").trigger("change")) : e.$confirmButton.addClass("btn-vip-rose").text("开通VIP帐号")
                }),
                $(".hot-list-tab li.checked").length ? $(".hot-list-tab li.checked").trigger("click") : t.find("input[name=ordinary]").filter(":checked").trigger("change"),
                e.$btnc.on("click", ".trial a", function() {
                    var t = s.experience;
                    t.type = "experience",
                    i.confirm(t),
                    e.close(),
                    __conversion("block_sendjob_purchase_trial")
                }),
                s.experience) {
                    e.$btnc.append(Utemplate('<p class="trial">您有一次免费体验机会，可免费试用火爆职位普通版<%this.expiredays%>天，<a href="javascript:">点击免费使用</a></p>', s.experience))
                }
            },
            next: function() {
                var e = r();
                i.confirm && i.confirm(e)
            }
        };
        i.canBuyVip ? function() {
            $.when(u({
                sf: i.sf || "",
                vipPriceId: i.vipPriceId
            }), p(t)).then(function(t, n) {
                s = n,
                s.vip = {
                    ba: t.detailPage.ba,
                    vipPriceId: i.vipPriceId,
                    pay: t.detailPage.currentPriceDesc.replace(/[^\d.]/g, "")
                };
                var r = $.extend(o, i);
                e(r, a({
                    title: r.title,
                    description: r.description
                }) + l.storm(t.detailPage, n))
            })
        }() : function() {
            var n = function(t) {
                s = t;
                var n = $.extend(o, i);
                e(n, a({
                    title: n.title,
                    description: n.description
                }) + c.storm(t))
            };
            t.combos ? n(t.combos) : p(t).then(function(e) {
                n(e)
            })
        }()
    }
    function s(t, i) {
        var s, n = function(t) {
            s = t;
            var n = i
              , o = a({
                title: n.title,
                description: n.description
            }) + r(t);
            n.next = function() {
                var e = $("input[name=super]").filter(":checked").attr("data-index")
                  , t = s.prices[e];
                n.confirm(t)
            }
            ,
            n.open = function(e) {
                var n = e.$content
                  , a = function(e, t) {
                    var s = i.isEdit ? "延长" : "发布";
                    e.text("付费" + s + "职位：￥" + t)
                }
                  , r = i.isEdit ? "付费延长职位" : "付费发布职位";
                if (e.$confirmButton.text(r + "：￥" + t.pay),
                e.$btnc.on("click", ".trial a", function() {
                    var t = s.experience;
                    t.type = "experience",
                    i.confirm(t),
                    e.close(),
                    __conversion("block_sendjob_purchase_trial")
                }),
                n.on("change", "input[name='super']", function() {
                    var t = $(this).attr("data-index")
                      , i = s.prices[t];
                    a(e.$confirmButton, i.pay);
                    var r = "可保持职位在线" + i.expiredays + "天，期间每日查看详情" + i.view + "，开聊上限为" + i.employ + "。";
                    n.find(".hot-intro").text(r)
                }),
                n.find("input[name=super]").filter(":checked").trigger("change"),
                s.experience) {
                    e.$btnc.append(Utemplate('<p class="trial">你有一次免费体验机会，可以免费试用火爆职位限制版 <%this.expiredays%> 天，<a ka="block_sendjob_purchase_super_trial" href="javascript:">点击免费使用</a></p>', s.experience))
                }
            }
            ,
            e(n, o)
        };
        t.combos ? n(t.combos) : h(t).then(function(e) {
            n(e)
        })
    }
    function n(t, i) {
        var s = i
          , n = s.content || o(t);
        s.style = "pop-block-upgrade",
        s.open = function(e) {
            e.$confirmButton.text("付费升级职位：" + t.currentPriceDesc)
        }
        ,
        e(s, n)
    }
    var a = function(e) {
        return Utemplate(' <div class="block-intro"><img src="/v2/web/boss/images/icon-lock-24.png"><dl><dt><%this.title%></dt><dd class="gray"><%this.description%></dd></dl><div class="clear"></div></div>', e)
    }
      , r = function(e) {
        return -1 == e.view ? e.view = "无上限" : e.view = e.view,
        Utemplate('<div class="hot-list hot-list"><p class="hot-intro">可保持职位在线<%this.description%>，期间每日查看详情<%this.view%>，开聊上限为<%this.employ%>。</p><ul class="ordinary"><%for(var i=0;i<this.prices.length;i++){%><li><label class="radio"><input data-index="<%i%>" type="radio" <%if(i == 0){%>checked<%}%> name="super" value="<%i%>"><span>普通版，<%this.prices[i].description%><%if(this.prices[i].discount){%><em class="discount"><%this.prices[i].discount%></em><%}%><em class="pay">￥<%this.prices[i].pay%>/职位</em></span></label></li><%}%></ul></div>', e)
    }
      , o = function(e) {
        return e.hlShortDesc.name = function() {
            var t = e.hlShortDesc
              , i = t.name;
            return t.highlightList && t.highlightList.length && $.each(t.highlightList, function(e, t) {
                var s = i.substr(t.startIndex, t.endIndex);
                i = i.replace(s, "<b>" + s + "</b>")
            }),
            i
        }(),
        Utemplate('<div class="super-upgrade-panel"><div  class="super-upgrade-description"><span class="icon-lock"></span><div class="description"><h4><%this.title%>普通版，<%this.animationTitle%></h4><p><%this.shortDesc.name%></p><p><%this.hlShortDesc.name%></p></div></div><dl class="super-upgrade-list"><dt>畅聊版<span class="icon-upgrade">升级</span></dt><%for(var i=0;i<this.descList.length;i++){%><dd><%this.descList[i]%><i class="icon-check"></i></dd><%}%><dd><b>升级所需价格：</b><span class="bean-number"><%this.currentPriceDesc%></span><span class="upgrade-discount">限时折扣</span><span class="annotation"><%this.upgradeDesc%></span></dd></dl><p class="notice">*以上价格均为单个职位价格，不同城市不同职类价格有所波动</p></div>', e)
    }
      , c = {
        vip: function(e) {
            var t = {
                pay: e.currentPriceDesc,
                list: e.lineList
            };
            return Utemplate('<table class="vip-grid"><thead><tr><th>账号权益</th><th style="width: 90px;">认证账号</th><th style="width: 70px;">VIP账号</th></tr></thead><tbody><%for (var i=0;i<this.list.length;i++){%><tr><td><div class="cut-off"><%this.list[i].itemDesc%><i class="gray"><%this.list[i].itemDescHint%></i></div></td><td class="gray"><%this.list[i].curDesc%></td><td class="primrose"><%this.list[i].totalDesc%></td></tr><%}%></tbody></table><div class="vip-counter"><p class="fl">权益总价值<i>限时折扣</i></p><p class="fr primrose">¥<%this.pay%></p></div>', t)
        },
        storm: function(e) {
            return Utemplate('<div class="hot-list"><p class="hot-intro ordinary">火爆职位普通版，每日查看详情<span class="ordinary-view"><%this.ordinary[0].view%></span>，开聊<span class="ordinary-employ"><%this.ordinary[0].employ%></span></p><ul class="ordinary"><%for(var i=0;i<this.ordinary.length;i++){%><li><label class="radio"><input data-index="<%i%>" data-type="ordinary" type="radio" <%if(i == 0){%>checked<%}%> name="ordinary" value="0"><span>普通版，<%this.ordinary[i].description%><%if(this.ordinary[i].discount){%><em class="discount"><%this.ordinary[i].discount%></em><%}%><em class="pay">￥<%this.ordinary[i].pay%>/职位</em></span></label></li><%}%></ul><p class="hot-intro ordinary" style="padding-top: 9px;">火爆职位畅聊版，每日查看详情<span class="carefree-view"><%this.carefree[0].view%></span>，开聊<span class="carefree-employ"><%this.carefree[0].employ%></span></p><ul class="ordinary"><%for(var j=0;j<this.carefree.length;j++){%><li><label class="radio"><input data-index="<%j%>" type="radio" data-type="carefree" name="ordinary" value="0"><span>畅聊版，<%this.carefree[j].description%><%if(this.carefree[j].discount){%><em class="discount"><%this.carefree[j].discount%></em><%}%><em class="pay">￥<%this.carefree[j].pay%>/职位</em></span></label></li><%}%></ul>', e)
        }
    }
      , l = {
        vip: function(e) {
            return '<div class="vip-ordinary-grid">' + c.vip(e) + "</div>"
        },
        storm: function(e, t) {
            return '<div class="block-storm combination-vip"><div class="hot-list-tab"><ul><li data-cls="vip" class="checked">开通VIP</li><li data-cls="ord">单独发布</li></ul></div><div class="vip-wrap">' + c.vip(e) + '</div><div class="ordinary-wrap">' + c.storm(t) + "</div></div>"
        }
    }
      , d = function(e) {
        var e = e;
        return $.isArray(e) ? $.each(e, function(t, i) {
            -1 == i.view ? e[t].view = "无上限" : e[t].view = i.view + "人",
            -1 == i.employ ? e[t].employ = "无上限" : e[t].employ = i.employ + "人"
        }) : (-1 == e.view ? e.view = "无上限" : e.view = e.view + "人",
        -1 == e.employ ? e.employ = "无上限" : e.employ = e.employ + "人"),
        e
    }
      , h = function(e) {
        var t = $.Deferred();
        return $.get("/bossweb/job/superprice.json", e).success(function(e) {
            1 == e.rescode && (e.prices = d(e.prices),
            e.experience && (e.experience = d(e.experience)),
            t.resolve(e))
        }),
        t
    }
      , u = function(e) {
        var t = $.Deferred();
        return $.get("/bossweb/job/vipaccountprice.json", e).success(function(e) {
            1 == e.rescode && t.resolve(e)
        }),
        t
    }
      , p = function(e) {
        var t = $.Deferred();
        return e.combos ? t.resolve(e.combos) : $.get("/bossweb/job/price.json", e).success(function(e) {
            if (1 == e.rescode) {
                var i = {};
                i.ordinary = d(e.ordinary),
                i.carefree = d(e.carefree),
                e.experience && (i.experience = d(e.experience)),
                t.resolve(e)
            }
        }),
        t
    }
      , f = function(t, i) {
        u(t).then(function(s) {
            var n = i
              , r = a({
                title: n.title || "发布普通职位个数已达上限",
                description: n.description
            }) + l.vip(s.detailPage);
            n.style = "pop-vip",
            n.cancelText = "我再想想",
            n.confirmText = "开通VIP帐号",
            n.next = function() {
                i.confirm({
                    ba: s.detailPage.ba,
                    vipPriceId: t.vipPriceId,
                    pay: s.detailPage.currentPriceDesc.replace(/[^\d.]/g, "")
                })
            }
            ,
            e(n, r)
        })
    }
      , g = function(e) {
        var t = e;
        return e && "[object Object]" !== Object.prototype.toString.call(e) && (t = JSON.parse(decodeURIComponent(e))),
        t
    };
    return {
        confirm: t,
        purchase: i,
        super: s,
        upgrade: n,
        vip: f,
        action: function(e, t) {
            var t = t || {}
              , i = $.extend(e, t);
            $.ajax({
                method: "post",
                url: "/actionLog/common.json",
                data: {
                    ba: JSON.stringify(i)
                },
                cache: !1,
                success: function(e) {},
                error: function() {}
            })
        },
        formatBA: g
    }
}()
  , Upgrade = function() {
    var e = function(e, t) {
        window.top.Purchase.position("/boss/block/pay.json", {
            priceId: t.priceId,
            action: 4,
            hotJobType: 0,
            business: t.business || "",
            targetId: t.targetId,
            targetType: t.targetType
        }, {
            item: t,
            success: e.success,
            confirm: function() {}
        })
    };
    return {
        render: function(t, i) {
            var s = {
                cancelText: "我再想想",
                vka: "block_upgradejob_purchase_hot",
                cancel: function() {},
                confirm: function() {
                    i.ba && Block.action(Block.formatBA(i.ba), {
                        p4: 4,
                        p5: i.priceId,
                        action: "user-block-biz-button"
                    }),
                    e({
                        success: function() {}
                    }, i)
                }
            };
            window.top.Block.upgrade(t, $.extend(s, i))
        }
    }
}()
  , DirectAccessCard = function() {
    var e = {}
      , t = {
        prop: function(e) {
            var t = $.Deferred();
            return $.get("/boss/item/quicktop/selposition.json?jobId=" + e).success(function(e) {
                1 == e.rescode ? t.resolve(e) : $.toast({
                    type: "error",
                    content: e.resmsg
                })
            }),
            t
        }
    }
      , i = {
        notice: function(e) {
            return Utemplate('<div class="free-notice-panel"><h4 class="subhead">保存成功</h4><p>您使用免费权益发布了一个普通职位，</p><p>该职位价值50元/月，</p><p>剩余可免费在线普通职位数：<%this.unPubCount%>个。</p><i class="bead-close"></i></div>', e)
        },
        recommend: function(e, t) {
            return (t.title ? i.notice(t) : Utemplate('<div class="brief-panel"><p class="icon-brief icon-success"></p><div class="brief-description"><p class="heading">保存成功</p><p class="position gray"><span class="position-name"><%this.positionName%></span><em class="vline"></em><%this.locationName%><em class="vline"></em><%this.lowSalary%>K-<%this.highSalary%>K</p></div><i class="bead-close"></i></div>', e)) + Utemplate('<div class="introduce-panel"><img src="/v2/web/boss/images/prop/promotion.png"><p class="slogan">急聘直通卡限时专享</p><p class="intro-text">置顶职位+邀约投递，立即提升职位招聘效率</p><p class="notice">职位发布24小时内限时购买</p><button class="btn">立即体验</button></div>', e)
        },
        card: function(e) {
            return Utemplate('<div class="brief-panel"><p class="icon-brief icon-card"></p><div class="brief-description"><p class="heading">急聘直通卡购买</p><p class="position gray">置顶职位+邀约投递，立即提升职位招聘效率</p></div><i class="card-discount"></i></div><div class="card-description"><p class="position gray">使用职位：<span class="position-name"><%this.job.positionName%></span><em class="vline"></em><%this.job.locationName%><em class="vline"></em><%this.job.lowSalary%>K-<%this.job.highSalary%>K</p><div class="position-category"><div class="position-tip">置顶职类<p class="fr gray">选择更多职类置顶，提升招聘效果，可享额外折扣</p></div><%if(1 < this.positionList.length){%><dl><dt><%this.positionList[0].name%></dt><%for(var i=1; i<this.positionList.length;i++){%><dd><%this.positionList[i].name%></dd><%}%></dl><%}%></div></div>', e)
        }
    }
      , s = function() {
        setTimeout(function() {
            window.top.location.href = "/chat/im?mu=/bossweb/joblist.html"
        }, 1e3)
    }
      , n = function() {
        var t = $(".direct-card-pop .position-category .selected")
          , i = t.length > 0 ? t.length : 0
          , s = Math.min(i, e.positionDiscount.length - 1)
          , n = e.positionDiscount[s]
          , a = 1e3 * e.positionList[0].price;
        t.each(function(t, i) {
            var t = $(this).index();
            a += 1e3 * e.positionList[t].price
        });
        var r = Math.floor(a * (1 - n) / 1e3);
        return {
            amount: a / 1e3,
            discount: n,
            save: t.length > 0 ? Math.ceil(a / 1e3 - r) : 0,
            pay: r
        }
    }
      , a = function() {
        var e = n()
          , t = "选择更多职类置顶，提升招聘效果，可享额外折扣";
        if (e.discount > 0) {
            t = "招聘效果提升" + ($(".direct-card-pop .position-category .selected").length + 1) + "倍 额外立减" + 100 * e.discount + "% ",
            $(".direct-card-pop .position-tip .gray").addClass("discount-tip").text(t)
        } else
            $(".direct-card-pop .discount-tip").removeClass("discount-tip").text(t);
        $(".direct-card-pop .dialog-footer  .prop-total").remove();
        var i = '<p class="prop-total">￥<em>' + e.pay;
        e.save > 0 && (i += "</em><span>(已省" + e.save + ")</span>"),
        i += "</p>",
        $(".direct-card-pop .dialog-footer .btns").append(i)
    }
      , r = function(e) {
        var t = n()
          , i = function() {
            Payment.success({
                article: "购买成功",
                text: "即刻置顶职位24小时，邀约匹配牛人投递,可在BOSS直聘APP「我的道具」中查看使用效果",
                confirm: function() {
                    s()
                }
            })
        }
          , a = {
            url: "/boss/item/pay/quicktop.json",
            data: e,
            description: "购买简历直通卡",
            amount: t.pay,
            itemId: "b6ed128ee1b8d2841HI~",
            success: i,
            close: function() {},
            cancel: function() {}
        }
          , r = {
            success: i,
            cancel: s,
            close: s
        };
        Payment.purchase(a, r)
    }
      , o = function(t) {
        e = $.extend({}, t);
        $.dialog({
            bind: !0,
            title: "",
            closeLayer: !1,
            content: i.card(t),
            wrapClass: "direct-card-pop",
            confirmText: "购买并使用",
            cancelText: "取消",
            onOpen: function(e) {
                $(e).on("click", ".position-category dd", function() {
                    $(this).toggleClass("selected"),
                    a()
                }),
                a()
            },
            onConfirm: function() {
                var t = [];
                $(".direct-card-pop .position-category .selected").each(function(i, s, n) {
                    var a = $(this).index();
                    t.push(e.positionList[a].code)
                });
                var i = {
                    jobId: e.job.jobId,
                    positionCode: t.join(","),
                    userCouponId: ""
                };
                r(i),
                this.close(),
                __conversion("ermergency_buy")
            },
            onClose: function(e) {
                $(e).off("click")
            },
            onCancel: function() {
                s()
            }
        })
    }
      , c = function(e, n) {
        var n = n || {};
        $.dialog({
            bind: !0,
            title: "",
            closeLayer: !1,
            content: i.recommend(e, n),
            wrapClass: "direct-card-pop",
            confirmText: !1,
            cancelText: !1,
            onOpen: function(i) {
                var n = this;
                $(i).on("click", ".bead-close", function() {
                    n.close(),
                    s()
                }),
                $(i).on("click", ".introduce-panel .btn", function() {
                    n.close(),
                    t.prop(e.jobId).then(function(e) {
                        o(e)
                    }),
                    __conversion("ermergency_edit")
                }),
                __conversion("ermergency_card")
            },
            onClose: function(e) {
                $(e).off("click")
            }
        })
    };
    return {
        show: o,
        notice: function(e) {
            $.dialog({
                bind: !0,
                title: "",
                closeLayer: !1,
                content: i.notice(e),
                wrapClass: "direct-card-pop",
                confirmText: !1,
                cancelText: !1,
                onOpen: function(e) {
                    var t = this;
                    $(e).on("click", ".bead-close", function() {
                        t.close(),
                        s()
                    })
                },
                onClose: function(e) {
                    $(e).off("click")
                }
            })
        },
        recommend: c
    }
}()
  , CommercialGroup = function() {
    function e(e, t) {
        $.dialog({
            bind: !0,
            title: "",
            content: e.content,
            confirmText: !1,
            cancelText: !1,
            wrapClass: "commercial-group-wrap",
            inline: !1,
            onOpen: function() {
                n(this, e)
            },
            onClose: function() {}
        })
    }
    var t = {
        top: function(e) {
            return Utemplate('<div class="commercial-group-top"><h3><%this.title%></h3><span class="gray"><%this.description%></span></div>', e)
        },
        footer: function(e) {
            return Utemplate('<div class="commercial-footer"><p class="fl">如企业需要批量采购，请联系客服 <span class="phone">400-065-5799</span></p><span class="btn btn-sure fr"><%this.text%></span><%if(this.cancelText){%><span class="btn btn-outline fr"><%this.cancelText%></span><%}%><div class="combo-account fr"><p class="price"><span class="amount"><%this.beanCount%></span> <span class="unit">直豆</span></p><p class="discount-price"><%this.discountDesc%></p></div></div>', {
                beanCount: $.isArray(e.priceList) ? e.priceList[e.priceList.length - 1].beanCount : e.beanCount,
                discountDesc: e.discountDesc,
                text: e.button ? e.button.text : "立即购买",
                cancelText: e.cancelText
            })
        },
        trial: function(e) {
            return Utemplate('<div class="commercial-panel trial-panel" data-card-id="1"><p class="subhead"><%this.title%></p><ul class="commercial-item"><%for (var i=0; i<this.categoryList.length; i++) {%><li><p><%this.categoryList[i].bottomDesc%></p><span class="gray"><%this.categoryList[i].count%><%this.categoryList[i].unitDesc%></span></li><%}%></ul><div class="price"><span class="amount"><%this.beanCount%></span><span>直豆</span></div><p class="panel-description"><%this.bottomDesc%></p></div>', e)
        },
        vip: function(e) {
            return Utemplate('<div class="commercial-panel vip-panel" data-card-id="3"><p class="subhead"><%this.title%></p><div class="commercial-item" data-price-id="<%this.encryptPriceId%>"><div class=""><div class="price"><span class="amount"><%this.beanCount%></span><span><%this.unitDesc%></span></div><table cellpadding="0" cellspacing="0"><thead><tr><td width="155">权益类型</td><td width="155">免费账号权益</td><td width="155">VIP专享权益</td></tr></thead><tbody><%for (var i=0; i < this.categoryList.length; i++) {%><tr><td><%this.categoryList[i].name%></td><td><%this.categoryList[i].currentRight%></td><td><%this.categoryList[i].vipRight%></td></tr><%}%></tbody></table></div></div><p class="panel-description"><%this.categoryList[0].bottomDesc%></p></div>', e)
        },
        flow: function(e) {
            return Utemplate('<div class="commercial-panel flow-prop-panel" data-card-id="4"><p class="subhead"><%this.title%></p><ul><%for(var i=0;i<this.list.length; i++){%><li class="commercial-item"><div class="item-desc"><p>有效期<%this.list[i].inDate%></p><p class="gray"><%this.list[i].chat%></p></div><p class="bean-count"><%this.list[i].beanCount%></p></li><%}%></ul><p class="panel-description"><%this.bottomDesc%></p></div>', {
                title: e.title,
                list: function(e) {
                    var t = [];
                    return $.each(e, function(e, i) {
                        t.push({
                            showType: i.showType,
                            chat: "每日沟通总量" + i.chatDescList[0],
                            inDate: i.chatDescList[1],
                            beanCount: i.chatDescList[2]
                        })
                    }),
                    t
                }(e.priceList),
                bottomDesc: e.bottomDesc
            })
        },
        position: function(e) {
            return Utemplate('<div class="commercial-panel position-panel" data-card-id="2"><p class="subhead"><%this.title%></p><div class="position-list"><%for(var i=0; i<this.list.length; i++){%><div class="commercial-item" data-price-id="<%this.list[i].encryptPriceId%>"><table cellpadding="0" cellspacing="0"><thead><tr><td class="t-item"><%this.list[i].priceName%></td><td class="t-detail"><%this.list[i].beanCount%><%this.list[i].unitDesc%></td></tr></thead><tbody><tr><td class="t-item"><%this.list[i].chatDesc%></td><td class="t-detail"><%this.list[i].chat%></td></tr><tr><td class="t-item"><%this.list[i].viewDesc%></td><td class="t-detail"><%this.list[i].view%></td></tr><tr><td class="t-item"><%this.list[i].impDesc%></td><td class="t-detail"><%this.list[i].imp%></td></tr></tbody></table></div><%}%></div><p class="panel-description"><%this.bottomDesc%></p></div>', {
                title: e.title,
                list: function(e) {
                    var t = [];
                    return $.each(e, function(e, i) {
                        t.push({
                            unitDesc: i.unitDesc,
                            priceName: i.priceName,
                            beanCount: i.beanCount,
                            encryptPriceId: i.encryptPriceId,
                            chatDesc: i.descList[0].bottomDesc,
                            viewDesc: i.descList[1].bottomDesc,
                            impDesc: i.length > 2 ? i.descList[2].bottomDesc : "",
                            chat: i.descList[0].count + i.descList[0].unitDesc,
                            view: i.descList[1].count + i.descList[1].unitDesc,
                            imp: i.length > 2 ? i.descList[2].count + i.descList[2].unitDesc : ""
                        })
                    }),
                    t
                }(e.priceList),
                bottomDesc: e.bottomDesc
            })
        },
        positionItem: function(e, t) {
            return e.isMulti = t,
            Utemplate('<table><tr><%if (this.isMulti) {%><td class="t-title" width="auto">火爆职位-<%this.priceName%></td><%}%><%for (var i=0; i<this.descList.length; i++){ %><td width="160"><%this.descList[i].count%><%this.descList[i].unitDesc%><br><%this.descList[i].bottomDesc%></td><%}%></tr></table>', e)
        },
        superPosition: function(e, i) {
            var s = '<div class="commercial-panel super-position-panel" data-card-id="6"><p class="subhead"><%this.title%></p><div class="vip-item">' + t.positionItem(e.priceList[0], i) + '</div><ul class="tap-option"><%for (var i=0; i<this.priceList.length; i++) {%><li class="commercial-item <%if(this.priceList[i].discountShowType == 1){%>discounts<%}%><%if(this.priceList[i].showType == 4){%> selected<%}%>"><%this.priceList[i].expireName%><span class="vip-price"><span class="vip-price-amount"><%this.priceList[i].beanCount%></span><%this.priceList[i].unitDesc%></span></li><%}%></ul><p class="panel-description"><%this.bottomDesc%></p></div>';
            return e.title = i ? "付费发布职位" : e.title,
            Utemplate(s, e)
        },
        vipItem: function(e) {
            return Utemplate('<table cellpadding="0" cellspacing="0"><thead><tr><td width="260">权益类型</td><td width="260">免费账号权益</td><td width="155">VIP专享权益</td></tr></thead><tbody><%for (var i=0; i<this.categoryList.length; i++) {%><tr><td><%this.categoryList[i].name%></td><td><%this.categoryList[i].currentRight%></td><td><%this.categoryList[i].vipRight%></td></tr><%}%></tbody></table>', e)
        },
        superVip: function(e) {
            var i = '<div class="commercial-panel super-vip-panel" data-card-id="5"><p class="subhead"><%this.vipCardList[0].title%></p><div class="vip-item">' + t.vipItem(e.vipCardList[0]) + '</div><ul class="tap-option"><%for (var i=0; i<this.vipCardList.length; i++) {%><li class="commercial-item <%if(this.vipCardList[i].discountShowType == 1){%>discounts<%}%><%if(this.vipCardList[i].showType == 4){%> selected<%}%>"><%this.vipCardList[i].expireName%><span class="vip-price"><span class="vip-price-amount"><%this.vipCardList[i].beanCount%></span><%this.vipCardList[i].unitDesc%></span></li><%}%></ul><p class="panel-description"><%this.vipCardList[0].bottomDesc%></p></div>';
            return Utemplate(i, e)
        }
    }
      , i = {}
      , s = function() {
        var e = {}
          , t = $(".commercial-group-wrap")
          , s = t.find(".selected").parents(".commercial-panel").attr("data-card-id")
          , n = i.cardList.filter(function(e) {
            return e.cardId == s
        });
        if (n[0] && n[0].priceList) {
            var a = t.find(".selected").index();
            e.combo = n[0].priceList[a],
            e.combo.cardId = s,
            e.title = n[0].title
        } else if (n[0] && n[0].vipCardList) {
            var a = t.find(".selected").index();
            e.combo = n[0].vipCardList[a],
            e.combo.cardId = s,
            e.title = n[0].title
        } else
            e.combo = n[0];
        return e.card = n[0],
        e
    }
      , n = function(e, n) {
        var a = $(".commercial-group-wrap");
        a.off("click"),
        a.on("click", ".commercial-item", function() {
            a.find(".selected").removeClass("selected"),
            $(this).addClass("selected");
            var e = s();
            e.combo.discountDesc ? a.find(".combo-account .discount-price").text(e.combo.discountDesc) : a.find(".combo-account .discount-price").text(""),
            a.find(".combo-account .amount").text(e.combo.beanCount),
            e.card.button ? a.find(".commercial-footer .btn-sure").text(e.card.button.text) : e.combo.button && a.find(".commercial-footer .btn-sure").text(e.combo.button.text),
            6 == e.card.cardId && $(".super-position-panel .vip-item").html(t.positionItem(e.combo, i.cardList.length > 1)),
            5 == e.card.cardId && $(".super-vip-panel .vip-item").html(t.vipItem(e.combo))
        }),
        a.on("click", ".btn-sure", function() {
            var t = s();
            e.close(),
            n.confirm(t.card, t.combo)
        }),
        a.on("click", ".btn-outline", function() {
            n.cancel(a),
            e.close()
        });
        var r = a.find(".commercial-panel").eq(0);
        r.find(".commercial-item.selected").length ? r.find(".commercial-item.selected").trigger("click") : r.find(".commercial-item:last").trigger("click")
    }
      , a = function(e) {
        var i = []
          , s = e.length > 1
          , n = function(e) {
            return 1 == e.cardId ? t.trial(e) : 2 == e.cardId ? t.position(e) : 3 == e.cardId ? t.vip(e) : 4 == e.cardId ? t.flow(e) : 5 == e.cardId ? t.superVip(e) : 6 == e.cardId ? t.superPosition(e, s) : void 0
        };
        return $.each(e, function(e, t) {
            i.push(n(t))
        }),
        '<div class="commerical-group">' + i.join("") + "</div>"
    };
    return {
        block: function(s, n, r) {
            i = $.extend({}, s),
            e({
                content: t.top({
                    title: s.shortDesc.name,
                    description: s.hlShortDesc ? s.hlShortDesc.name : ""
                }) + a(s.cardList) + t.footer($.extend(s.cardList[0], {
                    cancelText: r.cancelText
                })),
                confirm: function(e, t) {
                    if (n && n(e, t),
                    e.button) {
                        var i = getQueryParams(e.button.url)
                          , s = Block.formatBA(i.ba);
                        Block.action(s),
                        t.ba = s
                    }
                },
                cancel: function() {
                    r.cancel && r.cancel()
                }
            }, s)
        }
    }
}()
  , CommercialVip = function() {
    function e(e, t) {
        $(e).on("click", ".commercial-props-group li", function() {
            if (!$(this).hasClass("selected")) {
                $(e).find(".commercial-props-group .selected").removeClass("selected"),
                $(this).addClass("selected"),
                a();
                var t = r();
                7 == t.cardId ? $(e).find(".item-description").html(s.key(t)) : $(e).find(".item-description").html(s.vip(t))
            }
        }),
        $(e).find(".commercial-props-group li").eq(0).trigger("click"),
        $(e).on("click", ".btn-sure", function() {
            var i = r();
            t.confirm(i, i),
            $(e).remove()
        })
    }
    function t(t, i) {
        $.dialog({
            bind: !0,
            title: "",
            content: t.content,
            confirmText: !1,
            cancelText: !1,
            wrapClass: "commercial-props-wrap",
            inline: !1,
            onOpen: function(i) {
                e(i, t)
            },
            onClose: function() {}
        })
    }
    function i(e) {
        return '<div class="commercial-props-content">' + s.group(e) + '<div class="item-description">' + s.key(e[0]) + "</div></div>"
    }
    var s = {
        top: function(e) {
            return Utemplate('<div class="commercial-group-top"><h3><%this.title%></h3><span class="gray"><%this.description%></span></div>', e)
        },
        footer: function(e) {
            return Utemplate('<div class="commercial-footer"><span class="btn btn-sure fr"><%this.text%></span><%if(this.cancelText){%><span class="btn btn-outline fr"><%this.cancelText%></span><%}%><div class="commercial-props-account fr"><p class="price"><span class="amount"><%this.beanCount%></span> <span class="unit"><%this.unitDesc%></span></p><p class="discount-price"><%this.discountDesc%></p></div></div>', {
                beanCount: $.isArray(e.priceList) ? e.priceList[e.priceList.length - 1].beanCount : e.beanCount,
                discountDesc: e.discountDesc,
                text: "立即购买",
                cancelText: e.cancelText,
                unitDesc: e.unitDesc
            })
        },
        group: function(e) {
            return Utemplate('<ul class="commercial-props-group"><%for(var i=0; i<this.list.length;i++){%><li data-card-id="<%this.list[i].cardId%>"><h5><%this.list[i].article%></h5><p class="desc"><%this.list[i].description%></p><p class="price"><%this.list[i].price%></p></li><%}%></ul>', {
                list: e.map(function(e) {
                    return 7 == e.cardId ? {
                        cardId: e.cardId,
                        article: "沟通钥匙",
                        description: "限沟通1位牛人",
                        price: e.beanCount + "直豆/次"
                    } : 8 == e.cardId ? {
                        cardId: e.cardId,
                        article: "VIP账号",
                        description: "专享每日" + e.title.replace(/[^0-9]/gi, "") + "人沟通权益！",
                        price: e.beanCount + "直豆/月"
                    } : e
                })
            })
        },
        vip: function(e) {
            return Utemplate('<div class="vip-list"><table cellpadding="0" cellspacing="0"><thead><tr><td width="180">权益类型</td><td width="180">免费账号权益</td><td width="180">VIP专享权益</td></tr></thead><tbody><%for (var i=0; i<this.categoryList.length; i++) {%><tr><td><%this.categoryList[i].name%></td><td><%this.categoryList[i].currentRight%></td><td><%this.categoryList[i].vipRight%></td></tr><%}%></tbody></table></div>', e)
        },
        key: function() {
            return '<div class="props-chat-key"><i class="icon-locked"></i><span>一键解锁心仪牛人，沟通畅聊无阻解锁后，该牛人长期沟通有效</span></div>'
        }
    }
      , n = {}
      , a = function() {
        var e = $(".commercial-props-wrap .dialog-container")
          , t = r()
          , i = 7 == t.cardId ? "直豆/次" : "直豆/月"
          , s = '<p class="price"><span class="amount">' + t.beanCount + '</span> <span class="unit">' + i + "</span></p>";
        e.find(".commercial-props-account").html(s)
    }
      , r = function() {
        var e = $(".commercial-props-wrap .dialog-container")
          , t = e.find(".commercial-props-group .selected").attr("data-card-id");
        return n.cardList.find(function(e) {
            return e.cardId == t
        })
    };
    return {
        block: function(e, a, r) {
            if (n = e,
            e.cardList.length < 2) {
                var o = e.cardList[0];
                return o.article = "今日沟通人数已达上限<span>购买沟通钥匙，解锁该牛人</span>",
                a(o, o),
                !1
            }
            t({
                content: s.top({
                    title: e.shortDesc ? e.shortDesc.name : "今日沟通人数已达上限",
                    description: e.hlShortDesc ? e.hlShortDesc.name : "购买沟通钥匙，或升级VIP账号"
                }) + i(e.cardList) + s.footer($.extend(e.cardList[0], {
                    cancelText: r.cancelText
                })),
                confirm: function(e, t) {
                    if (a && a(e, t),
                    e.button) {
                        var i = getQueryParams(e.button.url)
                          , s = Block.formatBA(i.ba);
                        Block.action(s),
                        t.ba = s
                    }
                },
                cancel: function() {
                    r.cancel && r.cancel()
                }
            }, e)
        }
    }
}()
  , Commercial = function() {
    function e(e, t) {
        var i = function(e) {
            var i = t.cardList.filter(function(t) {
                return t.cardId == e
            })[0];
            if (!i.priceList)
                return i;
            var s = $(".commercial-content:visible").find("input:checked").parents("tr").index();
            return i.priceList[s]
        }
          , s = function(e) {
            return e.find(".commercial-tab .selected").length ? e.find(".commercial-tab .selected").attr("data-card-id") : t.cardList[0].cardId
        }
          , n = function(e) {
            var n = s(e)
              , a = t.cardList.filter(function(e) {
                return e.cardId == n
            })[0]
              , r = {
                discountDesc: i(n).discountDesc,
                beanCount: i(n).beanCount,
                confirmText: a.button.text
            };
            r.confirmText && e.find(".commercial-footer .btn-sure").text(r.confirmText);
            var o = "";
            void 0 != r.beanCount && (o += '<p class="price">' + r.beanCount + " 直豆</p>"),
            r.discountDesc && (o += '<p class="discount-price">' + r.discountDesc + "</p>"),
            e.find(".commercial-footer .combo-account").html(o)
        }
          , a = function(e) {
            e.find(".commercial-tab li").off("click").on("click", function() {
                var t = $(this).index()
                  , i = e.find(".commercial-content").eq(t);
                e.find(".commercial-tab .selected").removeClass("selected"),
                $(this).addClass("selected"),
                e.find(".commercial-content").hide(),
                i.show(),
                n(e)
            }),
            e.find(".commercial-tab li").eq(0).trigger("click")
        }
          , r = function(e) {
            e.find(".commercial-content td").off("click").on("click", function(e) {
                var t = $(this).parents("tr").find("label.radio");
                t.length && !$.contains(this, e.target) && t.trigger("click")
            })
        }
          , o = function(n) {
            var a = s(n)
              , r = t.cardList.filter(function(e) {
                return e.cardId == a
            })[0]
              , o = i(a);
            o.cardId = a,
            o.title = r.title,
            e.confirm(r, o)
        };
        $.dialog({
            bind: !0,
            title: "",
            content: e.content,
            confirmText: !1,
            cancelText: !1,
            wrapClass: "commercial-wrap",
            inline: !0,
            onOpen: function(t) {
                var i = $(t)
                  , s = this;
                a(i),
                r(i),
                i.find(".btn-sure").off("click").on("click", function() {
                    o(i),
                    s.close()
                }),
                i.find(".btn-outline").off("click").on("click", function() {
                    e.cancel(i),
                    s.close()
                }),
                i.find("input[type=radio]").length && i.find("input[type=radio]").off("change").on("change", function() {
                    n(i)
                })
            },
            onClose: function() {}
        })
    }
    var t = {
        top: function(e) {
            return Utemplate('<div class="commercial-top"><p class="title"><%this.title%></p><%if(this.description != ""){%><p class="description"><%this.description%></p><%}%></div>', e)
        },
        footer: function(e) {
            return Utemplate('<div class="commercial-footer"><p class="fl">如企业需要批量采购，请联系客服 <span class="phone">400-065-5799</span></p><span class="btn btn-sure fr"><%this.text%></span><%if(this.cancelText){%><span class="btn btn-outline fr"><%this.cancelText%></span><%}%><div class="combo-account fr"><p class="price"><%this.beanCount%> 直豆</p><p class="discount-price"><%this.discountDesc%></p></div></div>', {
                beanCount: $.isArray(e.priceList) ? e.priceList[e.priceList.length - 1].beanCount : e.beanCount,
                discountDesc: e.discountDesc,
                text: e.button.text,
                cancelText: e.cancelText
            })
        },
        tab: function(e) {
            return Utemplate('<ul class="commercial-tab"><%for(var i=0;i<this.list.length;i++){%><li data-card-id="<%this.list[i].cardId%>"><%this.list[i].title%></li><%}%></ul>', {
                list: e
            })
        },
        trial: function(e) {
            return Utemplate('<div class="commercial-content trial-panel"><ul><%for(var i=0; i<this.categoryList.length; i++){%><li><p class=""><span class="num"><%this.categoryList[i].count%></span><%this.categoryList[i].unitDesc%></p><span class="gray"><%this.categoryList[i].bottomDesc%></span></li><%}%></ul><p class="gray"><%this.bottomDesc%></p></div>', e)
        },
        vip: function(e) {
            return Utemplate('<div class="commercial-content vip-panel"><table><thead><tr><td class="title">VIP权益</td><td class="own">当前账号</td><td class="vip">VIP账号</td></tr></thead><tbody><%for (var i=0; i<this.categoryList.length; i++) {%><tr><td class="title"><%this.categoryList[i].name%></td><td class="own"><%this.categoryList[i].currentRight%></td><td class="vip"><%this.categoryList[i].vipRight%></td></tr><%}%></tbody></table><p class="gray"><%this.bottomDesc%></p></div>', e)
        },
        flow: function(e) {
            return Utemplate('<div class="commercial-content flow-panel"><table><thead><td>每日沟通总量人数</td><td class="tc">赠送主动查看人数</td><td class="tc">有效期</td><td class="tr">价格</td></thead><tbody><%for(var i=0; i<this.list.length; i++){%><tr><td><label class="radio"><input type="radio" name="flowCombo" value="0" checked="checked"><span><%this.list[i].chat%></span><%if(this.list[i].showType == 4){%><i class="icon-rec">荐</i><%}%></label></td><td class="tc"><%this.list[i].view%></td><td class="tc"><%this.list[i].inDate%></td><td class="tr"><%this.list[i].beanCount%></td></tr><%}%></tbody></table><p class="gray"><%this.bottomDesc%></p></div>', {
                list: function(e) {
                    var t = [];
                    return $.each(e, function(e, i) {
                        t.push({
                            showType: i.showType,
                            chat: i.chatDescList[0],
                            view: "+" + 2 * parseInt((i.chatDescList[0] + "").replace(/\D/g, ""), 10) + "次",
                            inDate: i.chatDescList[1],
                            beanCount: i.chatDescList[2]
                        })
                    }),
                    t
                }(e.priceList),
                bottomDesc: e.bottomDesc
            })
        },
        position: function(e) {
            return Utemplate('<div class="commercial-content hot-panel"><table><tbody><%for(var i=0; i<this.list.length; i++){%><tr><td><label class="radio"><input type="radio" name="hotCombo" value="0" checked="checked"><span><%this.list[i].priceName%></span><%if(i==this.list.length-1){%><i class="icon-rec">荐</i><%}%></label></td><td class="tc"><%this.list[i].chat%></td><td class="tc"><%this.list[i].view%></td><td class="price"><%this.list[i].beanCount%>直豆／月</td></tr><%}%></tbody></table><p class="gray"><%this.bottomDesc%></p></div>', {
                list: function(e) {
                    var t = [];
                    return $.each(e, function(e, i) {
                        t.push({
                            priceName: i.priceName,
                            beanCount: i.beanCount,
                            chat: i.descList[0].count + i.descList[0].unitDesc + i.descList[0].bottomDesc,
                            view: i.descList[1].count + i.descList[1].unitDesc + i.descList[1].bottomDesc
                        })
                    }),
                    t
                }(e.priceList),
                bottomDesc: e.bottomDesc
            })
        }
    }
      , i = {
        vipPrice: function(e) {
            var t = $.Deferred()
              , e = e || {
                sf: 10
            };
            return $.get("/bossweb/vip2/price.json", e, function(e) {
                1 == e.rescode ? t.resolve(e.blockPageData) : $.toast({
                    type: "error",
                    content: e.resmsg
                })
            }),
            t
        }
    }
      , s = function(e) {
        return 1 == e.cardId ? t.trial(e) : 2 == e.cardId ? t.position(e) : 3 == e.cardId ? t.vip(e) : 4 == e.cardId ? t.flow(e) : void 0
    }
      , n = function(e) {
        var i = []
          , n = [];
        return e.length < 2 ? s(e[0]) : ($.each(e, function(e, t) {
            i.push({
                title: t.title,
                cardId: t.cardId
            }),
            n.push(s(t))
        }),
        t.tab(i) + '<div class="combo-group">' + n.join("") + "</div>")
    }
      , a = function(i, s, a) {
        var a = a || {};
        if (i.cardList.length < 1)
            return !1;
        var r = i.cardList[0].cardId
          , o = i.cardList.find(function(e) {
            return 7 === e.cardId
        });
        if (i.cardList.length > 1 || 5 == r || 6 == r || o)
            return o ? CommercialVip.block(i, s, a) : CommercialGroup.block(i, s, a),
            !0;
        e({
            content: t.top({
                title: i.shortDesc.name,
                description: i.hlShortDesc ? i.hlShortDesc.name : ""
            }) + n(i.cardList) + t.footer($.extend(i.cardList[0], {
                cancelText: a.cancelText
            })),
            confirm: function(e, t) {
                if (s && s(e, t),
                e.button) {
                    var i = getQueryParams(e.button.url)
                      , n = Block.formatBA(i.ba);
                    Block.action(n),
                    t.ba = n
                }
            },
            cancel: function() {
                a.cancel && a.cancel()
            }
        }, i)
    };
    return {
        vip: function(e, t) {
            var s = !1;
            i.vipPrice(e).then(function(e) {
                a(e, function(e, i) {
                    var n = $.extend({
                        isPurchase: !0,
                        business: e.business,
                        targetType: e.targetType
                    }, i);
                    window.top.Purchase.commercial({
                        priceId: n.encryptPriceId,
                        targetId: e.encryptTargetId,
                        business: n.business || "",
                        targetType: n.targetType
                    }, {
                        item: n,
                        success: function() {
                            !s && t && "function" == typeof t && (t(),
                            s = !0)
                        }
                    })
                })
            })
        },
        block: a
    }
}()
  , SearchChatingCard = function() {
    function e() {
        function n() {
            var e = $(".commercial-props-wrap .dialog-container")
              , t = e.find(".commercial-props-group .selected").attr("data-card")
              , i = l()
              , s = "chat" === t ? "buy-chating-card" : "buy-geek-call";
            i.vipSave = parseInt(i.price) - i.vipPrice,
            i.vipSaveText = i.vipSave > 0 ? '<p class="vip-save-desc"><i class="vip-discount-sign"></i>为您节省<span class="vip-save-amount">¥' + i.vipSave + "</span></p>" : "",
            __conversion(s);
            var n = function() {
                o.option.success({
                    card: t,
                    item: i,
                    left: o.option.left,
                    chat: o.option.data.searchChatCard.chatCount
                })
            }
              , a = {
                url: "/boss/item/buy/othItem/" + i.id + ".json",
                amount: parseInt(i.price, 10),
                itemId: i.id,
                data: {},
                success: n
            };
            "call" == t && (a.data.buyCount = i.count);
            var r = {
                success: n
            };
            Payment.purchase(a, r)
        }
        function a(e, i) {
            var a = $(e)
              , r = {
                0: "",
                1: "item-vip-unbought",
                2: "item-vip-bought"
            };
            a.addClass(r[t.option.data.vipPriceStatus]),
            a.on("click", ".commercial-props-group li", function() {
                a.find(".commercial-props-group .selected").removeClass("selected"),
                $(this).addClass("selected");
                var e = o.option.data
                  , t = $(this).attr("data-card")
                  , i = "call" == t ? e.geekRights : e.searchChatCard;
                "call" == t ? a.find(".item-description").html(s.call(o.option.left, i)) : a.find(".item-description").html(s.chat(i)),
                d()
            }),
            a.on("click", ".item-call-list p", function() {
                a.find(".item-call-list .selected").removeClass("selected"),
                $(this).addClass("selected"),
                d()
            }),
            a.on("click", ".btn-sure", function() {
                var e = $(".commercial-props-wrap .dialog-container")
                  , t = e.find(".commercial-props-group .selected").attr("data-card");
                o.option.left > 0 && "call" == t ? (o.option.success({
                    card: t,
                    left: o.option.left
                }),
                __conversion("use-geek-call")) : n(),
                i.close()
            }),
            d()
        }
        function r(e, t) {
            $.dialog({
                bind: !0,
                title: "",
                content: e.content,
                confirmText: !1,
                cancelText: !1,
                wrapClass: "commercial-props-wrap",
                inline: !1,
                onOpen: function(e) {
                    a(e, this)
                },
                onClose: function() {}
            })
        }
        var o = this
          , c = function(e) {
            e.left = o.option.left;
            var t = e.left > 0 ? "call" : "chat"
              , i = "call" === t ? e.geekRights : e.searchChatCard
              , n = "call" === t ? s.call(o.option.left, i) : s.chat(i)
              , a = s.group(t, e);
            r({
                content: s.top() + '<div class="commercial-props-content">' + a + '<div class="item-description">' + n + "</div></div>" + s.footer(o.option.left, i),
                confirm: function(e, t) {},
                cancel: function() {
                    option.cancel && option.cancel()
                }
            }, e)
        }
          , l = function() {
            var e = $(".commercial-props-wrap .dialog-container")
              , t = e.find(".commercial-props-group .selected").attr("data-card")
              , i = "call" == t ? o.option.data.geekRights : o.option.data.searchChatCard;
            return $.isArray(i) ? i[e.find(".item-call-list .selected").length ? e.find(".item-call-list .selected").index() : i.length - 1] : i
        }
          , d = function() {
            var e = $(".commercial-props-wrap .dialog-container")
              , s = e.find(".commercial-props-group .selected").attr("data-card")
              , n = l()
              , a = t.option.data.vipPriceStatus > 0
              , r = n.economize ? parseInt(n.economize, 10) : 0
              , c = '<p class="price"><span class="amount">' + n.price + '</span> <span class="unit">直豆</span></p>';
            if ("call" == s && o.option.left > 0)
                return e.find(".commercial-props-account").html(""),
                e.find(".btn-sure").text("立即使用"),
                !1;
            e.find(".btn-sure").text("立即购买"),
            r && (c += '<p class="discount-price"><span>.</span>' + (r + parseInt(n.price, 10)) + "直豆</p>"),
            a && (n.vipPrice > 0 || n.originalPrice > n.price) ? e.find(".commercial-props-account").html(i(n, "直豆")) : e.find(".commercial-props-account").html(c)
        };
        o.include = function(e) {
            o.option = e;
            var t = e.data;
            return !!(t.geekRights && t.searchChatCard && t.canBuySearchCard) && (c(t),
            !0)
        }
        ,
        o.shopping = function(e) {
            $.get("/boss/item/getGeekInfoRightAndBeanCount.json", function(t) {
                t.canBuySearchCard ? (o.option = {
                    data: t,
                    success: e.success || function() {}
                },
                c(t)) : PropShop.geekPropCall.buy(e)
            })
        }
        ,
        o.confirm = function(e) {
            var t = {
                bind: !0,
                title: "使用成功",
                wrapClass: "flex-dialog-wrap dialog-prop-confirm",
                description: "已为您向牛人发起沟通并索要简历",
                cancelText: "查看对话",
                confirmText: "继续搜索",
                onCancel: function() {
                    this.close("cancel")
                },
                onConfirm: function(e) {
                    this.close("confirm")
                },
                onClose: function() {}
            }
              , i = e || {}
              , s = $.extend(t, i);
            s.content = '<div class="prop-confirm-content">' + s.description + "</div>",
            $.dialog(s)
        }
        ,
        e = function() {
            return o
        }
    }
    var t = new e
      , i = function(e, i) {
        var s = t.option.data;
        return 1 == s.vipPriceStatus && e.vipPrice > 0 ? '<span class="amount">' + e.price + '</span><span class="unit">' + i + '</span><span class="text-gray-price">' + e.vipPrice + i + '</span><i class="vip-discount-sign"></i>' : 2 == s.vipPriceStatus && e.originalPrice > e.price ? '<span class="amount">' + e.price + '</span><span class="unit">' + i + '</span><i class="vip-discount-sign"></i><span class="text-gray-price">' + e.originalPrice + i + "</span>" : '<span class="amount">' + e.price + '</span><span class="unit">' + i + "</span>"
    }
      , s = {
        top: function(e) {
            return Utemplate('<div class="commercial-group-top"><h3>请选择道具</h3></div>', e)
        },
        footer: function(e, t) {
            var i = function() {
                if ($.isArray(t)) {
                    var i = t.length - 1;
                    return t[i].showPrice = e < 0,
                    t[i]
                }
                return t.showPrice = !0,
                t
            }();
            return Utemplate('<div class="commercial-footer"><span class="btn btn-sure fr"><%this.text%></span><%if(this.cancelText){%><span class="btn btn-outline fr"><%this.cancelText%></span><%}%><div class="commercial-props-account fl"><%if(this.showPrice){%><p class="price"><span class="amount"><%this.beanCount%></span> <span class="unit"><%this.unitDesc%></span></p><p class="discount-price"><%this.discountDesc%></p><%}%></div></div>', {
                beanCount: i.price,
                discountDesc: i.economize || "",
                text: i.button ? i.button.text : "立即购买",
                cancelText: t.cancelText,
                unitDesc: "直豆",
                showPrice: i.showPrice
            })
        },
        group: function(e, t) {
            var s = t.geekRights[0]
              , n = '<ul class="commercial-props-group"><li <%if(this.card == "call"){%>class="selected"<%}%> data-card="call"><h5>牛人电话</h5><p class="desc">联络1位心仪牛人<br>48小时 不成功退道具</p><%if(0 < this.left){%><p class="left">剩余<%this.left%>个</p><%}else{%><p class="price">' + i(s, "直豆/个") + '<%}%></li><li <%if(this.card != "call"){%>class="selected"<%}%> data-card="chat"><h5>搜索畅聊卡</h5><p class="desc">搜索达人必备<%this.searchChatCard.chatCount%>次沟通权益<br>一键解锁立即沟通</p><p class="price">' + i(t.searchChatCard, "直豆/月") + "</p></li></ul>";
            return t.card = e,
            Utemplate(n, t)
        },
        chat: function(e) {
            return '<div class="search-desc-list"><dl><dd><i class="card-free"></i></dd><dt>30天畅聊</dt><dd>30日内畅聊' + e.chatCount + '位匿名牛人，搜索/推荐匿名牛人均可使用</dd></dl><dl><dd><i class="card-resume"></i></dd><dt>快速获取简历</dt><dd>短信通知牛人直接索要简历<br>同意投递自动发送至邮箱</dd></dl><dl><dd><i class="card-chat"></i></dd><dt>立即联络匿名牛人</dt><dd>直接对心仪匿名牛人开始沟通，不消耗每日沟通权益</dd></dl></div>'
        },
        call: function(e, i) {
            return Utemplate('<div class="search-desc-list "><dl><dd><i class="card-geek"></i></dd><dt>精准搜索大牛</dt><dd>搜索公司/职位/技能，多维度精准定位你的心仪牛人</dd></dl><dl><dd><i class="card-call"></i></dd><dt>快速获取电话、简历</dt><dd>直接向牛人发送投递邀请，投递后电话简历直接发送至邮箱</dd></dl><dl><dd><i class="card-back"></i></dd><dt>不成功退道具</dt><dd>如牛人拒绝投递或48小时内无答复，将退还您的道具</dd></dl></div><%if(this.left == 0 || !this.left){%><div class="item-call-list"><%for(var i=0; i<this.list.length; i++){%><p <%if(i == (this.list.length - 1)){%>class="selected icon-discount"<%}%> ><%this.list[i].count%>个<i class="vline"></i><%this.list[i].price%>直豆<%if (this.bought && 0 < this.list[i].vipPrice){%><i class="vip-discount-sign"></i><%}%></p><%}%></div><%}%>', {
                left: e,
                list: i,
                bought: 2 == t.option.data.vipPriceStatus
            })
        }
    };
    return t
}()
  , GeekHotProp = function() {
    var e = {}
      , t = {}
      , i = {
        combo: function() {
            var t = {
                title: e.title,
                single: e.cardList[0],
                group: e.cardList[1]
            };
            return t.group.leftCount > 0 && (t.group.itemNote = "(1/" + t.group.leftCount + ")"),
            Utemplate('<div class="drop-help-panel"><ul><li><i></i>技术类牛人是指您使用部分技术类职位沟通的牛人</li><li><i></i>目前，您与主动沟通的此类牛人继续沟通时需购买以下商品</li></ul></div><h3 class="title"><%this.title%><i class="icon-help"></i></h3><p class="description gray">使用免费次数与牛人继续沟通</p><div class="geek-hot-group"><ul><li class="item-single <%if(0 < this.single.freeCount){%>item-remain<%}%>"><div class="geek-hot-item"><%if(this.single.showType == 1){%><p class="corner-mark"><span>今日还有<%this.single.freeCount%>次免费</span></p><%}%><p class="item-name"><%this.single.itemNote%></p><span class="item-price"><%this.single.itemName%></span></div></li><li class="item-group <%if(0 < this.group.leftCount){%>item-left<%}%>"><div class="geek-hot-item"><%if(this.group.showType == 1){%><p class="corner-mark"><span>推荐道具</span></p><%}%><p class="item-name"><b><%this.group.itemName%></b></p><p class="item-price"><%this.group.itemNote%></p><p class="item-limit"><%this.group.expireDesc%></p></div></li></ul></div>', t)
        }
    }
      , s = function(t, i) {
        var s = t.find(".geek-hot-group .selected").index()
          , n = i || e.cardList[s]
          , a = n.freeCount > 0 ? "使用免费次数与牛人继续沟通" : "使用以下道具与牛人继续沟通";
        t.find(".btn-sure").text(n.button.text),
        t.find(".description").text(a)
    }
      , n = function() {
        $.dialog({
            bind: !0,
            title: "",
            content: i.combo(),
            confirmText: "立即购买",
            cancelText: !1,
            wrapClass: "prop-hot-geek",
            onOpen: function(t) {
                $(t).on("click", ".geek-hot-group li", function() {
                    $(t).find(".selected").removeClass("selected"),
                    $(this).addClass("selected"),
                    s($(t))
                }),
                $(t).on("click", ".icon-help", function() {
                    $(t).addClass("geek-help-open")
                }),
                $(t).on("click", function(e) {
                    $(e.target).hasClass("icon-help") || $(e.target).hasClass("drop-help-panel") || $(e.target).closest("div").hasClass("drop-help-panel") || $(t).removeClass("geek-help-open")
                });
                var i = e.cardList[0].freeCount > 0 ? 0 : 1;
                $(t).find(".geek-hot-group li").eq(i).addClass("selected"),
                s($(t), e.cardList[i])
            },
            onConfirm: function(i) {
                var s = $(i).find(".geek-hot-group .selected").index()
                  , n = e.cardList[s]
                  , a = function() {
                    Payment.success({
                        article: "购买成功",
                        text: "已购买" + n.itemNote + "牛人沟通权益，" + (n.expireDesc ? n.expireDesc + "。" : "") + "您可以直接在对话中和牛人沟通",
                        confirm: function() {
                            t.callBack(n)
                        }
                    })
                };
                if ((n.freeCount > 0 || n.leftCount > 0) && t.callBack)
                    t.callBack(n);
                else {
                    var r = {
                        prePayUrl: "/boss/block/prepay.json",
                        url: "/boss/block/pay.json",
                        amount: n.beanCount,
                        description: 15 == n.cardId ? "购买道具：「极客畅聊卡」" : "购买道具：「技术牛人」沟通",
                        data: {
                            priceId: n.priceId,
                            business: n.business,
                            targetType: n.targetType,
                            targetId: n.encryptTargetId
                        },
                        success: a
                    }
                      , o = {
                        success: a
                    };
                    window.top.Payment.purchase(r, o)
                }
                $(i).remove()
            }
        })
    };
    return {
        shop: function(i, s) {
            e = i,
            t = s,
            n()
        }
    }
}()
  , PropShop = function() {
    function e() {
        var t = this
          , i = {
            props: function(e) {
                return e.geekRights.map(function(t) {
                    return t.style = 10 == t.count ? "selected hot" : "",
                    t.price = parseInt(t.price, 10),
                    t.isVip = e.vipPriceStatus > 0 && (t.vipPrice > 0 || t.isVipItem),
                    t.isVip && (t.style += 1 == e.vipPriceStatus ? " prop-item-unbought" : " prop-item-bought"),
                    t
                }),
                Utemplate('<h3 class="prop-call-title">购买牛人电话</h3><div class="prop-cont prop-sells"><ul><%for(var i=0;i<this.geekRights.length; i++){%><li data-id="<%this.geekRights[i].id%>" class="<%this.geekRights[i].style%>" ><%if(this.geekRights[i].isVipItem && this.vipPriceStatus == 2){%><i class="vip-discount-sign"></i><span class="text-orange fr">￥<%this.geekRights[i].price%></span><span class="text-gray-price">￥<%this.geekRights[i].originalPrice%></span><%}else if(0 < this.geekRights[i].vipPrice && this.vipPriceStatus == 1){%><i class="vip-discount-sign"></i><span class="text-gray-price">￥<%this.geekRights[i].vipPrice%></span><span class="text-orange fr">￥<%this.geekRights[i].price%></span><%}else{%><span class="text-orange fr">￥<%this.geekRights[i].price%></span><%}%><p class="fl">购买<%this.geekRights[i].count%>个牛人电话<%if(this.geekRights[i].economize!=0){%><span class="gray">（节省￥<%this.geekRights[i].economize%>）</span><%}%></p></li><%}%></ul><div class="sells-pay"></div></div>', e)
            },
            consume: function(e) {
                return Utemplate('<div class="prop-chat"><h3>使用牛人电话道具联系牛人</h3><p class="gray">请选择与牛人沟通的职位</p><div class="dropdown-wrap J_stickPosition"><span class="dropdown-select"><i class="icon-select-arrow"></i><input type="text" placeholder="待沟通的职位" class="ipt sel-active" readonly=""><p class="input-mask"><%this.job.jobName%><i class="vline"></i><%this.job.lowSalary%>-<%this.job.highSalary%>K</p><input type="hidden" value="<%this.job.encryptId%>"></span><div class="dropdown-menu"><ul><%for(var i=0;i<this.jobs.length;i++){%><li data-id="<%this.jobs[i].encryptId%>"><%this.jobs[i].jobName%><i class="vline"></i><%this.jobs[i].lowSalary%>-<%this.jobs[i].highSalary%>K</li><%}%></ul></div></div></div>', e)
            }
        }
          , s = {
            props: function() {
                var e = $.Deferred();
                return $.get("/boss/item/getGeekInfoRightAndBeanCount.json", function(t) {
                    e.resolve(t)
                }),
                e
            },
            job: function(e) {
                var t = $.Deferred();
                return $.get("/boss/item/getJobByGeekId.json", e, function(e) {
                    t.resolve(e)
                }),
                t
            },
            jobList: function() {
                var e = $.Deferred();
                return $.get("/chat/user/joblist.json", function(t) {
                    e.resolve(t.data)
                }),
                e
            },
            consume: function(e, t) {
                var i = $.Deferred();
                return $.get("/boss/item/useGeekInfoRight/" + e + ".json", t, function(e) {
                    i.resolve(e)
                }),
                i
            }
        };
        t.consume = function(e, t) {
            $.when(s.jobList(), s.job(e)).then(function(n, a) {
                if (!n || n && n.length < 1)
                    return Block.confirm({
                        title: "您暂时不能与这位牛人开聊！",
                        description: "请至少发布一个开放职位"
                    }),
                    !1;
                a.jobs = n,
                $.dialog({
                    bind: !0,
                    title: "",
                    closeText: !1,
                    content: i.consume(a),
                    confirmText: "联系牛人",
                    cancelText: !1,
                    wrapClass: "prop-item-chat",
                    onOpen: function(e) {
                        DropDown.init($(e)),
                        $(e).on("click", ".dropdown-menu li", function() {
                            $(e).find(".input-mask").html($(this).html()),
                            $(e).find(".J_stickPosition input[type=hidden]").val($(this).attr("data-id"))
                        })
                    },
                    onConfirm: function(i) {
                        var n = $(i).find(".J_stickPosition input[type=hidden]").val();
                        $(i).find(".btn-sure").addClass("disabled"),
                        s.consume(n, e).then(function(e) {
                            t.success && t.success(e),
                            $(i).remove()
                        })
                    }
                })
            })
        }
        ,
        t.buy = function(e) {
            var e = e || {}
              , t = function(t) {
                var s = function() {
                    var e = $(".prop-item-call .selected").attr("data-id");
                    return t.geekRights.find(function(t) {
                        return t.id == e
                    })
                };
                $.dialog({
                    bind: !0,
                    title: "",
                    closeText: !1,
                    content: i.props(t),
                    confirmText: "购买",
                    cancelText: !1,
                    wrapClass: "prop-item-call",
                    onOpen: function(e) {
                        var i = function() {
                            var i = s()
                              , n = parseInt(i.price, 10)
                              , a = '<p class="fr">需要支付：<em class="text-orange">¥' + (t.beanCount > n ? 0 : n - t.beanCount) + "</em></p><p><span>金额：¥" + n + "</span><span>余额：¥" + t.beanCount + "</span></p>";
                            $(e).find(".sells-pay").html(a)
                        };
                        $(e).on("click", ".prop-sells li", function() {
                            $(e).find(".selected").removeClass("selected"),
                            $(this).addClass("selected"),
                            i()
                        }),
                        i()
                    },
                    onConfirm: function(t) {
                        var i = s();
                        i.vipSave = i.originalPrice - i.price,
                        i.vipSaveText = i.vipSave > 0 ? '<p class="vip-save-desc"><i class="vip-discount-sign"></i><span>为您节省</span><span class="vip-save-amount">¥' + i.vipSave + "</span></p>" : "";
                        var n = function(t) {
                            e.success && e.success(i)
                        }
                          , a = {
                            url: "/boss/item/buy/othItem/" + i.id + ".json",
                            amount: i.price,
                            description: "购买道具：「牛人电话」- " + i.count + " 个",
                            data: {
                                buyCount: 1
                            },
                            itemId: i.id,
                            success: n
                        }
                          , r = {
                            success: n
                        };
                        this.close(),
                        window.top.Payment.purchase(a, r)
                    }
                })
            };
            e.props ? t(e.props) : s.props().then(function(e) {
                t(e)
            })
        }
        ,
        e = function() {
            return t
        }
    }
    return {
        geekPropCall: new e
    }
}();
Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
    var i;
    if (null == this)
        throw new TypeError('"this" is null or not defined');
    var s = Object(this)
      , n = s.length >>> 0;
    if (0 === n)
        return -1;
    var a = 0 | t;
    if (a >= n)
        return -1;
    for (i = Math.max(a >= 0 ? a : n - Math.abs(a), 0); i < n; ) {
        if (i in s && s[i] === e)
            return i;
        i++
    }
    return -1
}
),
Array.prototype.isArray || (Array.prototype.isArray = function(e) {
    return "[object Array]" === Object.prototype.toString.call(e)
}
);
var chatUserModel, chatUserView, chatUserPresenter;
!function() {
    function e(t) {
        var i = this
          , n = [];
        i.connect = function(e) {
            Array.isArray(e) && (n = n.concat(e))
        }
        ,
        i.add = function(e) {
            n.push(e)
        }
        ,
        i.filter = function(e, t) {
            var i = s.filter()
              , n = i.top.length;
            if (!e)
                return t({
                    top: i.top,
                    list: i.normal.slice(0, 100 - n)
                });
            var a = []
              , r = [].concat(e)
              , o = function(e) {
                for (var t = r.length; t--; )
                    r[t] == e && r.splice(t, 1)
            };
            return $.each(i, function(e, t) {
                r.indexOf(t.uid) > -1 && (a.push(t),
                o(t.uid))
            }),
            {
                group: a,
                exclusive: r
            }
        }
        ,
        i.aggregator = new EventManger,
        e = function() {
            return i
        }
    }
    function t(e, t) {
        function i(e) {
            var t = $(".condition-filter dl")
              , i = $(".chat-container .op-category .cur")
              , s = $(".top-chat .dropdown-select").attr("data-jobid")
              , n = {
                page: 0,
                status: i.attr("data-status") ? i.attr("data-status") : "",
                origin: i.attr("data-origin") ? i.attr("data-origin") : "-1",
                jobid: s || "-1",
                rank: 1,
                salary: t.eq(0).find(".cur").attr("data-salary"),
                experience: t.eq(1).find(".cur").attr("data-experience"),
                degree: t.eq(2).find(".cur").attr("data-degree")
            };
            Chat.filterParms = n,
            Chat.groupStatus = n.status,
            e && e.find(".icon-category-refresh").addClass("loading-category-refresh"),
            Chat.usersInitStatus && Chat.getFilterUsers(n, null, !1)
        }
        var a = []
          , r = $(".chat-container")
          , o = t;
        this.toggleStick = function() {
            var e = $(".user-list .cur")
              , t = e.parents("ul").hasClass("top-list")
              , i = t ? a.top : a.list
              , n = i[e.index()];
            n.isTop = Number(!t),
            s.setStatus(n.uid, n),
            o.toggleStick(e, t)
        }
        ,
        this.filter = function() {}
        ,
        this.flushJob = function() {
            Chat.filterRadio = !1,
            Chat.filterGroup = !1,
            $(".top-chat .dropdown-menu li:first-child").length ? $(".top-chat .dropdown-menu li:first-child").trigger("click") : i()
        }
        ,
        this.batch = function(e, t) {
            $.each(e, function(e, i) {
                Chat.usersData[i].relationType = t,
                o.batch(i, t)
            })
        }
        ,
        this.setStatus = function(e, t, i) {
            var s = void 0 == i || i;
            t && (Chat.usersData[e].relationType = t,
            o.transformation(t, e, s))
        }
        ,
        this.viewed = function(e) {
            o.viewed(e)
        }
        ,
        this.init = function(e) {
            o.render()
        }
        ;
        var c = function() {
            if (($(this).attr("data-status") || $(this).attr("data-origin")) && !$(this).hasClass("cur")) {
                Chat.curUserData && Chat.setDraft(Chat.curUserData.uid),
                r.find(".op-category .cur").removeClass("cur"),
                $(this).addClass("cur"),
                i();
                var e = $(this).attr("data-status");
                o = -1 != e && e ? 5 == e ? n.factory("news") : n.factory("other") : n.factory("all"),
                Chat.chatEl.hide(),
                Chat.welcomeEl.show()
            }
        }
          , l = function() {
            $(this).parents("dl").find(".cur").removeClass("cur"),
            $(this).addClass("cur");
            var e = Chat.containerChat.find(".sel-filter");
            e.find(".filter-cancel").length || (e.prepend('<span class="filter-cancel" ka="main_filter_cancel"><i class="icon-category-filter"></i>取消筛选</span>'),
            e.find(".dropdown-select").html("&nbsp;")),
            i()
        }
          , d = function() {
            if (r.find(".group-more .dropdown-wrap").removeClass(".dropdown-menu-open"),
            $(this).attr("data-val")) {
                Chat.curUserData && Chat.setDraft(Chat.curUserData.uid),
                o = n.factory("all"),
                r.find(".group-btns.group-more .btn-filtered").remove();
                var e = '<a href="javascript:;" class="cur btn-filtered" data-origin="' + $(this).attr("data-val") + '">' + $(this).text() + "</a>"
                  , t = r.find(".group-btns.group-more");
                r.find(".op-category .group-btns .cur").removeClass("cur"),
                $(e).insertBefore(t.find(".dropdown-wrap")),
                i()
            }
        }
          , h = function() {
            $(".top-chat .dropdown-select").text($(this).text()).attr("data-jobid", $(this).attr("data-jobid")),
            r.find(".op-category .group-btns .cur").removeClass("cur"),
            r.find(".op-category .group-btns a").eq(0).addClass("cur"),
            r.find(".condition-filter .cur").removeClass("cur"),
            r.find(".filter-cancel").trigger("click"),
            Chat.groupHistory = {},
            i(),
            o = n.factory("all")
        }
          , u = function() {
            r.find(".condition-filter .cur").removeClass("cur"),
            r.find(".condition-filter dl").each(function() {
                $(this).find("a:first-child").addClass("cur")
            });
            var e = Chat.containerChat.find(".sel-filter");
            e.find(".filter-cancel").remove(),
            e.find(".dropdown-select").html('<span class="dropdown-select"><i class="icon-category-filter"></i>筛选</span>'),
            i()
        }
          , p = function(e, t) {
            t && "flush" == t.action && (Chat.filterRadio = !1,
            Chat.filterGroup = !1,
            $(".top-chat .dropdown-menu li:first-child").trigger("click")),
            setTimeout(function() {
                Chat.batchHandle.close()
            }, 10)
        };
        !function() {
            r.on("click", ".op-category .group-btns a", c),
            r.on("click", ".condition-filter dd a", l),
            r.on("click", ".group-more li", d),
            r.on("click", ".sel-refresh", function() {
                if (Chat.filterGroup)
                    return !1;
                i($(this));
                try {
                    _T.sendEvent("Chat_refresh_" + Chat.getPublicStatis().context + "_" + Chat.getPublicStatis().view)
                } catch (e) {}
            }),
            r.on("click", ".filter-cancel", u),
            $(".top-chat .dropdown-menu li").on("click", h),
            $(document).on("MENU_ROUTE_CHAT", p)
        }()
    }
    function i() {
        $(".chat-container");
        this.aggregator = new EventManger,
        this.toggleStick = function(e, t) {
            var i = Number(t)
              , s = e.clone();
            e.remove(),
            $(".user-list ul").eq(i).prepend(s)
        }
        ,
        this.batch = function(e) {}
        ,
        this.viewed = function(e, t) {}
        ;
        this.getTemplate = function(e) {
            return ""
        }
        ,
        this.render = function(e) {}
        ,
        this.renderUser = function() {}
    }
    var s = function() {
        var e = {}
          , t = function(t) {
            var i = !1;
            return $.each(e, function(e, s) {
                if (s.uid == t)
                    return i = e,
                    !0
            }),
            i
        }
          , i = function(t) {
            if (!Array.isArray(t))
                return e
        }
          , s = function(e, t) {}
          , n = function(t, i) {
            e = {
                top: t,
                normal: i
            }
        };
        return {
            push: s,
            filter: i,
            setStatus: function(i, s) {
                var n = t(i)
                  , a = $.extend({}, e[n], s);
                e[n] = a
            },
            enqueue: n
        }
    }()
      , n = function() {
        var e = {}
          , t = {
            6: '<p class="deal-layer icon-commun"><i></i>沟通中</p>',
            7: '<p class="deal-layer icon-pass"><i></i>合适</p>',
            8: '<p class="deal-layer icon-fail"><i></i>不合适</p>',
            77: '<p class="deal-layer icon-fail icon-delete"><i></i>已删除</p>',
            99: '<p class="deal-layer icon-read"><i></i>待处理</p>'
        }
          , s = {
            6: "cur user-communication",
            7: "cur user-pass",
            8: "cur user-fail",
            99: "cur"
        }
          , n = {
            "-1": "全部",
            1: "新",
            5: "待处理的",
            6: "沟通中的",
            7: "合适的",
            8: "不合适的"
        }
          , a = function() {
            Chat.userList.find("li").length < 1 && (Chat.userList.find(".user-blank").remove(),
            Chat.userList.append('<div class="user-blank"><p>暂无' + n[Chat.groupStatus] + "牛人</p></div>"))
        }
          , r = function(e, i, n, r) {
            var o = n ? Chat.userList.find("a[data-uid=" + n + "]").parent("li") : Chat.userList.find(".cur");
            o.find(".deal-layer").length || (o.prepend(t[e]),
            o.attr("class", s[e])),
            o.addClass("dealSlideRight"),
            setTimeout(function() {
                var e = o.next().length ? "next" : "up";
                o.slideUp(function() {
                    i && Chat.curUserData.uid == n && (Chat.chatEl.hide(),
                    Chat.welcomeEl.show(),
                    Chat.changeUserView(o, e)),
                    o.remove(),
                    a()
                })
            }, 500)
        };
        return e.all = function() {
            i.call(this, arguments),
            this.effect = {},
            this.transformation = function(e, t) {
                Chat.usersData[t];
                if (8 == e || 77 == e)
                    r(e, !0, t);
                else {
                    Chat.userList.find("a[data-uid=" + t + "]").parent("li").attr("class", s[e])
                }
            }
            ,
            this.batch = function(e, t) {
                var i = Chat.userList.find("a[data-uid=" + e + "]").parents("li");
                if (8 == t)
                    return void i.remove();
                i.hasClass("cur") ? i.attr("class", s[t]) : i.attr("class", s[t]).removeClass("cur")
            }
        }
        ,
        e.undisposed = function() {
            i.call(this, arguments),
            this.effect = {}
        }
        ,
        e.news = function() {
            i.call(this, arguments),
            this.effect = {},
            this.transformation = function(e, t) {
                r(e, !0, t),
                Chat.newGeek.indexOf(t) > -1 && Chat.newGeek.splice(Chat.newGeek.indexOf(t), 1),
                Chat.totalNewGeek(),
                Chat.groupHistory[5] = void 0
            }
            ,
            this.batch = function(e, t) {
                var i = Chat.userList.find("a[data-uid=" + e + "]").parents("li");
                i.hasClass("cur") && (Chat.chatEl.hide(),
                Chat.welcomeEl.show()),
                i.remove(),
                Chat.newGeek.indexOf(e) > -1 && Chat.newGeek.splice(Chat.newGeek.indexOf(e), 1),
                Chat.totalNewGeek(),
                a()
            }
            ,
            this.viewed = function(e) {
                var t = Chat.userList.find("a[data-uid=" + e + "]").parents("li")
                  , i = Chat.userList.find(".notice-badge:last").closest("li");
                t.length && t.hasClass("modify") && (t.removeClass("modify"),
                function() {
                    var e = t.prev().index() == i.index();
                    return i.length && !e
                }() && function(e) {
                    var t = e.clone().css({
                        height: "0",
                        overflow: "hidden"
                    })
                      , s = i.height();
                    t.insertAfter(i),
                    t.animate({
                        height: s
                    }, 150),
                    e.animate({
                        height: 0,
                        overflow: "hidden"
                    }, 150, function() {
                        e.remove()
                    })
                }(t))
            }
        }
        ,
        e.appropriate = function() {
            i.call(this, arguments),
            this.effect = {}
        }
        ,
        e.inappropriate = function() {
            i.call(this, arguments),
            this.effect = {}
        }
        ,
        e.inContact = function() {
            i.call(this, arguments),
            this.effect = {}
        }
        ,
        e.other = function() {
            i.call(this, arguments),
            this.transformation = function(e, t, i) {
                r(e, i, t)
            }
            ,
            this.batch = function(e, t) {
                var i = Chat.userList.find("a[data-uid=" + e + "]").parents("li");
                i.hasClass("cur") && (Chat.chatEl.hide(),
                Chat.welcomeEl.show()),
                i.remove()
            }
        }
        ,
        {
            factory: function(t) {
                return new e[t]
            }
        }
    }();
    chatUserModel = new e,
    chatUserView = n.factory("all"),
    chatUserPresenter = new t(chatUserModel,chatUserView),
    chatUserPresenter.init()
}();
var ChatGroups = function() {
    function e() {
        var e = this
          , s = []
          , n = [];
        e.list = [],
        e.messages = [],
        e.between = function(e, t) {
            return t && e ? n.filter(function(i) {
                return e <= i.lastTS && t > i.lastTS
            }) : n
        }
        ,
        e.tops = function() {
            return e.list.filter(function(e) {
                return 1 == e.isTop
            }).sort(t)
        }
        ,
        e.add = function(t) {
            e.list.push(t),
            n.push(t)
        }
        ,
        e.get = function(t) {
            return e.list.find(function(e) {
                return e.groupId == t || e.encryptGid == t
            })
        }
        ,
        e.getGroupList = function(t) {
            i.list(1).then(function(i) {
                if (i && i.length) {
                    var a = i.filter(function(e) {
                        return e.isTop
                    })
                      , r = i.filter(function(e) {
                        return !e.isTop
                    });
                    s = a,
                    n = n.concat(r),
                    e.list = i
                }
                t(i);
                for (var o = 0; o < e.messages.length; o++)
                    Chat.countGroupMessage(e.messages[o], {
                        source: "presence"
                    })
            })
        }
        ,
        e.pushMessage = function(t) {
            e.messages.push(t)
        }
    }
    var t = function(e, t) {
        return t.isTop - e.isTop || t.lastTS - e.lastTS
    }
      , i = {
        list: function(e) {
            var t = $.Deferred();
            return $.get("/group/chat/groupInfoList.json?page=" + e, function(e) {
                t.resolve(e.data)
            }),
            t
        }
    };
    return new e
}()
  , GroupMessage = function() {
    var e = function(e) {
        var t = {
            1: "text",
            2: "sound",
            3: "image",
            18: "jobShare",
            19: "resumeShare",
            20: "sticker",
            12: "hyperLink",
            23: "interviewShare"
        };
        return 12 === e.body.type ? s("hyperLink", e).url.indexOf("shareId") > -1 ? "hyperLink" : (e.body.text = e.body.hyperLink.text,
        "system") : t[e.body.type] && 3 !== e.body.templated && 3 !== e.body.templateId ? t[e.body.type] : "system"
    }
      , t = function(e) {
        var t = {
            1: "text",
            2: "text",
            3: "image",
            18: "text",
            19: "text",
            20: "image",
            12: "hyperLink",
            23: "interviewShare"
        };
        return 3 === e.body.templated || 3 === e.body.templateId ? "system" : t[e.body.type]
    }
      , i = function(e, t) {
        var i = "";
        if ("jobShare" === e) {
            var s = "string" == typeof t.body.jobShare ? JSON.parse(t.body.jobShare) : t.body.jobShare;
            i = "[Ta分享了<" + s.position + ">职位，具体请在手机查看]"
        }
        if ("resumeShare" === e) {
            var s = "string" == typeof t.body.resumeShare ? JSON.parse(t.body.resumeShare) : t.body.resumeShare;
            i = "[Ta分享了<" + s.user.name + ">的简历，具体请在手机查看]"
        }
        return t.body.text && (i = t.body.text),
        "image" === e && (i = "发来一张图片"),
        "sticker" === e && (i = "[动画表情]"),
        "interviewShare" === e && (i = t.from.name + "转发了一个面试日程"),
        "sound" === e && (i = t.body.text ? t.body.text : "收到一条语音消息，请在APP查看"),
        i.replace(/</g, "&#60;").replace(/>/g, "&#62;").replace(/\n/g, "<br/>").replace(/\\n/g, "<br/>").replace(/&amp;middot;/g, "&#183;").replace(/&amp;lt;/g, "&#60;").replace(/&amp;gt;/g, "&#62;").replace(/&lt;/g, "&#60;").replace(/&gt;/g, "&#62;").replace(/&middot;/g, "")
    }
      , s = function(e, t) {
        return "hyperLink" === e ? "string" == typeof t.body.hyperLink ? JSON.parse(t.body.hyperLink) : t.body.hyperLink : ""
    }
      , n = function(e, t) {
        return "interviewShare" === e || "sound" === e ? "string" == typeof t.body[e] ? JSON.parse(t.body[e]) : t.body[e] : ""
    }
      , a = function(e, t) {
        if ("image" === e)
            return "string" == typeof t.body.image ? JSON.parse(t.body.image) : t.body.image;
        if ("sticker" === e) {
            if ("string" == typeof t.body.sticker)
                return JSON.parse(t.body.sticker);
            if (t.body.sticker && t.body.sticker.image) {
                var i = t.body.sticker.image;
                return {
                    origUrl: i.originImage.url,
                    origWidth: i.originImage.width,
                    origHeight: i.originImage.height
                }
            }
        }
        return {}
    }
      , r = function(e, t) {
        return t.isSelf || t.from ? t.from : {
            uid: t.fromId,
            name: t.from ? t.from.name : t.name,
            avatar: t.from ? t.from.avatarUrl : t.avatarUrl,
            position: t.position,
            company: t.company
        }
    };
    return {
        formate: function(o) {
            if (!$.isArray(o))
                return [];
            var c = 0
              , l = o.map(function(o) {
                var l = e(o)
                  , d = r(0, o);
                return (c > o.mid || 0 == c) && (c = o.mid),
                {
                    type: l,
                    name: d.name,
                    avatar: d.avatar + "?x-oss-process=image/resize,w_60,limit_0",
                    isSelf: _PAGE.uid == d.uid,
                    action: _PAGE.uid == d.uid || o.isSelf ? "sent" : "received",
                    text: Emotion.textCodeToImg(i(l, o)),
                    originalText: i(l, o),
                    style: t(o),
                    image: a(l, o),
                    company: d.company,
                    position: d.position || "",
                    isAdmin: o.isAdmin,
                    certification: o.certification ? o.certification : d.certification,
                    time: o.time,
                    mid: o.mid,
                    messageId: o.mid,
                    fromId: d.uid,
                    toId: o.to ? o.to.uid : o.toId,
                    hyperLink: s(l, o),
                    interviewShare: n(l, o),
                    sound: n(l, o)
                }
            });
            return Chat.curUserData.maxMsgId = c,
            l.filter(function(e) {
                return (e.text || "image" == e.type || "hyperLink" == e.type || "interviewShare" == e.type || "sound" == e.type) && e.type
            })
        }
    }
}();
!function(e, t) {
    "function" == typeof define && define.amd ? define([], function() {
        (e.dcodeIO = e.dcodeIO || {}).Long = t()
    }) : "function" == typeof require && "object" == typeof module && module && module.exports ? module.exports = t() : (e.dcodeIO = e.dcodeIO || {}).Long = t()
}(this, function() {
    "use strict";
    function e(e, t, i) {
        this.low = 0 | e,
        this.high = 0 | t,
        this.unsigned = !!i
    }
    function t(e) {
        return !0 === (e && e.__isLong__)
    }
    function i(e, t) {
        var i, s, a;
        return t ? (e >>>= 0,
        (a = 0 <= e && e < 256) && (s = c[e]) ? s : (i = n(e, (0 | e) < 0 ? -1 : 0, !0),
        a && (c[e] = i),
        i)) : (e |= 0,
        (a = -128 <= e && e < 128) && (s = o[e]) ? s : (i = n(e, e < 0 ? -1 : 0, !1),
        a && (o[e] = i),
        i))
    }
    function s(e, t) {
        if (isNaN(e) || !isFinite(e))
            return t ? g : f;
        if (t) {
            if (e < 0)
                return g;
            if (e >= h)
                return C
        } else {
            if (e <= -u)
                return w;
            if (e + 1 >= u)
                return b
        }
        return e < 0 ? s(-e, t).neg() : n(e % d | 0, e / d | 0, t)
    }
    function n(t, i, s) {
        return new e(t,i,s)
    }
    function a(e, t, i) {
        if (0 === e.length)
            throw Error("empty string");
        if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e)
            return f;
        if ("number" == typeof t ? (i = t,
        t = !1) : t = !!t,
        (i = i || 10) < 2 || 36 < i)
            throw RangeError("radix");
        var n;
        if ((n = e.indexOf("-")) > 0)
            throw Error("interior hyphen");
        if (0 === n)
            return a(e.substring(1), t, i).neg();
        for (var r = s(l(i, 8)), o = f, c = 0; c < e.length; c += 8) {
            var d = Math.min(8, e.length - c)
              , h = parseInt(e.substring(c, c + d), i);
            if (d < 8) {
                var u = s(l(i, d));
                o = o.mul(u).add(s(h))
            } else
                o = o.mul(r),
                o = o.add(s(h))
        }
        return o.unsigned = t,
        o
    }
    function r(t) {
        return t instanceof e ? t : "number" == typeof t ? s(t) : "string" == typeof t ? a(t) : n(t.low, t.high, t.unsigned)
    }
    e.prototype.__isLong__,
    Object.defineProperty(e.prototype, "__isLong__", {
        value: !0,
        enumerable: !1,
        configurable: !1
    }),
    e.isLong = t;
    var o = {}
      , c = {};
    e.fromInt = i,
    e.fromNumber = s,
    e.fromBits = n;
    var l = Math.pow;
    e.fromString = a,
    e.fromValue = r;
    var d = 4294967296
      , h = d * d
      , u = h / 2
      , p = i(1 << 24)
      , f = i(0);
    e.ZERO = f;
    var g = i(0, !0);
    e.UZERO = g;
    var m = i(1);
    e.ONE = m;
    var v = i(1, !0);
    e.UONE = v;
    var y = i(-1);
    e.NEG_ONE = y;
    var b = n(-1, 2147483647, !1);
    e.MAX_VALUE = b;
    var C = n(-1, -1, !0);
    e.MAX_UNSIGNED_VALUE = C;
    var w = n(0, -2147483648, !1);
    e.MIN_VALUE = w;
    var T = e.prototype;
    return T.toInt = function() {
        return this.unsigned ? this.low >>> 0 : this.low
    }
    ,
    T.toNumber = function() {
        return this.unsigned ? (this.high >>> 0) * d + (this.low >>> 0) : this.high * d + (this.low >>> 0)
    }
    ,
    T.toString = function(e) {
        if ((e = e || 10) < 2 || 36 < e)
            throw RangeError("radix");
        if (this.isZero())
            return "0";
        if (this.isNegative()) {
            if (this.eq(w)) {
                var t = s(e)
                  , i = this.div(t)
                  , n = i.mul(t).sub(this);
                return i.toString(e) + n.toInt().toString(e)
            }
            return "-" + this.neg().toString(e)
        }
        for (var a = s(l(e, 6), this.unsigned), r = this, o = ""; ; ) {
            var c = r.div(a)
              , d = r.sub(c.mul(a)).toInt() >>> 0
              , h = d.toString(e);
            if (r = c,
            r.isZero())
                return h + o;
            for (; h.length < 6; )
                h = "0" + h;
            o = "" + h + o
        }
    }
    ,
    T.getHighBits = function() {
        return this.high
    }
    ,
    T.getHighBitsUnsigned = function() {
        return this.high >>> 0
    }
    ,
    T.getLowBits = function() {
        return this.low
    }
    ,
    T.getLowBitsUnsigned = function() {
        return this.low >>> 0
    }
    ,
    T.getNumBitsAbs = function() {
        if (this.isNegative())
            return this.eq(w) ? 64 : this.neg().getNumBitsAbs();
        for (var e = 0 != this.high ? this.high : this.low, t = 31; t > 0 && 0 == (e & 1 << t); t--)
            ;
        return 0 != this.high ? t + 33 : t + 1
    }
    ,
    T.isZero = function() {
        return 0 === this.high && 0 === this.low
    }
    ,
    T.isNegative = function() {
        return !this.unsigned && this.high < 0
    }
    ,
    T.isPositive = function() {
        return this.unsigned || this.high >= 0
    }
    ,
    T.isOdd = function() {
        return 1 == (1 & this.low)
    }
    ,
    T.isEven = function() {
        return 0 == (1 & this.low)
    }
    ,
    T.equals = function(e) {
        return t(e) || (e = r(e)),
        (this.unsigned === e.unsigned || this.high >>> 31 != 1 || e.high >>> 31 != 1) && (this.high === e.high && this.low === e.low)
    }
    ,
    T.eq = T.equals,
    T.notEquals = function(e) {
        return !this.eq(e)
    }
    ,
    T.neq = T.notEquals,
    T.lessThan = function(e) {
        return this.comp(e) < 0
    }
    ,
    T.lt = T.lessThan,
    T.lessThanOrEqual = function(e) {
        return this.comp(e) <= 0
    }
    ,
    T.lte = T.lessThanOrEqual,
    T.greaterThan = function(e) {
        return this.comp(e) > 0
    }
    ,
    T.gt = T.greaterThan,
    T.greaterThanOrEqual = function(e) {
        return this.comp(e) >= 0
    }
    ,
    T.gte = T.greaterThanOrEqual,
    T.compare = function(e) {
        if (t(e) || (e = r(e)),
        this.eq(e))
            return 0;
        var i = this.isNegative()
          , s = e.isNegative();
        return i && !s ? -1 : !i && s ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1
    }
    ,
    T.comp = T.compare,
    T.negate = function() {
        return !this.unsigned && this.eq(w) ? w : this.not().add(m)
    }
    ,
    T.neg = T.negate,
    T.add = function(e) {
        t(e) || (e = r(e));
        var i = this.high >>> 16
          , s = 65535 & this.high
          , a = this.low >>> 16
          , o = 65535 & this.low
          , c = e.high >>> 16
          , l = 65535 & e.high
          , d = e.low >>> 16
          , h = 65535 & e.low
          , u = 0
          , p = 0
          , f = 0
          , g = 0;
        return g += o + h,
        f += g >>> 16,
        g &= 65535,
        f += a + d,
        p += f >>> 16,
        f &= 65535,
        p += s + l,
        u += p >>> 16,
        p &= 65535,
        u += i + c,
        u &= 65535,
        n(f << 16 | g, u << 16 | p, this.unsigned)
    }
    ,
    T.subtract = function(e) {
        return t(e) || (e = r(e)),
        this.add(e.neg())
    }
    ,
    T.sub = T.subtract,
    T.multiply = function(e) {
        if (this.isZero())
            return f;
        if (t(e) || (e = r(e)),
        e.isZero())
            return f;
        if (this.eq(w))
            return e.isOdd() ? w : f;
        if (e.eq(w))
            return this.isOdd() ? w : f;
        if (this.isNegative())
            return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
        if (e.isNegative())
            return this.mul(e.neg()).neg();
        if (this.lt(p) && e.lt(p))
            return s(this.toNumber() * e.toNumber(), this.unsigned);
        var i = this.high >>> 16
          , a = 65535 & this.high
          , o = this.low >>> 16
          , c = 65535 & this.low
          , l = e.high >>> 16
          , d = 65535 & e.high
          , h = e.low >>> 16
          , u = 65535 & e.low
          , g = 0
          , m = 0
          , v = 0
          , y = 0;
        return y += c * u,
        v += y >>> 16,
        y &= 65535,
        v += o * u,
        m += v >>> 16,
        v &= 65535,
        v += c * h,
        m += v >>> 16,
        v &= 65535,
        m += a * u,
        g += m >>> 16,
        m &= 65535,
        m += o * h,
        g += m >>> 16,
        m &= 65535,
        m += c * d,
        g += m >>> 16,
        m &= 65535,
        g += i * u + a * h + o * d + c * l,
        g &= 65535,
        n(v << 16 | y, g << 16 | m, this.unsigned)
    }
    ,
    T.mul = T.multiply,
    T.divide = function(e) {
        if (t(e) || (e = r(e)),
        e.isZero())
            throw Error("division by zero");
        if (this.isZero())
            return this.unsigned ? g : f;
        var i, n, a;
        if (this.unsigned) {
            if (e.unsigned || (e = e.toUnsigned()),
            e.gt(this))
                return g;
            if (e.gt(this.shru(1)))
                return v;
            a = g
        } else {
            if (this.eq(w)) {
                if (e.eq(m) || e.eq(y))
                    return w;
                if (e.eq(w))
                    return m;
                return i = this.shr(1).div(e).shl(1),
                i.eq(f) ? e.isNegative() ? m : y : (n = this.sub(e.mul(i)),
                a = i.add(n.div(e)))
            }
            if (e.eq(w))
                return this.unsigned ? g : f;
            if (this.isNegative())
                return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
            if (e.isNegative())
                return this.div(e.neg()).neg();
            a = f
        }
        for (n = this; n.gte(e); ) {
            i = Math.max(1, Math.floor(n.toNumber() / e.toNumber()));
            for (var o = Math.ceil(Math.log(i) / Math.LN2), c = o <= 48 ? 1 : l(2, o - 48), d = s(i), h = d.mul(e); h.isNegative() || h.gt(n); )
                i -= c,
                d = s(i, this.unsigned),
                h = d.mul(e);
            d.isZero() && (d = m),
            a = a.add(d),
            n = n.sub(h)
        }
        return a
    }
    ,
    T.div = T.divide,
    T.modulo = function(e) {
        return t(e) || (e = r(e)),
        this.sub(this.div(e).mul(e))
    }
    ,
    T.mod = T.modulo,
    T.not = function() {
        return n(~this.low, ~this.high, this.unsigned)
    }
    ,
    T.and = function(e) {
        return t(e) || (e = r(e)),
        n(this.low & e.low, this.high & e.high, this.unsigned)
    }
    ,
    T.or = function(e) {
        return t(e) || (e = r(e)),
        n(this.low | e.low, this.high | e.high, this.unsigned)
    }
    ,
    T.xor = function(e) {
        return t(e) || (e = r(e)),
        n(this.low ^ e.low, this.high ^ e.high, this.unsigned)
    }
    ,
    T.shiftLeft = function(e) {
        return t(e) && (e = e.toInt()),
        0 == (e &= 63) ? this : e < 32 ? n(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : n(0, this.low << e - 32, this.unsigned)
    }
    ,
    T.shl = T.shiftLeft,
    T.shiftRight = function(e) {
        return t(e) && (e = e.toInt()),
        0 == (e &= 63) ? this : e < 32 ? n(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : n(this.high >> e - 32, this.high >= 0 ? 0 : -1, this.unsigned)
    }
    ,
    T.shr = T.shiftRight,
    T.shiftRightUnsigned = function(e) {
        if (t(e) && (e = e.toInt()),
        0 === (e &= 63))
            return this;
        var i = this.high;
        if (e < 32) {
            return n(this.low >>> e | i << 32 - e, i >>> e, this.unsigned)
        }
        return 32 === e ? n(i, 0, this.unsigned) : n(i >>> e - 32, 0, this.unsigned)
    }
    ,
    T.shru = T.shiftRightUnsigned,
    T.toSigned = function() {
        return this.unsigned ? n(this.low, this.high, !1) : this
    }
    ,
    T.toUnsigned = function() {
        return this.unsigned ? this : n(this.low, this.high, !0)
    }
    ,
    T.toBytes = function(e) {
        return e ? this.toBytesLE() : this.toBytesBE()
    }
    ,
    T.toBytesLE = function() {
        var e = this.high
          , t = this.low;
        return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255]
    }
    ,
    T.toBytesBE = function() {
        var e = this.high
          , t = this.low;
        return [e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t]
    }
    ,
    e
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(["chat-long.js"], function() {
        (e.dcodeIO = e.dcodeIO || {}).ByteBuffer = t(e.dcodeIO.Long)
    }) : "function" == typeof require && "object" == typeof module && module && module.exports ? module.exports = function() {
        var e;
        try {
            e = require("long")
        } catch (e) {}
        return t(e)
    }() : (e.dcodeIO = e.dcodeIO || {}).ByteBuffer = t(e.dcodeIO.Long)
}(this, function(e) {
    "use strict";
    function t(e) {
        var t = 0;
        return function() {
            return t < e.length ? e.charCodeAt(t++) : null
        }
    }
    function i() {
        var e = []
          , t = [];
        return function() {
            if (0 === arguments.length)
                return t.join("") + c.apply(String, e);
            e.length + arguments.length > 1024 && (t.push(c.apply(String, e)),
            e.length = 0),
            Array.prototype.push.apply(e, arguments)
        }
    }
    function s(e, t, i, s, n) {
        var a, r, o = 8 * n - s - 1, c = (1 << o) - 1, l = c >> 1, d = -7, h = i ? n - 1 : 0, u = i ? -1 : 1, p = e[t + h];
        for (h += u,
        a = p & (1 << -d) - 1,
        p >>= -d,
        d += o; d > 0; a = 256 * a + e[t + h],
        h += u,
        d -= 8)
            ;
        for (r = a & (1 << -d) - 1,
        a >>= -d,
        d += s; d > 0; r = 256 * r + e[t + h],
        h += u,
        d -= 8)
            ;
        if (0 === a)
            a = 1 - l;
        else {
            if (a === c)
                return r ? NaN : 1 / 0 * (p ? -1 : 1);
            r += Math.pow(2, s),
            a -= l
        }
        return (p ? -1 : 1) * r * Math.pow(2, a - s)
    }
    function n(e, t, i, s, n, a) {
        var r, o, c, l = 8 * a - n - 1, d = (1 << l) - 1, h = d >> 1, u = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = s ? 0 : a - 1, f = s ? 1 : -1, g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t),
        isNaN(t) || t === 1 / 0 ? (o = isNaN(t) ? 1 : 0,
        r = d) : (r = Math.floor(Math.log(t) / Math.LN2),
        t * (c = Math.pow(2, -r)) < 1 && (r--,
        c *= 2),
        t += r + h >= 1 ? u / c : u * Math.pow(2, 1 - h),
        t * c >= 2 && (r++,
        c /= 2),
        r + h >= d ? (o = 0,
        r = d) : r + h >= 1 ? (o = (t * c - 1) * Math.pow(2, n),
        r += h) : (o = t * Math.pow(2, h - 1) * Math.pow(2, n),
        r = 0)); n >= 8; e[i + p] = 255 & o,
        p += f,
        o /= 256,
        n -= 8)
            ;
        for (r = r << n | o,
        l += n; l > 0; e[i + p] = 255 & r,
        p += f,
        r /= 256,
        l -= 8)
            ;
        e[i + p - f] |= 128 * g
    }
    var a = function(e, t, i) {
        if (void 0 === e && (e = a.DEFAULT_CAPACITY),
        void 0 === t && (t = a.DEFAULT_ENDIAN),
        void 0 === i && (i = a.DEFAULT_NOASSERT),
        !i) {
            if ((e |= 0) < 0)
                throw RangeError("Illegal capacity");
            t = !!t,
            i = !!i
        }
        this.buffer = 0 === e ? o : new ArrayBuffer(e),
        this.view = 0 === e ? null : new Uint8Array(this.buffer),
        this.offset = 0,
        this.markedOffset = -1,
        this.limit = e,
        this.littleEndian = t,
        this.noAssert = i
    };
    a.VERSION = "5.0.1",
    a.LITTLE_ENDIAN = !0,
    a.BIG_ENDIAN = !1,
    a.DEFAULT_CAPACITY = 16,
    a.DEFAULT_ENDIAN = a.BIG_ENDIAN,
    a.DEFAULT_NOASSERT = !1,
    a.Long = e || null;
    var r = a.prototype;
    r.__isByteBuffer__,
    Object.defineProperty(r, "__isByteBuffer__", {
        value: !0,
        enumerable: !1,
        configurable: !1
    });
    var o = new ArrayBuffer(0)
      , c = String.fromCharCode;
    a.accessor = function() {
        return Uint8Array
    }
    ,
    a.allocate = function(e, t, i) {
        return new a(e,t,i)
    }
    ,
    a.concat = function(e, t, i, s) {
        "boolean" != typeof t && "string" == typeof t || (s = i,
        i = t,
        t = void 0);
        for (var n, r = 0, o = 0, c = e.length; o < c; ++o)
            a.isByteBuffer(e[o]) || (e[o] = a.wrap(e[o], t)),
            (n = e[o].limit - e[o].offset) > 0 && (r += n);
        if (0 === r)
            return new a(0,i,s);
        var l, d = new a(r,i,s);
        for (o = 0; o < c; )
            l = e[o++],
            (n = l.limit - l.offset) <= 0 || (d.view.set(l.view.subarray(l.offset, l.limit), d.offset),
            d.offset += n);
        return d.limit = d.offset,
        d.offset = 0,
        d
    }
    ,
    a.isByteBuffer = function(e) {
        return !0 === (e && e.__isByteBuffer__)
    }
    ,
    a.type = function() {
        return ArrayBuffer
    }
    ,
    a.wrap = function(e, t, i, s) {
        if ("string" != typeof t && (s = i,
        i = t,
        t = void 0),
        "string" == typeof e)
            switch (void 0 === t && (t = "utf8"),
            t) {
            case "base64":
                return a.fromBase64(e, i);
            case "hex":
                return a.fromHex(e, i);
            case "binary":
                return a.fromBinary(e, i);
            case "utf8":
                return a.fromUTF8(e, i);
            case "debug":
                return a.fromDebug(e, i);
            default:
                throw Error("Unsupported encoding: " + t)
            }
        if (null === e || "object" != typeof e)
            throw TypeError("Illegal buffer");
        var n;
        if (a.isByteBuffer(e))
            return n = r.clone.call(e),
            n.markedOffset = -1,
            n;
        if (e instanceof Uint8Array)
            n = new a(0,i,s),
            e.length > 0 && (n.buffer = e.buffer,
            n.offset = e.byteOffset,
            n.limit = e.byteOffset + e.byteLength,
            n.view = new Uint8Array(e.buffer));
        else if (e instanceof ArrayBuffer)
            n = new a(0,i,s),
            e.byteLength > 0 && (n.buffer = e,
            n.offset = 0,
            n.limit = e.byteLength,
            n.view = e.byteLength > 0 ? new Uint8Array(e) : null);
        else {
            if ("[object Array]" !== Object.prototype.toString.call(e))
                throw TypeError("Illegal buffer");
            n = new a(e.length,i,s),
            n.limit = e.length;
            for (var o = 0; o < e.length; ++o)
                n.view[o] = e[o]
        }
        return n
    }
    ,
    r.writeBitSet = function(e, t) {
        var i = void 0 === t;
        if (i && (t = this.offset),
        !this.noAssert) {
            if (!(e instanceof Array))
                throw TypeError("Illegal BitSet: Not an array");
            if ("number" != typeof t || t % 1 != 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
        }
        var s, n = t, a = e.length, r = a >> 3, o = 0;
        for (t += this.writeVarint32(a, t); r--; )
            s = 1 & !!e[o++] | (1 & !!e[o++]) << 1 | (1 & !!e[o++]) << 2 | (1 & !!e[o++]) << 3 | (1 & !!e[o++]) << 4 | (1 & !!e[o++]) << 5 | (1 & !!e[o++]) << 6 | (1 & !!e[o++]) << 7,
            this.writeByte(s, t++);
        if (o < a) {
            var c = 0;
            for (s = 0; o < a; )
                s |= (1 & !!e[o++]) << c++;
            this.writeByte(s, t++)
        }
        return i ? (this.offset = t,
        this) : t - n
    }
    ,
    r.readBitSet = function(e) {
        var t = void 0 === e;
        t && (e = this.offset);
        var i, s = this.readVarint32(e), n = s.value, a = n >> 3, r = 0, o = [];
        for (e += s.length; a--; )
            i = this.readByte(e++),
            o[r++] = !!(1 & i),
            o[r++] = !!(2 & i),
            o[r++] = !!(4 & i),
            o[r++] = !!(8 & i),
            o[r++] = !!(16 & i),
            o[r++] = !!(32 & i),
            o[r++] = !!(64 & i),
            o[r++] = !!(128 & i);
        if (r < n) {
            var c = 0;
            for (i = this.readByte(e++); r < n; )
                o[r++] = !!(i >> c++ & 1)
        }
        return t && (this.offset = e),
        o
    }
    ,
    r.readBytes = function(e, t) {
        var i = void 0 === t;
        if (i && (t = this.offset),
        !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + e > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + t + " (+" + e + ") <= " + this.buffer.byteLength)
        }
        var s = this.slice(t, t + e);
        return i && (this.offset += e),
        s
    }
    ,
    r.writeBytes = r.append,
    r.writeInt8 = function(e, t) {
        var i = void 0 === t;
        if (i && (t = this.offset),
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal value: " + e + " (not an integer)");
            if (e |= 0,
            "number" != typeof t || t % 1 != 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
        }
        t += 1;
        var s = this.buffer.byteLength;
        return t > s && this.resize((s *= 2) > t ? s : t),
        t -= 1,
        this.view[t] = e,
        i && (this.offset += 1),
        this
    }
    ,
    r.writeByte = r.writeInt8,
    r.readInt8 = function(e) {
        var t = void 0 === e;
        if (t && (e = this.offset),
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
        }
        var i = this.view[e];
        return 128 == (128 & i) && (i = -(255 - i + 1)),
        t && (this.offset += 1),
        i
    }
    ,
    r.readByte = r.readInt8,
    r.writeUint8 = function(e, t) {
        var i = void 0 === t;
        if (i && (t = this.offset),
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal value: " + e + " (not an integer)");
            if (e >>>= 0,
            "number" != typeof t || t % 1 != 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
        }
        t += 1;
        var s = this.buffer.byteLength;
        return t > s && this.resize((s *= 2) > t ? s : t),
        t -= 1,
        this.view[t] = e,
        i && (this.offset += 1),
        this
    }
    ,
    r.writeUInt8 = r.writeUint8,
    r.readUint8 = function(e) {
        var t = void 0 === e;
        if (t && (e = this.offset),
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
        }
        var i = this.view[e];
        return t && (this.offset += 1),
        i
    }
    ,
    r.readUInt8 = r.readUint8,
    r.writeInt16 = function(e, t) {
        var i = void 0 === t;
        if (i && (t = this.offset),
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal value: " + e + " (not an integer)");
            if (e |= 0,
            "number" != typeof t || t % 1 != 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
        }
        t += 2;
        var s = this.buffer.byteLength;
        return t > s && this.resize((s *= 2) > t ? s : t),
        t -= 2,
        this.littleEndian ? (this.view[t + 1] = (65280 & e) >>> 8,
        this.view[t] = 255 & e) : (this.view[t] = (65280 & e) >>> 8,
        this.view[t + 1] = 255 & e),
        i && (this.offset += 2),
        this
    }
    ,
    r.writeShort = r.writeInt16,
    r.readInt16 = function(e) {
        var t = void 0 === e;
        if (t && (e = this.offset),
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 2 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + e + " (+2) <= " + this.buffer.byteLength)
        }
        var i = 0;
        return this.littleEndian ? (i = this.view[e],
        i |= this.view[e + 1] << 8) : (i = this.view[e] << 8,
        i |= this.view[e + 1]),
        32768 == (32768 & i) && (i = -(65535 - i + 1)),
        t && (this.offset += 2),
        i
    }
    ,
    r.readShort = r.readInt16,
    r.writeUint16 = function(e, t) {
        var i = void 0 === t;
        if (i && (t = this.offset),
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal value: " + e + " (not an integer)");
            if (e >>>= 0,
            "number" != typeof t || t % 1 != 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
        }
        t += 2;
        var s = this.buffer.byteLength;
        return t > s && this.resize((s *= 2) > t ? s : t),
        t -= 2,
        this.littleEndian ? (this.view[t + 1] = (65280 & e) >>> 8,
        this.view[t] = 255 & e) : (this.view[t] = (65280 & e) >>> 8,
        this.view[t + 1] = 255 & e),
        i && (this.offset += 2),
        this
    }
    ,
    r.writeUInt16 = r.writeUint16,
    r.readUint16 = function(e) {
        var t = void 0 === e;
        if (t && (e = this.offset),
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 2 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + e + " (+2) <= " + this.buffer.byteLength)
        }
        var i = 0;
        return this.littleEndian ? (i = this.view[e],
        i |= this.view[e + 1] << 8) : (i = this.view[e] << 8,
        i |= this.view[e + 1]),
        t && (this.offset += 2),
        i
    }
    ,
    r.readUInt16 = r.readUint16,
    r.writeInt32 = function(e, t) {
        var i = void 0 === t;
        if (i && (t = this.offset),
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal value: " + e + " (not an integer)");
            if (e |= 0,
            "number" != typeof t || t % 1 != 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
        }
        t += 4;
        var s = this.buffer.byteLength;
        return t > s && this.resize((s *= 2) > t ? s : t),
        t -= 4,
        this.littleEndian ? (this.view[t + 3] = e >>> 24 & 255,
        this.view[t + 2] = e >>> 16 & 255,
        this.view[t + 1] = e >>> 8 & 255,
        this.view[t] = 255 & e) : (this.view[t] = e >>> 24 & 255,
        this.view[t + 1] = e >>> 16 & 255,
        this.view[t + 2] = e >>> 8 & 255,
        this.view[t + 3] = 255 & e),
        i && (this.offset += 4),
        this
    }
    ,
    r.writeInt = r.writeInt32,
    r.readInt32 = function(e) {
        var t = void 0 === e;
        if (t && (e = this.offset),
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
        }
        var i = 0;
        return this.littleEndian ? (i = this.view[e + 2] << 16,
        i |= this.view[e + 1] << 8,
        i |= this.view[e],
        i += this.view[e + 3] << 24 >>> 0) : (i = this.view[e + 1] << 16,
        i |= this.view[e + 2] << 8,
        i |= this.view[e + 3],
        i += this.view[e] << 24 >>> 0),
        i |= 0,
        t && (this.offset += 4),
        i
    }
    ,
    r.readInt = r.readInt32,
    r.writeUint32 = function(e, t) {
        var i = void 0 === t;
        if (i && (t = this.offset),
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal value: " + e + " (not an integer)");
            if (e >>>= 0,
            "number" != typeof t || t % 1 != 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
        }
        t += 4;
        var s = this.buffer.byteLength;
        return t > s && this.resize((s *= 2) > t ? s : t),
        t -= 4,
        this.littleEndian ? (this.view[t + 3] = e >>> 24 & 255,
        this.view[t + 2] = e >>> 16 & 255,
        this.view[t + 1] = e >>> 8 & 255,
        this.view[t] = 255 & e) : (this.view[t] = e >>> 24 & 255,
        this.view[t + 1] = e >>> 16 & 255,
        this.view[t + 2] = e >>> 8 & 255,
        this.view[t + 3] = 255 & e),
        i && (this.offset += 4),
        this
    }
    ,
    r.writeUInt32 = r.writeUint32,
    r.readUint32 = function(e) {
        var t = void 0 === e;
        if (t && (e = this.offset),
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
        }
        var i = 0;
        return this.littleEndian ? (i = this.view[e + 2] << 16,
        i |= this.view[e + 1] << 8,
        i |= this.view[e],
        i += this.view[e + 3] << 24 >>> 0) : (i = this.view[e + 1] << 16,
        i |= this.view[e + 2] << 8,
        i |= this.view[e + 3],
        i += this.view[e] << 24 >>> 0),
        t && (this.offset += 4),
        i
    }
    ,
    r.readUInt32 = r.readUint32,
    e && (r.writeInt64 = function(t, i) {
        var s = void 0 === i;
        if (s && (i = this.offset),
        !this.noAssert) {
            if ("number" == typeof t)
                t = e.fromNumber(t);
            else if ("string" == typeof t)
                t = e.fromString(t);
            else if (!(t && t instanceof e))
                throw TypeError("Illegal value: " + t + " (not an integer or Long)");
            if ("number" != typeof i || i % 1 != 0)
                throw TypeError("Illegal offset: " + i + " (not an integer)");
            if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
        }
        "number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t)),
        i += 8;
        var n = this.buffer.byteLength;
        i > n && this.resize((n *= 2) > i ? n : i),
        i -= 8;
        var a = t.low
          , r = t.high;
        return this.littleEndian ? (this.view[i + 3] = a >>> 24 & 255,
        this.view[i + 2] = a >>> 16 & 255,
        this.view[i + 1] = a >>> 8 & 255,
        this.view[i] = 255 & a,
        i += 4,
        this.view[i + 3] = r >>> 24 & 255,
        this.view[i + 2] = r >>> 16 & 255,
        this.view[i + 1] = r >>> 8 & 255,
        this.view[i] = 255 & r) : (this.view[i] = r >>> 24 & 255,
        this.view[i + 1] = r >>> 16 & 255,
        this.view[i + 2] = r >>> 8 & 255,
        this.view[i + 3] = 255 & r,
        i += 4,
        this.view[i] = a >>> 24 & 255,
        this.view[i + 1] = a >>> 16 & 255,
        this.view[i + 2] = a >>> 8 & 255,
        this.view[i + 3] = 255 & a),
        s && (this.offset += 8),
        this
    }
    ,
    r.writeLong = r.writeInt64,
    r.readInt64 = function(t) {
        var i = void 0 === t;
        if (i && (t = this.offset),
        !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + 8 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this.buffer.byteLength)
        }
        var s = 0
          , n = 0;
        this.littleEndian ? (s = this.view[t + 2] << 16,
        s |= this.view[t + 1] << 8,
        s |= this.view[t],
        s += this.view[t + 3] << 24 >>> 0,
        t += 4,
        n = this.view[t + 2] << 16,
        n |= this.view[t + 1] << 8,
        n |= this.view[t],
        n += this.view[t + 3] << 24 >>> 0) : (n = this.view[t + 1] << 16,
        n |= this.view[t + 2] << 8,
        n |= this.view[t + 3],
        n += this.view[t] << 24 >>> 0,
        t += 4,
        s = this.view[t + 1] << 16,
        s |= this.view[t + 2] << 8,
        s |= this.view[t + 3],
        s += this.view[t] << 24 >>> 0);
        var a = new e(s,n,!1);
        return i && (this.offset += 8),
        a
    }
    ,
    r.readLong = r.readInt64,
    r.writeUint64 = function(t, i) {
        var s = void 0 === i;
        if (s && (i = this.offset),
        !this.noAssert) {
            if ("number" == typeof t)
                t = e.fromNumber(t);
            else if ("string" == typeof t)
                t = e.fromString(t);
            else if (!(t && t instanceof e))
                throw TypeError("Illegal value: " + t + " (not an integer or Long)");
            if ("number" != typeof i || i % 1 != 0)
                throw TypeError("Illegal offset: " + i + " (not an integer)");
            if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
        }
        "number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t)),
        i += 8;
        var n = this.buffer.byteLength;
        i > n && this.resize((n *= 2) > i ? n : i),
        i -= 8;
        var a = t.low
          , r = t.high;
        return this.littleEndian ? (this.view[i + 3] = a >>> 24 & 255,
        this.view[i + 2] = a >>> 16 & 255,
        this.view[i + 1] = a >>> 8 & 255,
        this.view[i] = 255 & a,
        i += 4,
        this.view[i + 3] = r >>> 24 & 255,
        this.view[i + 2] = r >>> 16 & 255,
        this.view[i + 1] = r >>> 8 & 255,
        this.view[i] = 255 & r) : (this.view[i] = r >>> 24 & 255,
        this.view[i + 1] = r >>> 16 & 255,
        this.view[i + 2] = r >>> 8 & 255,
        this.view[i + 3] = 255 & r,
        i += 4,
        this.view[i] = a >>> 24 & 255,
        this.view[i + 1] = a >>> 16 & 255,
        this.view[i + 2] = a >>> 8 & 255,
        this.view[i + 3] = 255 & a),
        s && (this.offset += 8),
        this
    }
    ,
    r.writeUInt64 = r.writeUint64,
    r.readUint64 = function(t) {
        var i = void 0 === t;
        if (i && (t = this.offset),
        !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + 8 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this.buffer.byteLength)
        }
        var s = 0
          , n = 0;
        this.littleEndian ? (s = this.view[t + 2] << 16,
        s |= this.view[t + 1] << 8,
        s |= this.view[t],
        s += this.view[t + 3] << 24 >>> 0,
        t += 4,
        n = this.view[t + 2] << 16,
        n |= this.view[t + 1] << 8,
        n |= this.view[t],
        n += this.view[t + 3] << 24 >>> 0) : (n = this.view[t + 1] << 16,
        n |= this.view[t + 2] << 8,
        n |= this.view[t + 3],
        n += this.view[t] << 24 >>> 0,
        t += 4,
        s = this.view[t + 1] << 16,
        s |= this.view[t + 2] << 8,
        s |= this.view[t + 3],
        s += this.view[t] << 24 >>> 0);
        var a = new e(s,n,!0);
        return i && (this.offset += 8),
        a
    }
    ,
    r.readUInt64 = r.readUint64),
    r.writeFloat32 = function(e, t) {
        var i = void 0 === t;
        if (i && (t = this.offset),
        !this.noAssert) {
            if ("number" != typeof e)
                throw TypeError("Illegal value: " + e + " (not a number)");
            if ("number" != typeof t || t % 1 != 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
        }
        t += 4;
        var s = this.buffer.byteLength;
        return t > s && this.resize((s *= 2) > t ? s : t),
        t -= 4,
        n(this.view, e, t, this.littleEndian, 23, 4),
        i && (this.offset += 4),
        this
    }
    ,
    r.writeFloat = r.writeFloat32,
    r.readFloat32 = function(e) {
        var t = void 0 === e;
        if (t && (e = this.offset),
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
        }
        var i = s(this.view, e, this.littleEndian, 23, 4);
        return t && (this.offset += 4),
        i
    }
    ,
    r.readFloat = r.readFloat32,
    r.writeFloat64 = function(e, t) {
        var i = void 0 === t;
        if (i && (t = this.offset),
        !this.noAssert) {
            if ("number" != typeof e)
                throw TypeError("Illegal value: " + e + " (not a number)");
            if ("number" != typeof t || t % 1 != 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
        }
        t += 8;
        var s = this.buffer.byteLength;
        return t > s && this.resize((s *= 2) > t ? s : t),
        t -= 8,
        n(this.view, e, t, this.littleEndian, 52, 8),
        i && (this.offset += 8),
        this
    }
    ,
    r.writeDouble = r.writeFloat64,
    r.readFloat64 = function(e) {
        var t = void 0 === e;
        if (t && (e = this.offset),
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 8 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength)
        }
        var i = s(this.view, e, this.littleEndian, 52, 8);
        return t && (this.offset += 8),
        i
    }
    ,
    r.readDouble = r.readFloat64,
    a.MAX_VARINT32_BYTES = 5,
    a.calculateVarint32 = function(e) {
        return e >>>= 0,
        e < 128 ? 1 : e < 16384 ? 2 : e < 1 << 21 ? 3 : e < 1 << 28 ? 4 : 5
    }
    ,
    a.zigZagEncode32 = function(e) {
        return ((e |= 0) << 1 ^ e >> 31) >>> 0
    }
    ,
    a.zigZagDecode32 = function(e) {
        return e >>> 1 ^ -(1 & e) | 0
    }
    ,
    r.writeVarint32 = function(e, t) {
        var i = void 0 === t;
        if (i && (t = this.offset),
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal value: " + e + " (not an integer)");
            if (e |= 0,
            "number" != typeof t || t % 1 != 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
        }
        var s, n = a.calculateVarint32(e);
        t += n;
        var r = this.buffer.byteLength;
        for (t > r && this.resize((r *= 2) > t ? r : t),
        t -= n,
        e >>>= 0; e >= 128; )
            s = 127 & e | 128,
            this.view[t++] = s,
            e >>>= 7;
        return this.view[t++] = e,
        i ? (this.offset = t,
        this) : n
    }
    ,
    r.writeVarint32ZigZag = function(e, t) {
        return this.writeVarint32(a.zigZagEncode32(e), t)
    }
    ,
    r.readVarint32 = function(e) {
        var t = void 0 === e;
        if (t && (e = this.offset),
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
        }
        var i, s = 0, n = 0;
        do {
            if (!this.noAssert && e > this.limit) {
                var a = Error("Truncated");
                throw a.truncated = !0,
                a
            }
            i = this.view[e++],
            s < 5 && (n |= (127 & i) << 7 * s),
            ++s
        } while (0 != (128 & i));return n |= 0,
        t ? (this.offset = e,
        n) : {
            value: n,
            length: s
        }
    }
    ,
    r.readVarint32ZigZag = function(e) {
        var t = this.readVarint32(e);
        return "object" == typeof t ? t.value = a.zigZagDecode32(t.value) : t = a.zigZagDecode32(t),
        t
    }
    ,
    e && (a.MAX_VARINT64_BYTES = 10,
    a.calculateVarint64 = function(t) {
        "number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t));
        var i = t.toInt() >>> 0
          , s = t.shiftRightUnsigned(28).toInt() >>> 0
          , n = t.shiftRightUnsigned(56).toInt() >>> 0;
        return 0 == n ? 0 == s ? i < 16384 ? i < 128 ? 1 : 2 : i < 1 << 21 ? 3 : 4 : s < 16384 ? s < 128 ? 5 : 6 : s < 1 << 21 ? 7 : 8 : n < 128 ? 9 : 10
    }
    ,
    a.zigZagEncode64 = function(t) {
        return "number" == typeof t ? t = e.fromNumber(t, !1) : "string" == typeof t ? t = e.fromString(t, !1) : !1 !== t.unsigned && (t = t.toSigned()),
        t.shiftLeft(1).xor(t.shiftRight(63)).toUnsigned()
    }
    ,
    a.zigZagDecode64 = function(t) {
        return "number" == typeof t ? t = e.fromNumber(t, !1) : "string" == typeof t ? t = e.fromString(t, !1) : !1 !== t.unsigned && (t = t.toSigned()),
        t.shiftRightUnsigned(1).xor(t.and(e.ONE).toSigned().negate()).toSigned()
    }
    ,
    r.writeVarint64 = function(t, i) {
        var s = void 0 === i;
        if (s && (i = this.offset),
        !this.noAssert) {
            if ("number" == typeof t)
                t = e.fromNumber(t);
            else if ("string" == typeof t)
                t = e.fromString(t);
            else if (!(t && t instanceof e))
                throw TypeError("Illegal value: " + t + " (not an integer or Long)");
            if ("number" != typeof i || i % 1 != 0)
                throw TypeError("Illegal offset: " + i + " (not an integer)");
            if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
        }
        "number" == typeof t ? t = e.fromNumber(t, !1) : "string" == typeof t ? t = e.fromString(t, !1) : !1 !== t.unsigned && (t = t.toSigned());
        var n = a.calculateVarint64(t)
          , r = t.toInt() >>> 0
          , o = t.shiftRightUnsigned(28).toInt() >>> 0
          , c = t.shiftRightUnsigned(56).toInt() >>> 0;
        i += n;
        var l = this.buffer.byteLength;
        switch (i > l && this.resize((l *= 2) > i ? l : i),
        i -= n,
        n) {
        case 10:
            this.view[i + 9] = c >>> 7 & 1;
        case 9:
            this.view[i + 8] = 9 !== n ? 128 | c : 127 & c;
        case 8:
            this.view[i + 7] = 8 !== n ? o >>> 21 | 128 : o >>> 21 & 127;
        case 7:
            this.view[i + 6] = 7 !== n ? o >>> 14 | 128 : o >>> 14 & 127;
        case 6:
            this.view[i + 5] = 6 !== n ? o >>> 7 | 128 : o >>> 7 & 127;
        case 5:
            this.view[i + 4] = 5 !== n ? 128 | o : 127 & o;
        case 4:
            this.view[i + 3] = 4 !== n ? r >>> 21 | 128 : r >>> 21 & 127;
        case 3:
            this.view[i + 2] = 3 !== n ? r >>> 14 | 128 : r >>> 14 & 127;
        case 2:
            this.view[i + 1] = 2 !== n ? r >>> 7 | 128 : r >>> 7 & 127;
        case 1:
            this.view[i] = 1 !== n ? 128 | r : 127 & r
        }
        return s ? (this.offset += n,
        this) : n
    }
    ,
    r.writeVarint64ZigZag = function(e, t) {
        return this.writeVarint64(a.zigZagEncode64(e), t)
    }
    ,
    r.readVarint64 = function(t) {
        var i = void 0 === t;
        if (i && (t = this.offset),
        !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength)
        }
        var s = t
          , n = 0
          , a = 0
          , r = 0
          , o = 0;
        if (o = this.view[t++],
        n = 127 & o,
        128 & o && (o = this.view[t++],
        n |= (127 & o) << 7,
        (128 & o || this.noAssert && void 0 === o) && (o = this.view[t++],
        n |= (127 & o) << 14,
        (128 & o || this.noAssert && void 0 === o) && (o = this.view[t++],
        n |= (127 & o) << 21,
        (128 & o || this.noAssert && void 0 === o) && (o = this.view[t++],
        a = 127 & o,
        (128 & o || this.noAssert && void 0 === o) && (o = this.view[t++],
        a |= (127 & o) << 7,
        (128 & o || this.noAssert && void 0 === o) && (o = this.view[t++],
        a |= (127 & o) << 14,
        (128 & o || this.noAssert && void 0 === o) && (o = this.view[t++],
        a |= (127 & o) << 21,
        (128 & o || this.noAssert && void 0 === o) && (o = this.view[t++],
        r = 127 & o,
        (128 & o || this.noAssert && void 0 === o) && (o = this.view[t++],
        r |= (127 & o) << 7,
        128 & o || this.noAssert && void 0 === o))))))))))
            throw Error("Buffer overrun");
        var c = e.fromBits(n | a << 28, a >>> 4 | r << 24, !1);
        return i ? (this.offset = t,
        c) : {
            value: c,
            length: t - s
        }
    }
    ,
    r.readVarint64ZigZag = function(t) {
        var i = this.readVarint64(t);
        return i && i.value instanceof e ? i.value = a.zigZagDecode64(i.value) : i = a.zigZagDecode64(i),
        i
    }
    ),
    r.writeCString = function(e, i) {
        var s = void 0 === i;
        s && (i = this.offset);
        var n, a = e.length;
        if (!this.noAssert) {
            if ("string" != typeof e)
                throw TypeError("Illegal str: Not a string");
            for (n = 0; n < a; ++n)
                if (0 === e.charCodeAt(n))
                    throw RangeError("Illegal str: Contains NULL-characters");
            if ("number" != typeof i || i % 1 != 0)
                throw TypeError("Illegal offset: " + i + " (not an integer)");
            if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
        }
        a = d.calculateUTF16asUTF8(t(e))[1],
        i += a + 1;
        var r = this.buffer.byteLength;
        return i > r && this.resize((r *= 2) > i ? r : i),
        i -= a + 1,
        d.encodeUTF16toUTF8(t(e), function(e) {
            this.view[i++] = e
        }
        .bind(this)),
        this.view[i++] = 0,
        s ? (this.offset = i,
        this) : a
    }
    ,
    r.readCString = function(e) {
        var t = void 0 === e;
        if (t && (e = this.offset),
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
        }
        var s, n = e, a = -1;
        return d.decodeUTF8toUTF16(function() {
            if (0 === a)
                return null;
            if (e >= this.limit)
                throw RangeError("Illegal range: Truncated data, " + e + " < " + this.limit);
            return a = this.view[e++],
            0 === a ? null : a
        }
        .bind(this), s = i(), !0),
        t ? (this.offset = e,
        s()) : {
            string: s(),
            length: e - n
        }
    }
    ,
    r.writeIString = function(e, i) {
        var s = void 0 === i;
        if (s && (i = this.offset),
        !this.noAssert) {
            if ("string" != typeof e)
                throw TypeError("Illegal str: Not a string");
            if ("number" != typeof i || i % 1 != 0)
                throw TypeError("Illegal offset: " + i + " (not an integer)");
            if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
        }
        var n, a = i;
        n = d.calculateUTF16asUTF8(t(e), this.noAssert)[1],
        i += 4 + n;
        var r = this.buffer.byteLength;
        if (i > r && this.resize((r *= 2) > i ? r : i),
        i -= 4 + n,
        this.littleEndian ? (this.view[i + 3] = n >>> 24 & 255,
        this.view[i + 2] = n >>> 16 & 255,
        this.view[i + 1] = n >>> 8 & 255,
        this.view[i] = 255 & n) : (this.view[i] = n >>> 24 & 255,
        this.view[i + 1] = n >>> 16 & 255,
        this.view[i + 2] = n >>> 8 & 255,
        this.view[i + 3] = 255 & n),
        i += 4,
        d.encodeUTF16toUTF8(t(e), function(e) {
            this.view[i++] = e
        }
        .bind(this)),
        i !== a + 4 + n)
            throw RangeError("Illegal range: Truncated data, " + i + " == " + (i + 4 + n));
        return s ? (this.offset = i,
        this) : i - a
    }
    ,
    r.readIString = function(e) {
        var t = void 0 === e;
        if (t && (e = this.offset),
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
        }
        var i = e
          , s = this.readUint32(e)
          , n = this.readUTF8String(s, a.METRICS_BYTES, e += 4);
        return e += n.length,
        t ? (this.offset = e,
        n.string) : {
            string: n.string,
            length: e - i
        }
    }
    ,
    a.METRICS_CHARS = "c",
    a.METRICS_BYTES = "b",
    r.writeUTF8String = function(e, i) {
        var s = void 0 === i;
        if (s && (i = this.offset),
        !this.noAssert) {
            if ("number" != typeof i || i % 1 != 0)
                throw TypeError("Illegal offset: " + i + " (not an integer)");
            if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
        }
        var n, a = i;
        n = d.calculateUTF16asUTF8(t(e))[1],
        i += n;
        var r = this.buffer.byteLength;
        return i > r && this.resize((r *= 2) > i ? r : i),
        i -= n,
        d.encodeUTF16toUTF8(t(e), function(e) {
            this.view[i++] = e
        }
        .bind(this)),
        s ? (this.offset = i,
        this) : i - a
    }
    ,
    r.writeString = r.writeUTF8String,
    a.calculateUTF8Chars = function(e) {
        return d.calculateUTF16asUTF8(t(e))[0]
    }
    ,
    a.calculateUTF8Bytes = function(e) {
        return d.calculateUTF16asUTF8(t(e))[1]
    }
    ,
    a.calculateString = a.calculateUTF8Bytes,
    r.readUTF8String = function(e, t, s) {
        "number" == typeof t && (s = t,
        t = void 0);
        var n = void 0 === s;
        if (n && (s = this.offset),
        void 0 === t && (t = a.METRICS_CHARS),
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal length: " + e + " (not an integer)");
            if (e |= 0,
            "number" != typeof s || s % 1 != 0)
                throw TypeError("Illegal offset: " + s + " (not an integer)");
            if ((s >>>= 0) < 0 || s + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + s + " (+0) <= " + this.buffer.byteLength)
        }
        var r, o = 0, c = s;
        if (t === a.METRICS_CHARS) {
            if (r = i(),
            d.decodeUTF8(function() {
                return o < e && s < this.limit ? this.view[s++] : null
            }
            .bind(this), function(e) {
                ++o,
                d.UTF8toUTF16(e, r)
            }),
            o !== e)
                throw RangeError("Illegal range: Truncated data, " + o + " == " + e);
            return n ? (this.offset = s,
            r()) : {
                string: r(),
                length: s - c
            }
        }
        if (t === a.METRICS_BYTES) {
            if (!this.noAssert) {
                if ("number" != typeof s || s % 1 != 0)
                    throw TypeError("Illegal offset: " + s + " (not an integer)");
                if ((s >>>= 0) < 0 || s + e > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + s + " (+" + e + ") <= " + this.buffer.byteLength)
            }
            var l = s + e;
            if (d.decodeUTF8toUTF16(function() {
                return s < l ? this.view[s++] : null
            }
            .bind(this), r = i(), this.noAssert),
            s !== l)
                throw RangeError("Illegal range: Truncated data, " + s + " == " + l);
            return n ? (this.offset = s,
            r()) : {
                string: r(),
                length: s - c
            }
        }
        throw TypeError("Unsupported metrics: " + t)
    }
    ,
    r.readString = r.readUTF8String,
    r.writeVString = function(e, i) {
        var s = void 0 === i;
        if (s && (i = this.offset),
        !this.noAssert) {
            if ("string" != typeof e)
                throw TypeError("Illegal str: Not a string");
            if ("number" != typeof i || i % 1 != 0)
                throw TypeError("Illegal offset: " + i + " (not an integer)");
            if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
        }
        var n, r, o = i;
        n = d.calculateUTF16asUTF8(t(e), this.noAssert)[1],
        r = a.calculateVarint32(n),
        i += r + n;
        var c = this.buffer.byteLength;
        if (i > c && this.resize((c *= 2) > i ? c : i),
        i -= r + n,
        i += this.writeVarint32(n, i),
        d.encodeUTF16toUTF8(t(e), function(e) {
            this.view[i++] = e
        }
        .bind(this)),
        i !== o + n + r)
            throw RangeError("Illegal range: Truncated data, " + i + " == " + (i + n + r));
        return s ? (this.offset = i,
        this) : i - o
    }
    ,
    r.readVString = function(e) {
        var t = void 0 === e;
        if (t && (e = this.offset),
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
        }
        var i = e
          , s = this.readVarint32(e)
          , n = this.readUTF8String(s.value, a.METRICS_BYTES, e += s.length);
        return e += n.length,
        t ? (this.offset = e,
        n.string) : {
            string: n.string,
            length: e - i
        }
    }
    ,
    r.append = function(e, t, i) {
        "number" != typeof t && "string" == typeof t || (i = t,
        t = void 0);
        var s = void 0 === i;
        if (s && (i = this.offset),
        !this.noAssert) {
            if ("number" != typeof i || i % 1 != 0)
                throw TypeError("Illegal offset: " + i + " (not an integer)");
            if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
        }
        e instanceof a || (e = a.wrap(e, t));
        var n = e.limit - e.offset;
        if (n <= 0)
            return this;
        i += n;
        var r = this.buffer.byteLength;
        return i > r && this.resize((r *= 2) > i ? r : i),
        i -= n,
        this.view.set(e.view.subarray(e.offset, e.limit), i),
        e.offset += n,
        s && (this.offset += n),
        this
    }
    ,
    r.appendTo = function(e, t) {
        return e.append(this, t),
        this
    }
    ,
    r.assert = function(e) {
        return this.noAssert = !e,
        this
    }
    ,
    r.capacity = function() {
        return this.buffer.byteLength
    }
    ,
    r.clear = function() {
        return this.offset = 0,
        this.limit = this.buffer.byteLength,
        this.markedOffset = -1,
        this
    }
    ,
    r.clone = function(e) {
        var t = new a(0,this.littleEndian,this.noAssert);
        return e ? (t.buffer = new ArrayBuffer(this.buffer.byteLength),
        t.view = new Uint8Array(t.buffer)) : (t.buffer = this.buffer,
        t.view = this.view),
        t.offset = this.offset,
        t.markedOffset = this.markedOffset,
        t.limit = this.limit,
        t
    }
    ,
    r.compact = function(e, t) {
        if (void 0 === e && (e = this.offset),
        void 0 === t && (t = this.limit),
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal begin: Not an integer");
            if (e >>>= 0,
            "number" != typeof t || t % 1 != 0)
                throw TypeError("Illegal end: Not an integer");
            if (t >>>= 0,
            e < 0 || e > t || t > this.buffer.byteLength)
                throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
        }
        if (0 === e && t === this.buffer.byteLength)
            return this;
        var i = t - e;
        if (0 === i)
            return this.buffer = o,
            this.view = null,
            this.markedOffset >= 0 && (this.markedOffset -= e),
            this.offset = 0,
            this.limit = 0,
            this;
        var s = new ArrayBuffer(i)
          , n = new Uint8Array(s);
        return n.set(this.view.subarray(e, t)),
        this.buffer = s,
        this.view = n,
        this.markedOffset >= 0 && (this.markedOffset -= e),
        this.offset = 0,
        this.limit = i,
        this
    }
    ,
    r.copy = function(e, t) {
        if (void 0 === e && (e = this.offset),
        void 0 === t && (t = this.limit),
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal begin: Not an integer");
            if (e >>>= 0,
            "number" != typeof t || t % 1 != 0)
                throw TypeError("Illegal end: Not an integer");
            if (t >>>= 0,
            e < 0 || e > t || t > this.buffer.byteLength)
                throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
        }
        if (e === t)
            return new a(0,this.littleEndian,this.noAssert);
        var i = t - e
          , s = new a(i,this.littleEndian,this.noAssert);
        return s.offset = 0,
        s.limit = i,
        s.markedOffset >= 0 && (s.markedOffset -= e),
        this.copyTo(s, 0, e, t),
        s
    }
    ,
    r.copyTo = function(e, t, i, s) {
        var n, r;
        if (!this.noAssert && !a.isByteBuffer(e))
            throw TypeError("Illegal target: Not a ByteBuffer");
        if (t = (r = void 0 === t) ? e.offset : 0 | t,
        i = (n = void 0 === i) ? this.offset : 0 | i,
        s = void 0 === s ? this.limit : 0 | s,
        t < 0 || t > e.buffer.byteLength)
            throw RangeError("Illegal target range: 0 <= " + t + " <= " + e.buffer.byteLength);
        if (i < 0 || s > this.buffer.byteLength)
            throw RangeError("Illegal source range: 0 <= " + i + " <= " + this.buffer.byteLength);
        var o = s - i;
        return 0 === o ? e : (e.ensureCapacity(t + o),
        e.view.set(this.view.subarray(i, s), t),
        n && (this.offset += o),
        r && (e.offset += o),
        this)
    }
    ,
    r.ensureCapacity = function(e) {
        var t = this.buffer.byteLength;
        return t < e ? this.resize((t *= 2) > e ? t : e) : this
    }
    ,
    r.fill = function(e, t, i) {
        var s = void 0 === t;
        if (s && (t = this.offset),
        "string" == typeof e && e.length > 0 && (e = e.charCodeAt(0)),
        void 0 === t && (t = this.offset),
        void 0 === i && (i = this.limit),
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal value: " + e + " (not an integer)");
            if (e |= 0,
            "number" != typeof t || t % 1 != 0)
                throw TypeError("Illegal begin: Not an integer");
            if (t >>>= 0,
            "number" != typeof i || i % 1 != 0)
                throw TypeError("Illegal end: Not an integer");
            if (i >>>= 0,
            t < 0 || t > i || i > this.buffer.byteLength)
                throw RangeError("Illegal range: 0 <= " + t + " <= " + i + " <= " + this.buffer.byteLength)
        }
        if (t >= i)
            return this;
        for (; t < i; )
            this.view[t++] = e;
        return s && (this.offset = t),
        this
    }
    ,
    r.flip = function() {
        return this.limit = this.offset,
        this.offset = 0,
        this
    }
    ,
    r.mark = function(e) {
        if (e = void 0 === e ? this.offset : e,
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
        }
        return this.markedOffset = e,
        this
    }
    ,
    r.order = function(e) {
        if (!this.noAssert && "boolean" != typeof e)
            throw TypeError("Illegal littleEndian: Not a boolean");
        return this.littleEndian = !!e,
        this
    }
    ,
    r.LE = function(e) {
        return this.littleEndian = void 0 === e || !!e,
        this
    }
    ,
    r.BE = function(e) {
        return this.littleEndian = void 0 !== e && !e,
        this
    }
    ,
    r.prepend = function(e, t, i) {
        "number" != typeof t && "string" == typeof t || (i = t,
        t = void 0);
        var s = void 0 === i;
        if (s && (i = this.offset),
        !this.noAssert) {
            if ("number" != typeof i || i % 1 != 0)
                throw TypeError("Illegal offset: " + i + " (not an integer)");
            if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
        }
        e instanceof a || (e = a.wrap(e, t));
        var n = e.limit - e.offset;
        if (n <= 0)
            return this;
        var r = n - i;
        if (r > 0) {
            var o = new ArrayBuffer(this.buffer.byteLength + r)
              , c = new Uint8Array(o);
            c.set(this.view.subarray(i, this.buffer.byteLength), n),
            this.buffer = o,
            this.view = c,
            this.offset += r,
            this.markedOffset >= 0 && (this.markedOffset += r),
            this.limit += r,
            i += r
        } else {
            new Uint8Array(this.buffer)
        }
        return this.view.set(e.view.subarray(e.offset, e.limit), i - n),
        e.offset = e.limit,
        s && (this.offset -= n),
        this
    }
    ,
    r.prependTo = function(e, t) {
        return e.prepend(this, t),
        this
    }
    ,
    r.printDebug = function(e) {
        "function" != typeof e && (e = console.log.bind(console)),
        e(this.toString() + "\n-------------------------------------------------------------------\n" + this.toDebug(!0))
    }
    ,
    r.remaining = function() {
        return this.limit - this.offset
    }
    ,
    r.reset = function() {
        return this.markedOffset >= 0 ? (this.offset = this.markedOffset,
        this.markedOffset = -1) : this.offset = 0,
        this
    }
    ,
    r.resize = function(e) {
        if (!this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal capacity: " + e + " (not an integer)");
            if ((e |= 0) < 0)
                throw RangeError("Illegal capacity: 0 <= " + e)
        }
        if (this.buffer.byteLength < e) {
            var t = new ArrayBuffer(e)
              , i = new Uint8Array(t);
            i.set(this.view),
            this.buffer = t,
            this.view = i
        }
        return this
    }
    ,
    r.reverse = function(e, t) {
        if (void 0 === e && (e = this.offset),
        void 0 === t && (t = this.limit),
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal begin: Not an integer");
            if (e >>>= 0,
            "number" != typeof t || t % 1 != 0)
                throw TypeError("Illegal end: Not an integer");
            if (t >>>= 0,
            e < 0 || e > t || t > this.buffer.byteLength)
                throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
        }
        return e === t ? this : (Array.prototype.reverse.call(this.view.subarray(e, t)),
        this)
    }
    ,
    r.skip = function(e) {
        if (!this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal length: " + e + " (not an integer)");
            e |= 0
        }
        var t = this.offset + e;
        if (!this.noAssert && (t < 0 || t > this.buffer.byteLength))
            throw RangeError("Illegal length: 0 <= " + this.offset + " + " + e + " <= " + this.buffer.byteLength);
        return this.offset = t,
        this
    }
    ,
    r.slice = function(e, t) {
        if (void 0 === e && (e = this.offset),
        void 0 === t && (t = this.limit),
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal begin: Not an integer");
            if (e >>>= 0,
            "number" != typeof t || t % 1 != 0)
                throw TypeError("Illegal end: Not an integer");
            if (t >>>= 0,
            e < 0 || e > t || t > this.buffer.byteLength)
                throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
        }
        var i = this.clone();
        return i.offset = e,
        i.limit = t,
        i
    }
    ,
    r.toBuffer = function(e) {
        var t = this.offset
          , i = this.limit;
        if (!this.noAssert) {
            if ("number" != typeof t || t % 1 != 0)
                throw TypeError("Illegal offset: Not an integer");
            if (t >>>= 0,
            "number" != typeof i || i % 1 != 0)
                throw TypeError("Illegal limit: Not an integer");
            if (i >>>= 0,
            t < 0 || t > i || i > this.buffer.byteLength)
                throw RangeError("Illegal range: 0 <= " + t + " <= " + i + " <= " + this.buffer.byteLength)
        }
        if (!e && 0 === t && i === this.buffer.byteLength)
            return this.buffer;
        if (t === i)
            return o;
        var s = new ArrayBuffer(i - t);
        return new Uint8Array(s).set(new Uint8Array(this.buffer).subarray(t, i), 0),
        s
    }
    ,
    r.toArrayBuffer = r.toBuffer,
    r.toString = function(e, t, i) {
        if (void 0 === e)
            return "ByteBufferAB(offset=" + this.offset + ",markedOffset=" + this.markedOffset + ",limit=" + this.limit + ",capacity=" + this.capacity() + ")";
        switch ("number" == typeof e && (e = "utf8",
        t = e,
        i = t),
        e) {
        case "utf8":
            return this.toUTF8(t, i);
        case "base64":
            return this.toBase64(t, i);
        case "hex":
            return this.toHex(t, i);
        case "binary":
            return this.toBinary(t, i);
        case "debug":
            return this.toDebug();
        case "columns":
            return this.toColumns();
        default:
            throw Error("Unsupported encoding: " + e)
        }
    }
    ;
    var l = function() {
        for (var e = {}, t = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47], i = [], s = 0, n = t.length; s < n; ++s)
            i[t[s]] = s;
        return e.encode = function(e, i) {
            for (var s, n; null !== (s = e()); )
                i(t[s >> 2 & 63]),
                n = (3 & s) << 4,
                null !== (s = e()) ? (n |= s >> 4 & 15,
                i(t[63 & (n | s >> 4 & 15)]),
                n = (15 & s) << 2,
                null !== (s = e()) ? (i(t[63 & (n | s >> 6 & 3)]),
                i(t[63 & s])) : (i(t[63 & n]),
                i(61))) : (i(t[63 & n]),
                i(61),
                i(61))
        }
        ,
        e.decode = function(e, t) {
            function s(e) {
                throw Error("Illegal character code: " + e)
            }
            for (var n, a, r; null !== (n = e()); )
                if (a = i[n],
                void 0 === a && s(n),
                null !== (n = e()) && (r = i[n],
                void 0 === r && s(n),
                t(a << 2 >>> 0 | (48 & r) >> 4),
                null !== (n = e()))) {
                    if (void 0 === (a = i[n])) {
                        if (61 === n)
                            break;
                        s(n)
                    }
                    if (t((15 & r) << 4 >>> 0 | (60 & a) >> 2),
                    null !== (n = e())) {
                        if (void 0 === (r = i[n])) {
                            if (61 === n)
                                break;
                            s(n)
                        }
                        t((3 & a) << 6 >>> 0 | r)
                    }
                }
        }
        ,
        e.test = function(e) {
            return /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e)
        }
        ,
        e
    }();
    r.toBase64 = function(e, t) {
        if (void 0 === e && (e = this.offset),
        void 0 === t && (t = this.limit),
        e |= 0,
        t |= 0,
        e < 0 || t > this.capacity || e > t)
            throw RangeError("begin, end");
        var s;
        return l.encode(function() {
            return e < t ? this.view[e++] : null
        }
        .bind(this), s = i()),
        s()
    }
    ,
    a.fromBase64 = function(e, i) {
        if ("string" != typeof e)
            throw TypeError("str");
        var s = new a(e.length / 4 * 3,i)
          , n = 0;
        return l.decode(t(e), function(e) {
            s.view[n++] = e
        }),
        s.limit = n,
        s
    }
    ,
    a.btoa = function(e) {
        return a.fromBinary(e).toBase64()
    }
    ,
    a.atob = function(e) {
        return a.fromBase64(e).toBinary()
    }
    ,
    r.toBinary = function(e, t) {
        if (void 0 === e && (e = this.offset),
        void 0 === t && (t = this.limit),
        e |= 0,
        t |= 0,
        e < 0 || t > this.capacity() || e > t)
            throw RangeError("begin, end");
        if (e === t)
            return "";
        for (var i = [], s = []; e < t; )
            i.push(this.view[e++]),
            i.length >= 1024 && (s.push(String.fromCharCode.apply(String, i)),
            i = []);
        return s.join("") + String.fromCharCode.apply(String, i)
    }
    ,
    a.fromBinary = function(e, t) {
        if ("string" != typeof e)
            throw TypeError("str");
        for (var i, s = 0, n = e.length, r = new a(n,t); s < n; ) {
            if ((i = e.charCodeAt(s)) > 255)
                throw RangeError("illegal char code: " + i);
            r.view[s++] = i
        }
        return r.limit = n,
        r
    }
    ,
    r.toDebug = function(e) {
        for (var t, i = -1, s = this.buffer.byteLength, n = "", a = "", r = ""; i < s; ) {
            if (-1 !== i && (t = this.view[i],
            n += t < 16 ? "0" + t.toString(16).toUpperCase() : t.toString(16).toUpperCase(),
            e && (a += t > 32 && t < 127 ? String.fromCharCode(t) : ".")),
            ++i,
            e && i > 0 && i % 16 == 0 && i !== s) {
                for (; n.length < 51; )
                    n += " ";
                r += n + a + "\n",
                n = a = ""
            }
            i === this.offset && i === this.limit ? n += i === this.markedOffset ? "!" : "|" : i === this.offset ? n += i === this.markedOffset ? "[" : "<" : i === this.limit ? n += i === this.markedOffset ? "]" : ">" : n += i === this.markedOffset ? "'" : e || 0 !== i && i !== s ? " " : ""
        }
        if (e && " " !== n) {
            for (; n.length < 51; )
                n += " ";
            r += n + a + "\n"
        }
        return e ? r : n
    }
    ,
    a.fromDebug = function(e, t, i) {
        for (var s, n, r = e.length, o = new a((r + 1) / 3 | 0,t,i), c = 0, l = 0, d = !1, h = !1, u = !1, p = !1, f = !1; c < r; ) {
            switch (s = e.charAt(c++)) {
            case "!":
                if (!i) {
                    if (h || u || p) {
                        f = !0;
                        break
                    }
                    h = u = p = !0
                }
                o.offset = o.markedOffset = o.limit = l,
                d = !1;
                break;
            case "|":
                if (!i) {
                    if (h || p) {
                        f = !0;
                        break
                    }
                    h = p = !0
                }
                o.offset = o.limit = l,
                d = !1;
                break;
            case "[":
                if (!i) {
                    if (h || u) {
                        f = !0;
                        break
                    }
                    h = u = !0
                }
                o.offset = o.markedOffset = l,
                d = !1;
                break;
            case "<":
                if (!i) {
                    if (h) {
                        f = !0;
                        break
                    }
                    h = !0
                }
                o.offset = l,
                d = !1;
                break;
            case "]":
                if (!i) {
                    if (p || u) {
                        f = !0;
                        break
                    }
                    p = u = !0
                }
                o.limit = o.markedOffset = l,
                d = !1;
                break;
            case ">":
                if (!i) {
                    if (p) {
                        f = !0;
                        break
                    }
                    p = !0
                }
                o.limit = l,
                d = !1;
                break;
            case "'":
                if (!i) {
                    if (u) {
                        f = !0;
                        break
                    }
                    u = !0
                }
                o.markedOffset = l,
                d = !1;
                break;
            case " ":
                d = !1;
                break;
            default:
                if (!i && d) {
                    f = !0;
                    break
                }
                if (n = parseInt(s + e.charAt(c++), 16),
                !i && (isNaN(n) || n < 0 || n > 255))
                    throw TypeError("Illegal str: Not a debug encoded string");
                o.view[l++] = n,
                d = !0
            }
            if (f)
                throw TypeError("Illegal str: Invalid symbol at " + c)
        }
        if (!i) {
            if (!h || !p)
                throw TypeError("Illegal str: Missing offset or limit");
            if (l < o.buffer.byteLength)
                throw TypeError("Illegal str: Not a debug encoded string (is it hex?) " + l + " < " + r)
        }
        return o
    }
    ,
    r.toHex = function(e, t) {
        if (e = void 0 === e ? this.offset : e,
        t = void 0 === t ? this.limit : t,
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal begin: Not an integer");
            if (e >>>= 0,
            "number" != typeof t || t % 1 != 0)
                throw TypeError("Illegal end: Not an integer");
            if (t >>>= 0,
            e < 0 || e > t || t > this.buffer.byteLength)
                throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
        }
        for (var i, s = new Array(t - e); e < t; )
            i = this.view[e++],
            i < 16 ? s.push("0", i.toString(16)) : s.push(i.toString(16));
        return s.join("")
    }
    ,
    a.fromHex = function(e, t, i) {
        if (!i) {
            if ("string" != typeof e)
                throw TypeError("Illegal str: Not a string");
            if (e.length % 2 != 0)
                throw TypeError("Illegal str: Length not a multiple of 2")
        }
        for (var s, n = e.length, r = new a(n / 2 | 0,t), o = 0, c = 0; o < n; o += 2) {
            if (s = parseInt(e.substring(o, o + 2), 16),
            !i && (!isFinite(s) || s < 0 || s > 255))
                throw TypeError("Illegal str: Contains non-hex characters");
            r.view[c++] = s
        }
        return r.limit = c,
        r
    }
    ;
    var d = function() {
        var e = {};
        return e.MAX_CODEPOINT = 1114111,
        e.encodeUTF8 = function(e, t) {
            var i = null;
            for ("number" == typeof e && (i = e,
            e = function() {
                return null
            }
            ); null !== i || null !== (i = e()); )
                i < 128 ? t(127 & i) : i < 2048 ? (t(i >> 6 & 31 | 192),
                t(63 & i | 128)) : i < 65536 ? (t(i >> 12 & 15 | 224),
                t(i >> 6 & 63 | 128),
                t(63 & i | 128)) : (t(i >> 18 & 7 | 240),
                t(i >> 12 & 63 | 128),
                t(i >> 6 & 63 | 128),
                t(63 & i | 128)),
                i = null
        }
        ,
        e.decodeUTF8 = function(e, t) {
            for (var i, s, n, a, r = function(e) {
                e = e.slice(0, e.indexOf(null));
                var t = Error(e.toString());
                throw t.name = "TruncatedError",
                t.bytes = e,
                t
            }; null !== (i = e()); )
                if (0 == (128 & i))
                    t(i);
                else if (192 == (224 & i))
                    null === (s = e()) && r([i, s]),
                    t((31 & i) << 6 | 63 & s);
                else if (224 == (240 & i))
                    (null === (s = e()) || null === (n = e())) && r([i, s, n]),
                    t((15 & i) << 12 | (63 & s) << 6 | 63 & n);
                else {
                    if (240 != (248 & i))
                        throw RangeError("Illegal starting byte: " + i);
                    (null === (s = e()) || null === (n = e()) || null === (a = e())) && r([i, s, n, a]),
                    t((7 & i) << 18 | (63 & s) << 12 | (63 & n) << 6 | 63 & a)
                }
        }
        ,
        e.UTF16toUTF8 = function(e, t) {
            for (var i, s = null; ; ) {
                if (null === (i = null !== s ? s : e()))
                    break;
                i >= 55296 && i <= 57343 && null !== (s = e()) && s >= 56320 && s <= 57343 ? (t(1024 * (i - 55296) + s - 56320 + 65536),
                s = null) : t(i)
            }
            null !== s && t(s)
        }
        ,
        e.UTF8toUTF16 = function(e, t) {
            var i = null;
            for ("number" == typeof e && (i = e,
            e = function() {
                return null
            }
            ); null !== i || null !== (i = e()); )
                i <= 65535 ? t(i) : (i -= 65536,
                t(55296 + (i >> 10)),
                t(i % 1024 + 56320)),
                i = null
        }
        ,
        e.encodeUTF16toUTF8 = function(t, i) {
            e.UTF16toUTF8(t, function(t) {
                e.encodeUTF8(t, i)
            })
        }
        ,
        e.decodeUTF8toUTF16 = function(t, i) {
            e.decodeUTF8(t, function(t) {
                e.UTF8toUTF16(t, i)
            })
        }
        ,
        e.calculateCodePoint = function(e) {
            return e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4
        }
        ,
        e.calculateUTF8 = function(e) {
            for (var t, i = 0; null !== (t = e()); )
                i += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
            return i
        }
        ,
        e.calculateUTF16asUTF8 = function(t) {
            var i = 0
              , s = 0;
            return e.UTF16toUTF8(t, function(e) {
                ++i,
                s += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4
            }),
            [i, s]
        }
        ,
        e
    }();
    return r.toUTF8 = function(e, t) {
        if (void 0 === e && (e = this.offset),
        void 0 === t && (t = this.limit),
        !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0)
                throw TypeError("Illegal begin: Not an integer");
            if (e >>>= 0,
            "number" != typeof t || t % 1 != 0)
                throw TypeError("Illegal end: Not an integer");
            if (t >>>= 0,
            e < 0 || e > t || t > this.buffer.byteLength)
                throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
        }
        var s;
        try {
            d.decodeUTF8toUTF16(function() {
                return e < t ? this.view[e++] : null
            }
            .bind(this), s = i())
        } catch (i) {
            if (e !== t)
                throw RangeError("Illegal range: Truncated data, " + e + " != " + t)
        }
        return s()
    }
    ,
    a.fromUTF8 = function(e, i, s) {
        if (!s && "string" != typeof e)
            throw TypeError("Illegal str: Not a string");
        var n = new a(d.calculateUTF16asUTF8(t(e), !0)[1],i,s)
          , r = 0;
        return d.encodeUTF16toUTF8(t(e), function(e) {
            n.view[r++] = e
        }),
        n.limit = r,
        n
    }
    ,
    a
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(["chat-bytebuffer.js"], function() {
        (e.dcodeIO = e.dcodeIO || {}).ProtoBuf = t(e.dcodeIO.ByteBuffer)
    }) : "function" == typeof require && "object" == typeof module && module && module.exports ? module.exports = t(require("bytebuffer"), !0) : (e.dcodeIO = e.dcodeIO || {}).ProtoBuf = t(e.dcodeIO.ByteBuffer)
}(this, function(e, t) {
    "use strict";
    var i = {};
    return i.ByteBuffer = e,
    i.Long = e.Long || null,
    i.VERSION = "5.0.1",
    i.WIRE_TYPES = {},
    i.WIRE_TYPES.VARINT = 0,
    i.WIRE_TYPES.BITS64 = 1,
    i.WIRE_TYPES.LDELIM = 2,
    i.WIRE_TYPES.STARTGROUP = 3,
    i.WIRE_TYPES.ENDGROUP = 4,
    i.WIRE_TYPES.BITS32 = 5,
    i.PACKABLE_WIRE_TYPES = [i.WIRE_TYPES.VARINT, i.WIRE_TYPES.BITS64, i.WIRE_TYPES.BITS32],
    i.TYPES = {
        int32: {
            name: "int32",
            wireType: i.WIRE_TYPES.VARINT,
            defaultValue: 0
        },
        uint32: {
            name: "uint32",
            wireType: i.WIRE_TYPES.VARINT,
            defaultValue: 0
        },
        sint32: {
            name: "sint32",
            wireType: i.WIRE_TYPES.VARINT,
            defaultValue: 0
        },
        int64: {
            name: "int64",
            wireType: i.WIRE_TYPES.VARINT,
            defaultValue: 0
        },
        uint64: {
            name: "uint64",
            wireType: i.WIRE_TYPES.VARINT,
            defaultValue: i.Long ? i.Long.UZERO : void 0
        },
        sint64: {
            name: "sint64",
            wireType: i.WIRE_TYPES.VARINT,
            defaultValue: i.Long ? i.Long.ZERO : void 0
        },
        bool: {
            name: "bool",
            wireType: i.WIRE_TYPES.VARINT,
            defaultValue: !1
        },
        double: {
            name: "double",
            wireType: i.WIRE_TYPES.BITS64,
            defaultValue: 0
        },
        string: {
            name: "string",
            wireType: i.WIRE_TYPES.LDELIM,
            defaultValue: ""
        },
        bytes: {
            name: "bytes",
            wireType: i.WIRE_TYPES.LDELIM,
            defaultValue: null
        },
        fixed32: {
            name: "fixed32",
            wireType: i.WIRE_TYPES.BITS32,
            defaultValue: 0
        },
        sfixed32: {
            name: "sfixed32",
            wireType: i.WIRE_TYPES.BITS32,
            defaultValue: 0
        },
        fixed64: {
            name: "fixed64",
            wireType: i.WIRE_TYPES.BITS64,
            defaultValue: i.Long ? i.Long.UZERO : void 0
        },
        sfixed64: {
            name: "sfixed64",
            wireType: i.WIRE_TYPES.BITS64,
            defaultValue: i.Long ? i.Long.ZERO : void 0
        },
        float: {
            name: "float",
            wireType: i.WIRE_TYPES.BITS32,
            defaultValue: 0
        },
        enum: {
            name: "enum",
            wireType: i.WIRE_TYPES.VARINT,
            defaultValue: 0
        },
        message: {
            name: "message",
            wireType: i.WIRE_TYPES.LDELIM,
            defaultValue: null
        },
        group: {
            name: "group",
            wireType: i.WIRE_TYPES.STARTGROUP,
            defaultValue: null
        }
    },
    i.MAP_KEY_TYPES = [i.TYPES.int32, i.TYPES.sint32, i.TYPES.sfixed32, i.TYPES.uint32, i.TYPES.fixed32, i.TYPES.int64, i.TYPES.sint64, i.TYPES.sfixed64, i.TYPES.uint64, i.TYPES.fixed64, i.TYPES.bool, i.TYPES.string, i.TYPES.bytes],
    i.ID_MIN = 1,
    i.ID_MAX = 536870911,
    i.convertFieldsToCamelCase = !1,
    i.populateAccessors = !0,
    i.populateDefaults = !0,
    i.Util = function() {
        var e = {};
        return e.IS_NODE = !("object" != typeof process || process + "" != "[object process]" || process.browser),
        e.XHR = function() {
            for (var e = [function() {
                return new XMLHttpRequest
            }
            , function() {
                return new ActiveXObject("Msxml2.XMLHTTP")
            }
            , function() {
                return new ActiveXObject("Msxml3.XMLHTTP")
            }
            , function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            }
            ], t = null, i = 0; i < e.length; i++) {
                try {
                    t = e[i]()
                } catch (e) {
                    continue
                }
                break
            }
            if (!t)
                throw Error("XMLHttpRequest is not supported");
            return t
        }
        ,
        e.fetch = function(t, i) {
            if (i && "function" != typeof i && (i = null),
            e.IS_NODE) {
                var s = require("fs");
                if (i)
                    s.readFile(t, function(e, t) {
                        i(e ? null : "" + t)
                    });
                else
                    try {
                        return s.readFileSync(t)
                    } catch (e) {
                        return null
                    }
            } else {
                var n = e.XHR();
                if (n.open("GET", t, !!i),
                n.setRequestHeader("Accept", "text/plain"),
                "function" == typeof n.overrideMimeType && n.overrideMimeType("text/plain"),
                !i)
                    return n.send(null),
                    200 == n.status || 0 == n.status && "string" == typeof n.responseText ? n.responseText : null;
                if (n.onreadystatechange = function() {
                    4 == n.readyState && i(200 == n.status || 0 == n.status && "string" == typeof n.responseText ? n.responseText : null)
                }
                ,
                4 == n.readyState)
                    return;
                n.send(null)
            }
        }
        ,
        e.toCamelCase = function(e) {
            return e.replace(/_([a-zA-Z])/g, function(e, t) {
                return t.toUpperCase()
            })
        }
        ,
        e
    }(),
    i.Lang = {
        DELIM: /[\s\{\}=;:\[\],'"\(\)<>]/g,
        RULE: /^(?:required|optional|repeated|map)$/,
        TYPE: /^(?:double|float|int32|uint32|sint32|int64|uint64|sint64|fixed32|sfixed32|fixed64|sfixed64|bool|string|bytes)$/,
        NAME: /^[a-zA-Z_][a-zA-Z_0-9]*$/,
        TYPEDEF: /^[a-zA-Z][a-zA-Z_0-9]*$/,
        TYPEREF: /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)+$/,
        FQTYPEREF: /^(?:\.[a-zA-Z][a-zA-Z_0-9]*)+$/,
        NUMBER: /^-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+|([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?)|inf|nan)$/,
        NUMBER_DEC: /^(?:[1-9][0-9]*|0)$/,
        NUMBER_HEX: /^0[xX][0-9a-fA-F]+$/,
        NUMBER_OCT: /^0[0-7]+$/,
        NUMBER_FLT: /^([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?|inf|nan)$/,
        BOOL: /^(?:true|false)$/i,
        ID: /^(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
        NEGID: /^\-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
        WHITESPACE: /\s/,
        STRING: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")|(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
        STRING_DQ: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
        STRING_SQ: /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g
    },
    i.DotProto = function(e, t) {
        function i(e, i) {
            var s = -1
              , n = 1;
            if ("-" == e.charAt(0) && (n = -1,
            e = e.substring(1)),
            t.NUMBER_DEC.test(e))
                s = parseInt(e);
            else if (t.NUMBER_HEX.test(e))
                s = parseInt(e.substring(2), 16);
            else {
                if (!t.NUMBER_OCT.test(e))
                    throw Error("illegal id value: " + (n < 0 ? "-" : "") + e);
                s = parseInt(e.substring(1), 8)
            }
            if (s = n * s | 0,
            !i && s < 0)
                throw Error("illegal id value: " + (n < 0 ? "-" : "") + e);
            return s
        }
        function s(e) {
            var i = 1;
            if ("-" == e.charAt(0) && (i = -1,
            e = e.substring(1)),
            t.NUMBER_DEC.test(e))
                return i * parseInt(e, 10);
            if (t.NUMBER_HEX.test(e))
                return i * parseInt(e.substring(2), 16);
            if (t.NUMBER_OCT.test(e))
                return i * parseInt(e.substring(1), 8);
            if ("inf" === e)
                return i * (1 / 0);
            if ("nan" === e)
                return NaN;
            if (t.NUMBER_FLT.test(e))
                return i * parseFloat(e);
            throw Error("illegal number value: " + (i < 0 ? "-" : "") + e)
        }
        function n(e, t, i) {
            void 0 === e[t] ? e[t] = i : (Array.isArray(e[t]) || (e[t] = [e[t]]),
            e[t].push(i))
        }
        var a = {}
          , r = function(e) {
            this.source = e + "",
            this.index = 0,
            this.line = 1,
            this.stack = [],
            this._stringOpen = null
        }
          , o = r.prototype;
        o._readString = function() {
            var e = '"' === this._stringOpen ? t.STRING_DQ : t.STRING_SQ;
            e.lastIndex = this.index - 1;
            var i = e.exec(this.source);
            if (!i)
                throw Error("unterminated string");
            return this.index = e.lastIndex,
            this.stack.push(this._stringOpen),
            this._stringOpen = null,
            i[1]
        }
        ,
        o.next = function() {
            if (this.stack.length > 0)
                return this.stack.shift();
            if (this.index >= this.source.length)
                return null;
            if (null !== this._stringOpen)
                return this._readString();
            var e, i, s;
            do {
                for (e = !1; t.WHITESPACE.test(s = this.source.charAt(this.index)); )
                    if ("\n" === s && ++this.line,
                    ++this.index === this.source.length)
                        return null;
                if ("/" === this.source.charAt(this.index))
                    if (++this.index,
                    "/" === this.source.charAt(this.index)) {
                        for (; "\n" !== this.source.charAt(++this.index); )
                            if (this.index == this.source.length)
                                return null;
                        ++this.index,
                        ++this.line,
                        e = !0
                    } else {
                        if ("*" !== (s = this.source.charAt(this.index)))
                            return "/";
                        do {
                            if ("\n" === s && ++this.line,
                            ++this.index === this.source.length)
                                return null;
                            i = s,
                            s = this.source.charAt(this.index)
                        } while ("*" !== i || "/" !== s);++this.index,
                        e = !0
                    }
            } while (e);if (this.index === this.source.length)
                return null;
            var n = this.index;
            if (t.DELIM.lastIndex = 0,
            !t.DELIM.test(this.source.charAt(n++)))
                for (; n < this.source.length && !t.DELIM.test(this.source.charAt(n)); )
                    ++n;
            var a = this.source.substring(this.index, this.index = n);
            return '"' !== a && "'" !== a || (this._stringOpen = a),
            a
        }
        ,
        o.peek = function() {
            if (0 === this.stack.length) {
                var e = this.next();
                if (null === e)
                    return null;
                this.stack.push(e)
            }
            return this.stack[0]
        }
        ,
        o.skip = function(e) {
            var t = this.next();
            if (t !== e)
                throw Error("illegal '" + t + "', '" + e + "' expected")
        }
        ,
        o.omit = function(e) {
            return this.peek() === e && (this.next(),
            !0)
        }
        ,
        o.toString = function() {
            return "Tokenizer (" + this.index + "/" + this.source.length + " at line " + this.line + ")"
        }
        ,
        a.Tokenizer = r;
        var c = function(e) {
            this.tn = new r(e),
            this.proto3 = !1
        }
          , l = c.prototype;
        return l.parse = function() {
            var e, i, s = {
                name: "[ROOT]",
                package: null,
                messages: [],
                enums: [],
                imports: [],
                options: {},
                services: []
            }, n = !0;
            try {
                for (; e = this.tn.next(); )
                    switch (e) {
                    case "package":
                        if (!n || null !== s.package)
                            throw Error("unexpected 'package'");
                        if (e = this.tn.next(),
                        !t.TYPEREF.test(e))
                            throw Error("illegal package name: " + e);
                        this.tn.skip(";"),
                        s.package = e;
                        break;
                    case "import":
                        if (!n)
                            throw Error("unexpected 'import'");
                        e = this.tn.peek(),
                        ("public" === e || (i = "weak" === e)) && this.tn.next(),
                        e = this._readString(),
                        this.tn.skip(";"),
                        i || s.imports.push(e);
                        break;
                    case "syntax":
                        if (!n)
                            throw Error("unexpected 'syntax'");
                        this.tn.skip("="),
                        "proto3" === (s.syntax = this._readString()) && (this.proto3 = !0),
                        this.tn.skip(";");
                        break;
                    case "message":
                        this._parseMessage(s, null),
                        n = !1;
                        break;
                    case "enum":
                        this._parseEnum(s),
                        n = !1;
                        break;
                    case "option":
                        this._parseOption(s);
                        break;
                    case "service":
                        this._parseService(s);
                        break;
                    case "extend":
                        this._parseExtend(s);
                        break;
                    default:
                        throw Error("unexpected '" + e + "'")
                    }
            } catch (e) {
                throw e.message = "Parse error at line " + this.tn.line + ": " + e.message,
                e
            }
            return delete s.name,
            s
        }
        ,
        c.parse = function(e) {
            return new c(e).parse()
        }
        ,
        l._readString = function() {
            var e, t, i = "";
            do {
                if ("'" !== (t = this.tn.next()) && '"' !== t)
                    throw Error("illegal string delimiter: " + t);
                i += this.tn.next(),
                this.tn.skip(t),
                e = this.tn.peek()
            } while ('"' === e || '"' === e);return i
        }
        ,
        l._readValue = function(e) {
            var i = this.tn.peek();
            if ('"' === i || "'" === i)
                return this._readString();
            if (this.tn.next(),
            t.NUMBER.test(i))
                return s(i);
            if (t.BOOL.test(i))
                return "true" === i.toLowerCase();
            if (e && t.TYPEREF.test(i))
                return i;
            throw Error("illegal value: " + i)
        }
        ,
        l._parseOption = function(e, i) {
            var s = this.tn.next()
              , n = !1;
            if ("(" === s && (n = !0,
            s = this.tn.next()),
            !t.TYPEREF.test(s))
                throw Error("illegal option name: " + s);
            var a = s;
            n && (this.tn.skip(")"),
            a = "(" + a + ")",
            s = this.tn.peek(),
            t.FQTYPEREF.test(s) && (a += s,
            this.tn.next())),
            this.tn.skip("="),
            this._parseOptionValue(e, a),
            i || this.tn.skip(";")
        }
        ,
        l._parseOptionValue = function(e, i) {
            var s = this.tn.peek();
            if ("{" !== s)
                n(e.options, i, this._readValue(!0));
            else
                for (this.tn.skip("{"); "}" !== (s = this.tn.next()); ) {
                    if (!t.NAME.test(s))
                        throw Error("illegal option name: " + i + "." + s);
                    this.tn.omit(":") ? n(e.options, i + "." + s, this._readValue(!0)) : this._parseOptionValue(e, i + "." + s)
                }
        }
        ,
        l._parseService = function(e) {
            var i = this.tn.next();
            if (!t.NAME.test(i))
                throw Error("illegal service name at line " + this.tn.line + ": " + i);
            var s = i
              , n = {
                name: s,
                rpc: {},
                options: {}
            };
            for (this.tn.skip("{"); "}" !== (i = this.tn.next()); )
                if ("option" === i)
                    this._parseOption(n);
                else {
                    if ("rpc" !== i)
                        throw Error("illegal service token: " + i);
                    this._parseServiceRPC(n)
                }
            this.tn.omit(";"),
            e.services.push(n)
        }
        ,
        l._parseServiceRPC = function(e) {
            var i = this.tn.next();
            if (!t.NAME.test(i))
                throw Error("illegal rpc service method name: " + i);
            var s = i
              , n = {
                request: null,
                response: null,
                request_stream: !1,
                response_stream: !1,
                options: {}
            };
            if (this.tn.skip("("),
            i = this.tn.next(),
            "stream" === i.toLowerCase() && (n.request_stream = !0,
            i = this.tn.next()),
            !t.TYPEREF.test(i))
                throw Error("illegal rpc service request type: " + i);
            if (n.request = i,
            this.tn.skip(")"),
            i = this.tn.next(),
            "returns" !== i.toLowerCase())
                throw Error("illegal rpc service request type delimiter: " + i);
            if (this.tn.skip("("),
            i = this.tn.next(),
            "stream" === i.toLowerCase() && (n.response_stream = !0,
            i = this.tn.next()),
            n.response = i,
            this.tn.skip(")"),
            "{" === (i = this.tn.peek())) {
                for (this.tn.next(); "}" !== (i = this.tn.next()); ) {
                    if ("option" !== i)
                        throw Error("illegal rpc service token: " + i);
                    this._parseOption(n)
                }
                this.tn.omit(";")
            } else
                this.tn.skip(";");
            void 0 === e.rpc && (e.rpc = {}),
            e.rpc[s] = n
        }
        ,
        l._parseMessage = function(e, s) {
            var n = !!s
              , a = this.tn.next()
              , r = {
                name: "",
                fields: [],
                enums: [],
                messages: [],
                options: {},
                services: [],
                oneofs: {}
            };
            if (!t.NAME.test(a))
                throw Error("illegal " + (n ? "group" : "message") + " name: " + a);
            for (r.name = a,
            n && (this.tn.skip("="),
            s.id = i(this.tn.next()),
            r.isGroup = !0),
            a = this.tn.peek(),
            "[" === a && s && this._parseFieldOptions(s),
            this.tn.skip("{"); "}" !== (a = this.tn.next()); )
                if (t.RULE.test(a))
                    this._parseMessageField(r, a);
                else if ("oneof" === a)
                    this._parseMessageOneOf(r);
                else if ("enum" === a)
                    this._parseEnum(r);
                else if ("message" === a)
                    this._parseMessage(r);
                else if ("option" === a)
                    this._parseOption(r);
                else if ("service" === a)
                    this._parseService(r);
                else if ("extensions" === a)
                    r.hasOwnProperty("extensions") ? r.extensions = r.extensions.concat(this._parseExtensionRanges()) : r.extensions = this._parseExtensionRanges();
                else if ("reserved" === a)
                    this._parseIgnored();
                else if ("extend" === a)
                    this._parseExtend(r);
                else {
                    if (!t.TYPEREF.test(a))
                        throw Error("illegal message token: " + a);
                    if (!this.proto3)
                        throw Error("illegal field rule: " + a);
                    this._parseMessageField(r, "optional", a)
                }
            return this.tn.omit(";"),
            e.messages.push(r),
            r
        }
        ,
        l._parseIgnored = function() {
            for (; ";" !== this.tn.peek(); )
                this.tn.next();
            this.tn.skip(";")
        }
        ,
        l._parseMessageField = function(e, s, n) {
            if (!t.RULE.test(s))
                throw Error("illegal message field rule: " + s);
            var a, r = {
                rule: s,
                type: "",
                name: "",
                options: {},
                id: 0
            };
            if ("map" === s) {
                if (n)
                    throw Error("illegal type: " + n);
                if (this.tn.skip("<"),
                a = this.tn.next(),
                !t.TYPE.test(a) && !t.TYPEREF.test(a))
                    throw Error("illegal message field type: " + a);
                if (r.keytype = a,
                this.tn.skip(","),
                a = this.tn.next(),
                !t.TYPE.test(a) && !t.TYPEREF.test(a))
                    throw Error("illegal message field: " + a);
                if (r.type = a,
                this.tn.skip(">"),
                a = this.tn.next(),
                !t.NAME.test(a))
                    throw Error("illegal message field name: " + a);
                r.name = a,
                this.tn.skip("="),
                r.id = i(this.tn.next()),
                a = this.tn.peek(),
                "[" === a && this._parseFieldOptions(r),
                this.tn.skip(";")
            } else if ("group" === (n = void 0 !== n ? n : this.tn.next())) {
                var o = this._parseMessage(e, r);
                if (!/^[A-Z]/.test(o.name))
                    throw Error("illegal group name: " + o.name);
                r.type = o.name,
                r.name = o.name.toLowerCase(),
                this.tn.omit(";")
            } else {
                if (!t.TYPE.test(n) && !t.TYPEREF.test(n))
                    throw Error("illegal message field type: " + n);
                if (r.type = n,
                a = this.tn.next(),
                !t.NAME.test(a))
                    throw Error("illegal message field name: " + a);
                r.name = a,
                this.tn.skip("="),
                r.id = i(this.tn.next()),
                a = this.tn.peek(),
                "[" === a && this._parseFieldOptions(r),
                this.tn.skip(";")
            }
            return e.fields.push(r),
            r
        }
        ,
        l._parseMessageOneOf = function(e) {
            var i = this.tn.next();
            if (!t.NAME.test(i))
                throw Error("illegal oneof name: " + i);
            var s, n = i, a = [];
            for (this.tn.skip("{"); "}" !== (i = this.tn.next()); )
                s = this._parseMessageField(e, "optional", i),
                s.oneof = n,
                a.push(s.id);
            this.tn.omit(";"),
            e.oneofs[n] = a
        }
        ,
        l._parseFieldOptions = function(e) {
            this.tn.skip("[");
            for (var t = !0; "]" !== this.tn.peek(); )
                t || this.tn.skip(","),
                this._parseOption(e, !0),
                t = !1;
            this.tn.next()
        }
        ,
        l._parseEnum = function(e) {
            var s = {
                name: "",
                values: [],
                options: {}
            }
              , n = this.tn.next();
            if (!t.NAME.test(n))
                throw Error("illegal name: " + n);
            for (s.name = n,
            this.tn.skip("{"); "}" !== (n = this.tn.next()); )
                if ("option" === n)
                    this._parseOption(s);
                else {
                    if (!t.NAME.test(n))
                        throw Error("illegal name: " + n);
                    this.tn.skip("=");
                    var a = {
                        name: n,
                        id: i(this.tn.next(), !0)
                    };
                    n = this.tn.peek(),
                    "[" === n && this._parseFieldOptions({
                        options: {}
                    }),
                    this.tn.skip(";"),
                    s.values.push(a)
                }
            this.tn.omit(";"),
            e.enums.push(s)
        }
        ,
        l._parseExtensionRanges = function() {
            var t, i, n, a = [];
            do {
                for (i = []; ; ) {
                    switch (t = this.tn.next()) {
                    case "min":
                        n = e.ID_MIN;
                        break;
                    case "max":
                        n = e.ID_MAX;
                        break;
                    default:
                        n = s(t)
                    }
                    if (i.push(n),
                    2 === i.length)
                        break;
                    if ("to" !== this.tn.peek()) {
                        i.push(n);
                        break
                    }
                    this.tn.next()
                }
                a.push(i)
            } while (this.tn.omit(","));return this.tn.skip(";"),
            a
        }
        ,
        l._parseExtend = function(e) {
            var i = this.tn.next();
            if (!t.TYPEREF.test(i))
                throw Error("illegal extend reference: " + i);
            var s = {
                ref: i,
                fields: []
            };
            for (this.tn.skip("{"); "}" !== (i = this.tn.next()); )
                if (t.RULE.test(i))
                    this._parseMessageField(s, i);
                else {
                    if (!t.TYPEREF.test(i))
                        throw Error("illegal extend token: " + i);
                    if (!this.proto3)
                        throw Error("illegal field rule: " + i);
                    this._parseMessageField(s, "optional", i)
                }
            return this.tn.omit(";"),
            e.messages.push(s),
            s
        }
        ,
        l.toString = function() {
            return "Parser at line " + this.tn.line
        }
        ,
        a.Parser = c,
        a
    }(i, i.Lang),
    i.Reflect = function(t) {
        function i(i) {
            if ("string" == typeof i && (i = t.TYPES[i]),
            void 0 === i.defaultValue)
                throw Error("default value for type " + i.name + " is not supported");
            return i == t.TYPES.bytes ? new e(0) : i.defaultValue
        }
        function s(e, i) {
            if (e && "number" == typeof e.low && "number" == typeof e.high && "boolean" == typeof e.unsigned && e.low === e.low && e.high === e.high)
                return new t.Long(e.low,e.high,void 0 === i ? e.unsigned : i);
            if ("string" == typeof e)
                return t.Long.fromString(e, i || !1, 10);
            if ("number" == typeof e)
                return t.Long.fromNumber(e, i || !1);
            throw Error("not convertible to Long")
        }
        function n(e, i) {
            var s = i.readVarint32()
              , a = 7 & s
              , r = s >>> 3;
            switch (a) {
            case t.WIRE_TYPES.VARINT:
                do {
                    s = i.readUint8()
                } while (128 == (128 & s));break;
            case t.WIRE_TYPES.BITS64:
                i.offset += 8;
                break;
            case t.WIRE_TYPES.LDELIM:
                s = i.readVarint32(),
                i.offset += s;
                break;
            case t.WIRE_TYPES.STARTGROUP:
                n(r, i);
                break;
            case t.WIRE_TYPES.ENDGROUP:
                if (r === e)
                    return !1;
                throw Error("Illegal GROUPEND after unknown group: " + r + " (" + e + " expected)");
            case t.WIRE_TYPES.BITS32:
                i.offset += 4;
                break;
            default:
                throw Error("Illegal wire type in unknown group " + e + ": " + a)
            }
            return !0
        }
        var a = {}
          , r = function(e, t, i) {
            this.builder = e,
            this.parent = t,
            this.name = i,
            this.className
        }
          , o = r.prototype;
        o.fqn = function() {
            for (var e = this.name, t = this; ; ) {
                if (null == (t = t.parent))
                    break;
                e = t.name + "." + e
            }
            return e
        }
        ,
        o.toString = function(e) {
            return (e ? this.className + " " : "") + this.fqn()
        }
        ,
        o.build = function() {
            throw Error(this.toString(!0) + " cannot be built directly")
        }
        ,
        a.T = r;
        var c = function(e, t, i, s, n) {
            r.call(this, e, t, i),
            this.className = "Namespace",
            this.children = [],
            this.options = s || {},
            this.syntax = n || "proto2"
        }
          , l = c.prototype = Object.create(r.prototype);
        l.getChildren = function(e) {
            if (null == (e = e || null))
                return this.children.slice();
            for (var t = [], i = 0, s = this.children.length; i < s; ++i)
                this.children[i]instanceof e && t.push(this.children[i]);
            return t
        }
        ,
        l.addChild = function(e) {
            var t;
            if (t = this.getChild(e.name))
                if (t instanceof u.Field && t.name !== t.originalName && null === this.getChild(t.originalName))
                    t.name = t.originalName;
                else {
                    if (!(e instanceof u.Field && e.name !== e.originalName && null === this.getChild(e.originalName)))
                        throw Error("Duplicate name in namespace " + this.toString(!0) + ": " + e.name);
                    e.name = e.originalName
                }
            this.children.push(e)
        }
        ,
        l.getChild = function(e) {
            for (var t = "number" == typeof e ? "id" : "name", i = 0, s = this.children.length; i < s; ++i)
                if (this.children[i][t] === e)
                    return this.children[i];
            return null
        }
        ,
        l.resolve = function(e, t) {
            var i = "string" == typeof e ? e.split(".") : e
              , s = this
              , n = 0;
            if ("" === i[n]) {
                for (; null !== s.parent; )
                    s = s.parent;
                n++
            }
            var r;
            do {
                do {
                    if (!(s instanceof a.Namespace)) {
                        s = null;
                        break
                    }
                    if (!(r = s.getChild(i[n])) || !(r instanceof a.T) || t && !(r instanceof a.Namespace)) {
                        s = null;
                        break
                    }
                    s = r,
                    n++
                } while (n < i.length);if (null != s)
                    break;
                if (null !== this.parent)
                    return this.parent.resolve(e, t)
            } while (null != s);return s
        }
        ,
        l.qn = function(e) {
            var t = []
              , i = e;
            do {
                t.unshift(i.name),
                i = i.parent
            } while (null !== i);for (var s = 1; s <= t.length; s++) {
                var n = t.slice(t.length - s);
                if (e === this.resolve(n, e instanceof a.Namespace))
                    return n.join(".")
            }
            return e.fqn()
        }
        ,
        l.build = function() {
            for (var e, t = {}, i = this.children, s = 0, n = i.length; s < n; ++s)
                (e = i[s])instanceof c && (t[e.name] = e.build());
            return Object.defineProperty && Object.defineProperty(t, "$options", {
                value: this.buildOpt()
            }),
            t
        }
        ,
        l.buildOpt = function() {
            for (var e = {}, t = Object.keys(this.options), i = 0, s = t.length; i < s; ++i) {
                var n = t[i]
                  , a = this.options[t[i]];
                e[n] = a
            }
            return e
        }
        ,
        l.getOption = function(e) {
            return void 0 === e ? this.options : void 0 !== this.options[e] ? this.options[e] : null
        }
        ,
        a.Namespace = c;
        var d = function(e, i, s, n, a) {
            if (this.type = e,
            this.resolvedType = i,
            this.isMapKey = s,
            this.syntax = n,
            this.name = a,
            s && t.MAP_KEY_TYPES.indexOf(e) < 0)
                throw Error("Invalid map key type: " + e.name)
        }
          , h = d.prototype;
        d.defaultFieldValue = i,
        h.toString = function() {
            return (this.name || "") + (this.isMapKey ? "map" : "value") + " element"
        }
        ,
        h.verifyValue = function(i) {
            function n(e, t) {
                throw Error("Illegal value for " + a.toString(!0) + " of type " + a.type.name + ": " + e + " (" + t + ")")
            }
            var a = this;
            switch (this.type) {
            case t.TYPES.int32:
            case t.TYPES.sint32:
            case t.TYPES.sfixed32:
                return ("number" != typeof i || i === i && i % 1 != 0) && n(typeof i, "not an integer"),
                i > 4294967295 ? 0 | i : i;
            case t.TYPES.uint32:
            case t.TYPES.fixed32:
                return ("number" != typeof i || i === i && i % 1 != 0) && n(typeof i, "not an integer"),
                i < 0 ? i >>> 0 : i;
            case t.TYPES.int64:
            case t.TYPES.sint64:
            case t.TYPES.sfixed64:
                if (t.Long)
                    try {
                        return s(i, !1)
                    } catch (e) {
                        n(typeof i, e.message)
                    }
                else
                    n(typeof i, "requires Long.js");
            case t.TYPES.uint64:
            case t.TYPES.fixed64:
                if (t.Long)
                    try {
                        return s(i, !0)
                    } catch (e) {
                        n(typeof i, e.message)
                    }
                else
                    n(typeof i, "requires Long.js");
            case t.TYPES.bool:
                return "boolean" != typeof i && n(typeof i, "not a boolean"),
                i;
            case t.TYPES.float:
            case t.TYPES.double:
                return "number" != typeof i && n(typeof i, "not a number"),
                i;
            case t.TYPES.string:
                return "string" == typeof i || i && i instanceof String || n(typeof i, "not a string"),
                "" + i;
            case t.TYPES.bytes:
                return e.isByteBuffer(i) ? i : e.wrap(i, "base64");
            case t.TYPES.enum:
                var r = this.resolvedType.getChildren(t.Reflect.Enum.Value);
                for (c = 0; c < r.length; c++) {
                    if (r[c].name == i)
                        return r[c].id;
                    if (r[c].id == i)
                        return r[c].id
                }
                if ("proto3" === this.syntax)
                    return ("number" != typeof i || i === i && i % 1 != 0) && n(typeof i, "not an integer"),
                    (i > 4294967295 || i < 0) && n(typeof i, "not in range for uint32"),
                    i;
                n(i, "not a valid enum value");
            case t.TYPES.group:
            case t.TYPES.message:
                if (i && "object" == typeof i || n(typeof i, "object expected"),
                i instanceof this.resolvedType.clazz)
                    return i;
                if (i instanceof t.Builder.Message) {
                    var o = {};
                    for (var c in i)
                        i.hasOwnProperty(c) && (o[c] = i[c]);
                    i = o
                }
                return new this.resolvedType.clazz(i)
            }
            throw Error("[INTERNAL] Illegal value for " + this.toString(!0) + ": " + i + " (undefined type " + this.type + ")")
        }
        ,
        h.calculateLength = function(i, s) {
            if (null === s)
                return 0;
            var n;
            switch (this.type) {
            case t.TYPES.int32:
                return s < 0 ? e.calculateVarint64(s) : e.calculateVarint32(s);
            case t.TYPES.uint32:
                return e.calculateVarint32(s);
            case t.TYPES.sint32:
                return e.calculateVarint32(e.zigZagEncode32(s));
            case t.TYPES.fixed32:
            case t.TYPES.sfixed32:
            case t.TYPES.float:
                return 4;
            case t.TYPES.int64:
            case t.TYPES.uint64:
                return e.calculateVarint64(s);
            case t.TYPES.sint64:
                return e.calculateVarint64(e.zigZagEncode64(s));
            case t.TYPES.fixed64:
            case t.TYPES.sfixed64:
                return 8;
            case t.TYPES.bool:
                return 1;
            case t.TYPES.enum:
                return e.calculateVarint32(s);
            case t.TYPES.double:
                return 8;
            case t.TYPES.string:
                return n = e.calculateUTF8Bytes(s),
                e.calculateVarint32(n) + n;
            case t.TYPES.bytes:
                if (s.remaining() < 0)
                    throw Error("Illegal value for " + this.toString(!0) + ": " + s.remaining() + " bytes remaining");
                return e.calculateVarint32(s.remaining()) + s.remaining();
            case t.TYPES.message:
                return n = this.resolvedType.calculate(s),
                e.calculateVarint32(n) + n;
            case t.TYPES.group:
                return (n = this.resolvedType.calculate(s)) + e.calculateVarint32(i << 3 | t.WIRE_TYPES.ENDGROUP)
            }
            throw Error("[INTERNAL] Illegal value to encode in " + this.toString(!0) + ": " + s + " (unknown type)")
        }
        ,
        h.encodeValue = function(i, s, n) {
            if (null === s)
                return n;
            switch (this.type) {
            case t.TYPES.int32:
                s < 0 ? n.writeVarint64(s) : n.writeVarint32(s);
                break;
            case t.TYPES.uint32:
                n.writeVarint32(s);
                break;
            case t.TYPES.sint32:
                n.writeVarint32ZigZag(s);
                break;
            case t.TYPES.fixed32:
                n.writeUint32(s);
                break;
            case t.TYPES.sfixed32:
                n.writeInt32(s);
                break;
            case t.TYPES.int64:
            case t.TYPES.uint64:
                n.writeVarint64(s);
                break;
            case t.TYPES.sint64:
                n.writeVarint64ZigZag(s);
                break;
            case t.TYPES.fixed64:
                n.writeUint64(s);
                break;
            case t.TYPES.sfixed64:
                n.writeInt64(s);
                break;
            case t.TYPES.bool:
                "string" == typeof s ? n.writeVarint32("false" === s.toLowerCase() ? 0 : !!s) : n.writeVarint32(s ? 1 : 0);
                break;
            case t.TYPES.enum:
                n.writeVarint32(s);
                break;
            case t.TYPES.float:
                n.writeFloat32(s);
                break;
            case t.TYPES.double:
                n.writeFloat64(s);
                break;
            case t.TYPES.string:
                n.writeVString(s);
                break;
            case t.TYPES.bytes:
                if (s.remaining() < 0)
                    throw Error("Illegal value for " + this.toString(!0) + ": " + s.remaining() + " bytes remaining");
                var a = s.offset;
                n.writeVarint32(s.remaining()),
                n.append(s),
                s.offset = a;
                break;
            case t.TYPES.message:
                var r = (new e).LE();
                this.resolvedType.encode(s, r),
                n.writeVarint32(r.offset),
                n.append(r.flip());
                break;
            case t.TYPES.group:
                this.resolvedType.encode(s, n),
                n.writeVarint32(i << 3 | t.WIRE_TYPES.ENDGROUP);
                break;
            default:
                throw Error("[INTERNAL] Illegal value to encode in " + this.toString(!0) + ": " + s + " (unknown type)")
            }
            return n
        }
        ,
        h.decode = function(e, i, s) {
            if (i != this.type.wireType)
                throw Error("Unexpected wire type for element");
            var n, a;
            switch (this.type) {
            case t.TYPES.int32:
                return 0 | e.readVarint32();
            case t.TYPES.uint32:
                return e.readVarint32() >>> 0;
            case t.TYPES.sint32:
                return 0 | e.readVarint32ZigZag();
            case t.TYPES.fixed32:
                return e.readUint32() >>> 0;
            case t.TYPES.sfixed32:
                return 0 | e.readInt32();
            case t.TYPES.int64:
                return e.readVarint64();
            case t.TYPES.uint64:
                return e.readVarint64().toUnsigned();
            case t.TYPES.sint64:
                return e.readVarint64ZigZag();
            case t.TYPES.fixed64:
                return e.readUint64();
            case t.TYPES.sfixed64:
                return e.readInt64();
            case t.TYPES.bool:
                return !!e.readVarint32();
            case t.TYPES.enum:
                return e.readVarint32();
            case t.TYPES.float:
                return e.readFloat();
            case t.TYPES.double:
                return e.readDouble();
            case t.TYPES.string:
                return e.readVString();
            case t.TYPES.bytes:
                if (a = e.readVarint32(),
                e.remaining() < a)
                    throw Error("Illegal number of bytes for " + this.toString(!0) + ": " + a + " required but got only " + e.remaining());
                return n = e.clone(),
                n.limit = n.offset + a,
                e.offset += a,
                n;
            case t.TYPES.message:
                return a = e.readVarint32(),
                this.resolvedType.decode(e, a);
            case t.TYPES.group:
                return this.resolvedType.decode(e, -1, s)
            }
            throw Error("[INTERNAL] Illegal decode type")
        }
        ,
        h.valueFromString = function(i) {
            if (!this.isMapKey)
                throw Error("valueFromString() called on non-map-key element");
            switch (this.type) {
            case t.TYPES.int32:
            case t.TYPES.sint32:
            case t.TYPES.sfixed32:
            case t.TYPES.uint32:
            case t.TYPES.fixed32:
                return this.verifyValue(parseInt(i));
            case t.TYPES.int64:
            case t.TYPES.sint64:
            case t.TYPES.sfixed64:
            case t.TYPES.uint64:
            case t.TYPES.fixed64:
                return this.verifyValue(i);
            case t.TYPES.bool:
                return "true" === i;
            case t.TYPES.string:
                return this.verifyValue(i);
            case t.TYPES.bytes:
                return e.fromBinary(i)
            }
        }
        ,
        h.valueToString = function(e) {
            if (!this.isMapKey)
                throw Error("valueToString() called on non-map-key element");
            return this.type === t.TYPES.bytes ? e.toString("binary") : e.toString()
        }
        ,
        a.Element = d;
        var u = function(e, t, i, s, n, a) {
            c.call(this, e, t, i, s, a),
            this.className = "Message",
            this.extensions = void 0,
            this.clazz = null,
            this.isGroup = !!n,
            this._fields = null,
            this._fieldsById = null,
            this._fieldsByName = null
        }
          , p = u.prototype = Object.create(c.prototype);
        p.build = function(i) {
            if (this.clazz && !i)
                return this.clazz;
            var s = function(t, i) {
                function s(i, n, a, r) {
                    if (null === i || "object" != typeof i) {
                        if (r && r instanceof t.Reflect.Enum) {
                            var o = t.Reflect.Enum.getName(r.object, i);
                            if (null !== o)
                                return o
                        }
                        return i
                    }
                    if (e.isByteBuffer(i))
                        return n ? i.toBase64() : i.toBuffer();
                    if (t.Long.isLong(i))
                        return a ? i.toString() : t.Long.fromValue(i);
                    var c;
                    if (Array.isArray(i))
                        return c = [],
                        i.forEach(function(e, t) {
                            c[t] = s(e, n, a, r)
                        }),
                        c;
                    if (c = {},
                    i instanceof t.Map) {
                        for (var l = i.entries(), d = l.next(); !d.done; d = l.next())
                            c[i.keyElem.valueToString(d.value[0])] = s(d.value[1], n, a, i.valueElem.resolvedType);
                        return c
                    }
                    var h = i.$type
                      , u = void 0;
                    for (var p in i)
                        i.hasOwnProperty(p) && (h && (u = h.getChild(p)) ? c[p] = s(i[p], n, a, u.resolvedType) : c[p] = s(i[p], n, a));
                    return c
                }
                var n = i.getChildren(t.Reflect.Message.Field)
                  , a = i.getChildren(t.Reflect.Message.OneOf)
                  , r = function(s, o) {
                    t.Builder.Message.call(this);
                    for (var c = 0, l = a.length; c < l; ++c)
                        this[a[c].name] = null;
                    for (c = 0,
                    l = n.length; c < l; ++c) {
                        var d = n[c];
                        this[d.name] = d.repeated ? [] : d.map ? new t.Map(d) : null,
                        !d.required && "proto3" !== i.syntax || null === d.defaultValue || (this[d.name] = d.defaultValue)
                    }
                    if (arguments.length > 0) {
                        var h;
                        if (1 !== arguments.length || null === s || "object" != typeof s || !("function" != typeof s.encode || s instanceof r) || Array.isArray(s) || s instanceof t.Map || e.isByteBuffer(s) || s instanceof ArrayBuffer || t.Long && s instanceof t.Long)
                            for (c = 0,
                            l = arguments.length; c < l; ++c)
                                void 0 !== (h = arguments[c]) && this.$set(n[c].name, h);
                        else
                            this.$set(s)
                    }
                }
                  , o = r.prototype = Object.create(t.Builder.Message.prototype);
                o.add = function(e, s, n) {
                    var a = i._fieldsByName[e];
                    if (!n) {
                        if (!a)
                            throw Error(this + "#" + e + " is undefined");
                        if (!(a instanceof t.Reflect.Message.Field))
                            throw Error(this + "#" + e + " is not a field: " + a.toString(!0));
                        if (!a.repeated)
                            throw Error(this + "#" + e + " is not a repeated field");
                        s = a.verifyValue(s, !0)
                    }
                    return null === this[e] && (this[e] = []),
                    this[e].push(s),
                    this
                }
                ,
                o.$add = o.add,
                o.set = function(e, s, n) {
                    if (e && "object" == typeof e) {
                        n = s;
                        for (var a in e)
                            e.hasOwnProperty(a) && void 0 !== (s = e[a]) && this.$set(a, s, n);
                        return this
                    }
                    var r = i._fieldsByName[e];
                    if (n)
                        this[e] = s;
                    else {
                        if (!r)
                            throw Error(this + "#" + e + " is not a field: undefined");
                        if (!(r instanceof t.Reflect.Message.Field))
                            throw Error(this + "#" + e + " is not a field: " + r.toString(!0));
                        this[r.name] = s = r.verifyValue(s)
                    }
                    if (r && r.oneof) {
                        var o = this[r.oneof.name];
                        null !== s ? (null !== o && o !== r.name && (this[o] = null),
                        this[r.oneof.name] = r.name) : o === e && (this[r.oneof.name] = null)
                    }
                    return this
                }
                ,
                o.$set = o.set,
                o.get = function(e, s) {
                    if (s)
                        return this[e];
                    var n = i._fieldsByName[e];
                    if (!(n && n instanceof t.Reflect.Message.Field))
                        throw Error(this + "#" + e + " is not a field: undefined");
                    if (!(n instanceof t.Reflect.Message.Field))
                        throw Error(this + "#" + e + " is not a field: " + n.toString(!0));
                    return this[n.name]
                }
                ,
                o.$get = o.get;
                for (var c = 0; c < n.length; c++) {
                    var l = n[c];
                    l instanceof t.Reflect.Message.ExtensionField || i.builder.options.populateAccessors && function(e) {
                        var t = e.originalName.replace(/(_[a-zA-Z])/g, function(e) {
                            return e.toUpperCase().replace("_", "")
                        });
                        t = t.substring(0, 1).toUpperCase() + t.substring(1);
                        var s = e.originalName.replace(/([A-Z])/g, function(e) {
                            return "_" + e
                        })
                          , n = function(t, i) {
                            return this[e.name] = i ? t : e.verifyValue(t),
                            this
                        }
                          , a = function() {
                            return this[e.name]
                        };
                        null === i.getChild("set" + t) && (o["set" + t] = n),
                        null === i.getChild("set_" + s) && (o["set_" + s] = n),
                        null === i.getChild("get" + t) && (o["get" + t] = a),
                        null === i.getChild("get_" + s) && (o["get_" + s] = a)
                    }(l)
                }
                o.encode = function(t, s) {
                    "boolean" == typeof t && (s = t,
                    t = void 0);
                    var n = !1;
                    t || (t = new e,
                    n = !0);
                    var a = t.littleEndian;
                    try {
                        return i.encode(this, t.LE(), s),
                        (n ? t.flip() : t).LE(a)
                    } catch (e) {
                        throw t.LE(a),
                        e
                    }
                }
                ,
                r.encode = function(e, t, i) {
                    return new r(e).encode(t, i)
                }
                ,
                o.calculate = function() {
                    return i.calculate(this)
                }
                ,
                o.encodeDelimited = function(t, s) {
                    var n = !1;
                    t || (t = new e,
                    n = !0);
                    var a = (new e).LE();
                    return i.encode(this, a, s).flip(),
                    t.writeVarint32(a.remaining()),
                    t.append(a),
                    n ? t.flip() : t
                }
                ,
                o.encodeAB = function() {
                    try {
                        return this.encode().toArrayBuffer()
                    } catch (e) {
                        throw e.encoded && (e.encoded = e.encoded.toArrayBuffer()),
                        e
                    }
                }
                ,
                o.toArrayBuffer = o.encodeAB,
                o.encodeNB = function() {
                    try {
                        return this.encode().toBuffer()
                    } catch (e) {
                        throw e.encoded && (e.encoded = e.encoded.toBuffer()),
                        e
                    }
                }
                ,
                o.toBuffer = o.encodeNB,
                o.encode64 = function() {
                    try {
                        return this.encode().toBase64()
                    } catch (e) {
                        throw e.encoded && (e.encoded = e.encoded.toBase64()),
                        e
                    }
                }
                ,
                o.toBase64 = o.encode64,
                o.encodeHex = function() {
                    try {
                        return this.encode().toHex()
                    } catch (e) {
                        throw e.encoded && (e.encoded = e.encoded.toHex()),
                        e
                    }
                }
                ,
                o.toHex = o.encodeHex,
                o.toRaw = function(e, t) {
                    return s(this, !!e, !!t, this.$type)
                }
                ,
                o.encodeJSON = function() {
                    return JSON.stringify(s(this, !0, !0, this.$type))
                }
                ,
                r.decode = function(t, s, n) {
                    "string" == typeof s && (n = s,
                    s = -1),
                    "string" == typeof t ? t = e.wrap(t, n || "base64") : e.isByteBuffer(t) || (t = e.wrap(t));
                    var a = t.littleEndian;
                    try {
                        var r = i.decode(t.LE(), s);
                        return t.LE(a),
                        r
                    } catch (e) {
                        throw t.LE(a),
                        e
                    }
                }
                ,
                r.decodeDelimited = function(t, s) {
                    if ("string" == typeof t ? t = e.wrap(t, s || "base64") : e.isByteBuffer(t) || (t = e.wrap(t)),
                    t.remaining() < 1)
                        return null;
                    var n = t.offset
                      , a = t.readVarint32();
                    if (t.remaining() < a)
                        return t.offset = n,
                        null;
                    try {
                        var r = i.decode(t.slice(t.offset, t.offset + a).LE());
                        return t.offset += a,
                        r
                    } catch (e) {
                        throw t.offset += a,
                        e
                    }
                }
                ,
                r.decode64 = function(e) {
                    return r.decode(e, "base64")
                }
                ,
                r.decodeHex = function(e) {
                    return r.decode(e, "hex")
                }
                ,
                r.decodeJSON = function(e) {
                    return new r(JSON.parse(e))
                }
                ,
                o.toString = function() {
                    return i.toString()
                }
                ;
                return Object.defineProperty && (Object.defineProperty(r, "$options", {
                    value: i.buildOpt()
                }),
                Object.defineProperty(o, "$options", {
                    value: r.$options
                }),
                Object.defineProperty(r, "$type", {
                    value: i
                }),
                Object.defineProperty(o, "$type", {
                    value: i
                })),
                r
            }(t, this);
            this._fields = [],
            this._fieldsById = {},
            this._fieldsByName = {};
            for (var n, a = 0, r = this.children.length; a < r; a++)
                if ((n = this.children[a])instanceof y || n instanceof u || n instanceof w) {
                    if (s.hasOwnProperty(n.name))
                        throw Error("Illegal reflect child of " + this.toString(!0) + ": " + n.toString(!0) + " cannot override static property '" + n.name + "'");
                    s[n.name] = n.build()
                } else if (n instanceof u.Field)
                    n.build(),
                    this._fields.push(n),
                    this._fieldsById[n.id] = n,
                    this._fieldsByName[n.name] = n;
                else if (!(n instanceof u.OneOf || n instanceof C))
                    throw Error("Illegal reflect child of " + this.toString(!0) + ": " + this.children[a].toString(!0));
            return this.clazz = s
        }
        ,
        p.encode = function(e, t, i) {
            for (var s, n, a = null, r = 0, o = this._fields.length; r < o; ++r)
                s = this._fields[r],
                n = e[s.name],
                s.required && null === n ? null === a && (a = s) : s.encode(i ? n : s.verifyValue(n), t, e);
            if (null !== a) {
                var c = Error("Missing at least one required field for " + this.toString(!0) + ": " + a);
                throw c.encoded = t,
                c
            }
            return t
        }
        ,
        p.calculate = function(e) {
            for (var t, i, s = 0, n = 0, a = this._fields.length; n < a; ++n) {
                if (t = this._fields[n],
                i = e[t.name],
                t.required && null === i)
                    throw Error("Missing at least one required field for " + this.toString(!0) + ": " + t);
                s += t.calculate(i, e)
            }
            return s
        }
        ,
        p.decode = function(e, i, s) {
            "number" != typeof i && (i = -1);
            for (var a, r, o, c, l = e.offset, d = new this.clazz; e.offset < l + i || -1 === i && e.remaining() > 0; ) {
                if (a = e.readVarint32(),
                r = 7 & a,
                o = a >>> 3,
                r === t.WIRE_TYPES.ENDGROUP) {
                    if (o !== s)
                        throw Error("Illegal group end indicator for " + this.toString(!0) + ": " + o + " (" + (s ? s + " expected" : "not a group") + ")");
                    break
                }
                if (c = this._fieldsById[o]) {
                    if (c.repeated && !c.options.packed)
                        d[c.name].push(c.decode(r, e));
                    else if (c.map) {
                        var h = c.decode(r, e);
                        d[c.name].set(h[0], h[1])
                    } else if (d[c.name] = c.decode(r, e),
                    c.oneof) {
                        var u = d[c.oneof.name];
                        null !== u && u !== c.name && (d[u] = null),
                        d[c.oneof.name] = c.name
                    }
                } else
                    switch (r) {
                    case t.WIRE_TYPES.VARINT:
                        e.readVarint32();
                        break;
                    case t.WIRE_TYPES.BITS32:
                        e.offset += 4;
                        break;
                    case t.WIRE_TYPES.BITS64:
                        e.offset += 8;
                        break;
                    case t.WIRE_TYPES.LDELIM:
                        var p = e.readVarint32();
                        e.offset += p;
                        break;
                    case t.WIRE_TYPES.STARTGROUP:
                        for (; n(o, e); )
                            ;
                        break;
                    default:
                        throw Error("Illegal wire type for unknown field " + o + " in " + this.toString(!0) + "#decode: " + r)
                    }
            }
            for (var f = 0, g = this._fields.length; f < g; ++f)
                if (c = this._fields[f],
                null === d[c.name])
                    if ("proto3" === this.syntax)
                        d[c.name] = c.defaultValue;
                    else {
                        if (c.required) {
                            var m = Error("Missing at least one required field for " + this.toString(!0) + ": " + c.name);
                            throw m.decoded = d,
                            m
                        }
                        t.populateDefaults && null !== c.defaultValue && (d[c.name] = c.defaultValue)
                    }
            return d
        }
        ,
        a.Message = u;
        var f = function(e, i, s, n, a, o, c, l, d, h) {
            r.call(this, e, i, o),
            this.className = "Message.Field",
            this.required = "required" === s,
            this.repeated = "repeated" === s,
            this.map = "map" === s,
            this.keyType = n || null,
            this.type = a,
            this.resolvedType = null,
            this.id = c,
            this.options = l || {},
            this.defaultValue = null,
            this.oneof = d || null,
            this.syntax = h || "proto2",
            this.originalName = this.name,
            this.element = null,
            this.keyElement = null,
            !this.builder.options.convertFieldsToCamelCase || this instanceof u.ExtensionField || (this.name = t.Util.toCamelCase(this.name))
        }
          , g = f.prototype = Object.create(r.prototype);
        g.build = function() {
            this.element = new d(this.type,this.resolvedType,!1,this.syntax,this.name),
            this.map && (this.keyElement = new d(this.keyType,void 0,!0,this.syntax,this.name)),
            "proto3" !== this.syntax || this.repeated || this.map ? void 0 !== this.options.default && (this.defaultValue = this.verifyValue(this.options.default)) : this.defaultValue = d.defaultFieldValue(this.type)
        }
        ,
        g.verifyValue = function(e, i) {
            function s(e, t) {
                throw Error("Illegal value for " + n.toString(!0) + " of type " + n.type.name + ": " + e + " (" + t + ")")
            }
            i = i || !1;
            var n = this;
            if (null === e)
                return this.required && s(typeof e, "required"),
                "proto3" === this.syntax && this.type !== t.TYPES.message && s(typeof e, "proto3 field without field presence cannot be null"),
                null;
            var a;
            if (this.repeated && !i) {
                Array.isArray(e) || (e = [e]);
                var r = [];
                for (a = 0; a < e.length; a++)
                    r.push(this.element.verifyValue(e[a]));
                return r
            }
            return this.map && !i ? e instanceof t.Map ? e : (e instanceof Object || s(typeof e, "expected ProtoBuf.Map or raw object for map field"),
            new t.Map(this,e)) : (!this.repeated && Array.isArray(e) && s(typeof e, "no array expected"),
            this.element.verifyValue(e))
        }
        ,
        g.hasWirePresence = function(e, i) {
            if ("proto3" !== this.syntax)
                return null !== e;
            if (this.oneof && i[this.oneof.name] === this.name)
                return !0;
            switch (this.type) {
            case t.TYPES.int32:
            case t.TYPES.sint32:
            case t.TYPES.sfixed32:
            case t.TYPES.uint32:
            case t.TYPES.fixed32:
                return 0 !== e;
            case t.TYPES.int64:
            case t.TYPES.sint64:
            case t.TYPES.sfixed64:
            case t.TYPES.uint64:
            case t.TYPES.fixed64:
                return 0 !== e.low || 0 !== e.high;
            case t.TYPES.bool:
                return e;
            case t.TYPES.float:
            case t.TYPES.double:
                return 0 !== e;
            case t.TYPES.string:
                return e.length > 0;
            case t.TYPES.bytes:
                return e.remaining() > 0;
            case t.TYPES.enum:
                return 0 !== e;
            case t.TYPES.message:
                return null !== e;
            default:
                return !0
            }
        }
        ,
        g.encode = function(i, s, n) {
            if (null === this.type || "object" != typeof this.type)
                throw Error("[INTERNAL] Unresolved type in " + this.toString(!0) + ": " + this.type);
            if (null === i || this.repeated && 0 == i.length)
                return s;
            try {
                if (this.repeated) {
                    var a;
                    if (this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
                        s.writeVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM),
                        s.ensureCapacity(s.offset += 1);
                        var r = s.offset;
                        for (a = 0; a < i.length; a++)
                            this.element.encodeValue(this.id, i[a], s);
                        var o = s.offset - r
                          , c = e.calculateVarint32(o);
                        if (c > 1) {
                            var l = s.slice(r, s.offset);
                            r += c - 1,
                            s.offset = r,
                            s.append(l)
                        }
                        s.writeVarint32(o, r - c)
                    } else
                        for (a = 0; a < i.length; a++)
                            s.writeVarint32(this.id << 3 | this.type.wireType),
                            this.element.encodeValue(this.id, i[a], s)
                } else
                    this.map ? i.forEach(function(i, n, a) {
                        var r = e.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, n) + e.calculateVarint32(16 | this.type.wireType) + this.element.calculateLength(2, i);
                        s.writeVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM),
                        s.writeVarint32(r),
                        s.writeVarint32(8 | this.keyType.wireType),
                        this.keyElement.encodeValue(1, n, s),
                        s.writeVarint32(16 | this.type.wireType),
                        this.element.encodeValue(2, i, s)
                    }, this) : this.hasWirePresence(i, n) && (s.writeVarint32(this.id << 3 | this.type.wireType),
                    this.element.encodeValue(this.id, i, s))
            } catch (e) {
                throw Error("Illegal value for " + this.toString(!0) + ": " + i + " (" + e + ")")
            }
            return s
        }
        ,
        g.calculate = function(i, s) {
            if (i = this.verifyValue(i),
            null === this.type || "object" != typeof this.type)
                throw Error("[INTERNAL] Unresolved type in " + this.toString(!0) + ": " + this.type);
            if (null === i || this.repeated && 0 == i.length)
                return 0;
            var n = 0;
            try {
                if (this.repeated) {
                    var a, r;
                    if (this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
                        for (n += e.calculateVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM),
                        r = 0,
                        a = 0; a < i.length; a++)
                            r += this.element.calculateLength(this.id, i[a]);
                        n += e.calculateVarint32(r),
                        n += r
                    } else
                        for (a = 0; a < i.length; a++)
                            n += e.calculateVarint32(this.id << 3 | this.type.wireType),
                            n += this.element.calculateLength(this.id, i[a])
                } else
                    this.map ? i.forEach(function(i, s, a) {
                        var r = e.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, s) + e.calculateVarint32(16 | this.type.wireType) + this.element.calculateLength(2, i);
                        n += e.calculateVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM),
                        n += e.calculateVarint32(r),
                        n += r
                    }, this) : this.hasWirePresence(i, s) && (n += e.calculateVarint32(this.id << 3 | this.type.wireType),
                    n += this.element.calculateLength(this.id, i))
            } catch (e) {
                throw Error("Illegal value for " + this.toString(!0) + ": " + i + " (" + e + ")")
            }
            return n
        }
        ,
        g.decode = function(e, i, s) {
            var n, a;
            if (!(!this.map && e == this.type.wireType || !s && this.repeated && this.options.packed && e == t.WIRE_TYPES.LDELIM || this.map && e == t.WIRE_TYPES.LDELIM))
                throw Error("Illegal wire type for field " + this.toString(!0) + ": " + e + " (" + this.type.wireType + " expected)");
            if (e == t.WIRE_TYPES.LDELIM && this.repeated && this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0 && !s) {
                a = i.readVarint32(),
                a = i.offset + a;
                for (var r = []; i.offset < a; )
                    r.push(this.decode(this.type.wireType, i, !0));
                return r
            }
            if (this.map) {
                var o = d.defaultFieldValue(this.keyType);
                if (n = d.defaultFieldValue(this.type),
                a = i.readVarint32(),
                i.remaining() < a)
                    throw Error("Illegal number of bytes for " + this.toString(!0) + ": " + a + " required but got only " + i.remaining());
                var c = i.clone();
                for (c.limit = c.offset + a,
                i.offset += a; c.remaining() > 0; ) {
                    var l = c.readVarint32();
                    e = 7 & l;
                    var h = l >>> 3;
                    if (1 === h)
                        o = this.keyElement.decode(c, e, h);
                    else {
                        if (2 !== h)
                            throw Error("Unexpected tag in map field key/value submessage");
                        n = this.element.decode(c, e, h)
                    }
                }
                return [o, n]
            }
            return this.element.decode(i, e, this.id)
        }
        ,
        a.Message.Field = f;
        var m = function(e, t, i, s, n, a, r) {
            f.call(this, e, t, i, null, s, n, a, r),
            this.extension
        };
        m.prototype = Object.create(f.prototype),
        a.Message.ExtensionField = m;
        var v = function(e, t, i) {
            r.call(this, e, t, i),
            this.fields = []
        };
        a.Message.OneOf = v;
        var y = function(e, t, i, s, n) {
            c.call(this, e, t, i, s, n),
            this.className = "Enum",
            this.object = null
        };
        y.getName = function(e, t) {
            for (var i, s = Object.keys(e), n = 0; n < s.length; ++n)
                if (e[i = s[n]] === t)
                    return i;
            return null
        }
        ,
        (y.prototype = Object.create(c.prototype)).build = function(e) {
            if (this.object && !e)
                return this.object;
            for (var i = new t.Builder.Enum, s = this.getChildren(y.Value), n = 0, a = s.length; n < a; ++n)
                i[s[n].name] = s[n].id;
            return Object.defineProperty && Object.defineProperty(i, "$options", {
                value: this.buildOpt(),
                enumerable: !1
            }),
            this.object = i
        }
        ,
        a.Enum = y;
        var b = function(e, t, i, s) {
            r.call(this, e, t, i),
            this.className = "Enum.Value",
            this.id = s
        };
        b.prototype = Object.create(r.prototype),
        a.Enum.Value = b;
        var C = function(e, t, i, s) {
            r.call(this, e, t, i),
            this.field = s
        };
        C.prototype = Object.create(r.prototype),
        a.Extension = C;
        var w = function(e, t, i, s) {
            c.call(this, e, t, i, s),
            this.className = "Service",
            this.clazz = null
        };
        (w.prototype = Object.create(c.prototype)).build = function(i) {
            return this.clazz && !i ? this.clazz : this.clazz = function(t, i) {
                for (var s = function(e) {
                    t.Builder.Service.call(this),
                    this.rpcImpl = e || function(e, t, i) {
                        setTimeout(i.bind(this, Error("Not implemented, see: https://github.com/dcodeIO/ProtoBuf.js/wiki/Services")), 0)
                    }
                }, n = s.prototype = Object.create(t.Builder.Service.prototype), a = i.getChildren(t.Reflect.Service.RPCMethod), r = 0; r < a.length; r++)
                    !function(t) {
                        n[t.name] = function(s, n) {
                            try {
                                try {
                                    s = t.resolvedRequestType.clazz.decode(e.wrap(s))
                                } catch (e) {
                                    if (!(e instanceof TypeError))
                                        throw e
                                }
                                if (null === s || "object" != typeof s)
                                    throw Error("Illegal arguments");
                                s instanceof t.resolvedRequestType.clazz || (s = new t.resolvedRequestType.clazz(s)),
                                this.rpcImpl(t.fqn(), s, function(e, s) {
                                    if (e)
                                        return void n(e);
                                    null === s && (s = "");
                                    try {
                                        s = t.resolvedResponseType.clazz.decode(s)
                                    } catch (e) {}
                                    if (!(s && s instanceof t.resolvedResponseType.clazz))
                                        return void n(Error("Illegal response type received in service method " + i.name + "#" + t.name));
                                    n(null, s)
                                })
                            } catch (e) {
                                setTimeout(n.bind(this, e), 0)
                            }
                        }
                        ,
                        s[t.name] = function(e, i, n) {
                            new s(e)[t.name](i, n)
                        }
                        ,
                        Object.defineProperty && (Object.defineProperty(s[t.name], "$options", {
                            value: t.buildOpt()
                        }),
                        Object.defineProperty(n[t.name], "$options", {
                            value: s[t.name].$options
                        }))
                    }(a[r]);
                return Object.defineProperty && (Object.defineProperty(s, "$options", {
                    value: i.buildOpt()
                }),
                Object.defineProperty(n, "$options", {
                    value: s.$options
                }),
                Object.defineProperty(s, "$type", {
                    value: i
                }),
                Object.defineProperty(n, "$type", {
                    value: i
                })),
                s
            }(t, this)
        }
        ,
        a.Service = w;
        var T = function(e, t, i, s) {
            r.call(this, e, t, i),
            this.className = "Service.Method",
            this.options = s || {}
        };
        (T.prototype = Object.create(r.prototype)).buildOpt = l.buildOpt,
        a.Service.Method = T;
        var k = function(e, t, i, s, n, a, r, o) {
            T.call(this, e, t, i, o),
            this.className = "Service.RPCMethod",
            this.requestName = s,
            this.responseName = n,
            this.requestStream = a,
            this.responseStream = r,
            this.resolvedRequestType = null,
            this.resolvedResponseType = null
        };
        return k.prototype = Object.create(T.prototype),
        a.Service.RPCMethod = k,
        a
    }(i),
    i.Builder = function(e, t, i) {
        function s(e) {
            e.messages && e.messages.forEach(function(t) {
                t.syntax = e.syntax,
                s(t)
            }),
            e.enums && e.enums.forEach(function(t) {
                t.syntax = e.syntax
            })
        }
        var n = function(e) {
            this.ns = new i.Namespace(this,null,""),
            this.ptr = this.ns,
            this.resolved = !1,
            this.result = null,
            this.files = {},
            this.importRoot = null,
            this.options = e || {}
        }
          , a = n.prototype;
        return n.isMessage = function(e) {
            return "string" == typeof e.name && (void 0 === e.values && void 0 === e.rpc)
        }
        ,
        n.isMessageField = function(e) {
            return "string" == typeof e.rule && "string" == typeof e.name && "string" == typeof e.type && void 0 !== e.id
        }
        ,
        n.isEnum = function(e) {
            return "string" == typeof e.name && !(void 0 === e.values || !Array.isArray(e.values) || 0 === e.values.length)
        }
        ,
        n.isService = function(e) {
            return !("string" != typeof e.name || "object" != typeof e.rpc || !e.rpc)
        }
        ,
        n.isExtend = function(e) {
            return "string" == typeof e.ref
        }
        ,
        a.reset = function() {
            return this.ptr = this.ns,
            this
        }
        ,
        a.define = function(e) {
            if ("string" != typeof e || !t.TYPEREF.test(e))
                throw Error("illegal namespace: " + e);
            return e.split(".").forEach(function(e) {
                var t = this.ptr.getChild(e);
                null === t && this.ptr.addChild(t = new i.Namespace(this,this.ptr,e)),
                this.ptr = t
            }, this),
            this
        }
        ,
        a.create = function(t) {
            if (!t)
                return this;
            if (Array.isArray(t)) {
                if (0 === t.length)
                    return this;
                t = t.slice()
            } else
                t = [t];
            for (var s = [t]; s.length > 0; ) {
                if (t = s.pop(),
                !Array.isArray(t))
                    throw Error("not a valid namespace: " + JSON.stringify(t));
                for (; t.length > 0; ) {
                    var a = t.shift();
                    if (n.isMessage(a)) {
                        var r = new i.Message(this,this.ptr,a.name,a.options,a.isGroup,a.syntax)
                          , o = {};
                        a.oneofs && Object.keys(a.oneofs).forEach(function(e) {
                            r.addChild(o[e] = new i.Message.OneOf(this,r,e))
                        }, this),
                        a.fields && a.fields.forEach(function(e) {
                            if (null !== r.getChild(0 | e.id))
                                throw Error("duplicate or invalid field id in " + r.name + ": " + e.id);
                            if (e.options && "object" != typeof e.options)
                                throw Error("illegal field options in " + r.name + "#" + e.name);
                            var t = null;
                            if ("string" == typeof e.oneof && !(t = o[e.oneof]))
                                throw Error("illegal oneof in " + r.name + "#" + e.name + ": " + e.oneof);
                            e = new i.Message.Field(this,r,e.rule,e.keytype,e.type,e.name,e.id,e.options,t,a.syntax),
                            t && t.fields.push(e),
                            r.addChild(e)
                        }, this);
                        var c = [];
                        if (a.enums && a.enums.forEach(function(e) {
                            c.push(e)
                        }),
                        a.messages && a.messages.forEach(function(e) {
                            c.push(e)
                        }),
                        a.services && a.services.forEach(function(e) {
                            c.push(e)
                        }),
                        a.extensions && ("number" == typeof a.extensions[0] ? r.extensions = [a.extensions] : r.extensions = a.extensions),
                        this.ptr.addChild(r),
                        c.length > 0) {
                            s.push(t),
                            t = c,
                            c = null,
                            this.ptr = r,
                            r = null;
                            continue
                        }
                        c = null
                    } else if (n.isEnum(a))
                        r = new i.Enum(this,this.ptr,a.name,a.options,a.syntax),
                        a.values.forEach(function(e) {
                            r.addChild(new i.Enum.Value(this,r,e.name,e.id))
                        }, this),
                        this.ptr.addChild(r);
                    else if (n.isService(a))
                        r = new i.Service(this,this.ptr,a.name,a.options),
                        Object.keys(a.rpc).forEach(function(e) {
                            var t = a.rpc[e];
                            r.addChild(new i.Service.RPCMethod(this,r,e,t.request,t.response,!!t.request_stream,!!t.response_stream,t.options))
                        }, this),
                        this.ptr.addChild(r);
                    else {
                        if (!n.isExtend(a))
                            throw Error("not a valid definition: " + JSON.stringify(a));
                        if (r = this.ptr.resolve(a.ref, !0))
                            a.fields.forEach(function(t) {
                                if (null !== r.getChild(0 | t.id))
                                    throw Error("duplicate extended field id in " + r.name + ": " + t.id);
                                if (r.extensions) {
                                    var s = !1;
                                    if (r.extensions.forEach(function(e) {
                                        t.id >= e[0] && t.id <= e[1] && (s = !0)
                                    }),
                                    !s)
                                        throw Error("illegal extended field id in " + r.name + ": " + t.id + " (not within valid ranges)")
                                }
                                var n = t.name;
                                this.options.convertFieldsToCamelCase && (n = e.Util.toCamelCase(n));
                                var a = new i.Message.ExtensionField(this,r,t.rule,t.type,this.ptr.fqn() + "." + n,t.id,t.options)
                                  , o = new i.Extension(this,this.ptr,t.name,a);
                                a.extension = o,
                                this.ptr.addChild(o),
                                r.addChild(a)
                            }, this);
                        else if (!/\.?google\.protobuf\./.test(a.ref))
                            throw Error("extended message " + a.ref + " is not defined")
                    }
                    a = null,
                    r = null
                }
                t = null,
                this.ptr = this.ptr.parent
            }
            return this.resolved = !1,
            this.result = null,
            this
        }
        ,
        a.import = function(t, i) {
            var n = "/";
            if ("string" == typeof i) {
                if (e.Util.IS_NODE && (i = require("path").resolve(i)),
                !0 === this.files[i])
                    return this.reset();
                this.files[i] = !0
            } else if ("object" == typeof i) {
                var a = i.root;
                e.Util.IS_NODE && (a = require("path").resolve(a)),
                (a.indexOf("\\") >= 0 || i.file.indexOf("\\") >= 0) && (n = "\\");
                var r = a + n + i.file;
                if (!0 === this.files[r])
                    return this.reset();
                this.files[r] = !0
            }
            if (t.imports && t.imports.length > 0) {
                var o, c = !1;
                "object" == typeof i ? (this.importRoot = i.root,
                c = !0,
                o = this.importRoot,
                i = i.file,
                (o.indexOf("\\") >= 0 || i.indexOf("\\") >= 0) && (n = "\\")) : "string" == typeof i ? this.importRoot ? o = this.importRoot : i.indexOf("/") >= 0 ? "" === (o = i.replace(/\/[^\/]*$/, "")) && (o = "/") : i.indexOf("\\") >= 0 ? (o = i.replace(/\\[^\\]*$/, ""),
                n = "\\") : o = "." : o = null;
                for (var l = 0; l < t.imports.length; l++)
                    if ("string" == typeof t.imports[l]) {
                        if (!o)
                            throw Error("cannot determine import root");
                        var d = t.imports[l];
                        if ("google/protobuf/descriptor.proto" === d)
                            continue;
                        if (d = o + n + d,
                        !0 === this.files[d])
                            continue;
                        /\.proto$/i.test(d) && !e.DotProto && (d = d.replace(/\.proto$/, ".json"));
                        var h = e.Util.fetch(d);
                        if (null === h)
                            throw Error("failed to import '" + d + "' in '" + i + "': file not found");
                        /\.json$/i.test(d) ? this.import(JSON.parse(h + ""), d) : this.import(e.DotProto.Parser.parse(h), d)
                    } else
                        i ? /\.(\w+)$/.test(i) ? this.import(t.imports[l], i.replace(/^(.+)\.(\w+)$/, function(e, t, i) {
                            return t + "_import" + l + "." + i
                        })) : this.import(t.imports[l], i + "_import" + l) : this.import(t.imports[l]);
                c && (this.importRoot = null)
            }
            t.package && this.define(t.package),
            t.syntax && s(t);
            var u = this.ptr;
            return t.options && Object.keys(t.options).forEach(function(e) {
                u.options[e] = t.options[e]
            }),
            t.messages && (this.create(t.messages),
            this.ptr = u),
            t.enums && (this.create(t.enums),
            this.ptr = u),
            t.services && (this.create(t.services),
            this.ptr = u),
            t.extends && this.create(t.extends),
            this.reset()
        }
        ,
        a.resolveAll = function() {
            var s;
            if (null == this.ptr || "object" == typeof this.ptr.type)
                return this;
            if (this.ptr instanceof i.Namespace)
                this.ptr.children.forEach(function(e) {
                    this.ptr = e,
                    this.resolveAll()
                }, this);
            else if (this.ptr instanceof i.Message.Field) {
                if (t.TYPE.test(this.ptr.type))
                    this.ptr.type = e.TYPES[this.ptr.type];
                else {
                    if (!t.TYPEREF.test(this.ptr.type))
                        throw Error("illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                    if (!(s = (this.ptr instanceof i.Message.ExtensionField ? this.ptr.extension.parent : this.ptr.parent).resolve(this.ptr.type, !0)))
                        throw Error("unresolvable type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                    if (this.ptr.resolvedType = s,
                    s instanceof i.Enum) {
                        if (this.ptr.type = e.TYPES.enum,
                        "proto3" === this.ptr.syntax && "proto3" !== s.syntax)
                            throw Error("proto3 message cannot reference proto2 enum")
                    } else {
                        if (!(s instanceof i.Message))
                            throw Error("illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                        this.ptr.type = s.isGroup ? e.TYPES.group : e.TYPES.message
                    }
                }
                if (this.ptr.map) {
                    if (!t.TYPE.test(this.ptr.keyType))
                        throw Error("illegal key type for map field in " + this.ptr.toString(!0) + ": " + this.ptr.keyType);
                    this.ptr.keyType = e.TYPES[this.ptr.keyType]
                }
            } else if (this.ptr instanceof e.Reflect.Service.Method) {
                if (!(this.ptr instanceof e.Reflect.Service.RPCMethod))
                    throw Error("illegal service type in " + this.ptr.toString(!0));
                if (!((s = this.ptr.parent.resolve(this.ptr.requestName, !0)) && s instanceof e.Reflect.Message))
                    throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.requestName);
                if (this.ptr.resolvedRequestType = s,
                !((s = this.ptr.parent.resolve(this.ptr.responseName, !0)) && s instanceof e.Reflect.Message))
                    throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.responseName);
                this.ptr.resolvedResponseType = s
            } else if (!(this.ptr instanceof e.Reflect.Message.OneOf || this.ptr instanceof e.Reflect.Extension || this.ptr instanceof e.Reflect.Enum.Value))
                throw Error("illegal object in namespace: " + typeof this.ptr + ": " + this.ptr);
            return this.reset()
        }
        ,
        a.build = function(e) {
            if (this.reset(),
            this.resolved || (this.resolveAll(),
            this.resolved = !0,
            this.result = null),
            null === this.result && (this.result = this.ns.build()),
            !e)
                return this.result;
            for (var t = "string" == typeof e ? e.split(".") : e, i = this.result, s = 0; s < t.length; s++) {
                if (!i[t[s]]) {
                    i = null;
                    break
                }
                i = i[t[s]]
            }
            return i
        }
        ,
        a.lookup = function(e, t) {
            return e ? this.ns.resolve(e, t) : this.ns
        }
        ,
        a.toString = function() {
            return "Builder"
        }
        ,
        n.Message = function() {}
        ,
        n.Enum = function() {}
        ,
        n.Service = function() {}
        ,
        n
    }(i, i.Lang, i.Reflect),
    i.Map = function(e, t) {
        function i(e) {
            var t = 0;
            return {
                next: function() {
                    return t < e.length ? {
                        done: !1,
                        value: e[t++]
                    } : {
                        done: !0
                    }
                }
            }
        }
        var s = function(e, i) {
            if (!e.map)
                throw Error("field is not a map");
            if (this.field = e,
            this.keyElem = new t.Element(e.keyType,null,!0,e.syntax),
            this.valueElem = new t.Element(e.type,e.resolvedType,!1,e.syntax),
            this.map = {},
            Object.defineProperty(this, "size", {
                get: function() {
                    return Object.keys(this.map).length
                }
            }),
            i)
                for (var s = Object.keys(i), n = 0; n < s.length; n++) {
                    var a = this.keyElem.valueFromString(s[n])
                      , r = this.valueElem.verifyValue(i[s[n]]);
                    this.map[this.keyElem.valueToString(a)] = {
                        key: a,
                        value: r
                    }
                }
        }
          , n = s.prototype;
        return n.clear = function() {
            this.map = {}
        }
        ,
        n.delete = function(e) {
            var t = this.keyElem.valueToString(this.keyElem.verifyValue(e))
              , i = t in this.map;
            return delete this.map[t],
            i
        }
        ,
        n.entries = function() {
            for (var e, t = [], s = Object.keys(this.map), n = 0; n < s.length; n++)
                t.push([(e = this.map[s[n]]).key, e.value]);
            return i(t)
        }
        ,
        n.keys = function() {
            for (var e = [], t = Object.keys(this.map), s = 0; s < t.length; s++)
                e.push(this.map[t[s]].key);
            return i(e)
        }
        ,
        n.values = function() {
            for (var e = [], t = Object.keys(this.map), s = 0; s < t.length; s++)
                e.push(this.map[t[s]].value);
            return i(e)
        }
        ,
        n.forEach = function(e, t) {
            for (var i, s = Object.keys(this.map), n = 0; n < s.length; n++)
                e.call(t, (i = this.map[s[n]]).value, i.key, this)
        }
        ,
        n.set = function(e, t) {
            var i = this.keyElem.verifyValue(e)
              , s = this.valueElem.verifyValue(t);
            return this.map[this.keyElem.valueToString(i)] = {
                key: i,
                value: s
            },
            this
        }
        ,
        n.get = function(e) {
            var t = this.keyElem.valueToString(this.keyElem.verifyValue(e));
            if (t in this.map)
                return this.map[t].value
        }
        ,
        n.has = function(e) {
            return this.keyElem.valueToString(this.keyElem.verifyValue(e))in this.map
        }
        ,
        s
    }(0, i.Reflect),
    i.loadProto = function(e, t, s) {
        return ("string" == typeof t || t && "string" == typeof t.file && "string" == typeof t.root) && (s = t,
        t = void 0),
        i.loadJson(i.DotProto.Parser.parse(e), t, s)
    }
    ,
    i.protoFromString = i.loadProto,
    i.loadProtoFile = function(e, t, s) {
        if (t && "object" == typeof t ? (s = t,
        t = null) : t && "function" == typeof t || (t = null),
        t)
            return i.Util.fetch("string" == typeof e ? e : e.root + "/" + e.file, function(n) {
                if (null === n)
                    return void t(Error("Failed to fetch file"));
                try {
                    t(null, i.loadProto(n, s, e))
                } catch (e) {
                    t(e)
                }
            });
        var n = i.Util.fetch("object" == typeof e ? e.root + "/" + e.file : e);
        return null === n ? null : i.loadProto(n, s, e)
    }
    ,
    i.protoFromFile = i.loadProtoFile,
    i.newBuilder = function(e) {
        return e = e || {},
        void 0 === e.convertFieldsToCamelCase && (e.convertFieldsToCamelCase = i.convertFieldsToCamelCase),
        void 0 === e.populateAccessors && (e.populateAccessors = i.populateAccessors),
        new i.Builder(e)
    }
    ,
    i.loadJson = function(e, t, s) {
        return ("string" == typeof t || t && "string" == typeof t.file && "string" == typeof t.root) && (s = t,
        t = null),
        t && "object" == typeof t || (t = i.newBuilder()),
        "string" == typeof e && (e = JSON.parse(e)),
        t.import(e, s),
        t.resolveAll(),
        t
    }
    ,
    i.loadJsonFile = function(e, t, s) {
        if (t && "object" == typeof t ? (s = t,
        t = null) : t && "function" == typeof t || (t = null),
        t)
            return i.Util.fetch("string" == typeof e ? e : e.root + "/" + e.file, function(n) {
                if (null === n)
                    return void t(Error("Failed to fetch file"));
                try {
                    t(null, i.loadJson(JSON.parse(n), s, e))
                } catch (e) {
                    t(e)
                }
            });
        var n = i.Util.fetch("object" == typeof e ? e.root + "/" + e.file : e);
        return null === n ? null : i.loadJson(JSON.parse(n), s, e)
    }
    ,
    i
}),
"undefined" == typeof Paho && (Paho = {}),
Paho.MQTT = function(e) {
    function t(e, t) {
        var i = t
          , s = e[t]
          , a = s >> 4
          , r = s &= 15;
        t += 1;
        var o, d = 0, h = 1;
        do {
            if (t == e.length)
                return [null, i];
            o = e[t++],
            d += (127 & o) * h,
            h *= 128
        } while (0 != (128 & o));var u = t + d;
        if (u > e.length)
            return [null, i];
        var p = new v(a);
        switch (ChatWebsocket.settings.onlineDebug && console.log("decodeType:" + a + " " + new Date + " " + (new Date).getTime()),
        a) {
        case l.CONNACK:
            1 & e[t++] && (p.sessionPresent = !0),
            p.returnCode = e[t++];
            break;
        case l.PUBLISH:
            var f = r >> 1 & 3
              , g = n(e, t);
            t += 2;
            var m = c(e, t, g);
            t += g,
            f > 0 && (p.messageIdentifier = n(e, t),
            t += 2);
            var y = new Paho.MQTT.Message(e.subarray(t, u));
            1 == (1 & r) && (y.retained = !0),
            8 == (8 & r) && (y.duplicate = !0),
            y.qos = f,
            y.destinationName = m,
            p.payloadMessage = y;
            break;
        case l.PUBACK:
        case l.PUBREC:
        case l.PUBREL:
        case l.PUBCOMP:
        case l.UNSUBACK:
            p.messageIdentifier = n(e, t);
            break;
        case l.SUBACK:
            p.messageIdentifier = n(e, t),
            t += 2,
            p.returnCode = e.subarray(t, u)
        }
        return [p, u]
    }
    function i(e, t, i) {
        return t[i++] = e >> 8,
        t[i++] = e % 256,
        i
    }
    function s(e, t, s, n) {
        return n = i(t, s, n),
        o(e, s, n),
        n + t
    }
    function n(e, t) {
        return 256 * e[t] + e[t + 1]
    }
    function a(e) {
        var t = new Array(1)
          , i = 0;
        do {
            var s = e % 128;
            e >>= 7,
            e > 0 && (s |= 128),
            t[i++] = s
        } while (e > 0 && i < 4);return t
    }
    function r(e) {
        for (var t = 0, i = 0; i < e.length; i++) {
            var s = e.charCodeAt(i);
            s > 2047 ? (55296 <= s && s <= 56319 && (i++,
            t++),
            t += 3) : s > 127 ? t += 2 : t++
        }
        return t
    }
    function o(e, t, i) {
        for (var s = i, n = 0; n < e.length; n++) {
            var a = e.charCodeAt(n);
            if (55296 <= a && a <= 56319) {
                var r = e.charCodeAt(++n);
                if (isNaN(r))
                    throw new Error(f(u.MALFORMED_UNICODE, [a, r]));
                a = r - 56320 + (a - 55296 << 10) + 65536
            }
            a <= 127 ? t[s++] = a : a <= 2047 ? (t[s++] = a >> 6 & 31 | 192,
            t[s++] = 63 & a | 128) : a <= 65535 ? (t[s++] = a >> 12 & 15 | 224,
            t[s++] = a >> 6 & 63 | 128,
            t[s++] = 63 & a | 128) : (t[s++] = a >> 18 & 7 | 240,
            t[s++] = a >> 12 & 63 | 128,
            t[s++] = a >> 6 & 63 | 128,
            t[s++] = 63 & a | 128)
        }
        return t
    }
    function c(e, t, i) {
        for (var s, n = "", a = t; a < t + i; ) {
            var r = e[a++];
            if (r < 128)
                s = r;
            else {
                var o = e[a++] - 128;
                if (o < 0)
                    throw new Error(f(u.MALFORMED_UTF, [r.toString(16), o.toString(16), ""]));
                if (r < 224)
                    s = 64 * (r - 192) + o;
                else {
                    var c = e[a++] - 128;
                    if (c < 0)
                        throw new Error(f(u.MALFORMED_UTF, [r.toString(16), o.toString(16), c.toString(16)]));
                    if (r < 240)
                        s = 4096 * (r - 224) + 64 * o + c;
                    else {
                        var l = e[a++] - 128;
                        if (l < 0)
                            throw new Error(f(u.MALFORMED_UTF, [r.toString(16), o.toString(16), c.toString(16), l.toString(16)]));
                        if (!(r < 248))
                            throw new Error(f(u.MALFORMED_UTF, [r.toString(16), o.toString(16), c.toString(16), l.toString(16)]));
                        s = 262144 * (r - 240) + 4096 * o + 64 * c + l
                    }
                }
            }
            s > 65535 && (s -= 65536,
            n += String.fromCharCode(55296 + (s >> 10)),
            s = 56320 + (1023 & s)),
            n += String.fromCharCode(s)
        }
        return n
    }
    var l = {
        CONNECT: 1,
        CONNACK: 2,
        PUBLISH: 3,
        PUBACK: 4,
        PUBREC: 5,
        PUBREL: 6,
        PUBCOMP: 7,
        SUBSCRIBE: 8,
        SUBACK: 9,
        UNSUBSCRIBE: 10,
        UNSUBACK: 11,
        PINGREQ: 12,
        PINGRESP: 13,
        DISCONNECT: 14
    }
      , d = function(e, t) {
        for (var i in e)
            if (e.hasOwnProperty(i)) {
                if (!t.hasOwnProperty(i)) {
                    var s = "Unknown property, " + i + ". Valid properties are:";
                    for (var i in t)
                        t.hasOwnProperty(i) && (s = s + " " + i);
                    throw new Error(s)
                }
                if (typeof e[i] !== t[i])
                    throw new Error(f(u.INVALID_TYPE, [typeof e[i], i]))
            }
    }
      , h = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
      , u = {
        OK: {
            code: 0,
            text: "AMQJSC0000I OK."
        },
        CONNECT_TIMEOUT: {
            code: 1,
            text: "AMQJSC0001E Connect timed out."
        },
        SUBSCRIBE_TIMEOUT: {
            code: 2,
            text: "AMQJS0002E Subscribe timed out."
        },
        UNSUBSCRIBE_TIMEOUT: {
            code: 3,
            text: "AMQJS0003E Unsubscribe timed out."
        },
        PING_TIMEOUT: {
            code: 4,
            text: "AMQJS0004E Ping timed out."
        },
        INTERNAL_ERROR: {
            code: 5,
            text: "AMQJS0005E Internal error. Error Message: {0}, Stack trace: {1}"
        },
        CONNACK_RETURNCODE: {
            code: 6,
            text: "AMQJS0006E Bad Connack return code:{0} {1}."
        },
        SOCKET_ERROR: {
            code: 7,
            text: "AMQJS0007E Socket error:{0}."
        },
        SOCKET_CLOSE: {
            code: 8,
            text: "AMQJS0008I Socket closed."
        },
        MALFORMED_UTF: {
            code: 9,
            text: "AMQJS0009E Malformed UTF data:{0} {1} {2}."
        },
        UNSUPPORTED: {
            code: 10,
            text: "AMQJS0010E {0} is not supported by this browser."
        },
        INVALID_STATE: {
            code: 11,
            text: "AMQJS0011E Invalid state {0}."
        },
        INVALID_TYPE: {
            code: 12,
            text: "AMQJS0012E Invalid type {0} for {1}."
        },
        INVALID_ARGUMENT: {
            code: 13,
            text: "AMQJS0013E Invalid argument {0} for {1}."
        },
        UNSUPPORTED_OPERATION: {
            code: 14,
            text: "AMQJS0014E Unsupported operation."
        },
        INVALID_STORED_DATA: {
            code: 15,
            text: "AMQJS0015E Invalid data in local storage key={0} value={1}."
        },
        INVALID_MQTT_MESSAGE_TYPE: {
            code: 16,
            text: "AMQJS0016E Invalid MQTT message type {0}."
        },
        MALFORMED_UNICODE: {
            code: 17,
            text: "AMQJS0017E Malformed Unicode string:{0} {1}."
        }
    }
      , p = {
        0: "Connection Accepted",
        1: "Connection Refused: unacceptable protocol version",
        2: "Connection Refused: identifier rejected",
        3: "Connection Refused: server unavailable",
        4: "Connection Refused: bad user name or password",
        5: "Connection Refused: not authorized"
    }
      , f = function(e, t) {
        var i = e.text;
        if (t)
            for (var s, n, a = 0; a < t.length; a++)
                if (s = "{" + a + "}",
                (n = i.indexOf(s)) > 0) {
                    var r = i.substring(0, n)
                      , o = i.substring(n + s.length);
                    i = r + t[a] + o
                }
        return i
    }
      , g = [0, 6, 77, 81, 73, 115, 100, 112, 3]
      , m = [0, 4, 77, 81, 84, 84, 4]
      , v = function(e, t) {
        this.type = e;
        for (var i in t)
            t.hasOwnProperty(i) && (this[i] = t[i])
    };
    v.prototype.encode = function() {
        var e = (15 & this.type) << 4
          , t = 0
          , n = new Array
          , o = 0;
        switch (void 0 != this.messageIdentifier && (t += 2),
        this.type) {
        case l.CONNECT:
            switch (this.mqttVersion) {
            case 3:
                t += g.length + 3;
                break;
            case 4:
                t += m.length + 3
            }
            if (t += r(this.clientId) + 2,
            void 0 != this.willMessage) {
                t += r(this.willMessage.destinationName) + 2;
                var c = this.willMessage.payloadBytes;
                c instanceof Uint8Array || (c = new Uint8Array(h)),
                t += c.byteLength + 2
            }
            void 0 != this.userName && (t += r(this.userName) + 2),
            void 0 != this.password && (t += r(this.password) + 2);
            break;
        case l.SUBSCRIBE:
            e |= 2;
            for (var d = 0; d < this.topics.length; d++)
                n[d] = r(this.topics[d]),
                t += n[d] + 2;
            t += this.requestedQos.length;
            break;
        case l.UNSUBSCRIBE:
            e |= 2;
            for (var d = 0; d < this.topics.length; d++)
                n[d] = r(this.topics[d]),
                t += n[d] + 2;
            break;
        case l.PUBREL:
            e |= 2;
            break;
        case l.PUBLISH:
            this.payloadMessage.duplicate && (e |= 8),
            e = e |= this.payloadMessage.qos << 1,
            this.payloadMessage.retained && (e |= 1),
            o = r(this.payloadMessage.destinationName),
            t += o + 2;
            var h = this.payloadMessage.payloadBytes;
            t += h.byteLength,
            h instanceof ArrayBuffer ? h = new Uint8Array(h) : h instanceof Uint8Array || (h = new Uint8Array(h.buffer));
            break;
        case l.DISCONNECT:
        }
        var u = a(t)
          , p = u.length + 1
          , f = new ArrayBuffer(t + p)
          , v = new Uint8Array(f);
        if (v[0] = e,
        v.set(u, 1),
        this.type == l.PUBLISH)
            p = s(this.payloadMessage.destinationName, o, v, p);
        else if (this.type == l.CONNECT) {
            switch (this.mqttVersion) {
            case 3:
                v.set(g, p),
                p += g.length;
                break;
            case 4:
                v.set(m, p),
                p += m.length
            }
            var y = 0;
            this.cleanSession && (y = 2),
            void 0 != this.willMessage && (y |= 4,
            y |= this.willMessage.qos << 3,
            this.willMessage.retained && (y |= 32)),
            void 0 != this.userName && (y |= 128),
            void 0 != this.password && (y |= 64),
            v[p++] = y,
            p = i(this.keepAliveInterval, v, p)
        }
        switch (void 0 != this.messageIdentifier && (p = i(this.messageIdentifier, v, p)),
        this.type) {
        case l.CONNECT:
            p = s(this.clientId, r(this.clientId), v, p),
            void 0 != this.willMessage && (p = s(this.willMessage.destinationName, r(this.willMessage.destinationName), v, p),
            p = i(c.byteLength, v, p),
            v.set(c, p),
            p += c.byteLength),
            void 0 != this.userName && (p = s(this.userName, r(this.userName), v, p)),
            void 0 != this.password && (p = s(this.password, r(this.password), v, p));
            break;
        case l.PUBLISH:
            v.set(h, p);
            break;
        case l.SUBSCRIBE:
            for (var d = 0; d < this.topics.length; d++)
                p = s(this.topics[d], n[d], v, p),
                v[p++] = this.requestedQos[d];
            break;
        case l.UNSUBSCRIBE:
            for (var d = 0; d < this.topics.length; d++)
                p = s(this.topics[d], n[d], v, p)
        }
        return f
    }
    ;
    var y = function(e, t, i) {
        this._client = e,
        this._window = t,
        this._keepAliveInterval = 1e3 * i,
        this.isReset = !1;
        var s = new v(l.PINGREQ).encode()
          , n = function(e) {
            return function() {
                return a.apply(e)
            }
        }
          , a = function() {
            this.isReset ? (this.isReset = !1,
            this._client._trace("Pinger.doPing", "send PINGREQ"),
            this._client.socket.send(s),
            this.timeout = this._window.setTimeout(n(this), this._keepAliveInterval)) : (this._client._trace("Pinger.doPing", "Timed out"),
            this._client._disconnected(u.PING_TIMEOUT.code, f(u.PING_TIMEOUT)))
        };
        this.reset = function() {
            this.isReset = !0,
            this._window.clearTimeout(this.timeout),
            this._keepAliveInterval > 0 && (this.timeout = setTimeout(n(this), this._keepAliveInterval))
        }
        ,
        this.cancel = function() {
            this._window.clearTimeout(this.timeout)
        }
    }
      , b = function(e, t, i, s, n) {
        this._window = t,
        i || (i = 30);
        this.timeout = setTimeout(function(e, t, i) {
            return function() {
                return e.apply(t, i)
            }
        }(s, e, n), 1e3 * i),
        this.cancel = function() {
            this._window.clearTimeout(this.timeout)
        }
    }
      , C = function(t, i, s, n, a) {
        if (!("WebSocket"in e && null !== e.WebSocket))
            throw new Error(f(u.UNSUPPORTED, ["WebSocket"]));
        if (!("localStorage"in e && null !== e.localStorage))
            throw new Error(f(u.UNSUPPORTED, ["localStorage"]));
        if (!("ArrayBuffer"in e && null !== e.ArrayBuffer))
            throw new Error(f(u.UNSUPPORTED, ["ArrayBuffer"]));
        this._trace("Paho.MQTT.Client", t, i, s, n, a),
        this.host = i,
        this.port = s,
        this.path = n,
        this.uri = t,
        this.clientId = a,
        this._localKey = i + ":" + s + ("/mqtt" != n ? ":" + n : "") + ":" + a + ":",
        this._msg_queue = [],
        this._sentMessages = {},
        this._receivedMessages = {},
        this._notify_msg_sent = {},
        this._message_identifier = 1,
        this._sequence = 0;
        for (var r in localStorage)
            0 != r.indexOf("Sent:" + this._localKey) && 0 != r.indexOf("Received:" + this._localKey) || this.restore(r)
    };
    C.prototype.host,
    C.prototype.port,
    C.prototype.path,
    C.prototype.uri,
    C.prototype.clientId,
    C.prototype.socket,
    C.prototype.connected = !1,
    C.prototype.maxMessageIdentifier = 65536,
    C.prototype.connectOptions,
    C.prototype.hostIndex,
    C.prototype.onConnectionLost,
    C.prototype.onMessageDelivered,
    C.prototype.onMessageArrived,
    C.prototype.traceFunction,
    C.prototype._msg_queue = null,
    C.prototype._connectTimeout,
    C.prototype.sendPinger = null,
    C.prototype.receivePinger = null,
    C.prototype.receiveBuffer = null,
    C.prototype._traceBuffer = null,
    C.prototype._MAX_TRACE_ENTRIES = 100,
    C.prototype.connect = function(e) {
        var t = this._traceMask(e, "password");
        this._trace("Client.connect", t, this.socket, this.connected),
        this.connectOptions = e,
        e.uris ? (this.hostIndex = 0,
        this._doConnect(e.uris[0])) : this._doConnect(this.uri)
    }
    ,
    C.prototype.subscribe = function(e, t) {
        if (this._trace("Client.subscribe", e, t),
        !this.connected)
            throw new Error(f(u.INVALID_STATE, ["not connected"]));
        var i = new v(l.SUBSCRIBE);
        i.topics = [e],
        void 0 != t.qos ? i.requestedQos = [t.qos] : i.requestedQos = [0],
        t.onSuccess && (i.onSuccess = function(e) {
            t.onSuccess({
                invocationContext: t.invocationContext,
                grantedQos: e
            })
        }
        ),
        t.onFailure && (i.onFailure = function(e) {
            t.onFailure({
                invocationContext: t.invocationContext,
                errorCode: e
            })
        }
        ),
        t.timeout && (i.timeOut = new b(this,window,t.timeout,t.onFailure,[{
            invocationContext: t.invocationContext,
            errorCode: u.SUBSCRIBE_TIMEOUT.code,
            errorMessage: f(u.SUBSCRIBE_TIMEOUT)
        }])),
        this._requires_ack(i),
        this._schedule_message(i)
    }
    ,
    C.prototype.unsubscribe = function(e, t) {
        if (this._trace("Client.unsubscribe", e, t),
        !this.connected)
            throw new Error(f(u.INVALID_STATE, ["not connected"]));
        var i = new v(l.UNSUBSCRIBE);
        i.topics = [e],
        t.onSuccess && (i.callback = function() {
            t.onSuccess({
                invocationContext: t.invocationContext
            })
        }
        ),
        t.timeout && (i.timeOut = new b(this,window,t.timeout,t.onFailure,[{
            invocationContext: t.invocationContext,
            errorCode: u.UNSUBSCRIBE_TIMEOUT.code,
            errorMessage: f(u.UNSUBSCRIBE_TIMEOUT)
        }])),
        this._requires_ack(i),
        this._schedule_message(i)
    }
    ,
    C.prototype.send = function(e) {
        if (this._trace("Client.send", e),
        !this.connected)
            throw new Error(f(u.INVALID_STATE, ["not connected"]));
        wireMessage = new v(l.PUBLISH),
        wireMessage.payloadMessage = e,
        e.qos > 0 ? this._requires_ack(wireMessage) : this.onMessageDelivered && (this._notify_msg_sent[wireMessage] = this.onMessageDelivered(wireMessage.payloadMessage)),
        this._schedule_message(wireMessage)
    }
    ,
    C.prototype.disconnect = function() {
        if (this._trace("Client.disconnect"),
        !this.socket)
            throw new Error(f(u.INVALID_STATE, ["not connecting or connected"]));
        wireMessage = new v(l.DISCONNECT),
        this._notify_msg_sent[wireMessage] = h(this._disconnected, this),
        this._schedule_message(wireMessage)
    }
    ,
    C.prototype.getTraceLog = function() {
        if (null !== this._traceBuffer) {
            this._trace("Client.getTraceLog", new Date),
            this._trace("Client.getTraceLog in flight messages", this._sentMessages.length);
            for (var e in this._sentMessages)
                this._trace("_sentMessages ", e, this._sentMessages[e]);
            for (var e in this._receivedMessages)
                this._trace("_receivedMessages ", e, this._receivedMessages[e]);
            return this._traceBuffer
        }
    }
    ,
    C.prototype.startTrace = function() {
        null === this._traceBuffer && (this._traceBuffer = []),
        this._trace("Client.startTrace", new Date, "@VERSION@")
    }
    ,
    C.prototype.stopTrace = function() {
        delete this._traceBuffer
    }
    ,
    C.prototype._doConnect = function(e) {
        if (this.connectOptions.useSSL) {
            var t = e.split(":");
            t[0] = "wss",
            e = t.join(":")
        }
        this.connected = !1,
        this.connectOptions.mqttVersion,
        this.socket = new WebSocket(e),
        this.socket.binaryType = "arraybuffer",
        this.socket.onopen = h(this._on_socket_open, this),
        this.socket.onmessage = h(this._on_socket_message, this),
        this.socket.onerror = h(this._on_socket_error, this),
        this.socket.onclose = h(this._on_socket_close, this),
        this.sendPinger = new y(this,window,this.connectOptions.keepAliveInterval),
        this.receivePinger = new y(this,window,this.connectOptions.keepAliveInterval),
        this._connectTimeout = new b(this,window,this.connectOptions.timeout,this._disconnected,[u.CONNECT_TIMEOUT.code, f(u.CONNECT_TIMEOUT)])
    }
    ,
    C.prototype._schedule_message = function(e) {
        this._msg_queue.push(e),
        this.connected && this._process_queue()
    }
    ,
    C.prototype.store = function(e, t) {
        var i = {
            type: t.type,
            messageIdentifier: t.messageIdentifier,
            version: 1
        };
        switch (t.type) {
        case l.PUBLISH:
            t.pubRecReceived && (i.pubRecReceived = !0),
            i.payloadMessage = {};
            for (var s = "", n = t.payloadMessage.payloadBytes, a = 0; a < n.length; a++)
                n[a] <= 15 ? s = s + "0" + n[a].toString(16) : s += n[a].toString(16);
            i.payloadMessage.payloadHex = s,
            i.payloadMessage.qos = t.payloadMessage.qos,
            i.payloadMessage.destinationName = t.payloadMessage.destinationName,
            t.payloadMessage.duplicate && (i.payloadMessage.duplicate = !0),
            t.payloadMessage.retained && (i.payloadMessage.retained = !0),
            0 == e.indexOf("Sent:") && (void 0 === t.sequence && (t.sequence = ++this._sequence),
            i.sequence = t.sequence);
            break;
        default:
            throw Error(f(u.INVALID_STORED_DATA, [key, i]))
        }
        localStorage.setItem(e + this._localKey + t.messageIdentifier, JSON.stringify(i))
    }
    ,
    C.prototype.restore = function(e) {
        var t = localStorage.getItem(e)
          , i = JSON.parse(t)
          , s = new v(i.type,i);
        switch (i.type) {
        case l.PUBLISH:
            for (var n = i.payloadMessage.payloadHex, a = new ArrayBuffer(n.length / 2), r = new Uint8Array(a), o = 0; n.length >= 2; ) {
                var c = parseInt(n.substring(0, 2), 16);
                n = n.substring(2, n.length),
                r[o++] = c
            }
            var d = new Paho.MQTT.Message(r);
            d.qos = i.payloadMessage.qos,
            d.destinationName = i.payloadMessage.destinationName,
            i.payloadMessage.duplicate && (d.duplicate = !0),
            i.payloadMessage.retained && (d.retained = !0),
            s.payloadMessage = d;
            break;
        default:
            throw Error(f(u.INVALID_STORED_DATA, [e, t]))
        }
        0 == e.indexOf("Sent:" + this._localKey) ? (s.payloadMessage.duplicate = !0,
        this._sentMessages[s.messageIdentifier] = s) : 0 == e.indexOf("Received:" + this._localKey) && (this._receivedMessages[s.messageIdentifier] = s)
    }
    ,
    C.prototype._process_queue = function() {
        for (var e = null, t = this._msg_queue.reverse(); e = t.pop(); )
            this._socket_send(e),
            this._notify_msg_sent[e] && (this._notify_msg_sent[e](),
            delete this._notify_msg_sent[e])
    }
    ,
    C.prototype._requires_ack = function(e) {
        var t = Object.keys(this._sentMessages).length;
        if (t > this.maxMessageIdentifier)
            throw Error("Too many messages:" + t);
        for (; void 0 !== this._sentMessages[this._message_identifier]; )
            this._message_identifier++;
        e.messageIdentifier = this._message_identifier,
        this._sentMessages[e.messageIdentifier] = e,
        e.type === l.PUBLISH && this.store("Sent:", e),
        this._message_identifier === this.maxMessageIdentifier && (this._message_identifier = 1)
    }
    ,
    C.prototype._on_socket_open = function() {
        var e = new v(l.CONNECT,this.connectOptions);
        e.clientId = this.clientId,
        this._socket_send(e)
    }
    ,
    C.prototype._on_socket_message = function(e) {
        this._trace("Client._on_socket_message", e.data),
        this.receivePinger.reset();
        for (var t = this._deframeMessages(e.data), i = 0; i < t.length; i += 1)
            this._handleMessage(t[i])
    }
    ,
    C.prototype._deframeMessages = function(e) {
        var i = new Uint8Array(e);
        if (this.receiveBuffer) {
            var s = new Uint8Array(this.receiveBuffer.length + i.length);
            s.set(this.receiveBuffer),
            s.set(i, this.receiveBuffer.length),
            i = s,
            delete this.receiveBuffer
        }
        try {
            for (var n = 0, a = []; n < i.length; ) {
                var r = t(i, n)
                  , o = r[0];
                if (n = r[1],
                null === o)
                    break;
                a.push(o)
            }
            n < i.length && (this.receiveBuffer = i.subarray(n))
        } catch (e) {
            return void this._disconnected(u.INTERNAL_ERROR.code, f(u.INTERNAL_ERROR, [e.message, e.stack.toString()]))
        }
        return a
    }
    ,
    C.prototype._handleMessage = function(e) {
        this._trace("Client._handleMessage", e);
        try {
            switch (e.type) {
            case l.CONNACK:
                if (this._connectTimeout.cancel(),
                this.connectOptions.cleanSession) {
                    for (var t in this._sentMessages) {
                        var i = this._sentMessages[t];
                        localStorage.removeItem("Sent:" + this._localKey + i.messageIdentifier)
                    }
                    this._sentMessages = {};
                    for (var t in this._receivedMessages) {
                        var s = this._receivedMessages[t];
                        localStorage.removeItem("Received:" + this._localKey + s.messageIdentifier)
                    }
                    this._receivedMessages = {}
                }
                if (0 !== e.returnCode) {
                    this._disconnected(u.CONNACK_RETURNCODE.code, f(u.CONNACK_RETURNCODE, [e.returnCode, p[e.returnCode]]));
                    break
                }
                this.connected = !0,
                this.connectOptions.uris && (this.hostIndex = this.connectOptions.uris.length);
                var n = new Array;
                for (var a in this._sentMessages)
                    this._sentMessages.hasOwnProperty(a) && n.push(this._sentMessages[a]);
                for (var n = n.sort(function(e, t) {
                    return e.sequence - t.sequence
                }), r = 0, o = n.length; r < o; r++) {
                    var i = n[r];
                    if (i.type == l.PUBLISH && i.pubRecReceived) {
                        var c = new v(l.PUBREL,{
                            messageIdentifier: i.messageIdentifier
                        });
                        this._schedule_message(c)
                    } else
                        this._schedule_message(i)
                }
                this.connectOptions.onSuccess && this.connectOptions.onSuccess({
                    invocationContext: this.connectOptions.invocationContext
                }),
                this._process_queue();
                break;
            case l.PUBLISH:
                this._receivePublish(e);
                break;
            case l.PUBACK:
                var i = this._sentMessages[e.messageIdentifier];
                i && (delete this._sentMessages[e.messageIdentifier],
                localStorage.removeItem("Sent:" + this._localKey + e.messageIdentifier),
                this.onMessageDelivered && this.onMessageDelivered(i.payloadMessage));
                break;
            case l.PUBREC:
                var i = this._sentMessages[e.messageIdentifier];
                if (i) {
                    i.pubRecReceived = !0;
                    var c = new v(l.PUBREL,{
                        messageIdentifier: e.messageIdentifier
                    });
                    this.store("Sent:", i),
                    this._schedule_message(c)
                }
                break;
            case l.PUBREL:
                var s = this._receivedMessages[e.messageIdentifier];
                localStorage.removeItem("Received:" + this._localKey + e.messageIdentifier),
                s && (this._receiveMessage(s),
                delete this._receivedMessages[e.messageIdentifier]);
                var d = new v(l.PUBCOMP,{
                    messageIdentifier: e.messageIdentifier
                });
                this._schedule_message(d);
                break;
            case l.PUBCOMP:
                var i = this._sentMessages[e.messageIdentifier];
                delete this._sentMessages[e.messageIdentifier],
                localStorage.removeItem("Sent:" + this._localKey + e.messageIdentifier),
                this.onMessageDelivered && this.onMessageDelivered(i.payloadMessage);
                break;
            case l.SUBACK:
                var i = this._sentMessages[e.messageIdentifier];
                i && (i.timeOut && i.timeOut.cancel(),
                128 === e.returnCode[0] ? i.onFailure && i.onFailure(e.returnCode) : i.onSuccess && i.onSuccess(e.returnCode),
                delete this._sentMessages[e.messageIdentifier]);
                break;
            case l.UNSUBACK:
                var i = this._sentMessages[e.messageIdentifier];
                i && (i.timeOut && i.timeOut.cancel(),
                i.callback && i.callback(),
                delete this._sentMessages[e.messageIdentifier]);
                break;
            case l.PINGRESP:
                this.sendPinger.reset();
                break;
            case l.DISCONNECT:
                this._disconnected(u.INVALID_MQTT_MESSAGE_TYPE.code, f(u.INVALID_MQTT_MESSAGE_TYPE, [e.type]));
                break;
            default:
                this._disconnected(u.INVALID_MQTT_MESSAGE_TYPE.code, f(u.INVALID_MQTT_MESSAGE_TYPE, [e.type]))
            }
        } catch (e) {
            return void this._disconnected(u.INTERNAL_ERROR.code, f(u.INTERNAL_ERROR, [e.message, e.stack.toString()]))
        }
    }
    ,
    C.prototype._on_socket_error = function(e) {
        this._disconnected(u.SOCKET_ERROR.code, f(u.SOCKET_ERROR, [e.data]))
    }
    ,
    C.prototype._on_socket_close = function() {
        this._disconnected(u.SOCKET_CLOSE.code, f(u.SOCKET_CLOSE))
    }
    ,
    C.prototype._socket_send = function(e) {
        if (1 == e.type) {
            var t = this._traceMask(e, "password");
            this._trace("Client._socket_send", t)
        } else
            this._trace("Client._socket_send", e);
        this.socket.send(e.encode()),
        ChatWebsocket.settings.onlineDebug && console.log("sendType:" + e.type + " " + new Date + " " + (new Date).getTime()),
        this.sendPinger.reset()
    }
    ,
    C.prototype._receivePublish = function(e) {
        switch (e.payloadMessage.qos) {
        case "undefined":
        case 0:
            this._receiveMessage(e);
            break;
        case 1:
            var t = new v(l.PUBACK,{
                messageIdentifier: e.messageIdentifier
            });
            this._schedule_message(t),
            this._receiveMessage(e);
            break;
        case 2:
            this._receivedMessages[e.messageIdentifier] = e,
            this.store("Received:", e);
            var i = new v(l.PUBREC,{
                messageIdentifier: e.messageIdentifier
            });
            this._schedule_message(i);
            break;
        default:
            throw Error("Invaild qos=" + wireMmessage.payloadMessage.qos)
        }
    }
    ,
    C.prototype._receiveMessage = function(e) {
        this.onMessageArrived && this.onMessageArrived(e.payloadMessage)
    }
    ,
    C.prototype._disconnected = function(e, t) {
        this._trace("Client._disconnected", e, t),
        this.sendPinger.cancel(),
        this.receivePinger.cancel(),
        this._connectTimeout && this._connectTimeout.cancel(),
        this._msg_queue = [],
        this._notify_msg_sent = {},
        this.socket && (this.socket.onopen = null,
        this.socket.onmessage = null,
        this.socket.onerror = null,
        this.socket.onclose = null,
        1 === this.socket.readyState && this.socket.close(),
        delete this.socket),
        this.connectOptions.uris && this.hostIndex < this.connectOptions.uris.length - 1 ? (this.hostIndex++,
        this._doConnect(this.connectOptions.uris[this.hostIndex])) : (void 0 === e && (e = u.OK.code,
        t = f(u.OK)),
        this.connected ? (this.connected = !1,
        this.onConnectionLost && this.onConnectionLost({
            errorCode: e,
            errorMessage: t
        })) : 4 === this.connectOptions.mqttVersion && !1 === this.connectOptions.mqttVersionExplicit ? (this._trace("Failed to connect V4, dropping back to V3"),
        this.connectOptions.mqttVersion = 3,
        this.connectOptions.uris ? (this.hostIndex = 0,
        this._doConnect(this.connectOptions.uris[0])) : this._doConnect(this.uri)) : this.connectOptions.onFailure && this.connectOptions.onFailure({
            invocationContext: this.connectOptions.invocationContext,
            errorCode: e,
            errorMessage: t
        }))
    }
    ,
    C.prototype._trace = function() {
        if (this.traceFunction) {
            for (var e in arguments)
                void 0 !== arguments[e] && (arguments[e] = JSON.stringify(arguments[e]));
            var t = Array.prototype.slice.call(arguments).join("");
            this.traceFunction({
                severity: "Debug",
                message: t
            })
        }
        if (null !== this._traceBuffer)
            for (var e = 0, i = arguments.length; e < i; e++)
                this._traceBuffer.length == this._MAX_TRACE_ENTRIES && this._traceBuffer.shift(),
                0 === e ? this._traceBuffer.push(arguments[e]) : void 0 === arguments[e] ? this._traceBuffer.push(arguments[e]) : this._traceBuffer.push("  " + JSON.stringify(arguments[e]))
    }
    ,
    C.prototype._traceMask = function(e, t) {
        var i = {};
        for (var s in e)
            e.hasOwnProperty(s) && (i[s] = s == t ? "******" : e[s]);
        return i
    }
    ;
    var w = function(e, t, i, s) {
        var n;
        if ("string" != typeof e)
            throw new Error(f(u.INVALID_TYPE, [typeof e, "host"]));
        if (2 == arguments.length) {
            s = t,
            n = e;
            var a = n.match(/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/);
            if (!a)
                throw new Error(f(u.INVALID_ARGUMENT, [e, "host"]));
            e = a[4] || a[2],
            t = parseInt(a[7]),
            i = a[8]
        } else {
            if (3 == arguments.length && (s = i,
            i = "/mqtt"),
            "number" != typeof t || t < 0)
                throw new Error(f(u.INVALID_TYPE, [typeof t, "port"]));
            if ("string" != typeof i)
                throw new Error(f(u.INVALID_TYPE, [typeof i, "path"]));
            var r = -1 != e.indexOf(":") && "[" != e.slice(0, 1) && "]" != e.slice(-1);
            n = "ws://" + (r ? "[" + e + "]" : e) + ":" + t + i
        }
        for (var o = 0, c = 0; c < s.length; c++) {
            var l = s.charCodeAt(c);
            55296 <= l && l <= 56319 && c++,
            o++
        }
        if ("string" != typeof s || o > 65535)
            throw new Error(f(u.INVALID_ARGUMENT, [s, "clientId"]));
        var h = new C(n,e,t,i,s);
        this._getHost = function() {
            return e
        }
        ,
        this._setHost = function() {
            throw new Error(f(u.UNSUPPORTED_OPERATION))
        }
        ,
        this._getPort = function() {
            return t
        }
        ,
        this._setPort = function() {
            throw new Error(f(u.UNSUPPORTED_OPERATION))
        }
        ,
        this._getPath = function() {
            return i
        }
        ,
        this._setPath = function() {
            throw new Error(f(u.UNSUPPORTED_OPERATION))
        }
        ,
        this._getURI = function() {
            return n
        }
        ,
        this._setURI = function() {
            throw new Error(f(u.UNSUPPORTED_OPERATION))
        }
        ,
        this._getClientId = function() {
            return h.clientId
        }
        ,
        this._setClientId = function() {
            throw new Error(f(u.UNSUPPORTED_OPERATION))
        }
        ,
        this._getOnConnectionLost = function() {
            return h.onConnectionLost
        }
        ,
        this._setOnConnectionLost = function(e) {
            if ("function" != typeof e)
                throw new Error(f(u.INVALID_TYPE, [typeof e, "onConnectionLost"]));
            h.onConnectionLost = e
        }
        ,
        this._getOnMessageDelivered = function() {
            return h.onMessageDelivered
        }
        ,
        this._setOnMessageDelivered = function(e) {
            if ("function" != typeof e)
                throw new Error(f(u.INVALID_TYPE, [typeof e, "onMessageDelivered"]));
            h.onMessageDelivered = e
        }
        ,
        this._getOnMessageArrived = function() {
            return h.onMessageArrived
        }
        ,
        this._setOnMessageArrived = function(e) {
            if ("function" != typeof e)
                throw new Error(f(u.INVALID_TYPE, [typeof e, "onMessageArrived"]));
            h.onMessageArrived = e
        }
        ,
        this._getTrace = function() {
            return h.traceFunction
        }
        ,
        this._setTrace = function(e) {
            if ("function" != typeof e)
                throw new Error(f(u.INVALID_TYPE, [typeof e, "onTrace"]));
            h.traceFunction = e
        }
        ,
        this.connect = function(e) {
            if (e = e || {},
            d(e, {
                timeout: "number",
                userName: "string",
                password: "string",
                willMessage: "object",
                keepAliveInterval: "number",
                cleanSession: "boolean",
                useSSL: "boolean",
                invocationContext: "object",
                onSuccess: "function",
                onFailure: "function",
                hosts: "object",
                ports: "object",
                mqttVersion: "number"
            }),
            void 0 === e.keepAliveInterval && (e.keepAliveInterval = 60),
            e.mqttVersion > 4 || e.mqttVersion < 3)
                throw new Error(f(u.INVALID_ARGUMENT, [e.mqttVersion, "connectOptions.mqttVersion"]));
            if (void 0 === e.mqttVersion ? (e.mqttVersionExplicit = !1,
            e.mqttVersion = 4) : e.mqttVersionExplicit = !0,
            void 0 === e.password && void 0 !== e.userName)
                throw new Error(f(u.INVALID_ARGUMENT, [e.password, "connectOptions.password"]));
            if (e.willMessage) {
                if (!(e.willMessage instanceof T))
                    throw new Error(f(u.INVALID_TYPE, [e.willMessage, "connectOptions.willMessage"]));
                if (e.willMessage.stringPayload,
                void 0 === e.willMessage.destinationName)
                    throw new Error(f(u.INVALID_TYPE, [typeof e.willMessage.destinationName, "connectOptions.willMessage.destinationName"]))
            }
            if (void 0 === e.cleanSession && (e.cleanSession = !0),
            e.hosts) {
                if (!(e.hosts instanceof Array))
                    throw new Error(f(u.INVALID_ARGUMENT, [e.hosts, "connectOptions.hosts"]));
                if (e.hosts.length < 1)
                    throw new Error(f(u.INVALID_ARGUMENT, [e.hosts, "connectOptions.hosts"]));
                for (var t = !1, s = 0; s < e.hosts.length; s++) {
                    if ("string" != typeof e.hosts[s])
                        throw new Error(f(u.INVALID_TYPE, [typeof e.hosts[s], "connectOptions.hosts[" + s + "]"]));
                    if (/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/.test(e.hosts[s])) {
                        if (0 == s)
                            t = !0;
                        else if (!t)
                            throw new Error(f(u.INVALID_ARGUMENT, [e.hosts[s], "connectOptions.hosts[" + s + "]"]))
                    } else if (t)
                        throw new Error(f(u.INVALID_ARGUMENT, [e.hosts[s], "connectOptions.hosts[" + s + "]"]))
                }
                if (t)
                    e.uris = e.hosts;
                else {
                    if (!e.ports)
                        throw new Error(f(u.INVALID_ARGUMENT, [e.ports, "connectOptions.ports"]));
                    if (!(e.ports instanceof Array))
                        throw new Error(f(u.INVALID_ARGUMENT, [e.ports, "connectOptions.ports"]));
                    if (e.hosts.length != e.ports.length)
                        throw new Error(f(u.INVALID_ARGUMENT, [e.ports, "connectOptions.ports"]));
                    e.uris = [];
                    for (var s = 0; s < e.hosts.length; s++) {
                        if ("number" != typeof e.ports[s] || e.ports[s] < 0)
                            throw new Error(f(u.INVALID_TYPE, [typeof e.ports[s], "connectOptions.ports[" + s + "]"]));
                        var a = e.hosts[s]
                          , r = e.ports[s]
                          , o = -1 != a.indexOf(":");
                        n = "ws://" + (o ? "[" + a + "]" : a) + ":" + r + i,
                        e.uris.push(n)
                    }
                }
            }
            h.connect(e)
        }
        ,
        this.subscribe = function(e, t) {
            if ("string" != typeof e)
                throw new Error("Invalid argument:" + e);
            if (t = t || {},
            d(t, {
                qos: "number",
                invocationContext: "object",
                onSuccess: "function",
                onFailure: "function",
                timeout: "number"
            }),
            t.timeout && !t.onFailure)
                throw new Error("subscribeOptions.timeout specified with no onFailure callback.");
            if (void 0 !== t.qos && 0 !== t.qos && 1 !== t.qos && 2 !== t.qos)
                throw new Error(f(u.INVALID_ARGUMENT, [t.qos, "subscribeOptions.qos"]));
            h.subscribe(e, t)
        }
        ,
        this.unsubscribe = function(e, t) {
            if ("string" != typeof e)
                throw new Error("Invalid argument:" + e);
            if (t = t || {},
            d(t, {
                invocationContext: "object",
                onSuccess: "function",
                onFailure: "function",
                timeout: "number"
            }),
            t.timeout && !t.onFailure)
                throw new Error("unsubscribeOptions.timeout specified with no onFailure callback.");
            h.unsubscribe(e, t)
        }
        ,
        this.send = function(e, t, i, s) {
            var n;
            if (0 == arguments.length)
                throw new Error("Invalid argument.length");
            if (1 == arguments.length) {
                if (!(e instanceof T) && "string" != typeof e)
                    throw new Error("Invalid argument:" + typeof e);
                if (n = e,
                void 0 === n.destinationName)
                    throw new Error(f(u.INVALID_ARGUMENT, [n.destinationName, "Message.destinationName"]));
                h.send(n)
            } else
                n = new T(t),
                n.destinationName = e,
                arguments.length >= 3 && (n.qos = i),
                arguments.length >= 4 && (n.retained = s),
                h.send(n)
        }
        ,
        this.disconnect = function() {
            h.disconnect()
        }
        ,
        this.getTraceLog = function() {
            return h.getTraceLog()
        }
        ,
        this.startTrace = function() {
            h.startTrace()
        }
        ,
        this.stopTrace = function() {
            h.stopTrace()
        }
        ,
        this.isConnected = function() {
            return h.connected
        }
    };
    w.prototype = {
        get host() {
            return this._getHost()
        },
        set host(e) {
            this._setHost(e)
        },
        get port() {
            return this._getPort()
        },
        set port(e) {
            this._setPort(e)
        },
        get path() {
            return this._getPath()
        },
        set path(e) {
            this._setPath(e)
        },
        get clientId() {
            return this._getClientId()
        },
        set clientId(e) {
            this._setClientId(e)
        },
        get onConnectionLost() {
            return this._getOnConnectionLost()
        },
        set onConnectionLost(e) {
            this._setOnConnectionLost(e)
        },
        get onMessageDelivered() {
            return this._getOnMessageDelivered()
        },
        set onMessageDelivered(e) {
            this._setOnMessageDelivered(e)
        },
        get onMessageArrived() {
            return this._getOnMessageArrived()
        },
        set onMessageArrived(e) {
            this._setOnMessageArrived(e)
        },
        get trace() {
            return this._getTrace()
        },
        set trace(e) {
            this._setTrace(e)
        }
    };
    var T = function(e) {
        var t;
        if (!("string" == typeof e || e instanceof ArrayBuffer || e instanceof Int8Array || e instanceof Uint8Array || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array))
            throw f(u.INVALID_ARGUMENT, [e, "newPayload"]);
        t = e,
        this._getPayloadString = function() {
            return "string" == typeof t ? t : c(t, 0, t.length)
        }
        ,
        this._getPayloadBytes = function() {
            if ("string" == typeof t) {
                var e = new ArrayBuffer(r(t))
                  , i = new Uint8Array(e);
                return o(t, i, 0),
                i
            }
            return t
        }
        ;
        var i = void 0;
        this._getDestinationName = function() {
            return i
        }
        ,
        this._setDestinationName = function(e) {
            if ("string" != typeof e)
                throw new Error(f(u.INVALID_ARGUMENT, [e, "newDestinationName"]));
            i = e
        }
        ;
        var s = 0;
        this._getQos = function() {
            return s
        }
        ,
        this._setQos = function(e) {
            if (0 !== e && 1 !== e && 2 !== e)
                throw new Error("Invalid argument:" + e);
            s = e
        }
        ;
        var n = !1;
        this._getRetained = function() {
            return n
        }
        ,
        this._setRetained = function(e) {
            if ("boolean" != typeof e)
                throw new Error(f(u.INVALID_ARGUMENT, [e, "newRetained"]));
            n = e
        }
        ;
        var a = !1;
        this._getDuplicate = function() {
            return a
        }
        ,
        this._setDuplicate = function(e) {
            a = e
        }
    };
    return T.prototype = {
        get payloadString() {
            return this._getPayloadString()
        },
        get payloadBytes() {
            return this._getPayloadBytes()
        },
        get destinationName() {
            return this._getDestinationName()
        },
        set destinationName(e) {
            this._setDestinationName(e)
        },
        get qos() {
            return this._getQos()
        },
        set qos(e) {
            this._setQos(e)
        },
        get retained() {
            return this._getRetained()
        },
        set retained(e) {
            this._setRetained(e)
        },
        get duplicate() {
            return this._getDuplicate()
        },
        set duplicate(e) {
            this._setDuplicate(e)
        }
    },
    {
        Client: w,
        Message: T
    }
}(window);
var Proto = ProtobufMessage.prototype;
Proto.init = function() {
    if ("undefined" == typeof dcodeIO || !dcodeIO.ProtoBuf)
        throw new Error("ProtoBuf.js is not present. Please see www/index.html for manual setup instructions.");
    var e = dcodeIO.ProtoBuf;
    Proto.chatProto = e.loadProtoFile(INTERFACE_URLS.chatProtoUrl),
    Proto.createMessage.init()
}
,
Proto.decode = function(e) {
    return Proto.createMessage.build.chatProtocol.decode(e)
}
,
Proto.createMessage = {
    init: function() {
        this.build = {
            chatProtocol: Proto.chatProto.build("TechwolfChatProtocol"),
            message: Proto.chatProto.build("TechwolfMessage"),
            messageSync: Proto.chatProto.build("TechwolfMessage"),
            messageRead: Proto.chatProto.build("TechwolfMessageRead"),
            presence: Proto.chatProto.build("TechwolfPresence"),
            user: Proto.chatProto.build("TechwolfUser"),
            body: Proto.chatProto.build("TechwolfMessageBody"),
            clientInfo: Proto.chatProto.build("TechwolfClientInfo")
        }
    },
    model: {
        chatProtocol: function(e) {
            var t = new Proto.createMessage.build.chatProtocol;
            return t.setType(e),
            t
        },
        message: function(e, t, i, s, n) {
            var a = new Proto.createMessage.build.message;
            return a.setType(e),
            a.setMid(t, !0),
            a.setCmid(t, !0),
            a.setFrom(i),
            a.setTo(s),
            a.setBody(n),
            a
        },
        messageSync: function(e, t) {
            var i = new Proto.createMessage.build.messageSync;
            return i.setClientMid(e, !0),
            i.setServerMid(t, !0),
            i
        },
        messageRead: function(e, t) {
            var i = new Proto.createMessage.build.messageRead;
            return i.setUserId(e, !0),
            i.setMessageId(t, !0),
            i.setReadTime((new Date).getTime(), !0),
            i
        },
        presence: function(e) {
            var t = new Proto.createMessage.build.presence
              , i = new Proto.createMessage.build.clientInfo
              , s = e.clientInfo;
            return t.setUid(_PAGE.uid, !0),
            t.setType(e.type),
            t.setLastMessageId(e.lastMessageId, !0),
            i.setVersion(s.version),
            i.setSystem(s.system),
            i.setSystemVersion(s.systemVersion),
            i.setModel(s.model),
            i.setUniqid(s.uniqid),
            i.setNetwork(s.network),
            i.setAppid(s.appid),
            i.setPlatform(s.platform),
            i.setChannel(s.channel),
            i.setSsid(s.ssid),
            i.setBssid(s.bssid),
            i.setLongitude(s.longitude),
            i.setLatitude(s.latitude),
            t.setClientInfo(i, !0),
            t
        },
        user: function(e, t) {
            var i = new Proto.createMessage.build.user;
            return i.setUid(0, !0),
            e && i.setName(t),
            i
        },
        body: function(e, t) {
            var i = new Proto.createMessage.build.body;
            return i.setType(e),
            i.setTemplateId(t),
            i
        }
    },
    text: function(e) {
        var t = this.model
          , i = t.user()
          , s = t.user(e.to.uid, e.to.encryptUid)
          , n = t.body(1, 1);
        n.setText(e.body.text);
        var a = t.message(e.type || 1, e.tempID, i, s, n)
          , r = t.chatProtocol(1);
        return r.setMessages([a]),
        r
    },
    graphic: function(e) {
        var t = this.model
          , i = t.user()
          , s = t.user(e.to.uid, e.to.encryptUid)
          , n = t.body(20, 1);
        n.setText(e.body.text),
        n.setSticker(e.body.sticker);
        var a = t.message(e.type || 1, e.tempID, i, s, n)
          , r = t.chatProtocol(1);
        return r.setMessages([a]),
        r
    },
    sync: function(e) {
        var t = this.model
          , i = t.messageSync(e.clientMid, e.serverMid)
          , s = t.chatProtocol(5);
        return s.setMessageSync([i]),
        s
    },
    read: function(e) {
        var t = this.model
          , i = t.messageRead(e.uid, e.mid)
          , s = t.chatProtocol(6);
        return s.setMessageRead([i]),
        s
    },
    presence: function(e) {
        var t = this.model
          , i = t.presence(e)
          , s = t.chatProtocol(2);
        return s.setPresence(i),
        s
    }
};
var Emotion = {
    data: ["微笑", "撇嘴", "色", "发呆", "得意", "流泪", "害羞", "闭嘴", "睡", "大哭", "尴尬", "发怒", "调皮", "呲牙", "惊讶", "难过", "酷", "冷汗", "抓狂", "吐", "偷笑", "愉快", "白眼", "傲慢", "饥饿", "困", "惊恐", "流汗", "憨笑", "悠闲", "奋斗", "咒骂", "疑问", "嘘", "晕", "疯了", "衰", "骷髅", "敲打", "再见", "擦汗", "抠鼻", "鼓掌", "糗大了", "坏笑", "左哼哼", "右哼哼", "哈欠", "鄙视", "委屈", "快哭了", "阴险", "亲亲", "吓", "可怜", "开心", "满意", "不高兴", "生病", "笑哭", "不说话", "幽灵", "恶魔", "高兴", "菜刀", "西瓜", "啤酒", "篮球", "乒乓", "咖啡", "饭", "面条", "猪头", "玫瑰", "凋谢", "嘴唇", "爱心", "心碎", "蛋糕", "闪电", "炸弹", "刀", "足球", "瓢虫", "便便", "月亮", "太阳", "礼物", "拥抱", "强", "弱", "握手", "胜利", "抱拳", "勾引", "拳头", "差劲", "爱你", "NO", "OK"],
    init: function() {
        Emotion.getRecebtEmtion();
        var e, t, i = "", s = Publisher.editor.find(".emotion");
        if (!s.length) {
            for (e = 0; e < Emotion.data.length; e++)
                t = Emotion.data[e],
                i += '<li><button class="emoj emoj-' + (e + 1) + '" data-key="[' + t + ']" title="' + t + '"></button></li>';
            var n = '<div class="emotion"><div class="emotion-box"><ul class="hide animoji-box"></ul><ul class="loaded">' + i + '</ul><ul class="hide animoji-box"></ul><ul class="hide animoji-box"></ul><ul class="hide animoji-box"></ul></div><div class="emotion-tab">' + Emotion.getEmotionTabView() + "</div></div>";
            Publisher.editor.append(n),
            Emotion.showEmotion();
            var a = Publisher.editor.find(".emotion .emotion-box");
            Publisher.editor.find(".emotion .emotion-tab").find(".emotion-sort").on("click", function() {
                var e = $(this)
                  , t = e.index()
                  , i = a.find("ul").eq(t);
                i.hasClass("loaded") && 0 != t || i.html(Emotion.getEmotionListView(t)).addClass("loaded"),
                i.removeClass("hide").siblings().addClass("hide"),
                e.addClass("selected").siblings().removeClass("selected");
                var s = ["recent_emoji", "face_emoji", "my_emoji", "zhizhi_emoji", "bird_emoji"];
                try {
                    _T.sendEvent(s[t])
                } catch (e) {}
            }),
            $(document).on("click", function(e) {
                $(e.target).hasClass("btn-emotion") || $(e.target).parents(".emotion").length || Emotion.hideEmotion()
            }),
            Publisher.editor.find(".emotion").on("click", ".emoj", function() {
                var e = $(this);
                Emotion.chooseEmotion(e)
            }),
            Publisher.editor.find(".emotion").on("click", ".animoji", function() {
                var e = $(this);
                Emotion.chooseAnimojiEmotion(e)
            })
        }
        s.show()
    },
    emotionTypeData: [{
        type: "recent",
        className: "emotion-recent",
        data: []
    }, {
        type: "default",
        className: "emotion-default"
    }, {
        packId: 0,
        type: "like",
        className: "emotion-like",
        data: []
    }, {
        packId: 1,
        type: "zhi",
        className: "emotion-zhi",
        data: []
    }, {
        packId: 2,
        type: "veteran",
        className: "emotion-veteran",
        data: []
    }],
    getEmotionTabView: function() {
        var e = ""
          , t = Emotion.emotionTypeData;
        return $.each(t, function(t, i) {
            e += '<div class="emotion-sort ' + (1 == t ? "selected" : "") + '"><button class="' + i.className + '"></button></div>'
        }),
        e
    },
    getEmotionListView: function(e) {
        var t = ""
          , i = Emotion.emotionTypeData[e].data;
        if (i.length)
            for (var s = 0; s < i.length; s++) {
                var n = "";
                3 != e && 4 != e || (n = "<span>" + i[s].name + "</span>"),
                t += '<li class="animoji-item"><button data-width="' + i[s].origWidth + '" data-height="' + i[s].origHeight + '" data-url="' + i[s].origUrl + '" data-packId="' + i[s].packId + '" data-sid="' + i[s].itemId + '" class="animoji" title="' + i[s].name + '"><img src="' + i[s].tinyUrl + '"/></button>' + n + "</li>"
            }
        return t
    },
    showEmotion: function() {
        Publisher.editor.find(".emotion").show()
    },
    hideEmotion: function() {
        Publisher.editor.find(".emotion").hide()
    },
    textCodeToImg: function(e) {
        if (!e)
            return "";
        var t, i = e.match(/\[[a-zA-Z\u4e00-\u9fa5]{1,3}\]/g);
        if (!i)
            return e;
        for (t = 0; t < i.length; t++) {
            var s, n = i[t].replace(/[\[\]]/g, ""), a = Emotion.data.indexOf(n);
            a > -1 && (s = '<i class="emoj emoj-' + (a + 1) + '" title="' + n + '"></i>'),
            s && (e = e.replace(i[t], s))
        }
        return e
    },
    getRecebtEmtion: function() {
        var e = []
          , t = _PAGE.uid + "emotionsBoss";
        window.localStorage && window.localStorage.getItem(t) && (e = JSON.parse(window.localStorage.getItem(t))),
        Emotion.emotionTypeData[0].data = e
    },
    chooseEmotion: function(e) {
        var t = e
          , i = t.attr("class").split("emoj-")[1]
          , s = "https://static.zhipin.com/library/emotions/Expression_" + i + "@2x.png";
        Publisher.editorInput.find("img:not(.emoj-insert)");
        Publisher.inserCurosrHtml(s, t.attr("data-key")),
        Emotion.hideEmotion(),
        Publisher.submitBtn.removeClass("btn-disabled"),
        Publisher.editorInput.focus();
        try {
            _T.sendEvent("send_emoji_face_" + i)
        } catch (e) {}
    },
    chooseAnimojiEmotion: function(e) {
        if (!e.hasClass("disabled")) {
            e.addClass("disabled");
            var t = e.attr("data-packId")
              , i = e.attr("data-sid")
              , s = e.attr("title")
              , n = e.attr("data-url")
              , a = e.find("img").attr("src")
              , r = Number(e.attr("data-width"))
              , o = Number(e.attr("data-height"))
              , c = {
                packId: t,
                sid: i,
                name: s,
                image: {
                    originImage: {
                        height: o,
                        width: r,
                        url: n
                    }
                }
            };
            Publisher.sendText(null, "[动画表情]", c),
            Emotion.hideEmotion(),
            e.removeClass("disabled");
            for (var l = Emotion.emotionTypeData[0].data, d = {
                packId: t,
                itemId: i,
                name: s,
                origUrl: n,
                tinyUrl: a,
                origWidth: r,
                origHeight: o
            }, h = 0; h < l.length; h++)
                d.itemId == l[h].itemId && l.splice(h, 1);
            l.unshift(d),
            l.length > 8 && l.splice(8, 10);
            var u = _PAGE.uid + "emotionsBoss";
            window.localStorage && window.localStorage.setItem(u, JSON.stringify(l)),
            Emotion.emotionTypeData[0].data = l;
            var p = e.parents("ul").index()
              , f = ["recent", "face", "my", "zhizhi", "bird"];
            try {
                _T.sendEvent("send_emoji_face_" + f[p])
            } catch (e) {}
        }
    },
    storeEmotion: function(e) {
        if (!e.hasClass("disabled")) {
            e.addClass("disabled");
            var t = e.attr("data-sid")
              , i = Publisher.editor.find(".emotion .emotion-box ul").eq(2);
            $.ajax({
                type: "get",
                url: "/sticker/favorite.json",
                data: {
                    itemId: t
                },
                success: function(s) {
                    1 == s.code ? ($.toast({
                        content: "添加成功",
                        type: "success"
                    }),
                    i.length && Emotion.getSticker(i),
                    Chat.chatListCon.find('span.btn-sore[data-sid="' + t + '"]').remove(),
                    Chat.storedEmtions.push({
                        itemId: t
                    }),
                    e.addClass("hidden")) : ($.toast({
                        content: s.message,
                        type: "error"
                    }),
                    0 == s.code && "用户已经添加该表情" == s.message && (Chat.chatListCon.find('span.btn-sore[data-sid="' + t + '"]').remove(),
                    Chat.storedEmtions.push({
                        itemId: t
                    })),
                    8e3 != s.code && e.addClass("hidden")),
                    e.removeClass("disabled")
                },
                error: function() {
                    e.removeClass("disabled")
                }
            });
            try {
                _T.sendEvent("add_emoji")
            } catch (e) {}
        }
    },
    getSticker: function(e) {
        var t = $.Deferred();
        return $.ajax({
            type: "get",
            url: "/sticker/get.json",
            success: function(i) {
                if (1 == i.code) {
                    var s = i.result.packs;
                    $.each(s, function(e, i) {
                        var s = i.packId + 2;
                        Emotion.emotionTypeData[s].data = i.items,
                        0 == i.packId && t.resolve(i.items)
                    }),
                    e && e.html(Emotion.getEmotionListView(2)).addClass("loaded")
                }
            }
        }),
        t
    }
}
  , InterviewTemplate = function() {
    var e = function(e) {
        return Utemplate('<form class="form-check interview-wrap interview-invitation"><input type="hidden" name="_token" value=""><div class="interview-article">发送面试邀请</div><%if(this.brokenAppointment){%><div class="interview-notice"><i class="icon-unbelievable"></i>该牛人近期有面试爽约的不良记录，请注意！</div><%}else{%><div class="interview-notice"><i class="icon-believable"></i>对方没有面试爽约的不良记录，请放心约面试</div><%}%><table class="data-manage"><tr class="interview-position"><td class="t"><i class="icon-interview icon-position"></i></td><td><div class="dropdown-wrap dropdown-position"><input type="hidden" value="0" name="jobid" class="required" data-blank="必填"><span class="dropdown-select">选择职位</span><div class="dropdown-menu"><ul></ul></div></div></td></tr><tr><td class="t"><i class="icon-interview icon-time"></i></td><td><div class="dropdown-wrap dropdown-hour"><span class="dropdown-select"><input type="text" class="ipt ipt-datetimepicker" name="date" data-type="y-m-d" data-format="yyyy-mm-dd" placeholder="选择面试时间" readonly autocomplete="off"></span></div><div class="dropdown-wrap dropdown-minute" data-fill="false"><span class="dropdown-select"><input type="text" placeholder="请选择" value="9:00" class="ipt" readonly><input type="hidden" value="9" name="hour" class="required" data-blank="必填"><input type="hidden" value="0" name="minute" class="required" data-blank="必填"></span><div class="dropdown-menu"><ul></ul></div></div></td></tr><tr class="interview-address"><td class="t"><i class="icon-interview icon-address"></i></td><td><p class="tip-address">请先选择职位</p></td></tr><tr><td class="t t-top"><i class="icon-interview icon-description"></i></td><td><textarea name="other" class="ipt ipt-area" placeholder="选填，最多140字"></textarea></td></tr></table></form><div class=""></div>', e)
    }
      , t = function(e) {
        return Utemplate('<div class="interview-wrap <%this.style%>"><div class="interview-article"><%this.article%></div><table class="data-manage"><tbody><tr><td class="t"><i class="icon-interview icon-position"></i></td><td><%this.interviewInfo.jobName%></td></tr><tr><td class="t"><i class="icon-interview icon-time"></i></td><td><%this.interviewInfo.time%></td></tr><tr class="interview-address"><td class="t"><i class="icon-interview icon-address"></i></td><td><p class="tip-address"><%this.interviewInfo.jobAddress%></p></td></tr><%if(this.interviewInfo.addition != ""){%><tr><td class="t"><i class="icon-interview icon-description"></i></td><td><div class="interview-addition"><%this.interviewInfo.addition%></div></td></tr><%}%></tbody></table><%if(this.canInvite){%><div><span ka="chat_interview_resend" class="btn btn-block J_reInvite">重新发送面试邀请</span></div><%}%><div class="interview-page-footer gray">在BOSS直聘APP管理我的面试</div></div>', e)
    }
      , i = function(e) {
        return Utemplate('<div class="interview-hint"><dl><dt><%this.article%></dt><dd class="gray"><%this.description%></dd></dl></div>', e)
    };
    return {
        invitation: e,
        condition: t,
        hint: function() {
            return '<div class="interview-hint"><p class="article">约面试·诚信协议</p><ul class="gray"><li>面试开始8小时前，双方都可以申请取消，如不取消，请保证 按时出席，不许爽约 </li><li>如果对方爽约，您可以一键投诉对方 </li><li>任何一方爽约，会打［不良记录］并公示</li></ul></div>'
        },
        warning: i
    }
}()
  , Publisher = {
    init: function() {
        Publisher.editor = $(".chat-editor"),
        Publisher.editorControls = Publisher.editor.find(".chat-controls"),
        Publisher.editorInput = Publisher.editor.find(".chat-message"),
        Publisher.editorPlaceholder = Publisher.editor.find(".chat-placholder"),
        Publisher.submitBtn = Publisher.editor.find(".btn-send"),
        Publisher.menuWrap = $(".chat-container .data-menu"),
        _PAGE.runChat && (Publisher.editor.find(".chat-op").removeAttr("ka"),
        Publisher.editorInput.removeAttr("ka")),
        Publisher.editorControls.on("mouseover", "a", function(e) {
            $(e.target).hasClass("tips") || $(e.target).parents().hasClass("tips") || (Chat.checkUserBlock() && ["link-communication", "link-pass", "link-fail"].indexOf($(this).attr("class")) > -1 ? $(this).find("span").text("该牛人不会发送自动回复") : Chat.checkUserBlock() && $(this).find("span").attr("data-text") ? $(this).find("span").text("与牛人进一步沟通需使用道具") : $(this).find("span").attr("data-text") && $(this).find("span").text($(this).find("span").attr("data-text")),
            $(this).find("span").show())
        }),
        Publisher.editorControls.on("mouseleave", "a", function() {
            $(this).find("span").hide()
        }),
        Publisher.editorControls.on("click", "a", function(e) {
            var t = $(this);
            if (!$(this).parent().hasClass("links")) {
                var i = $(this).attr("class");
                if (Chat.checkUserBlock() && ["btn-position", "btn-transmit-resume"].indexOf(i) < 0 && !$(this).hasClass("disabled"))
                    return GeekHotProp.shop(Chat.curUserData.infoData.page, {
                        callBack: Chat.ublockBlockGeek
                    });
                switch (i) {
                case "btn-emotion":
                    t.find("span").hide(),
                    Emotion.init();
                    break;
                case "btn-dict":
                    t.find("span").hide(),
                    Publisher.showSentence(t);
                    break;
                case "btn-transmit-resume":
                    t.find("span").hide(),
                    t.find(".tips").hide(),
                    Publisher.showTransmitCode(t);
                    break;
                case "btn-position":
                    t.find("span").hide(),
                    t.find(".tips").hide(),
                    Publisher.showPosition($(e.target));
                    break;
                case "btn-contact":
                    Publisher.showExchangePhone(t);
                    break;
                case "btn-weixin":
                    Publisher.showExchangeWeixin(t);
                    break;
                case "btn-resume":
                    Publisher.showExchangeResume(t);
                    break;
                case "btn-transmit":
                    $.dialog({
                        title: "",
                        content: '<div class="transmit-con"><div class="transmit-title">把<span class="text-blue"></span>推荐给同事</div><div class="transmit-list"><ul></ul></div><div class="transmit-op"><p><textarea class="ipt ipt-area" name="shareNote">此人文武双全，你一定要看看啊！</textarea></p><p class="tip-text"><label class="checkbox"><input type="checkbox" name="canShareMsg" /><span>连同聊天记录一并转发</span></label></p></div></div>',
                        closeText: !0,
                        confirmText: "确定",
                        cancelText: "取消",
                        preKa: "",
                        wrapClass: "dialog-chat-default dialog-chat-transmit",
                        lock: !0,
                        element: t,
                        onOpen: function(e) {
                            var t = e
                              , i = t.find(".transmit-list ul");
                            t.find(".transmit-title .text-blue").text(Chat.curUserData.name),
                            i.html('<li class="loading-tips"><i class="icon-toast-loading"></i><span>加载同事数据中</span></li>'),
                            $.ajax({
                                type: "GET",
                                url: "/chat/brandUserList.json",
                                dataType: "JSON",
                                data: {
                                    geek: Chat.curUserData.encryptUid,
                                    page: 1,
                                    pageSize: 100
                                },
                                success: function(s) {
                                    var n, a, s = s, r = "";
                                    if (1 == s.rescode)
                                        if (s.canShareMsg || (e.find(".checkbox").hide(),
                                        e.find('input[name="canShareMsg"]').attr("checked", !1)),
                                        n = s.data,
                                        n.length) {
                                            for (a = 0; a < n.length; a++)
                                                r += '<li data-uid="' + n[a].encryptUserId + '"><img src="' + n[a].tiny + '" /><span class="name">' + n[a].name + "</span></li>";
                                            i.find(".loading-tips").remove(),
                                            i.append(r),
                                            t.find(".dialog-container").css({
                                                "margin-top": -t.find(".dialog-container").outerHeight() / 2 + "px"
                                            }),
                                            t.find(".dialog-container").height() > window.innerHeight - 40 && (e.css({
                                                position: "absolute"
                                            }),
                                            t.find(".dialog-container").css({
                                                top: $(window).scrollTop() + "px",
                                                "margin-top": "44px"
                                            }))
                                        } else
                                            i.find(".loading-tips").html("暂无同事");
                                    else
                                        i.find(".loading-tips").html("暂无同事")
                                },
                                error: function(e) {
                                    $.toast({
                                        content: "获取同事数据失败，请稍后再试",
                                        type: "error"
                                    })
                                }
                            }),
                            i.on("click", "li", function() {
                                var e = $(this);
                                e.attr("data-uid");
                                e.hasClass("loading-tips") || (e.parent().find("li").removeClass("checked"),
                                e.find(".fz-check").length || e.append('<i class="fz fz-check"></i>'),
                                e.addClass("checked"))
                            })
                        },
                        onConfirm: function(e) {
                            var t = e
                              , i = t.find(".transmit-list li.checked")
                              , s = i.attr("data-uid")
                              , n = t.find('input[name="canShareMsg"]:checked')
                              , a = n.length ? 1 : 0
                              , r = t.find('textarea[name="shareNote"]').val()
                              , o = t.find(".btn-sure");
                            return s ? "" == r ? ($.toast({
                                content: "请填写推荐评语",
                                type: "warning"
                            }),
                            !1) : (o.css("pointer-events", "none"),
                            $.ajax({
                                type: "POST",
                                url: "/chat/shareGeek.json",
                                dataType: "JSON",
                                data: {
                                    toId: s,
                                    geekId: Chat.curUserData.encryptUid,
                                    shareNote: r,
                                    expectId: Chat.curUserData.infoData.expectId,
                                    canShareMsg: a
                                },
                                success: function(e) {
                                    var e = e;
                                    1 == e.rescode ? $.toast({
                                        content: "转发成功",
                                        type: "success"
                                    }) : $.toast({
                                        content: "转发失败",
                                        type: "error"
                                    }),
                                    o.css("pointer-events", "initial")
                                },
                                error: function(e) {
                                    $.toast({
                                        content: "发送失败",
                                        type: "error"
                                    }),
                                    o.css("pointer-events", "initial")
                                }
                            }),
                            void e.remove()) : ($.toast({
                                content: "请选择同事",
                                type: "warning"
                            }),
                            !1)
                        },
                        onClose: function(e) {}
                    });
                    break;
                case "btn-interview":
                    Publisher.interview(t, "dialog-up-default")
                }
            }
        });
        var e = "按Enter键发送，按Ctrl+Enter键换行";
        isIE && (e = "按Enter键发送",
        Publisher.editor.find(".chat-op .tip").text(e)),
        Publisher.editorInput.on("keyup", function(e) {
            var t = Publisher.htmlConverToMessage($(this).html());
            return "" != t.replace(/[\n\s]/g, "") ? void Publisher.submitBtn.removeClass("btn-disabled") : void Publisher.submitBtn.addClass("btn-disabled")
        });
        try {
            document.execCommand("AutoUrlDetect", !1, !1)
        } catch (e) {}
        Publisher.editorInput.on("paste", function(e) {
            var t = null;
            if (t = window.clipboardData && clipboardData.setData ? window.clipboardData.getData("text") : (e.originalEvent || e).clipboardData.getData("text/plain"),
            document.body.createTextRange) {
                if (document.selection)
                    textRange = document.selection.createRange();
                else if (window.getSelection) {
                    var i = window.getSelection()
                      , s = i.getRangeAt(0)
                      , n = document.createElement("span");
                    n.innerHTML = "&#FEFF;",
                    s.deleteContents(),
                    s.insertNode(n),
                    textRange = document.body.createTextRange(),
                    textRange.moveToElementText(n),
                    n.parentNode.removeChild(n)
                }
                textRange.text = t,
                textRange.collapse(!1),
                textRange.select()
            } else
                document.execCommand("insertText", !1, t),
                "" != t && Publisher.submitBtn.removeClass("btn-disabled");
            e.preventDefault()
        }),
        Publisher.editorInput.bind("keydown", function(e) {
            13 == e.which && (e.ctrlKey || e.shiftKey ? (e.ctrlKey || e.shiftKey) && document.execCommand("insertText", !1, "\n") : (Publisher.sendText(),
            e.preventDefault())),
            "" != Publisher.editorInput.html() && Publisher.editorPlaceholder.hide()
        }),
        Publisher.editorInput.bind("input", function(e) {
            Chat.checkUserBlock() && (Publisher.editorInput.text().length > 0 || Publisher.editorInput.children().length > 0) ? Publisher.editor.find(".chat-op .tip").text("【技术类牛人】需使用道具与牛人继续沟通") : Publisher.editor.find(".chat-op .tip").text("按Enter键发送，按Ctrl+Enter键换行发送")
        }),
        Publisher.editorInput.bind("focus", function(e) {
            Publisher.editorPlaceholder.hide(),
            Publisher.editorInput.trigger("input")
        }),
        Publisher.editorInput.bind("blur", function(e) {
            "" != Publisher.editorInput.html() && "<br>" != Publisher.editorInput.html() || Publisher.editorPlaceholder.show()
        }),
        Publisher.editorInput.on("click", function() {
            if (_PAGE.runChat)
                try {
                    _T.sendEvent("Geekchat_input_" + Chat.getPublicStatis().context + "_" + Chat.getPublicStatis().view + "_" + Chat.curUserData.uid)
                } catch (e) {}
        }),
        Publisher.editorPlaceholder.on("click", function() {
            Publisher.editorPlaceholder.hide(),
            Publisher.editorInput.focus()
        }),
        Publisher.editorControls.on("click", function(e) {
            $(e.target).closest("a").length || (Publisher.editorPlaceholder.hide(),
            Publisher.editorInput.focus())
        }),
        Publisher.editorControls.find("a").each(function() {
            var e = $(this).attr("ka")
              , t = e.split("_")[2];
            _PAGE.runChat && $(this).data("optype", t).removeAttr("ka")
        }).on("click", function() {
            var e = $(this).data("optype");
            if (_PAGE.runChat && !Chat.curUserData.groupId)
                try {
                    _T.sendEvent("Geekchat_" + e + "_" + Chat.getPublicStatis().context + "_" + Chat.getPublicStatis().view + "_" + Chat.curUserData.uid)
                } catch (e) {}
            else
                __conversion("group_chat_enmoji")
        }),
        Publisher.submitBtn.on("click", function(e) {
            Publisher.sendText()
        }),
        $(document).on("click", function(e) {
            $(e.target).hasClass("btn-dict") || $(e.target).parents(".sentence-pannel").length || Publisher.editor.find(".sentence-pannel").remove()
        }),
        $(window).on("resize", function() {
            $(".dialog-around-default").is(":visible") && $(".dialog-around-default").hide()
        })
    },
    interviewNotice: function(e, t) {
        $.dialog({
            title: "",
            content: e.content,
            confirmText: e.confirmText,
            cancelText: e.cancelText || "我再想想",
            wrapClass: "dialog-wrap prop-consume interview-hint-wrap",
            inline: !0,
            onOpen: function() {},
            onConfirm: function(e) {
                return e.remove(),
                t()
            },
            onClose: function() {}
        })
    },
    invitation: function(e, t, i) {
        var s = function(e) {
            for (var e = e || [], t = 0; t < e.length; t++) {
                var i = e[t]
                  , s = new Date(i.appointTime);
                i.year = s.getUTCFullYear(),
                i.month = s.getUTCMonth(),
                i.day = s.getUTCDate(),
                i.time = s.getHours() + ":" + ("0" + s.getMinutes()).substr(-2, 2),
                i.date = i.year + "-" + ("0" + (i.month + 1)).substr(-2, 2) + "-" + i.day
            }
            return e
        };
        $.get("/bossweb/interview/valid/list.json", function(n) {
            var a = s(n.interviewList);
            $.dialog({
                title: "",
                content: InterviewTemplate.invitation(i),
                closeText: !1,
                confirmText: "发送",
                cancelText: "取消",
                preKa: "",
                wrapClass: "dialog-around-default dialog-chat-default dialog-interview-default " + t,
                position: "around",
                inline: !1,
                lock: !0,
                element: e,
                opacityLock: !0,
                onOpen: function(e) {
                    Publisher.invitationOpen(e, a)
                },
                onConfirm: function(e) {
                    Publisher.invitationConfirm(e, i, a)
                },
                onClose: function(e) {}
            })
        })
    },
    invitationOpen: function(e, t) {
        Chat.jobData = {},
        _self = e;
        var i = function() {
            var e = new Date
              , t = $('.interview-invitation input[name="date"]').val()
              , i = e.getFullYear() + ("0" + (e.getMonth() + 1)).substr(-2, 2) + ("0" + e.getDate()).substr(-2, 2);
            return t.replace(/-/g, "") === i
        }
          , s = function(e) {
            if (!i())
                return !0;
            var t = new Date
              , s = ("0" + t.getHours()).substr(-2, 2) + ("0" + t.getMinutes()).substr(-2, 2)
              , n = parseInt(s, 10) + 200
              , s = parseInt(e.replace(":", ""), 10);
            return s > n
        }
          , n = function(e) {
            var t = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30"]
              , i = ""
              , n = 0;
            $.each(t, function(t, n) {
                if (s(n)) {
                    i += "<li><span>" + n + "</span>";
                    e.filter(function(e) {
                        return e.time == n
                    }).length && (i += "已约面试"),
                    i += "</li>"
                }
            }),
            $(".interview-wrap .dropdown-minute .dropdown-menu ul").empty().html(i);
            var a = $(".interview-wrap .dropdown-minute .dropdown-menu li")
              , n = t.indexOf(a.eq(0).text()) > 2 ? 0 : 2;
            a.eq(n).click()
        };
        if (e.find(".ipt-datetimepicker").length) {
            var a = new Date
              , r = parseInt(a.getHours() + "" + a.getMinutes())
              , o = new Date;
            o.setDate(o.getDate() + 13),
            r > 1830 && a.setDate(a.getDate() + 1),
            nowYear = a.getFullYear(),
            nowMonth = a.getMonth() + 1,
            nowThisDate = a.getDate(),
            e.find(".ipt-datetimepicker").each(function() {
                var e = $(this)
                  , i = $(this).attr("data-format") || "yyyy-mm-dd";
                e.datetimepicker({
                    format: i,
                    startView: 2,
                    minView: 2,
                    inDate: t,
                    autoclose: 1,
                    startDate: nowYear + "-" + nowMonth + "-" + nowThisDate,
                    endDate: o,
                    todayBtn: 0
                }).on("changeDate", function() {
                    e.closest(".dropdown-wrap").removeClass("dropdown-menu-open");
                    var i = $('.interview-invitation input[name="date"]').val()
                      , s = t.filter(function(e) {
                        return e.date == i
                    });
                    n(s)
                })
            }),
            $(window).one("resize", function() {
                e.next(".datetimepicker").remove()
            }),
            n([])
        }
        $.ajax({
            type: "GET",
            url: "/chat/user/joblist.json",
            dataType: "JSON",
            data: null,
            success: function(e) {
                var t, e = e, i = "", s = _self.find('input[name="jobid"]');
                if (1 == e.rescode) {
                    for (t = 0; t < e.data.length; t++)
                        i += "<li " + (0 == t ? ' class="cur"' : "") + ' data-val="' + e.data[t].jobId + '">' + filterXss(e.data[t].jobName) + "</li>",
                        Chat.jobData[e.data[t].jobId] || (Chat.jobData[e.data[t].jobId] = {}),
                        Chat.jobData[e.data[t].jobId].jobName = filterXss(e.data[t].jobName),
                        Chat.jobData[e.data[t].jobId].address = filterXss(e.data[t].address),
                        0 == t && (_self.find(".tip-address").html(filterXss(e.data[t].address)),
                        s.val(e.data[t].jobId),
                        s.parent().find(".dropdown-select").text(Chat.jobData[e.data[t].jobId].jobName));
                    e.data.length < 1 && (i = '<li class="disabled">没有在线职位</li>'),
                    s.closest(".dropdown-wrap").find("ul").html(i),
                    s.val(),
                    s.closest(".dropdown-wrap").find("li").on("click", function() {
                        var e = $(this).attr("data-val");
                        _self.find(".tip-address").html(Chat.jobData[e].address),
                        $(this).closest(".dropdown-position").find(".dropdown-select").text($(this).text()),
                        $(this).parent().find("li").removeClass("cur"),
                        $(this).addClass("cur")
                    }),
                    _self.find('input[name="hour"]').closest(".dropdown-wrap").on("click", "li", function() {
                        var e = $(this).find("span").text()
                          , t = e.split(":");
                        $(this).closest(".dropdown-wrap").find('input[name="hour"]').val(t[0]),
                        $(this).closest(".dropdown-wrap").find('input[name="minute"]').val(t[1]),
                        $(this).closest(".dropdown-wrap").find('input[type="text"]').val(e)
                    })
                }
            },
            error: function(e) {}
        }),
        DropDown.init(e),
        _self.find(".data-manage .tip-text .name").text(Chat.curUserData.name),
        $(e).on("click", ".dropdown-position li", function() {
            $(e).find('input[name="jobid"]').val($(this).attr("data-val"))
        })
    },
    invitationConfirm: function(e, t, i) {
        var s = e
          , n = s.find('input[name="jobid"]').val()
          , a = s.find('input[name="date"]').val()
          , r = s.find('input[name="hour"]').val()
          , o = s.find('input[name="minute"]').val()
          , c = s.find('textarea[name="other"]').val();
        if ("" == n || "0" == n)
            return $.toast({
                content: "请选择职位",
                type: "warning"
            }),
            !1;
        if ("" == a)
            return $.toast({
                content: "请选择面试时间",
                type: "warning"
            }),
            !1;
        if ("" == r || "" == o)
            return $.toast({
                content: "请选择时段",
                type: "warning"
            }),
            !1;
        if (c.length > 140)
            return $.toast({
                content: "附加说明最多140字",
                type: "warning"
            }),
            !1;
        var l = function() {
            $.ajax({
                type: "POST",
                url: "/bossweb/interview/invite.json",
                dataType: "JSON",
                data: {
                    jobname: Chat.jobData[n].jobName,
                    jobid: n,
                    date: a,
                    hour: r,
                    minute: o,
                    address: Chat.jobData[n].address,
                    other: c,
                    uid: Chat.curUserData.uid,
                    name: Chat.curUserData.name,
                    sendmsg: 0
                },
                success: function(e) {
                    var e = e;
                    1 == e.rescode ? (Chat.usersData[Chat.curUserData.uid].isCloseInterview = !0,
                    s.remove()) : 3 == e.rescode ? (Chat.usersData[Chat.curUserData.uid].isCloseInterview = !0,
                    Chat.showSystemMessage(Chat.curUserData.uid, e.resmsg),
                    Publisher.editorControls.find(".btn-interview").addClass("disabled"),
                    s.remove()) : $.toast({
                        content: e.resmsg,
                        type: "error"
                    })
                },
                error: function(e) {
                    $.toast({
                        content: "操作失败，请稍后再试",
                        type: "error"
                    })
                }
            })
        }
          , d = function() {
            var e = r + ":" + o
              , s = i.filter(function(t) {
                return t.date == a && t.time == e
            });
            if (t.brokenAppointment)
                Publisher.interviewNotice({
                    title: "",
                    content: InterviewTemplate.warning({
                        article: "注意对方存在不良面试记录",
                        description: "对方近期出现过面试爽约的不良记录，如您要给对方发送 面试要求，建议在面试前与对方再次确认。"
                    }),
                    confirmText: "发送面试邀请"
                }, function() {
                    l()
                });
            else if (s.length) {
                var n = s[0];
                Publisher.interviewNotice({
                    title: "",
                    content: InterviewTemplate.warning({
                        article: "面试时间冲突提醒",
                        description: "你在 " + (n.month + 1) + "月 " + n.day + " 日 " + n.time + " 已约 " + n.geekName + " 面试 " + n.jobName + " 职位，建议合理安排面试日程，避免时间冲突。"
                    }),
                    cancelText: "重选时间",
                    confirmText: "继续"
                }, function() {
                    l()
                })
            } else
                l()
        };
        return function() {
            t.interviewCount < 1 || t.bossBrokenAppointment ? Publisher.interviewNotice({
                title: "",
                content: InterviewTemplate.hint(),
                confirmText: "接受"
            }, function() {
                d()
            }) : d()
        }(),
        !1
    },
    interviewPublish: function(e, t, i) {
        $.dialog({
            title: "",
            content: InterviewTemplate.condition(i),
            closeText: !1,
            confirmText: !1,
            cancelText: !1,
            preKa: "",
            wrapClass: "dialog-around-default dialog-chat-default dialog-interview-default " + t,
            position: "around",
            inline: !1,
            lock: !0,
            element: e,
            opacityLock: !0,
            onOpen: function(t) {
                t.on("click", ".J_reInvite", function() {
                    t.remove();
                    var s = e.hasClass("btn-interview") ? "dialog-up-default" : "dialog-down-default interview-message-dialog";
                    Publisher.invitation(e, s, i)
                })
            },
            onConfirm: function() {},
            onClose: function(e) {}
        })
    },
    interview: function(e, t) {
        var i = {
            "-1": "",
            0: "interview-waitreply",
            1: "interview-success",
            2: "interview-cancel",
            3: "interview-cancel",
            4: "interview-success",
            5: "interview-cancel",
            6: "interview-cancel",
            7: "",
            8: "interview-success",
            9: "interview-fail",
            10: "interview-fail"
        }
          , s = {
            0: "等待对方接受",
            1: "等待面试",
            2: "对方取消拒绝",
            3: "面试已取消",
            4: "面试已完成",
            5: "超时未接受",
            6: "面试已收回",
            7: "",
            8: "面试达成",
            9: "对方面试爽约",
            10: "面试爽约"
        }
          , n = function(e) {
            var t = new Date(e);
            return t.getFullYear() + "年" + (t.getMonth() + 1) + "月" + t.getDate() + "日  " + t.getHours() + ":" + (t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes())
        }
          , a = function(e) {
            try {
                _T.sendEvent(e)
            } catch (e) {}
        };
        (function() {
            var e = $.Deferred();
            return $.get("/bossweb/interview/info.json", {
                geekId: Chat.curUserData.uid
            }).success(function(t) {
                1 == t.rescode ? e.resolve(t) : $.toast({
                    type: "error",
                    content: t.resmsg
                })
            }),
            e
        }
        )().then(function(r) {
            if ("-1" == r.status) {
                Publisher.invitation(e, t, r);
                var o = r.brokenAppointment ? "green" : "red";
                a("chat_interview_click_" + o)
            } else
                r.style = i[r.status],
                r.article = s[r.status],
                r.interviewInfo.time = n(r.interviewInfo.appointmentTime),
                Publisher.interviewPublish(e, t, r),
                a("chat_interview_click")
        })
    },
    htmlConverToMessage: function(e) {
        var t = $("<div><div/>")
          , i = [];
        return t.append(e),
        t.find("img").each(function() {
            $(this).replaceWith($(this).data("key"))
        }),
        t.find("div").each(function() {
            i.push($(this).text())
        }),
        t.contents().filter(function() {
            return 1 == this.nodeType
        }).end().filter("div").remove(),
        $.trim(t.text() + i.join("\n"))
    },
    inserCurosrHtml: function(e, t) {
        var i = Publisher.editorInput.get(0);
        Publisher.editorInput.text().length;
        if ("getSelection"in window) {
            var s = window.getSelection();
            if (s && 1 === s.rangeCount) {
                i.focus();
                var n = s.getRangeAt(0)
                  , a = new Image;
                a.src = e,
                a.setAttribute("data-key", t),
                a.className = "emoj-insert",
                a.setAttribute("title", t.replace("[", "").replace("]", "")),
                n.deleteContents(),
                n.insertNode(a),
                n.collapse(!1),
                s.removeAllRanges(),
                s.addRange(n)
            }
        } else if ("selection"in document) {
            i.focus();
            var n = document.selection.createRange();
            n.pasteHTML('<img class="emoj-insert" data-key="' + t + '" title="' + t.replace("[", "").replace("]", "") + '" src="' + e + '">'),
            i.focus()
        }
    },
    sendText: function(e, t, i) {
        if (Chat.chatEl.find(".msg-item-unlock").length)
            return Chat.unlockMessages({
                from: "send"
            }),
            !1;
        var t = t
          , s = ""
          , e = e || Chat.curUserData
          , i = i || null;
        if (t)
            s = t;
        else {
            if (Publisher.editorInput.hasClass("btn-disabled"))
                return !1;
            s = Publisher.htmlConverToMessage(Publisher.editorInput.html());
            try {
                _T.sendEvent("Geekchat_send_" + Chat.getPublicStatis().context + "_" + Chat.getPublicStatis().view + "_" + e.uid)
            } catch (e) {}
            if ("" == s.replace(/[\n\s]/g, ""))
                return Publisher.editorInput.html(""),
                !1;
            if (s.length > 1e3)
                return alert("您输入的内容过长，请删减后再发送"),
                !1
        }
        var n = (new Date).getTime();
        if (Chat.sendTextMessage({
            tempID: _PAGE.uid + n,
            isSelf: !0,
            from: {
                uid: Chat.myselfData.uid,
                name: Chat.myselfData.name,
                avatar: Chat.myselfData.face
            },
            to: {
                uid: e.uid || e.groupId,
                encryptUid: e.encryptUid || (e.encryptGid ? e.encryptGid : "")
            },
            time: n,
            body: {
                type: i ? 20 : 1,
                text: s,
                sticker: i
            },
            mSource: "server",
            typeSource: "newSubmit",
            type: Chat.curUserData.groupId ? 2 : 1
        }),
        e.relationType && [6, 7, 8].indexOf(e.relationType) < 0) {
            var a = e.uid;
            Chat.usersData[a].relationType = 6,
            Chat.userList.length && Chat.userList.find(".cur").attr("class", "user-communication cur")
        }
        t || Chat.checkUserBlock() || (Publisher.editorInput.html(""),
        Publisher.submitBtn.addClass("btn-disabled"),
        Publisher.editorPlaceholder.show())
    },
    showSentence: function(e) {
        var t = '<div class="sentence-pannel"><h3 class="title"><a href="javascript:;" class="link-set">设置</a>常用语</h3><div class="sentence-blank">加载中...</div></div>'
          , s = Publisher.editorInput.get(0);
        $.ajax({
            url: "/setting/replyword/list.json",
            type: "GET",
            data: null,
            dataType: "JSON",
            timeout: 3e4,
            success: function(e) {
                var n = ""
                  , a = e.replyWords;
                if (e.rescode) {
                    if (a && a.length) {
                        for (i = 0; i < a.length; i++)
                            n += "<li>" + filterXss(a[i]) + "</li>";
                        t = '<div class="sentence-pannel"><h3 class="title"><a href="javascript:;" class="link-set">设置</a>常用语</h3><ul>' + n + "</ul></div>"
                    } else
                        t = '<div class="sentence-pannel"><h3 class="title"><a href="javascript:;" class="link-set">设置</a>常用语</h3><div class="sentence-blank"><a href="javascript:;" class="link-add">+添加常用语</a></div></div>';
                    $(t).appendTo(Publisher.editor).show(),
                    Publisher.editor.find(".sentence-pannel li").on("click", function() {
                        Publisher.editorInput.html(Publisher.editorInput.html() + $(this).text()),
                        Publisher.editor.find(".sentence-pannel").hide(),
                        Publisher.submitBtn.removeClass("btn-disabled"),
                        Publisher.setCursorEnd(s)
                    }),
                    Publisher.editor.on("click", ".sentence-pannel .link-set, .sentence-pannel .link-add", function() {
                        Menu.sideEl.find(".menu-account a").attr("data-url", "/boss/account/management?type=3").click(),
                        setTimeout(function() {
                            Menu.sideEl.find(".menu-account a").attr("data-url", "/boss/account/management")
                        }, 200)
                    })
                }
            },
            error: function(e) {}
        })
    },
    showTransmitCode: function(e) {
        var t = Chat.curUserData.encryptUid
          , i = Chat.curUserData.infoData.expectId
          , s = Chat.curUserData.jobId
          , n = $(".chat-controls .btn-transmit-resume");
        try {
            _T.sendEvent("wx_share")
        } catch (e) {}
        $.ajax({
            url: "/boss/share/geek.json",
            type: "GET",
            data: {
                geekId: t,
                expectId: i,
                jobId: s
            },
            dataType: "JSON",
            timeout: 3e4,
            success: function(e) {
                if (e.rescode) {
                    try {
                        _T.sendEvent("wx_share_qr")
                    } catch (e) {}
                    n.find(".transmit-code").remove();
                    var t = '<div class="transmit-code"><img src="' + e.qrUrl + '"><sapn>微信扫码  转发同事</span></div>';
                    $(t).appendTo(n).show(),
                    $(document).click(function(e) {
                        $(e.target).hasClass("transmit-code") || $(e.target).parents().hasClass("transmit-code") || n.find(".transmit-code").hide()
                    })
                } else
                    $.toast({
                        content: "获取二维码失败，请稍后再试",
                        type: "error"
                    })
            }
        })
    },
    showPosition: function(e) {
        if (e.hasClass("btn-position")) {
            var t = Publisher.editorControls.find(".btn-position");
            "show" == t.attr("link-show") && $.ajax({
                url: "/setting/notify/set.json",
                data: {
                    type: 18
                },
                type: "post",
                success: function(e) {
                    e.rescode && (t.find(".tips").hide(),
                    t.attr("link-show", "none"))
                }
            });
            (function() {
                var e = $.Deferred();
                return $.get("/chat/online/joblist.json", {
                    geekId: Chat.curUserData.uid
                }, function(t) {
                    1 == t.rescode ? e.resolve(t) : $.toast(t.msg, "error")
                }),
                e
            }
            )().then(function(t) {
                if (t.data.length) {
                    for (var i = t.data, s = "", n = "<p>" + i[0].positionName + " " + i[0].locationName + " " + i[0].lowSalary + "K-" + i[0].highSalary + "K </p>", a = 1; a < i.length; a++)
                        s += '<li data-id="' + i[a].encryptId + '" data-name="' + i[a].positionName + '" data-city="' + i[a].locationName + '">' + i[a].positionName + " " + i[a].locationName + " " + i[a].lowSalary + "K-" + i[a].highSalary + "K </li>";
                    var r = '<div class="chat-position-menu"><div>当前职位' + n + "</div><ul> " + s + "</ul></div>";
                    e.find(".chat-position-menu").remove(),
                    e.append(r),
                    e.find(".chat-position-menu").show(),
                    e.off("click").on("click", ".chat-position-menu li", function(e) {
                        e.stopPropagation(),
                        Publisher.changePosition($(this))
                    })
                }
            }),
            $(document).on("click", function(t) {
                $(t.target).hasClass("chat-position-menu") || $(t.target).parents().hasClass("chat-position-menu") || e.find(".chat-position-menu").hide()
            })
        }
    },
    changePosition: function(e) {
        var t = e.attr("data-id")
          , i = e.attr("data-name")
          , s = (e.attr("data-city"),
        {
            jobId: t,
            geekId: Chat.curUserData.uid
        })
          , n = Chat.chatList.find(".chat-info .tip-text .link-job");
        $.post("/chat/send/jobcard.json", s, function(s) {
            1 == s.rescode ? (e.parents(".chat-position-menu").hide(),
            n.attr("data-jobid", t),
            n.html(i)) : $.toast(s.msg, "error")
        })
    },
    showExchangeWeixin: function(e) {
        $.dialog({
            title: "确认与对方交换微信吗？",
            content: "",
            closeText: !1,
            confirmText: "确定",
            cancelText: "取消",
            preKa: "",
            wrapClass: "dialog-icons-default dialog-alert-default dialog-around-default dialog-up-default dialog-operate-wrap",
            position: "around",
            lock: !0,
            element: e,
            opacityLock: !0,
            onOpen: function(e) {
                e.find(".dialog-container").css({
                    "margin-left": "-150px"
                })
            },
            onConfirm: function(e) {
                Chat.exchangeWeixin(2, {
                    from: {
                        uid: Chat.curUserData.uid
                    }
                }),
                e.remove()
            },
            onClose: function(e) {}
        })
    },
    showExchangePhone: function(e) {
        $.dialog({
            title: "确认与对方交换电话吗？",
            content: "",
            closeText: !1,
            confirmText: "确定",
            cancelText: "取消",
            preKa: "",
            wrapClass: "dialog-icons-default dialog-alert-default dialog-around-default dialog-up-default dialog-operate-wrap",
            position: "around",
            lock: !0,
            element: e,
            opacityLock: !0,
            onOpen: function(e) {
                e.find(".dialog-container").css({
                    "margin-left": "-150px"
                })
            },
            onConfirm: function(e) {
                Chat.exchangePhone(2, {
                    from: {
                        uid: Chat.curUserData.uid
                    }
                }),
                e.remove()
            },
            onClose: function(e) {}
        })
    },
    showExchangeResume: function(e) {
        var e = e;
        e.hasClass("btn-resume"),
        $.dialog({
            title: "确定向牛人索取简历吗？",
            content: "",
            closeText: !1,
            confirmText: "确定",
            cancelText: "取消",
            preKa: "",
            wrapClass: "dialog-icons-default dialog-alert-default dialog-around-default dialog-operate-wrap",
            position: "around",
            lock: !0,
            element: e,
            opacityLock: !0,
            onOpen: function(t) {
                e.closest(".toggle-type").length ? t.find(".dialog-container").css({
                    "margin-left": "-117px",
                    "margin-top": "36px"
                }) : (t.addClass("dialog-up-default"),
                t.find(".dialog-container").css({
                    "margin-left": "-150px"
                }))
            },
            onConfirm: function(e) {
                Chat.exchangeResume(2, {
                    from: {
                        uid: Chat.curUserData.uid
                    }
                }),
                e.remove()
            },
            onClose: function(e) {}
        })
    },
    setCursorEnd: function(e) {
        if (window.getSelection) {
            e.focus();
            var t = window.getSelection();
            t.selectAllChildren(e),
            t.collapseToEnd()
        } else if (document.selection) {
            var t = document.selection.createRange();
            t.moveToElementText(e),
            t.collapse(!1),
            t.select()
        }
    }
};
noticeSwitch = {
    init: function() {
        var e = this;
        window.noticeIsClose = !!localStorageInstance("noticeisclose") && Boolean(localStorageInstance("noticeisclose")),
        window.noticeAudioIsClose = !!localStorageInstance("noticeaudioisclose") && Boolean(localStorageInstance("noticeaudioisclose")),
        this.box = $(".aside_nav_bar .btool"),
        this.setBox = this.box.find(".setbox"),
        this.box.find(".btn_settings").bind("click", function(t) {
            e.setBox.is(":hidden") ? (e.setBox.show(),
            bindObjOutsiteClick(e.setBox)) : (e.setBox.hide(),
            unbindObjOutsiteClick(e.setBox)),
            t.preventDefault()
        }),
        window.noticeIsClose && this.setBox.find(".desk").addClass("off").text("打开桌面通知"),
        window.noticeAudioIsClose && this.setBox.find(".audio").addClass("off").text("打开声音提醒"),
        this.setBox.find(".desk").bind("click", function(e) {
            window.noticeIsClose ? (window.noticeIsClose = !1,
            $(this).removeClass("off").text("关闭桌面通知")) : (window.noticeIsClose = !0,
            $(this).addClass("off").text("打开桌面通知")),
            localStorageInstance("noticeisclose", window.noticeIsClose),
            e.preventDefault()
        }),
        this.setBox.find(".audio").bind("click", function(e) {
            window.noticeAudioIsClose ? (window.noticeAudioIsClose = !1,
            $(this).removeClass("off").text("关闭声音提醒")) : (window.noticeAudioIsClose = !0,
            $(this).addClass("off").text("打开声音提醒")),
            localStorageInstance("noticeaudioisclose", window.noticeAudioIsClose),
            e.preventDefault()
        })
    }
},
$(function() {
    noticeSwitch.init()
}),
pageTitleStatus = {
    status: null,
    ani: null,
    aniTime: 500,
    set: function(e) {
        var t = this
          , i = "data:image/ico;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAC6wk3/usJN/7rCTf+6wk3/usFN/7nBS/+6wEz/usFL/7rAS/+5wU3/u8JP/7vBTf+6wk3/usJN/7rCTf+6wk3/u8JP/7vCT/+7wk//u8JP/7vDUP+8xFP/u8JR/7zCT/+8wlD/usFM/7e/Rf+8wk7/u8JP/7vCT/+7wk//u8JP/7rCTv+6wk7/u8JQ/7a+Q//S143/9/ju//f57v/6+vX/+fv1//Dy3v/R1Yz/usBK/7rCTv+6wk7/usJO/7rCTv+7w07/u8NO/7zEUf+2v0H/19uZ///////o6sX/3eGl/+Hksv/29+v//////9XZk/+4wEX/vMRQ/7vDTv+7w07/vcRP/73ET/++xVL/uMBD/9bblv//////y9B5/7K7Nv+4vkH/wshf//n68//z9eP/vcRR/73ETv+9xE//vcRP/7zET/+8xE//vcVS/7jAQ//X25b//////9DVhv+7wkr/vsZT/7rARf/t79X//Pz3/7/GVv+7w03/vcRQ/7zET/++xE//vsRP/7/FUv+6wUP/19uX///////P1IL/ucFE/7zDTf/N0nv//////+3w0v+9xE3/vsVQ/77FUP++xE//vsVQ/77FUP+/xlP/usFE/9jcmf//////9PXk/+/x2f/x8t7//P36//T15P/Kz3D/vMNK/7/GUv++xVD/vsVQ/77GUf++xlH/v8dU/7rCRf/Y3Zj///////T25P/v8dj/+Pnu//3+/f/T2Iz/usJE/7/HU/++xlH/vsZR/77GUf+/x1H/v8dR/8DIVP+7xET/2N2Y///////Q1oT/u8NG/8HHVf/s7cr//f79/8jOaf+9xkz/v8hS/7/HUf+/x1H/wMlQ/8DJUP/ByVP/u8VE/9nel///////0deE/77GSf+7w0H/0daE///////Y3Zj/u8VE/8HJU//AyVD/wMlQ/8DIU//AyFP/wclW/7zER//Z3Zf//////9LYhv+/xkr/xMpa/+frwf//////1dqQ/7zFSP/ByVb/wMhT/8DIU//ByVL/wclS/8HKVf+8xUb/3OCf///////8/Pf/+frz//39+///////7vDT/8LKV//AyVH/wclT/8HJUv/ByVL/wclT/8HJU//BylT/v8hN/87Udv/i5a7/4eWr/+Hlr//i5a3/2dyT/8TKVv/ByE//wcpU/8HJU//ByVP/wclT/8HKVP/BylT/wcpT/8LKVP/Ax03/vMVF/73FRf+9xUT/vcVE/7/HR//CyVP/wspU/8HKU//CylT/wcpU/8HKVP/Cy1P/wstT/8LLU//Cy1P/xcpV/8TMV//Fy1f/xMxW/8TLV//Ey1b/wspU/8PLU//Cy1P/wstT/8LLU//Cy1P/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==";
        if (faviconUrlNew = "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAC6wk3/usJN/7rCTf+6wk3/usFN/7nBS/+6wEz/usFL/7rAS/+5wU3/u8JP/7vBTf+6wk3/usJN/7rCTf+6wk3/u8JP/7vCT/+7wk//u8JP/7vDUP+8xFP/u8JR/7zCT/+8wlD/usFM/7e/Rf+8wk7/u8JP/7vCT/+7wk//u8JP/7rCTv+6wk7/u8JQ/7a+Q//S143/9/ju//f57v/6+vX/+fv1//Dy3v/R1Yz/usBK/7rCTv+6wk7/usJO/7rCTv+7w07/u8NO/7zEUf+2v0H/19uZ///////o6sX/3eGl/+Hksv/29+v//////9XZk/+4wEX/vMRQ/7vDTv+7w07/vcRP/73ET/++xVL/uMBD/9bblv//////y9B5/7K7Nv+4vkH/wshf//n68//z9eP/vcRR/73ETv+9xE//vcRP/7zET/+8xE//vcVS/7jAQ//X25b//////9DVhv+7wkr/vsZT/7rARf/t79X//Pz3/7/GVv+7w03/vcRQ/7zET/++xE//vsRP/7/FUv+6wUP/19uX///////P1IL/ucFE/7zDTf/N0nv//////+3w0v+9xE3/vsVQ/77FUP++xE//vsVQ/77FUP+/xlP/usFE/9jcmf//////9PXk/+/x2f/x8t7//P36//T15P/Kz3D/vMNK/7/GUv++xVD/vsVQ/77GUf++xlH/v8dU/7rCRf/Y3Zj///////T25P/v8dj/+Pnu//3+/f/T2Iz/usJE/7/HU/++xlH/vsZR/77GUf+/x1H/v8dR/8DIVP+7xET/2N2Y///////Q1oT/u8NG/8HHVf/s7cr//f79/8jOaf+9xkz/v8hS/7/HUf+/x1H/wMlQ/8DJUP/ByVP/u8VE/9nel///////0deE/77GSf+7w0H/0daE///////Y3Zj/u8VE/8HJU//AyVD/wMlQ/8DIU//AyFP/wclW/7zER//Z3Zf//////9LYhv+/xkr/xMpa/+frwf//////vMGb/zI3w/8IDOn/MzjG/6mwZv/ByVL/wclS/8HKVf+8xUb/3OCf///////8/Pf/+frz//39+///////7vDT/zQ4x/8AA/D/AAPw/wAD8P8wNcj/wclT/8HJU//BylT/v8hN/87Udv/i5a7/4eWr/+Hlr//i5a3/2dyT/8TKVv8JDOj/AAPw/wAD8P8AA/D/BQjs/8HKVP/BylT/wcpT/8LKVP/Ax03/vMVF/73FRf+9xUT/vcVE/7/HR//CyVP/NDjG/wAD8P8AA/D/AAPw/zA1yf/Cy1P/wstT/8LLU//Cy1P/xcpV/8TMV//Fy1f/xMxW/8TLV//Ey1b/wspU/6yzZf80Ocb/CQzp/zQ5xv+rs2X/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        isIE && (i = _PAGE.assetUrl + "images/1.5/favicon.ico",
        faviconUrlNew = _PAGE.assetUrl + "images/1.5/favicon1.ico"),
        this.favicon || ($("#favicon").length ? this.favicon = $("#favicon") : this.favicon = $('<link rel="icon" id="favicon" type="image/x-icon">').attr("href", i).appendTo("html>head")),
        this.text = "",
        e) {
            if (this.text = "(" + e + ")",
            document.title = "BOSS直聘" + this.text,
            !this.ani) {
                var s = !0;
                this.ani = setInterval(function() {
                    t.favicon.attr("href", s ? i : faviconUrlNew),
                    s = !s
                }, this.aniTime)
            }
        } else
            this.ani && (clearInterval(this.ani),
            this.ani = null),
            t.favicon.attr("href", i),
            document.title = "BOSS直聘"
    },
    clear: function() {
        this.status && (this.status = null),
        this.ani && clearInterval(this.ani)
    }
},
chatNotification = {
    data: {},
    dataArray: [],
    dataHistory: [],
    show: function(e, t, i) {
        if (!(_PAGE.debug && this.num || (this.num = !0,
        window.noticeIsClose || window.isFocus))) {
            window.isIE || window.noticeAudioIsClose || this.audio || (this.audio = document.createElement("audio"),
            this.audio.src = "https://img.bosszhipin.com/audio/message.mp3",
            this.audio.preload = "auto",
            this.audio.load());
            var s = this;
            this.Notification = window.Notification || window.mozNotification || window.webkitNotification,
            this.Notification && ("granted" == this.Notification.permission ? s.handler(e, t, i) : this.Notification.requestPermission(function(n) {
                if ("granted" !== n)
                    return !1;
                s.handler(e, t, i)
            }))
        }
    },
    handler: function(e, t, i) {
        var s = this
          , n = this.formatMessage(i);
        if (n) {
            window.noticeAudioIsClose || this.audio.play();
            var a = new this.Notification(e,{
                body: this.formatText(n),
                icon: t,
                tag: "replace",
                renotify: !0
            });
            this.data[i.mid] = a,
            this.dataArray.push(i.mid),
            a.onclick = function() {
                if (i.isSelf)
                    var e = i.to.uid;
                else
                    var e = i.from.uid;
                "undefined" != typeof DeskNotice && DeskNotice.messageCard(),
                $(".menu-chat").hasClass("cur") || $(".menu-chat a").click();
                try {
                    _T.sendEvent("notice_window_click_" + e)
                } catch (e) {}
                a.close(),
                window.focus()
            }
            ,
            a.onerror = function() {}
            ,
            a.onshow = function() {
                "undefined" != typeof DeskNotice && DeskNotice.messageNotice(),
                setTimeout(function() {
                    a.close()
                }, 5e3)
            }
            ,
            a.onclose = function() {
                delete s.data[i.mid];
                for (var e = 0; e < s.dataArray.length; e++)
                    s.dataArray[e] == i.mid && s.dataArray.splice(e, 1)
            }
        }
    },
    messageTypes: {
        text: {
            types: [1, 1, 1],
            result: function(e) {
                return e.isSelf ? null : e.body.text
            }
        },
        voice: {
            types: [1, 2],
            result: function(e) {
                return e.isSelf ? null : "[收到语音消息，请登录APP端查收]"
            }
        },
        image: {
            types: [1, 3],
            result: function(e) {
                return e.isSelf ? null : "[收到图片消息，请登录APP端查收]"
            }
        },
        redEnvelope: {
            types: [3, 10],
            result: function(e) {
                if (!e.isSelf)
                    return "[收到红包消息，请登录APP端查收]"
            }
        },
        getSystemText: {
            types: [3, 1, 1],
            result: function(e) {
                return e.isSelf ? null : e.body.text
            }
        },
        getSystemMessage: {
            types: [3, 1],
            result: function(e) {
                return e.body.text
            }
        },
        interview: {
            types: [1, 7, 4],
            result: function(e) {
                return null
            }
        },
        dialogMessage: {
            types: [1, 7, 0],
            result: function(e) {
                return e.body.dialog.title && e.body.dialog.title.indexOf("面试邀请") > -1 ? null : e.isSelf ? null : e.body.dialog.text
            }
        },
        dialogWeixin: {
            types: [1, 7, 1],
            result: function(e) {
                return e.isSelf ? null : e.body.dialog.text
            }
        },
        dialogResume: {
            types: [1, 7, 2],
            result: function(e) {
                return e.isSelf ? null : e.body.dialog.text
            }
        },
        agreeInterview: {
            types: [3, 4, 47],
            result: function(e) {
                return e.from.name + "接受了您的面试邀请。"
            }
        }
    },
    formatMessage: function(e) {
        var t = this;
        for (var i in this.messageTypes) {
            var s = this.messageTypes[i]
              , n = s.types;
            if (n[0] == e.type && n[1] == e.body.type)
                if (1 == n[0] && 7 == n[1]) {
                    if (n[2] == e.body.dialog.type)
                        return s.result.call(t, e)
                } else if (3 == n[0] && 4 == n[1]) {
                    if (n[2] == e.body.action.aid)
                        return s.result.call(t, e)
                } else {
                    if (3 != n.length)
                        return s.result.call(t, e);
                    if (n[2] == e.body.templateId)
                        return s.result.call(t, e)
                }
        }
        return null
    },
    formatText: function(e) {
        return e = e.replace(/&nbsp;/gi, " ").replace(/\[[a-zA-Z\u4e00-\u9fa5]{1,3}\]/g, "[表情]"),
        e.match(/./g).length > 18 && (e = e.substring(0, 18) + "..."),
        e
    }
};
var Chat = {
    init: function() {
        Chat.homeUrl = "/user/login.html",
        Chat.containerEl = $("#container"),
        Chat.containerChat = $(".chat-container"),
        Chat.userList = Chat.containerChat.find(".user-list"),
        Chat.resumeContainer = Chat.containerChat.find(".resume-container"),
        Chat.attachContainer = Chat.containerChat.find(".attachment-container"),
        Chat.chatBox = $(".chat-box"),
        Chat.chatList = $(".chat-list"),
        Chat.chatListCon = Chat.chatList.find("ul"),
        Chat.chatEl = Chat.containerChat.find(".chat-wrap"),
        Chat.welcomeEl = $(".chat-weclcome"),
        Chat.tabcontentEls = Chat.chatEl.find(".chat-tab-content"),
        Chat.opTopEls = $(".detail-top .op"),
        Chat.setTopEl = Chat.opTopEls.find(".op-settop"),
        Chat.editorEl = $(".chat-editor"),
        Chat.toggleTypeEl = $(".toggle-type"),
        Chat.usersInitStatus = !1,
        Chat.messageStatusData = {},
        Chat.messageStatusDataTemp = {},
        Chat.unReadMessage = {},
        Chat.receiveMaxId = -1,
        Chat.mids = {},
        Chat.usersDataDelete = {},
        Chat.usersData = {},
        Chat.newGeek = [],
        Chat.usersID = [],
        Chat.filterRadio = !1,
        Chat.filterGroup = !1,
        Chat.tops = [],
        Chat.notification = {
            1: [],
            5: [],
            6: [],
            7: [],
            8: []
        },
        Chat.prevUid = "",
        Chat.drafts = [],
        Chat.groupStatus = -1,
        Chat.groupHistory = {},
        Chat.groupLastModify = {},
        Chat.xhrs = {},
        Chat.batchHandle = Chat.batchUserHandle(),
        Chat.websocketConnected = !1,
        Chat.chatHistoryData = {},
        Chat.usersTempData = [],
        Chat.userFilterTempData = [],
        Chat.users = Chat.userList.find("li"),
        Chat.userlistPageTotal = 100,
        Chat.userListMain = Chat.userList.find(".main-list"),
        Chat.userListTop = Chat.userList.find(".top-list"),
        Chat.tipsContainer = $(".chat-container .data-tips"),
        Chat.detailContainer = $(".chat-container .detail-box"),
        Chat.offlineMessages = [],
        Chat.ControlsEl = Chat.chatBox.find(".chat-controls"),
        Chat.directionEl = $(".chat-sider"),
        Chat.chatList.prepend('<div class="pre-loading"><span class="loading-more"><i></i><i></i><i></i></span></div>'),
        Chat.hisLoading = Chat.chatList.find(".pre-loading"),
        Chat.curUserData = {},
        Chat.usersDataForJob = {},
        Chat.unreadCountBox = $(".menu-chat-badge"),
        Chat.unreadMessageCount = 0,
        Chat.newNumber = 0,
        Chat.propMessages = [],
        PageSet.hasShowReplyTip = !1,
        Chat.outputData = {
            30: {
                count: 0
            },
            31: {
                count: 0
            },
            35: {
                count: 0
            }
        },
        Chat.chatUserCount = 0,
        Chat.userlistMoreEl = Chat.userList.find(".loadmore"),
        Chat.userlistPage = 1,
        Chat.userlistRenderPage = 0,
        Chat.userlistMore = !1,
        Chat.getUserList(Chat.userlistPage),
        Chat.isLoading = !1,
        Emotion.getSticker().then(function(e) {
            Chat.storedEmtions = e
        }),
        Chat.filterParms = {
            page: 0,
            status: "",
            origin: "",
            jobid: "",
            salary: 0,
            experience: 0,
            degree: 0
        },
        Chat.myselfData = {
            uid: _PAGE.uid,
            name: _PAGE.name,
            face: _PAGE.face,
            email: _PAGE.email
        },
        chatNotification.chat = this,
        Chat.containerChat.find(".sec-operate").addClass("operate-disabed").on("click", function() {
            if ($(this).hasClass("operate-disabed"))
                return !1
        }),
        Chat.containerChat.find(".sec-operate").on("click", ".dropdown-select", function(e) {
            return $(this).closest(".sec-operate").hasClass("operate-disabed") && $(this).parent().removeClass("dropdown-menu-open"),
            !1
        }),
        localStorageInstance("recommend-pos") && localStorageInstance("recommend-pos", ""),
        Menu.isSuportCalc || ($("body").addClass("no-calc"),
        Chat.containerChat.find(".sec-content").css("height", $(window).height() - 132 + "px"),
        Chat.userList.css("height", $(window).height() - 176 + "px"),
        Chat.chatList.css("height", $(window).height() - 329 + "px"),
        Chat.containerChat.find(".data-tips").css("height", $(window).height() - 132 + "px"),
        Chat.containerChat.find(".resume-container").css("height", $(window).height() - 236 + "px"),
        Chat.containerChat.find(".attachment-container").css("height", $(window).height() - 236 + "px")),
        _PAGE.runChat && "172.16.0.44" != window.location.host && (Chat.protobufMessage = new ProtobufMessage(this),
        ChatWebsocket.init()),
        "undefined" != typeof DeskNotice && $(".top-user .link-signout").on("click", function() {
            DeskNotice.messageLogout()
        }),
        setTimeout(function() {
            var e = window.screen.width
              , t = window.screen.height
              , i = window.innerWidth
              , s = window.innerHeight;
            Chat.sendTrackEvent("screen_boss_" + e + "_" + t + "_avail_" + i + "_" + s + "_" + _PAGE.uid)
        }, 3e3),
        $("#container").scrollbar();
        var e = Chat.userlistMoreEl.get(0);
        Chat.userList.on("scroll", function() {
            Chat.userFilterTempData && (Chat.userlistTimer && clearTimeout(Chat.userlistTimer),
            Chat.userlistTimer = setTimeout(function() {
                !Chat.isLoading && isVisiable(e) && !Chat.userlistMoreEl.hasClass("disabled") && Chat.userlistMoreEl.is(":visible") && (Chat.userlistRenderPage++,
                Chat.renderUserList(Chat.userFilterTempData, Chat.userlistRenderPage))
            }, 200))
        }),
        Chat.userlistMoreEl.on("click", function() {
            $(this).hasClass("disabled") || (Chat.userlistRenderPage++,
            Chat.renderUserList(Chat.userFilterTempData, Chat.userlistRenderPage))
        }),
        Chat.containerChat.find(".op-category .group-more").on("click", "li", function() {
            $(this).hasClass("item-help") && Chat.showOperateHelp($(this))
        }),
        $("#unrecognized-tip").length ? (setTimeout(function() {
            Chat.sendKaEvent("go_certi_block")
        }, 2e3),
        $.dialog({
            title: "",
            content: $("#unrecognized-tip").prop("outerHTML"),
            confirmText: "",
            cancelText: "",
            closeText: !1,
            closeLayer: !1,
            element: $("#unrecognized-tip"),
            wrapClass: "dialog-unrecognized",
            lock: !0,
            onOpen: function(e) {
                var t = e.find(".img-wrap");
                t.html('<img src="' + t.attr("data-url") + '">')
            },
            onConfirm: function(e) {},
            onClose: function(e) {}
        })) : $("#approveBag").length && $.dialog({
            title: "",
            content: $("#approveBag").prop("outerHTML"),
            confirmText: "领取权益礼包",
            cancelText: "",
            closeText: !1,
            closeLayer: !1,
            wrapClass: "dialog-approve-bag",
            lock: !0,
            onOpen: function(e) {},
            onConfirm: function(e) {
                $.get("/bossweb/vip/receivedailygift.json").success(function() {}),
                e.remove(),
                $.toast({
                    type: "success",
                    content: "领取成功！"
                })
            },
            onClose: function(e) {}
        });
        var t = function() {
            Chat.chatEl.find(".chat-list").css("visibility", "hidden"),
            Chat.chatEl.find(".chat-wrap-mask").remove(),
            Chat.chatEl.append($('<div class="chat-wrap-mask"></div>')),
            Chat.tabcontentEls.find(".suspend-bar").remove()
        };
        if (Chat.userList.on("click", "li a", function(e) {
            e.preventDefault();
            var i = $(this)
              , s = Chat.getGroupStatus();
            if (s) {
                var n = Chat.groupHistory[s]
                  , a = $(this).attr("data-uid")
                  , r = Chat.usersData[a] ? Chat.usersData[a] : ChatGroups.get(a);
                if (!r)
                    return;
                Chat.groupHistory[s] = a,
                !Chat.groupLastModify[s] || Chat.groupLastModify[s] == a || -1 != s && 5 != s || (chatUserPresenter.setStatus(Chat.groupLastModify[s], 6, !1),
                Chat.groupLastModify[s] = void 0,
                Chat.usersData[a].relationType = 6),
                r.newMsgCount && 5 == s && $(this).parent("li").addClass("modify"),
                chatUserPresenter.viewed(n, a)
            }
            Chat.renderTimer && clearTimeout(Chat.renderTimer),
            Chat.renderTimer = setTimeout(function() {
                t(),
                1 == i.attr("data-group") ? (Chat.renderGroupBox(i),
                Chat.chatEl.addClass("chat-group-wrap"),
                __conversion("group_chat_" + i.attr("data-uid"))) : (Chat.chatEl.removeClass("chat-group-wrap"),
                Chat.renderBox(i.attr("data-uid"), i.attr("data-eid"), i, null, e))
            }, 50),
            Chat.prevUid = Chat.curUserData.uid ? Chat.curUserData.uid : Chat.curUserData.groupId
        }),
        Chat.detailContainer.on("click", "a._systemEvent", function() {
            var e = $(this);
            ChatRecord.initChatRecords(e).then(function(e) {
                ChatRecord.renderChatRecordsPopup(e.htmlList)
            })
        }),
        Chat.tabcontentEls.on("click", ".suspend-bar .btn-unlock-geek", function() {
            Chat.checkUserBlock() && GeekHotProp.shop(Chat.curUserData.infoData.page, {
                callBack: Chat.ublockBlockGeek
            })
        }),
        Chat.setTopEl.on("click", function(e) {
            var t = $(this);
            Chat.setTop(t)
        }),
        Chat.chatEl.on("click", ".msg-item-unlock", function() {
            Chat.unlockMessages({
                from: "received"
            })
        }),
        Chat.userList.on("mouseover", "li", function(e) {
            var t = $(this)
              , i = t.find(".title")
              , s = i.find(".user-operation div")
              , n = t.offset().left + t.outerWidth()
              , a = t.offset().top;
            i.addClass("opacitas"),
            s.css({
                left: n,
                top: a
            })
        }),
        Chat.userList.on("mouseout", "li", function(e) {
            $(this).find(".title").removeClass("opacitas")
        }),
        Chat.userList.on("click", ".user-operation .user-operation-item", function(e) {
            var t = $(this);
            "delete" == t.attr("data-type") ? Chat.deleteLinkman(t) : Chat.changeTop(t),
            e.preventDefault(),
            e.stopPropagation()
        }),
        Chat.canShowStickerMessage = !1,
        document.addEventListener("visibilitychange", function() {
            "hidden" == document.visibilityState ? Chat.canShowStickerMessage = !0 : "visible" == document.visibilityState && (Chat.canShowStickerMessage = !1,
            Chat.Sticker.clear())
        }),
        Chat.toggleTypeEl.on("click", "span", function(e) {
            var i = $(this)
              , s = i.index();
            if (!i.parent().hasClass("dropdown-wrap")) {
                if (2 == s && i.hasClass("gray"))
                    return void i.parent().find(".dropdown-wrap").show();
                i.parent().children().removeClass("cur"),
                i.addClass("cur"),
                Chat.containerChat.find(".sel-type").removeClass("dropdown-open"),
                Chat.tabcontentEls.removeClass("show-box"),
                Chat.tabcontentEls.eq(s).addClass("show-box"),
                "chat-box" == i.attr("data-target") && Publisher.editorInput.focus(),
                0 != s || e.isTrigger || Chat.sendKaEvent("Geekshow_tab_" + Chat.getPublicStatis().context + "_" + Chat.getPublicStatis().view + "_" + Chat.curUserData.uid),
                s > 0 ? Chat.chatEl.find(".detail-bottom").show() : Chat.chatEl.find(".detail-bottom").hide(),
                1 == s && (t(),
                Resume.loadDetail(Chat.userList.find(".cur a").attr("href"), Chat.resumeContainer, e.isTrigger)),
                2 == s && (t(),
                Resume.loadAttachment(i.attr("data-url") + Chat.userList.find(".cur a").attr("data-eid") + ".json", Chat.attachContainer, e.isTrigger))
            }
        }),
        Chat.toggleTypeEl.on("click", 'li[data-type="resume"]', function() {
            Publisher.showExchangeResume($(this).closest(".dropdown-wrap").find(".dropdown-label"))
        }),
        Chat.opTopEls.on("click", ".dropdown-label", function() {
            Chat.getTopInfo($(this))
        }),
        Chat.containerChat.on("click", ".detail-bottom .btn, .detail-bottom .btns a, .chat-controls .links a", function() {
            if ($(this).hasClass("link-chat") && Chat.toggleTypeEl.find("span[data-target=chat-box]").trigger("click"),
            !$(this).hasClass("cur"))
                return $(this).hasClass("link-fail") ? void Chat.mismatching($(this)) : void Chat.workflowTip($(this))
        }),
        $(document).on("click", function(e) {
            0 == $(e.target).parents(".dropdown-open").length && $(".dropdown-open").removeClass("dropdown-open")
        }),
        Chat.chatListCon.on("click", ".interview-card", function() {
            Chat.getInterviewDetail($(this).attr("data-id"))
        }),
        Chat.chatListCon.on("click", ".img-tiny", function() {
            $(this).attr("data-large") && Chat.viewLargeImage($(this))
        }),
        Chat.chatListCon.on("click", ".btn-store", function() {
            var e = $(this);
            Emotion.storeEmotion(e)
        }),
        Chat.chatListCon.on("click", ".item-file .text", function() {
            Chat.viewFullResume($(this).find("p").attr("data-origin"))
        }),
        Chat.chatEl.on("click", ".link-job", function() {
            var e = $(this)
              , t = e.attr("data-jobid")
              , i = "/bossweb/job/" + t + ".html";
            $.toast({
                content: "正在加载职位详情...",
                type: "loading"
            });
            var s = function(t) {
                window.top.$.dialog({
                    title: "",
                    content: t,
                    closeText: !0,
                    confirmText: "确定",
                    cancelText: !1,
                    wrapClass: "dialog-layer-full dialog-resume-full pop-position-detail",
                    lock: !0,
                    onOpen: function(t) {
                        t.find(".dialog-footer .btns").prepend(e.closest("li").find(".icon-coop").clone()),
                        t.find(".dialog-con").on("click", function(e) {
                            $(e.target).parents(".dialog-con").length || t.remove()
                        })
                    },
                    onConfirm: function(e) {
                        e.remove()
                    }
                })
            };
            $.get(i).success(function(e, t, i) {
                var n;
                n = "error" == t ? '<div class="data-tips"><div class="data-blank"><i class="tip-errordata"></i><b>数据加载出错</b></div></div>' : e,
                setTimeout(function() {
                    $("#toast").remove(),
                    n = '<div class="resume-dialog">' + n + "</div>",
                    s(n)
                }, 500)
            })
        }),
        Chat.directionEl.on("click", "a", function() {
            Chat.changeUserView($(this))
        }),
        Chat.resumeContainer.on("click", ".link-getphone", function() {
            var e = $(this);
            e.hasClass("disabled") || $.confirm({
                content: "确认与对方交换电话吗？",
                title: "温馨提示",
                closeIcon: !0,
                columnClass: "",
                onOpen: function() {},
                confirm: function() {
                    Chat.exchangePhone(2, {
                        from: {
                            uid: Chat.curUserData.uid
                        }
                    }),
                    e.text("已发出请求").addClass("disabled")
                },
                error: function(e) {}
            })
        }),
        Chat.chatEl.on("click", ".item-base img, .item-friend .figure img", function() {
            if (Chat.curUserData.groupId)
                return !1;
            var e = !!Chat.curUserData.groupId
              , t = e ? Chat.curUserData.groupId : Chat.curUserData.uid
              , i = Chat.usersData[t] ? Chat.usersData[t].infoData.largeAvatar : $(this).attr("src").replace("_s", "")
              , s = Chat.usersData[t] ? Chat.usersData[t].infoData.name : $(this).parents("li").find(".item-name").text()
              , n = '<div class="figure-preview"><div class="figure-mask">' + s + '</div><img src="' + i + '" /></div>';
            $.dialog({
                title: "",
                content: n,
                confirmText: !1,
                cancelText: !1,
                preKa: "",
                wrapClass: "dialog-figure-preview",
                lock: !0,
                opacityLock: !0,
                onOpen: function(e) {},
                onConfirm: function(e) {},
                onClose: function(e) {}
            })
        }),
        window.localStorage)
            for (var i = 0; i < localStorage.length; i++)
                localStorage.key(i).indexOf("/chatws:ws-") > -1 && localStorage.removeItem(localStorage.key(i));
        Chat.initSearch(),
        Chat.initGroupChat(),
        Chat.chatEl.on("click", ".show-item", function() {
            $(this).hide(),
            $(this).parents(".item-container").addClass("item-all")
        }),
        PageSet.getTipData(function(e) {
            e.rescode && e[18] && (Chat.chatEl.find(".btn-position").attr("link-show", "show"),
            Chat.chatEl.find(".btn-position .tips").show())
        }),
        Chat.chatEl.find(".btn-position .tips em").on("click", function(e) {
            try {
                _T.sendEvent("pop_position_sure")
            } catch (e) {}
            e.stopPropagation();
            var t = $(this);
            $.ajax({
                url: "/setting/notify/set.json",
                data: {
                    type: 18
                },
                type: "post",
                success: function(e) {
                    e.rescode && t.parents(".tips").hide()
                }
            })
        })
    },
    XssText: function(e) {
        return ("" + e).replace(/</g, "&#60;").replace(/>/g, "&#62;").replace(/\n/g, "<br/>").replace(/\\n/g, "<br/>").replace(/&amp;middot;/g, "&#183;").replace(/&amp;lt;/g, "&#60;").replace(/&amp;gt;/g, "&#62;").replace(/&lt;/g, "&#60;").replace(/&gt;/g, "&#62;").replace(/&middot;/g, "")
    },
    mismatching: function(e) {
        var t = function(e) {
            return Utemplate('<div class="subhead"><h4>觉得「<%this.name%>」不合适？</h4><p class="gray">选择不合适的原因，以减少此类求职者的推荐</p></div><ul><%for(var i=0;i<this.list.length;i++){%><li data-reason="<%this.list[i].reasonType%>"><%this.list[i].notifyDesc%><%if(this.list[i].sendMsg != 0 && this.list[i].msgContent){%><i class="icon-config"></i><%}%><%if(this.list[i].sendMsg != 0 && this.list[i].msgContent){%><div class="config-text"><%this.list[i].msgContent%></div><%}%></li><%}%></ul>', {
                name: Chat.curUserData.name,
                list: e
            })
        };
        e.addClass("unfold"),
        function() {
            var e = $.Deferred();
            return $.get("/setting/notokreason.json", function(t) {
                e.resolve(t.data)
            }),
            e
        }().then(function(i) {
            $.dialog({
                title: "",
                content: t(i),
                closeText: !1,
                confirmText: !1,
                cancelText: !1,
                preKa: "",
                wrapClass: "dialog-around-default dialog-up-default dialog-link-fail",
                position: "around",
                lock: !0,
                element: e,
                opacityLock: !0,
                onOpen: function(t) {
                    t.find("li").on("click", function() {
                        e.attr("data-reason", $(this).attr("data-reason")),
                        Chat.workflowTip(e, null, $(this).attr("data-reason")),
                        t.remove(),
                        e.removeClass("unfold")
                    })
                },
                onClose: function() {
                    e.removeClass("unfold")
                }
            })
        })
    },
    getGroupStatus: function() {
        return Chat.containerChat.find(".op-category .cur").attr("data-status")
    },
    getQueryParams: function() {
        var e = $(".top-chat .dropdown-select")
          , t = Chat.containerChat.find(".op-category .cur")
          , i = $(".condition-filter dl");
        return {
            status: t.attr("data-status") || "-1",
            origin: t.attr("data-origin") || "-1",
            jobid: e.attr("data-jobid") || "-1",
            salary: i.eq(0).find(".cur").attr("data-salary"),
            experience: i.eq(1).find(".cur").attr("data-experience"),
            degree: i.eq(2).find(".cur").attr("data-degree")
        }
    },
    getDraft: function(e) {
        Chat.drafts = function() {
            var e = sessionStorage.getItem("__Chat__Drafts");
            return "" == e || null == e || void 0 == e ? [] : $.parseJSON(e)
        }();
        var t = Chat.drafts.filter(function(t) {
            return t.uid == e
        });
        return t.length ? t[0] : {}
    },
    deleteDraft: function(e) {
        if (e) {
            var t = Chat.drafts.find(function(t) {
                return t.uid == e
            });
            if (t) {
                var i = Chat.drafts.indexOf(t);
                Chat.drafts.splice(i, 1)
            }
            sessionStorage.setItem("__Chat__Drafts", __stringify(Chat.drafts))
        }
    },
    setDraft: function(e) {
        var e = e || Chat.prevUid
          , t = Publisher.editorInput.html()
          , i = Publisher.htmlConverToMessage(t).replace(/</g, "&#60;").replace(/>/g, "&#62;");
        if (e) {
            var s = Chat.getDraft(e);
            if (s.uid) {
                var n = Chat.drafts.indexOf(s);
                Chat.drafts.splice(n, 1)
            }
            if (e && i && "" != $.trim(i)) {
                Chat.drafts.push({
                    uid: e,
                    text: i,
                    content: t
                });
                var a = Chat.userList.find('a[data-uid="' + e + '"]').find(".title .draft");
                a.length || (a = $('<p class="draft"></p>'),
                Chat.userList.find('a[data-uid="' + e + '"]').find(".title").append(a)),
                a.html("<i></i>" + i)
            }
            !e || i && "" != i || Chat.userList.find('a[data-uid="' + e + '"]').find(".title .draft").remove(),
            sessionStorage.setItem("__Chat__Drafts", __stringify(Chat.drafts))
        }
    },
    addTip: function() {
        var e = Chat.containerChat.find(".op-category .cur")
          , t = e.attr("data-status") ? e.attr("data-status") : 101
          , i = e.attr("data-status") ? e.attr("data-status") : "10" + e.attr("data-origin")
          , s = {
            "-1": "在「<span>全部</span>」中，可以找到近30天的联系人",
            1: "首次给你发消息的牛人可以方便的在「<span>新牛人</span>」中统一处理",
            5: "「<span>新牛人</span>」中包含所有你未回复的牛人",
            6: "和你聊过的牛人，将会自动归档在「<span>沟通中</span>」方便你继续沟通哦～",
            7: "聊得来的牛人很可贵，把他们标记为「<span>合适</span>」吧",
            8: "被标记为「<span>不合适</span>」的牛人，你将不会再收到Ta的新消息提示",
            101: '来自同事推荐等功能全部收集在「<span><i class="icon-category-vdot"></i></span>」里面，进去看看吧'
        }
          , n = Chat.filterRadio ? " selected" : ""
          , a = Chat.filterGroup ? "selected" : ""
          , r = Chat.filterGroup || Chat.filterRadio ? "" : "selected"
          , o = ChatGroups.list.length ? '<span class="group-check ' + a + '">群聊</span>' : '<span class="group-check ' + a + '" style="display: none;">群聊</span>'
          , c = {
            "-1": '<span class="' + r + '">全部</span>' + o + '<span class="unread-check' + n + '">待回复</span>',
            1: "新牛人",
            5: "新牛人",
            6: "沟通中牛人",
            7: "合适牛人",
            8: "不合适牛人",
            101: "牛人发起的",
            102: "我发起的",
            103: "同事推荐",
            104: "有附件简历的"
        }
          , l = "<p><b>Tips：</b>" + s[t] + "</p>";
        Chat.detailContainer.find(".welcome-tips").empty().append(l),
        Chat.containerChat.find(".chat-search .article").empty().html(c[i])
    },
    scrollToByUser: function(e) {
        var t = Chat.userList.find("a[data-uid=" + e + "]")
          , i = Chat.containerChat.find(".op-category .cur").attr("data-status");
        if (!t.length && 1 != i) {
            var s = Chat.renderUser(Chat.usersData[e]);
            Chat.userListMain.append(s),
            t = Chat.userList.find("a[data-uid=" + e + "]")
        }
        t.trigger("click"),
        t.closest(".main-list").length && Chat.userList.find(".top-list li").length ? Chat.userList.scrollTop(t.parent().height() * (t.parent().index() + Chat.userList.find(".top-list li").length)) : Chat.userList.scrollTop(t.parent().height() * t.parent().index())
    },
    toggleGroupList: function(e, t) {
        var i = 0
          , s = []
          , n = [];
        if (t.length)
            for (i = 0; i < t.length; i++) {
                var a = t[i];
                a > 1e3 && !Chat.usersdata[a] ? s.push(a) : a > 1e3 && n.indexOf(a) < 0 && n.push()
            }
        if (result.data.length) {
            var i, t = result.data;
            for (i = 0; i < t.length; i++)
                t[i] > 1e3 && !Chat.usersData[t[i]] ? ids.push(t[i]) : t[i] > 1e3 && !existObj[t[i]] && (existIds.push(t[i]),
                existObj[t[i]] = Chat.usersData[t[i]],
                existArr.push(Chat.usersData[t[i]]));
            Chat.getAddUsers(ids, existIds, existArr, toggle),
            Chat.tipsContainer.html("").hide(),
            Chat.userList.show(),
            Chat.containerChat.find(".chat-search").show(),
            $(".chat-container .scroll-wrapper").show(),
            Chat.detailContainer.show(),
            Chat.userList.find(".user-blank").remove();
            var e = Chat.containerChat.find(".op-category .cur").attr("data-status");
            if (e && Chat.groupHistory[e]) {
                var a = Chat.groupHistory[e];
                Chat.userList.find("a[data-uid=" + a + "]");
                Chat.scrollToByUser(a)
            }
            Chat.containerChat.find(".sel-batch").removeClass("disabled")
        } else {
            Chat.userList.find("ul").empty();
            var r = Chat.containerChat.find(".op-category .cur").text().replace("的", "");
            Chat.containerChat.find(".op-category .cur").text().replace("的", "");
            -1 != Chat.groupStatus || Chat.containerChat.find(".op-category .cur").parent().hasClass("group-more") ? 1 == Chat.groupStatus || 5 == Chat.groupStatus ? r = "新" : r += "的" : r = "",
            Chat.userList.find(".user-blank").remove(),
            Chat.userList.append('<div class="user-blank"><p>暂无' + r + "牛人</p></div>"),
            Chat.userList.find(".loadmore").hide(),
            Chat.containerChat.find(".sel-batch").addClass("disabled")
        }
        Chat.addTip(),
        Chat.chatEl.hide(),
        Chat.welcomeEl.show(),
        setTimeout(function() {
            Chat.containerChat.find(".loading-category-refresh").removeClass("loading-category-refresh")
        }, 300)
    },
    tabEmpty: function() {
        var e = Chat.containerChat.find(".op-category .cur").text().replace("的", "");
        Chat.containerChat.find(".op-category .cur").text().replace("的", "");
        -1 != Chat.groupStatus || Chat.containerChat.find(".op-category .cur").parent().hasClass("group-more") ? 1 == Chat.groupStatus || 5 == Chat.groupStatus ? e = "新" : e += "的" : e = "",
        Chat.userList.find(".user-blank").remove(),
        Chat.userList.append('<div class="user-blank"><p>暂无' + e + "牛人</p></div>"),
        Chat.userList.find(".loadmore").hide(),
        Chat.containerChat.find(".sel-batch").addClass("disabled")
    },
    getUsersId: function(e) {
        for (var t = [], i = 0; i < e.length; i++)
            t.push(e[i].uid);
        return t
    },
    getFilterUsers: function(e, t) {
        Chat.curUserData = {};
        var i = e
          , s = INTERFACE_URLS.chatFilterUsersUrl
          , n = []
          , a = []
          , r = {}
          , o = []
          , c = function(e) {
            var t = 8 == Chat.getGroupStatus();
            return e.filter(function(e) {
                return !t && !Chat.usersData[e] || 8 == Chat.usersData[e].relationType === t
            })
        }
          , l = function() {
            var e = Chat.getQueryParams()
              , t = !0;
            return $.each(e, function(e, i) {
                i && 0 != i && "-1" != i && (t = !1)
            }),
            t
        }
          , d = function(e) {
            var i = (e.data,
            c(e.data));
            if (l() && ChatGroups.list.length && "-1" == Chat.getGroupStatus() && Chat.renderUserList(i, 0),
            i.length || ChatGroups.list.length && l() && !Chat.filterRadio) {
                if (e.isGroup)
                    return Chat.addTip(),
                    Chat.renderGroupList(),
                    Chat.userList.find(".user-blank").remove(),
                    Chat.chatEl.hide(),
                    Chat.welcomeEl.show(),
                    !0;
                var s;
                for (s = 0; s < i.length; s++)
                    if (i[s] > 1e3 && !Chat.usersData[i[s]])
                        n.push(i[s]);
                    else if (i[s] > 1e3 && !r[i[s]]) {
                        var d, h = i[s];
                        if (e.workdata) {
                            var u = e.workdata.filter(function(e) {
                                return e.geek == h
                            });
                            d = $.extend(Chat.usersData[h], u[0])
                        } else
                            d = Chat.usersData[h];
                        a.push(h),
                        r[h] = d,
                        o.push(d)
                    }
                Chat.usersInitStatus && Chat.getAddUsers(n, a, o, t),
                Chat.tipsContainer.html("").hide(),
                Chat.userList.show(),
                Chat.containerChat.find(".chat-search").show(),
                $(".chat-container .scroll-wrapper").show(),
                Chat.detailContainer.show(),
                Chat.userList.find(".user-blank").remove();
                var p = Chat.getGroupStatus();
                if (p && Chat.groupHistory[p]) {
                    var f = Chat.groupHistory[p]
                      , g = Chat.userList.find("a[data-uid=" + f + "]")
                      , m = Chat.usersData[f] ? Chat.usersData[f] : ChatGroups.get(f);
                    !g.length || p != m.relationType && -1 != p || Chat.scrollToByUser(f)
                }
                Chat.containerChat.find(".sel-batch").removeClass("disabled")
            } else {
                Chat.userList.find("ul").empty();
                var v = Chat.containerChat.find(".op-category .cur").text().replace("的", "");
                Chat.containerChat.find(".op-category .cur").text().replace("的", "");
                -1 != Chat.groupStatus || Chat.containerChat.find(".op-category .cur").parent().hasClass("group-more") ? 1 == Chat.groupStatus || 5 == Chat.groupStatus ? v = "新" : v += "的" : v = "",
                Chat.filterRadio && (v = "待回复"),
                Chat.userList.find(".user-blank").remove(),
                Chat.filterGroup && "-1" == Chat.getGroupStatus() ? Chat.userList.append('<div class="user-blank"><p>暂未加入群聊</p></div>') : Chat.userList.append('<div class="user-blank"><p>暂无' + v + "牛人</p></div>"),
                Chat.userList.find(".loadmore").hide(),
                Chat.containerChat.find(".sel-batch").addClass("disabled")
            }
            Chat.addTip(),
            Chat.chatEl.hide(),
            Chat.welcomeEl.show(),
            setTimeout(function() {
                Chat.containerChat.find(".loading-category-refresh").removeClass("loading-category-refresh")
            }, 300)
        };
        if ("-1" == i.status && Chat.filterRadio) {
            var h = Chat.usersID.filter(function(e) {
                var t = Chat.usersData[e.uid]
                  , i = {};
                if (t)
                    return i = t.infoData,
                    t.newMsgCount > 0 || i.newMsgCount > 0
            });
            return d({
                data: Chat.getUsersId(h)
            }),
            !0
        }
        if ("-1" == i.status && Chat.filterGroup)
            return d({
                isGroup: !0,
                data: ChatGroups.list.sort(function(e, t) {
                    return t.isTop - e.isTop || t.lastTS - e.lastTS
                })
            }),
            !0;
        1 == i.status ? d({
            data: Chat.newGeek
        }) : $.ajax({
            type: "GET",
            url: s,
            dataType: "JSON",
            cache: !1,
            data: i,
            success: function(e) {
                e.rescode && d(e)
            },
            error: function(e) {
                Chat.userList.find("ul").empty(),
                Chat.userList.find(".user-blank").remove(),
                Chat.userList.append('<div class="user-blank"><p>加载出错，请稍后再试</p></div>'),
                Chat.userList.find(".loadmore").hide()
            }
        })
    },
    removeToast: function(e) {
        $("#toast").addClass("slideUp"),
        setTimeout(function() {
            $("#toast").remove()
        }, e)
    },
    batchUserStatus: function(e, t, i) {
        var s = $.Deferred();
        (new Date).getTime();
        return $.ajax({
            url: "/chat/relation/groupset.json",
            type: "POST",
            data: {
                geekId: i.join(","),
                relationType: e
            },
            dataType: "JSON",
            timeout: 5e3,
            success: function(e) {
                (new Date).getTime();
                1 == e.rescode ? s.resolve() : $.toast({
                    content: e.msg,
                    type: "error"
                })
            },
            error: function() {
                $.toast({
                    content: "批量操作失败",
                    type: "error"
                })
            }
        }),
        s
    },
    batchReadMessage: function(e) {
        Chat.containerChat.find(".op-category .cur").attr("data-status");
        $.each(e, function(e, t) {
            var i = Chat.usersData[t];
            i.maxMessageId && (ChatWebsocket.sendReadMessage({
                uid: t,
                mid: i.maxMessageId
            }),
            Chat.clearMessageCount(i, i.newMsgCount))
        });
        var t = -1 == Chat.getGroupStatus() ? 800 : 1200;
        setTimeout(function() {
            Chat.batchHandle.close()
        }, t)
    },
    batchUserHandle: function() {
        var e = function() {
            return '<div class="batch-operate"><div class="batch-title-box"><div class="batch-title"><em class="batch-cancel">取消</em></div></div><div class="batch-operate-wrap"><div class="batch-operate-box"><img src="/v2/web/boss/images/icon-batch-default.png"><p class="batch-number">已选择<span>0</span>位牛人</p><ul><li class="batch-action batch-link" data-action="6"><i></i>沟通中</li><li class="batch-action batch-like" data-action="7"><i></i>合适</li><li class="batch-action batch-unlike" data-action="8"><i></i>不合适</li><li class="batch-action batch-read"><i></i>已读</li></ul></div></div></div>'
        }
          , t = {
            6: '<p class="deal-layer icon-commun"><i></i>沟通中</p>',
            7: '<p class="deal-layer icon-pass"><i></i>合适</p>',
            8: '<p class="deal-layer icon-fail"><i></i>不合适</p>'
        }
          , i = {
            6: "user-communication",
            7: "user-pass",
            8: "user-fail"
        }
          , s = {
            "-1": "全部",
            1: "新",
            5: "新",
            6: "沟通中的",
            7: "合适的",
            8: "不合适的"
        }
          , n = function(e, n) {
            var a = e
              , r = i[n] || "";
            a.attr("class", r),
            a.find(".deal-layer").length || a.prepend(t[n]),
            a.addClass("dealSlideRight"),
            setTimeout(function() {
                a.slideUp(function() {
                    a.remove(),
                    Chat.userList.find("li").length < 1 && (Chat.userList.find(".user-blank").remove(),
                    Chat.userList.append('<div class="user-blank"><p>暂无' + s[Chat.groupStatus] + "牛人</p></div>"))
                })
            }, 500)
        }
          , a = function(e, t) {
            var s = i[t] || ""
              , a = Chat.containerChat.find(".op-category .cur").attr("data-status")
              , r = !1;
            return -1 != a && void 0 != a || 8 == t || !Chat.containerChat.find(".batch-wrap").is(":visible") ? ($.each(e, function(e, i) {
                n($(i), t)
            }),
            r = !0) : $(e).attr("class", s),
            r
        }
          , r = function() {
            var e = Chat.containerChat.find(".batch-wrap");
            $(document).off("keydown", c),
            Chat.containerChat.find(".op-category").animate({
                marginTop: 0,
                opacity: 1
            }, 300),
            e.find(".batch-title").animate({
                marginTop: 42,
                opacity: 0
            }, 300),
            Chat.containerChat.find(".batch-wrap").off("click").animate({
                opacity: 0
            }, 500, function() {
                Chat.containerChat.find(".batch-wrap").remove()
            }),
            $(".batch-layer").remove()
        }
          , o = function() {
            var e = $(".batch-list").find("li.selected").length;
            $(".batch-wrap").find(".batch-number span").text(e)
        }
          , c = function(e) {
            var t = Chat.containerChat.find(".batch-wrap")
              , i = Chat.userList.scrollTop() / 76
              , s = Chat.userList.height() / 76
              , n = Math.round(i) - 1
              , a = Math.floor(s);
            t.find(".selected").removeClass("selected"),
            n < 0 && (n = 0,
            a -= 1,
            t.find("li").eq(0).addClass("selected")),
            t.find("li").filter(":gt(" + n + ")").filter(":lt(" + a + ")").addClass("selected "),
            Chat.containerChat.find(".batch-list .user-list").scrollTop(Chat.userList.scrollTop()),
            o()
        }
          , l = function() {
            if ($(this).hasClass("disabled"))
                return !1;
            var e = $(".batch-wrap")
              , t = $(this).attr("data-action")
              , i = $(this).clone()
              , s = i.find("span").remove().end().text()
              , n = e.find(".batch-list .selected")
              , r = []
              , o = []
              , c = 800;
            if (n.length) {
                $.each(n, function(e, t) {
                    var i = $(t).find("a:first-child");
                    r.push(i.attr("data-uid")),
                    o.push(i.attr("data-eid"))
                }),
                t && Chat.batchUserStatus(t, r, o).then(function() {
                    $.each(r, function(e, t) {
                        Chat.usersData[t].newMsgCount > 0 && Chat.subtractPoint(Chat.usersData[t])
                    }),
                    chatUserPresenter.batch(r, t);
                    var e = a(n, t);
                    c = e ? 1200 : 800,
                    $.each(r, function(e, t) {
                        Chat.newGeek.indexOf(t) > -1 && (Chat.newGeek.splice(Chat.newGeek.indexOf(t), 1),
                        Chat.totalNewGeek())
                    }),
                    $.toast({
                        content: "已置为" + s.replace("置为", ""),
                        type: "success"
                    })
                }),
                Chat.batchReadMessage(r);
                var l = ["nread", "ntochat", "npass", "nfail"]
                  , d = t ? t - 5 : 0;
                Chat.sendKaEvent("Geekdeal_" + l[d] + "_" + n.length + "_" + Chat.getPublicStatis().context + "_" + Chat.getPublicStatis().view)
            }
        }
          , d = function() {
            if (!$(this).hasClass("disabled")) {
                var t = $('<div class="batch-wrap"></div>')
                  , i = $('<div class="batch-list"><div class="batch-title-box"><div class="batch-title"><i class="icon-operate"></i>批量处理</div></div><div class="batch-user-wrap scrollbar-macosx"><div class="user-list"><ul></ul></div></div></div>')
                  , s = e();
                $("body").append('<div class="batch-layer"></div>'),
                i.find("ul").append(Chat.userListTop.children().not(".group-item").clone()).append(Chat.userListMain.children().not(".group-item").clone()),
                i.prepend(Chat.containerChat.find(".chat-search").clone()),
                i.find(".cur").removeClass("cur"),
                i.find(".notice-badge").remove(),
                t.append(i).append(s),
                t.on("click", ".user-list li a", function(e) {
                    ($(".batch-list").find("li.selected").length > 1 || !$(this).parents("li").hasClass("selected")) && ($(this).parents("li").toggleClass("selected"),
                    o()),
                    e.preventDefault()
                }),
                t.on("click", ".batch-cancel", r),
                t.on("click", ".batch-action", l),
                Chat.containerChat.find(".sec-content").append(t),
                Menu.isSuportCalc ? Chat.containerChat.find(".batch-list .user-list").scrollbar() : (Chat.containerChat.find(".batch-user-wrap").css("height", $(window).height() - 132 + "px"),
                Chat.containerChat.find(".batch-list .user-list").css("height", $(window).height() - 176 + "px")),
                c(),
                Chat.containerChat.find(".op-category").animate({
                    marginTop: -49,
                    opacity: 0
                }, 200),
                t.find(".batch-title").animate({
                    marginTop: 0,
                    opacity: 1
                }, 300);
                var n = $(".batch-operate-wrap .batch-action[data-action=" + Chat.groupStatus + "]");
                n && n.addClass("disabled"),
                Chat.sendKaEvent("Chat_batch_" + Chat.getPublicStatis().context + "_" + Chat.getPublicStatis().view)
            }
        };
        return Chat.containerChat.on("click", ".sel-batch", d),
        {
            close: r,
            render: d
        }
    },
    initSearch: function() {
        var e, t = "", i = Chat.containerChat.find(".chat-search"), s = Chat.containerChat.find(".chat-search .ipt"), n = Chat.containerChat.find(".chat-search .chat-search-list"), a = Chat.containerChat.find(".chat-search .chat-search-input"), r = function() {
            if (i.removeClass("fold").addClass("unfold"),
            a.animate({
                width: "100%"
            }, 200),
            "" == $.trim(s.val())) {
                var e = ChatGroups.list.length ? "搜索联系人、群聊" : "搜索联系人";
                Chat.containerChat.find(".chat-search .chat-search-list").empty().html('<p class="chat-search-empty">' + e + "</p>"),
                Menu.isSuportCalc || Chat.containerChat.find(".chat-search .chat-search-list").css("height", $(window).height() - 176 + "px")
            }
        }, o = function() {
            s.val(""),
            i.removeClass("unfold").addClass("fold"),
            a.animate({
                width: "46px"
            }, 200)
        }, c = function(e) {
            var t = Utemplate('<%if(this.list.length == 0){%><p class="chat-search-empty">没有搜索结果</p><%}%><ul><%for(var i=0; i < this.list.length; i++){%><li <%if(this.list[i].isGroup){%>class="group-item"<%}%> ><a href="javascript:;" data-uid="<%this.list[i].uid%>"><div class="figure"><img src="<%this.list[i].avatar%>" alt=""></div> <div class="text"> <div class="title"><span class="name"><%this.list[i].name%></span></div><p class="gray"><%this.list[i].lastMsg%></p> </div> </a></li><%}%></ul>', {
                list: e
            });
            n.empty().html(t),
            __conversion("chat_search_" + encodeURIComponent(s.val()))
        }, l = function(e) {
            e.stopPropagation(),
            chatUserPresenter.flushJob(),
            Chat.groupHistory[-1] = $(this).find("a").attr("data-uid"),
            o()
        }, d = function() {
            var i = $(this).val().trim();
            clearTimeout(e),
            e = setTimeout(function() {
                i != t && "" != i || (i.length > 0 ? c(Chat.searchUserByName(i)) : n.empty().html('<p class="chat-search-empty">搜索联系人、群聊</p>').show())
            }, 300),
            t = i
        }, h = function() {
            $(document).on("click", o),
            i.on("input", ".ipt", d),
            i.on("focus", ".ipt", r),
            i.on("click", ".chat-search-list li", l),
            i.on("click", ".icon-chat-search", function() {
                i.find(".ipt").focus()
            }),
            a.on("click", ".icon-chat-search-clear", function(e) {
                e.stopPropagation(),
                o()
            }),
            i.on("mouseover mouseout", ".chat-search-input", function(e) {
                i.hasClass("unfold") || ("mouseover" == e.type ? a.css({
                    width: "88px"
                }) : a.css({
                    width: "46px"
                }))
            }),
            i.on("click", ".chat-search-article", function(e) {
                e.stopPropagation()
            }),
            i.on("click", ".chat-search-article span", function(e) {
                i.find(".selected").removeClass("selected"),
                $(this).addClass("selected"),
                Chat.groupHistory[-1] = null,
                Chat.filterRadio = $(this).hasClass("unread-check"),
                Chat.filterGroup = $(this).hasClass("group-check"),
                Chat.filterRadio || Chat.filterGroup ? Chat.containerChat.find(".op-filter").addClass("disabled") : Chat.containerChat.find(".op-filter").removeClass("disabled"),
                Chat.getFilterUsers({
                    status: "-1"
                }, !1)
            })
        };
        !function() {
            var e = ChatGroups.list.length ? '<span class="group-check"><i class="icon-check"></i>群聊</span>' : '<span class="group-check" style="display: none;">群聊</span>'
              , t = '<div class="chat-search fold"> <div class="chat-search-article"><p class="article"><span class="selected">全部</span>' + e + '<span class="unread-check">待回复</span></p> <p class="chat-search-input"> <i class="icon-chat-search"></i> <input class="ipt" type="text" name="" placeholder="搜索" /> <i class="icon-chat-search-clear icon-close"></i></p> </div><div class="chat-search-list user-list"><p class="chat-search-empty">搜索联系人、群聊</p></div></div>';
            Chat.containerChat.find(".sec-content").prepend(t),
            i = Chat.containerChat.find(".chat-search"),
            s = Chat.containerChat.find(".chat-search .ipt"),
            n = Chat.containerChat.find(".chat-search .chat-search-list"),
            a = Chat.containerChat.find(".chat-search .chat-search-input"),
            h()
        }()
    },
    lightKeyword: function(e, t) {
        var i = "" + t
          , s = (t + "").toLowerCase()
          , n = (e + "").toLowerCase()
          , a = s.indexOf(n)
          , r = n.length
          , s = i.substr(0, a) + '<u class="h">' + i.substr(a, r) + "</u>" + i.substr(a + r);
        return s
    },
    searchUserByName: function(e) {
        var t = function() {
            var t = $.trim((e + "").toLowerCase())
              , i = Chat.usersID.filter(function(e) {
                return $.trim((e.name + "").toLowerCase()).indexOf(t) > -1
            })
              , s = ChatGroups.list.filter(function(e) {
                return $.trim((e.name + "").toLowerCase()).indexOf(t) > -1
            });
            return i.concat(s)
        };
        return function() {
            var i = [].concat(t())
              , s = [];
            return $.each(i, function(t, i) {
                var n = Chat.usersData[i.uid] ? Chat.usersData[i.uid] : i;
                s.push({
                    avatar: i.avatar || i.avatarUrl,
                    lastMsg: n.lastMsg,
                    name: Chat.lightKeyword(e, i.name),
                    uid: i.uid || i.groupId,
                    isGroup: void 0 != i.groupId
                })
            }),
            s
        }()
    },
    getAddUsers: function(e, t, i, s) {
        var n = []
          , e = e;
        if (!e.length)
            return void Chat.filterUserListData(n, i, s);
        $.ajax({
            type: "GET",
            url: INTERFACE_URLS.chatAddUsersUrl,
            dataType: "JSON",
            cache: !1,
            data: "friendIds=" + e,
            success: function(e) {
                if (e.status && e.data.length) {
                    var t, a = e.data;
                    for (t = 0; t < a.length; t++)
                        Chat.usersData[a[t].uid] || (a[t].fromSource = "list",
                        Chat.usersData[a[t].uid] = a[t],
                        Chat.usersData[a[t].uid].fromSource = "list",
                        Chat.usersData[a[t].uid].newMsgCount = 0,
                        Chat.usersData[a[t].uid].infoData = {},
                        Chat.usersData[a[t].uid].lastMsg = a[t].lastMsg),
                        Chat.usersTempData.length || (Chat.usersTempData[0] = []),
                        Chat.usersTempData[0].unshift(a[t]),
                        n.push(a[t])
                }
                Chat.filterUserListData(n, i, s)
            },
            error: function(e) {}
        })
    },
    concatGroup: function(e, t, i) {
        var s = function(e, t) {
            return t.lastTS - e.lastTS
        };
        if (Chat.filterRadio)
            return e;
        var n = Chat.getQueryParams()
          , a = !0
          , r = [];
        if ($.each(n, function(e, t) {
            t && 0 != t && "-1" != t && (a = !1)
        }),
        Chat.filterGroup && a && 0 == t)
            return ChatGroups.list.sort(s);
        if (!$.isArray(e) && i && 0 == t)
            return ChatGroups.list.sort(s);
        if (!$.isArray(e))
            return e;
        if (a && e.length) {
            0 != t && 1 != t || (r = ChatGroups.tops()),
            e.sort(s);
            var o = 0 == t ? (new Date).getTime() : e[0].lastTS
              , c = e.length > 1 && !i ? e[e.length - 1].lastTS : 0;
            r = r.concat(ChatGroups.between(c, o)),
            e = r.concat(e)
        }
        return e.sort(s)
    },
    filterUserListData: function(e, t, i) {
        var e = e || []
          , s = []
          , t = t;
        if (s = e.length > 0 ? e.concat(t) : t,
        s.sort(function(e, t) {
            return t.isTop - e.isTop || t.lastTS - e.lastTS
        }),
        s.length) {
            var n, a = 0, r = [];
            for (n = 0; n < s.length; n++)
                n > 0 && n % Chat.userlistPageTotal == 0 && a++,
                void 0 === r[a] && (r[a] = []),
                r[a].push(s[n]);
            var o = Chat.groupHistory[-1]
              , c = Chat.usersData[o];
            Chat.containerChat.find(".chat-search .unread-check").hasClass("selected");
            "-1" == Chat.getGroupStatus() && c && o && r.length && r[0].indexOf(o) < 0 && r[0].push(c),
            Chat.userlistRenderPage = 0,
            Chat.userListMain.html(""),
            Chat.userListTop.html(""),
            Chat.renderUserList(r, 0),
            Chat.userFilterTempData = r,
            i && (Chat.resetRules(i),
            Chat.renderBox(i.uid, i.eid, null, {
                back: !0
            }))
        }
    },
    resetRules: function(e, t) {
        var i = Chat.containerChat.find(".data-tab")
          , s = Chat.containerChat.find(".menu-status")
          , n = Chat.containerChat.find(".sel-type")
          , a = Chat.containerChat.find(".sel-filter")
          , r = Chat.containerChat.find(".sec-filter");
        i.find("a").removeClass("cur").eq(0).addClass("cur"),
        s.find("p").eq(0).addClass("show").siblings().removeClass("show"),
        s.find("p").eq(0).find("a").removeClass("cur").eq(0).addClass("cur"),
        n.removeClass("dropdown-open"),
        t ? (n.find("a").removeClass("cur"),
        n.find(".label-text b").addClass("red").text(n.find('a[data-jobid="' + t + '"]').addClass("cur").text())) : (n.find(".label-text b").removeClass("red").text("全部职位"),
        n.find("a").removeClass("cur").eq(0).addClass("cur")),
        Chat.containerChat.removeClass("show-chat-filter"),
        a.removeClass("filter-open"),
        a.find(".label-text b").removeClass("red").text("筛选"),
        r.find("a").removeClass("cur"),
        r.find("dl").each(function() {
            $(this).find("a").eq(0).addClass("cur")
        }),
        setTimeout(function() {
            Chat.containerChat.find(".sel-filter .label-text").attr("ka", "main_filter")
        }, 10)
    },
    setUserTempData: function(e, t) {
        var e = e || []
          , t = t;
        if (tempArr = [],
        e.length > 0 ? tempArr = e.concat(t) : tempArr = t,
        tempArr.length) {
            var i, s = 0, n = [];
            for (i = 0; i < tempArr.length; i++)
                i > 0 && i % Chat.userlistPageTotal == 0 && s++,
                void 0 === n[s] && (n[s] = []),
                n[s].push(tempArr[i])
        }
        return Chat.userFilterTempData = tempArr,
        tempArr
    },
    getUserList: function(e) {
        var e = e;
        Chat.isLoading = !0,
        $.ajax({
            type: "GET",
            url: INTERFACE_URLS.userlistUrl,
            dataType: "JSON",
            timeout: 6e4,
            data: "page=" + e,
            success: function(t) {
                if (t.status && t.data && t.data.length) {
                    var i, s = t.data, n = [], a = {};
                    for (i = 0; i < s.length; i++)
                        s[i].uid > 1e3 && !Chat.usersData[s[i].uid] || Chat.usersData[s[i].uid] && !Chat.usersData[s[i].uid].infoData ? (a[i] = s[i],
                        a[i].fromSource = "list",
                        a[i].infoData = {},
                        1 != s[i].newGeek && 5 != s[i].relationType || a[i].newMsgCount && Chat.notification[5].push(s[i].uid),
                        Chat.usersData[s[i].uid] || (Chat.usersData[s[i].uid] = s[i]),
                        $.extend(Chat.usersData[s[i].uid], a[i]),
                        Chat.addToUserList(s[i].uid),
                        s[i].isTop ? Chat.tops.push(s[i]) : n.push(s[i])) : s[i].uid > 1e3 && Chat.usersData[s[i].uid] && !Chat.usersData[s[i].uid].encryptUid && (a[i].encryptUid = s[i].encryptUid,
                        $.extend(Chat.usersData[s[i].uid], a[i])),
                        void 0 === Chat.usersData[s[i].uid].newMsgCount && (Chat.usersData[s[i].uid].newMsgCount = 0);
                    a = {},
                    Chat.usersTempData.push(n),
                    Chat.userFilterTempData = Chat.usersTempData,
                    e++,
                    Chat.getUserList(e)
                } else
                    1 == e ? ChatGroups.getGroupList(function(e) {
                        e && e.length ? (Chat.renderChatBox(),
                        Chat.checkUnreadMessage(),
                        Chat.containerChat.find(".group-check").show()) : (Chat.tipsContainer.html('<div class="data-blank"><i class="tip-nodata"></i><b>没有相关数据</b>' + (VersionStatus.isHunter ? "" : '<p><a href="/chat/im?mu=recommend" class="btn link-topage">前往推荐牛人</a></p>') + "</div>").show(),
                        Chat.userList.parent(".scroll-wrapper").hide(),
                        Chat.detailContainer.hide(),
                        Chat.containerChat.find(".sec-operate").removeClass("operate-disabed"),
                        Chat.containerChat.find(".group-check").hide()),
                        Chat.usersInitStatus = !0
                    }) : (Chat.usersTempData.length && (Chat.userFilterTempData[0] = Chat.userFilterTempData[0].concat(Chat.tops),
                    ChatGroups.getGroupList(function(e) {
                        Chat.renderChatBox(),
                        Chat.checkUnreadMessage(),
                        !e || !e.length > 0 ? Chat.containerChat.find(".group-check").hide() : Chat.containerChat.find(".group-check").show(),
                        Chat.usersInitStatus = !0
                    })),
                    Chat.totalNewGeek());
                t.status || Chat.sendKaEvent("friend_load_error_" + e),
                Chat.isLoading = !1
            },
            error: function(e) {
                Chat.isLoading = !1,
                $.toast({
                    content: "联系人加载失败，请刷新页面再试",
                    type: "error"
                }),
                Chat.sendKaEvent("friend_load_error")
            }
        })
    },
    renderChatBox: function() {
        Chat.tipsContainer.html("").hide(),
        Chat.userList.show(),
        Chat.containerChat.find(".chat-search").show(),
        Chat.userList.parent(".scroll-wrapper").show(),
        Chat.detailContainer.show(),
        Chat.renderUserList(Chat.userFilterTempData, 0),
        Chat.userList.find("li").length && Chat.userlistMoreEl.show(),
        Menu.isSuportCalc && Chat.userList.scrollbar(),
        Chat.containerChat.find(".sec-operate").removeClass("operate-disabed")
    },
    isGroupChat: function(e) {
        return e.groupId
    },
    getGroupItem: function(e) {
        if (Chat.userList.find("a[data-uid=" + e.groupId + "]").length && !Chat.filterGroup)
            return "";
        var t = 1 == e.isSilent ? "item-silent" : "";
        e.name = Chat.XssText(e.name),
        e.lastMsg = e.lastMsg ? Chat.XssText(e.lastMsg) : "",
        e.newMsgCount = e.newMsgCount > 0 ? e.newMsgCount : "";
        var i = e.userId != e.groupId && e.userId != _PAGE.uid && e.userName ? e.userName + "：" : "";
        e.groupId != Chat.curUserData.groupId && 1 == e.isSilent && e.newMsgCount && (i = '<span class="silent-number">[<span>' + e.newMsgCount + "条</span>]</span>" + i);
        var s = '<p class="gray">' + i + "<%this.lastMsg%></p>";
        e.lastMsg || (s = '<p class="gray"></p>');
        var n = '<li class="' + t + ' group-item"><a data-uid="<%this.groupId%>" data-group="1" href="javascript:;"><div class="figure"><img src="<%this.avatarUrl%>?x-oss-process=image/resize,w_60,limit_0"></div><div class="text"><div class="title"><span class="time"><%this.lastTime%></span><span class="name"><%this.name%></span>' + s + '<span class="notice-badge"><%this.newMsgCount%></span></div><span class="silent-badge"></span>' + function() {
            var t = Chat.getDraft(e.groupId);
            return t.text && "" != t.text ? '<p class="draft"><i></i>' + t.text + "</p>" : ""
        }() + "</div></a> </li>";
        return Utemplate(n, e)
    },
    renderUser: function(e) {
        if (Chat.isGroupChat(e))
            return Chat.getGroupItem(e);
        var t = function(t) {
            var i = e.uid
              , s = Chat.usersData[i]
              , n = s.infoData || {};
            return "encryptUid" != t || s.infoData ? s[t] ? s[t] : n[t] : s.uid
        }
          , i = e.infoData && e.infoData.uid ? e.infoData : Chat.usersData[e.uid]
          , s = {
            0: "",
            6: "user-communication",
            7: "user-pass",
            8: "user-fail"
        }
          , n = Chat.getGroupStatus()
          , a = s[e.relationType] || ""
          , r = function() {
            var i = ""
              , s = ""
              , n = 0;
            return e.lastMessageInfo && e.lastMessageInfo.status && (n = e.lastMessageInfo.status),
            n && t("lastMsg") && t("lastMsg") == e.lastMessageInfo.message && (1 == n ? i = "status-delivery" : 2 == n && (i = "status-read"),
            s = '<span class="status ' + i + '"></span>'),
            s
        }
          , o = function() {
            return t("sourceTitle") ? '<span class="source-title">' + t("sourceTitle") + "</span>" : ""
        }
          , o = function() {
            return t("sourceTitle") ? '<span class="source-title">' + t("sourceTitle") + "</span>" : ""
        }
          , c = '<li class="' + a + '"><a href="' + function() {
            return "/chat/geek/chatinfo?" + (void 0 === t("encryptUid") ? "gid=" + t("uid") : "uid=" + t("encryptUid"))
        }() + '" data-uid="' + i.uid + '" data-eid="' + t("encryptUid") + '" data-url="/chat/geek.json?uid=' + i.uid + '"><div class="figure"><img src="' + t("avatar") + '?x-oss-process=image/resize,w_60,limit_0" /></div><div class="text"><div class="title">' + function() {
            var t = 0 == e.isTop ? "置顶" : "取消置顶"
              , i = 0 == e.isTop ? 1 : 0;
            return '<div class="user-operation"><span class="dots">...</span><div><span class="user-operation-item" data-type="settop" data-friendId="' + e.uid + '" data-isTop ="' + i + '">' + t + '</span><span class="user-operation-item" data-type="delete" data-uid="' + e.uid + '" >删除</span></div></div>'
        }() + function() {
            return '<span class="time">' + i.lastTime + "</span>"
        }() + o() + '<span class="name">' + (t("name") || "&nbsp;") + "</span>" + function() {
            var i = "";
            return i = t("positionName") ? "<p>" + t("positionName") + "·" + (t("lastCompany") || e.company || "") + "</p>" : "<p></p>",
            5 == n ? i : '<p class="gray">' + r() + (t("lastMsg") || "").replace(/\<\/?[a-zA-Z]+\>/g, "").replace(/<\/?phone>/g, "").replace(/<\/?copy>/g, "").replace(/&lt;phone&gt;/g, "").replace(/&lt;\/phone&gt;/g, "").replace(/&lt;copy&gt;/g, "").replace(/&lt;\/copy&gt;/g, "") + "</p>"
        }() + function() {
            return t("newMsgCount") ? '<span class="notice-badge">' + t("newMsgCount") + "</span>" : ""
        }() + function() {
            var e = Chat.getDraft(i.uid);
            return e.text && "" != e.text ? '<p class="draft"><i></i>' + e.text + "</p>" : ""
        }();
        return e.encryptUid || (e.encryptUid = t("encryptUid")),
        Chat.userList.find("a[data-uid=" + i.uid + "]").length > 0 && (c = ""),
        c
    },
    stat: function() {
        var e = (Chat.containerChat.find(".op-category .cur").text(),
        Chat.userList.find(".notice-badge"))
          , t = 0;
        $.each(e, function(e, i) {
            t += parseInt($(i).text(), 10)
        }),
        Chat.sendKaEvent("Chat_User_group_" + Chat.getConGroup() + "_red_" + e.length + "_msg_" + t)
    },
    renderGroupList: function() {
        for (var e = ChatGroups.list, t = "", i = "", s = 0; s < e.length; s++)
            e[s].isTop ? t += Chat.getGroupItem(e[s]) : i += Chat.getGroupItem(e[s]);
        Chat.userListTop.empty().append(t),
        Chat.userListMain.empty().append(i)
    },
    renderUserList: function(e, t) {
        var i, e = e, s = Chat.concatGroup(e[t], t, e.length <= t + 1), t = t, n = "", a = "";
        if (!(s = function(e) {
            var t = 8 == Chat.getGroupStatus();
            return e.filter(function(e) {
                return e && 8 == e.relationType === t
            })
        }(function(e) {
            var t = [];
            if (e)
                for (var i = 0; i < e.length; i++)
                    t.indexOf(e[i]) < 0 && t.push(e[i]);
            return t
        }(s))) || !s.length)
            return void (0 == t ? Chat.tabEmpty() : Chat.userlistMoreEl.text("没有更多了").addClass("disabled").show());
        for (Chat.userlistMoreEl.text("加载更多").removeClass("disabled").show(),
        5 == Chat.getGroupStatus() ? (s = function(e) {
            var t = e.filter(function(e) {
                return e.newMsgCount > 0
            })
              , i = e.filter(function(e) {
                return e.newMsgCount < 1
            });
            return t.concat(i)
        }(s),
        Chat.userList.addClass("user-list-new")) : Chat.userList.removeClass("user-list-new"),
        i = 0; i < s.length; i++)
            s[i].isTop ? a += Chat.renderUser(s[i]) : n += Chat.renderUser(s[i]);
        if (Chat.userListTop.append(a),
        Chat.userListMain.append(n),
        Chat.getResumedirectList(),
        0 == t) {
            Chat.userList.find("li:first a");
            s.length < Chat.userlistPageTotal && Chat.userlistMoreEl.text("没有更多了").hide(),
            Chat.userList.scrollTop() > 0 && Chat.userList.scrollTop(0)
        }
        Chat.stat()
    },
    countGroupMessage: function(e) {
        var t = e.to ? e.to.uid : e.toId
          , i = e.from ? e.from.uid : e.fromId
          , s = ChatGroups.get(t)
          , n = [];
        n.push(e);
        var a = GroupMessage.formate(n)
          , r = function() {
            if (s || (s = ChatGroups.get(t)),
            (!s.maxMessageId || s.maxMessageId < e.mid) && (s.maxMessageId = e.mid),
            s.newMsgCount = void 0 == s.newMsgCount ? 0 : s.newMsgCount,
            t != Chat.curUserData.groupId && _PAGE.uid != i) {
                Chat.curUserData.maxMsgId || (Chat.curUserData.cache = [],
                Chat.curUserData.cache.push(e)),
                s.newMsgCount++;
                var n = Chat.userList.find("a[data-uid=" + t + "]");
                n.find(".notice-badge").length ? n.find(".notice-badge").text(s.newMsgCount) : n.find(".title").append('<span class="notice-badge">' + s.newMsgCount + "</span>"),
                1 != s.isSilent && Chat.setUnReadMessageCount(1)
            } else
                s.maxMessageId && ChatWebsocket.sendReadMessage({
                    uid: s.groupId,
                    mid: s.maxMessageId
                }),
                s.maxMessageId = null;
            Chat.addGroupMessage(e)
        };
        s ? a.length && r() : Chat.usersInitStatus ? (Chat.containerChat.find(".group-check").show(),
        $.get("/group/chat/getGroupInfo.json?groupId=" + t, function(i) {
            if (1 != i.resCode || !i.groupId)
                return !1;
            if (a.length && (i.userName = e.from ? e.from.name : "",
            i.lastMsg = a[0].originalText),
            ChatGroups.get(t))
                r();
            else {
                ChatGroups.add(i);
                var s = Chat.getGroupItem(i);
                !Chat.filterRadio && "-1" == Chat.getGroupStatus() && s && Chat.userListMain.prepend(s),
                r()
            }
        })) : ChatGroups.pushMessage(e)
    },
    addGroupMessage: function(e) {
        var t = e.to ? e.to.uid : e.toId
          , i = Chat.userList.find("a[data-uid=" + t + "]")
          , s = ChatGroups.get(t)
          , n = s.lastTS
          , a = [];
        a.push(e);
        var r = GroupMessage.formate(a);
        if (r.length) {
            var o = r[0].isSelf || !r[0].name || "system" == r[0].type ? "" : r[0].name + "：";
            if (t != Chat.curUserData.groupId && 1 == s.isSilent && s.newMsgCount && (o = '<span class="silent-number">[<span>' + s.newMsgCount + "条</span>]</span>" + o),
            r[0].time >= n && (s.lastMsg = r[0].originalText,
            s.lastTS = r[0].time,
            s.lastTime = Chat.getLastTime(r[0].time),
            s.userName = r[0].name || "",
            s.userId = r[0].fromId,
            i.find(".text .gray").html(o + r[0].originalText),
            i.find(".text .time").text(s.lastTime)),
            t == Chat.curUserData.groupId) {
                var c = Chat.chatList.innerHeight() + Chat.chatList.scrollTop() >= Chat.chatList.get(0).scrollHeight;
                r[0].time - n > 3e4 && Chat.chatEl.find(".chat-list ul").append(Chat.getGroupMsgItem({
                    type: "time",
                    style: "time",
                    time: r[0].time,
                    text: Chat.dateFormat(new Date(r[0].time), "Z hh:mm")
                })),
                Chat.chatEl.find(".chat-list ul").append(Chat.getGroupMsgItem(r[0])),
                c && Chat.scrollToBottom()
            } else
                r[0].time > n && i.parents("ul").prepend(i.parents("li"))
        }
    },
    initGroupChat: function() {
        var e = function(e) {
            var t = $.Deferred();
            return $.post("/group/chat/updateGroupSetting.json", e, function(e) {
                1 == e.resCode ? t.resolve() : $.toast({
                    type: "error",
                    content: e.resmsg
                })
            }),
            t
        };
        Chat.chatEl.on("click", ".chat-group-operate .op-settop", function() {
            var t = $(this)
              , i = Chat.userList.find(".cur")
              , s = $(this).hasClass("selected") ? 0 : 1
              , n = s ? "已置顶，点击取消" : "置顶该群"
              , a = s ? "已置顶" : "已取消置顶"
              , r = s ? Chat.userListTop : Chat.userListMain;
            e({
                groupId: Chat.curUserData.groupId,
                watch: s,
                silent: Chat.curUserData.isSilent
            }).then(function() {
                Chat.curUserData.isTop = s;
                var e = Chat.dateFormat(new Date, "hh:mm");
                t.toggleClass("selected"),
                t.find(".tooltip p").text(n),
                i.find(".time").text(e),
                i.prependTo(r),
                $.toast({
                    type: "success",
                    content: a
                })
            }),
            __conversion("group_operate_silent_" + s)
        }),
        Chat.chatEl.on("click", ".chat-group-operate .op-silent", function() {
            var t = $(this)
              , i = Chat.userList.find(".cur")
              , s = $(this).hasClass("selected") ? 0 : 1
              , n = s ? "关闭消息免打扰" : "开启消息免打扰"
              , a = s ? "已开启消息免打扰" : "已关闭消息免打扰";
            e({
                groupId: Chat.curUserData.groupId,
                watch: Chat.curUserData.isTop,
                silent: s
            }).then(function() {
                Chat.curUserData.isSilent = s,
                t.toggleClass("selected"),
                i.toggleClass("item-silent"),
                t.find(".tooltip p").text(n),
                i.find(".notice-badge").length || i.find(".text").append('<span class="notice-badge"></span>'),
                $.toast({
                    type: "success",
                    content: a
                })
            }),
            __conversion("group_operate_silent_" + s)
        });
        var t = function(e) {
            return Utemplate('<div class="group-member-list"><ul><%for(var i=0; i<this.list.length; i++){%><li data-uid="<%this.list[i].userId%>"><img src="<%this.list[i].avatarUrl%>?x-oss-process=image/resize,w_60,limit_0"><p><%this.list[i].name%></p></li><%}%></ul></div><div class="shadow"></div>', {
                list: e
            })
        }
          , i = function(e, t) {
            var i = ""
              , s = "";
            1 === t.gender ? i = '<i class="icon-man"></i>' : 0 === t.gender && (i = '<i class="icon-lady"></i>'),
            3 == t.certification && (s = '<i class="icon-approve"></i>');
            var n = e == _PAGE.uid ? 'style="visibility:hidden"' : ""
              , a = [];
            t.company && a.push("<span>" + t.company + "</span>"),
            t.position && a.push(t.position);
            var r = a.length > 1 ? "multi-row" : "";
            return '<p class="card-item-avatar"><img src="' + t.avatarUrl + '?x-oss-process=image/resize,w_220,limit_0" alt=""></p><div class="card-item-panel"><p class="card-info"><span class="name">' + t.nickName + "</span>" + s + i + '</p><p class="card-position ' + r + '">' + a.join('<i class="vline"></i>') + '</p><p class="card-description">' + Chat.XssText(t.signature) + "</p><p " + n + ' class="card-greet"><a data-uid="' + e + '" class="btn" href="javascript:">打招呼</a> </p></div>'
        }
          , s = function(e) {
            var t = $.Deferred();
            return Chat.xhrs.groupMemberChat && Chat.xhrs.groupMemberChat.abort(),
            Chat.xhrs.groupMemberChat = $.get("/group/chat/groupUserCard.json", {
                userId: +e,
                groupId: Chat.curUserData.groupId
            }, function(e) {
                1 == e.resCode ? t.resolve(e.data) : $.toast({
                    type: "error",
                    content: e.msg
                })
            }),
            t
        }
          , n = function(e) {
            var t = Chat.chatEl.find(".chat-group-operate");
            e.on("click", ".group-member-list li img", function() {
                e.find(".member-item-card").length || e.find(".dialog-container").append('<div class="member-item-card"></div>');
                var n = $(this).parents("li").attr("data-uid")
                  , a = $(this)
                  , r = e.find(".member-item-card");
                s(n).then(function(e) {
                    r.html(i(n, e));
                    var s = a.position()
                      , o = {
                        left: s.left + 35,
                        top: s.top + 35
                    };
                    s.left + 260 >= t.width() && (o.left = o.left - r.width()),
                    $("body").height() < a.offset().top + 175 + r.find(".card-item-panel").height() && (o.top = o.top - 170 - r.find(".card-item-panel").height()),
                    r.css(o).fadeIn()
                }),
                __conversion("group_list_member_detail")
            }),
            e.on("click", ".member-item-card .btn", function(t) {
                $.post("/group/chat/privateGroup.json", {
                    fromGroupId: Chat.curUserData.groupId,
                    userId: $(this).attr("data-uid")
                }, function(t) {
                    if (1 == t.resCode) {
                        e.remove();
                        var i = $.extend({
                            count: 2,
                            lastTS: (new Date).getTime(),
                            lastTime: Chat.getLastTime((new Date).getTime())
                        }, t.data);
                        Chat.addNewGroup(i)
                    } else
                        $.toast({
                            type: "error",
                            content: t.msg
                        })
                }),
                __conversion("group_member_card_greet")
            }),
            e.on("click", ".group-member-list", function(t) {
                $(t.target).is("img") || e.find(".member-item-card").hide()
            }),
            e.find(".group-member-list").on("scroll", function() {
                e.find(".member-item-card").hide()
            })
        }
          , a = function(e, i) {
            Chat.curUserData.count = i.length,
            Chat.chatEl.find(".chat-group-operate .item-group-name").text(Chat.curUserData.name + "（" + Chat.curUserData.count + "）"),
            $.dialog({
                bind: !0,
                title: "",
                content: t(i),
                closeText: !1,
                confirmText: !1,
                cancelText: !1,
                wrapClass: "group-members-around",
                opacityLock: !0,
                onOpen: function(e) {
                    var t = Chat.chatEl.find(".chat-group-operate");
                    t.addClass("unfold"),
                    $(e).find(".dialog-container").css({
                        left: t.offset().left,
                        top: t.offset().top + t.height() + 1,
                        width: t.innerWidth()
                    }),
                    n($(e))
                },
                onResize: function(e) {
                    var t = Chat.chatEl.find(".chat-group-operate");
                    $(e).find(".dialog-container").css({
                        left: t.offset().left,
                        top: t.offset().top + t.height() + 1,
                        width: t.innerWidth()
                    })
                },
                onClose: function() {
                    Chat.chatEl.find(".chat-group-operate").removeClass("unfold")
                }
            })
        };
        Chat.chatEl.on("click", ".chat-group-operate .item-group-name", function() {
            $(this);
            $.get("/group/chat/membersInfo.json?groupId=" + Chat.curUserData.groupId, function(e) {
                a(0, e.data)
            })
        }),
        Chat.chatEl.on("click", ".item-friend .figure img", function() {
            var e = $(this)
              , t = e.attr("data-uid");
            t && s(t).then(function(s) {
                var a = '<div class="member-item-card">' + i(t, s) + "</div>";
                $.dialog({
                    bind: !0,
                    title: "",
                    content: a,
                    closeText: !1,
                    confirmText: !1,
                    cancelText: !1,
                    lock: !0,
                    wrapClass: "members-card-wrap",
                    opacityLock: !0,
                    onOpen: function(t) {
                        var i = e.offset().top;
                        $(t).find(".card-item-panel").height() + 190 + e.offset().top > $("body").height() && (i = i - $(t).find(".card-item-panel").height() - 150),
                        $(t).find(".dialog-container").css({
                            left: e.offset().left + e.width() + 15,
                            top: i
                        }),
                        n($(t))
                    },
                    onResize: function(t) {
                        var i = e.offset().top;
                        $(t).find(".card-item-panel").height() + 190 + e.offset().top > $("body").height() && (i = i - $(t).find(".card-item-panel").height() - 150),
                        $(t).find(".dialog-container").css({
                            left: e.offset().left + e.width() + 15,
                            top: i
                        })
                    }
                }),
                __conversion("group_record_member_detail")
            })
        })
    },
    _getQueryStringArgs: function(e) {
        e = null == e ? window.location.href : e;
        for (var t = e.substring(e.lastIndexOf("?") + 1), i = {}, s = t.length > 0 ? t.split("&") : [], n = null, a = null, r = null, o = 0; o < s.length; o++)
            n = s[o].split("="),
            a = decodeURIComponent(n[0]),
            r = decodeURIComponent(n[1]),
            a.length && (i[a] = r);
        return i
    },
    getInterviewCard: function(e) {
        return msgText = "",
        msgText += '<div class="interview-card"  data-id= "' + e.interviewId + '">',
        msgText += '<div class= "title">' + e.title + "  </div>",
        msgText += '<div class = "interview-body">',
        msgText += '<div class="interview-userinfo">',
        msgText += '<img  class="avator" src="' + e.user.avatar + '" >',
        msgText += "<p>" + e.user.name + "</p>",
        msgText += "</div>",
        msgText += '<p class="interview-time">' + e.interviewTime + "</p>",
        msgText += '<a class="interview-btn" href="javascript:; ">' + e.bottomText + "</a>",
        msgText += "</div>",
        msgText += "</div>",
        msgText += "</div>",
        msgText
    },
    getGroupMsgItem: function(e) {
        var t = this
          , i = function(e) {
            if ("text" === e.style) {
                var i = "";
                return "received" === e.action && (i += "<p>",
                (e.isAdmin || e.fromId == Chat.curUserData.adminId) && (i += '<span class="item-identity">群主</span>'),
                i += '<span class="item-name">' + e.name + '</span><span class="item-position gray">' + (e.company || "") + e.position + "</span></p>"),
                "sound" === e.type && (e.text = e.text ? e.text : "收到一条语音消息，请在APP查看"),
                '<div class="group-text">' + i + '<div class="text">' + e.text + "</div></div>"
            }
            if ("image" === e.type) {
                var s = e.image.tinyImage.width
                  , n = e.image.tinyImage.height
                  , a = e.image.originImage || {};
                return e.image.tinyImage.width > 300 && (n /= Math.floor(s / 300),
                n = Math.floor(n)),
                '<div class="text bgf"><img class="img-tiny" data-large="' + a.url + '" large-x="' + a.width + '" large-y="' + a.height + '" src="' + e.image.tinyImage.url + '" height="' + n + '"></div>'
            }
            if ("sticker" === e.type)
                return '<div class="text bgf"><img class="img-tiny" width="' + e.image.origWidth / 2 + '" " src="' + e.image.origUrl + '" height="' + e.image.origHeight / 2 + '"></div>';
            if ("interviewShare" === e.type) {
                var i = "";
                return "received" === e.action && (i += "<p>",
                (e.isAdmin || e.fromId == Chat.curUserData.adminId) && (i += '<span class="item-identity">群主</span>'),
                i += '<span class="item-name">' + e.name + '</span><span class="item-position gray">' + (e.company || "") + e.position + "</span></p>"),
                '<div class="group-text">' + i + '<div class="text bgf">' + t.getInterviewCard(e.interviewShare) + "</div></div>"
            }
            return ""
        };
        return function(e) {
            var t = i(e);
            if ("hyperLink" === e.type) {
                var s = e.hyperLink
                  , n = s.extra_json ? s.extra_json : JSON.parse(s.extraJson)
                  , a = s.text
                  , r = n.highlightStart
                  , o = n.highlightLength
                  , c = Chat._getQueryStringArgs(s.url).shareId;
                return '<li class="item-system"><div class="text">' + a.substring(0, r + 1) + '<a  ka="groupChatRecord" href="javascript:;"        class="_systemEvent" data-url="/boss/share/geek/detail.json?id=' + c + '" >' + a.substr(r + 1, o) + "</a></li>"
            }
            if ("received" === e.action && "system" !== e.style) {
                return '<li class="item-friend "><div class="figure">' + (3 == e.certification ? '<i class="icon-certification"></i>' : "") + '<img data-uid="' + e.fromId + '" src="' + e.avatar + '" alt=""></div>' + t + "</li>"
            }
            return "sent" === e.action && "system" !== e.style ? '<li class="item-myself">' + t + "</li>" : "system" === e.style ? '<li class="item-system"><div class="text">' + e.text + "</div></li>" : "time" === e.type ? '<li class="item-time"><span class="time">' + e.text + "</span></li>" : ""
        }(e)
    },
    fillGroupHistoryMessage: function(e) {
        var e = Chat.curUserData.page || 1
          , t = Chat.curUserData.groupId
          , i = function(e) {
            var t = e[0]
              , i = [];
            return $.each(e, function(e, s) {
                var n, a = new Date(s.time);
                n = (new Date).getTime() - s.time > 864e5 ? "MM-dd hh:mm" : "Z hh:mm",
                (s.time - t.time > 3e5 || 0 === e) && i.push({
                    type: "time",
                    style: "time",
                    time: s.time,
                    text: Chat.dateFormat(a, n)
                }),
                t = s,
                i.push(s)
            }),
            i
        };
        Chat.chatList.off("scroll"),
        $.get("/group/chat/groupHistoryMessages.json", {
            groupId: t,
            maxMsgId: 1 == e ? 0 : Chat.curUserData.maxMsgId || 0,
            count: 20,
            page: e
        }).success(function(s) {
            if (Chat.curUserData.groupId != t)
                return !1;
            Chat.chatEl.find(".chat-list").css("visibility", "visible"),
            Chat.chatEl.find(".chat-wrap-mask").remove();
            var n = Chat.chatListCon.find("li:first")
              , s = JSON.parse(s);
            if (Chat.curUserData.adminId = s.adminId,
            s.messages && s.messages.length) {
                var a = GroupMessage.formate(s.messages);
                1 == e && (a = a.reverse());
                var r, o = "";
                for (a = i(a),
                r = 0; r < a.length; r++)
                    o += Chat.getGroupMsgItem(a[r]);
                Chat.chatEl.find(".chat-list ul").prepend(o),
                1 == e && a.length ? Chat.scrollToBottom() : Chat.chatList.scrollTop(n.offset().top - Chat.chatList.height()),
                Chat.curUserData.canLoadingData = s.messages.length > 19,
                Chat.messageBarScroll()
            } else
                Chat.curUserData.canLoadingData = !1
        })
    },
    addNewGroup: function(e) {
        setTimeout(function() {
            if (!ChatGroups.get(e.groupId) && !Chat.userList.find("a[data-uid=" + e.groupId + "]").length) {
                ChatGroups.add(e);
                var t = $(Chat.renderUser(e));
                Chat.userListMain.prepend(t),
                Chat.userList.find("a[data-uid=" + e.groupId + "]").click(),
                Chat.containerChat.find(".group-check").show()
            }
            Chat.scrollToByUser(e.groupId)
        }, 200)
    },
    renderGroupBar: function(e) {
        Chat.chatEl.find(".detail-top").append(function() {
            var t = 1 == e.isTop ? " selected" : "";
            return '<div class="chat-group-cover chat-group-operate"><div class="fr"><span class="op-silent' + (1 == e.isSilent ? " selected" : "") + '"><div class="tooltip"><p class="gray">' + (1 == e.isSilent ? "关闭消息免打扰" : "开启消息免打扰") + '</p></div></span><span class="op-settop' + t + '"><div class="tooltip"><p class="gray">' + (1 == e.isTop ? "已置顶，点击取消" : "置顶该群") + '</p></div></span></div><p><a class="item-group-name" ka="group_chat_members" href="javascript:;">' + e.name + "（" + e.count + "）</a></p></div>"
        }()),
        Chat.chatEl.find(".chat-controls").append(function() {
            return '<div class="chat-group-controls chat-group-cover"></div>'
        }()),
        Chat.chatEl.find('.btn-position[link-show="show"]').hide()
    },
    wipeGroupMessages: function(e) {
        var t = ChatGroups.get(e)
          , i = Chat.userList.find('a[data-uid="' + e + '"]');
        i.length && (i.find(".notice-badge").remove(),
        t.maxMessageId = null,
        Chat.setUnReadMessageCount(-1 * t.newMsgCount),
        t.newMsgCount = 0)
    },
    renderGroupBox: function(e) {
        var t = e.attr("data-uid")
          , i = ChatGroups.get(t);
        Chat.curUserData = i,
        Chat.chatEl.show(),
        Chat.welcomeEl.hide(),
        Chat.userList.find(".cur").removeClass("cur"),
        e.parent("li").addClass("cur"),
        Chat.editorEl.removeClass("disabled"),
        Publisher.editorInput.focus(),
        Chat.chatList.find(".chat-info").hide(),
        Chat.chatList.find("ul").empty(),
        Chat.renderGroupBar(i),
        Chat.setDraft();
        var s = Chat.getDraft(t);
        t && s.content ? (e.find(".draft").remove(),
        Publisher.editorInput.html(s.content),
        Publisher.submitBtn.removeClass("btn-disabled"),
        Publisher.setCursorEnd(Publisher.editorInput.get(0))) : (Publisher.editorInput.html(""),
        Publisher.submitBtn.addClass("btn-disabled")),
        Chat.curUserData.page = 1,
        Chat.curUserData.maxMsgId = 0,
        Chat.fillGroupHistoryMessage(),
        Chat.userList.find(".cur .notice-badge").remove(),
        Chat.userList.find(".cur .silent-number").remove(),
        Chat.curUserData.maxMessageId && (ChatWebsocket.sendReadMessage({
            uid: Chat.curUserData.groupId,
            mid: Chat.curUserData.maxMessageId
        }),
        Chat.curUserData.maxMessageId = null,
        Chat.setUnReadMessageCount(-1 * Chat.curUserData.newMsgCount)),
        Chat.curUserData.newMsgCount = 0
    },
    messageBarScroll: function() {
        Chat.chatList.off("scroll").on("scroll", function(e) {
            if (Chat.curUserData.historyPage || Chat.curUserData.groupId) {
                var t = $(this);
                Chat.curUserData && (Chat.timerHistory && clearTimeout(Chat.timerHistory),
                Chat.timerHistory = setTimeout(function() {
                    t.scrollTop() < 100 && Chat.curUserData.canLoadingData && (Chat.curUserData.groupId ? (Chat.curUserData.page++,
                    Chat.fillGroupHistoryMessage()) : (Chat.curUserData.historyPage++,
                    Chat.curUserData.historyLastItem = Chat.chatListCon.find("li").eq(0),
                    Chat.getHistoryMessage({
                        uid: Chat.curUserData.uid,
                        name: Chat.curUserData.name,
                        avatar: Chat.curUserData.avatar
                    }, Chat.curUserData.messageMinId, Chat.curUserData.historyPage, e)))
                }, 200))
            }
        })
    },
    unlockMessages: function(e) {
        var t = Chat.curUserData
          , i = {
            jobId: t.infoData.toPositionId,
            geekId: t.encryptUid,
            expectId: t.infoData.encryptExpectId
        };
        $.get("/bossweb/block/unlockchat.json", i, function(s) {
            s.chatToast && $.toast({
                type: "success",
                content: s.chatToast
            }),
            s.block && s.blockPageData ? Commercial.block(s.blockPageData, function(t, n) {
                var a = $.extend({
                    isPurchase: !0,
                    jobId: t.jobId || i.jobId,
                    business: t.business,
                    targetType: t.targetType
                }, n);
                Purchase.commercial({
                    jobId: a.jobId,
                    priceId: a.encryptPriceId,
                    targetId: t.encryptTargetId,
                    business: a.business || "",
                    targetType: void 0 != s.blockPageData.targetType ? s.blockPageData.targetType : a.targetType
                }, {
                    item: a,
                    success: function() {
                        Chat.unlockMessages(e),
                        "send" == e.from && Publisher.sendText()
                    }
                })
            }) : s.block || 1 !== s.rescode ? $.toast({
                type: "error",
                content: s.resmsg
            }) : Chat.renderBox(t.uid)
        })
    },
    checkUserBlock: function() {
        return Chat.curUserData.infoData && Chat.curUserData.infoData.block
    },
    ublockBlockGeek: function(e) {
        var t = Chat.curUserData.uid;
        $.post("/boss/block/use/geekchatcard.json", {
            geekId: t,
            blockBagId: e.encryptBlockBagId || ""
        }, function(e) {
            1 == e.rescode ? (Chat.usersData[t].infoData.block = !1,
            Chat.tabcontentEls.find(".suspend-bar").text("使用成功，立即和牛人沟通"),
            setTimeout(function() {
                Chat.curUserData.uid === t && Chat.tabcontentEls.find(".suspend-bar").remove()
            }, 3e3)) : $.toast({
                type: "error",
                content: e.resmsg
            })
        })
    },
    addPropToTalkBar: function(e) {
        var t = e.page.cardList || []
          , i = t[0]
          , s = t[1]
          , n = i.freeCount < 1 && s.leftCount > 0 ? "使用有剩余极客畅聊卡（1/" + s.leftCount + "）" : "立即沟通"
          , a = '<div class="suspend-bar"><a class="btn-unlock-geek" href="javascript:;">' + n + '</a><p class="suspend-text">' + e.page.title + e.page.subTitle + "</p></div>";
        Chat.tabcontentEls.append(a)
    },
    renderBox: function(uid, eid, el, toggle, e) {
        var uid = uid
          , el = el || Chat.userList.find('a[data-uid="' + uid + '"]')
          , eid = eid || el.attr("data-eid")
          , toggleTabs = Chat.toggleTypeEl.find("span");
        Chat.chatEl.show(),
        Chat.welcomeEl.hide(),
        Chat.chatEl.find(".chat-group-cover").remove(),
        Chat.chatEl.find('.btn-position[link-show="show"]').show(),
        $("#page_key_name").val(VersionStatus.preKa + "bpc_chat");
        var loadType = e && "click" == e.type ? "list" : "listload"
          , redDot = Chat.userList.find('a[data-uid="' + uid + '"]').find(".notice-badge").length ? "red" : ""
          , view = "chatview";
        if (1 == Chat.containerChat.find(".data-tab .cur").index() && (view = "infoview"),
        7 == Chat.containerChat.find(".menu-status .show .cur").attr("data-origin") && (view = "fileview2"),
        uid && Chat.sendKaEvent("Geekshow_" + loadType + redDot + "_" + Chat.getPublicStatis().context + "_" + view + "_" + uid),
        Chat.toggleTypeEl.attr("title", ""),
        el && el.length || !uid || !eid || (Chat.addUser(uid, eid),
        el = Chat.userList.find('a[data-uid="' + uid + '"]')),
        toggle && !toggle.back && (Chat.filterParms.page > 0 || Chat.filterParms.status > 0 || "" != Chat.filterParms.jobid || Chat.filterParms.salary > 0 || Chat.filterParms.experience > 0 || Chat.filterParms.degree > 0 || Chat.filterParms.status > 0 || Chat.filterParms.origin > 0))
            return Chat.filterParms = {
                page: 0,
                status: "",
                origin: "",
                jobid: "",
                salary: 0,
                experience: 0,
                degree: 0
            },
            void Chat.getFilterUsers(Chat.filterParms, {
                uid: uid,
                eid: eid
            });
        toggle && el.length && (el.closest(".main-list").length && Chat.userList.find(".top-list li").length ? Chat.userList.scrollTop(el.parent().height() * (el.parent().index() + Chat.userList.find(".top-list li").length)) : Chat.userList.scrollTop(el.parent().height() * el.parent().index())),
        Chat.userList.find("li").removeClass("cur"),
        el.parent().addClass("cur"),
        Chat.setDraft();
        var history = Chat.getDraft(uid);
        uid && history.content ? (el.find(".draft").remove(),
        Publisher.editorInput.html(history.content),
        Publisher.submitBtn.removeClass("btn-disabled"),
        Publisher.setCursorEnd(Publisher.editorInput.get(0))) : (Publisher.editorInput.html(""),
        Publisher.submitBtn.addClass("btn-disabled")),
        Chat.chatList.find(".chat-info").html(""),
        Chat.chatListCon.html(""),
        Chat.chatBox.find(".notice-dialog").remove(),
        Chat.toUserId = uid,
        Chat.curUserData = Chat.usersData[Chat.toUserId],
        eid && (Chat.curUserData.encryptUid = eid),
        Chat.chatList.unbind("scroll"),
        4 == Chat.filterParms.origin ? (Chat.tabcontentEls.removeClass("show-box"),
        Chat.attachContainer.addClass("show-box"),
        toggleTabs.removeClass("cur"),
        toggleTabs.eq(2).addClass("cur"),
        Chat.chatEl.find(".detail-bottom").show()) : 1 == Chat.filterParms.status || 5 == Chat.filterParms.status ? (Chat.tabcontentEls.removeClass("show-box"),
        Chat.resumeContainer.addClass("show-box"),
        toggleTabs.removeClass("cur"),
        toggleTabs.eq(1).addClass("cur"),
        Chat.chatEl.find(".detail-bottom").show()) : Chat.resumeContainer.hasClass("show-box") || Chat.attachContainer.hasClass("show-box") ? (Chat.resumeContainer.removeClass("show-box"),
        Chat.attachContainer.removeClass("show-box"),
        toggleTabs.removeClass("cur"),
        toggleTabs.eq(0).addClass("cur"),
        Chat.chatBox.addClass("show-box"),
        Chat.chatEl.find(".detail-bottom").hide()) : Chat.chatEl.find(".detail-bottom").hide(),
        Chat.xhrs.detail && Chat.xhrs.detail.abort(),
        Chat.xhrs.detail = $.ajax({
            type: "GET",
            url: el.attr("data-url"),
            dataType: "JSON",
            data: null,
            success: function(result) {
                var result = result
                  , expandGeekNote = function() {
                    var e = $(".chat-container");
                    e.find(".chat-geek-arrow").on("click", function() {
                        var t = e.find(".chat-geek-remarks p")
                          , i = e.find(".chat-geek-arrow");
                        t.hasClass("expand-p") ? (t.removeClass("expand-p"),
                        i.addClass("chat-geek-arrow-expand")) : (t.addClass("expand-p"),
                        i.removeClass("chat-geek-arrow-expand"))
                    })
                };
                if ("string" == typeof result && (result = eval("(" + result + ")")),
                1 == result.status) {
                    var data = result.data
                      , labels = data.labels
                      , note = data.note
                      , str = '<h3 class="name"><p class="tip-text"></p>' + data.name + '</h3><div class="text"><p>' + data.applyStatusDes + "：<span>" + filterXss(data.lastCompany ? data.lastCompany : data.school) + '<em class="vline"></em>' + filterXss(data.lastPosition ? data.lastPosition : data.major) + "</span>期望职位：<span>" + filterXss(data.position) + '</span><span class="salary">' + data.price + "</span></p><p>" + data.year + '<em class="vline"></em>' + data.edu + '<em class="vline"></em>' + data.city + "</p></div>";
                    if (labels && labels.length && (str += '<div class="chat-geek-tag">',
                    $.each(labels, function(e, t) {
                        str += "<span>" + t + "</span>"
                    }),
                    str += "</div>"),
                    note && (str += '<div class="chat-geek-remarks"><div>备注:</div><p class="expand-p">' + note + '</p><div class="chat-geek-arrow"></div></div>'),
                    data.uid != Chat.curUserData.uid)
                        return;
                    Chat.curUserData.infoData = data,
                    Chat.curUserData.encryptUid = data.encryptUid,
                    Chat.usersData[data.uid].encryptUid = data.encryptUid,
                    Chat.usersData[data.uid].isCloseInterview = data.isCloseInterview,
                    Chat.curUserData.isCloseInterview = data.isCloseInterview,
                    el.attr("data-eid", data.encryptUid),
                    void 0 === data.encryptUid ? el.attr("href", "/chat/geek/chatinfo?gid=" + data.uid) : el.attr("href", "/chat/geek/chatinfo?uid=" + data.encryptUid),
                    Chat.curUserData.messageMinId = 0,
                    Chat.curUserData.historyPage = 1,
                    Chat.curUserData.canLoadingData = !0,
                    Chat.curUserData.historyLastItem = null,
                    $.extend(Chat.usersData[uid].infoData, data),
                    Chat.setFuntionButton(data),
                    data.resumeVisible ? (Chat.toggleTypeEl.find('span[data-target="attachment-container"]').removeClass("gray"),
                    Chat.toggleTypeEl.find(".dropdown-wrap").hide()) : (Chat.toggleTypeEl.find('span[data-target="attachment-container"]').addClass("gray"),
                    Chat.toggleTypeEl.find(".dropdown-wrap").show(),
                    data.bothTalked ? Chat.toggleTypeEl.find(".dropdown-wrap .dropdown-menu").html('<ul><li data-type="resume"><i class="icon-resume"></i>请求附件简历</li></ul>').css("margin-left", "-24px") : Chat.toggleTypeEl.find(".dropdown-wrap .dropdown-menu").html('<p class="gray"><i class="icon-resume"></i>暂无附件简历，在牛人回复后可以向他请求</p>').css("margin-left", "-116px")),
                    data.mobileVisible ? Chat.opTopEls.find(".dropdown-phone").css("display", "inline-block").attr("ka", "showmobile_" + Chat.curUserData.uid) : Chat.opTopEls.find(".dropdown-phone").css("display", "none"),
                    data.weixinVisible ? Chat.opTopEls.find(".dropdown-weixin").css("display", "inline-block").attr("ka", "showwechat_" + Chat.curUserData.uid) : Chat.opTopEls.find(".dropdown-weixin").css("display", "none"),
                    data.interview ? Chat.opTopEls.find(".dropdown-interview").css("display", "inline-block").attr("ka", "showinterview_" + Chat.curUserData.uid) : Chat.opTopEls.find(".dropdown-interview").css("display", "none"),
                    Chat.getHistoryMessage({
                        uid: data.uid,
                        name: data.name,
                        avatar: data.avatar
                    }, Chat.curUserData.messageMinId, 1, e),
                    Chat.chatList.find(".chat-info").html(str),
                    note && expandGeekNote(),
                    Chat.setRelationStatus(data),
                    data.block && Chat.addPropToTalkBar(data),
                    setTimeout(function() {
                        Chat.readResumedirect(el)
                    }, 300),
                    Chat.messageBarScroll()
                } else
                    -1 == result.status ? ($.toast({
                        content: "已在其他设备删除该联系人",
                        type: "error"
                    }),
                    uid && Chat.sendKaEvent("friend_deleted_" + uid)) : 1011 == result.code ? (alert("登录信息失效，请重新登录"),
                    window.location.href = "/logout/") : ($.toast({
                        content: "数据加载失败，请稍后再试",
                        type: "error"
                    }),
                    uid && Chat.sendKaEvent("friend_error_" + uid))
            },
            error: function(e) {}
        }),
        Chat.usersData[uid] || Chat.addUser(uid, eid),
        Chat.curUserData && (Chat.curUserData.isTop ? (Chat.setTopEl.addClass("selected").attr("ka", "geek_toping_cancel_" + Chat.curUserData.uid),
        Chat.setTopEl.find(".tooltip p").text("已置顶，点击取消")) : (Chat.setTopEl.removeClass("selected").attr("ka", "geek_toping_set_" + Chat.curUserData.uid),
        Chat.setTopEl.find(".tooltip p").text("置顶联系人")),
        $(".detail-top .icon-report").attr("data-uid", Chat.curUserData.uid).attr("ka", "chat_report_" + Chat.curUserData.uid),
        Chat.curUserData.mids = [],
        Chat.curUserData.lastMessage = {},
        Chat.clearMessageCount(Chat.curUserData, Chat.curUserData.newMsgCount))
    },
    Sticker: {
        time: 0,
        timer: null,
        title: document.title,
        show: function() {
            var e = this;
            clearTimeout(e.timer),
            e.timer = setTimeout(function() {
                e.time++,
                e.show(),
                e.time % 2 == 0 ? document.title = "BOSS直聘" : document.title = "有新消息啦！"
            }, 500)
        },
        clear: function() {
            var e = this;
            clearTimeout(e.timer),
            document.title = e.title
        }
    },
    changeTop: function(e) {
        var t = e.attr("data-friendId")
          , i = e.attr("data-isTop")
          , s = {}
          , n = {}
          , a = Chat.usersData[t]
          , r = Chat.userList.find('a[data-uid="' + t + '"]').parent("li")
          , o = r.index()
          , c = (Chat.userList.find(".cur"),
        Chat.curUserData)
          , l = Chat.setTopEl;
        s.setTop = function() {
            $.ajax({
                url: "/chat/friendIsTop.json",
                data: {
                    friendId: t,
                    isTop: i
                },
                type: "post",
                dataType: "JSON",
                timeout: 5e3,
                success: function(t) {
                    t.rescode && (1 == i ? n.setTop(e) : n.cancelTop(e)),
                    e.removeClass("disabled")
                },
                error: function(t) {
                    e.removeClass("disabled")
                }
            })
        }
        ,
        n.setTop = function(e) {
            e.attr("data-isTop", 0).text("取消置顶"),
            $.toast({
                content: "已置顶",
                type: "success"
            }),
            r.find("a").attr("data-settop", 1),
            Chat.usersData[t].isTop = 1,
            r.prependTo(Chat.userListTop).attr("latest-index", o).find(".time").text(Chat.dateFormat(new Date, "hh:mm")),
            a == c && l.addClass("selected").find(".tooltip p").text("已置顶，点击取消"),
            Chat.sendKaEvent("chat_geek_top")
        }
        ,
        n.cancelTop = function(e) {
            e.attr("data-isTop", 1).text("置顶"),
            $.toast({
                content: "已取消置顶",
                type: "success"
            }),
            r.find("a").removeAttr("data-settop"),
            Chat.usersData[t].isTop = 0,
            r.prependTo(Chat.userListMain).find(".time").text(Chat.dateFormat(new Date, "hh:mm")),
            a == c && l.removeClass("selected").find(".tooltip p").text("置顶联系人"),
            Chat.sendKaEvent("chat_geek_untop")
        }
        ,
        e.hasClass("disabled") || s.setTop()
    },
    deleteLinkman: function(e) {
        var t = e.parents("a").attr("data-eid")
          , i = e.attr("data-uid")
          , s = {}
          , n = function() {
            var t = e.parents(".user-operation").siblings(".notice-badge")
              , i = t.text();
            i > 0 && (Chat.unreadMessageCount = Chat.unreadMessageCount - i,
            Chat.unreadCountBox.text(Chat.unreadMessageCount),
            Chat.unreadMessageCount <= 0 && Chat.unreadCountBox.hide())
        }
          , a = function() {
            for (var e = 0; e < Chat.drafts.length; e++)
                Chat.drafts[e].uid == i && Chat.drafts.splice(e, 1);
            sessionStorage.setItem("__Chat__Drafts", __stringify(Chat.drafts))
        };
        s.delete = function() {
            $.ajax({
                type: "POST",
                url: "/chat/relation/delete.json",
                dataType: "JSON",
                data: {
                    geekId: t
                },
                success: function(e) {
                    e.rescode ? ($.toast({
                        content: "删除成功",
                        type: "success"
                    }),
                    chatUserPresenter.setStatus(i, 77),
                    delete Chat.usersData[i],
                    a(),
                    n(),
                    Chat.sendKaEvent("chat_geek_delete")) : $.toast({
                        content: e.resmsg,
                        type: "error"
                    })
                },
                error: function(e) {
                    $.toast({
                        content: "请求失败",
                        type: "error"
                    })
                }
            })
        }
        ,
        function() {
            $.dialog({
                title: "是否删除此联系人？",
                content: "删除后消息将被清空",
                confirmText: "确定",
                cancelText: "取消",
                closeText: !0,
                closeLayer: !1,
                wrapClass: "dialog-delete-linkman",
                onConfirm: function(e) {
                    e.remove(),
                    s.delete()
                }
            })
        }()
    },
    setTop: function(e) {
        var e = e
          , t = e.hasClass("selected") ? 0 : 1;
        if (e.hasClass("disabled"))
            return !1;
        e.addClass("disabled"),
        $.ajax({
            url: "/chat/friendIsTop.json",
            data: {
                friendId: Chat.curUserData.uid,
                isTop: t
            },
            type: "post",
            dataType: "JSON",
            timeout: 5e3,
            success: function(i) {
                if (i.rescode) {
                    var s = Chat.userList.find(".cur")
                      , n = (s.attr("latest-index"),
                    s.index());
                    t ? (s.find("a").attr("data-settop", 1),
                    e.attr("ka", "geek_toping_cancel_" + Chat.curUserData.uid),
                    e.addClass("selected").find(".tooltip p").text("已置顶，点击取消"),
                    Chat.curUserData.isTop = 1,
                    Chat.usersData[Chat.curUserData.uid].isTop = 1,
                    $.toast({
                        content: "已置顶",
                        type: "success"
                    }),
                    s.prependTo(Chat.userListTop).attr("latest-index", n).find(".time").text(Chat.dateFormat(new Date, "hh:mm")),
                    s.find(".user-operation li:first-child").attr("data-isTop", 0).text("取消置顶")) : (s.find("a").removeAttr("data-settop"),
                    e.attr("ka", "geek_toping_set_" + Chat.curUserData.uid),
                    e.removeClass("selected").find(".tooltip p").text("置顶联系人"),
                    Chat.curUserData.isTop = 0,
                    Chat.usersData[Chat.curUserData.uid].isTop = 0,
                    s.prependTo(Chat.userListMain).find(".time").text(Chat.dateFormat(new Date, "hh:mm")),
                    $.toast({
                        content: "已取消置顶",
                        type: "success"
                    }),
                    s.find(".user-operation li:first-child").attr("data-isTop", 1).text("置顶"))
                } else
                    $.confirm({
                        content: i.resmsg,
                        title: "温馨提示",
                        closeIcon: !0,
                        columnClass: "",
                        autoClose: "confirm|4000"
                    });
                e.removeClass("disabled")
            },
            error: function(e) {}
        })
    },
    toggleUser: function(data, message) {
        var sideEl = $(".side-menu")
          , data = data;
        sideEl.find("dl").removeClass("cur"),
        sideEl.find(".menu-chat").click().addClass("cur"),
        $(".page-container").hide(),
        $(".chat-container").show(),
        $("body").removeClass("page-iframe"),
        Menu.setUrl("chat");
        var setUserChecked = function() {
            chatUserPresenter.flushJob(),
            Chat.groupHistory[-1] = data.uid,
            Menu.toggleTopMenu("top-chat")
        };
        Chat.usersData[data.uid] || void 0 === data.jid ? setUserChecked() : $.ajax({
            type: "POST",
            url: "/chat/addRelation.json",
            dataType: "JSON",
            data: {
                gid: data.uid,
                jid: data.jid,
                expectId: data.expectId
            },
            success: function(result) {
                var result = result;
                "string" == typeof result && (result = eval("(" + result + ")")),
                1 == result.status && $.ajax({
                    type: "GET",
                    url: "/chat/geek.json?uid=" + data.uid,
                    dataType: "JSON",
                    data: null,
                    success: function(result) {
                        var result = result;
                        if ("string" == typeof result && (result = eval("(" + result + ")")),
                        1 == result.status) {
                            var data = result.data
                              , userInfo = {
                                avatar: data.avatar,
                                isTop: 0,
                                lastTime: data.lastTime,
                                name: data.name,
                                sex: 0,
                                newMsgCount: 0,
                                uid: data.uid,
                                encryptUid: data.encryptUid,
                                lastTS: (new Date).getTime()
                            };
                            Chat.usersData[data.uid] = userInfo,
                            Chat.usersData[data.uid].infoData = data,
                            setUserChecked()
                        } else
                            $.toast({
                                content: "数据加载失败，请稍后再试",
                                type: "error"
                            })
                    },
                    error: function(e) {}
                })
            },
            error: function(e) {}
        }),
        setTimeout(function() {
            $("#page_key_name").val(VersionStatus.preKa + "bpc_chat")
        }, 10)
    },
    getHistoryMessage: function(info, maxId, page, e) {
        page > 1 && Chat.hisLoading.show(),
        1 == page && Chat.editorEl.addClass("disabled"),
        Chat.xhrs.history && Chat.xhrs.history.abort(),
        Chat.xhrs.history = $.ajax({
            url: "/chat/historymsg.json",
            type: "GET",
            data: {
                gid: info.uid,
                maxMsgId: maxId,
                c: 20,
                page: page
            },
            dataType: "JSON",
            timeout: 2e4,
            success: function(result) {
                var result = result;
                if ("string" == typeof result && (result = eval("(" + result + ")")),
                1 == result.type && result.messages) {
                    var len = result.messages.length, i, message, timeMessage;
                    if (len > 0) {
                        if (Chat.curUserData.historyLastItem)
                            for (i = len - 1; i >= 0; i--)
                                message = result.messages[i],
                                message.mSource = "server",
                                message.typeSource = "history",
                                timeMessage || 4 == message.type || 4 == message.body.type || message.uncount || (timeMessage = message),
                                ChatWebsocket.receiveTextMessage(message);
                        else {
                            for (i = 0; i < len; i++)
                                message = result.messages[i],
                                message.mSource = "server",
                                message.typeSource = "history",
                                timeMessage || 4 == message.type || 4 == message.body.type || message.uncount || (timeMessage = message),
                                ChatWebsocket.receiveTextMessage(message),
                                message.from.uid == Chat.curUserData.uid && (Chat.curUserData.maxMessageId = result.messages[i].mid);
                            1 == page && (Chat.editorEl.removeClass("disabled"),
                            1 != Chat.containerChat.find(".data-tab .cur").index() && Publisher.editorInput.focus())
                        }
                        if (timeMessage && Chat.showTimeLine(timeMessage, !0, !0),
                        len > 19) {
                            Chat.chatList.find(".chat-info").hide();
                            var $record = Chat.chatEl.find(".chat-list");
                            $record.innerHeight() >= $record.prop("scrollHeight") ? (Chat.curUserData.historyPage = page + 1,
                            Chat.curUserData.canLoadingData = !1,
                            Chat.getHistoryMessage(info, result.messages[0].mid, Chat.curUserData.historyPage, e)) : setTimeout(function() {
                                Chat.curUserData.canLoadingData = !0
                            }, 300)
                        } else
                            Chat.curUserData.canLoadingData = !1,
                            Chat.chatList.find(".chat-info").fadeIn(),
                            1 == page && Chat.scrollToBottom();
                        Chat.curUserData.messageMinId = result.messages[0].mid
                    }
                    if (Chat.curUserData.historyLastItem)
                        try {
                            Chat.chatList.scrollTop(Chat.curUserData.historyLastItem.offset().top - Chat.chatList.height())
                        } catch (e) {}
                } else
                    Chat.curUserData.canLoadingData = !1,
                    Chat.chatList.find(".chat-info").fadeIn();
                1 == page && Chat.curUserData.maxMessageId && (Chat.websocketConnected ? Chat.sendReadMessage({
                    userData: Chat.curUserData,
                    uid: Chat.curUserData.uid,
                    mid: Chat.curUserData.maxMessageId
                }) : (Chat.interConnect && clearInterval(Chat.interConnect),
                Chat.interConnect = setInterval(function() {
                    Chat.websocketConnected && (Chat.sendReadMessage({
                        userData: Chat.curUserData,
                        uid: Chat.curUserData.uid,
                        mid: Chat.curUserData.maxMessageId
                    }),
                    clearInterval(Chat.interConnect))
                }, 1e3))),
                Chat.editorEl.removeClass("disabled"),
                Chat.hisLoading.hide()
            },
            error: function(e) {
                Chat.curUserData.canLoadingData = !0,
                Chat.hisLoading.hide(),
                Chat.editorEl.removeClass("disabled"),
                Publisher.editorInput.focus()
            }
        }),
        $.when(Chat.xhrs.history).then(function() {
            var e = Chat.chatEl.find(".toggle-type span[data-target=attachment-container]")
              , t = Chat.containerChat.find(".op-category .cur").attr("data-origin")
              , i = Chat.chatEl.find(".toggle-type span[data-target=resume-container]");
            (1 == Chat.containerChat.find(".op-category .cur").attr("data-status") || 1 == Chat.groupStatus || 5 == Chat.groupStatus) && page < 2 ? i.trigger("click") : !e.hasClass("gray") && 4 == t && page < 2 ? e.trigger("click") : (Chat.chatEl.find(".chat-list").css("visibility", "visible"),
            setTimeout(function() {
                "chat-box" == Chat.toggleTypeEl.find(".cur").attr("data-target") && Chat.chatEl.find(".chat-wrap-mask").remove()
            }, 10))
        }),
        Chat.curUserData.canLoadingData = !1
    },
    getUserInfo: function(uid, callback) {
        $.ajax({
            url: "/chat/geek.json",
            data: {
                uid: uid
            },
            dataType: "JSON",
            timeout: 5e3,
            success: function(e) {
                "string" == typeof e && (e = eval("(" + e + ")")),
                callback(e)
            },
            error: function(e) {
                callback({
                    status: 0,
                    msg: "系统错误"
                })
            }
        })
    },
    isNewGeek: function(e) {
        var t = Chat.usersData[e];
        return 1 == (t.infoData ? t.infoData.newGeek : t.newGeek)
    },
    totalNewGeek: function() {
        var e = Chat.containerChat.find(".op-category a[data-status=5]");
        Chat.notification[5].length > 0 ? e.find("span").html("(<em>" + Chat.notification[5].length + "</em>)") : e.find("span").text("")
    },
    addNewGeekUser: function(e) {
        Chat.newGeek.indexOf(e) < 0 && Chat.newGeek.push(e),
        Chat.totalNewGeek()
    },
    addToUserList: function(e) {
        var t = Chat.usersData[e]
          , i = Chat.usersID.filter(function(t) {
            return t.uid == e
        });
        8 == t.relationType || i.length || Chat.usersID.push({
            uid: t.uid,
            name: t.name,
            avatar: t.avatar,
            lastMsg: t.lastMsg
        })
    },
    addUser: function(e, t, i) {
        var s = {}
          , n = [-1, 1, 5]
          , a = Chat.containerChat.find(".op-category .cur")
          , r = function() {
            var t = Chat.renderUser(s)
              , i = Chat.usersData[e]
              , n = Chat.getGroupStatus()
              , a = i.newGeek ? i.newGeek : i.infoData.newGeek;
            (a || "-1" == n && 8 != i.relationType || n == i.relationType) && !Chat.filterGroup && ($(t).prependTo(Chat.userListMain),
            Chat.userList.find(".user-blank").remove()),
            1 == a && Chat.addNewGeekUser(s.uid),
            Chat.setGroupPoint(s.uid),
            Chat.addToUserList(e)
        };
        if (!(e && e < 1001 || i && i.to && i.to.uid < 1001)) {
            if (e && Chat.usersData[e])
                s = Chat.usersData[e];
            else if (i) {
                var o = i.from.uid == Chat.myselfData.uid ? i.to : i.from;
                s = {
                    avatar: o.avatar,
                    fromSource: i.mSource,
                    isTop: 0,
                    lastTime: i.time,
                    name: o.name,
                    sex: 0,
                    newMsgCount: 0,
                    uid: o.uid,
                    encryptUid: t,
                    lastTS: i.time
                };
                var c = ""
                  , l = s.lastTime
                  , d = new Date
                  , h = new Date(d.getFullYear(),d.getMonth(),d.getDate())
                  , u = h - l;
                if (c = d.getFullYear() != new Date(l).getFullYear() && d.getFullYear() - new Date(l).getFullYear() > 1 ? d.getFullYear() - new Date(l).getFullYear() + "年前" : u > 864e5 ? Chat.dateFormat(new Date(l), "MM月dd日") : u > 0 ? "昨天" : Chat.dateFormat(new Date(l), "hh:mm"),
                Chat.usersData[e] = s,
                s.lastTime = c,
                i.offline)
                    return;
                Chat.getUserInfo(e, function(t) {
                    if (1 == t.status) {
                        var o = t.data
                          , c = !1;
                        o.lastTS = i.time,
                        Chat.usersData[e].infoData = o,
                        Chat.usersData[e].relationType = o.relationType || 0,
                        Chat.usersData[e].sourceTitle = o.sourceTitle || "",
                        Chat.usersTempData.length || (Chat.usersTempData[0] = [],
                        c = !0),
                        Chat.usersTempData[0].unshift(o),
                        s.encryptUid = o.encryptUid,
                        s.uid != Chat.myselfData.uid && (n.indexOf(Chat.groupStatus) > -1 || 1 == a.attr("data-val")) && (r(t.newGeek),
                        c && (Chat.containerChat.find(".data-tips").hide(),
                        Chat.containerChat.find(".user-list").show(),
                        Chat.containerChat.find(".chat-search").show(),
                        Chat.detailContainer.show(),
                        Chat.welcomeEl.show()))
                    } else
                        -1 == t.status && (Chat.usersData[e] = null,
                        e && Chat.sendKaEvent("friend_deleted_add_" + e))
                })
            }
            s.orderNum = Chat.chatUserCount,
            Chat.chatUserCount++,
            s.encryptUid && s.uid != Chat.myselfData.uid && (n.indexOf(Chat.groupStatus) > -1 || 1 == a.attr("data-val")) && r()
        }
    },
    addUserMsgBox: function(e, t) {},
    showMessage: function(message) {
        if (_PAGE.runChat && message) {
            12 == message.body.type && message.body.hyperLink && 1 == message.body.hyperLink.hyperLinkType && (message.body.text = message.body.hyperLink.text),
            20 == message.body.type && (message.body.text = "[动画表情]");
            var base = Chat.showMessageBase(message)
              , messageHtml = "";
            switch (message.body.type) {
            case 1:
                3 == message.body.templateId || 6 == message.body.templateId ? (messageHtml = this.showSystemMessage(message),
                "请先填写接收附件简历邮箱" == message.body.text && Chat.showSetEmail(function() {
                    Chat.exchangeResume(1, {
                        from: {
                            uid: Chat.curUserData.uid
                        }
                    })
                })) : messageHtml = this.showTextMessage(message);
                break;
            case 2:
                message.body.text = message.body.text ? message.body.text : "收到语音消息，请登录APP端查收",
                messageHtml = this.showTextMessage(message);
                break;
            case 3:
                if (1 == message.body.templateId) {
                    if (message.body.image) {
                        var tinyData = message.body.image.tinyImage
                          , originData = message.body.image.originImage
                          , width = tinyData.width
                          , height = tinyData.height;
                        width > 300 && (height /= Math.floor(width / 300),
                        height = Math.floor(height)),
                        message.body.text = '<img src="' + tinyData.url + '" class="img-tiny" width="" height="' + height + '" data-large="' + originData.url + '" large-x="' + tinyData.width + '" large-y="' + tinyData.height + '" />'
                    }
                    messageHtml = this.showTextMessage(message)
                }
                break;
            case 4:
                var __action = message.body.action || {};
                if (20 == __action.aid) {
                    var extend = eval("(" + message.body.action.extend + ")");
                    Chat.setDialogMessageDomStatus(extend.msg_id)
                } else if (27 == __action.aid)
                    message.body.text = "请求交换联系方式已发送",
                    messageHtml = this.showSystemMessage(message);
                else if (32 == __action.aid)
                    message.body.text = "请求交换微信已发送",
                    messageHtml = this.showSystemMessage(message);
                else if (37 == __action.aid) {
                    var email = _PAGE.email;
                    if (message.body.action.extend && message.body.action.extend.indexOf("{") > -1) {
                        var extend = eval("(" + message.body.action.extend + ")");
                        email = extend.resumeEmail
                    }
                    message.body.text = "简历请求已发送。如果牛人同意，TA的简历将发送到{" + email + "}!",
                    messageHtml = this.showSystemMessage(message)
                }
                break;
            case 7:
                if (message.isSelf)
                    0 == message.body.dialog.type || 4 == message.body.dialog.type && (base.userData.isCloseInterview = !0);
                else {
                    var __group = [0, 1, 2, 11];
                    message.body.dialog ? __group.indexOf(message.body.dialog.type) > -1 ? messageHtml = this.showDialogMessage(message) : 9 == message.body.dialog.type ? (message.body.text = "面试时间到",
                    messageHtml = this.showSystemMessage(message)) : (message.body.text = "收到一条消息，请在手机上查看。",
                    messageHtml = this.showSystemMessage(message)) : (message.body.text = "",
                    messageHtml = this.showSystemMessage(message))
                }
                break;
            case 12:
                var hyperLinkType = message.body.hyperLink ? message.body.hyperLink.hyperLinkType : "";
                if (2 == hyperLinkType && (message.body.hyperLink.text.indexOf("面试提醒") > -1 || message.body.hyperLink.text.indexOf("面试邀请") > -1) && message.to.uid == Chat.myselfData.uid)
                    message.body.text = message.body.hyperLink.text,
                    messageHtml = this.showSystemMessage(message),
                    Chat.opTopEls.find(".dropdown-interview").css("display", "inline-block"),
                    PageSet.markerInfo[11] && Chat.flashTip(Chat.opTopEls.find(".dropdown-interview"), "在这里查看面试信息", 11);
                else if (3 == hyperLinkType && message.to.uid == Chat.myselfData.uid)
                    message.body.text = message.body.hyperLink.text,
                    messageHtml = this.showSystemMessage(message);
                else if (1 == hyperLinkType)
                    message.body.text = "附件简历已经发送到您的邮箱",
                    messageHtml = this.showTextMessage(message),
                    Chat.toggleTypeEl.find('span[data-target="attachment-container"]').removeClass("gray"),
                    Chat.toggleTypeEl.find(".dropdown-wrap").css("display", "none"),
                    PageSet.markerInfo[10] && Chat.flashTip(Chat.toggleTypeEl.find('span[data-target="attachment-container"]'), "在这里查看已收到的简历", 10);
                else if (6 === hyperLinkType) {
                    var p2 = this.getRemarksAndTagType(message);
                    this.joinSystemMessage(message, p2),
                    messageHtml = this.showSystemMessage(message)
                }
                break;
            case 14:
                messageHtml = this.showInterviewMessage(message);
                break;
            case 16:
                3 == message.type && 1 == message.body.templateId ? message.body.text = "收到一条消息，请在手机上查看。" : message.body.text = "该牛人正在使用提问加油卡寻求你的帮助，可登录app查看。",
                messageHtml = this.showSystemMessage(message);
                break;
            case 20:
                if ((1 == message.body.templateId || 20 == message.body.type) && message.body.sticker) {
                    var packId = message.body.sticker.packId
                      , sid = message.body.sticker.sid;
                    if (message.body.sticker.image) {
                        var originData = message.body.sticker.image.originImage
                          , tinyData = message.body.sticker.image.tinyImage
                          , extraStr = "";
                        if (0 == packId) {
                            var isCollected = !1;
                            if (Chat.storedEmtions)
                                for (var k = 0; k < Chat.storedEmtions.length; k++)
                                    Chat.storedEmtions[k].itemId == sid && (isCollected = !0);
                            isCollected || (extraStr = '<span class="btn-store" data-origin="' + originData.url + '" data-packId="' + packId + '" data-sid="' + sid + '">添加表情</span>')
                        }
                        message.body.text = '<img src="' + originData.url + '"  class="img-tiny" width="' + originData.width / 2 + '" height="' + originData.height / 2 + '"/>' + extraStr,
                        messageHtml = this.showTextMessage(message)
                    }
                }
                break;
            case 99:
                messageHtml = this.showSystemMessage(message);
                break;
            default:
                message.body.text = "收到一条消息，请在手机上查看。",
                messageHtml = this.showSystemMessage(message)
            }
            99 == message.body.type && message.from.uid == Chat.curUserData.uid && 0 == Chat.chatListCon.find("#temp-" + message.mid).length ? ($(messageHtml).appendTo(Chat.chatListCon),
            Chat.scrollToBottom()) : (message.from.uid == Chat.myselfData.uid && message.to && message.to.uid == Chat.curUserData.uid || message.to && message.to.uid == Chat.myselfData.uid && message.from.uid == Chat.curUserData.uid) && (messageHtml && message.from.uid == Chat.curUserData.uid || message.from.uid == Chat.myselfData.uid) && (Chat.curUserData.historyLastItem && "history" == message.typeSource && 0 == Chat.chatListCon.find("#temp-" + message.mid).length ? ($(messageHtml).prependTo(Chat.chatListCon),
            Chat.showTimeLine(message, !0)) : message.offline || 0 != Chat.chatListCon.find("#temp-" + message.mid).length || (Chat.showTimeLine(message),
            $(messageHtml).appendTo(Chat.chatListCon),
            Chat.scrollToBottom()),
            message.from.uid != Chat.curUserData.uid || Chat.curUserData.lastMessage[message.mid] || (Chat.curUserData.lastMessage[message.mid] = !0))
        }
    },
    flashTip: function(e, t, i) {
        var s = $('<div class="tooltip"><p class="gray">' + t + "</p></div>");
        if (e.find(".tooltip").length < 1) {
            e.prepend(s);
            var n = e.width() / 2 - s.width() / 2;
            e.find(".tooltip").css({
                left: n,
                display: "inline-block"
            })
        }
        PageSet.markerInfo[i] && $.ajax({
            url: "/setting/notify/set.json",
            type: "POST",
            data: {
                type: i
            },
            dataType: "JSON",
            timeout: 5e3,
            success: function(e) {},
            error: function(e) {}
        }),
        setTimeout(function() {
            e.find(".tooltip").remove()
        }, 3e3),
        PageSet.markerInfo[i] = !1
    },
    showMessageOther: function(e) {
        if (_PAGE.runChat && e) {
            var t = null;
            switch (e.body.type) {
            case 1:
                1 == e.body.templateId ? Chat.showMessage(e) : 3 == e.body.templateId || 7 == e.body.templateId || 6 == e.body.templateId ? Chat.showMessage(e) : 5 == e.body.templateId && e.to.uid == Chat.myselfData.uid && (e.body.text = (e.body.text || "").replace(/\<\/?[a-zA-Z]+\>/g, "").replace(/<\/?phone>/g, "").replace(/<\/?copy>/g, "").replace(/&lt;phone&gt;/g, "").replace(/&lt;\/phone&gt;/g, "").replace(/&lt;copy&gt;/g, "").replace(/&lt;\/copy&gt;/g, ""),
                Chat.showMessageBase(e),
                t = Chat.showSystemMessage(e),
                e.body.text.indexOf("微信号") > -1 ? (Chat.opTopEls.find(".dropdown-weixin").css("display", "inline-block"),
                PageSet.markerInfo[12] && Chat.flashTip(Chat.opTopEls.find(".dropdown-weixin"), "在这里查看已经交换的微信", 12)) : e.body.text.indexOf("手机号") > -1 && (Chat.opTopEls.find(".dropdown-phone").css("display", "inline-block"),
                PageSet.markerInfo[9] && Chat.flashTip(Chat.opTopEls.find(".dropdown-phone"), "在这里查看已经交换的电话", 9)));
                break;
            case 4:
                if (!e.body.action)
                    break;
                30 == e.body.action.aid ? Chat.outputData[e.body.action.aid] = JSON.parse(e.body.action.extend) : 31 == e.body.action.aid ? Chat.outputData[e.body.action.aid] = JSON.parse(e.body.action.extend) : 35 == e.body.action.aid ? Chat.outputData[e.body.action.aid] = JSON.parse(e.body.action.extend) : 47 == e.body.action.aid || 67 == e.body.action.aid || 63 == e.body.action.aid || 50 == e.body.action.aid || 61 == e.body.action.aid || 70 == e.body.action.aid && "" != e.body.action.extend && (alert("您的账号当前处于不可使用状态，请登录BOSS直聘手机APP查看详情"),
                window.location.href = "/logout/?toUrl=/user/security/blocktip.html");
                break;
            case 8:
                Chat.showMessageBase(e);
                break;
            case 10:
                Chat.showMessageBase(e),
                e.isSelf ? e.body.text = "发出一个红包，请登录APP查看" : e.body.text = "收到红包消息，请登录APP端查收",
                t = Chat.showSystemMessage(e);
                break;
            case 14:
                Chat.showMessage(e);
                break;
            case 16:
                1 == e.body.templateId && Chat.showMessage(e)
            }
            99 == e.body.type && e.from.uid == Chat.curUserData.uid && 0 == Chat.chatListCon.find("#temp-" + e.mid).length ? ($(t).appendTo(Chat.chatListCon),
            Chat.scrollToBottom()) : (e.from.uid == Chat.myselfData.uid && e.to.uid == Chat.curUserData.uid || e.to.uid == Chat.myselfData.uid && e.from.uid == Chat.curUserData.uid) && (t && e.from.uid == Chat.curUserData.uid || e.from.uid == Chat.myselfData.uid) && (Chat.curUserData.historyLastItem && "history" == e.typeSource && 0 == Chat.chatListCon.find("#temp-" + e.mid).length ? ($(t).prependTo(Chat.chatListCon),
            Chat.showTimeLine(e, !0)) : e.offline || 0 != Chat.chatListCon.find("#temp-" + e.mid).length || (Chat.showTimeLine(e),
            $(t).appendTo(Chat.chatListCon),
            Chat.scrollToBottom()),
            e.from.uid != Chat.curUserData.uid || Chat.curUserData.lastMessage[e.mid] || (Chat.curUserData.lastMessage[e.mid] = !0))
        }
    },
    updateMessagePage: function(e) {
        if (Chat.propMessages.push(e),
        window.location.href.indexOf("/boss/item/myItemList.html") > -1) {
            var t = $(".frame-container").contents().find(".op-category")
              , i = t.find('a[data-type="notice"]')
              , s = null;
            if (!t.length)
                return;
            if (s = $(".frame-container").get(0).contentWindow,
            i.hasClass("cur"))
                return;
            if (i.append('<i class="dot"></i>'),
            s)
                try {
                    s.ZhiBean.propNoticeList(1)
                } catch (e) {}
        }
    },
    showInterviewMessage: function(e) {
        if (4 != e.type) {
            var t = e.from.uid == Chat.myselfData.uid
              , i = t ? "item-myself" : "item-friend"
              , s = e.pushText.replace(e.from.name, "").replace("给你", "")
              , n = ""
              , a = s.indexOf("取消") > -1 ? '<i class="icon-interview-cancel"></i>' : '<i class="icon-interview-send"></i>'
              , r = s + a;
            return t || (a = s.indexOf("接受") > -1 ? '<i class="icon-interview-accept"></i>' : '<i class="icon-interview-reject"></i>',
            r = a + s,
            n = '<div class="figure"><img src="' + e.from.avatar + '" alt=""></div>'),
            '<li class="' + i + '">' + n + '<div class="text">' + r + "</div></li>"
        }
    },
    showTextMessage: function(e) {
        var t = ""
          , i = ""
          , s = ""
          , n = ""
          , a = e.body.text ? e.body.text : e.pushText
          , r = e.time
          , o = /^<img src="/.test(a) ? "bgf" : ""
          , c = this.messageConverToHtml(filterXss(a)).replace(/&amp;middot;/g, "&#183;").replace(/&amp;lt;/g, "&#60;").replace(/&amp;gt;/g, "&#62;")
          , l = "temp-" + (e.tempID ? e.tempID : r);
        if ("newSubmit" == e.typeSource && (c = this.messageConverToHtml(filterXss(e.body.text)).replace(/&amp;lt;/g, "&#60;").replace(/&amp;gt;/g, "&#62;").replace(/&middot;/g, "")),
        e.from.uid == Chat.myselfData.uid) {
            if ("history" == e.typeSource)
                switch (i = '<i class="status"></i>',
                e.status) {
                case 0:
                case 1:
                    t = "status-delivery";
                    break;
                case 2:
                    t = "status-read";
                    break;
                default:
                    t = "",
                    i = ""
                }
            else
                "newSubmit" == e.typeSource ? (s = 'id="' + l + '"',
                i = '<i class="status"></i>') : e.from.uid == Chat.myselfData.uid && (t = "status-delivery",
                i = '<i class="status"></i>');
            var d = Chat.messageStatusData[e.to.uid];
            return d || (d = Chat.messageStatusData[e.to.uid] = {}),
            e.mid ? (s = 'id="temp-' + e.mid + '"',
            d[e.mid] = {}) : (Chat.messageStatusDataTemp[e.tempID] = e.to.uid,
            d[e.tempID] = {
                tempID: e.tempID
            }),
            "<li " + s + ' class="item-myself item-interview ' + t + '"><div class="figure"></div><div class="text ' + o + '">' + i + c + "</div></li>"
        }
        return e.mid && (s = 'id="temp-' + e.mid + '"'),
        3 == e.body.type && 1 == e.body.templateId && e.body.image && (n = "item-image"),
        12 == e.body.type && 1 == e.body.templateId && e.body.hyperLink && 1 == e.body.hyperLink.hyperLinkType && (n = "item-file",
        c = Chat.revertFilenameToIcon(e.body.hyperLink.text) + '<p data-origin="' + e.body.hyperLink.url + '"><b>' + e.body.hyperLink.text + "</b>" + e.body.text + "</p>"),
        ("您收到一条来自该牛人的消息" === c || "您收到了来自该牛人的消息" === c || e.encryptedBody) && (c += '<a href="javascript:;" class="msg-item-unlock">点击解锁</a><i class="icon-msg-lock"></i>'),
        "<li " + s + ' class="item-friend ' + n + '"><div class="figure"><img src="' + e.from.avatar + '" alt="" /></div><div class="text ' + o + '">' + c + "</div></li>"
    },
    showSystemMessage: function(e) {
        if (e.body.text) {
            return '<li class="item-system" id="temp-' + (e.mid || e.time) + '"><div class="text">' + e.body.text + "</div></li>"
        }
    },
    getRemarksAndTagType: function(e) {
        var t = /&ba=([^&]+)/
          , i = decodeURIComponent(e.body.hyperLink.url);
        return (i.match(t) ? JSON.parse(i.match(t)[1]) : "").p2
    },
    joinSystemMessage: function(e, t) {
        var i = ""
          , s = e.body.hyperLink.text.split(" ");
        s.length;
        s.pop();
        var n = s.join(" ");
        1 === t ? i = "更新标签：" + n : 2 === t ? i = "更新备注：" + n : 3 === t && (i = "备注信息仅您自己可见"),
        e.body.text = i
    },
    showDialogMessage: function(e) {
        var t, i, s = "", n = "", a = "";
        switch (e.body.dialog.type) {
        case 0:
            s = "item-phone",
            n = "icon-contact";
            break;
        case 1:
            s = "item-weixin",
            n = "icon-weixin";
            break;
        case 2:
            s = "item-resume",
            n = "icon-resume";
            break;
        case 11:
            s = "item-phone",
            n = "icon-contact"
        }
        Chat.setLatestDialog(e),
        e.body.dialog.operated && (a = "disabled"),
        t = $('<li class="item-friend ' + s + '"><div class="figure"><img src="' + e.from.avatar + '" alt="" /></div><div class="text"><i class="' + n + '"></i>' + this.messageConverToHtml(e.body.dialog.text) + '<i class="icon-arow-right"></i><span class="op"><a href="javascript:;" class="link-agree ' + a + '">同意</a><a href="javascript:;" class="link-refuse ' + a + '">拒绝</a></span></div></li>'),
        e.body.dialog.operated || e.from.uid != Chat.curUserData.uid || (i = $('<div class="notice-dialog" data-mid="' + e.mid + '" data-type="' + e.body.dialog.type + '"><div class="op"><span class="btn btn-refuse">拒绝</span><span class="btn btn-agree ' + a + '">同意</span></div><div class="text">' + this.messageConverToHtml(e.body.dialog.text) + "</div></div>"),
        Chat.checkDialogMessage(e) && (Chat.chatBox.find('.notice-dialog[data-type="' + e.body.dialog.type + '"]').remove(),
        i.appendTo(Chat.chatBox)));
        var r = function(n) {
            var n = n;
            return !n.hasClass("disabled") && (Chat.checkUserBlock() ? GeekHotProp.shop(Chat.curUserData.infoData.page, {
                callBack: Chat.ublockBlockGeek
            }) : (t.find(".link-agree,.link-refuse").addClass("disabled"),
            "item-phone" == s && (n.hasClass("link-agree") || n.hasClass("btn-agree") ? Chat.exchangePhone(1, e, i, t) : Chat.exchangePhone(0, e, i, t)),
            "item-weixin" == s && (n.hasClass("link-agree") || n.hasClass("btn-agree") ? Chat.exchangeWeixin(1, e, i, t) : Chat.exchangeWeixin(0, e, i, t)),
            void ("item-resume" == s && (n.hasClass("link-agree") || n.hasClass("btn-agree") ? Chat.exchangeResume(1, e, i, t) : Chat.exchangeResume(0, e, i, t)))))
        };
        return t.on("click", ".link-agree,.link-refuse", function(e) {
            r($(this))
        }),
        i && (i.on("click", ".btn", function(e) {
            r($(this))
        }),
        i.on("click", ".close", function() {
            i.remove()
        })),
        t
    },
    setLatestDialog: function(e) {
        var t = e.body.dialog.type
          , i = e.body.dialog.operated
          , s = e.mid;
        i || Chat.curUserData && (Chat.curUserData.latestDialogs || (Chat.curUserData.latestDialogs = {}),
        Chat.curUserData.latestDialogs[t] || (Chat.curUserData.latestDialogs[t] = {}),
        !i && Chat.curUserData.latestDialogs[t].mid && s < Chat.curUserData.latestDialogs[t].mid || (Chat.curUserData.latestDialogs[t].mid = s,
        Chat.curUserData.latestDialogs[t].operated = i))
    },
    checkDialogMessage: function(e) {
        var t = e.body.dialog.type
          , i = e.body.dialog.operated
          , s = e.mid;
        return !(!i && Chat.curUserData.latestDialogs && Chat.curUserData.latestDialogs[t] && Chat.curUserData.latestDialogs[t].mid && s < Chat.curUserData.latestDialogs[t].mid)
    },
    showHistoryData: function(e) {
        var e = e;
        if (Chat.chatHistoryData[e]) {
            var t, i = Chat.chatHistoryData[e].chatList, s = '<li class="item-time item-history-line"><span class="time">点此查看历史消息</span></li>';
            if (i.length > 0) {
                for (t = 0; t < i.length; t++)
                    s += i[t];
                return $(s).appendTo(Chat.chatListCon),
                Chat.sendReadMessage({
                    userData: Chat.curUserData,
                    uid: e,
                    mid: 0
                }),
                Chat.scrollToBottom(),
                !0
            }
        }
    },
    setHistoryData: function(e, t) {
        var i;
        e.typeSource,
        e.from.uid == Chat.myselfData.uid ? i = e.to.uid : e.to.uid == Chat.myselfData.uid && (i = e.from.uid),
        Chat.chatHistoryData[i] || (Chat.chatHistoryData[i] = {
            chatList: []
        });
        var s = Chat.chatHistoryData[i].chatList;
        s.length > 10 && Chat.chatHistoryData[i].chatList.shift(),
        Chat.chatHistoryData[i].chatList.push(t)
    },
    setDialogMessageDomStatus: function(e, t) {
        e && Chat.chatListCon.find("#temp-" + e).find(".btn").addClass("disabled").unbind("click")
    },
    messageConverToHtml: function(e) {
        if (!e)
            return "";
        var t = Emotion.textCodeToImg(e);
        if (/^<img src="/.test(t))
            t = t.replace("&lt;", "<").replace("&gt;", ">");
        else {
            var i = /^(?!(http|https)).*/.test(t) ? "http://" : "";
            t = t.replace(/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g, "<a href='" + i + "$1' target='_blank'>$1</a>")
        }
        return e ? t.replace(/\n/g, "<br/>").replace(/\\n/g, "<br/>") : ""
    },
    setTextMessageDomStatus: function(e, t, i, s) {
        if (Chat.curUserData.uid == e) {
            var n, a = Chat.messageStatusData[e];
            if (a)
                if (t && i && (a[t] = a[i],
                n = Chat.chatListCon.find("#temp-" + a[i].tempID),
                delete a[i],
                delete Chat.messageStatusDataTemp[i]),
                t && !i && (n = Chat.chatListCon.find("#temp-" + t)),
                "read" == s)
                    Chat.chatListCon.find(".status-delivery").removeClass("status-delivery").addClass("status-read");
                else if (s) {
                    var r = a[t || i];
                    if (!r)
                        return;
                    n.attr("class", n.attr("class").replace(/status\-/g, "")).addClass("status-" + s),
                    t && n.attr("id", "temp-" + t),
                    "error" == s && (delete a[r.tempID],
                    delete a[t])
                }
        }
    },
    sendReadMessage: function(e) {
        e.mid && e.uid != Chat.myselfData.uid && ChatWebsocket.sendReadMessage({
            uid: e.uid,
            mid: e.mid,
            callback: function(t) {
                e.curUserData.maxMessageId = null
            }
        })
    },
    getOutputData: function() {
        return Chat.outputData
    },
    sendTextMessage: function(e) {
        e.noWebsocket;
        if (PageSet.hasShowReplyTip || Chat.curUserData.groupId || 5 != Chat.curUserData.infoData.relationType || Chat.chatListCon.find(".item-myself").length || (Chat.workflowTip(null, 1),
        PageSet.hasShowReplyTip = !0),
        Chat.checkUserBlock())
            return GeekHotProp.shop(Chat.curUserData.infoData.page, {
                callBack: Chat.ublockBlockGeek
            });
        var t = {};
        t = e.body.sticker ? Chat.protobufMessage.createMessage.graphic(e) : Chat.protobufMessage.createMessage.text(e),
        Chat.curUserData.groupId ? Chat.addGroupMessage(e) : Chat.showMessage(e),
        ChatWebsocket.send(t),
        Chat.deleteDraft(Chat.curUserData.uid)
    },
    setUnReadMessage: function(e) {
        Chat.unReadMessage[e.mid] || (Chat.unReadMessage[e.mid] = e)
    },
    checkUnreadMessage: function() {
        var e, t = Chat.unReadMessage;
        for (var i in t)
            e = t[i].from.uid,
            8 == Chat.usersData[e].relationType && Chat.setUnReadMessageCount(-1)
    },
    getTopInfo: function(e) {
        var e = e
          , t = ""
          , i = "";
        if (e.parent().hasClass("dropdown-phone"))
            t = "/chat/query/exchangephone.json",
            i = "电话";
        else if (e.parent().hasClass("dropdown-weixin"))
            t = "/chat/query/exchangeweixin.json",
            i = "微信";
        else if (e.parent().hasClass("dropdown-interview"))
            return t = "/chat/query/interviewschedule.json",
            i = "面试信息",
            e.parent().find(".dropdown-menu").remove(),
            Publisher.interview(e, "dialog-down-default interview-message-dialog"),
            !0;
        e.parent().find(".dropdown-menu").html('<p class="gray"><i class="icon-toast-loading"></i><span>请稍后</span></p>'),
        $.ajax({
            url: t,
            data: {
                uid: Chat.curUserData.encryptUid
            },
            dataType: "JSON",
            timeout: 3e4,
            success: function(t) {
                var t = t;
                t.rescode ? (t.phone && e.parent().find(".dropdown-menu").html('<p class="gray"><i class="icon-contact"></i>' + t.phone + "</p>"),
                t.weixin && e.parent().find(".dropdown-menu").html('<p class="gray"><i class="icon-weixin"></i>' + t.weixin + "</p>"),
                t.data && t.data.appointmenttime,
                "电话" == i && "" == t.phone && e.parent().find(".dropdown-menu").html('<p class="gray"><span>获取电话失败</span></p>'),
                "微信" == i && "" == t.weixin && e.parent().find(".dropdown-menu").html('<p class="gray"><span>获取微信失败</span></p>'),
                "面试信息" != i || t.data && t.data.appointmenttime || e.parent().find(".dropdown-menu").html('<p class="gray"><span>获取面试信息失败</span></p>')) : e.parent().find(".dropdown-menu").html('<p class="gray"><span>获取' + i + "失败</span></p>")
            },
            error: function(t) {
                e.parent().find(".dropdown-menu").html('<p class="gray"><span>获取' + i + "失败</span></p>")
            }
        })
    },
    exchangeWeixin: function(e, t, i) {
        var s = ""
          , n = {}
          , a = "";
        switch (e) {
        case 1:
            var r = t.body.dialog.buttons[0].url.match(/%3C(.+)%3E/);
            r && (a = r[1]),
            s = "/chat/acceptWeixin.json",
            n = {
                to: t.from.uid,
                mid: t.mid,
                aid: 33,
                action: 0,
                extend: a
            };
            break;
        case 0:
            s = "/chat/rejectWeixin.json",
            n = {
                to: t.from.uid,
                mid: t.mid,
                aid: 34,
                action: 1
            };
            break;
        case 2:
            s = "/chat/requestWeixin.json",
            n = {
                to: t.from.uid
            }
        }
        $.ajax({
            url: s,
            data: n,
            dataType: "JSON",
            cache: !1,
            timeout: 3e4,
            success: function(s) {
                2 == e && 1 == s.result ? (Chat.mids[s.mid] = "RequestWeixin",
                Chat.showMessage({
                    time: (new Date).getTime(),
                    from: t.from,
                    body: {
                        type: 99,
                        text: "请求交换微信已发送"
                    }
                })) : 2 == s.result ? Chat.showSetWeixin(function() {
                    Chat.exchangeWeixin(e, t, i)
                }) : (Chat.showMessage({
                    time: (new Date).getTime(),
                    from: t.from,
                    body: {
                        type: 99,
                        text: s.msg
                    }
                }),
                i && i.remove(),
                1 == e && 1 == s.result && Chat.opTopEls.find(".dropdown-weixin").css("display", "inline-block"))
            },
            error: function(e) {
                Chat.showMessage({
                    time: (new Date).getTime(),
                    from: t.from,
                    to: t.to,
                    body: {
                        type: 99,
                        text: "系统错误!"
                    }
                })
            }
        })
    },
    exchangePhone: function(e, t, i) {
        var s = ""
          , n = {};
        switch (e) {
        case 1:
            s = "/chat/acceptContact.json",
            n = {
                to: t.from.uid,
                mid: t.mid,
                aid: 28,
                action: 0
            };
            break;
        case 0:
            s = "/chat/rejectContact.json",
            n = {
                to: t.from.uid,
                mid: t.mid,
                aid: 29,
                action: 1
            };
            break;
        case 2:
            s = "/chat/requestContact.json",
            n = {
                to: t.from.uid
            }
        }
        $.ajax({
            url: s,
            data: n,
            dataType: "JSON",
            cache: !1,
            timeout: 3e4,
            success: function(s) {
                2 == e && 1 == s.result ? (Chat.mids[s.mid] = "RequestPhone",
                Chat.showMessage({
                    time: (new Date).getTime(),
                    from: t.from,
                    body: {
                        type: 99,
                        text: "请求交换联系方式已发送"
                    }
                }),
                i && i.remove()) : 1 != s.result ? (Chat.showMessage({
                    time: (new Date).getTime(),
                    from: t.from,
                    to: t.to,
                    body: {
                        type: 99,
                        text: s.msg
                    }
                }),
                i && i.remove()) : (i && i.remove(),
                1 == e && 1 == s.result && Chat.opTopEls.find(".dropdown-phone").css("display", "inline-block"))
            },
            error: function(e) {
                Chat.showMessage({
                    time: (new Date).getTime(),
                    from: t.from,
                    to: t.to,
                    body: {
                        type: 99,
                        text: "系统错误!"
                    }
                })
            }
        })
    },
    exchangeResume: function(e, t, i, s) {
        var n = ""
          , a = {}
          , r = ""
          , s = s;
        switch (e) {
        case 1:
            var o = t.body.dialog.buttons[0].url.match(/%3C(.+)%3E/);
            o && (r = o[1]),
            n = "/chat/acceptResume.json",
            a = {
                to: t.from.uid,
                mid: t.mid,
                aid: 41,
                action: 0,
                extend: r
            };
            break;
        case 0:
            n = "/chat/rejectResume.json",
            a = {
                to: t.from.uid,
                mid: t.mid,
                aid: 42,
                action: 1
            };
            break;
        case 2:
            n = "/chat/requestResume.json",
            a = {
                to: t.from.uid
            }
        }
        $.ajax({
            url: n,
            data: a,
            dataType: "JSON",
            cache: !1,
            timeout: 3e4,
            success: function(n) {
                2 == e && 1 == n.result ? (Chat.mids[n.mid] = "RequestResume",
                Chat.showMessage({
                    time: (new Date).getTime(),
                    from: t.from,
                    body: {
                        type: 99,
                        text: "简历请求已发送。如果牛人同意，TA的简历将发送到 {" + Chat.myselfData.email + "}"
                    }
                }),
                n.email && (_PAGE.email = n.email,
                Chat.myselfData && (Chat.myselfData.email = n.email))) : 2 == n.result ? Chat.showSetEmail(function() {
                    Chat.exchangeResume(2, {
                        from: {
                            uid: Chat.curUserData.uid
                        }
                    })
                }) : 1 == n.result ? (s && s.removeClass("item-resume"),
                Chat.showMessage({
                    time: (new Date).getTime(),
                    from: t.from,
                    body: {
                        type: 99,
                        text: n.msg
                    }
                }),
                i && i.remove()) : Chat.showMessage({
                    time: (new Date).getTime(),
                    from: t.from,
                    body: {
                        type: 99,
                        text: n.msg
                    }
                })
            },
            error: function(e) {
                Chat.showMessage({
                    time: (new Date).getTime(),
                    from: t.from,
                    to: t.to,
                    body: {
                        type: 99,
                        text: "系统错误!"
                    }
                })
            }
        })
    },
    showSetWeixin: function(e) {
        $.dialog({
            title: "输入微信",
            content: '<form action="/user/updateWeixin.json"><div class="form-row through-row"><input type="text" name="weixin" placeholder="输入您的微信" class="ipt" /></div><div class="tip-text">对方同意后，可以看到彼此的微信号，您也可以在个人信息中修改。</div></form>',
            closeText: !1,
            confirmText: "确定",
            cancelText: "取消",
            preKa: "",
            wrapClass: "dialog-chat-default",
            lock: !0,
            opacityLock: !0,
            onOpen: function(t) {
                t.find("form").on("submit", function(i) {
                    Chat.saveSetWeixin($(this), t, e),
                    i.preventDefault()
                })
            },
            onConfirm: function(t) {
                Chat.saveSetWeixin(t.find("form"), t, e)
            },
            onClose: function(e) {}
        })
    },
    saveSetWeixin: function(e, t, i) {
        var e = e
          , s = e.find(".ipt")
          , n = e.attr("action");
        return "" == s.val().replace(/(^\s*)|(\s*$)/g, "") ? ($.toast({
            content: "请填写微信号",
            type: "warning"
        }),
        s.focus(),
        !1) : /^[a-zA-Z\d_\-]{5,50}$/.test(s.val()) ? ($.ajax({
            type: "POST",
            url: n,
            dataType: "JSON",
            data: e.serialize(),
            success: function(e) {
                var e = e;
                1 == e.rescode ? i && i() : $.toast({
                    content: "保存失败",
                    type: "error"
                })
            },
            error: function(e) {
                $.toast({
                    content: "保存失败",
                    type: "error"
                })
            }
        }),
        void t.remove()) : ($.toast({
            content: "请填写正确的微信号",
            type: "warning"
        }),
        s.focus(),
        !1)
    },
    showSetEmail: function(e) {
        $.dialog({
            title: "输入您用于接收简历的邮箱",
            content: '<form action="/bossweb/saveresumeemail.json"><div class="form-row through-row"><input type="text" name="email" placeholder="例：aaron@zhipin.com" class="ipt" /></div><div class="tip-text">牛人发送的简历将发送到该邮箱，您可以在 App 的个人资料中修改，建议使用您的企业邮箱</div></form>',
            closeText: !1,
            confirmText: "确定",
            cancelText: "取消",
            preKa: "",
            wrapClass: "dialog-chat-default",
            lock: !0,
            opacityLock: !0,
            onOpen: function(t) {
                t.find("form").on("submit", function(i) {
                    Chat.saveSetEmail($(this), t, e),
                    i.preventDefault()
                })
            },
            onConfirm: function(t) {
                Chat.saveSetEmail(t.find("form"), t, e)
            },
            onClose: function(e) {}
        })
    },
    saveSetEmail: function(e, t, i) {
        var e = e
          , s = e.find(".ipt")
          , n = e.attr("action");
        return "" == s.val().replace(/(^\s*)|(\s*$)/g, "") ? ($.toast({
            content: "请填写邮箱",
            type: "warning"
        }),
        s.focus(),
        !1) : /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(s.val()) ? ($.ajax({
            type: "POST",
            url: n,
            dataType: "JSON",
            data: e.serialize(),
            success: function(e) {
                var e = e;
                1 == e.rescode ? i && i() : $.toast({
                    content: "保存失败",
                    type: "error"
                })
            },
            error: function(e) {
                $.toast({
                    content: "保存失败",
                    type: "error"
                })
            }
        }),
        void t.remove()) : ($.toast({
            content: "请填写正确的邮箱",
            type: "warning"
        }),
        s.focus(),
        !1)
    },
    viewLargeImage: function(e) {
        var e = e
          , t = e.attr("data-large")
          , i = e.attr("large-y")
          , s = new Image;
        s.src = t,
        e.parent().append('<div class="pre-loading"><span class="loading-more"><i></i><i></i><i></i></span></div>'),
        s.onload = function() {
            e.parent().find(".pre-loading").remove(),
            $.dialog({
                title: "",
                content: '<div class="img-viewer"><img src="' + t + '" /></div>',
                closeText: !0,
                confirmText: !1,
                cancelText: !1,
                wrapClass: "dialog-layer-full",
                lock: !0,
                onOpen: function(e) {
                    e.find(".dialog-con").on("click", function(t) {
                        $(t.target).parents(".img-viewer").length || e.remove()
                    }),
                    window.innerHeight < i && e.find(".img-viewer").css({
                        position: "static",
                        transform: "translate(0, 0)"
                    })
                }
            })
        }
    },
    viewFullResume: function(e, t, i) {
        var t = t || "/resume/download4web?geekId=" + Chat.curUserData.encryptUid
          , e = e
          , s = {}
          , n = i && i.hasClass("link-fullscreen");
        s = n ? i.closest(".attachment-view").find("img").clone() : $('<img src="' + e + '" />'),
        $.dialog({
            title: '<a href="' + t + '" class="link-attachment"><span class="tooltip">下载</span></a><a href="javascript:;" class="close" ka="dialog-close"><i class="icon-close"></i><span class="tooltip">关闭</span></a>',
            content: '<div class="pre-loading"><span class="loading-more"><i></i><i></i><i></i></span></div>',
            closeText: !1,
            confirmText: !1,
            cancelText: !1,
            wrapClass: "dialog-layer-full dialog-layer-resume",
            lock: !0,
            onOpen: function(e) {
                n && s.height() > 0 ? (e.find(".dialog-con").html('<div class="img-viewer"></div>'),
                e.find(".img-viewer").append(s),
                window.innerHeight < s.height() && e.find(".img-viewer").css({
                    position: "static",
                    transform: "translate(0, 0)"
                })) : Resume.loadAttachment("/resume/prview4web/" + Chat.userList.find(".cur a").attr("data-eid") + ".json", e.find(".dialog-con")),
                e.find(".dialog-con").on("click", function(t) {
                    $(t.target).parents(".img-viewer").length || $(t.target).parents(".attachment-detail").length || e.remove()
                })
            }
        })
    },
    showOperateHelp: function(e) {
        $.dialog({
            title: "帮助",
            content: '<div class="operate-help">\t\t\t\t\t\t<h4>牛人分类－工作流：</h4>\t\t\t\t\t\t<ul>\t\t\t\t\t\t\t<li><span class="name"><i class="icon-category-all"></i>全部</span><p>正在与您沟通所有牛人，与app联系人列表一致</p></li>\t\t\t\t\t\t\t<li><span class="name"><i class="icon-category-newgeek"></i>新牛人</span><p>指主动与您沟通，且您<span class="text-blue">尚未查看</span>的新牛人</p></li>\t\t\t\t\t\t\t<li><span class="name"><i class="icon-category-communication"></i>沟通中</span><p>指主动与您沟通，且您<span class="text-communication">已回复</span>或点击了<span class="text-communication">待沟通</span>的牛人，以及您主动与对方沟通，且<span class="text-communication">对方已回复</span>的牛人</p></li>\t\t\t\t\t\t\t<li><span class="name"><i class="icon-category-pass"></i>合适</span><p>指已经被您点击了<span class="text-green">合适</span>的牛人</p></li>\t\t\t\t\t\t\t<li><span class="name"><i class="icon-category-fail"></i>不合适</span><p>指已经被您点击了<span class="text-red">不合适</span>的牛人</p></li>\t\t\t\t\t\t</ul>\t\t\t\t\t\t<h4>牛人分类－其他：</h4>\t\t\t\t\t\t<ul>\t\t\t\t\t\t\t<li><span class="name">牛人发起</span><p>指由对方主动发起沟通的牛人</p></li>\t\t\t\t\t\t\t<li><span class="name">我发起</span><p>指由您主动发起与对方沟通的牛人</p></li>\t\t\t\t\t\t\t<li><span class="name">同事推荐</span><p>指您的同事通过转发给同事功能推荐给您的牛人</p></li>\t\t\t\t\t\t\t<li><span class="name">有附件简历的</span><p>指您已经获得对方附件简历的牛人</p></li>\t\t\t\t\t\t</ul>\t\t\t\t\t\t<div class="intro">\t\t\t\t\t\t\t<p>需要其他分类方式？</p>\t\t\t\t\t\t\t<p>反馈给产品经理（邮箱：zhanglei@bosszhipin.com）</p>\t\t\t\t\t\t</div>\t\t\t\t\t</div>',
            closeText: !0,
            confirmText: !1,
            cancelText: !1,
            wrapClass: "dialog-chat-default dialog-chat-help",
            lock: !0,
            onOpen: function(e) {}
        })
    },
    showTimeLine: function(e, t, i) {
        if (4 != e.type && 4 != e.body.type && !e.uncount) {
            var s, n = new Date(e.time), a = Chat.curUserData.lastMessageTime || e.time;
            s = (new Date).getTime() - e.time > 864e5 ? "MM-dd hh:mm" : "Z hh:mm",
            a && (i || Math.abs(n.getTime() - a) > 3e5) && 0 == Chat.chatListCon.find("#temp-time-" + e.time).length && (t ? $('<li class="item-time" id="temp-time-' + e.time + '"><span class="time">' + this.dateFormat(n, s) + "</span></li>").prependTo(Chat.chatListCon) : $('<li class="item-time" id="temp-time-' + e.time + '"><span class="time">' + this.dateFormat(n, s) + "</span></li>").appendTo(Chat.chatListCon)),
            Chat.curUserData.lastMessageTime = e.time
        }
    },
    dateFormat: function(e, t) {
        var i = {
            Z: "",
            "M+": e.getMonth() + 1,
            "d+": e.getDate(),
            "h+": e.getHours(),
            "H+": e.getHours() > 12 ? e.getHours() - 12 : e.getHours(),
            "m+": e.getMinutes(),
            "s+": e.getSeconds(),
            "q+": Math.floor((e.getMonth() + 3) / 3),
            S: e.getMilliseconds()
        };
        /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var s in i)
            new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[s] : ("00" + i[s]).substr(("" + i[s]).length)));
        return t
    },
    scrollToBottom: function() {
        Chat.chatList.scrollTop(Chat.chatListCon.outerHeight() + 119)
    },
    verifyTalk: function(e, t) {
        Chat.usersData[t];
        if (Chat.usersData[t] && Chat.usersData[t].infoData) {
            var i = Chat.usersData[t].infoData;
            i.bothTalked || (void 0 == i.outCount && (i.outCount = 0),
            void 0 == i.inCount && (i.inCount = 0),
            "my" == e ? i.outCount++ : "to" == e && i.inCount++,
            i.outCount && i.inCount && (i.bothTalked = !0),
            Chat.setFuntionButton(i),
            Chat.setRelationStatus(i))
        }
    },
    setFuntionButton: function(e) {
        var t = Chat.ControlsEl;
        e.bothTalked ? (t.find(".btn-resume").removeClass("disabled").find("span").text("求简历"),
        t.find(".btn-contact").removeClass("disabled").find("span").text("求手机"),
        t.find(".btn-weixin").removeClass("disabled").find("span").text("求微信"),
        t.find(".btn-interview").removeClass("disabled").find("span").text("约面试")) : (t.find(".btn-resume").addClass("disabled").find("span").text("求简历：双方回复后可用"),
        t.find(".btn-contact").addClass("disabled").find("span").text("交换手机：双方回复后可用"),
        t.find(".btn-weixin").addClass("disabled").find("span").text("交换微信：双方回复后可用"),
        t.find(".btn-interview").addClass("disabled").find("span").text("约面试：双方回复后可用"))
    },
    subtractPoint: function(e) {
        if (Chat.notification[e.relationType]) {
            !function(e) {
                var t = Chat.notification[5];
                t.indexOf(e) > -1 && (t.splice(t.indexOf(e), 1),
                Chat.totalNewGeek())
            }(e.uid),
            function(t, i) {
                var s = t.indexOf(e.uid);
                if (s > -1 && (t.splice(s, 1),
                t.length < 1)) {
                    Chat.containerEl.find(".op-category").find("a[data-status=" + i + "]").find(".dot").remove()
                }
            }(Chat.notification[e.relationType], e.relationType),
            e.newGeek
        }
    },
    setGroupPoint: function(e) {
        if (Chat.usersData[e]) {
            var t = Chat.usersData[e]
              , i = t.relationType
              , s = t.infoData ? t.infoData.newGeek : t.newGeek
              , n = Chat.containerEl.find(".op-category").find("a[data-status=" + i + "]");
            t.newMsgCount > 0 && (8 != i && 5 != i && function(t, i) {
                t && t.find(".dot").length < 1 && t.append($('<em class="dot"></em>')),
                i && i.indexOf(e) < 0 && i.push(e)
            }(n, Chat.notification[i]),
            (5 == i || 1 == s) && function(e) {
                var t = Chat.notification[5];
                t.indexOf(e) < 0 && t.push(e),
                Chat.totalNewGeek()
            }(e))
        }
    },
    setRelationStatus: function(e) {
        var t = Chat.usersData[e.uid]
          , i = e.relationType ? e.relationType : t.relationType
          , s = ""
          , n = "";
        strTips = "",
        curTabIdx = Chat.toggleTypeEl.find(".cur").index(),
        curTabType = "",
        0 == curTabIdx && (curTabType = "chat"),
        1 == curTabIdx && (curTabType = "resume"),
        2 == curTabIdx && (curTabType = "attachment"),
        (!i || i < 5) && t.infoData && t.infoData.bothTalked && (i = 5);
        var a = {
            6: '<a href="javascript:;" target-status="6" class="link-communication">置为沟通中<span data-text="可在设置中编辑自动回复">可在设置中编辑自动回复</span></a>',
            7: '<a href="javascript:;" target-status="7" class="link-pass">合适<span  data-text="可在设置中编辑自动回复">可在设置中编辑自动回复</span></a>',
            8: '<a href="javascript:;" target-status="8" class="link-fail">不合适<span  data-text="可在设置中编辑自动回复">可在设置中编辑自动回复</span></a>'
        };
        switch (i) {
        case 5:
            s = a[8] + a[6],
            n = '<span class="status-text">未处理</span>';
            break;
        case 6:
            s = a[8] + a[7],
            n = '<span class="status-text">沟通中</span>';
            break;
        case 7:
            s = a[6] + a[8],
            n = '<span class="status-text">合适</span>';
            break;
        case 8:
            s = a[6] + a[7],
            n = '<span class="status-text">不合适</span>';
            break;
        default:
            s = "",
            n = '<span class="status-text">等待回复</span>'
        }
        var r = e.cooperate > 1 ? "icon-coop fill" : "icon-coop"
          , o = Chat.curUserData;
        s += '<em href="javascript:;" class="' + r + '" data-cooperate="' + e.cooperate + '" data-eid="' + o.encryptUid + '" data-uid="' + o.uid + '" data-expect="' + e.expectId + '"><i>同事协作</i></em>',
        Chat.ControlsEl.find(".btn-transmit").hide(),
        Chat.sendKaEvent("funcn_load_1_" + parseInt(e.cooperate) - 1),
        Chat.ControlsEl.find(".links").html(s),
        Chat.chatEl.find(".detail-bottom .btns").html('<a href="javascript:;" class="link-chat">回复</a>' + s);
        var c = "";
        switch (e.toPositionId && e.toPosition && (c = '<span class="text-blue link-job" data-jobid="' + e.toPositionId + '">' + filterXss(e.toPosition) + "</span>"),
        e.sourceType) {
        case 1:
            strTips = n + "，" + e.initTime + "由您发起，当前沟通职位" + c,
            VersionStatus.isHunter && (strTips = n + "，" + e.initTime + "由您发起");
            break;
        case 2:
            strTips = n + "，" + e.initTime + "向您发起投递，当前沟通职位" + c,
            VersionStatus.isHunter && (strTips = n + "，" + e.initTime + "向您发起沟通");
            break;
        case 3:
            e.toPositionId && e.toPosition && (c = "，沟通职位" + c),
            strTips = n + "，" + e.initTime + "来自" + e.sourceExtend + c,
            VersionStatus.isHunter && (strTips = n + "，" + e.initTime + "来自" + e.sourceExtend);
            break;
        case 4:
            strTips = n + "，" + e.initTime + "向您发起投递，当前沟通职位" + c,
            VersionStatus.isHunter && (strTips = n + "，" + e.initTime + "向您发起投递");
            break;
        case 5:
            e.toPositionId && e.toPosition && (c = "，沟通职位" + c),
            strTips = n + "，" + e.initTime + "由" + e.sourceExtend + "推荐" + c,
            VersionStatus.isHunter && (strTips = n + "，" + e.initTime + "由" + e.sourceExtend + "推荐")
        }
        Chat.chatList.find(".chat-info .tip-text").html(strTips),
        Chat.chatEl.find(".detail-bottom .text").html(strTips),
        Chat.chatList.find(".chat-info .tip-text .link-job").attr("ka", "chat_top_job"),
        Chat.chatEl.find(".detail-bottom .text .link-job").attr("ka", "chat_bottom_job")
    },
    changeUserView: function(e, t) {
        var e = e
          , t = t || "down"
          , i = !0
          , s = Chat.userList.find(".cur");
        if (s.length || (i = !1,
        s = Chat.userList.find("li").eq(0)),
        s.length) {
            var n = s.height()
              , a = s.index()
              , r = Chat.toggleTypeEl.find(".cur").index();
            e && e.hasClass("btn-prev") && (t = "up"),
            s.parent().hasClass("main-list") && Chat.userListTop.find("li").length && (a = s.index() + Chat.userListTop.find("li").length),
            "up" == t ? (s.prev("li").length ? (s.prev("li").addClass("cur").find("a").click(),
            s.removeClass("cur")) : s.parent().hasClass("main-list") && Chat.userListTop.find("li").length && (s.removeClass("cur"),
            Chat.userListTop.find("li:last").addClass("cur").find("a").click()),
            0 == r && s.position().top < n && setTimeout(function() {
                Chat.userList.scrollTop(n * a - n)
            }, 100),
            (1 == r || 2 == r) && s.position().top < n && setTimeout(function() {
                Chat.userList.scrollTop(n * a - n)
            }, 100)) : (s.next("li").length || !i ? i ? (s.removeClass("cur"),
            s.next("li").addClass("cur").find("a").click()) : s.addClass("cur").find("a").click() : s.parent().hasClass("top-list") && Chat.userListMain.find("li").length && (s.removeClass("cur"),
            Chat.userListMain.find("li:first").addClass("cur").find("a").click()),
            0 == r && s.position().top > Chat.userList.height() - 2 * n && setTimeout(function() {
                Chat.userList.scrollTop(n * a - Chat.userList.height() + 2 * n)
            }, 100),
            (1 == r || 2 == r) && s.position().top > Chat.userList.height() - 2 * n - 136 && setTimeout(function() {
                Chat.userList.scrollTop(n * a - Chat.userList.height() + 3 * n)
            }, 100)),
            Chat.sendKaEvent("tab-" + Chat.toggleTypeEl.find(".cur").index() + "-" + t)
        }
    },
    showMessageBase: function(e) {
        var t;
        if (e.from.uid == Chat.myselfData.uid ? e.isSelf = !0 : e.isSelf = !1,
        !e.offline && 4 != e.type && 4 != e.body.type && (Chat.curUserData.infoData && !Chat.curUserData.infoData.bothTalked && (e.isSelf ? Chat.verifyTalk("my", e.to.uid) : 1 != e.body.type && 2 != e.body.type && 3 != e.body.type || Chat.verifyTalk("to", e.from.uid)),
        "history" != e.typeSource && e.isSelf && !e.uncount)) {
            var i = Chat.getGroupStatus();
            5 == i && (Chat.groupLastModify[i] = Chat.groupHistory[i])
        }
        var s = 0;
        if (Chat.curUserData.uid && !e.offline && !e.received && (Chat.curUserData.uid == e.from.uid || e.to && Chat.curUserData.uid == e.to.uid)) {
            var n = Chat.curUserData;
            e.isSelf || 99 == e.body.type || "history" == e.typeSource || Chat.sendReadMessage({
                userData: n,
                uid: e.from.uid,
                mid: e.mid
            }),
            t = n.uid
        } else {
            if (e.from.uid == Chat.myselfData.uid)
                var a = e.to;
            else if (e.to && e.to.uid == Chat.myselfData.uid)
                var a = e.from;
            Chat.usersData[a.uid] || Chat.addUser(a.uid, a.encryptUid, e);
            var n = Chat.usersData[a.uid];
            if (e.isSelf || (s = 1),
            t = a.uid,
            !e.offline && !e.received) {
                var r = Chat.userList.find('a[data-uid="' + t + '"]').parent();
                r.length ? r.prependTo(r.closest("ul")) : Chat.usersData[t] && Chat.addUser(t, Chat.usersData[t].encryptUid)
            }
        }
        if (function() {
            return !(4 == e.body.type && 1 == e.body.templateId && !e.pushText) && !(!e.pushText && !e.body.text)
        }() && s && "history" != e.typeSource && !e.received && 4 != e.type && !e.uncount) {
            var o = Chat.usersData[n.uid]
              , c = e.body
              , l = 3 == e.type && 1 == c.type && 3 == c.templateId;
            (!e.offline || !n.maxMessageId || e.offline && n.maxMessageId && e.mid > n.maxMessageId) && (e.offline && Chat.curUserData.uid == n.uid || o && 8 != o.relationType && (n.newMsgCount || l ? l || n.newMsgCount++ : n.newMsgCount = 1,
            Chat.setUnReadMessage(e),
            Chat.showMessageCountInfo(n),
            l || Chat.setUnReadMessageCount(1)))
        }
        e.isSelf || n.maxMessageId && !(n.maxMessageId < e.mid) || (n.maxMessageId = e.mid);
        var d = 3 == e.type && 14 == e.body.type && "history" != e.typeSource
          , h = 12 == e.body.type && e.body.hyperLink && 1 == e.body.hyperLink.hyperLinkType && "history" != e.typeSource;
        d && (e.body.text = e.pushText.replace(e.from.name, "").replace("给你", ""));
        var u = filterXss(e.body.text);
        if (!e.body.text && e.encryptedBody && (u = e.pushText || "您收到一条来自该牛人的消息"),
        u && "history" != e.typeSource && 4 != e.type || d || h) {
            var p = (new Date(e.time),
            Chat.userList.find('a[data-uid="' + n.uid + '"]'));
            p.find(".time").text(Chat.getLastTime(e.time));
            var f = ""
              , g = Chat.usersData[n.uid];
            g.lastMessageInfo || (g.lastMessageInfo = {}),
            e.isSelf && !d ? (f = '<span class="status status-delivery"></span>',
            g.lastMessageInfo.status = 1,
            g.lastMessageInfo.message = u) : g.lastMessageInfo.status = 0,
            p.find(".gray").html(f + filterXss(u.substring(0, 40)));
            Chat.usersData[n.uid];
            e.time >= Chat.usersData[n.uid].lastTS && (Chat.usersData[n.uid].lastTime = Chat.getLastTime(e.time),
            Chat.usersData[n.uid].lastTS = e.time),
            Chat.usersData[n.uid].lastMsg = u
        }
        return PAGE_ACTIVITY && (!PAGE_ACTIVITY || $(".side-menu .menu-chat").hasClass("cur")) || e.offline || e.received || e.from.uid == Chat.myselfData.uid || e.from.uid == Chat.curUserData.uid || e.to.uid != Chat.myselfData.uid || "history" == e.typeSource || !Chat.usersData[n.uid] || 8 == Chat.usersData[n.uid].relationType || chatNotification.show(e.from.name, e.from.avatar, e),
        {
            userData: n,
            setUnReadMessageCount: Chat.setUnReadMessageCount
        }
    },
    setUnReadMessageCount: function(e) {
        Chat.unreadMessageCount += e,
        Chat.unreadMessageCount > 99 ? Chat.unreadCountBox.html('<i class="dot-plenty"></i>') : Chat.unreadCountBox.html(Chat.unreadMessageCount),
        Chat.unreadMessageCount && Chat.unreadMessageCount > 0 ? Chat.unreadCountBox.css("display", "inline-block") : Chat.unreadCountBox.hide(),
        Chat.onChangeReadMessageCount(Chat.unreadMessageCount),
        "undefined" != typeof DeskNotice && DeskNotice.messageShow(Chat.unreadMessageCount)
    },
    onChangeReadMessageCount: function() {},
    clearMessageCount: function(e, t) {
        t && (e.newMsgCount - t < 0 && (t = e.newMsgCount),
        Chat.setUnReadMessageCount(-1 * t),
        e.newMsgCount -= t,
        Chat.showMessageCountInfo(e))
    },
    showMessageCountInfo: function(e) {
        var t = e.newMsgCount
          , i = Chat.userList.find('a[data-uid="' + e.uid + '"]');
        Chat.usersData[e.uid].newMsgCount = t,
        t ? (t = t > 999 ? 999 : t,
        Chat.usersData[e.uid] && (i.find(".notice-badge").length ? i.find(".notice-badge").text(t) : i.find(".text").append('<span class="notice-badge">' + t + "</span>")),
        Chat.setGroupPoint(e.uid)) : (i.find(".notice-badge").remove(),
        Chat.subtractPoint(e))
    },
    addUserCount: function(e) {
        Chat.usersData[e.from.uid] && Chat.userList.find('a[data-uid="' + e.from.uid + '"]').find(".figure").prepend('<span class="notice-badge"></span>')
    },
    addMessageId: function(e, t) {
        (!Chat.curUserData || Chat.curUserData && Chat.curUserData.userId != e) && (Chat.usersData[e].mids || (Chat.usersData[e].mids = []),
        Chat.usersData[e].mids.push(t))
    },
    setMessageMinId: function(e, t) {
        Chat.usersData[e].messageMinId || (Chat.usersData[e].messageMinId = t)
    },
    setMessageMaxId: function(e, t) {
        Chat.usersData[e].maxMessageId < t && (Chat.usersData[e].maxMessageId = t)
    },
    getLastTime: function(e) {
        this.lastMessageTime = e;
        var t = new Date
          , i = new Date(t.getFullYear(),t.getMonth(),t.getDate())
          , s = i - e;
        return t.getFullYear() != new Date(e).getFullYear() && t.getFullYear() - new Date(e).getFullYear() > 1 ? t.getFullYear() - new Date(e).getFullYear() + "年前" : s > 864e5 ? Chat.dateFormat(new Date(e), "MM月dd日") : s > 0 ? "昨天" : Chat.dateFormat(new Date(e), "hh:mm")
    },
    workflowTip: function(e, t, i) {
        var s, e = e, n = e ? parseInt(e.attr("target-status"), 10) : null, t = t || "", a = "", r = "", o = "", c = 1 == t, i = i, l = !1, d = !1, h = Chat.curUserData;
        switch (n) {
        case 6:
            t = 2,
            o = "tochat";
            break;
        case 7:
            t = 3,
            o = "pass";
            break;
        case 8:
            t = 4,
            o = "fail"
        }
        if (a = "/setting/notify/tip.json?type=" + t,
        i && (a += "&reasonType=" + i),
        a += "&geekId=" + h.uid,
        1 != t || n || (o = "tochat"),
        $.ajax({
            url: a,
            type: "GET",
            data: null,
            dataType: "JSON",
            timeout: 3e4,
            success: function(i) {
                i.rescode && 3 == t && i.requireContact && (l = !0),
                i.rescode && 3 == t && i.requireResume && (d = !0),
                i.rescode && 1 == i.showGuide ? $.confirm({
                    content: i.html,
                    title: "提示",
                    closeIcon: !0,
                    confirmButton: "确定",
                    cancelButton: !1,
                    buttonOther: 1 != t ? '<label class="checkbox"><input type="checkbox" name="noMoreShow" value="1" checked="checked" /><span>不再显示</span></label>' : "",
                    columnClass: "pop-default pop-default-workflow pop-default-" + t,
                    onOpen: function() {
                        var e = this
                          , t = e.$body.find('.buttons input[type="checkbox"]')
                          , i = e.$content.find('input[name="noMoreShow"]');
                        1 == i.val() ? (t.val(1),
                        t.attr("checked", "checked")) : (t.val(0),
                        t.removeAttr("checked")),
                        t.on("change", function() {
                            $(this).is(":checked") ? i.val(1) : i.val(0)
                        }),
                        PageSet.bindEvent(e.$content),
                        e.$body.find(".closeIcon").on("click", function() {
                            Chat.sendKaEvent(o + "-close")
                        })
                    },
                    confirm: function() {
                        var i = this
                          , n = i.$content.find("form").serialize();
                        (t = 3) && (n += "&geekId=" + h.uid),
                        1 != t && 2 != t && 3 != t && 4 != t || $.ajax({
                            url: "/setting/notify/set.json",
                            type: "POST",
                            data: n,
                            dataType: "JSON",
                            timeout: 5e3,
                            success: function(t) {
                                var t = t;
                                t.rescode ? (r = t.msg,
                                s = t.requireType,
                                t.requireContact && (l = !0),
                                t.requireResume && (d = !0),
                                Chat.setWorkflow(h, e, r, s, l, d, c),
                                1 == t.nextHtml && "1" == i.$content.find('form input[name="noMoreShow"]').val() && ($("#guide-wrap").show(),
                                $("#guide-wrap").find(".guide-box").eq(0).show())) : $.toast({
                                    type: "error",
                                    content: t.resmsg || "设置失败"
                                })
                            },
                            error: function(e) {}
                        });
                        var a = o;
                        i.$content.find('input[name="sendMsg"]').length && (a += "-msg" + i.$content.find('input[name="sendMsg"]:checked').val()),
                        i.$content.find('input[name="requireType"]').length && (a += "-require" + i.$content.find('input[name="requireType"]:checked').val()),
                        i.$content.find('input[name="noMoreShow"]').length && (a += "-go" + i.$content.find('input[name="noMoreShow"]').val()),
                        Chat.sendKaEvent(a)
                    }
                }) : i.rescode && !i.showGuide && (r = i.msg,
                s = i.requireType,
                Chat.setWorkflow(h, e, r, s, l, d, c))
            },
            error: function(e) {}
        }),
        e) {
            var u = e.attr("data-reason") ? e.attr("data-reason") : "";
            Chat.sendKaEvent("Geekdeal_" + o + u + "_" + Chat.getPublicStatis().context + "_" + Chat.getPublicStatis().view + "_" + h.uid)
        }
    },
    setWorkflow: function(e, t, i, s, n, a, r) {
        var e = e
          , o = t ? parseInt(t.attr("target-status"), 10) : null;
        r && (o = 6);
        var c = {
            geekId: e.encryptUid,
            relationType: o
        };
        t && t.attr("data-reason") && (c.reason = t.attr("data-reason")),
        $.ajax({
            url: "/chat/relation/groupset.json",
            type: "POST",
            data: c,
            dataType: "JSON",
            timeout: 5e3,
            success: function(s) {
                var s = s
                  , r = Chat.getGroupStatus()
                  , c = "";
                if (s.rescode) {
                    if (Chat.usersData[e.uid].infoData && (Chat.usersData[e.uid].relationType = o,
                    Chat.usersData[e.uid].infoData.relationType = o,
                    (5 != r || 6 != o || t) && chatUserPresenter.setStatus(e.uid, o)),
                    !t)
                        return;
                    var l = t.index();
                    switch (t.closest(".detail-bottom").length ? (Chat.ControlsEl.find(".links a").removeClass("cur"),
                    Chat.ControlsEl.find(".links a").eq(l).addClass("cur")) : t.closest(".chat-controls").length && (Chat.chatEl.find(".detail-bottom .btns .btn,.detail-bottom .btns a").removeClass("cur"),
                    Chat.chatEl.find(".detail-bottom .btns .btn,.detail-bottom .btns a").eq(l).addClass("cur")),
                    t.parent().children().removeClass("cur"),
                    t.addClass("cur"),
                    o) {
                    case 5:
                        c = "新";
                        break;
                    case 6:
                        c = "沟通中";
                        break;
                    case 7:
                        c = "合适";
                        break;
                    case 8:
                        c = "不合适"
                    }
                    Chat.chatEl.find(".status-text").text(c);
                    var r = Chat.getGroupStatus()
                      , d = t.clone()
                      , h = d.find("span").remove().end().text();
                    if ([5, 6, 7, 8].indexOf(r) < 0 && 8 != o && $.toast({
                        content: "已置为" + h.replace("置为", ""),
                        type: "success"
                    }),
                    Chat.checkUserBlock())
                        return !1;
                    i && Publisher.sendText(e, i),
                    a && Chat.exchangeResume(2, {
                        from: {
                            uid: e.uid
                        }
                    }),
                    n && Chat.exchangePhone(2, {
                        from: {
                            uid: e.uid
                        }
                    })
                }
            },
            error: function(e) {}
        })
    },
    getResumedirectList: function() {
        $.ajax({
            type: "GET",
            url: "/chat/resumedirectList.json",
            dataType: "JSON",
            data: null,
            success: function(e) {
                if (1 == e.status && e.data.length > 0) {
                    var t;
                    for (t = 0; t < e.data.length; t++) {
                        var i = e.data
                          , s = Chat.userList.find('a[data-uid="' + i[t].geekId + '"]');
                        s.find(".name .badge-resume").length || s.find(".name").append('<em class="badge-resume">直通车</em>'),
                        s.attr("data-recordId", i[t].recordId),
                        Chat.usersData[i[t].geekId] && !Chat.usersData[i[t].geekId].resumeDirectAdded && 0 == i[t].status && (Chat.usersData[i[t].geekId].newMsgCount = 1,
                        Chat.showMessageCountInfo(Chat.usersData[i[t].geekId]),
                        Chat.setUnReadMessageCount(1),
                        Chat.usersData[i[t].geekId].resumeDirectAdded = !0)
                    }
                }
            }
        })
    },
    readResumedirect: function(e) {
        var e = e
          , t = e.attr("data-uid")
          , i = e.attr("data-recordId");
        Chat.usersData[t] && i && !Chat.usersData[t].resumeDirectMinus && $.ajax({
            type: "POST",
            url: "/chat/readresumedirect.json",
            dataType: "JSON",
            data: {
                id: i
            },
            success: function(i) {
                1 == i.rescode && (Chat.usersData[t].resumeDirectMinus || (e.find(".notice-badge").remove(),
                Chat.clearMessageCount(Chat.usersData[t], 1),
                Chat.usersData[t].resumeDirectMinus = !0))
            }
        })
    },
    revertFilenameToIcon: function(e) {
        var t = e.replace(/.+\./, "").toLowerCase();
        return e = "",
        '<i class="icon-file icon-file-' + ("jpeg" == t ? "jpg" : "docx" == t ? "doc" : "pptx" == t ? "ppt" : t) + '"></i>'
    },
    showFailedMessageTip: function() {
        var e = $('<div class="notice-dialog" data-type="fail-message"><div class="op"><span class="btn btn-reload" ka="chat_sendfail_btn_reload_' + _PAGE.uid + '">刷新</span><a href="javascript:;" class="close" ka="chat_sendfail_btn_close_' + _PAGE.uid + '"><i class="icon-close"></i></a></div><div class="text"><i class="icon-fail-message"></i>消息发送失败，请刷新页面 或 重新登录</div></div>');
        e.find(".btn-reload").on("click", function() {
            window.location.reload()
        }),
        e.find(".close").on("click", function() {
            e.remove()
        }),
        Chat.chatEl.find('.notice-dialog[data-type="fail-message"]').remove(),
        Chat.chatEl.find(".chat-list ul").after(e),
        setTimeout(function() {
            e.fadeOut(function() {
                e && e.remove()
            })
        }, 4e3)
    },
    getConGroup: function() {
        var e = Chat.containerChat.find(".op-category .cur")
          , t = {
            "-1": "aaa",
            1: "nnn",
            5: "xxa",
            6: "xxb",
            7: "xxc",
            8: "xxd"
        }
          , i = {
            1: "dda",
            2: "ddb",
            3: "ddc",
            4: "ddd"
        };
        return e.attr("data-status") ? t[e.attr("data-status")] : i[e.attr("data-origin")]
    },
    getPublicStatis: function() {
        var e = Chat.getConGroup()
          , t = "0"
          , i = "0"
          , s = Chat.toggleTypeEl.find(".cur").index()
          , n = ["chatview", "infoview", "fileview"];
        return "全部职位" != $(".top-chat .dropdown-select").text() && (t = "1"),
        "筛选" != Chat.containerChat.find(".sel-filter .dropdown-select").eq(0).text() && (i = "1"),
        e += "0" + t + i,
        {
            context: e,
            view: n[s]
        }
    },
    getInterviewBtnStatus: function(e) {
        return 1 == e ? '<a href="javascript:;" class="btn btn-add">添加到我的面试日程</a>' : 2 == e || 4 == e ? '<p class="has-interview">已添加，可在[面试]中查看</p>' : 3 == e ? '<a href="javascript:;" class="btn btn-grey">面试已结束</a>' : void 0
    },
    getInterviewDetail: function(e) {
        var t = this;
        $.ajax({
            type: "GET",
            url: "/bossweb/interview/sharedinterview/detail.json",
            dataType: "JSON",
            cache: !1,
            data: {
                interviewId: e
            },
            success: function(i) {
                if (1 == i.rescode) {
                    var s = i.detail
                      , n = "";
                    n += '<div class = "interview-body">',
                    n += '<div class="interview-userinfo">',
                    n += '<img  class="avator" src="' + s.interviewerAvatar + '" >',
                    n += "<p>" + s.interviewerName + '<br><span class="interview-position">' + s.jobName + "</span</p>",
                    n += "</div>",
                    n += '<p class="interview-time">' + s.appointTime + "</p>",
                    n += '<p class="interview-addr">' + s.address + "</p>",
                    "" != s.addition && (n += '<p class="interview-remark">' + s.addition + "</p>"),
                    n += '<div class="btn-wrap">',
                    n += t.getInterviewBtnStatus(s.operateStatus),
                    n += "</div>",
                    n += "</div>",
                    n += "</div>",
                    window.top.$.dialog({
                        title: s.title,
                        content: n,
                        closeText: !0,
                        confirmText: "",
                        cancelText: !1,
                        wrapClass: "item-interview-wrap",
                        lock: !0,
                        onOpen: function(t) {
                            t.find(".btn-add").on("click", function() {
                                Chat.addInterview(t, e)
                            })
                        }
                    })
                } else
                    $.toast({
                        type: "error",
                        content: "加载失败"
                    })
            },
            error: function(e) {
                $.toast({
                    type: "error",
                    content: e.resmsg
                })
            }
        })
    },
    addInterview: function(e, t) {
        var i = e;
        $.ajax({
            type: "POST",
            url: "/bossweb/interview/accept/sharedinterview.json",
            dataType: "JSON",
            data: {
                interviewId: t
            },
            success: function(e) {
                1 == e.rescode ? i.find(".btn-wrap").html(Chat.getInterviewBtnStatus(2)) : $.toast({
                    type: "error",
                    content: e.resmsg
                })
            },
            error: function(e) {
                $.toast({
                    type: "error",
                    content: "添加失败,请稍后再试"
                })
            }
        })
    },
    sendKaEvent: function(e) {
        try {
            _T.sendEvent(e)
        } catch (e) {}
    },
    sendTrackEvent: function(e) {
        try {
            _T.sendTracking(e)
        } catch (e) {}
    }
}
  , ChatWebsocket = {
    init: function() {
        this.settings = {
            cid: "",
            token: "",
            password: "",
            receiveUrl: "",
            receiveStepTime: 5e3,
            onSendMessage: function(e) {},
            onRecevieMessage: function(e) {},
            onlineDebug: !!getQueryString("debug")
        },
        this.Messages = [],
        this.cacheTimestamp = 0,
        ChatWebsocket.failNum = 0,
        ChatWebsocket.reConnectTimer;
        var e = cookie.get("wt") || cookie.get("t") || "xGrtxwdSkouHdhs";
        e && (ChatWebsocket.settings.password = e),
        this.uuid = "ws-" + getUuid(16, 16),
        this.client = new Paho.MQTT.Client(_PAGE.ws.server,_PAGE.ws.port,"/chatws",this.uuid),
        this.client.onConnectionLost = this.onConnectionLost,
        this.client.onMessageArrived = this.onMessageArrived,
        this.client.onMessageDelivered = this.onMessageDelivered,
        this.connection(!0),
        ChatWebsocket.isKickOut = !1
    },
    logCss: "font-weight:bold;color:#ff0000;",
    connection: function(e) {
        this.client.connect({
            userName: _PAGE.token,
            password: ChatWebsocket.settings.password,
            timeout: 60,
            keepAliveInterval: 25,
            cleanSession: !0,
            onSuccess: this.onConnect,
            onFailure: this.onFailure,
            mqttVersion: 3,
            useSSL: !!_PAGE.ws.useSSL
        });
        var t = e ? "start" : "retry";
        ChatWebsocket.failNum < 5 && Chat.sendTrackEvent("connect_" + t + "_" + _PAGE.uid + "_" + (new Date).getTime())
    },
    reConnection: function() {
        this.connection()
    },
    sendPresence: function() {
        var e = cookie.get("__a").split(".")
          , t = Chat.protobufMessage.createMessage.presence({
            type: 1,
            lastMessageId: Chat.receiveMaxId < 0 ? 0 : Chat.receiveMaxId,
            clientInfo: {
                version: "",
                system: "",
                systemVersion: "",
                model: cookie.get("sid") || "",
                uniqid: e[1] + "" + e[0] || "",
                network: _PAGE.clientIP || "",
                appid: 9018,
                platform: "web",
                channel: "-1",
                ssid: "",
                bssid: "",
                longitude: 0,
                latitude: 0
            }
        });
        ChatWebsocket.settings.onlineDebug && (console.log("%cpresence:", ChatWebsocket.logCss),
        console.log(t)),
        ChatWebsocket.send(t, 1)
    },
    onConnect: function(e) {
        ChatWebsocket.settings.onlineDebug && console.log("%cconnect:", ChatWebsocket.logCss),
        ChatWebsocket.sendPresence(),
        Chat.websocketConnected = !0,
        Chat.sendTrackEvent("connect_success_" + _PAGE.uid + "_" + (new Date).getTime())
    },
    onFailure: function(e, t, i) {
        if (ChatWebsocket.settings.onlineDebug && (console.log("%conFailure:", ChatWebsocket.logCss),
        console.log(e, t, i)),
        ChatWebsocket.failNum < 5 && Chat.sendTrackEvent("connect_fail_" + _PAGE.uid + "_" + e.errorCode + "_" + (new Date).getTime()),
        ChatWebsocket.failNum++,
        "object" == typeof e && 6 == e.errorCode) {
            var s = e.errorMessage.match(/^AMQJS0006E Bad Connack return code:(\d).+$/);
            s && (3 == parseInt(s[1], 10) ? (ChatWebsocket.reConnectTimer && clearTimeout(ChatWebsocket.reConnectTimer),
            ChatWebsocket.reConnectTimer = setTimeout(function() {
                ChatWebsocket.reConnection()
            }, 2e3)) : (alert("登录信息失效，请重新登录"),
            window.location.href = isZpdesk ? "/logoutToUrl?toUrl=/user/login.html" : "/logout/"))
        } else
            ChatWebsocket.reConnectTimer && clearTimeout(ChatWebsocket.reConnectTimer),
            ChatWebsocket.reConnectTimer = setTimeout(function() {
                ChatWebsocket.reConnection()
            }, 2e3)
    },
    onConnectionLost: function(e) {
        this.onlineDebug && (console.log("%conConnectionLost(data):" + new Date + " " + (new Date).getTime(), ChatWebsocket.logCss),
        console.log(e)),
        ChatWebsocket.failNum < 5 && Chat.sendTrackEvent("connect_lost_" + _PAGE.uid + "_" + e.errorCode + "_" + (new Date).getTime()),
        8 != e.errorCode && 5 != e.errorCode || ChatWebsocket.isKickOut || ChatWebsocket.reConnection(),
        0 !== e.errorCode && (console.log("%conConnectionLost(message):", ChatWebsocket.logCss),
        console.log(e.errorMessage))
    },
    onMessageArrived: function(e) {
        try {
            var t = e.payloadBytes
              , i = Chat.protobufMessage.decode(t);
            switch (i = ChatWebsocket.eachParseInt(i),
            ChatWebsocket.settings.onlineDebug && (console.log("%conMessageArrived(data):", ChatWebsocket.logCss),
            console.log(e),
            console.log("%conMessageArrived(message):", ChatWebsocket.logCss),
            console.log(i)),
            i.type) {
            case 1:
                ChatWebsocket.receiveMessage(i);
                break;
            case 5:
                ChatWebsocket.receiveSyncMessage(i);
                break;
            case 6:
                ChatWebsocket.receiveStatusMessage(i)
            }
        } catch (e) {
            console.log("%conMessageArrived(try error):", ChatWebsocket.logCss),
            console.log(e)
        }
    },
    onMessageDelivered: function(e) {
        var t = e.payloadBytes
          , i = Chat.protobufMessage.decode(t);
        switch (i = ChatWebsocket.eachParseInt(i),
        i.type) {
        case 1:
            for (var e = i.messages, s = 0; s < e.length; s++)
                Chat.setTextMessageDomStatus(Chat.userList.find('a[data-eid="' + e[s].to.name + '"]').attr("data-uid"), e[s].mid, null, "delivery");
            break;
        case 6:
            for (var s = 0; s < i.messageRead.length; s++) {
                var n = Chat.usersData[i.messageRead[0].userId];
                n && n.maxMessageId == i.messageRead[0].messageId && (n.maxMessageId = null)
            }
        }
        ChatWebsocket.settings.onlineDebug && (console.log("%conMessageDelivered(data):", ChatWebsocket.logCss),
        console.log(e),
        console.log("%conMessageDelivered(message):", ChatWebsocket.logCss),
        console.log(i))
    },
    send: function(e, t, i) {
        ChatWebsocket.settings.onlineDebug && (console.log("%csend:", ChatWebsocket.logCss),
        console.log(e)),
        this.client.isConnected() ? this.client.send("chat", e.toArrayBuffer(), 1, !0) : 1 == e.type && 1 == e.messages[0].type && 1 == e.messages[0].body.type && (ChatWebsocket.reConnection(),
        Chat.setTextMessageDomStatus(Chat.curUserData.uid, e.messages[0].cmid, null, "error"),
        Chat.showFailedMessageTip())
    },
    eachParseInt: function(e) {
        for (var t in e) {
            var i = e[t];
            i && "object" == typeof i && ("boolean" == typeof i.unsigned && "number" == typeof i.high && "number" == typeof i.low ? (longVal = new dcodeIO.Long(i.low,i.high),
            e[t] = parseInt(longVal.toString(), 10)) : this.eachParseInt(i))
        }
        return e
    },
    sendReadMessage: function(e) {
        var e = Chat.protobufMessage.createMessage.read(e);
        ChatWebsocket.send(e, null)
    },
    receiveTextMessage: function(e) {
        if (e.from && e.to)
            if (e.from.uid > 1e3) {
                if (2 === e.type || 5 === e.type || 6 === e.type)
                    return Chat.countGroupMessage(e),
                    Chat.canShowStickerMessage && !e.isSelf && Chat.Sticker.show(),
                    !0;
                3 == e.type ? Chat.showMessageOther(e) : 1 != e.type && 2 != e.type && 4 != e.type || e.from.uid != Chat.myselfData.uid && e.to.uid != Chat.myselfData.uid || (Chat.showMessage(e),
                Chat.canShowStickerMessage && !e.isSelf && Chat.Sticker.show())
            } else
                990 === e.from.uid ? Counselor.received(e) : (3 == e.type || 1 == e.type && e.body.action && 70 == e.body.action.aid && "" != e.body.extend) && (797 == e.from.uid ? Chat.updateMessagePage(e) : 998 != e.from.uid && 1e3 != e.from.uid || Chat.showMessageOther(e))
    },
    uniqueMessage: function(e) {
        return !(this.Messages.indexOf(e.mid) < 0) || (this.Messages.length && e.time - this.cacheTimestamp > 5e3 && (this.Messages.splice(0, 1),
        this.cacheTimestamp = e.time),
        this.Messages.push(e.mid),
        !1)
    },
    receiveMessage: function(e) {
        for (var t = 0; t < e.messages.length; t++) {
            var i = e.messages[t];
            if (i.to.uid <= 1e3)
                return !1;
            if (this.uniqueMessage(i))
                return !1;
            if (3 == i.type && 4 == i.body.type)
                if (i.body.action && 10 == i.body.action.aid) {
                    var s = PAGE_ACTIVITY;
                    alert("您的帐号已经登录过了，请勿重复登录。"),
                    window.location.href = isZpdesk ? "/logoutToUrl?toUrl=/user/login.html" : s ? "/logout/" : INTERFACE_URLS.homeUrl,
                    ChatWebsocket.isKickOut = !0
                } else if (i.body.action && 0 == i.body.action.aid)
                    switch (parseInt(i.body.action.extend, 10)) {
                    case 1011:
                        window.location.href = INTERFACE_URLS.homeUrl;
                        break;
                    case 1012:
                        var n = cookie.get("wt")
                          , a = cookie.get("t");
                        if (a && n && a != n)
                            return void (window.location.href = "/logout/");
                        alert("您订购的网页版聊天服务已到期，请重新购买！"),
                        window.location.reload();
                        break;
                    case 1013:
                        alert("抱歉，您的BOSS账号刚被冻结。请前往App端申请解冻，解冻后可正常使用"),
                        window.location.href = "/logout/";
                        break;
                    case 1014:
                        alert("抱歉，由于被多人举报，您需要认证身份后才可继续使用，请您打开BOSS直聘APP进行认证。"),
                        window.location.href = "/logout/"
                    }
            Chat.receiveMaxId < i.mid && (Chat.receiveMaxId = i.mid);
            var r = !1;
            for (var o in Chat.mids)
                o != Chat.receiveMaxId ? o < Chat.receiveMaxId && delete Chat.mids[o] : r = !0;
            if (r) {
                var c = Chat.usersData[i.to.uid];
                c && Chat.setMessageMinId(i.to.uid, i.mid)
            } else if (i.mSource = "server",
            ChatWebsocket.receiveTextMessage(i),
            i.mid && i.from.uid > 1e3) {
                var c = Chat.usersData[i.from.uid];
                c && (Chat.addMessageId(i.from.uid, i.mid),
                Chat.setMessageMinId(i.from.uid, i.mid),
                Chat.setMessageMaxId(i.from.uid, i.mid))
            }
        }
    },
    receiveStatusMessage: function(e) {
        if (e.messageRead)
            for (var t = 0; t < e.messageRead.length; t++) {
                var i = e.messageRead[t]
                  , s = Chat.userList.find('a[data-uid="' + i.userId + '"]');
                e.messageRead[t].sync ? 1 == s.attr("data-group") ? Chat.wipeGroupMessages(i.userId) : ChatWebsocket.synchReadMessage(e.messageRead[t].userId, e.messageRead[t].messageId) : e.messageRead[t].userId == Chat.curUserData.uid ? Chat.setTextMessageDomStatus(e.messageRead[t].userId, e.messageRead[t].messageId, null, "read") : Chat.usersData[e.messageRead[t].userId] && Chat.usersData[e.messageRead[t].userId].maxMessageId && (e.messageRead[t].messageId,
                Chat.usersData[e.messageRead[t].userId].maxMessageId);
                var n = Chat.userList.find('a[data-uid="' + e.messageRead[t].userId + '"]')
                  , a = Chat.usersData[e.messageRead[t].userId];
                e.messageRead[t].sync || (a && (a.lastMessageInfo || (a.lastMessageInfo = {}),
                a.lastMessageInfo.status = 2),
                n.length && n.find(".gray .status").removeClass("status-delivery").addClass("status-read"))
            }
    },
    receiveSyncMessage: function(e) {
        if (e.messageSync)
            for (var t = 0; t < e.messageSync.length; t++) {
                var i = e.messageSync[t]
                  , s = Chat.messageStatusDataTemp[i.clientMid];
                s && (Chat.mids[i.serverMid] = "Text")
            }
    },
    synchReadMessage: function(e, t) {
        var i = Chat.usersData[e];
        if (i) {
            i.mids || (i.mids = []),
            i.mids.sort(function(e, t) {
                return e > t
            });
            for (var s = 0, n = 0; n < i.mids.length && i.mids[n] <= t; n++)
                s++;
            i.mids.splice(0, s),
            Chat.clearMessageCount(i, s)
        }
    }
}
  , Resume = {
    loadDetail: function(e, t, i) {
        var s = t.find(".resume-content-load")
          , n = Chat.getGroupStatus();
        if (e) {
            if (s.data("url") == e && "" != s.html())
                return s.html(s.html()),
                Chat.chatEl.find(".chat-list").css("visibility", "visible"),
                Chat.chatEl.find(".chat-wrap-mask").remove(),
                void (i || Chat.sendKaEvent("Geekshow_tab_" + Chat.getPublicStatis().context + "_" + Chat.getPublicStatis().view + "_" + Chat.curUserData.uid));
            1 != n && 5 != n && (Chat.resumeContainer.find(".resume-content-latest").html("").hide(),
            Chat.resumeContainer.find(".resume-content-load").html("")),
            Chat.xhrs.resume && Chat.xhrs.resume.abort();
            var a = function(e, t) {
                var t = $.trim(t) + "";
                return t.length > 0 && (t = '<div class="message-info"> <span>' + t + "</span> </div>"),
                5 != Chat.getGroupStatus() && (t = ""),
                e.replace("{{__LAST_MESSAGE__}}", t)
            };
            s.data("url", null),
            Chat.xhrs.resume = $.ajax({
                type: "GET",
                url: e,
                dataType: "text",
                data: null,
                success: function(n) {
                    var r = Chat.curUserData.uid
                      , o = Chat.usersData[r]
                      , c = a(n, o.lastMsg);
                    s.data("url", e).html(c),
                    i || Chat.sendKaEvent("Geekshow_tab_" + Chat.getPublicStatis().context + "_" + Chat.getPublicStatis().view + "_" + Chat.curUserData.uid);
                    var l = Chat.chatEl.find(".detail-bottom .btns .icon-coop");
                    l.length && (s.find(".tip-closedata").length ? (l.hide(),
                    Chat.ControlsEl.find(".icon-coop").hide()) : (l.show(),
                    Chat.ControlsEl.find(".icon-coop").show())),
                    Chat.chatEl.find(".chat-list").css("visibility", "visible"),
                    Chat.chatEl.find(".chat-wrap-mask").remove(),
                    t.scrollTop(0)
                },
                error: function() {}
            })
        }
    },
    loadAttachment: function(e, t, i) {
        t.html('<div class="data-tips"><div class="spinner spinner-circle"><div class="loader"></div><span>正在加载简历...</span></div></div>'),
        $.ajax({
            type: "GET",
            url: e,
            dataType: "JSON",
            data: null,
            success: function(e) {
                if (e.rescode) {
                    t.html(e.html),
                    Chat.chatEl.find(".chat-list").css("visibility", "visible"),
                    Chat.chatEl.find(".chat-wrap-mask").remove(),
                    i || t.hasClass("dialog-con") || Chat.sendKaEvent("Geekshow_tab_" + Chat.getPublicStatis().context + "_" + Chat.getPublicStatis().view + "_" + Chat.curUserData.uid),
                    t.find(".link-attachment").removeAttr("ka").on("click", function() {
                        Chat.sendKaEvent("Geekshow_download_" + Chat.getPublicStatis().context + "_" + Chat.getPublicStatis().view + "_" + Chat.curUserData.uid)
                    }),
                    t.find(".link-fullscreen").on("click", function() {
                        Chat.viewFullResume($(this).attr("data-origin"), $(this).parent().find(".link-attachment").attr("href"), $(this))
                    }),
                    t.find(".btn-resume").on("click", function() {
                        var e = $(this);
                        e.hasClass("disabled") || $.confirm({
                            content: "向牛人索取简历吗？<p>如果牛人同意，TA的简历将发送到<br/>" + Chat.myselfData.email + "</p>",
                            title: "温馨提示",
                            closeIcon: !0,
                            columnClass: "",
                            onOpen: function() {},
                            confirm: function() {
                                Chat.exchangeResume(2, {
                                    from: {
                                        uid: Chat.curUserData.uid
                                    }
                                }),
                                e.text("已发出请求").addClass("disabled")
                            },
                            error: function(e) {}
                        })
                    });
                    var s = t.find(".attachment-view")
                      , n = s.find("img")
                      , a = n.attr("data-src") || n.attr("src")
                      , r = n.attr("data-download")
                      , o = function() {
                        if (n.length) {
                            var e = new Image;
                            e.src = a,
                            s.append('<div class="data-tips"><div class="spinner spinner-circle"><div class="loader"></div><span>正在加载简历...</span></div></div>'),
                            e.onload = function() {
                                var i = e.height || n.height();
                                n.attr("src", a),
                                s.find(".data-tips").remove(),
                                t.hasClass("dialog-con") && window.innerHeight < i && (t.find(".attachment-detail").css({
                                    position: "static",
                                    transform: "translate(0, 0)",
                                    display: "inline-block"
                                }),
                                t.css({
                                    textAlign: "center"
                                })),
                                t.scrollTop(0)
                            }
                            ,
                            e.onerror = function() {
                                t.html('<div class="attachment-detail"><div class="attachment-blank"><b>此附件简历暂时无法预览，您可以</b><div class="btns"><a href="' + r + '" ka="attachment-download2" class="btn">下载附件简历</a></div><p><a href="javascript:;" class="link-refresh">重试预览</a></p></div></div>'),
                                Chat.sendKaEvent("boss_attachment_error_" + a)
                            }
                        }
                    };
                    o(),
                    t.on("click", ".link-refresh", function() {
                        o()
                    }),
                    s.hover(function() {
                        s.find(".attachment-download").css({
                            "margin-left": Chat.containerChat.width() / 2 - 10 + "px"
                        }).show()
                    }, function() {
                        s.find(".attachment-download").hide()
                    })
                }
            },
            error: function(e) {}
        })
    }
};
$(function() {
    Publisher.init(),
    Chat.init()
});
var Safety = {
    init: function() {
        if ($(".safety").length) {
            $(".safety-help").on("click", function() {
                $(this).parents(".help-box").toggleClass("tips-info-open")
            });
            var e = 0
              , t = setInterval(function() {
                e++,
                e < 50 ? $.get("/user/loginconfirm/check.json").success(function(e) {
                    if (e.rescode)
                        switch (e.status) {
                        case -1:
                            clearInterval(t);
                            break;
                        case 1:
                            clearInterval(t),
                            $(".safety-container").eq(0).addClass("hide"),
                            $(".safety-container").eq(1).removeClass("hide"),
                            setTimeout(function() {
                                window.location.href = e.toUrl
                            }, 2e3);
                            break;
                        case 2:
                            clearInterval(t),
                            setTimeout(function() {
                                window.location.href = e.toUrl
                            }, 2e3)
                        }
                }) : clearInterval(t)
            }, 2e3)
        }
    }
};
$(function() {
    Safety.init()
});
var Report = {
    init: function() {
        Report.uploadCount = 0,
        Report.setContent()
    },
    setContent: function() {
        var e = function(e) {
            e.remove(),
            Report.uploadCount--
        };
        $("body").on("click", ".icon-report,.link-report", function() {
            try {
                _T.sendEvent("report_geek_" + $(".icon-report").siblings(".icon-coop").attr("data-uid"))
            } catch (e) {}
            var t = $(this).attr("data-uid") || ""
              , i = $(this).attr("data-expect") || "";
            $.get("/user/report/form.json", function(s) {
                s.rescode ? $.dialog({
                    content: s.html,
                    title: "举报",
                    inline: !0,
                    cancelButton: "取消",
                    confirmButton: "确认",
                    wrapClass: "pop-report",
                    onOpen: function(t) {
                        "FormsUI"in window && FormsUI.dropSelect(t),
                        "DropDown"in window && DropDown.init(t),
                        t.find(".verify-box img").on("click", function() {
                            $(this).attr("src", "/captcha/?randomKey=" + $(this).siblings(".randomkey").val() + "&_r=" + (new Date).getTime())
                        }),
                        t.find("#fileupload").on("click", function(e) {
                            $(this).next(".verify-box") ? Report.checkForm($(".verify-box")) ? Report.uploadPictures($(this), t) : e.preventDefault() : Report.uploadPictures($(this), t)
                        }),
                        t.on("click", ".link-close", function() {
                            e($(this).parents("li"))
                        })
                    },
                    onConfirm: function(e) {
                        return Report.submitForm(e, t, i)
                    }
                }) : 1011 == s.code && "undefined" != typeof Detail ? Detail.showSign(1011) : $.toast({
                    content: s.resmsg,
                    type: "error"
                })
            })
        })
    },
    uploadPictures: function(el, popContent) {
        var url = "/faqfeedback/pc/upload/picture.json"
          , typeRule = /(\.|\/)(png|jpg|jpeg)$/i
          , maxSize = 3e6
          , el = el
          , previewEl = el.siblings(".preview")
          , uploadContainer = el.closest(".upload")
          , vertifyEl = popContent.find(".verify-box .ipt");
        el.fileupload({
            method: "POST",
            url: url,
            dataType: "text",
            acceptFileTypes: typeRule,
            maxChunkSize: maxSize,
            formData: {
                token: window.top._PAGE.token ? window.top._PAGE.token.split("|")[0] : ""
            },
            add: function(e, t) {
                var i = t.files[0]
                  , s = i.name
                  , n = i.size;
                return fileInfo = i,
                typeRule.test(s) ? n > maxSize ? void $.toast({
                    content: "请上传3M以内的文件",
                    type: "error"
                }) : Report.uploadCount >= 6 ? void popContent.find(".preview").siblings(".text-error").html("最多可以上传6张照片") : (popContent.find(".preview").siblings(".text-error").html(""),
                uploadContainer.find("a").html('上传图片<i class="icon-toast-loading"></i>'),
                t.formData = {
                    randomKey: popContent.find(".randomkey").val() || "",
                    captcha: popContent.find(".verify-box input").val() || ""
                },
                void t.submit()) : void $.toast({
                    content: "请上传png、jpg、jpeg 格式的文件",
                    type: "error"
                })
            },
            done: function(e, data) {
                var result = data.result;
                "string" == typeof result && (result = eval("(" + result + ")")),
                1 == result.rescode ? (Report.uploadCount++,
                setTimeout(function() {
                    previewEl.find("ul").append('<li><img src="' + result.url[0] + '" data-img="' + result.url[1] + '"/><i class="link-close"></i></li>'),
                    popContent.addClass("upload-complate"),
                    uploadContainer.find("a").html("上传图片")
                }, 500),
                popContent.addClass("upload-complate")) : (uploadContainer.find("a").html("上传图片"),
                $.toast({
                    content: result.resmsg,
                    type: "error"
                }),
                "验证码错误" == result.resmsg && (vertifyEl.val("").focus(),
                popContent.find(".verify-box img").click()))
            },
            fail: function(e, t) {
                uploadContainer.find("a").html("上传图片"),
                $.toast({
                    content: "上传失败",
                    type: "error"
                })
            }
        })
    },
    submitForm: function(e, t, i) {
        var s = e
          , n = $.trim(s.find("textarea").val())
          , a = !1
          , r = this
          , o = ""
          , c = ""
          , l = "";
        if (s.find(".ipt-wrap").each(function() {
            return a = r.checkForm($(this)),
            r.checkForm($(this))
        }),
        a && !s.find(".preview img").length)
            return e.find(".preview").siblings(".text-error").html("请上传照片！"),
            !1;
        s.find(".preview img").each(function() {
            o += $(this).attr("data-img") + ","
        }),
        o = o.substring(0, o.length - 1),
        "" != t ? (c = t,
        l = i) : "_reportData"in window ? (c = _reportData.reportedId,
        l = _reportData.targetId) : (c = Chat.curUserData.uid,
        l = Chat.curUserData.infoData.expectId);
        var d = {
            reportedId: c,
            reasonCode: $('input[name="reasonCode"]').val(),
            content: n,
            targetId: l,
            imgUrl: o || "",
            randomKey: s.find(".randomkey").val(),
            captcha: $(".verify-box input").val()
        };
        return a && (a = !1,
        $.ajax({
            url: "/user/report/save.json",
            type: "POST",
            data: d,
            dataType: "JSON",
            timeout: 3e4,
            success: function(t) {
                t.rescode ? ($.toast({
                    content: "发送成功，感谢您的反馈 ：）",
                    type: "success"
                }),
                Report.uploadCount = 0,
                e.remove()) : ($.toast({
                    content: t.resmsg,
                    type: "error"
                }),
                "验证码错误" == t.resmsg && (s.find(".verify-box .ipt").val("").focus(),
                s.find(".verify-box img").click()))
            },
            error: function(e) {}
        })),
        !1
    },
    checkForm: function(e) {
        var t, i = e.find(".ipt").val();
        if (void 0 != e.find(".ipt").attr("data-range")) {
            if (t = e.find(".ipt").attr("data-range").split(",")[1],
            i.length > t)
                return e.next(".text-error").html("请输入" + t + "个字以内的内容"),
                !1;
            e.next(".text-error").html("")
        }
        if ("" == i) {
            var s = e.find(".ipt").attr("data-blank");
            return e.find(".ipt").focus(),
            e.next(".text-error").html(s),
            !1
        }
        return e.next(".text-error").html(""),
        !0
    }
};
$(function() {
    Report.init()
});
var BossSettings = {
    URL: {
        greeting: {
            url: "/boss/update/greeting.json",
            method: "POST"
        },
        greetingPage: {
            url: "/boss/account/greeting.json",
            method: "GET"
        }
    },
    count: 0,
    init: function() {
        this.submitUsal(),
        this.switchGreetingStatus()
    },
    recruitmentSayHello: function() {
        var e = this;
        $(this).hasClass("boss-say-hello") && $.ajax({
            url: $(".boss-say-hello").attr("data-url"),
            method: "get",
            dataType: "json",
            success: function(t) {
                $(".set-sayhello-box").html(t),
                e.submitUsal()
            }
        })
    },
    submitUsal: function() {
        var e = this;
        $(".set-sayhello-box .radio-list").on("change", ".radio input", function(t) {
            t.preventDefault();
            var i = $(this).val();
            $.ajax({
                url: e.URL.greeting.url,
                method: e.URL.greeting.method,
                dataType: "json",
                data: {
                    status: 1,
                    templateId: i
                },
                success: function(e) {
                    if (1 == e.rescode)
                        $.toast({
                            content: "设置成功",
                            lock: !0,
                            type: "success",
                            wrapClass: "",
                            position: "top",
                            time: 3e3
                        });
                    else if (0 == e.rescode) {
                        var t = e.resmsg;
                        $.toast({
                            content: t,
                            lock: !0,
                            type: "error",
                            wrapClass: "",
                            position: "top",
                            time: 3e3
                        })
                    }
                }
            })
        })
    },
    submitSwitch: function(e, t) {
        if (!t.hasClass("disabled")) {
            t.addClass("disabled");
            var i = this;
            $.ajax({
                url: i.URL.greeting.url,
                method: i.URL.greeting.method,
                dataType: "json",
                data: {
                    status: e
                },
                success: function(s) {
                    1 == s.rescode ? (i.showModalToast("设置成功", "success"),
                    i.switchSuccessFn(e, t)) : 0 == s.rescode && i.showModalToast(s.resmsg, "error"),
                    t.removeClass("disabled")
                },
                error: function() {
                    t.removeClass("disabled")
                }
            })
        }
    },
    switchGreetingStatus: function() {
        var e = this;
        $(".set-sayhello-box .setting-switch").on("click", ".switch-op .op-switch", function() {
            var t = $(this);
            t.hasClass("op-switch-on") ? e.submitSwitch(0, t) : e.submitSwitch(1, t)
        })
    },
    switchSuccessFn: function(e, t) {
        var i = this
          , s = t.parents(".switch-op").siblings("p.gray")
          , n = {
            0: "招呼语已关闭，系统将不再为您发出打招呼语，您可能会收到更少牛人的回复",
            1: "选择一个招呼语，在您和牛人发起聊天时，系统为您自动发出"
        };
        if (0 == e) {
            t.removeClass("op-switch-on").addClass("op-switch-off"),
            t.parents(".setting-switch").siblings().remove(),
            s.text(n[0]);
            try {
                _T.sendEvent("icebreaker_off")
            } catch (e) {}
        } else
            i.getGreetingData().then(function(e) {
                $(".set-sayhello-box .sayhello-form").empty().append($(e)),
                i.submitUsal(),
                i.switchGreetingStatus();
                try {
                    _T.sendEvent("icebreaker_on")
                } catch (e) {}
            })
    },
    getGreetingData: function() {
        var e = $.Deferred()
          , t = this;
        return $.ajax({
            url: t.URL.greetingPage.url,
            method: t.URL.greetingPage.method,
            dataType: "json",
            success: function(i) {
                1 == i.rescode ? e.resolve(i.html) : 0 == i.rescode && (e.reject(),
                t.showModalToast(i.resmsg, "error"))
            }
        }),
        e
    },
    showModalToast: function(e, t) {
        $.toast({
            content: e,
            lock: !0,
            type: t,
            wrapClass: "",
            position: "top",
            time: 3e3
        })
    }
}
  , menuInterview = function() {
    var e = {};
    e.list = function() {
        var e = $.Deferred();
        return $.get("/bossweb/interview/list.json", function(t) {
            setTimeout(function() {
                e.resolve(t.interviewList)
            }, 500)
        }),
        e
    }
    ;
    var t = {
        wrap: function() {
            return '<div class="interview-overlays"><div class="data-tips"><div class="spinner spinner-circle"><div class="loader"></div><span>正在加载数据...</span></div></div></div>'
        },
        list: function(e) {
            return Utemplate('<p class="subhead">面试安排<%if(0 < this.total){%>（<%this.total%>）<%}%></p><%if(!this.today.length && !this.others.length){%><div class="interview-list-empty"><p class="icon-empty"></p>你目前还没有面试安排</div><%}%><dl><%if (this.today.length){%><dt>今天<span class="gray"><%this.date%></span></dt><%}%><%for(var i=0;i<this.today.length;i++){%><dd <%if(!this.today[i].expired){%>class="active"<%}%>><div class="geek-intro"><p class="figure"><img src="<%this.today[i].avatar%>"><%if(this.today[i].gender == 1){%><i class="icon-gender men"></i><%}%><%if(this.today[i].gender == 0){%><i class="icon-gender women"></i><%}%></p><span class="name"><%this.today[i].geekName%> | <span><%this.today[i].typeDesc%></span></span><span class="phone"><i class="icon-phone"></i><%this.today[i].phone%></span></div><div class="date-intro"><p><span class="gray">时间：</span><%this.today[i].date%>   <%this.today[i].clock%></p><p><span class="gray">职位：</span><%this.today[i].jobName%></p></div><%if (this.today[i].type == 1 || this.today[i].type ==3){%><p class="btn-box"><a href="javascript:;" class="btn" data-uid="<%this.today[i].geekId%>">继续沟通</a></p><%}%></dd><%}%><%if(this.others.length){%><dt>以后</dt><%}%><%for(var j=0;j<this.others.length;j++){%><dd class="active"><div class="geek-intro"><p class="figure"><img src="<%this.others[j].avatar%>"><%if(this.others[j].gender == 1){%><i class="icon-gender men"></i><%}%><%if(this.others[j].gender == 0){%><i class="icon-gender women"></i><%}%></p><span class="name"><%this.others[j].geekName%> | <span><%this.others[j].typeDesc%></span></span><span class="phone"><i class="icon-phone"></i><%this.others[j].phone%></span></div><div class="date-intro"><p><span class="gray">时间：</span><%this.others[j].date%>   <%this.others[j].clock%></p><p><span class="gray">职位：</span><%this.others[j].jobName%></p></div><%if (this.others[j].type == 1 || this.others[j].type ==3){%><p class="btn-box"><a href="javascript:;" data-uid="<%this.others[j].geekId%>" class="btn">继续沟通</a></p><%}%></dd><%}%></dl>', e)
        }
    }
      , i = function() {
        var e = $(".link-vipaccount")
          , t = Math.floor(e.offset().left) + Math.floor(e.width() / 2) - 245
          , i = {};
        return t + $(".interview-overlays").width() >= $("body").width() ? i.right = "10px" : i.left = t + "px",
        i
    }
      , s = function() {
        for (var e = document.getElementsByTagName("iframe"), t = 0; t < e.length; t++)
            try {
                e[t].contentWindow.document.addEventListener("click", function() {
                    $(".interview-overlays").remove()
                })
            } catch (e) {}
    }
      , n = function() {
        if (!$(".interview-overlays").length) {
            var n = $(t.wrap());
            n.css(i()),
            $("body").append(n),
            s(),
            e.list().then(function(e) {
                $(".interview-detail .dot").remove(),
                $.each(e, function(e, t) {
                    var i = new Date(t.appointTime);
                    t.date = i.getMonth() + 1 + "月" + i.getDate() + "日",
                    t.clock = i.getHours() + "：" + ("0" + i.getMinutes()).substr(-2, 2)
                });
                var i = e.filter(function(e) {
                    return e.today
                })
                  , s = e.filter(function(e) {
                    return !e.today
                })
                  , a = new Date;
                $(".interview-overlays").empty().html(t.list({
                    today: i,
                    others: s,
                    date: a.getMonth() + 1 + "月" + a.getDate() + "日",
                    total: e.length
                })),
                n.off("click").on("click", ".btn-box .btn", function() {
                    var t = $(this).attr("data-uid")
                      , i = e.filter(function(e) {
                        return e.geekId == t
                    });
                    i.length && $.post("/chat/addRelation.json", {
                        gid: i[0].geekId,
                        jid: i[0].jobId,
                        lid: i[0].lid,
                        expectId: i[0].expectId
                    }, function() {
                        Chat.toggleUser({
                            uid: t,
                            eid: i[0].encryptGeekId,
                            jid: i[0].jobId
                        })
                    })
                })
            })
        }
    };
    return $(document).on("click.interview", function(e) {
        if ($(".interview-overlays").length && !$(e.target).hasClass("interview-detail")) {
            var t = $(".interview-overlays")
              , i = t.offset()
              , s = e.clientX
              , n = e.clientY
              , a = Math.floor(i.left)
              , r = Math.floor(t.width()) + a
              , o = Math.floor(i.top)
              , c = Math.floor(t.height()) + o;
            s > a && s < r && n > o && n < c || $(".interview-overlays").remove()
        }
    }),
    {
        view: n
    }
}()
  , ChatRecord = {
    initChatRecords: function(e) {
        var t = $.Deferred()
          , i = this
          , s = e
          , n = s.attr("data-url");
        return s.hasClass("disabled") ? t : (s.addClass("disabled"),
        $.ajax({
            type: "get",
            url: n,
            async: !0,
            dataType: "JSON",
            success: function(e) {
                1 == e.rescode ? t.resolve(e) : ($.toast({
                    content: e.resmsg,
                    type: "error"
                }),
                t.reject(e)),
                i.requestThrottle(s)
            },
            error: function(e) {
                $.toast({
                    content: e.resmsg,
                    type: "error"
                }),
                i.requestThrottle(s),
                t.reject()
            }
        }),
        t)
    },
    renderChatRecordsPopup: function(e) {
        $.dialog({
            title: "",
            content: e,
            closeText: !0,
            confirmText: !1,
            cancelText: !1,
            wrapClass: "dialog-view-records",
            lock: !0,
            onOpen: function(e) {},
            onConfirm: function(e) {}
        })
    },
    requestThrottle: function(e) {
        setTimeout(function() {
            e.removeClass("disabled")
        }, 2e3)
    }
}
  , Feedback = {
    _picCount: 0,
    _limitPicCount: 3,
    getContent: function() {
        var e = this;
        $.get("/faqfeedback/pc/create.json").success(function(t) {
            $.dialog({
                content: t.html,
                title: '意见反馈<span class="tips">（登录用户，提交反馈后可在App端查看客服回复的消息）</span>',
                closeText: !0,
                cancelButton: "取消",
                confirmButton: "确认",
                inline: !0,
                wrapClass: "pop-feedback",
                closeLayer: !1,
                onOpen: function(t) {
                    var i = t.find(".upload-pics")
                      , s = t.find(".upload-pic-btn")
                      , n = t.find(".upload-pic-btn-wrapper")
                      , a = t.find(".verify-box");
                    Feedback._picCount = 0,
                    a.find("img").on("click", function() {
                        $(this).attr("src", "/captcha/?randomKey=" + $(this).siblings(".randomkey").val() + "&_r=" + (new Date).getTime())
                    }),
                    s.on("click", function(s) {
                        if (i.children(".upload-pic").length >= Feedback._limitPicCount)
                            return $.toast({
                                content: "最多上传" + Feedback._limitPicCount + "张图片",
                                type: "error"
                            }),
                            s.preventDefault(),
                            !1;
                        a ? e.checkForm(a) ? e.uploadPicture(i, t) : s.preventDefault() : e.uploadPicture(i, t)
                    }),
                    i.on("click", ".remove-pic", function(e) {
                        $(this).closest(".upload-pic").remove(),
                        --Feedback._picCount,
                        i.children(".upload-pic").length < Feedback._limitPicCount && n.show()
                    })
                },
                onConfirm: function(t) {
                    return e.submitForm(t)
                },
                onCancel: function(e) {
                    try {
                        _T.sendEvent("feedback_cancel")
                    } catch (e) {}
                    e.remove()
                }
            })
        })
    },
    uploadPicture: function(elPicsWrap, popContent) {
        var vertifyEl = popContent.find(".verify-box .ipt")
          , uploadWaringTimer = null
          , reg = /(\.|\/)(png|jpg|jpeg)$/i;
        elPicsWrap.fileupload({
            method: "POST",
            url: "/faqfeedback/pc/upload/picture.json",
            dataType: "text",
            acceptFileTypes: reg,
            maxChunkSize: 2e6,
            formData: {
                randomKey: popContent.find(".randomkey").val() || "",
                captcha: popContent.find(".verify-box input").val() || ""
            },
            add: function(e, t) {
                var i = t.files[0]
                  , s = i.name
                  , n = i.size;
                return reg.test(s) ? n > 2e6 ? void $.toast({
                    content: "上传文件过大(最大2M)",
                    type: "error"
                }) : Feedback._picCount >= Feedback._limitPicCount ? (clearTimeout(uploadWaringTimer),
                uploadWaringTimer = setTimeout(function() {
                    $.toast({
                        type: "warning",
                        content: "最多上传3张图片"
                    })
                }, 100),
                !1) : (++Feedback._picCount,
                void t.submit()) : void $.toast({
                    content: "请上传png、jpg、jpeg 格式的文件",
                    type: "error"
                })
            },
            done: function(e, data) {
                var result = data.result;
                if ("string" == typeof result && (result = eval("(" + result + ")")),
                1 == result.rescode) {
                    elPicsWrap.find(".upload-pic-btn-wrapper").before('<div class="upload-pic"><div class="remove-pic"></div><img src="' + result.url[0] + '" data-img="' + result.url[1] + '"/></div>'),
                    elPicsWrap.find(".upload-pic").length >= Feedback._limitPicCount && elPicsWrap.find(".upload-pic-btn-wrapper").hide();
                    try {
                        _T.sendEvent("feedback_pic")
                    } catch (e) {}
                } else
                    clearTimeout(uploadWaringTimer),
                    $.toast({
                        content: result.resmsg ? result.resmsg : result.message ? result.message : "上传失败",
                        type: "error"
                    }),
                    "验证码错误" == result.resmsg && (vertifyEl.val("").focus(),
                    popContent.find(".verify-box img").click()),
                    --Feedback._picCount
            },
            fail: function(e, t) {
                clearTimeout(uploadWaringTimer),
                $.toast({
                    content: "上传失败",
                    type: "error"
                }),
                --Feedback._picCount
            }
        })
    },
    submitForm: function(e) {
        var t, i = e, s = i.find("textarea").val(), n = this;
        i.find(".ipt-wrap").each(function() {
            return t = n.checkForm($(this)),
            n.checkForm($(this))
        });
        var a = {
            content: s,
            imgurl: i.find(".upload-pic img").map(function(e, t) {
                return $(t).data("img")
            }).get() || null,
            screen: $(window).width() + "*" + $(window).height(),
            pk: $("#page_key_name").val(),
            randomKey: i.find(".randomkey").val(),
            captcha: $(".verify-box input").val()
        };
        return t && (t = !1,
        $.ajax({
            url: "/faqfeedback/pc/save.json",
            type: "POST",
            data: a,
            traditional: !0,
            dataType: "JSON",
            timeout: 3e4,
            success: function(t) {
                if (t.rescode) {
                    $.toast({
                        content: "反馈成功！我们会尽快核实处理",
                        type: "success"
                    });
                    try {
                        _T.sendEvent("feedback_success")
                    } catch (e) {}
                    e.remove()
                } else {
                    $.toast({
                        content: t.resmsg || "提交失败，请稍后再试",
                        type: "error"
                    }),
                    i.find(".verify-box .ipt").val(""),
                    i.find(".verify-box img").click();
                    try {
                        _T.sendEvent("feedback_fail")
                    } catch (e) {}
                }
            },
            error: function(e) {
                $.toast({
                    content: "提交失败，请稍后再试",
                    type: "error"
                });
                try {
                    _T.sendEvent("feedback_fail")
                } catch (e) {}
            }
        })),
        !1
    },
    checkForm: function(e) {
        var t, i, s = e.find(".ipt").val();
        if (void 0 != e.find(".ipt").attr("data-range")) {
            var n = e.find(".ipt").attr("data-range").split(",");
            if (i = n[0],
            t = n[1],
            s.length > t)
                return e.next(".text-error").html("请输入" + t + "个字以内的内容"),
                !1;
            if (e.next(".text-error").html(""),
            s.length < i)
                return e.next(".text-error").html("内容描述至少" + i + "个字"),
                !1;
            e.next(".text-error").html("")
        }
        if ("" == s) {
            var a = e.find(".ipt").attr("data-blank");
            return e.find(".ipt").focus(),
            e.next(".text-error").html(a),
            !1
        }
        return e.next(".text-error").html(""),
        !0
    }
};
