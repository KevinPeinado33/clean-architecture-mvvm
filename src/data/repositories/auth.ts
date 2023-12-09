import { container } from '@/application/dependencies'
import { IAuthDatasource } from '@/domain/datasources'
import { IAuthRepository } from '@/domain/repositories'

export class AuthRepository implements IAuthRepository {
    
    private readonly authDatasource: IAuthDatasource
    
    constructor(
    ) {
        this.authDatasource = container.resolve('authServerDatasource')
    }
    
    signIn(email: string, password: string): Promise<void> {
        return this.authDatasource.signIn( email, password )
    }

    signOut(): Promise<void> {
        return this.authDatasource.signOut()
    }

}
