#set( $CAMELCASENAME = "" )

#foreach( $str in $NAME.split("-") )
  #set( $str = $str.substring(0,1).toUpperCase() + $str.substring(1) )
  #set( $CAMELCASENAME = $CAMELCASENAME + $str )
#end
import { ReactNode } from 'react'

export interface ${CAMELCASENAME}Props {
  children?: ReactNode | ReactNode[]
}