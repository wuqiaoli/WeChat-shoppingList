const express = require('express')
const router = express.Router();
const app = express();
const mysql = require('mysql');
const link = require('../server/sql.js');
let connection = mysql.createConnection(link.mysql)
connection.connect();
const sql = require('../server/ab.js') ;
// 首页
app.get('/shop', function (req, res) {
  connection.query(sql.shopList.list, function (err, result) {
    if (err) {
      return;
    }
    let obj = {
      status: '200',
      data: result
    }
      res.send(obj);
  });
});
// 菜单详情页
app.get('/food', function (req, res) {
  connection.query(sql.food.list, function (err, result) {
    if (err) {
      return;
    }
    let obj = {
      status: '200',
      data: result
    }
    res.send(obj);
  });
});





app.listen(3000, () => console.log('Example app listening on port 3000!'))
module.exports = app;