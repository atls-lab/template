#set( $CAMELCASENAME = "" )

#foreach( $str in $NAME.split("-") )
  #set( $str = $str.substring(0,1).toUpperCase() + $str.substring(1) )
  #set( $CAMELCASENAME = $CAMELCASENAME + $str )
#end
/**
 * @jest-environment jsdom
 */

import { MockedProvider } from '@apollo/client/testing'
import { RenderResult }   from '@testing-library/react'
import { fireEvent }      from '@testing-library/react'
import { render }         from '@testing-library/react'
import { screen }         from '@testing-library/react'

import React              from 'react'
import { IntlProvider }   from 'react-intl'

import { ThemeProvider }  from '@ui/theme'

import { ${CAMELCASENAME} }       from './${NAME}.component'

type CustomRender = (element: React.ReactNode | React.ReactNode[]) => RenderResult

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

// eslint-disable-next-line @typescript-eslint/no-empty-function
const onError = () => {}

const customRender: CustomRender = (element) =>
  render(
    <IntlProvider locale='ru' onError={onError}>
      <MockedProvider>
        <ThemeProvider>{element}</ThemeProvider>
      </MockedProvider>
    </IntlProvider>
  )

describe('${CAMELCASENAME} fragment', () => {
  it('should render', () => {
    customRender(<${CAMELCASENAME} />)

    expect(true).toBeTruthy()
  })
})
