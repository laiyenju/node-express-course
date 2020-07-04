const express = require('express');  // import the Express library
const app = express();

const mockUserData=[
  {name:'Mark'},
  {name:'Jill'}
  ]

app.get('/users', function(req,res){  // 瀏覽器進入 /users，取得的是 mockUserData 的所有資料
  res.json({
    success: true,
    message: 'successfully got users. Nice!',
    users: mockUserData
  })
})

app.get('/users/:id',function(req,res){  // 瀏覽器進入 /users/<id>，取得的是 mockUserData 個別 id 資料
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

app.listen(8000, function(){
  console.log("server is running with nodemon realtime-updated.")
})