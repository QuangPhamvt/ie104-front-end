import React from 'react'
function withSuspense(ChildrenComponent, LoadingComponent = null) {
  return function Loadable(props) {
    return (
      <React.Suspense fallback={LoadingComponent || 'Lazy components is loading ...'}>
        <ChildrenComponent {...props} />
      </React.Suspense>
    )
  }
}

export default withSuspense
