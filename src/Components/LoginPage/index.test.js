import React from 'react';
import { shallow } from 'enzyme';
import { createMount } from '@material-ui/core/test-utils';
import LoginPage from './index';



it('renders LoginPage without crashing', () => {
    createMount(<LoginPage />);
  });

it('should have a text field', () => {
  const wrapper = shallow(<LoginPage getUserRequested = {() => {}} />);
  const usernameTextField = wrapper.find('#usernameTextField');
  expect(wrapper.find('#usernameTextField')).toHaveLength(1);
  expect(usernameTextField.exists()).toBe(true);
})

it('should have a submit button', () => {
  const wrapper = shallow(<LoginPage getUserRequested = {() => {}} />);
  const loginBtn = wrapper.find('.login-btn');
  expect(loginBtn.exists()).toBe(true)
})

it('should call handleLoginChange when submit button is clicked', () => {
  const wrapper = shallow(<LoginPage getUserRequested = {() => {}} />);
  wrapper.instance().handleLoginChange = jest.fn();
  wrapper.update();
   wrapper.find('.login-btn').prop('onClick')() 

})


// shallow rending vs mount vs createMount vs