import TestRenderer from 'react-test-renderer';
import { NativeBaseProvider } from 'native-base';

import React from 'react';
import { TasksScreen } from '../../src/Screens'

describe('<TaskScreen />', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(
      <NativeBaseProvider>
        <TasksScreen />
      </NativeBaseProvider>,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
