import React from 'react'
function withSuspense(ChildrenComponent) {
  return function Loadable(props) {
    return (
      <React.Suspense fallback='Lazy components is loading ...'>
        <ChildrenComponent {...props} />
      </React.Suspense>
    )
  }
}

export default withSuspense
