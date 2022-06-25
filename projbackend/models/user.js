var mongoose = require("mongoose")
const crypto = require('crypto');
const uuidv4 = require('uuid/v4');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlenght: 32,
        trim: true,
    },
    lastName: {
        type: String,
        required: false,
        maxlenght: 20,
        trim: true, 
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    
    userinfo: {
        type: String,
        trim: true,
        
    },

    encry_password: {
        type: String,
        required: true,
    },
    salt: String,
    role: {
        type: Number,
        default: 0,
    },
    purchases: {
        type: Array,
        default : [],
    }
},{timestamps: true});

userSchema
    .virtual("password")
    .set(function(password){
        this._password = password;
        this.salt = uuidv4();
        this.encry_password = this.securePassword(password);
    })
    .get(function () {
        return this.password;
    })

userSchema.methods ={
    authenticate: function (plainPassword) {
        return this.securePassword(plainPassword)===this.encry_password
    },
    securePassword: function (plainPassword) {
        if (!plainPassword) return "";
        try {
            return crypto.createHmac('sha256', this.salt)
                .update(plainPassword)
                .digest('hex');
            
        } catch (err) {
            return "";
        }
   }
}


module.exports = mongoose.model("User", userSchema) // This way we exports our schema
//User is a alias for the object userSchema
