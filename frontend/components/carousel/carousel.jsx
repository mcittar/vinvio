import React from 'react';
import Slider from 'react-slick';
import WinePic from '../wines/wine_pic';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getWines();
  }

  render() {
    let { wines } = this.props;
    let Outwines = <div><h3>Check out our Wines</h3></div>;
    let keys = Object.keys(wines);
    if (keys.length > 0) {
      Outwines = keys.map(key => {
        return (
          <div key={ key }>
            <h3>{ wines[key].name }</h3>
          </div>
        )
      });
    }

    var settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      accessibility: true,
      dragable: true,
      focusOnSelect: true,
      centerMode: true
    };

    return (
      <div className='content'>
        <Slider {...settings}>
          { Outwines }
        </Slider>
      </div>
    );
  }
}

export default Carousel