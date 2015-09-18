var SliderItem = React.createClass({

	render: function() {
		return (
			<div className={"slider-item " + this.props.color}>
				<h1>{this.props.text}</h1>
			</div>
		);
	}

});

SliderCom = React.createClass({

	render: function () {
	    var settings = {
	      dots: false,
	      infinite: true,
	      speed: 400,
	      slidesToShow: 1,
	      slidesToScroll: 1
	    };

	    return (
	      <Slider {...settings}>
	        <div><SliderItem text="哈哈红色的" color="item-color-red" /></div>
	        <div><SliderItem text="哈哈黄色的" color="item-color-yellow" /></div>
	        <div><SliderItem text="哈哈绿色的" color="item-color-green" /></div>
	        <div><SliderItem text="哈哈蓝色的" color="item-color-blue" /></div>
	        <div><SliderItem text="哈哈粉色的" color="item-color-pink" /></div>
	      </Slider>
	    );
	 }

});