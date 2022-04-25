var express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/login", async (req, res) => {
  try {
    const sql = "SELECT * FROM user WHERE userid = ? AND pw = ?";
    const param = [req.body.id, req.body.pw];
    const result = await db.executePreparedStatement(sql, param);
    console.log(result);
    res.status(200).send("로그인성공");
  } catch (error) {
    res.status(400).send("로그인 실패");
  }
});

router.post("/regi", async (req, res) => {
  try {
    const sql = "INSERT INTO user (userid,pw,username) VALUES(?,?,?)";
    const param = [req.body.id, req.body.pw, req.body.username];
    const result = await db.executePreparedStatement(sql, param);
    res.send("test");
  } catch (error) {
    res.status(400).send("회원가입 실패");
  }
});

module.exports = router;
