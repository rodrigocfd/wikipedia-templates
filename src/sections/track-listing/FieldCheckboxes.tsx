import React from 'react';
import {DeepReadonly} from 'ts-essentials';

import useLocale from '../../react-use-locale';
import Fields from './Fields';

interface Props {
	fields: DeepReadonly<Fields>;
	onChangeFields: (fields: Fields) => void;
}

/**
 * Checkboxes for the fields that can be shown/hidden.
 */
function FieldCheckboxes(p: Props) {
	const t = useLocale('*_TrackListing');

	return (<>
		<label><input type="checkbox" checked={p.fields.notes}
			onChange={e => p.onChangeFields({...p.fields, notes: e.target.checked})}/> {t`Note`}</label>
		<label><input type="checkbox" checked={p.fields.writer}
			onChange={e => p.onChangeFields({...p.fields, writer: e.target.checked})}/> {t`Writer`}</label>
		<label><input type="checkbox" checked={p.fields.lyrics}
			onChange={e => p.onChangeFields({...p.fields, lyrics: e.target.checked})}/> {t`Lyrics`}</label>
		<label><input type="checkbox" checked={p.fields.music}
			onChange={e => p.onChangeFields({...p.fields, music: e.target.checked})}/> {t`Music`}</label>
	</>);
}

export default FieldCheckboxes;
