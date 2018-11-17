import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';

/**
 * Prints a series of radio buttons, inline.
 */
function InlineRadio({name, value, options, labels, onChange}) {
	const [t] = useLocale('*_CiteWeb');

	return (
		<Fragment>
			{options.map((opt, i) => (
				<LabelHand key={i}><InputHand type="radio"
					name={name} value={opt}
					checked={opt === value}
					onChange={onChange}/> {t(labels[i])}</LabelHand>
			))}
		</Fragment>
	);
}

InlineRadio.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
	labels: PropTypes.arrayOf(PropTypes.string).isRequired,
	onChange: PropTypes.func,
};

const LabelHand = styled.label`
	cursor: pointer;
	margin-right: 8px;
`;
const InputHand = styled.input`
	cursor: pointer;
`;

export default InlineRadio;
