var spawn = require('child_process').spawn
var http = require('http')
var spawn = require('child_process').spawn
var createHandler = require('github-webhook-handler')
var handler = createHandler({ path: '/', secret: ''}) // 根据git上webhook的配置填写
http.createServer(function (req, res) {
  console.log(res.body)
  handler(req, res, function (err) {
    res.statusCode = 404;
    res.end('no such location')
  })
}).listen(7777)

handler.on('error', function (err) {
  console.error('Error:', err.message)
})

// 监听 push 事件
handler.on('push', function (event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref)
    init() // 每次拉取都重新监听
}
)   
function rumCommand( cmd, args, cwd, callback ) {
  var child = spawn( cmd, args, {cwd: cwd} )
  var response = ''
  child.stdout.on('data', function( buffer ){ response += buffer.toString(); })
  child.stdout.on('end', function(){ callback( response ) })
}

function init() {
  rumCommand('sh', ['./deloy.sh'], './' ,function( result ) { // 清理缓存
    console.log(result)
  })

  // rumCommand('sh', ['../server/autoServer.sh'], '../server' ,function( result ) { // cLient端更新
  //   console.log(result)
  // })
  
  // rumCommand('sh', ['../client/autoClient.sh'], '../client' ,function( result ) { // server端更新
  //   console.log(result)
  // })
}