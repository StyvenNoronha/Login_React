import { Children, ReactNode } from "react"
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {Check} from 'phosphor-react'

import {clsx} from 'clsx'
export interface CheckBoxProps extends CheckboxPrimitive.CheckboxProps {}

export function CheckBox(props: CheckBoxProps){

  return(
    <CheckboxPrimitive.Root className='w-6 h-6 p-[2px] bg-Gray-800 rounded ' {...props}>
        <CheckboxPrimitive.Indicator asChild >
          <Check weight="bold" className="h-5 text-Green-800" />
        </CheckboxPrimitive.Indicator>  
    </CheckboxPrimitive.Root>  
  )
}