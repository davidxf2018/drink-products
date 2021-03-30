/* Dependencies */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/* Components */
import Filter from './filter'

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() })

describe('Filter', () => {
  describe('Behavioural (Integration)', () => {
    const wrapper = shallow(<Filter />);
    it('renders a dropdown with "Filter" as children', () => {
      expect(wrapper.find('select')).toHaveLength(1);
    });

  });

})
