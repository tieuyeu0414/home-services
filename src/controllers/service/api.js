// const Senquelize = require("sequelize");
// // const Op = Senquelize.Op;
// const Service = require("./models/service");


// async function getDataService(req, res){
//     try {
//         const service = await Service.findAll();
//         let data = service;
//         res.send(data)
//     } catch (e) {
//         console.log('lỗi');
//     }
// }



// async function insertService(req, res) {
//     try {
//         let { nameService } = req.body;
//         let data = await Service.create({
//             nameService
//         });
//         return res.status(200).json({
//             data
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }




// async function deleteService(req, res) {
//     let id = req.params.id;
//     let service =  await Service.findAll(
//         {
//             where: {
//                 id: id
//             },
//         }
//     );
        
//     if(service.length == 0) {
//         return res.status(200).json({
//             errorMessage:`The device isn't exist!`
//         })
//     }
    
//     try {
//         await Service.destroy(
//             {
//                 where: {
//                     id: id
//                 },
//                 returning: true
//             });
//         return res.status(200).json({
//             message:"Delete success!"
//         })
//     } catch (e) {
//         console.log(e);
//     }
    
// }


// async function updateService(req, res) {
//     let id = req.params.id;
//     let { nameService } = req.body;
//     let service =  await Service.findAll(
//         {
//             where: {
//                 id: id
//             },
//         }
//     );
//     if(service.length == 0) {
//         return res.status(200).json({
//             errorMessage:`The device isn't exist!`
//         })
//     }
//     try {
//         await Service.update({ 
//             nameService
//          }, {
//             where: {
//                 id: id
//             }
//         });
//         return res.status(200).json({
//             message:"Update success!"
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }




// module.exports = {
//     getDataService,
//     insertService,
//     deleteService,
//     updateService
// }