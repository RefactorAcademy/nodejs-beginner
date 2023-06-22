const { AppDataSource } = require("./initializeDatasource")
const { User } = require("../entities/userEntity")

function initializeRepository(){
    return AppDataSource.getRepository(User)
}