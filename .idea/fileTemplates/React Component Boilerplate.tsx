#set( $CAMELCASENAME = "" )

#foreach( $str in $NAME.split("-") )
  #set( $str = $str.substring(0,1).toUpperCase() + $str.substring(1) )
  #set( $CAMELCASENAME = $CAMELCASENAME + $str )
#end
import React            from 'react'
import { FC }           from 'react'
import { ${CAMELCASENAME}Props } from './${NAME}.interfaces'

export const ${CAMELCASENAME}: FC<${CAMELCASENAME}Props> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>
}