
/**
 * @api {get} api/v1/request/ Get All Requests
 * @apiName GetRequests
 * @apiGroup Requests
 *
 * @apiSuccess {Integer} customerId CustomerId of the Customer who have the Request.
 * @apiSuccess {String} deviceId  DeviceId of the Device which dependency the Request.
 * @apiSuccess {Integer} serviceId  ServiceId of Service which dependency the Request.
 * @apiSuccess {Text} note  Note of the Request.
 * @apiSuccess {Enum} status  Status of the Request.
 * @apiSuccess {Integer} staffId  StaffId  of the Staff who have the Request.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * [
 *  {
 *   "data": {
 *       "id": 1,
 *       "customerId": "1",
 *       "deviceId": "1",
 *       "serviceId": "1",
 *       "note": "ghi chú",
 *       "status": "1",
 *       "staffId": "1",
 *       "updatedAt": "2022-01-14T07:01:52.116Z",
 *       "createdAt": "2022-01-14T07:01:52.116Z"
 *   }
 * }
 * ]
 */





/**
 * @api {post} api/v1/request/insert Add Request
 * @apiName AddRequest
 * @apiGroup Requests
 *
 * @apiSuccess {Integer} customerId CustomerId of the Customer who have the Request.
 * @apiSuccess {String} deviceId  DeviceId of the Device which dependency the Request.
 * @apiSuccess {Integer} serviceId  ServiceId of Service which dependency the Request.
 * @apiSuccess {Text} note  Note of the Request.
 * @apiSuccess {Enum} status  Status of the Request.
 * @apiSuccess {Integer} staffId  StaffId  of the Staff who have the Request.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * [
 *  {
 *   "data": {
 *       "id": 1,
 *       "customerId": "1",
 *       "deviceId": "1",
 *       "serviceId": "1",
 *       "note": "ghi chú",
 *       "status": "1",
 *       "staffId": "1",
 *       "updatedAt": "2022-01-14T07:01:52.116Z",
 *       "createdAt": "2022-01-14T07:01:52.116Z"
 *   }
 * }
 * ]
 */

/**
 * @api {delete} api/v1/request/delete/:id Delete Request
 * @apiName DeleteRequest
 * @apiGroup Requests
 * 
 * @apiParam {Number} id Requests unique ID.
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "message": "Delete Successfully"
 * }
 * 
 * @apiError DeleteRequestNotFound The id of the Request was not found.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "errorMessage": "IdRequestNotFound"
 *     }
 */



/**
 * @api {put} api/v1/request/edit/:id Edit Request
 * @apiName EditRequest
 * @apiGroup Requests
 *
 * @apiParam {Number} id Requests unique ID. 
 * 
 * @apiSuccess {Integer} customerId CustomerId of the Customer who have the Request.
 * @apiSuccess {String} deviceId  DeviceId of the Device which dependency the Request.
 * @apiSuccess {Integer} serviceId  ServiceId of Service which dependency the Request.
 * @apiSuccess {Text} note  Note of the Request.
 * @apiSuccess {Enum} status  Status of the Request.
 * @apiSuccess {Integer} staffId  StaffId  of the Staff who have the Request.
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "message": "Edit Successfully"
 * }
 * 
 * @apiError EditRequestNotFound The id of the Request was not found.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "errorMessage": "IdRequestNotFound"
 *     }
 */






/**
 * @api {get} api/v1/request/city Filter Request By City
 * @apiName Filter Request By City
 * @apiGroup Requests
 *
 * 
 * @apiSuccess {Integer} customerId CustomerId of the Customer who have the Request.
 * @apiSuccess {String} deviceId  DeviceId of the Device which dependency the Request.
 * @apiSuccess {Integer} serviceId  ServiceId of Service which dependency the Request.
 * @apiSuccess {Text} note  Note of the Request.
 * @apiSuccess {Enum} status  Status of the Request.
 * @apiSuccess {Integer} staffId  StaffId  of the Staff who have the Request.
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * [
 *  {
 *   "data": {
 *       "id": 1,
 *       "customerId": "1",
 *       "deviceId": "1",
 *       "serviceId": "1",
 *       "note": "ghi chú",
 *       "status": "1",
 *       "staffId": "1",
 *       "updatedAt": "2022-01-14T07:01:52.116Z",
 *       "createdAt": "2022-01-14T07:01:52.116Z"
 *   }
 * }
 * ]
 * 
 * 
 * @apiError CityNotFound The city of the Request was not found.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "errorMessage": "CityNotFound"
 *     }
 */


/**
 * @api {get} api/v1/request/district Filter Request By District
 * @apiName Filter Request By District
 * @apiGroup Requests
 *
 * 
 * @apiSuccess {Integer} customerId CustomerId of the Customer who have the Request.
 * @apiSuccess {String} deviceId  DeviceId of the Device which dependency the Request.
 * @apiSuccess {Integer} serviceId  ServiceId of Service which dependency the Request.
 * @apiSuccess {Text} note  Note of the Request.
 * @apiSuccess {Enum} status  Status of the Request.
 * @apiSuccess {Integer} staffId  StaffId  of the Staff who have the Request.
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * [
 *  {
 *   "data": {
 *       "id": 1,
 *       "customerId": "1",
 *       "deviceId": "1",
 *       "serviceId": "1",
 *       "note": "ghi chú",
 *       "status": "1",
 *       "staffId": "1",
 *       "updatedAt": "2022-01-14T07:01:52.116Z",
 *       "createdAt": "2022-01-14T07:01:52.116Z"
 *   }
 * }
 * ]
 * 
 * 
 * @apiError DistrictNotFound The district of the Request was not found.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "errorMessage": "DistrictNotFound"
 *     }
 */


