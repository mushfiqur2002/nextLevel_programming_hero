import * as http from "http"
import config from "./config";
import addRoutes, { RouteHandlers, routes } from "./routehandleres";

addRoutes("GET", "/", (req, res) => {
    res.writeHead(200, { "content-type": "application/json" })
    res.end(
        JSON.stringify({
            success: true,
            message: "route found",
            path: req.url
        })
    )
})
const server: http.Server = http.createServer(
    (req: http.IncomingMessage, res: http.ServerResponse) => {
        console.log('server is runnig........');

        const method = req.method?.toUpperCase() || ""
        const path = req.url || "";

        const methodMap = routes.get(method)
        const handler: RouteHandlers | undefined = methodMap?.get(path)

        if (handler) {
            handler(req, res);
        } else {
            res.writeHead(404, { "content-type": "application/json" })
            res.end(
                JSON.stringify({
                    success: false,
                    message: "route not found",
                    path
                })
            )
        }

        // root
        // if (req.url === '/' && req.method === 'GET') {
        //     res.writeHead(200, {
        //         "Content-Type": "application/json"
        //     })
        //     res.end(JSON.stringify({
        //         message: 'hello kutta hoga',
        //         path: req.url
        //     }))
        // }


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
        if (req.url === "/interUser" && req.method === "POST") {
            let body = "";

            // collect chunks
            req.on("data", (chunk: Buffer) => {
                body += chunk.toString();
            });

            // when all data is received
            req.on("end", () => {
                try {
                    if (!body) {
                        throw new Error("Empty body");
                    }

                    const userData = JSON.parse(body);

                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(
                        JSON.stringify({
                            success: true, // fixed spelling
                            userData: userData,
                        })
                    );
                } catch (error) {
                    console.error("JSON parse error:", error);
                    res.writeHead(400, { "Content-Type": "application/json" });
                    res.end(
                        JSON.stringify({
                            success: false,
                            error: "Invalid JSON format",
                            tip: "Make sure your data is valid JSON",
                        })
                    );
                }
            });

            // handle request stream error
            req.on("error", (error) => {
                console.error("Request error:", error);
                res.writeHead(500, { "Content-Type": "application/json" });
                res.end(
                    JSON.stringify({
                        success: false,
                        error: "Internal server error",
                    })
                );
            });
        }


    })

server.listen(config.port, () => {
    console.log(`server response in ${config.port}`);
})