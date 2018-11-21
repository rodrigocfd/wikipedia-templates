import React, {FormEvent, FunctionComponent, useEffect, useState} from 'react';

interface DurationInputProps {
	name: string;
	value?: string;
	onChange?: (e: FormEvent<HTMLInputElement>) => void;
}

/**
 * Input box which formats minutes:seconds.
 */
const DurationInput: FunctionComponent<DurationInputProps> =
		({name, value, onChange}: DurationInputProps) => {
	const [duration, setDuration] = useState(value);

	useEffect(() => {
		if (onChange) {
			if (!duration.length) {
				onChange({
					target: {
						value: ''
					}
				});
			} else {
				let d = parseInt(duration);
				d = isNaN(d) ? 0 : d;
				let sec: number = d % 100;
				let min: number = (d - sec) / 100;
				let secStr: string = (sec < 10) ? '0' + sec : sec.toString();
				onChange({
					target: {
						value: `${min}:${sec}`
					}
				});
			}
		}
	}, [duration]);

	return (
		<input type="text" name={name} value={duration}
			onChange={e => setDuration(e.target.value)}/>
	);
};

export default DurationInput;
