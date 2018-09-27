import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Intz from '../Intz';

/**
 * Prints a series of radio buttons, inline.
 */
const InlineRadio = ({name, onChange, values, labels}) => (
	<Fragment>
		{values.map((value, i) => (
			<LabelHand key={i}><InputRadioHand type="radio"
				name={name} value={value}
				defaultChecked={i === 0}
				onChange={onChange}/> <Intz str={labels[i]}/></LabelHand>
		))}
	</Fragment>
);

InlineRadio.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	values: PropTypes.arrayOf(PropTypes.string).isRequired,
	labels: PropTypes.arrayOf(PropTypes.string).isRequired
};

const LabelHand = styled.label`
	cursor: pointer;
	margin-right: 8px;
`;
const InputRadioHand = styled.input`
	cursor: pointer;
`;

export default InlineRadio;
