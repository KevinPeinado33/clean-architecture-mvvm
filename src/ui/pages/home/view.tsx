import { useMemo, useState } from 'react'
import { observer } from 'mobx-react-lite'

import { container } from '@/application/dependencies'

import { HomeViewModel, IUser } from './viewModel'
import { Button } from '@/ui/components/atoms/buttons'

const HomePage = () => {
  
  const viewModel = useMemo( () => container.resolve< HomeViewModel >('homeViewModel'), [] )

  const [ user ] = useState< IUser >({
    id: 2,
    email: 'raul@gmail.com'
  })

  const handleCreateUser    = () => viewModel.createUser( user )
  const handleChangeLoading = () => viewModel.setIsLoading( true )

  if ( viewModel.isLoading ) {
    return <h2>Estamos cargando...</h2>
  }  

  return (
    <div className='flex flex-col '>
      
      {
        viewModel.users.map( user => (
          <p key={ user.id } >{ user.email }</p>
        ))
      }

      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      <Button 
        text='Agregar'
        variant='primary'
        onClick={ handleCreateUser }      
      />

      <Button 
        text='Cargar'
        variant='danger'
        onClick={ handleChangeLoading }      
      />
      
    </div>
  )

}

export default observer( HomePage )  
