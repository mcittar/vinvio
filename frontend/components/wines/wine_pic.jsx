import React from 'react';

const WinePic = ({ wine }) => {

	return(
		<div key={ wine }>
			<h3>{ wine.name }</h3>
		</div>
	)
}

export default WinePic