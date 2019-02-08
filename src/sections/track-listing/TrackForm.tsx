import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {DeepReadonly} from 'ts-essentials';

import useLocale from '../../react-use-locale';
import Track from './Track';
import ShowFields from './ShowFields';
import Cell from './Cell';

interface Props {
	readonly index: number; // track position within containing array
	track: DeepReadonly<Track>;
	showFields: DeepReadonly<ShowFields>;
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
		<Cell w={20}>{p.index + 1}</Cell>
		<Cell w={160}><InputW type="text" value={p.track.title} ref={txt1} autoComplete="off"
			onChange={e => p.onChange({...p.track, title: e.target.value})}/></Cell>
		{p.showFields.notes &&
			<Cell w={120}><InputW type="text" value={p.track.note} autoComplete="off"
				onChange={e => p.onChange({...p.track, note: e.target.value})}/></Cell>
		}
		{p.showFields.writer &&
			<Cell w={180}><InputW type="text" value={p.track.writer} autoComplete="off"
				onChange={e => p.onChange({...p.track, writer:e.target.value})}/></Cell>
		}
		{p.showFields.lyrics &&
			<Cell w={180}><InputW type="text" value={p.track.lyrics} autoComplete="off"
				onChange={e => p.onChange({...p.track, lyrics: e.target.value})}/></Cell>
		}
		{p.showFields.music &&
			<Cell w={180}><InputW type="text" value={p.track.music} autoComplete="off"
				onChange={e => p.onChange({...p.track, music: e.target.value})}/></Cell>
		}
		<Cell w={70}><InputW type="number" value={p.track.duration} min={1} max={9999}
			onChange={e => p.onChange({...p.track, duration: e.target.value ? +e.target.value : ''})}/></Cell>
		<Cell>
			<ButtonSpaced onClick={() => p.onRemove && p.onRemove(p.index)}>&times; {t`Remove`}</ButtonSpaced>
			{p.index > 0 &&
				<ButtonSpaced onClick={() => p.onMoveUp && p.onMoveUp(p.index)}>&uarr; {t`Move up`}</ButtonSpaced>
			}
		</Cell>
	</>);
}

const InputW = styled.input`
	margin-left: 4px;
	width: 100%;
`;
const ButtonSpaced = styled.button`
	margin-left: 4px;
`;

export default TrackForm;
