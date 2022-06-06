import { NativeBaseProvider } from 'native-base';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { TodoList } from '../../../../src/Ui/Components'

describe('<TodoList />', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(
      <NativeBaseProvider>
        <TodoList todos={[]} />
      </NativeBaseProvider>,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
