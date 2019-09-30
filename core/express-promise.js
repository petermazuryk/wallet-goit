'use strict';

const PACKAGE = require('express/package.json');
if (parseInt(PACKAGE.version.match(/^\d+/)[0]) !== 4) {
  throw new Error("This patch could be applied only for Express 4. " +
    "Express 5 will get it's own Promise handling.");
}

const Layer = require("express/lib/router/layer");

if (!Layer.prototype.handle_request) {
  throw new Error("Something terribly wrong just happened, " +
    "there are no `Layer.prototype.handle_request` to apply patch to.");
}

Layer.prototype.handle_request = function handle(req, res, next) {
  const fn = this.handle;

  if (fn.length > 3) {
    return next();
  }

  try {
    const maybe_promise = fn(req, res, next);
    if (maybe_promise && maybe_promise.catch && typeof maybe_promise.catch === "function") {
      maybe_promise.catch(next);
    }
  } catch (err) {
    next(err);
  }
};