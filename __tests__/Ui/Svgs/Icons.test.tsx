import TestRenderer from 'react-test-renderer';
import React from 'react';
import {
  AddIcon,
  CalendarIcon,
  ClockIcon,
  CommentIcon,
  FilterIcon,
  ListIcon,
  PersonalIcon,
  PriorityIcon,
  RepeatIcon,
  SearchIcon,
  SunIcon,
  TaskIcon,
} from '../../../src/Ui/Sgvs'

describe('<AddIcon />', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<AddIcon />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});

describe('<CalendarIcon />', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<CalendarIcon />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
describe('<ClockIcon />', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<ClockIcon />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
describe('<CommentIcon />', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<CommentIcon />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
describe('<FilterIcon />', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<FilterIcon />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
describe('<ListIcon />', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<ListIcon />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});

describe('<PersonalIcon />', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<PersonalIcon />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
describe('<PriorityIcon />', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<PriorityIcon />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
describe('<RepeatIcon />', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<RepeatIcon />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
describe('<SearchIcon />', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<SearchIcon />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
describe('<SunIcon />', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<SunIcon />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
describe('<TaskIcon />', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<TaskIcon />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
