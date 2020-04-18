import React from 'react'
import { Tabs, useTabState, usePanelState } from '@bumaga/tabs'
import DevMag from './resources/DevMag'
import Inspiration from './resources/Inspiration'
import FreeAssets from './resources/FreeAssets'
import Typography from './resources/Typography'
import Colors from './resources/Colors'
import ProcessingTools from './resources/ProcessingTools'

const Tab = ({ children }) => {
  const { onClick } = useTabState()

  return (
    <button className='resource-btn' onClick={onClick}>
      {children}
    </button>
  )
}

const Panel = ({ children }) => {
  const isActive = usePanelState()

  return isActive ? <>{children}</> : null
}

const Resources = () => (
  <div className='resources-container'>
    <Tabs>
      <div className='tab-container'>
        <Tab>Dev Magazines</Tab>
        <Tab>Inspiration</Tab>
        <Tab>Free Assets</Tab>
        <Tab>Typography</Tab>
        <Tab>Colors</Tab>
        <Tab>Processing Tools</Tab>
      </div>

      <Panel>
        <DevMag />
      </Panel>
      <Panel>
        <Inspiration />
      </Panel>
      <Panel>
        <FreeAssets />
      </Panel>
      <Panel>
        <Typography />
      </Panel>
      <Panel>
        <Colors />
      </Panel>
      <Panel>
        <ProcessingTools />
      </Panel>
    </Tabs>
  </div>
)

export default Resources
