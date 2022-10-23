import { Children, ReactNode } from "react"
import { Slot } from '@radix-ui/react-slot';
import {clsx} from 'clsx'
export interface TextProps {
  children: ReactNode;
  asChild?: boolean
  className?: string;


}

export function Text({children, asChild, className}: TextProps){
  const Comp = asChild ? Slot :'span'
  return(
    <Comp  className={clsx("text-2xl text-green-500 ",className)}  > {children} </Comp>
  )
}