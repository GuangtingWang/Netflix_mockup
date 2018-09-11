import React from 'react';
import App from './App';

import Enzyme,{ shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import checkPropTypes from 'check-prop-types';

import reducer from './reducers/reducer';
import {createStore} from 'redux';


Enzyme.configure({adapter: new EnzymeAdapter()});


const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

const storeFactory = (initialState) => {
    return createStore(reducer,initialState)
}

const initialStore = {
    mylist:[{id:1,title:'test-title'}],
    recommendations:[{id:4,title:'test-title-c'}]
}
const setup = (props={}, state=null) => {
    const store = storeFactory(initialStore)
    const wrapper = shallow(<App {...props} store={store} />).dive()
    if (state){
      wrapper.setState(state)
    }
    return wrapper;
}

const setup2 = (props={}, state=null) => {
    const store = storeFactory({mylist:[],recommendations:[]})
    const wrapper = shallow(<App {...props} store={store} />).dive()
    if (state){
      wrapper.setState(state)
    }
    return wrapper;
}

const defaultProps = {};
const defaultState = {};

describe('test app component with initialState', () => {
    let wrapper;
    beforeEach(() => { wrapper = setup(defaultProps,defaultState) });

    it('renders without error', () => {
        const component = findByTestAttr(wrapper,'App')
        expect(component.length).toBe(1);
    });
    it('render logo without error',() => {
        const logoComponent = findByTestAttr(wrapper,'logo');
        expect(logoComponent.length).toBe(1);
    })
// if there's one movie, no h2 tag saying "no movie"
    it('render no-movie tag', () => {
        const h2 = findByTestAttr(wrapper,'no-movie');
        expect(h2.length).toBe(0);
    });
// if there is one movie, should render one single cell
    it('render cell', () => {
        const cell = findByTestAttr(wrapper,'cell');
        expect(cell.length).toBe(1);
    });

    it('does not throw warning with expected props', () => {
        checkPropTypes(App, defaultProps);
    })
})


describe('test app component with empty store', () => {
    let wrapper;
    beforeEach(() => { wrapper = setup2(defaultProps,defaultState) });

    it('renders without error', () => {
        const component = findByTestAttr(wrapper,'App')
        expect(component.length).toBe(1);
    });
    it('render logo without error',() => {
        const logoComponent = findByTestAttr(wrapper,'logo');
        expect(logoComponent.length).toBe(1);
    })
// if no movie, there should be an h2 tag saying "no movie"
    it('render no-movie tag', () => {
        const h2 = findByTestAttr(wrapper,'no-movie');
        expect(h2.length).toBe(1);
    })
// if no movie, no cell is rendered
    it('render cell',() => {
        const cell = findByTestAttr(wrapper,'cell');
        expect(cell.length).toBe(0);
    })
})