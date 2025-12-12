//this could be later be replaced with a db call
class UserService{
    getUsers(){
        return []
    }
    create({email,name,password}){
        return {email,name,password}
        
    }
}
module.exports = UserService