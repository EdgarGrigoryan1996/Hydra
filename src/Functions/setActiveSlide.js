export const nextSlide = (currentSlide,setActiveSlide) => {
    if(currentSlide === 4){
        setActiveSlide(1)
    } else {
        setActiveSlide(currentSlide + 1)
    }
}
export const prevSlide = (currentSlide,setActiveSlide) => {
    if(currentSlide === 1){
        setActiveSlide(4)
    } else {
        setActiveSlide(currentSlide - 1)
    }
}