"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { AppDataSource } = require("./initializeDatasource");
const userEntity_1 = require("../entities/userEntity");
function initializeRepository() {
    return AppDataSource.getRepository(userEntity_1.User);
}
//# sourceMappingURL=userRepository.js.map