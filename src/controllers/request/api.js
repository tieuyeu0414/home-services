const Senquelize = require("sequelize");
// const Op = Senquelize.Op;
const Request = require("./models/request");


async function getDataRequest(req, res){
    try {
        const request = await Request.findAll();
        let data = request;
        res.send(data)
    } catch (e) {
        console.log('lỗi');
    }
}



async function insertRequest(req, res) {
    try {
        let { customerId, deviceId, serviceId, note, status, staffId } = req.body;
        let data = await Request.create({
            customerId,
            deviceId,
            serviceId,
            note,
            status,
            staffId
        });
        return res.status(200).json({
            data
        })
    } catch (error) {
        console.log(error);
    }
}




async function deleteRequest(req, res) {
    let id = req.params.id;
    let request =  await Request.findAll(
        {
            where: {
                id: id
            },
        }
    );
        
    if(request.length == 0) {
        return res.status(200).json({
            errorMessage:`The request isn't exist!`
        })
    }
    
    try {
        await Request.destroy(
            {
                where: {
                    id: id
                },
                returning: true
            });
        return res.status(200).json({
            message:"Delete success!"
        })
    } catch (e) {
        console.log(e);
    }
    
}


async function updateRequest(req, res) {
    let id = req.params.id;
    let { customerId, deviceId, serviceId, note, status, staffId } = req.body;
    let request =  await Request.findAll(
        {
            where: {
                id: id
            },
        }
    );
    if(request.length == 0) {
        return res.status(200).json({
            errorMessage:`The request isn't exist!`
        })
    }
    try {
        await Request.update({ 
            customerId,
            deviceId,
            serviceId,
            note,
            status,
            staffId
         }, {
            where: {
                id: id
            }
        });
        return res.status(200).json({
            message:"Update success!"
        })
    } catch (error) {
        console.log(error);
    }
}




module.exports = {
    getDataRequest,
    insertRequest,
    deleteRequest,
    updateRequest
}