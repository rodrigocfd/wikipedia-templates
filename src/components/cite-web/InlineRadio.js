import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import Txt from '../Txt';

/**
 * Prints a series of radio buttons, inline.
 */
const InlineRadio = ({name, onChange, values, labels}) => (
	<Fragment>
		{values.map((value, i) => (
			<label key={i}><input type="radio"
				name={name} value={value}
				defaultChecked={i === 0}
				onChange={onChange}/> <Txt val={labels[i]}/></label>
		))}
	</Fragment>
);

InlineRadio.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	values: PropTypes.arrayOf(PropTypes.string).isRequired,
	labels: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default InlineRadio;
