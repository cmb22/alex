
export const Controls = ({NUMBER_OF_IMAGES, setCurrentSlide, currentSlide}) => {
    return (
         <div className="controls">
    <div 
        onClick={() => setCurrentSlide(currentSlide === 0 ? NUMBER_OF_IMAGES - 1 : currentSlide - 1) }
        className="left-arrow prev"
    >
        <div className="left-arrow-icon" />
    </div>
    <div 
        onClick={() => setCurrentSlide(currentSlide === NUMBER_OF_IMAGES - 1 ? 0 : currentSlide + 1) } 
        className="right-arrow next"
    >
        <div className="right-arrow-icon" />
    </div>
</div>)
}