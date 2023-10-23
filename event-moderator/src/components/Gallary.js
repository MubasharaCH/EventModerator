import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import Image from 'react-bootstrap/Image';
import  birth from "../img/birth.png"
import bride from "../img/brid.png"
import Anniversiry from "../img/ann.png"
import Party from "../img/party.png"

class Gallery extends React.Component {

  onSlideChange(e) {
    console.log('Item`s position during a change: ', e.item);
    console.log('Slide`s position during a change: ', e.slide);
  }

  onSlideChanged(e) {
    console.log('Item`s position after changes: ', e.item);
    console.log('Slide`s position after changes: ', e.slide);
  }

  render() {
    const responsive = {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        items: 3
      }
    };

    return (
      <AliceCarousel
        duration={400}
        autoPlay={true}
        startIndex = {1}
        infinite={true}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={true}
        responsive={responsive}
        autoPlayInterval={2}
        autoPlayDirection="ltr"
        autoPlayActionDisabled={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      >
        <div className="yours-custom-class"> <Image src={Anniversiry} height={350} width={350} fluid/></div>
        <div className="yours-custom-class"><Image src={birth} height={350} width={350} fluid/></div>
        <div className="yours-custom-class"><Image src={bride} height={350} width={350} fluid/></div>
        <div className="yours-custom-class"><Image src={Party} height={350} width={350} fluid/></div>
        <div className="yours-custom-class"><Image src={Anniversiry} height={350} width={350} fluid/></div>
        <div className="yours-custom-class"><Image src={birth} height={350} width={350} fluid/></div>
      </AliceCarousel>
    );
  }
}
export default Gallery;