/**
 * @api {get} api/v1/request/wards Filter Request By Wards
 * @apiName Filter Request By Wards
 * @apiGroup Requests
 *
 * @apiSuccess {Integer} customerId CustomerId of the Customer who have the Request.
 * @apiSuccess {String} deviceId  DeviceId of the Device which dependency the Request.
 * @apiSuccess {Integer} serviceId  ServiceId of Service which dependency the Request.
 * @apiSuccess {Text} note  Note of the Request.
 * @apiSuccess {Enum} status  Status of the Request.
 * @apiSuccess {Integer} staffId  StaffId  of the Staff who have the Request.
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * [
 *  {
 *   "data": {
 *       "id": 1,
 *       "customerId": "1",
 *       "deviceId": "1",
 *       "serviceId": "1",
 *       "note": "ghi chú",
 *       "status": "1",
 *       "staffId": "1",
 *       "updatedAt": "2022-01-14T07:01:52.116Z",
 *       "createdAt": "2022-01-14T07:01:52.116Z"
 *   }
 * }
 * ]
 * 
 * 
 * @apiError WardsNotFound The Wards of the Request was not found.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "errorMessage": "WardsNotFound"
 *     }
 */



/**
 * @api {get} api/v1/request/search Search Request
 * @apiName Search Request
 * @apiGroup Requests
 *
 *
 * @apiSuccess {Integer} customerId CustomerId of the Customer who have the Request.
 * @apiSuccess {String} deviceId  DeviceId of the Device which dependency the Request.
 * @apiSuccess {Integer} serviceId  ServiceId of Service which dependency the Request.
 * @apiSuccess {Text} note  Note of the Request.
 * @apiSuccess {Enum} status  Status of the Request.
 * @apiSuccess {Integer} staffId  StaffId  of the Staff who have the Request.
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * [
 *  {
 *   "data": {
 *       "id": 1,
 *       "customerId": "1",
 *       "deviceId": "1",
 *       "serviceId": "1",
 *       "note": "ghi chú",
 *       "status": "1",
 *       "staffId": "1",
 *       "updatedAt": "2022-01-14T07:01:52.116Z",
 *       "createdAt": "2022-01-14T07:01:52.116Z"
 *   }
 * }
 * ]
 * 
 * 
 * @apiError RequestNotFound : Request was not found.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "errorMessage": "RequestNotFound"
 *     }
 */


/**
 * @api {get} api/v1/request/status Filter Request By Status
 * @apiName Filter Request By Status
 * @apiGroup Requests
 *
 * @apiSuccess {Integer} customerId CustomerId of the Customer who have the Request.
 * @apiSuccess {String} deviceId  DeviceId of the Device which dependency the Request.
 * @apiSuccess {Integer} serviceId  ServiceId of Service which dependency the Request.
 * @apiSuccess {Text} note  Note of the Request.
 * @apiSuccess {Enum} status  Status of the Request.
 * @apiSuccess {Integer} staffId  StaffId  of the Staff who have the Request.
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * [
 *  {
 *   "data": {
 *       "id": 1,
 *       "customerId": "1",
 *       "deviceId": "1",
 *       "serviceId": "1",
 *       "note": "ghi chú",
 *       "status": "1",
 *       "staffId": "1",
 *       "updatedAt": "2022-01-14T07:01:52.116Z",
 *       "createdAt": "2022-01-14T07:01:52.116Z"
 *   }
 * }
 * ]
 * 
 * 
 * @apiError StatusNotFound The Status of the Request was not found.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "errorMessage": "StatusNotFound"
 *     }
 */



/**
 * @api {get} api/v1/request/services Filter Request By Service
 * @apiName Filter Request By Service
 * @apiGroup Requests
 *
 * @apiSuccess {Integer} customerId CustomerId of the Customer who have the Request.
 * @apiSuccess {String} deviceId  DeviceId of the Device which dependency the Request.
 * @apiSuccess {Integer} serviceId  ServiceId of Service which dependency the Request.
 * @apiSuccess {Text} note  Note of the Request.
 * @apiSuccess {Enum} status  Status of the Request.
 * @apiSuccess {Integer} staffId  StaffId  of the Staff who have the Request.
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * [
 *  {
 *   "data": {
 *       "id": 1,
 *       "customerId": "1",
 *       "deviceId": "1",
 *       "serviceId": "1",
 *       "note": "ghi chú",
 *       "status": "1",
 *       "staffId": "1",
 *       "updatedAt": "2022-01-14T07:01:52.116Z",
 *       "createdAt": "2022-01-14T07:01:52.116Z"
 *   }
 * }
 * ]
 * 
 * 
 * @apiError ServiceNotFound The Service of the Request was not found.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "errorMessage": "ServiceNotFound"
 *     }
 */