const Staff = require('../admin/models/staff')
const jwt = require('jsonwebtoken');



async function login(req, res){
    const {email, password} = req.body;
    let data;
    try {
        if (!email || !password)
            res.send('email and password are required');

        let staff = await Staff.findOne({
            where: {email},
        });
        if (!staff || !staff.comparePassword(password))
            res.send('Wrong email or password');

        await Staff.findOne({
            where: {
                email
            },
            attributes: ['id', 'email', 'fullName', 'avatar', 'city', 'district', 'wards', 'role', 'staffId'],
        })
        .then(result => {
            data = result;
            var token = jwt.sign({data:data}, 'longlong');

            return res.json({
                message:'success',
                token: token
            })
        })
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    } catch (error) {
        console.log(error);
    }

}

async function checkLogin(req, res, next){
    try {
        let token = req.cookies.token;
        var equals = jwt.verify(token, 'longlong');
        Staff.findOne({
            where: {
                email: equals.data.email
            }
        })
        .then(data => {
            if(data) {
                req.data = data;
                next();
            } else {
                res.json('NOT PERMISSION');
            }
        })
        
    } catch (error) {
        return res.json('You must login')
    }
}

async function checkRoleAdmin(req, res, next){
    const role = req.data.role;
    if( role === '6') {
        next()
    } else {
        res.json('NOT PERMISSION');
    }
}


async function checkRoleDh(req, res, next){
    const role = req.data.role;
    if( role === '1'|| role === '6') {
        next()
    } else {
        res.json('NOT PERMISSION');
    }
}

async function checkRoleMnl(req, res, next){
    const role = req.data.role;
    if( role === '2'|| role === '6') {
        next()
    } else {
        res.json('NOT PERMISSION');
    }
}

async function checkRoleTl(req, res, next){
    const role = req.data.role;
    if( role === '3'|| role === '6') {
        next()
    } else {
        res.json('NOT PERMISSION');
    }
}

async function checkRoleBnl(req, res, next){
    const role = req.data.role;
    if( role === '4'|| role === '6') {
        next()
    } else {
        res.json('NOT PERMISSION');
    }
}

async function checkRoleDv(req, res, next){
    const role = req.data.role;
    if( role === '4' || role === '6') {
        next()
    } else {
        res.json('NOT PERMISSION');
    }
}




module.exports = {
    login,
    checkLogin,
    checkRoleAdmin,
    checkRoleDv,
    checkRoleBnl,
    checkRoleTl,
    checkRoleMnl,
    checkRoleDh
}
