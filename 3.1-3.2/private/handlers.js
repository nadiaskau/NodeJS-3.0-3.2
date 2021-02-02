'use strict';
/*
 * handlers.js
 * Requesthandlers to be called by the router mechanism
 */
const fs = require("fs");                           // file system access
const httpStatus = require("http-status-codes");    // http sc

const getAndServe = function (res, path, content) {
    fs.readFile(path, function(err, data) {
        if (err) {
            console.log(`Not found file: ${path}`);
        }
        res.writeHead(httpStatus.OK, {      // yes, write header
            "Content-Type": content
        });
        console.log(`served routed file: ${path}.`);
        res.write(data);
        res.end();
    });
}

module.exports = {
    home(req, res) {
        let path = "public/html/index.html";
        let content = "text/html; charset=utf-8";
        getAndServe(res, path, content);
    },
    contact(req, res) {
        let path = "public/html/contact.html";
        let content = "text/html; charset=utf-8";
        getAndServe(res, path, content);
    },
/*     js(req, res) {
        let path = "public/js" + req.url;
        let content = "application/javascript; charset=utf-8";
        getAndServe(res, path, content);
    }, */
    css(req, res) {
        let path = "public/css/style.css"; //It doesn't work witouth extension - .css
        let content = "text/css; charset=utf-8";
        getAndServe(res, path, content);
    },
    png(req, res) {
        let path = "public/images/background.png"; //It doesn't work witouth extension - .png. 
        let content = "image/png";
        getAndServe(res, path, content);
    },
    /* ico(req, res) {
        let path = "public" + req.url;
        let content = "image/x-icon";
        getAndServe(res, path, content); 
    }, */
    notfound(req, res) {
        console.log(`Handler 'notfound' was called for route ${req.url}`);
        res.end();
    }
}