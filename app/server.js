const http = require('http')
const fs = require('fs')
const path = require('path')
const PORT = process.env.PORT || 3000
const URL = fs.readFileSync(path.join(__dirname, 'force-org-open.txt'), 'utf8')

http.createServer((req, res) => {
  console.log('Location:', URL)
  res.writeHead(302, { Location: URL })
  res.end()
}).listen(PORT, () => console.log(`Listening on ${PORT}`))
