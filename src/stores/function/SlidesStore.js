import { nanoid } from 'nanoid'

export const createSlidesStore = () => {
  return ({
    slides: [],
    addSlides(slides, rating) {
      this.slides.push({
        slides,
        rating, 
        id: nanoid()
      })
    },
    removeSlides(id) {
      this.slides.filter(slides => slides.id !== id)
    }
  })
}