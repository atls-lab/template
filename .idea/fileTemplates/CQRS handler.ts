#set( $CamelCaseName = "" )
#set( $TYPE = $Type.substring(0,1).toUpperCase() + $Type.substring(1) )

#foreach( $str in $NAME.split("-") )
  #set( $str = $str.substring(0,1).toUpperCase() + $str.substring(1) )
  #set( $CamelCaseName = $CamelCaseName + $str )
#end

#set( $Command = ${CamelCaseName} + $TYPE )
#set( $CommandHandler = ${CamelCaseName} + $TYPE + "Handler" )
import { ${TYPE}Handler }                 from '@nestjs/cqrs'
import { I${TYPE}Handler }                from '@nestjs/cqrs'

import { $Command }                       from '../$Type/${NAME}.${Type}'

import assert                             from 'assert'

@${TYPE}Handler($Command)
export class $CommandHandler implements I${TYPE}Handler<$Command, void> {
  constructor() {}

  async execute(command: $Command): Promise<void> {
    try {
    } catch (error) {
    }
  }
}
