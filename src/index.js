const app = require('./app.js')
const db =require('./db.js')

db.connectdb()
app.listen(3000)
console.log('server on port',3000)