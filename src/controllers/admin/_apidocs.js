/**
 * @api {get} api/v1/admin/staff/ Get All Staff
 * @apiName GetStaff
 * @apiGroup Staffs
 * 
 * @apiSuccess {String} email Email of the Staff.
 * @apiSuccess {String} password Password of the Staff.
 * @apiSuccess {String} fullName  Name of the Staff.
 * @apiSuccess {String} staffId  staffId of Staff.
 * @apiSuccess {String} phoneNumber Phone of the Staff.
 * @apiSuccess {String} avatar  Avatar of the Staff.
 * @apiSuccess {String} city  City of the Staff.
 * @apiSuccess {String} district  District of the Staff.
 * @apiSuccess {String} wards  Wards of the Staff.
 * @apiSuccess {String} role  Role of the Staff.
 * @apiSuccess {String} isActive  status of the Staff.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * [
 *  {
 *   "id": 1,
 *   "fullName": "Duong Long",
 *   "staffId": "TM2"
 *   "phoneNumber": "0123456789",
 *   "avatar": "123",
 *   "city": "Hanoi",
 *   "district": "LB",
 *   "wards": "vxt",
 *   "role": "1",
 *  }
 * ]
 */


/**
 * @api {get} api/v1/admin/staff/ Get All Staff
 * @apiName GetStaff
 * @apiGroup Staffs
 *
 * @apiSuccess {String} email Email of the Staff.
 * @apiSuccess {String} password Password of the Staff.
 * @apiSuccess {String} fullName  Name of the Staff.
 * @apiSuccess {String} staffId  staffId of Staff.
 * @apiSuccess {String} phoneNumber Phone of the Staff.
 * @apiSuccess {String} avatar  Avatar of the Staff.
 * @apiSuccess {String} city  City of the Staff.
 * @apiSuccess {String} district  District of the Staff.
 * @apiSuccess {String} wards  Wards of the Staff.
 * @apiSuccess {String} role  Role of the Staff.
 * @apiSuccess {String} isActive  status of the Staff.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * [
 *  {
 *   "id": 1,
 *   "fullName": "Duong Long",
 *   "staffId": "TM2"
 *   "phoneNumber": "0123456789",
 *   "avatar": "123",
 *   "city": "Hanoi",
 *   "district": "LB",
 *   "wards": "vxt",
 *   "role": "1",
 *  }
 * ]
 */





/**
 * @api {post} api/v1/admin/staff/insert Add Staff
 * @apiName AddStaff
 * @apiGroup Staffs
 *
 * @apiSuccess {String} email Email of the Staff.
 * @apiSuccess {String} password Password of the Staff.
 * @apiSuccess {String} fullName  Name of the Staff.
 * @apiSuccess {String} staffId  staffId of Staff.
 * @apiSuccess {String} phoneNumber Phone of the Staff.
 * @apiSuccess {String} avatar  Avatar of the Staff.
 * @apiSuccess {String} city  City of the Staff.
 * @apiSuccess {String} district  District of the Staff.
 * @apiSuccess {String} wards  Wards of the Staff.
 * @apiSuccess {String} role  Role of the Staff.
 * @apiSuccess {String} isActive  status of the Staff.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * [
 *  {
 *   "id": 1,
 *   "fullName": "Duong Long",
 *   "staffId": "TM2"
 *   "phoneNumber": "0123456789",
 *   "avatar": "123",
 *   "city": "Hanoi",
 *   "district": "LB",
 *   "wards": "vxt",
 *   "role": "1",
 *  }
 * ]
 * 
 */

/**
 * @api {delete} api/v1/admin/staff/delete/:id Delete Staff
 * @apiName DeleteStaff
 * @apiGroup Staffs
 * 
 * @apiParam {Number} id Staff unique ID.
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "message": "Delete Successfully"
 * }
 * 
 * @apiError DeleteStaffNotFound The id of the Staff was not found.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "errorMessage": "IdStaffNotFound"
 *     }
 */



/**
 * @api {put} api/v1/admin/staff/edit/:id Edit Staff
 * @apiName EditStaff
 * @apiGroup Staffs
 *
 * @apiParam {Number} id Staff unique ID. 
 * 
 * @apiSuccess {String} email Email of the Staff.
 * @apiSuccess {String} password Password of the Staff.
 * @apiSuccess {String} fullName  Name of the Staff.
 * @apiSuccess {String} staffId  staffId of Staff.
 * @apiSuccess {String} phoneNumber Phone of the Staff.
 * @apiSuccess {String} avatar  Avatar of the Staff.
 * @apiSuccess {String} city  City of the Staff.
 * @apiSuccess {String} district  District of the Staff.
 * @apiSuccess {String} wards  Wards of the Staff.
 * @apiSuccess {String} role  Role of the Staff.
 * @apiSuccess {String} isActive  status of the Staff.
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "message": "Edit Successfully"
 * }
 * 
 * @apiError EditStaffNotFound The id of the Staff was not found.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "errorMessage": "IdStaffNotFound"
 *     }
 */



