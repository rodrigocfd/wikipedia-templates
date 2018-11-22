import React, {FunctionComponent, useEffect, useState} from 'react';

interface Props {
	name?: string;
	value?: string;
	onChange?: (duration: string) => void;
}

/**
 * Input box which formats minutes:seconds.
 */
const DurationInput: FunctionComponent<Props> =
		({name, value, onChange}: Props) => {
	const [duration, setDuration] = useState(value);

	useEffect(() => {
		if (onChange) {
			if (!duration || !duration.length) {
				onChange('');
			} else {
				let d = parseInt(duration);
				d = isNaN(d) ? 0 : d;
				let sec: number = d % 100;
				let min: number = (d - sec) / 100;
				let secStr: string = (sec < 10) ? '0' + sec : sec.toString();
				onChange(`${min}:${sec}`);
			}
		}
	}, [duration]);

	return (
		<input type="text" name={name} value={duration}
			onChange={e => setDuration(e.target.value)}
			autoComplete="off"/>
	);
};

export default DurationInput;
