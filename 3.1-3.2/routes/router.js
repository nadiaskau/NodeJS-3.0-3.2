"use strict";
/*
 * check if routed handler function exists
 * if yes call it, else complain
 */
const handlers = require("../private/handlers");               // handlers module
const requestHandlers = {                             // application urls here
    "/": handlers.home,
    "/start": handlers.home,
    "/contact": handlers.contact,
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

        if(req.method == 'POST'){
            console.log('Post request'); //not sure if this counts as a reciept :-) 
        }
        if (typeof requestHandlers[req.url] === 'function') {  // look for route
            requestHandlers[req.url](req, res);                // if found use it
        } else if (typeof requestHandlers[ext] === "function") { //Her fanger vi css, png, js og ico - hvis det sidste i vores array er en funktion (fx css)
            requestHandlers[ext](req, res);
        } else {
            console.log("5: " + ext);
            if(req.method == 'GET') {
                console.log('Get request');
                requestHandlers["/contact"](req, res);
            }
            else {
                requestHandlers["/notfound"](req, res);        // use notfound
            }
        }
    }
}