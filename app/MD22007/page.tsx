import React from 'react';
import Image from 'next/image';
import AnthonyHopkinsImage from '@/public/hopkins_anthony.jpg';

const Top3Actores = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4 max-w-3xl mx-auto">
      {/* Actor 1 */}
      <div className="bg-gray-200 p-4 rounded-lg col-span-3 row-span-5">
        <div className="text-xl font-bold">1. Anthony Hopkins</div>
        <Image src={AnthonyHopkinsImage} alt = "Photo of Anthony Hopkins" />
        <p>Famoso actor reconocido por El silencio de los corderos, Lo que queda del día, El padre, El hombre elefante</p>
      </div>

      {/* Actor 2 */}
      <div className="bg-gray-200 p-4 rounded-lg col-span-2 row-span-3">
        <div className="text-xl font-bold">2. Emma Mackey</div>
        <Image width={200} height={150} src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Emma Mackey" className="w-full h-auto my-2" />
        <p> Emma Margaret Marie Tachard-Mackey, conocida artísticamente como Emma Mackey, es una actriz y modelo franco-británica.​</p>
      </div>

      {/* Actor 3 */}
      <div className="bg-gray-200 p-4 rounded-lg  col-span-2 row-span-2">
        <div className="text-xl font-bold">3. Tilda Swinton</div>
        <Image width={200} height={150} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Tilda Swinton" className="w-full h-auto my-2" />
        <p>Katherine Matilda Swinton, conocida como Tilda Swinton, es una actriz y modelo británica. Cuenta con ascendencia escocesa</p>
      </div>
      <button className='botonEliminar'>Eliminar</button>
    </div>
  );
}

export default Top3Actores;
