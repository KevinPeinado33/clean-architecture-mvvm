export interface IAuthDatasource {
    signIn(email: string, password: string): Promise< void >
    signOut(): Promise< void >
}
