import { connect } from 'react-redux';
import { getWines } from '../../actions/wine_actions';
import WineIndex from './wine_index';

const mapStateToProps = state => {

	return ({
	  wines: state.wines
	});
}

const mapDispatchToProps = dispatch => ({
  getWines: () => dispatch(getWines())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WineIndex);