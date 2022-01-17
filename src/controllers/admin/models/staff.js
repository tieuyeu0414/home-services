const Sequelize = require("sequelize");
const bcrypt = require('bcrypt');
const db = require('../../base/mysql/mysql');
const config = require('../../../../config/config').admin;
const Request = require('../../request/models/request')

const Staff = db.sequelize.define('staff', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    fullName: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'New staff',
        validate: {
            len: {
                args: [6, 30],
                msg: 'Name display must be between 5 and 30 characters in length'
            }
        }
    },
    staffId: {
        // type: Sequelize.UUID,
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        // defaultValue: Sequelize.UUIDV4
    },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    avatar: Sequelize.STRING,
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    district: {
        type: Sequelize.STRING,
        allowNull: false
    },
    wards: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role: {
        type: Sequelize.ENUM,
        values: ['1', '2', '3', '4', '5', '6'],
        comment: "1:Điều hòa, 2:Máy lọc nước, 3:Tủ lạnh, 4:Bình nóng lạnh, 5:Dịch vụ, 6:Admin"
    },
    isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
},
{
 hooks: {
  beforeCreate: async (user) => {
   if (user.password) {
    const salt = await bcrypt.genSaltSync(10, 'a');
    user.password = bcrypt.hashSync(user.password, salt);
   }
  },
  beforeUpdate:async (user) => {
   if (user.password) {
    const salt = await bcrypt.genSaltSync(10, 'a');
    user.password = bcrypt.hashSync(user.password, salt);
   }
  }
 },
 instanceMethods: {
  validPassword: (password) => {
   return bcrypt.compareSync(password, this.password);
  }
 }
});

// function generateHash(admin) {
//     if (!admin.changed('password'))
//         return null;

//     let salt = bcrypt.genSaltSync(saltRounds);
//     admin.password = bcrypt.hashSync(admin.password, salt);
//     return admin.password;
// }

// Staff.beforeCreate(generateHash);
// Staff.beforeUpdate(generateHash);

Staff.prototype.comparePassword = function (plaintextPassword) {
    return bcrypt.compareSync(plaintextPassword, this.password);
};

//tìm hàng và nếu không có sẽ tạo
Staff.sync()
    .then(() => {
        Staff.findOrCreate({
            where: {
                role: 6
            },
            defaults: {
                email: config.email, 
                password: config.password, 
                staffId: 123456,
                role: 6,
                city: 'hà nội',
                district: 'long biên',
                wards: 'sài đồng',
                phoneNumber: config.phoneNumber
            }
        });
    });

Staff.hasOne(Request, {foreignKey: 'staffId', sourceKey: 'staffId'});
Request.belongsTo(Staff, {foreignKey: 'staffId', sourceKey: 'staffId'})

module.exports = Staff