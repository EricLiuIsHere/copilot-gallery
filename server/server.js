// server.js
const express = require('express')
const next = require('next')
const server = express();
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

server.set('x-powered-by', dev);

app.prepare()
    .then(() => {
        server.get('/api(/*)?', (req, res) => {
            res.json({ name: 'api' })
        });

        // 所有请求都交由next处理
        server.get('*', (req, res) => {
            return handle(req, res)
        })

        // 监听端口号
        server.listen(port, (err) => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${port}`)
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })