const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm")

@Entity() // decorator
class User {
    @PrimaryGeneratedColumn()
    id

    @Column()
    firstName

    @Column()
    lastName

    @Column()
    isActive
}

module.exports = User