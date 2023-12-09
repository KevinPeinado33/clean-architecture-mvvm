import * as awilix from 'awilix'

import { HomeViewModel } from '@/ui/pages/home/viewModel'
import { AuthServerDatasource } from '@/data/datasources'
import { AuthRepository } from '@/data/repositories'
import { IAuthDatasource } from '@/domain/datasources'
import { IAuthRepository } from '@/domain/repositories'

export const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
})


container.register({
    
    // Injections for datasources
    authServerDatasource: awilix.asClass<IAuthDatasource>( AuthServerDatasource ).singleton(),
    
    
    // Injections for repositories
    authRepository: awilix.asClass<IAuthRepository>( AuthRepository ).singleton(),
    
    
    // Injections for view models
    homeViewModel: awilix.asClass<HomeViewModel>( HomeViewModel )

})