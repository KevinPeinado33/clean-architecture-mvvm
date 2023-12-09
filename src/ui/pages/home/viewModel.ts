import { observable, makeObservable, action } from 'mobx'

import { IAuthRepository } from '@/domain/repositories/auth'
import { container } from '@/application/dependencies'

export interface IUser { 
    id: number
    email: string
}

export class HomeViewModel {

    private readonly authRepository: IAuthRepository

    @observable
    isLoading = false

    @observable
    users: IUser[] = [
        {
            id: 1,
            email: 'kevin@gmail.com'
        }
    ]

    constructor() {

        makeObservable(this)

        this.authRepository = container.resolve('authRepository')

    }

    createUser(newUser: IUser) {
        this.addUser( newUser )
        this.authRepository.signIn('kevinlevin', '123')
    }
    
    @action
    addUser(value: IUser) {
        this.users.push( value )
    }

    @action
    setIsLoading(value: boolean) {
        this.isLoading = value
    }

}
