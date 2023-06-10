import {useRef,useEffect,useState,useCallback } from "react";
import leftimage from "../assets/leftarrow.png";
import rightimage from "../assets/rightarrow.png";
import plus from "../assets/addwatchlist.png";

const ImageSlider = ({slides}) =>{
    const [currentIndex,setCurrentIndex] = useState(0);

    const timerRef = useRef(null);


    const slideStyle = (index) =>({
            width: "100%",
            height: "326px",
            borderRadius: "15px",
            backgroundSize: "cover",
            backgroundPostion:"center",   
            position: "relative",
            backgroundImage: `url(${slides[index].url})`
    } )

   const sliderMainContainer = () =>({
       position: "relative",
       overflow: "hidden"
    })

    const sliderConatainerSlide = () => ({
         display: "flex",
         height:"100%",
         transition: "transform ease-out 0.3s",
         width: "300%",
         transform: `translateX(${-(currentIndex * 719)}px)`,
        
    })

    const arrowOuter ={
          backgroundColor: "rgba(187, 187, 187, 0.8)",
          width: "35px",
          height: "35px",
          borderRadius: "50%",
          cursor: "pointer"
    }
    const left = {
          position: "absolute",
          top:"50%",
          left:"15px",
          transformY: "translate(-50%)",
          display: "flex",
          justifyContent: "center",
          alignItems:"center",
          zIndex: 2
    }
    const right = {
        position: "absolute",
        top:"50%",
        right:"15px",
        transformY: "translate(-50%)",
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        zIndex: 2
    }


    const handlePrevious = () => {
        if(currentIndex > 0){
            setCurrentIndex(currentIndex-1);
        }
        }
     
    const handleNext = useCallback(() => {
        if(!(currentIndex === slides.length-1)){
            setCurrentIndex(currentIndex+1);
        } 
    },[currentIndex]) 


    useEffect(() => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            handleNext();
        }, 2000);
    
        return () => clearTimeout(timerRef.current);
      }, [handleNext]);

    
    return <div>



      <div style={sliderMainContainer()}>
                <div style={{...arrowOuter,...left}} onClick={handlePrevious}>
                    <img src={leftimage} alt="" />
                </div>
                
                <div style={{...arrowOuter,...right}} onClick={handleNext}>
                <img src={rightimage} alt="" />
                </div>


                <div style={sliderConatainerSlide()}>
                {
                    slides.map((slide,index) =>{
                    return  <div key={index} style={slideStyle(index)}>
                                        <div className="movie-data">
                                            <h3>{slide.title}</h3>
                                            <p>{slide.genera}</p>
                                            <div className="inner-flex">
                                                <button className="watch-now">Watch</button>
                                                <button className="add-wishlist"><img src={plus} alt=""/></button>
                                            </div>
                                        </div> 
                                </div>
                    })
                }
                </div>



      </div>




        {/* <div style={slideStyle(2)}>
            <div style={{...arrowOuter,...left}} onClick={handlePrevious}>
                <img src={leftimage} alt="" />
            </div>
            
            <div className="movie-data">
              <h3>{slides[currentIndex].title}</h3>
              <p>{slides[currentIndex].genera}</p>
              <div className="inner-flex">
                <button className="watch-now">Watch</button>
                <button className="add-wishlist"><img src={plus} alt=""/></button>
              </div>
            </div>
          
            <div style={{...arrowOuter,...right}} onClick={handleNext}>
            <img src={rightimage} alt="" />
            </div>
        </div> */}


    </div>
}


export default ImageSlider;