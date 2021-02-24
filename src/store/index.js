import React from 'react'

const Context = React.createContext()

export const Provider = ({ initialState, reducer, children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}

const wrapActions = (actions, dispatch) => {
  const result = {}
  for (const key in actions) {
<<<<<<< HEAD
    result[key] = (...args) => actions[key](...args)(dispatch)
=======
<<<<<<< HEAD
    result[key] = (...args) => actions[key](...args)(dispatch)
=======
    result[key] = (...args) => dispatch(actions[key](...args))
>>>>>>> d474bcc751207fbaf57a656757f8ec0a7d1fe455
>>>>>>> main
  }
  return result
}

export const connect = (mapStateToProps, actions) => (Component) => (props) => (
  <Context.Consumer>
    {({ state, dispatch }) => {
<<<<<<< HEAD
        console.log(actions)
=======
<<<<<<< HEAD
        console.log(actions)
=======
>>>>>>> d474bcc751207fbaf57a656757f8ec0a7d1fe455
>>>>>>> main
        return (
            <Component
              {...props}
              {...mapStateToProps(state)}
              {...wrapActions(actions, dispatch)}
            />
          )
    }}
  </Context.Consumer>
)

export const combineReducers = (reducers) => (state, action) => {
  const nextState = {}
  for (const key in reducers) {
    const previousStateForKey = state[key]
    const nextStateForKey = reducers[key](previousStateForKey, action)
    nextState[key] = nextStateForKey
  }
  return nextState
}