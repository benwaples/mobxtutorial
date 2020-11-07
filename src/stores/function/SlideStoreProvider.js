import { useLocalObservable } from 'mobx-react'
import React, { createContext, useContext } from 'react'
import { createSlidesStore } from './SlidesStore'

const slideContext = createContext(null)

export const SlideStoreProvider = ({ children }) => {
  const slideStore = useLocalObservable(() => createSlidesStore() )

  return (
      <slideContext.Provider value={slideStore} >
        {children}
      </slideContext.Provider>
  )
}

export const useSlideStore = () => useContext(slideContext)