'use client';
import React, { ChangeEvent, useState } from 'react'
import { IUserCardPropiedades } from '@/components/UserCard';
import Image from 'next/image';

/*import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Ejemplo 2: Capturar y almacenar datos',
}*/
//Creando la interfaz
interface IUser extends IUserCardPropiedades
{

}

type TRoles = 'Client' | 'Admin';

const Example2 = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [role, setRole] = useState<TRoles>('Client')
  const [terms, setTerms] = useState(false)
  //definiendo el estado de usuarios
  const [users, setUsers] = useState<IUser[]>([])

  //nuevo atributo
  const [photo, setPhoto] = useState('')

  const handleNameOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.currentTarget.value)
  };

  const handleLastNameOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    setLastName(event.currentTarget.value)
  }

  const handleRoleOnChange = (event:ChangeEvent<HTMLSelectElement>) => {
    if(event.currentTarget.value === 'Client' || event.currentTarget.value === 'Admin'){
      setRole(event.currentTarget.value)
    }
  }

  const handleTermsOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    setTerms(event.currentTarget.checked)
  }
  
  //nuevo metodo para foto
  const handlePhotoOnChange = (event:ChangeEvent<HTMLInputElement>) => {
  setPhoto(event.currentTarget.value)
  }

  const handleGuardarOnClick = () => {
    //creando el objeto para guaradar los datos
    const usuario:IUser = {
      user: {id: 1, firstName: firstName, lastName: lastName, role: role, picture: photo } 
    }
    //agrega cada nuevo elemento al final del array
    setUsers([...users,usuario]);
  }


  return (
    <><div>
      <h1 className='text-2xl font-bold'>Capturar datos</h1>
      <div className='flex flex-col'>
        <label htmlFor="firstName">Nombre:</label>
        <input onChange={handleNameOnChange} id='firstName' type="text" value={firstName} />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="lastName">Apellido:</label>
        <input onChange={handleLastNameOnChange} id='lastName' type="text" value={lastName} />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="rol">Rol:</label>
        <select onChange={handleRoleOnChange} id='rol' value={role}>
          <option value='Client'>Cliente</option>
          <option value='Admin'>Administrador</option>
        </select>
      </div>

      <div className='flex flex-col'>
        <label htmlFor="photo">Link de foto:</label>
        <input onChange={handlePhotoOnChange} id='photo' type="text" value={photo} />
      </div>

      <div className='flex flex-row gap-1 items-center'>
        <label htmlFor="terms">Aceptar terminos y servicios</label>
        <input onChange={handleTermsOnChange} id='terms' type="checkbox" checked={terms} />
      </div>
      <button onClick={handleGuardarOnClick}>Guardar</button>
    </div>

    {/* Despliega la targeta de usuario */}
    {users.map((user, index) => (
      <div key={index} className='flex flex-row gap-4 border border-gray-300 rounded-lg overflow-hidden w-96'>
        <div className='aspect-square w-32'>
          <Image width={128} height={128} className='object-cover w-full h-full' src={user.user.picture} alt={`Foto de ${user.user.firstName} ${user.user.lastName}`} />
        </div>
        <div className='flex flex-col justify-center'>
          <span><span className='font-bold'>Nombre:</span> {user.user.firstName}</span>
          <span><span className='font-bold'>Apellido:</span> {user.user.lastName}</span>
          <span><span className='font-bold'>Rol:</span> {user.user.role}</span>
        </div>
      </div>
    ))}
    </>
  )
}

export default Example2