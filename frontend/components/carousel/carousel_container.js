import { connect } from 'react-redux';
import { getWines } from '../../actions/wine_actions';
import Carousel from './carousel';

const mapStateToProps = state => {
	return({ wines: state.wines });
};

const mapDispatchToProps = dispatch => ({
	getWines: () => dispatch(getWines())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Carousel);