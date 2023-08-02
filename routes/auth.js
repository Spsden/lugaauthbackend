const express = require("express");
const router = express.Router();

const { login, register ,registerMeta,loginMeta} = require("../controllers/auth");
const { StatusCodes } = require("http-status-codes");

const hey = async(req,res) => {
    res.status(StatusCodes.BAD_GATEWAY).json({
        "obsy":"change route"
    })
}
router.get("/hi",hey)

router.post("/register", register);
router.post("/registermeta", registerMeta);
router.post("/login", login);
router.post("/loginmeta", loginMeta);



module.exports = router;
