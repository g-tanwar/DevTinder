const adminAuth =(req,res,next) =>{                                   // validating middleware function checking for all kind of requests and urls 
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";

    if(!isAdminAuthorized){
        res.status(401).send("Admin not Validated")
    }else{
        next();
    }
}

const UserAuth =(req,res,next) =>{                                   // validating middleware function checking for all kind of requests and urls 
    const token = "xyzsda";
    const isAdminAuthorized = token === "xyz";

    if(!isAdminAuthorized){
        res.status(401).send("Admin not Validated")
    }else{
        next();
    }
}

module.exports = {
    adminAuth,
    UserAuth
}