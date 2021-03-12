import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import 'react-slideshow-image/dist/styles.css'

const Slideshow = () => {
    return (
      <Carousel>
        <img src={'https://brainhubeu.github.io/react-carousel/static/mona-7a1ceae9bdb8c43272eb101c091c5408.jpg'} />
        <img src={'https://brainhubeu.github.io/react-carousel/static/scream-ee207a05c1e6fed03aafa156cc511abe.jpg'} />
    </Carousel>
    )
}

export default Slideshow;