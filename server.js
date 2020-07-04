const express = require('express');  // import the Express library
const app = express();
const bodyParser = require('body-parser');  // import body-parser for POST

app.use(bodyParser.json());

const mockUserData=[
  {name:'Mark'},
  {name:'Jill'}
]


// 瀏覽器進入 /users，取得的是 mockUserData 的所有資料
app.get('/users', function(req,res){
  res.json({
    success: true,
    message: 'successfully got users. Nice!',
    users: mockUserData
  })
})


// 瀏覽器進入 /users/<id>，回傳與網址後綴對應的內容
app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})


// POST：使用者登入
app.post('/login',function(req,res){
  const username=req.body.username;
  const password=req.body.password;

  const mockUsername="billyTheKid";
  const mockPassword="superSecret";

  // 驗證登入資料
  if (username===mockUsername && password===mockPassword){
       res.json({
          success: true,
          message: 'password and username match!',
          token: 'encrypted token goes here'
       })
  } else {
       res.json({
          success: false,
          message: 'password and username do not match'
       })
  }
})

app.listen(8000, function(){
  console.log("server is running with nodemon realtime-updated.")
})