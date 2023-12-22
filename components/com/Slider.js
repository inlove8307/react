import ComponentInitializer from "@/utils/ComponentInitializer";
import { useEffect, useState } from "react";

const { HOF } = ComponentInitializer.init('Slider');

const sliderStyle = {
    position: 'relative',
    overflow: 'hidden',
    width: '100%'
};

const sliderContentStyle = {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
};

const slideSyle = {
    width: '100%',
    flex: '0 0 100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    backgroundColor: '#ddd',
    textAlign: 'center'
}

const slideButtonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    padding: '10px',
    zIndex: '2'
}

export const SlideItem = ({ children }) => {
    return (
        <div style={slideSyle}>{children}</div>
    )
};

export const Slider = HOF(({ slideLength, children, options }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slideLength - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slideLength - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        // 자동으로 슬라이드를 넘기는 옵션이 있을 경우
        if (options?.autoSlide) {  
            const timer = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === slideLength - 1 ? 0 : prevIndex + 1
                );
    
            }, 3000); // 3초마다 슬라이드가 변경됩니다.
    
            return () => clearInterval(timer);
        }
        
    }, [options, slideLength]);


    return (
        <div style={sliderStyle}>
            <div style={{ ...sliderContentStyle, transform: `translateX(-${currentIndex * 100}%)` }}>
                {children}
            </div>
            <button style={{ ...slideButtonStyle, left: '10px' }} onClick={goToPrevious}>&lt;</button>
            <button style={{ ...slideButtonStyle, right: '10px' }} onClick={goToNext}>&gt;</button>
        </div>
    )
});