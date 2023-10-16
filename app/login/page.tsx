'use client';
import useAuthentication from "@/components/hooks/useAuthentication";
import axios from "axios";
import { isAxiosError } from "axios";
import { useRouter } from "next/navigation";
import React,{ChangeEvent, useState} from "react"

interface ILoginResponse {
    token: string;
  }
  
  interface ILoginBody {
    username: string;
    password: string;
  }
  
  interface ICreateUsuarioResponse {
    message: string;
  }
  
  interface IUsuarioEntity {
    id: number;
    nombre: string;
    edad: number;
  }
  
  interface IUpdateUsuarioResponse {
    message: string;
    data: IUsuarioEntity;
  }

const LoginPage =() =>{
    const [persistAuthentication] = useAuthentication()
    const router = useRouter();

    const [loading, setLoading]=useState(0);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailOnChange = (event:ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value)
    }

    const handlePasswordOnChange = (event:ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
    }

    const login = async () => {
        try {
            setLoading(previousLoading => previousLoading+1);
          const response = await axios.post<ILoginResponse>('http://localhost:8000/login', {
            username: email,
            password: password
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          });
          
          persistAuthentication({token: response.data.token});

          console.log('Se inicio sesion correctamente.')
          router.push('/');

        } catch (error) {
          if(isAxiosError(error)){
            console.log('Error de axios', error);
            alert(error);
          }else{
            console.log('Otro tipo de error', error);
          }
        }
        setLoading(previousLoading => previousLoading-1);
      }



    return (
        <div>
            <h1>Cargando: {loading>0? 'Si':'No'}</h1>
            <div className='flex flex-col'>
                <label htmlFor="email">Correo electronico:</label>
                <input onChange={handleEmailOnChange} id='email' type="text" value={email} />
            </div>
        
            <div className='flex flex-col'>
                <label htmlFor="password">Constraseña:</label>
                <input onChange={handlePasswordOnChange} id='password' type="password" value={password} />
            </div>
            <button onClick={login}>Iniciar sesion</button>
        
        </div>
    )
}

export default LoginPage;