import { ButtonHTMLAttributes, Children, ReactNode } from "react"
import { Slot } from '@radix-ui/react-slot';
import {clsx} from 'clsx'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean
  className?: string;


}

export function Button({children, asChild, className, ...props}: ButtonProps){
  const Comp = asChild ? Slot :'button'
  return(
    <Comp  className={clsx("py-3 px-4 bg-Green-800 rounded font-semibold  text-Gray-900 text-lg w-full hover:bg-Green-600 transition-colors focus:ring-White ",className)} {...props}  > {children} </Comp>
  )
}