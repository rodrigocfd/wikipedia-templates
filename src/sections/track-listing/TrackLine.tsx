import React, {memo, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import DeepReadonly from '../../DeepReadonly';
import Track from './Track';

interface Props {
	readonly index: number; // track position within containing array
	track: DeepReadonly<Track>;
	onRemove?: (index: number) => void;
	onMoveUp?: (index: number) => void;
	onChange?: (track: Track) => void;
}

/**
 * One single track, with many fields.
 */
const TrackLine = memo<Props>(p => {
	const t = useLocale('*_TrackListing');
	const txt1 = useRef<HTMLInputElement>(null);

	const [tra, setTra] = useState(p.track);

	useEffect(() => {
		txt1 && txt1.current && txt1.current.focus();
	}, [txt1]);

	useEffect(() => {
		p.onChange && p.onChange(tra);
	}, [tra]);

	function setDuration(val?: string) {
		setTra({...tra, duration: val ? +val : ''});
	}

	return (<>
		<DivBox>{p.index + 1}</DivBox>
		<DivBox><input type="text" value={tra.title} ref={txt1} autoComplete="off"
			onChange={e => setTra({...tra, title: e.target.value})}/></DivBox>
		<DivBox><input type="text" value={tra.note} autoComplete="off"
			onChange={e => setTra({...tra, note: e.target.value})}/></DivBox>
		<DivBox><input type="text" value={tra.writer} autoComplete="off"
			onChange={e => setTra({...tra, writer:e.target.value})}/></DivBox>
		<DivBox><input type="text" value={tra.lyrics} autoComplete="off"
			onChange={e => setTra({...tra, lyrics: e.target.value})}/></DivBox>
		<DivBox><input type="text" value={tra.music} autoComplete="off"
			onChange={e => setTra({...tra, music: e.target.value})}/></DivBox>
		<DivBox><input type="number" value={tra.duration} min={1} max={9999}
			onChange={e => setDuration(e.target.value)}/></DivBox>
		<DivBox>
			<ButtonSpaced onClick={() => p.onRemove && p.onRemove(p.index)}>&times; {t`Remove`}</ButtonSpaced>
			{p.index > 0 &&
				<ButtonSpaced onClick={() => p.onMoveUp && p.onMoveUp(p.index)}>&uarr; {t`Move up`}</ButtonSpaced>
			}
		</DivBox>
	</>);
});

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

export default TrackLine;
