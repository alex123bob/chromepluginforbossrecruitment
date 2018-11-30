/**
 * @name mounibendan
 * @time 2016-12-23
 * @company 电棍出品
 * @description
 */

function Spider(){
  this.job = 'ceshi' // 要抓取的职位类型
  this.total = 30; // 总抓取页数
  this.isEnd = false;
  this.curr = 1;
  this.result = {
    imgCount : 0,
    articleCount : 0
  };
}

// 爬取拉勾网测试岗位招聘信息
Spider.prototype.getAll2Txt = function() {
  var self = this;
  var req = require('request');
  var cheerio = require('cheerio');
  var fs = require('fs');
  var num = 1;
  // 追加代码：保存结果到 XML 文件中
  var result = ''
  var page = 0
  var saveResult = function(data){
    result += data
    page += 1
    if (page < self.total) return
    fs.writeFile('./result.xml', '<root>'+result+'</root>', {flag:'w'}, function(err){
      if(!err){ console.log('写入文件完毕'); }
      else{
        console.log('写入文件错误');
        console.log(err);
      }
    });
  }
  for(var num = 1; num <= self.total; num ++){
    var URL = `https://www.lagou.com/zhaopin/${self.job}/${num}/?filterOption=${num}`;
    // var URL = 'https://www.lagou.com/zhaopin/ceshi/'+num+'/?filterOption='+num+'';
    console.log('爬取的网页为  : '+URL);
    req({
      url:URL,
      method:'GET',
      headers:{
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36'
      }
    },function(err, res, body){
      var one = ''
      if(!err && res.statusCode == '200'){
        var $ = cheerio.load(body);
        var lis = $('#s_position_list li.con_list_item');
        var page = $('div.pager_container').find('a.pager_is_current').text() // add
        self.curr++;
        var escapeForXML = function(string){
          var character = {'&': '&amp;', '"': '&quot;', "'": '&#039;', '<': '&lt;', '>': '&gt;'}
          return string.replace(/([&"<>'])/g, function(str, item) { return character[item]; })
        }
        for(var i = 0 ; i< lis.length; i++){
          one += '<item>'
          one += `<页码>${page}</页码>`
          one += `<岗位名称>${escapeForXML($(lis[i]).attr('data-positionname'))}</岗位名称>`
          one += `<岗位所在公司>${escapeForXML($(lis[i]).attr('data-company'))}</岗位所在公司>`
          one += `<公司阶段>${escapeForXML($(lis[i]).find('div.industry').text().replace(/[\r\n]/g,'').replace(/[ ]/g,''))}</公司阶段>`
          one += `<岗位所在城市>${escapeForXML($(lis[i]).find('span.add em').text())}</岗位所在城市>`
          one += `<岗位薪资>${escapeForXML($(lis[i]).attr('data-salary'))}</岗位薪资>`
          one += `<岗位最低经验要求>${escapeForXML($(lis[i]).find('div.p_bot span').remove().end().find('div.p_bot').text().replace(/[\r\n]/g,'').replace(/[ ]/g,''))}</岗位最低经验要求>`
          one += `<岗位福利>${escapeForXML($(lis[i]).find('div.list_item_bot .li_b_r').text())}</岗位福利>`
          one += `<岗位发布时间>${escapeForXML($(lis[i]).find('span.format-time').text())}</岗位发布时间>`
          one += '</item>'
        }
        // var one = '\r\n第'+$('div.pager_container').find('a.pager_is_current').text()+'张网页内容------------------------------------\r\n';
        // self.curr++;
        // for(var i = 0 ; i< lis.length; i++){
        //  one += '岗位'+(i+1)+' : \r\n'
        //  one += "岗位名称          :  "+$(lis[i]).attr('data-positionname')+'\r\n';
        //  one += "岗位所在公司      :  "+$(lis[i]).attr('data-company')+'\r\n';
        //  one += "公司阶段          :  "+$(lis[i]).find('div.industry').text().replace(/[\r\n]/g,'').replace(/[ ]/g,'')+'\r\n';
        //  one += "岗位所在城市      :  "+$(lis[i]).find('span.add em').text()+'\r\n';
        //  one += "岗位薪资          :  "+$(lis[i]).attr('data-salary')+'\r\n';
        //  one += "岗位最低经验要求  :  "+$(lis[i]).find('div.p_bot span').remove().end().find('div.p_bot').text().replace(/[\r\n]/g,'').replace(/[ ]/g,'')+'\r\n';
        //  one += "岗位福利          :  "+$(lis[i]).find('div.list_item_bot .li_b_r').text()+'\r\n';
        //  one += "岗位发布时间      :  "+$(lis[i]).find('span.format-time').text()+'\r\n';
        // }
        // fs.writeFile('./result.xml', one, {flag:'a'}, function(err){
        //   if(!err){
        //     console.log('写入文件完毕');
        //   }else{
        //     console.log('写入文件错误');
        //     console.log(err);
        //   }
        // });
      }else{ console.log(err); }
      saveResult(one)
    })
  }

  return this;
}

Spider.prototype.getInfoByPage = function(page,callback) {
  var self = this;
  var req = require('request');
  var cheerio = require('cheerio');
  var fs = require('fs');
  var URL = 'https://www.lagou.com/zhaopin/ceshi/'+page+'/?filterOption='+page+'';
    console.log('爬取的网页为  : '+URL);
    req({
      url:URL,
      method:'GET',
      headers:{
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36'
      }
    },function(err, res, body){
      if(!err && res.statusCode == '200'){
        var $ = cheerio.load(body);
        var lis = $('#s_position_list li.con_list_item');
        var arr = [];
        for(var i = 0 ; i< lis.length; i++){
          arr.push({
            'positionName':$(lis[i]).attr('data-positionname'),
            'company':$(lis[i]).attr('data-company'),
            'industry':$(lis[i]).find('div.industry').text().replace(/[\r\n]/g,'').replace(/[ ]/g,''),
            'city':$(lis[i]).find('span.add em').text(),
            'salary':$(lis[i]).attr('data-salary'),
            'requirement':$(lis[i]).find('div.p_bot span').remove().end().find('div.p_bot').text().replace(/[\r\n]/g,'').replace(/[ ]/g,''),
            'welfare':$(lis[i]).find('div.list_item_bot .li_b_r').text(),
            'releaseTime':$(lis[i]).find('span.format-time').text()
          })
        }
        callback(JSON.stringify(arr))
      }else{
        callback(err);
      }
    })
  return this;
}

Spider.prototype.createHttpServer = function(){
  var http = require('http'),
    fs = require('fs'),
    url_module = require('url'),
    queryString = require('queryString'),
    self = this;
  http.createServer(function(req,res){
    var url = url_module.parse(req.url);
    // 主页
    if(url.pathname == '/getInfo'){
      var obj = queryString.parse(url.query);
      self.getInfoByPage(obj.page,function(info){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(info);
        res.end();
      });
    }

    if(url.pathname == '/index.html'){
      fs.readFile('.'+url.pathname,function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data.toString());
        res.end();
      })
    }

    if(url.pathname == '/jquery.min.js'){
      fs.readFile('.'+url.pathname,function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data.toString());
        res.end();
      })
    }


  }).listen(80,'127.0.0.1');

  console.log('监听127.0.0.1:80');
  return this;
}


new Spider().getAll2Txt();




// module.export = Spider;