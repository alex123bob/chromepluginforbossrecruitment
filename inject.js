(function() {
    function sendText(e,t,i){
        var t = t
          , s = ""
          , e = e || Chat.curUserData
          , i = i || null;
        if (t)
            s = t;
        else {
            // if (Publisher.editorInput.hasClass("btn-disabled"))
            //     return !1;
            s = '你好呀';
            try {
                _T.sendEvent("Geekchat_send_" + Chat.getPublicStatis().context + "_" + Chat.getPublicStatis().view + "_" + e.uid)
            } catch (e) {}
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
        // t || Chat.checkUserBlock() || (Publisher.editorInput.html(""),
        // Publisher.submitBtn.addClass("btn-disabled"),
        // Publisher.editorPlaceholder.show())
    }

    let listNodes = document.querySelectorAll(".user-list .main-list li"),
        hrId = '5922502';

    if (listNodes.length > 0) {
        listNodes = Array.prototype.slice.call(listNodes);
    }

    function communicate(node){
        if (!node) return;
        let dataUid = node.firstChild.getAttribute('data-uid'),
            dataEid = node.firstChild.getAttribute('data-eid');
        let func = arguments.callee;
        fetch(`historymsg.json?gid=${dataUid}&maxMsgId=0&c=20&page=1`).then(res => res.json()).then(data => {
            console.log('check Candidate ' + node.firstChild.lastChild.firstChild.childNodes[2].firstChild.nodeValue)
            let msgs = data.messages;
            /**
             * check if we have communicated with this candidate.
             * */
            let hasCommunicated = !!msgs && msgs.find ? msgs.find(msg => msg.from.uid == hrId && msg.body.type == 1) : false;
            if (!hasCommunicated) {
                node.firstChild.click();
                setTimeout(function (){
                    document.querySelector('.detail-box .chat-message').innerHTML = '您好，如果感兴趣的话，请发送简历作品至tanjiani@corp.neteas.com';
                    // document.querySelector('.detail-box .btn-send').click();
                    console.log('Click send for Candidate ' + node.firstChild.lastChild.firstChild.childNodes[2].firstChild.nodeValue);
                    func(listNodes.shift());
                }, 300);
            }
            else {
                func(listNodes.shift());
            }
        });
    }

    communicate(listNodes.shift());
})();