"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = require("../models/userSchema");
const userService = require("../services/userService");
const express = require("express");
const router = express.Router();
router.get("/fetch/:id", async (req, resp) => {
    try {
        console.log("Request params : ", req.params['id']);
        console.log("Control is here : GET");
        let fetchedUser = await userService.fetchUser(req.params['id']);
        resp.json(fetchedUser);
    }
    catch (err) {
        console.log(err);
        resp.send("Bad Request");
    }
});
router.post("/add", async (req, resp) => {
    try {
        console.log("Control is here: POST");
        console.log("Request body ", req.body);
        let savedUser = await userService.createUser(req.body);
        resp.json(savedUser);
    }
    catch (err) {
        console.log(err);
    }
});
router.put("/update", (req, resp) => {
    console.log("Control is here: PUT");
});
router.delete("/delete", (req, resp) => {
    console.log("Control is here: DELETE");
});
module.exports = router;
//# sourceMappingURL=userController.js.map