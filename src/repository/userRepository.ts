const { AppDataSource } = require("./initializeDatasource")
import { User } from "../entities/userEntity"

function initializeRepository(){
    return AppDataSource.getRepository(User)
}