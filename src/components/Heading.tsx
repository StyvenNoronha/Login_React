import { Children, ReactNode } from "react"
import { Slot } from '@radix-ui/react-slot';
import {clsx} from 'clsx'
export interface TextProps {
  children: ReactNode;
  asChild?: boolean
  className?: string;


}

export function Heading({children, asChild, className}: TextProps){
  const Comp = asChild ? Slot :'h2'
  return(
    <Comp  className={clsx("text-Gray-200 font-bold font-sans ",className)}  > {children} </Comp>
  )
}