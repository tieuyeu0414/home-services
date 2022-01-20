
/**
 * @api {get} api/v1/device/ Get All Devices
 * @apiName GetDevices
 * @apiGroup Devices
 *
 * @apiSuccess {String} deviceId  deviceId of Device.
 * @apiSuccess {Enum} statusDevice  StatusDevice of Device.
 * @apiSuccess {Integer} customerId  CustomerId of the Customer who has this device.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * [
 *  {
 *   "id": 1,
 *   "deviceId": 1,
 *   "statusDevice": "1",
 *   "customerId": "1",
 *   "updateAt": "2022-01-14T06:48:05.159Z",
 *   "createAt": "2022-01-14T06:48:05.159Z",
 *  }
 * ]
 */





/**
 * @api {post} api/v1/device/insert Add Device
 * @apiName AddDevice
 * @apiGroup Devices
 *
 * @apiSuccess {String} deviceId  deviceId of Device.
 * @apiSuccess {Enum} statusDevice  StatusDevice of Device.
 * @apiSuccess {Integer} customerId  CustomerId of the Customer who has this device.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * [
 *  {
 *   "id": 1,
 *   "deviceId": 1,
 *   "statusDevice": "1",
 *   "customerId": "1",
 *   "updateAt": "2022-01-14T06:48:05.159Z",
 *   "createAt": "2022-01-14T06:48:05.159Z",
 *  }
 * ]
 * 
 */

/**
 * @api {delete} api/v1/device/delete/:id Delete Device
 * @apiName DeleteDevice
 * @apiGroup Devices
 * 
 * @apiParam {Number} id Devices unique ID.
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "message": "Delete Successfully"
 * }
 * 
 * @apiError DeleteDeviceNotFound The id of the Device was not found.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "errorMessage": "IdDeviceNotFound"
 *     }
 */



/**
 * @api {put} api/v1/Device/edit/:id Edit Device
 * @apiName EditDevice
 * @apiGroup Devices
 *
 * @apiParam {Number} id Devices unique ID. 
 * 
 * @apiSuccess {String} phone phone of the Device.
 * @apiSuccess {String} deviceId  deviceId of Device.
 * @apiSuccess {Enum} statusDevice  StatusDevice of Device.
 * @apiSuccess {Integer} customerId  CustomerId of the Customer who has this device.
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "message": "Edit Successfully"
 * }
 * 
 * @apiError EditDeviceNotFound The id of the Device was not found.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "errorMessage": "IdDeviceNotFound"
 *     }
 */


/**
 * @api {get} api/v1/device/search Search Device
 * @apiName SearchDevice
 * @apiGroup Devices
 *
 * @apiSuccess {String} deviceId  deviceId of Device.
 * @apiSuccess {Enum} statusDevice  StatusDevice of Device.
 * @apiSuccess {Integer} customerId  CustomerId of the Customer who has this device.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * [
 *  {
 *   "id": 1,
 *   "deviceId": 1,
 *   "statusDevice": "1",
 *   "customerId": "1",
 *   "updateAt": "2022-01-14T06:48:05.159Z",
 *   "createAt": "2022-01-14T06:48:05.159Z",
 *  }
 * ]
 * 
 */