#set( $CamelCaseName = "" )
#set( $TYPE = $Type.substring(0,1).toUpperCase() + $Type.substring(1) )

#foreach( $str in $NAME.split("-") )
  #set( $str = $str.substring(0,1).toUpperCase() + $str.substring(1) )
  #set( $CamelCaseName = $CamelCaseName + $str )
#end

#set( $Command = ${CamelCaseName} + $TYPE )
#set( $CommandHandler = ${CamelCaseName} + $TYPE + "Handler" )
#set($Props = $CommandHandler + "Props" )
export interface $Props {}

export class $Command implements $Props {
  constructor(props: $Props) {}
}