const express = require("express")
const router = express.Router();
const { isLogin } = require("../middleware/middleware");
router.use(isLogin);

router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "all blogs fetched successfully",
    });
});

router.get("/:id", (req, res) => {
    res.json({
        success: true,
        message: "one blog fetched successfully",
    });
});

router.post("/",(req,res)=>{
    res.json({
        success: true,
        message: "Blog created successfully",
    })
})
module.exports = router;