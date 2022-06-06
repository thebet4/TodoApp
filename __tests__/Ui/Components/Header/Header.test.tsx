import { NativeBaseProvider } from 'native-base';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Header } from '../../../../src/Ui/Components'

describe('<Header />', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(
      <NativeBaseProvider>
        <Header title="Tasks" />
      </NativeBaseProvider>,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
