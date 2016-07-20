var express = require('express')
var app = express()
var fs = require('fs')

app.get('/script.js', (req, res) => {
  res.set({
    'Content-Type': 'application/javascript',
    'Timing-Allow-Origin': 'http://localhost:8000 http://localhost:8001'
  }).status(200).end('(function () {/* no-op */})()')
})

app.listen(8002, function () {
  setTimeout(() => {
  console.log('This is a demonstration of Timing-Allow-Origin with multiple origins.\nOpen up:\n\t- http://localhost:8000\n\t- http://localhost:8001\nin a browser and compare them. The "connectStart" should be >0 in both if the spec is being followed.')
  }, 1000) 
})
