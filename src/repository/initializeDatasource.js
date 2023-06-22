const typeorm = require('typeorm')
let  { DataSource }  = typeorm;

const AppDataSource = new DataSource({
    type: "postgres",
    host: "ep-jolly-wildflower-573252.ap-southeast-1.aws.neon.tech",
    port: 5432,
    username: "kandpalbauddhik2000",
    password: "Uq9MeobD8BxA",
    database: "neondb",
    ssl: {
        rejectUnauthorized: false,
      },
})

async function initializeDatasource(){
    AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
}


module.exports = { initializeDatasource, AppDataSource }   //  { initializeDatasource : function (){}, AppDataSource : AppDataSource }
        
        
        
        
