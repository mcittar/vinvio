import React from 'react';
import { isEmpty } from 'lodash';
import Carousel from '../carousel/carousel_container';

class WineIndex extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.getWines();
	}

	render() {
		let keys = Object.keys(this.props.wines);
		let wines;
		if (keys.length > 0) {
			wines = keys.map(key => {
				return <div key={ key }>{ this.props.wines[key].name }</div>
			})
		}

		return(
			<div>
				<Carousel />
			</div>
		)
	}

}

export default WineIndex