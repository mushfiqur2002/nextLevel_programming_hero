import * as http from "http"
import config from "./config";
console.log(config.port);

const server: http.Server = http.createServer(
    (req: http.IncomingMessage, res: http.ServerResponse) => {
        console.log('server is runnig........');

        // root
        if (req.url === '/' && req.method === 'GET') {
            res.writeHead(200, {
                "Content-Type": "application/json"
            })
            res.end(JSON.stringify({
                message: 'hello kutta hoga',
                path: req.url
            }))
        }

        // root/users
        if (req.url === '/users' && req.method === 'GET') {
            res.writeHead(200, {
                "Content-Type": "application/json"
            })

            const users = [
                { id: 100, name: 'shoni' },
                { id: 101, name: 'rahul' },
                { id: 102, name: 'priya' }
            ]

            res.end(JSON.stringify({
                success: true,
                count: users.length,
                users: users
            }))
        }

        //root/interUser
        if (req.url === '/interUser' && req.method === 'POST') {
            let body = ''
            req.on("data", (chunk) => {
                body += chunk.toString()
            })
            req.on("end", () => {
                try {
                    const userData = JSON.parse(body)
                    res.writeHead(200, {
                        "Content-Type": "application/json"
                    })
                    res.end(JSON.stringify({
                        sucessfull: true,
                        userData: userData
                    }))
                } catch (error) {
                    console.error('JSON parse error:', error);
                    res.writeHead(400, {
                        "Content-Type": "application/json"
                    });
                    res.end(JSON.stringify({
                        success: false,
                        error: "Invalid JSON format",
                        tip: "Make sure your data is valid JSON"
                    }));
                }
            })

            req.on("error", (error) => {
                console.error('Request error:', error);
                res.writeHead(500, {
                    "Content-Type": "application/json"
                });
                res.end(JSON.stringify({
                    error: "Internal server error"
                }));
            });
        }

        
    })

server.listen(config.port, () => {
    console.log(`server response in ${config.port}`);
})