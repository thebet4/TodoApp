import { NativeBaseProvider, SunIcon } from 'native-base';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { TabBarItem } from '../../../../src/Ui/Components'

describe('<TabBarItem />', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(
      <NativeBaseProvider>
        <TabBarItem Icon={SunIcon} label="Teste" focused={false} />
      </NativeBaseProvider>,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
