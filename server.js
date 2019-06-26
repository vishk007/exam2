var express=require('express');
var appln=express();

var gatherInformation=function(req,resp)
{
console.log('hello');
var accinfo=[
	{accountid:1,customername:'vishal',company:'Infoway',bill:4000000},
	{accountid:2,customername:'vish',company:'Habs',bill:6000000},
	{accountid:3,customername:'abc',company:'Dena Bank',bill:80000000}
	];
	resp.send(accinfo);
};

appln.get('/acc',gatherInformation);

var server = appln.listen(8087, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("port is 8087", host, port)
})