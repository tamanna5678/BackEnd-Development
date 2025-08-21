function m1(req,res,next){
    console.log("running middleware m1.....");
    req.user = {
        id: 1,
        username: "user1"
    }
    next()
}

function m2(req,res,next){
    console.log("running middleware m2.....");
    console.log(req.user);
    req.isAdmin = true
    next()
}
function checkAdmin(req, res, next) {
    console.log("running checkAdmin middleware.....");
    let { name } = req.query;
    if(name =="user1"){
        req.isAdmin = true;
        return next()
    }
    res.json({
        success: false,
        message: "you are not admin"
    })
}

function isLogin(req,res,next){
    console.log("running isLogin middleware.....");
    next()
}

module.exports.m1 = m1;
module.exports.m2 = m2;
module.exports.checkAdmin = checkAdmin;
module.exports.isLogin = isLogin;