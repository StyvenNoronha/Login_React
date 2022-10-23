import {InputHTMLAttributes, ReactNode } from "react"
import {clsx} from 'clsx'
import { Slot } from '@radix-ui/react-slot';

import {Envelope} from 'phosphor-react'



export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot (props: TextInputRootProps) {
  return(
    <div className={clsx(" flex items-center h-12 gap-3 py-4 px-3 rounded bg-Gray-800 w-full focus-within: ring-2 ring-Green-600")}>
    {props.children}
    </div>
  )
}
TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {props.children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps{}
function TextInputInput( props: TextInputProps){
  
  return(
    <input className="  bg-Trasparente flex-1 bg-Gray-800 outline-none   placeholder:text-Gray-200 " {...props}/>
  )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon 
}

