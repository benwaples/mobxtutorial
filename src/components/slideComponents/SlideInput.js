import { toJS } from 'mobx'
import React, { useState } from 'react'
import { useSlideStore } from '../../stores/function/SlideStoreProvider'

export const SlideInput = () => {
  const slideState = useSlideStore()
  const [slide, setSlide] = useState('')
  const [rating, setRating] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    slideState.addSlides(slide, rating)
  }
  
  console.log(toJS(slideState))
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="slide">Slide Name</label>
        <input 
          type="text"
          id="slide"
          name="slide"
          value={slide}
          onChange={e => setSlide(e.target.value)}
        />
        <label htmlFor="rating">Slide Rating</label>
        <input 
          type="text"
          id="rating"
          name="rating"
          value={rating}
          onChange={e => setRating(e.target.value)}
        />
        <button>submit</button>
      </form>
    </div>
  )
}
