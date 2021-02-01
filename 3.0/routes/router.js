"use strict";
/*
 * check if routed handler function exists
 * if yes call it, else complain
 */
const handlers = require("../private/handlers");               // handlers module
const requestHandlers = {                             // application urls here
    "/": handlers.home,
    "/start": handlers.home,
    "/about": handlers.side,
    "/notfound": handlers.notfound,
    "js": handlers.js,
    "css": handlers.css, 
    "png": handlers.png,
    "ico": handlers.ico
}

module.exports = {
    route(req, res, body) {
        let arr = req.url.split(".");
        let ext = arr[arr.length - 1];
        if (typeof requestHandlers[req.url] === 'function') {  // look for route
            requestHandlers[req.url](req, res);                // if found use it
        } else if (typeof requestHandlers[ext] === "function") {
            requestHandlers[ext](req, res);
        } else {
            console.log("5: " + ext);
            requestHandlers["/notfound"](req, res);        // use notfound
        }
    }
}