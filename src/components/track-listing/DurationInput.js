import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

/**
 * Input box which formats minutes:seconds.
 */
function DurationInput({name, value, onChange}) {
	const [duration, setDuration] = useState(value);

	useEffect(() => {
		if (onChange) {
			let d = parseInt(duration);
			d = isNaN(d) ? 0 : d;
			let sec = d % 100;
			let min = (d - sec) / 100;
			sec = sec < 10 ? '0' + sec : sec;
			onChange({
				target: {
					value: `${min}:${sec}`
				}
			});
		}
	}, [duration]);

	return (
		<input type="text" name={name} value={duration}
			onChange={e => setDuration(e.target.value)}/>
	);
}

DurationInput.propTypes = {
	name: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func
};

export default DurationInput;
