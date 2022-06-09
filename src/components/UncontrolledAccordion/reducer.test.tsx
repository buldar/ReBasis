import {reducer, StateType} from "./reducer";

test('reducer should change value', () => {
    const state: StateType = {
        collapsed: false
    }
    const newState = reducer(state, {type: 'COLLAPSE'})
    expect(newState.collapsed).toBe(true)
    expect(newState.collapsed).toBe(!state.collapsed)
})

test('should be error', () => {
    const state: StateType = {
        collapsed: false
    }
    expect(() => {
        reducer(state,
            {type: 'FAKETYPE'})
    }).toThrowError()
})