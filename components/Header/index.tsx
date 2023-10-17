import Link from 'next/link'
import React from 'react'
import { urlDeAplicacion } from '@/app/utils/constants'

const Header = () => {
  return (
    <div className='w-full flex flex-row justify-between p-6 bg-md22007-primary-color text-white'>
      <Link href={urlDeAplicacion.urlnicio} className='text-xl font-bold'>React example</Link>
      <div className='flex flex-row gap-4'>
        <Link href={urlDeAplicacion.urlnicio}>Inicio</Link>
        <Link href={urlDeAplicacion.urlExamples}>Ejemplos</Link>
        <Link href={'/MD22007'}>Top 3 actores</Link>
        <Link href={'/usuarios'}>Usuarios</Link>
        <Link href={'/login'}>Login</Link>
      </div>
    </div>
  )
}

export default Header


