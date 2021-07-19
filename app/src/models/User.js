"use strict";

const UserStorage = require('./UserStorage');

class User {
    constructor(body){
        this.body = body
    }

    login() {
        const body = this.body;
        const {id, password} = UserStorage.getUserInfo(body.id);
        
        if(id){
            if(id == body.id && password == body.password){
                return {success : true};
            }
            return {success : false, msg : "비밀번호가 일치하지 않습니다."}
        }
        return {success : false, msg : "존재하는 아이디가 없습니다."}
    }
}

module.exports = User;