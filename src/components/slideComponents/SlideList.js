import { toJS } from 'mobx'
import { useObserver } from 'mobx-react'
import React from 'react'
import { useSlideStore } from '../../stores/function/SlideStoreProvider'

export const SlideList = () => {
  const slideStore = useSlideStore()
  const slideElements = slideStore.slides.map(slide => (
  <li key={slide.id}>
    <h4>{slide.name}</h4>
    <p>{slide.rating}</p>
  </li>
  ))
  
  console.log(toJS(slideStore))

  return useObserver(() => (
    <div>
      {slideStore.slides.map(slide => (
  <li key={slide.id}>
    <h4>{slide.slides}</h4>
    <p>{slide.rating}</p>
  </li>
  ))}
    </div>
  ))
}
