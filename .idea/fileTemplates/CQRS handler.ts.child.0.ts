#set( $CamelCaseName = "" )
#set( $TYPE = $Type.substring(0,1).toUpperCase() + $Type.substring(1) )

#foreach( $str in $NAME.split("-") )
  #set( $str = $str.substring(0,1).toUpperCase() + $str.substring(1) )
  #set( $CamelCaseName = $CamelCaseName + $str )
#end

#set( $Command = ${CamelCaseName} + $TYPE )
#set( $CommandHandler = ${CamelCaseName} + $TYPE + "Handler" )
import { Test }                         from '@nestjs/testing'

import { $Command }        from '../${Type}/${NAME}.${Type}'
import { $CommandHandler } from './${NAME}.${Type}-handler'

describe(' domain', () => {
  describe('Application module', () => {
    describe('${Command}', () => {
      let handler: $CommandHandler
      const command = new $Command()

      beforeEach(async () => {
        const testModule = await Test.createTestingModule({
          providers: [
            $CommandHandler,
          ],
        }).compile()

        handler = testModule.get($CommandHandler)
      })

      it('should execute command', async () => {
        await expect(handler.execute(command)).resolves.toEqual(undefined)
      })
    })
  })
})
