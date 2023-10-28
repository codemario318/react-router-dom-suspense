// 네이버 검색 API 예제 - 블로그 검색
// https://developers.naver.com/docs/serviceapi/search/blog/blog.md#node-js

var express = require('express');
var app = express();

var client_id = process.env.API_KEY ?? '';
var client_secret = process.env.API_SECRET ?? '';

app.get('/', (req, res) => {
  res.send('hello!')
})

app.get('/search/book/:query?', function (req, res) {
  var queryString = new URLSearchParams(req.query).toString();
  var api_url = 'https://openapi.naver.com/v1/search/book?' + queryString; // JSON 결과
//   var api_url = 'https://openapi.naver.com/v1/search/book.xml?query=' + encodeURI(req.query.query); // XML 결과
  
  var request = require('request');

  var options = {
      url: api_url,
      headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
  };

  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
    }
  });
});

app.listen(3000, function () {
  console.log('http://127.0.0.1:3000/search/book?query=검색어 app listening on port 3000!');
});