export class User {
    
    id?: string
    firstName: string
    lastName: string
    email: string
    token?: string

    constructor(values: User) {

        this.id = values.id
        this.firstName = values.firstName
        this.lastName = values.lastName
        this.email = values.email
        this.token = values.token
    
    }

}
