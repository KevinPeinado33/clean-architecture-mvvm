export interface IAuthRepository {
    signIn(email: string, password: string): Promise< void >
    signOut(): Promise< void >
}
