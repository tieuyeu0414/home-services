
/**
 * @api {get} api/v1/customer/ Get All Customers
 * @apiName GetCustomers
 * @apiGroup Customers
 *
 * @apiSuccess {String} phone phone of the Customer.
 * @apiSuccess {String} name  Name of the Customer.
 * @apiSuccess {Text} deviceId  deviceId of device which Customer have.
 * @apiSuccess {String} avatar  Avatar of the Customer.
 * @apiSuccess {String} city  City of the Customer.
 * @apiSuccess {String} district  District of the Customer.
 * @apiSuccess {String} wards  Wards of the Customer.
 * @apiSuccess {String} detailAddress  DetailAddress of the Customer.
 * @apiSuccess {String} status  status of the Customer.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * [
 *  {
 *   "status": true,
 *   "id": 1,
 *   "phone": "123",
 *   "name": "longưqe",
 *   "deviceId": "1",
 *   "avatar": "123",
 *   "city": "Hanoi",
 *   "district": "LB",
 *   "wards": "vxt",
 *   "detailAdress": "92",
 *   "updatedAt": "2022-01-14T05:44:23.052Z",
 *   "createdAt": "2022-01-14T05:44:23.052Z"
 *  }
 * ]
 */





/**
 * @api {post} api/v1/customer/insert Add Customer
 * @apiName AddCustomer
 * @apiGroup Customers
 *
 * @apiSuccess {String} phone phone of the Customer.
 * @apiSuccess {String} name  Name of the Customer.
 * @apiSuccess {Text} deviceId  deviceId of device which Customer have.
 * @apiSuccess {String} avatar  Avatar of the Customer.
 * @apiSuccess {String} city  City of the Customer.
 * @apiSuccess {String} district  District of the Customer.
 * @apiSuccess {String} wards  Wards of the Customer.
 * @apiSuccess {String} detailAddress  DetailAddress of the Customer.
 * @apiSuccess {String} status  status of the Customer.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
 *   "status": true,
 *   "id": 1,
 *   "phone": "123",
 *   "name": "longưqe",
 *   "deviceId": "1",
 *   "avatar": "123",
 *   "city": "Hanoi",
 *   "district": "LB",
 *   "wards": "vxt",
 *   "detailAdress": "92",
 *   "updatedAt": "2022-01-14T05:44:23.052Z",
 *   "createdAt": "2022-01-14T05:44:23.052Z"
 *  }
 * 
 */

/**
 * @api {delete} api/v1/customer/delete/:id Delete Customer
 * @apiName DeleteCustomer
 * @apiGroup Customers
 * 
 * @apiParam {Number} id Customers unique ID.
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "message": "Delete Successfully"
 * }
 * 
 * @apiError DeleteCustomerNotFound The id of the Customer was not found.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "errorMessage": "IdCustomerNotFound"
 *     }
 */



/**
 * @api {put} api/v1/customer/edit/:id Edit Customer
 * @apiName EditCustomer
 * @apiGroup Customers
 *
 * @apiParam {Number} id Customers unique ID. 
 * 
 * @apiSuccess {String} phone phone of the Customer.
 * @apiSuccess {String} name  Name of the Customer.
 * @apiSuccess {Text} deviceId  deviceId of device which Customer have.
 * @apiSuccess {String} avatar  Avatar of the Customer.
 * @apiSuccess {String} city  City of the Customer.
 * @apiSuccess {String} district  District of the Customer.
 * @apiSuccess {String} wards  Wards of the Customer.
 * @apiSuccess {String} detailAddress  DetailAddress of the Customer.
 * @apiSuccess {String} status  status of the Customer.
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "message": "Edit Successfully"
 * }
 * 
 * @apiError EditCustomerNotFound The id of the Customer was not found.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "errorMessage": "IdCustomerNotFound"
 *     }
 */



