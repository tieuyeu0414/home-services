define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "C__Users_113_Desktop_tailieu_home_services_BE_home_services_docs_main_js",
    "groupTitle": "C__Users_113_Desktop_tailieu_home_services_BE_home_services_docs_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "api/v1/customer/insert",
    "title": "Add Customer",
    "name": "AddCustomer",
    "group": "Customers",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "deviceId",
            "description": "<p>deviceId of device which Customer have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Avatar of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>District of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wards",
            "description": "<p>Wards of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "detailAddress",
            "description": "<p>DetailAddress of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the Customer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n \"status\": true,\n \"id\": 1,\n \"phone\": \"123\",\n \"name\": \"long??qe\",\n \"deviceId\": \"1\",\n \"avatar\": \"123\",\n \"city\": \"Hanoi\",\n \"district\": \"LB\",\n \"wards\": \"vxt\",\n \"detailAdress\": \"92\",\n \"updatedAt\": \"2022-01-14T05:44:23.052Z\",\n \"createdAt\": \"2022-01-14T05:44:23.052Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/customer/_apidocs.js",
    "groupTitle": "Customers"
  },
  {
    "type": "delete",
    "url": "api/v1/customer/delete/:id",
    "title": "Delete Customer",
    "name": "DeleteCustomer",
    "group": "Customers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Customers unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Delete Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DeleteCustomerNotFound",
            "description": "<p>The id of the Customer was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"IdCustomerNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/customer/_apidocs.js",
    "groupTitle": "Customers"
  },
  {
    "type": "put",
    "url": "api/v1/customer/edit/:id",
    "title": "Edit Customer",
    "name": "EditCustomer",
    "group": "Customers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Customers unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "deviceId",
            "description": "<p>deviceId of device which Customer have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Avatar of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>District of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wards",
            "description": "<p>Wards of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "detailAddress",
            "description": "<p>DetailAddress of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the Customer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Edit Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EditCustomerNotFound",
            "description": "<p>The id of the Customer was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"IdCustomerNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/customer/_apidocs.js",
    "groupTitle": "Customers"
  },
  {
    "type": "get",
    "url": "api/v1/customer/city",
    "title": "Filter Customer By City",
    "name": "Filter_Customer_By_City",
    "group": "Customers",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "deviceId",
            "description": "<p>deviceId of device which Customer have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Avatar of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>District of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wards",
            "description": "<p>Wards of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "detailAddress",
            "description": "<p>DetailAddress of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the Customer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  \"id\": 1,\n  \"phone\": \"123\",\n  \"name\": \"long??qe\",\n  \"avatar\": \"\"media\\\\images\\\\1642649090962.jpg\",\n  \"city\": \"Hanoi\",\n  \"district\": \"LB\",\n  \"wards\": \"vxt\",\n  \"detailAdress\": \"92\",\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CityNotFound",
            "description": "<p>The city of the Customer was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"CityNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/customer/_apidocs.js",
    "groupTitle": "Customers"
  },
  {
    "type": "get",
    "url": "api/v1/customer/district",
    "title": "Filter Customer By District",
    "name": "Filter_Customer_By_District",
    "group": "Customers",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "deviceId",
            "description": "<p>deviceId of device which Customer have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Avatar of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>District of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wards",
            "description": "<p>Wards of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "detailAddress",
            "description": "<p>DetailAddress of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the Customer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  \"id\": 1,\n  \"phone\": \"123\",\n  \"name\": \"long??qe\",\n  \"avatar\": \"\"media\\\\images\\\\1642649090962.jpg\",\n  \"city\": \"Hanoi\",\n  \"district\": \"LB\",\n  \"wards\": \"vxt\",\n  \"detailAdress\": \"92\",\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DistrictNotFound",
            "description": "<p>The district of the Customer was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"DistrictNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/customer/_apidocs.js",
    "groupTitle": "Customers"
  },
  {
    "type": "get",
    "url": "api/v1/customer/wards",
    "title": "Filter Customer By Wards",
    "name": "Filter_Customer_By_Wards",
    "group": "Customers",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "deviceId",
            "description": "<p>deviceId of device which Customer have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Avatar of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>District of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wards",
            "description": "<p>Wards of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "detailAddress",
            "description": "<p>DetailAddress of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the Customer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  \"id\": 1,\n  \"phone\": \"123\",\n  \"name\": \"long??qe\",\n  \"avatar\": \"\"media\\\\images\\\\1642649090962.jpg\",\n  \"city\": \"Hanoi\",\n  \"district\": \"LB\",\n  \"wards\": \"vxt\",\n  \"detailAdress\": \"92\",\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WardsNotFound",
            "description": "<p>The Wards of the Customer was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"WardsNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/customer/_apidocs.js",
    "groupTitle": "Customers"
  },
  {
    "type": "get",
    "url": "api/v1/customer/",
    "title": "Get All Customers",
    "name": "GetCustomers",
    "group": "Customers",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "deviceId",
            "description": "<p>deviceId of device which Customer have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Avatar of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>District of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wards",
            "description": "<p>Wards of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "detailAddress",
            "description": "<p>DetailAddress of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the Customer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n {\n  \"status\": true,\n  \"id\": 1,\n  \"phone\": \"123\",\n  \"name\": \"long??qe\",\n  \"deviceId\": \"1\",\n  \"avatar\": \"123\",\n  \"city\": \"Hanoi\",\n  \"district\": \"LB\",\n  \"wards\": \"vxt\",\n  \"detailAdress\": \"92\",\n  \"updatedAt\": \"2022-01-14T05:44:23.052Z\",\n  \"createdAt\": \"2022-01-14T05:44:23.052Z\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/customer/_apidocs.js",
    "groupTitle": "Customers"
  },
  {
    "type": "get",
    "url": "api/v1/customer/search",
    "title": "Search Customer",
    "name": "Search_Customer",
    "group": "Customers",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "deviceId",
            "description": "<p>deviceId of device which Customer have.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Avatar of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>District of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wards",
            "description": "<p>Wards of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "detailAddress",
            "description": "<p>DetailAddress of the Customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the Customer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  \"id\": 1,\n  \"phone\": \"123\",\n  \"name\": \"long??qe\",\n  \"avatar\": \"\"media\\\\images\\\\1642649090962.jpg\",\n  \"city\": \"Hanoi\",\n  \"district\": \"LB\",\n  \"wards\": \"vxt\",\n  \"detailAdress\": \"92\",\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CustomerNotFound",
            "description": "<p>: Customer was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"CustomerNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/customer/_apidocs.js",
    "groupTitle": "Customers"
  },
  {
    "type": "post",
    "url": "api/v1/device/insert",
    "title": "Add Device",
    "name": "AddDevice",
    "group": "Devices",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>deviceId of Device.</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "statusDevice",
            "description": "<p>StatusDevice of Device.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "customerId",
            "description": "<p>CustomerId of the Customer who has this device.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n {\n  \"id\": 1,\n  \"deviceId\": 1,\n  \"statusDevice\": \"1\",\n  \"customerId\": \"1\",\n  \"updateAt\": \"2022-01-14T06:48:05.159Z\",\n  \"createAt\": \"2022-01-14T06:48:05.159Z\",\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/device/_apidocs.js",
    "groupTitle": "Devices"
  },
  {
    "type": "delete",
    "url": "api/v1/device/delete/:id",
    "title": "Delete Device",
    "name": "DeleteDevice",
    "group": "Devices",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Devices unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Delete Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DeleteDeviceNotFound",
            "description": "<p>The id of the Device was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"IdDeviceNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/device/_apidocs.js",
    "groupTitle": "Devices"
  },
  {
    "type": "put",
    "url": "api/v1/Device/edit/:id",
    "title": "Edit Device",
    "name": "EditDevice",
    "group": "Devices",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Devices unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of the Device.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>deviceId of Device.</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "statusDevice",
            "description": "<p>StatusDevice of Device.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "customerId",
            "description": "<p>CustomerId of the Customer who has this device.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Edit Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EditDeviceNotFound",
            "description": "<p>The id of the Device was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"IdDeviceNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/device/_apidocs.js",
    "groupTitle": "Devices"
  },
  {
    "type": "get",
    "url": "api/v1/device/",
    "title": "Get All Devices",
    "name": "GetDevices",
    "group": "Devices",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>deviceId of Device.</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "statusDevice",
            "description": "<p>StatusDevice of Device.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "customerId",
            "description": "<p>CustomerId of the Customer who has this device.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n {\n  \"id\": 1,\n  \"deviceId\": 1,\n  \"statusDevice\": \"1\",\n  \"customerId\": \"1\",\n  \"updateAt\": \"2022-01-14T06:48:05.159Z\",\n  \"createAt\": \"2022-01-14T06:48:05.159Z\",\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/device/_apidocs.js",
    "groupTitle": "Devices"
  },
  {
    "type": "get",
    "url": "api/v1/device/search",
    "title": "Search Device",
    "name": "SearchDevice",
    "group": "Devices",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>deviceId of Device.</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "statusDevice",
            "description": "<p>StatusDevice of Device.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "customerId",
            "description": "<p>CustomerId of the Customer who has this device.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n {\n  \"id\": 1,\n  \"deviceId\": 1,\n  \"statusDevice\": \"1\",\n  \"customerId\": \"1\",\n  \"updateAt\": \"2022-01-14T06:48:05.159Z\",\n  \"createAt\": \"2022-01-14T06:48:05.159Z\",\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/device/_apidocs.js",
    "groupTitle": "Devices"
  },
  {
    "type": "post",
    "url": "api/v1/request/insert",
    "title": "Add Request",
    "name": "AddRequest",
    "group": "Requests",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "customerId",
            "description": "<p>CustomerId of the Customer who have the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>DeviceId of the Device which dependency the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "serviceId",
            "description": "<p>ServiceId of Service which dependency the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "note",
            "description": "<p>Note of the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "staffId",
            "description": "<p>StaffId  of the Staff who have the Request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n {\n  \"data\": {\n      \"id\": 1,\n      \"customerId\": \"1\",\n      \"deviceId\": \"1\",\n      \"serviceId\": \"1\",\n      \"note\": \"ghi ch??\",\n      \"status\": \"1\",\n      \"staffId\": \"1\",\n      \"updatedAt\": \"2022-01-14T07:01:52.116Z\",\n      \"createdAt\": \"2022-01-14T07:01:52.116Z\"\n  }\n}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/request/_apidocs.js",
    "groupTitle": "Requests"
  },
  {
    "type": "delete",
    "url": "api/v1/request/delete/:id",
    "title": "Delete Request",
    "name": "DeleteRequest",
    "group": "Requests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Requests unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Delete Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DeleteRequestNotFound",
            "description": "<p>The id of the Request was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"IdRequestNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/request/_apidocs.js",
    "groupTitle": "Requests"
  },
  {
    "type": "put",
    "url": "api/v1/request/edit/:id",
    "title": "Edit Request",
    "name": "EditRequest",
    "group": "Requests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Requests unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "customerId",
            "description": "<p>CustomerId of the Customer who have the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>DeviceId of the Device which dependency the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "serviceId",
            "description": "<p>ServiceId of Service which dependency the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "note",
            "description": "<p>Note of the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "staffId",
            "description": "<p>StaffId  of the Staff who have the Request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Edit Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EditRequestNotFound",
            "description": "<p>The id of the Request was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"IdRequestNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/request/_apidocs.js",
    "groupTitle": "Requests"
  },
  {
    "type": "get",
    "url": "api/v1/request/city",
    "title": "Filter Request By City",
    "name": "Filter_Request_By_City",
    "group": "Requests",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "customerId",
            "description": "<p>CustomerId of the Customer who have the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>DeviceId of the Device which dependency the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "serviceId",
            "description": "<p>ServiceId of Service which dependency the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "note",
            "description": "<p>Note of the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "staffId",
            "description": "<p>StaffId  of the Staff who have the Request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n  \"data\": {\n      \"id\": 1,\n      \"customerId\": \"1\",\n      \"deviceId\": \"1\",\n      \"serviceId\": \"1\",\n      \"note\": \"ghi ch??\",\n      \"status\": \"1\",\n      \"staffId\": \"1\",\n      \"updatedAt\": \"2022-01-14T07:01:52.116Z\",\n      \"createdAt\": \"2022-01-14T07:01:52.116Z\"\n  }\n}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CityNotFound",
            "description": "<p>The city of the Request was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"CityNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/request/_apidocs.js",
    "groupTitle": "Requests"
  },
  {
    "type": "get",
    "url": "api/v1/request/district",
    "title": "Filter Request By District",
    "name": "Filter_Request_By_District",
    "group": "Requests",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "customerId",
            "description": "<p>CustomerId of the Customer who have the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>DeviceId of the Device which dependency the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "serviceId",
            "description": "<p>ServiceId of Service which dependency the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "note",
            "description": "<p>Note of the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "staffId",
            "description": "<p>StaffId  of the Staff who have the Request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n  \"data\": {\n      \"id\": 1,\n      \"customerId\": \"1\",\n      \"deviceId\": \"1\",\n      \"serviceId\": \"1\",\n      \"note\": \"ghi ch??\",\n      \"status\": \"1\",\n      \"staffId\": \"1\",\n      \"updatedAt\": \"2022-01-14T07:01:52.116Z\",\n      \"createdAt\": \"2022-01-14T07:01:52.116Z\"\n  }\n}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DistrictNotFound",
            "description": "<p>The district of the Request was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"DistrictNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/request/_apidocs.js",
    "groupTitle": "Requests"
  },
  {
    "type": "get",
    "url": "api/v1/request/services",
    "title": "Filter Request By Service",
    "name": "Filter_Request_By_Service",
    "group": "Requests",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "customerId",
            "description": "<p>CustomerId of the Customer who have the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>DeviceId of the Device which dependency the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "serviceId",
            "description": "<p>ServiceId of Service which dependency the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "note",
            "description": "<p>Note of the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "staffId",
            "description": "<p>StaffId  of the Staff who have the Request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n  \"data\": {\n      \"id\": 1,\n      \"customerId\": \"1\",\n      \"deviceId\": \"1\",\n      \"serviceId\": \"1\",\n      \"note\": \"ghi ch??\",\n      \"status\": \"1\",\n      \"staffId\": \"1\",\n      \"updatedAt\": \"2022-01-14T07:01:52.116Z\",\n      \"createdAt\": \"2022-01-14T07:01:52.116Z\"\n  }\n}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServiceNotFound",
            "description": "<p>The Service of the Request was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"ServiceNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/request/_apidocs.js",
    "groupTitle": "Requests"
  },
  {
    "type": "get",
    "url": "api/v1/request/status",
    "title": "Filter Request By Status",
    "name": "Filter_Request_By_Status",
    "group": "Requests",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "customerId",
            "description": "<p>CustomerId of the Customer who have the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>DeviceId of the Device which dependency the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "serviceId",
            "description": "<p>ServiceId of Service which dependency the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "note",
            "description": "<p>Note of the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "staffId",
            "description": "<p>StaffId  of the Staff who have the Request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n  \"data\": {\n      \"id\": 1,\n      \"customerId\": \"1\",\n      \"deviceId\": \"1\",\n      \"serviceId\": \"1\",\n      \"note\": \"ghi ch??\",\n      \"status\": \"1\",\n      \"staffId\": \"1\",\n      \"updatedAt\": \"2022-01-14T07:01:52.116Z\",\n      \"createdAt\": \"2022-01-14T07:01:52.116Z\"\n  }\n}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "StatusNotFound",
            "description": "<p>The Status of the Request was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"StatusNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/request/_apidocs.js",
    "groupTitle": "Requests"
  },
  {
    "type": "get",
    "url": "api/v1/request/wards",
    "title": "Filter Request By Wards",
    "name": "Filter_Request_By_Wards",
    "group": "Requests",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "customerId",
            "description": "<p>CustomerId of the Customer who have the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>DeviceId of the Device which dependency the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "serviceId",
            "description": "<p>ServiceId of Service which dependency the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "note",
            "description": "<p>Note of the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "staffId",
            "description": "<p>StaffId  of the Staff who have the Request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n  \"data\": {\n      \"id\": 1,\n      \"customerId\": \"1\",\n      \"deviceId\": \"1\",\n      \"serviceId\": \"1\",\n      \"note\": \"ghi ch??\",\n      \"status\": \"1\",\n      \"staffId\": \"1\",\n      \"updatedAt\": \"2022-01-14T07:01:52.116Z\",\n      \"createdAt\": \"2022-01-14T07:01:52.116Z\"\n  }\n}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WardsNotFound",
            "description": "<p>The Wards of the Request was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"WardsNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/request/_apidocs.js",
    "groupTitle": "Requests"
  },
  {
    "type": "get",
    "url": "api/v1/request/",
    "title": "Get All Requests",
    "name": "GetRequests",
    "group": "Requests",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "customerId",
            "description": "<p>CustomerId of the Customer who have the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>DeviceId of the Device which dependency the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "serviceId",
            "description": "<p>ServiceId of Service which dependency the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "note",
            "description": "<p>Note of the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "staffId",
            "description": "<p>StaffId  of the Staff who have the Request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n {\n  \"data\": {\n      \"id\": 1,\n      \"customerId\": \"1\",\n      \"deviceId\": \"1\",\n      \"serviceId\": \"1\",\n      \"note\": \"ghi ch??\",\n      \"status\": \"1\",\n      \"staffId\": \"1\",\n      \"updatedAt\": \"2022-01-14T07:01:52.116Z\",\n      \"createdAt\": \"2022-01-14T07:01:52.116Z\"\n  }\n}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/request/_apidocs.js",
    "groupTitle": "Requests"
  },
  {
    "type": "get",
    "url": "api/v1/request/search",
    "title": "Search Request",
    "name": "Search_Request",
    "group": "Requests",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "customerId",
            "description": "<p>CustomerId of the Customer who have the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>DeviceId of the Device which dependency the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "serviceId",
            "description": "<p>ServiceId of Service which dependency the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "note",
            "description": "<p>Note of the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "staffId",
            "description": "<p>StaffId  of the Staff who have the Request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n  \"data\": {\n      \"id\": 1,\n      \"customerId\": \"1\",\n      \"deviceId\": \"1\",\n      \"serviceId\": \"1\",\n      \"note\": \"ghi ch??\",\n      \"status\": \"1\",\n      \"staffId\": \"1\",\n      \"updatedAt\": \"2022-01-14T07:01:52.116Z\",\n      \"createdAt\": \"2022-01-14T07:01:52.116Z\"\n  }\n}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequestNotFound",
            "description": "<p>: Request was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"RequestNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/request/_apidocs.js",
    "groupTitle": "Requests"
  },
  {
    "type": "post",
    "url": "api/v1/admin/staff/insert",
    "title": "Add Staff",
    "name": "AddStaff",
    "group": "Staffs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>Name of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "staffId",
            "description": "<p>staffId of Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Phone of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Avatar of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>District of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wards",
            "description": "<p>Wards of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "isActive",
            "description": "<p>status of the Staff.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n {\n  \"id\": 1,\n  \"fullName\": \"Duong Long\",\n  \"staffId\": \"TM2\"\n  \"phoneNumber\": \"0123456789\",\n  \"avatar\": \"123\",\n  \"city\": \"Hanoi\",\n  \"district\": \"LB\",\n  \"wards\": \"vxt\",\n  \"role\": \"1\",\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/admin/_apidocs.js",
    "groupTitle": "Staffs"
  },
  {
    "type": "delete",
    "url": "api/v1/admin/staff/delete/:id",
    "title": "Delete Staff",
    "name": "DeleteStaff",
    "group": "Staffs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Staff unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Delete Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DeleteStaffNotFound",
            "description": "<p>The id of the Staff was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"IdStaffNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/admin/_apidocs.js",
    "groupTitle": "Staffs"
  },
  {
    "type": "put",
    "url": "api/v1/admin/staff/edit/:id",
    "title": "Edit Staff",
    "name": "EditStaff",
    "group": "Staffs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Staff unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>Name of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "staffId",
            "description": "<p>staffId of Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Phone of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Avatar of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>District of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wards",
            "description": "<p>Wards of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "isActive",
            "description": "<p>status of the Staff.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Edit Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EditStaffNotFound",
            "description": "<p>The id of the Staff was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"IdStaffNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/admin/_apidocs.js",
    "groupTitle": "Staffs"
  },
  {
    "type": "get",
    "url": "api/v1/admin/staff/city",
    "title": "Filter Staff By City",
    "name": "Filter_Staff_By_City",
    "group": "Staffs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>Name of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "staffId",
            "description": "<p>staffId of Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Phone of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Avatar of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>District of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wards",
            "description": "<p>Wards of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "isActive",
            "description": "<p>status of the Staff.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n {\n  \"id\": 1,\n  \"fullName\": \"Duong Long\",\n  \"staffId\": \"TM2\"\n  \"phoneNumber\": \"0123456789\",\n  \"avatar\": \"123\",\n  \"city\": \"Hanoi\",\n  \"district\": \"LB\",\n  \"wards\": \"vxt\",\n  \"role\": \"1\",\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CityNotFound",
            "description": "<p>The city of the Staff was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"CityNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/admin/_apidocs.js",
    "groupTitle": "Staffs"
  },
  {
    "type": "get",
    "url": "api/v1/admin/staff/district",
    "title": "Filter Staff By District",
    "name": "Filter_Staff_By_District",
    "group": "Staffs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>Name of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "staffId",
            "description": "<p>staffId of Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Phone of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Avatar of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>District of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wards",
            "description": "<p>Wards of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "isActive",
            "description": "<p>status of the Staff.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n {\n  \"id\": 1,\n  \"fullName\": \"Duong Long\",\n  \"staffId\": \"TM2\"\n  \"phoneNumber\": \"0123456789\",\n  \"avatar\": \"123\",\n  \"city\": \"Hanoi\",\n  \"district\": \"LB\",\n  \"wards\": \"vxt\",\n  \"role\": \"1\",\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DistrictNotFound",
            "description": "<p>The district of the Staff was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"DistrictNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/admin/_apidocs.js",
    "groupTitle": "Staffs"
  },
  {
    "type": "get",
    "url": "api/v1/admin/staff/wards",
    "title": "Filter Staff By Wards",
    "name": "Filter_Staff_By_Wards",
    "group": "Staffs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>Name of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "staffId",
            "description": "<p>staffId of Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Phone of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Avatar of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>District of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wards",
            "description": "<p>Wards of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "isActive",
            "description": "<p>status of the Staff.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n {\n  \"id\": 1,\n  \"fullName\": \"Duong Long\",\n  \"staffId\": \"TM2\"\n  \"phoneNumber\": \"0123456789\",\n  \"avatar\": \"123\",\n  \"city\": \"Hanoi\",\n  \"district\": \"LB\",\n  \"wards\": \"vxt\",\n  \"role\": \"1\",\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WardsNotFound",
            "description": "<p>The Wards of the Staff was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"WardsNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/admin/_apidocs.js",
    "groupTitle": "Staffs"
  },
  {
    "type": "get",
    "url": "api/v1/admin/staff/",
    "title": "Get All Staff",
    "name": "GetStaff",
    "group": "Staffs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>Name of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "staffId",
            "description": "<p>staffId of Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Phone of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Avatar of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>District of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wards",
            "description": "<p>Wards of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "isActive",
            "description": "<p>status of the Staff.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n {\n  \"id\": 1,\n  \"fullName\": \"Duong Long\",\n  \"staffId\": \"TM2\"\n  \"phoneNumber\": \"0123456789\",\n  \"avatar\": \"123\",\n  \"city\": \"Hanoi\",\n  \"district\": \"LB\",\n  \"wards\": \"vxt\",\n  \"role\": \"1\",\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/admin/_apidocs.js",
    "groupTitle": "Staffs"
  },
  {
    "type": "get",
    "url": "api/v1/admin/staff/",
    "title": "Get All Staff",
    "name": "GetStaff",
    "group": "Staffs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>Name of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "staffId",
            "description": "<p>staffId of Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Phone of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Avatar of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>District of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wards",
            "description": "<p>Wards of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "isActive",
            "description": "<p>status of the Staff.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n {\n  \"id\": 1,\n  \"fullName\": \"Duong Long\",\n  \"staffId\": \"TM2\"\n  \"phoneNumber\": \"0123456789\",\n  \"avatar\": \"123\",\n  \"city\": \"Hanoi\",\n  \"district\": \"LB\",\n  \"wards\": \"vxt\",\n  \"role\": \"1\",\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/admin/_apidocs.js",
    "groupTitle": "Staffs"
  },
  {
    "type": "get",
    "url": "api/v1/admin/staff/search",
    "title": "Search Staff",
    "name": "Search_Staff",
    "group": "Staffs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>Name of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "staffId",
            "description": "<p>staffId of Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Phone of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Avatar of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>District of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wards",
            "description": "<p>Wards of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the Staff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "isActive",
            "description": "<p>status of the Staff.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n {\n  \"id\": 1,\n  \"fullName\": \"Duong Long\",\n  \"staffId\": \"TM2\"\n  \"phoneNumber\": \"0123456789\",\n  \"avatar\": \"123\",\n  \"city\": \"Hanoi\",\n  \"district\": \"LB\",\n  \"wards\": \"vxt\",\n  \"role\": \"1\",\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "StaffNotFound",
            "description": "<p>: Staff was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"errorMessage\": \"StaffNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/controllers/admin/_apidocs.js",
    "groupTitle": "Staffs"
  }
] });