/**
 * @api {get} api/v1/admin/staff/city Filter Staff By City
 * @apiName Filter Staff By City
 * @apiGroup Staffs
 * 
 * @apiSuccess {String} email Email of the Staff.
 * @apiSuccess {String} password Password of the Staff.
 * @apiSuccess {String} fullName  Name of the Staff.
 * @apiSuccess {String} staffId  staffId of Staff.
 * @apiSuccess {String} phoneNumber Phone of the Staff.
 * @apiSuccess {String} avatar  Avatar of the Staff.
 * @apiSuccess {String} city  City of the Staff.
 * @apiSuccess {String} district  District of the Staff.
 * @apiSuccess {String} wards  Wards of the Staff.
 * @apiSuccess {String} role  Role of the Staff.
 * @apiSuccess {String} isActive  status of the Staff.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * [
 *  {
 *   "id": 1,
 *   "fullName": "Duong Long",
 *   "staffId": "TM2"
 *   "phoneNumber": "0123456789",
 *   "avatar": "123",
 *   "city": "Hanoi",
 *   "district": "LB",
 *   "wards": "vxt",
 *   "role": "1",
 *  }
 * ]
 * 
 * 
 * @apiError CityNotFound The city of the Staff was not found.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "errorMessage": "CityNotFound"
 *     }
 */


/**
 * @api {get} api/v1/admin/staff/district Filter Staff By District
 * @apiName Filter Staff By District
 * @apiGroup Staffs
 *
 * @apiSuccess {String} email Email of the Staff.
 * @apiSuccess {String} password Password of the Staff.
 * @apiSuccess {String} fullName  Name of the Staff.
 * @apiSuccess {String} staffId  staffId of Staff.
 * @apiSuccess {String} phoneNumber Phone of the Staff.
 * @apiSuccess {String} avatar  Avatar of the Staff.
 * @apiSuccess {String} city  City of the Staff.
 * @apiSuccess {String} district  District of the Staff.
 * @apiSuccess {String} wards  Wards of the Staff.
 * @apiSuccess {String} role  Role of the Staff.
 * @apiSuccess {String} isActive  status of the Staff.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * [
 *  {
 *   "id": 1,
 *   "fullName": "Duong Long",
 *   "staffId": "TM2"
 *   "phoneNumber": "0123456789",
 *   "avatar": "123",
 *   "city": "Hanoi",
 *   "district": "LB",
 *   "wards": "vxt",
 *   "role": "1",
 *  }
 * ]
 * 
 * 
 * @apiError DistrictNotFound The district of the Staff was not found.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "errorMessage": "DistrictNotFound"
 *     }
 */


/**
 * @api {get} api/v1/admin/staff/wards Filter Staff By Wards
 * @apiName Filter Staff By Wards
 * @apiGroup Staffs
 *
 * @apiSuccess {String} email Email of the Staff.
 * @apiSuccess {String} password Password of the Staff.
 * @apiSuccess {String} fullName  Name of the Staff.
 * @apiSuccess {String} staffId  staffId of Staff.
 * @apiSuccess {String} phoneNumber Phone of the Staff.
 * @apiSuccess {String} avatar  Avatar of the Staff.
 * @apiSuccess {String} city  City of the Staff.
 * @apiSuccess {String} district  District of the Staff.
 * @apiSuccess {String} wards  Wards of the Staff.
 * @apiSuccess {String} role  Role of the Staff.
 * @apiSuccess {String} isActive  status of the Staff.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * [
 *  {
 *   "id": 1,
 *   "fullName": "Duong Long",
 *   "staffId": "TM2"
 *   "phoneNumber": "0123456789",
 *   "avatar": "123",
 *   "city": "Hanoi",
 *   "district": "LB",
 *   "wards": "vxt",
 *   "role": "1",
 *  }
 * ]
 * 
 * @apiError WardsNotFound The Wards of the Staff was not found.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "errorMessage": "WardsNotFound"
 *     }
 */



/**
 * @api {get} api/v1/admin/staff/search Search Staff
 * @apiName Search Staff
 * @apiGroup Staffs
 *
 * 
 * @apiSuccess {String} email Email of the Staff.
 * @apiSuccess {String} password Password of the Staff.
 * @apiSuccess {String} fullName  Name of the Staff.
 * @apiSuccess {String} staffId  staffId of Staff.
 * @apiSuccess {String} phoneNumber Phone of the Staff.
 * @apiSuccess {String} avatar  Avatar of the Staff.
 * @apiSuccess {String} city  City of the Staff.
 * @apiSuccess {String} district  District of the Staff.
 * @apiSuccess {String} wards  Wards of the Staff.
 * @apiSuccess {String} role  Role of the Staff.
 * @apiSuccess {String} isActive  status of the Staff.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * [
 *  {
 *   "id": 1,
 *   "fullName": "Duong Long",
 *   "staffId": "TM2"
 *   "phoneNumber": "0123456789",
 *   "avatar": "123",
 *   "city": "Hanoi",
 *   "district": "LB",
 *   "wards": "vxt",
 *   "role": "1",
 *  }
 * ]
 * 
 * @apiError StaffNotFound : Staff was not found.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "errorMessage": "StaffNotFound"
 *     }
 */




