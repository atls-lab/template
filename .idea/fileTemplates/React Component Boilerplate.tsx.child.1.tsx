#set( $CAMELCASENAME = "" )

#foreach( $str in $NAME.split("-") )
  #set( $str = $str.substring(0,1).toUpperCase() + $str.substring(1) )
  #set( $CAMELCASENAME = $CAMELCASENAME + $str )
#end
/**
 * @jest-environment jsdom
 */

import { RenderResult }   from '@testing-library/react'
import { fireEvent }      from '@testing-library/react'
import { render }         from '@testing-library/react'
import { screen }         from '@testing-library/react'
import { matchers }       from '@emotion/jest'

import React              from 'react'

import { ThemeProvider }  from '@ui/theme'
import { theme }          from '@ui/theme'

import { ${CAMELCASENAME} }       from './${NAME}.component'

expect.extend(matchers)

type CustomRender = (element: React.ReactNode | React.ReactNode[]) => RenderResult

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

const customRender: CustomRender = (element) =>
  render(
    <ThemeProvider>{element}</ThemeProvider>
  )

describe('${CAMELCASENAME} fragment', () => {
  it('should render', () => {
    customRender(<${CAMELCASENAME} />)

    expect(true).toBeTruthy()
    
    expect(true).toHaveStyleRule('color', theme.colors.text.blue)
  })
})
