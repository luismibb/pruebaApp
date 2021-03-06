const http = require("http");

const host = '0.0.0.0';
const port = 8083;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`{"message": "This is app3 ${process.env["key"]}"}`);
};

const server = http.createServer(requestListener);
server.listen(process.env.PORT, host, () => {
    console.log(`Server is running on http://${host}:${process.env.PORT}`);
});
