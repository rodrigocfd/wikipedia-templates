import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {DeepReadonly} from 'ts-essentials';

import useLocale from '../../react-use-locale';
import Track from './Track';

interface Props {
	readonly index: number; // track position within containing array
	track: DeepReadonly<Track>;
	onRemove: (index: number) => void;
	onMoveUp: (index: number) => void;
	onChange: (track: Track) => void;
}

/**
 * One single track, with many fields.
 */
function TrackForm(p: Props) {
	const t = useLocale('*_TrackListing');
	const txt1 = useRef<HTMLInputElement>(null);

	useEffect(() => {
		txt1 && txt1.current && txt1.current.focus();
	}, [txt1]);

	return (<>
		<DivBox>{p.index + 1}</DivBox>
		<DivBox><input type="text" value={p.track.title} ref={txt1} autoComplete="off"
			onChange={e => p.onChange({...p.track, title: e.target.value})}/></DivBox>
		<DivBox><input type="text" value={p.track.note} autoComplete="off"
			onChange={e => p.onChange({...p.track, note: e.target.value})}/></DivBox>
		<DivBox><input type="text" value={p.track.writer} autoComplete="off"
			onChange={e => p.onChange({...p.track, writer:e.target.value})}/></DivBox>
		<DivBox><input type="text" value={p.track.lyrics} autoComplete="off"
			onChange={e => p.onChange({...p.track, lyrics: e.target.value})}/></DivBox>
		<DivBox><input type="text" value={p.track.music} autoComplete="off"
			onChange={e => p.onChange({...p.track, music: e.target.value})}/></DivBox>
		<DivBox><input type="number" value={p.track.duration} min={1} max={9999}
			onChange={e => p.onChange({...p.track, duration: e.target.value ? +e.target.value : ''})}/></DivBox>
		<DivBox>
			<ButtonSpaced onClick={() => p.onRemove && p.onRemove(p.index)}>&times; {t`Remove`}</ButtonSpaced>
			{p.index > 0 &&
				<ButtonSpaced onClick={() => p.onMoveUp && p.onMoveUp(p.index)}>&uarr; {t`Move up`}</ButtonSpaced>
			}
		</DivBox>
	</>);
}

const DivBox = styled.div`
	margin-right: 6px;
	padding: 2px;
	& > input {
		margin-left: 4px;
		width: 100%;
	}
`;
const ButtonSpaced = styled.button`
	margin-left: 4px;
`;

export default TrackForm;
