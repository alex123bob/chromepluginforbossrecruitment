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
        hrId = '5922502',
        hrEmail = 'tanjiani@corp.netease.com';

    if (listNodes.length > 0) {
        listNodes = Array.prototype.slice.call(listNodes);
    }

    const RESPONSE_TYPE = {
        NEED_GREETING: 1,
        ASK_TO_SEND_RESUME: 2,
        REQUEST_TO_SEND_RESUME: 3,
        PICK_RESUME: 4,
        DONE: 5
    }

    function reactToCandidate(msgs) {
        if (!msgs || msgs.constructor != Array) {
            return RESPONSE_TYPE.NEED_GREETING;
        }
        let notGreeted, greetedYetAskForResume, candidateRequestToSendResume, hasGotCandidateResume;
        msgs = msgs.reverse();
        for (let i = 0; i < msgs.length; i++) {
            const msg = msgs[i];
            if (msg.body.type == 12) {
                hasGotCandidateResume = true;
                break;
            }
            if (msg.body.type == 7) {
                candidateRequestToSendResume = true;
                break;
            }
        }

        // Neither did we get candidate resume,
        // nor did candidate request to send resume.
        if (!hasGotCandidateResume && !candidateRequestToSendResume) {
            if (msgs.filter(msg => msg.body.type == 1).length <= 0) {
                notGreeted = true;
            }
            else if (
                msgs.filter(msg => msg.body.type == 1 && msg.from.uid != hrId).length > 0 
                && msgs.find(msg => msg.body.type == 1 && msg.body.text.indexOf(hrEmail) > -1) == undefined
            ) {
                greetedYetAskForResume = true;
            }
        }

        if (notGreeted) {
            return RESPONSE_TYPE.NEED_GREETING;
        }
        else if (greetedYetAskForResume) {
            return RESPONSE_TYPE.ASK_TO_SEND_RESUME;
        }
        else if (candidateRequestToSendResume) {
            console.log('PICK RESUME');
            return RESPONSE_TYPE.PICK_RESUME;
        }
        else if (hasGotCandidateResume) {
            console.log('HAS GOT RESUME');
            return RESPONSE_TYPE.DONE;
        }
    }

    function communicate(node){
        if (!node) {
            alert('完成');
            return;
        }
        let dataUid = node.firstChild.getAttribute('data-uid'),
            dataEid = node.firstChild.getAttribute('data-eid');
        let func = arguments.callee;
        fetch(`historymsg.json?gid=${dataUid}&maxMsgId=0&c=20&page=1`).then(res => res.json()).then(data => {
            let candidateName = node.firstChild.lastChild.firstChild.childNodes[2].firstChild.nodeValue;
            console.log('check Candidate ' + candidateName);
            // let response = candidateName == '李嘉' ? reactToCandidate(data.messages) : '';
            // let response = candidateName == '李嘉' ? RESPONSE_TYPE.ASK_TO_SEND_RESUME : '';
            let response = reactToCandidate(data.messages);
            if (response == RESPONSE_TYPE.NEED_GREETING) {
                node.firstChild.click();
                setTimeout(function (){
                    document.querySelector('.detail-box .chat-message').innerHTML = '您好，我是网易HR，很高兴认识您!' ;
                    document.querySelector('.detail-box .btn-send').click();
                    console.log('Click send for Candidate ' + candidateName);
                    func(listNodes.shift());
                }, 300);
            }
            else if (response == RESPONSE_TYPE.ASK_TO_SEND_RESUME) {
                node.firstChild.click();
                setTimeout(function (){
                    document.querySelector('.detail-box .chat-message').innerHTML = '您好，如果感兴趣的话，请发送简历作品至tanjiani@corp.neteas.com';
                    document.querySelector('.detail-box .btn-send').click();
                    console.log('Click send for Candidate ' + candidateName);
                    document.querySelector('.detail-box .btn-resume').click();
                    setTimeout(function (){
                        document.querySelector('[ka="dialog_confirm"]').click();
                        console.log('Ask ' + candidateName + ' for Resume ');
                        func(listNodes.shift());
                    }, 100)
                }, 300);
            }
            else if (response == RESPONSE_TYPE.PICK_RESUME) {
                node.firstChild.click();
                setTimeout(function (){
                    let agreeBtn = document.querySelector('.detail-box .btn-agree')
                    if (agreeBtn) {
                        agreeBtn.click();
                    }
                    setTimeout(function (){
                        func(listNodes.shift());
                    }, 300);
                }, 1000);
            }
            else {
                node.firstChild.click();
                setTimeout(function (){
                    document.querySelector('.detail-box .chat-message').innerHTML = '';
                    func(listNodes.shift());
                }, 300);
            }
        });
    }

    communicate(listNodes.shift());
})();