/**
 * @api {get} api/v1/customer/city Filter Customer By City
 * @apiName Filter Customer By City
 * @apiGroup Customers
 *
 * 
 * @apiSuccess {String} phone phone of the Customer.
 * @apiSuccess {String} name  Name of the Customer.
 * @apiSuccess {Text} deviceId  deviceId of device which Customer have.
 * @apiSuccess {String} avatar  Avatar of the Customer.
 * @apiSuccess {String} city  City of the Customer.
 * @apiSuccess {String} district  District of the Customer.
 * @apiSuccess {String} wards  Wards of the Customer.
 * @apiSuccess {String} detailAddress  DetailAddress of the Customer.
 * @apiSuccess {String} status  status of the Customer.
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 *  {
 *   "id": 1,
 *   "phone": "123",
 *   "name": "longưqe",
 *   "avatar": ""media\\images\\1642649090962.jpg",
 *   "city": "Hanoi",
 *   "district": "LB",
 *   "wards": "vxt",
 *   "detailAdress": "92",
 *  }
 * 
 * 
 * @apiError CityNotFound The city of the Customer was not found.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "errorMessage": "CityNotFound"
 *     }
 */


/**
 * @api {get} api/v1/customer/district Filter Customer By District
 * @apiName Filter Customer By District
 * @apiGroup Customers
 *
 * 
 * @apiSuccess {String} phone phone of the Customer.
 * @apiSuccess {String} name  Name of the Customer.
 * @apiSuccess {Text} deviceId  deviceId of device which Customer have.
 * @apiSuccess {String} avatar  Avatar of the Customer.
 * @apiSuccess {String} city  City of the Customer.
 * @apiSuccess {String} district  District of the Customer.
 * @apiSuccess {String} wards  Wards of the Customer.
 * @apiSuccess {String} detailAddress  DetailAddress of the Customer.
 * @apiSuccess {String} status  status of the Customer.
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 *  {
 *   "id": 1,
 *   "phone": "123",
 *   "name": "longưqe",
 *   "avatar": ""media\\images\\1642649090962.jpg",
 *   "city": "Hanoi",
 *   "district": "LB",
 *   "wards": "vxt",
 *   "detailAdress": "92",
 *  }
 * 
 * 
 * @apiError DistrictNotFound The district of the Customer was not found.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "errorMessage": "DistrictNotFound"
 *     }
 */


/**
 * @api {get} api/v1/customer/wards Filter Customer By Wards
 * @apiName Filter Customer By Wards
 * @apiGroup Customers
 *
 * 
 * @apiSuccess {String} phone phone of the Customer.
 * @apiSuccess {String} name  Name of the Customer.
 * @apiSuccess {Text} deviceId  deviceId of device which Customer have.
 * @apiSuccess {String} avatar  Avatar of the Customer.
 * @apiSuccess {String} city  City of the Customer.
 * @apiSuccess {String} district  District of the Customer.
 * @apiSuccess {String} wards  Wards of the Customer.
 * @apiSuccess {String} detailAddress  DetailAddress of the Customer.
 * @apiSuccess {String} status  status of the Customer.
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 *  {
 *   "id": 1,
 *   "phone": "123",
 *   "name": "longưqe",
 *   "avatar": ""media\\images\\1642649090962.jpg",
 *   "city": "Hanoi",
 *   "district": "LB",
 *   "wards": "vxt",
 *   "detailAdress": "92",
 *  }
 * 
 * 
 * @apiError WardsNotFound The Wards of the Customer was not found.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "errorMessage": "WardsNotFound"
 *     }
 */



/**
 * @api {get} api/v1/customer/search Search Customer
 * @apiName Search Customer
 * @apiGroup Customers
 *
 * 
 * @apiSuccess {String} phone phone of the Customer.
 * @apiSuccess {String} name  Name of the Customer.
 * @apiSuccess {Text} deviceId  deviceId of device which Customer have.
 * @apiSuccess {String} avatar  Avatar of the Customer.
 * @apiSuccess {String} city  City of the Customer.
 * @apiSuccess {String} district  District of the Customer.
 * @apiSuccess {String} wards  Wards of the Customer.
 * @apiSuccess {String} detailAddress  DetailAddress of the Customer.
 * @apiSuccess {String} status  status of the Customer.
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 *  {
 *   "id": 1,
 *   "phone": "123",
 *   "name": "longưqe",
 *   "avatar": ""media\\images\\1642649090962.jpg",
 *   "city": "Hanoi",
 *   "district": "LB",
 *   "wards": "vxt",
 *   "detailAdress": "92",
 *  }
 * 
 * 
 * @apiError CustomerNotFound : Customer was not found.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "errorMessage": "CustomerNotFound"
 *     }
 */




