import './styles/global.css'
import { Text } from './components/Text'
import { Logo } from './Logo'
import { Heading } from './components/Heading'
import { Button } from './components/Button'
import { CheckBox } from './components/CheckBox'
import { TextInput } from './components/TextInput'
import { Envelope, Airplane, Lock, Password, LockKey } from 'phosphor-react'



export function App() {
   return (
      <>
         <div className='w-screen h-screen bg-Gray-900 flex items-center justify-center text-Gray-200 flex-col'>
            <header className='flex flex-col items-center' >
               <Logo />
               <Heading className='nt-4'> Projeto React </Heading>
               <Text className='text-2xl text-Green-200 nt-1'>Login</Text>
            </header>
            <form className='flex flex-col gap-4 items-stretch w-full max-w-[400px] nt-10'>
               <label htmlFor='email' className='font-semibold flex flex-col gap-3'>
                  <Text className='text-sm'> E-mail:</Text>
                  <TextInput.Root>
                     <TextInput.Icon >
                        <Envelope/>
                     </TextInput.Icon>
                        <TextInput.Input type='email' placeholder='Example@Example.com' />
                     
                  </TextInput.Root>
               </label>

               <label htmlFor='password' className='font-semibold flex flex-col gap-3'>
                  <Text className='text-sm'>Senha:</Text>
                  <TextInput.Root>
                     <TextInput.Icon >
                       <LockKey/>   
                      </TextInput.Icon>
                        <TextInput.Input type='Password' placeholder='************' />
                     
                  </TextInput.Root>
               </label>

               <label htmlFor='remenber' className='flex items-center gap-2'>
                  <CheckBox id="remenber" />
                  <Text className='text-sm text-Gray-200 '>
                     Lembrar de min por 30 dias
                  </Text>

               </label>

               <Button type='submit' className='nt-4'>
                  Entre
               </Button>
            </form>

            <footer className='flex flex-col items-center gap-4 mt-8'>
               <a  href='' className='text-Gray-200 underline hover:text-Green-200'> Esqueceu sua senha ? </a>
               <a href='' className='text-Gray-200 underline hover:text-Green-200'> Crie uma conta agora  </a>
            </footer>
         </div>
      </>
   )
}
