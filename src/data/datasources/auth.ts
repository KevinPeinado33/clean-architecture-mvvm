import { IAuthDatasource } from '@/domain/datasources'

export class AuthServerDatasource implements IAuthDatasource {

    async signIn(email: string, password: string): Promise<void> {
        console.log('estamos iniciando sesion gaaa', email, password)
    }

    async signOut(): Promise<void> {
        console.log('estamos saliendo de sesion pe mascota')
    }

}
