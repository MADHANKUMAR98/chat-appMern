const {register}=require("../controllers/usersControllers");
const router=require("express").Router();
const {login}=require("../controllers/usersControllers")
router.post("/register",register);
router.post("/login",login)
module.exports=router;