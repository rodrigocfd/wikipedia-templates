import React, {memo, useEffect, useRef} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import DeepReadonly from '../../DeepReadonly';
import InlineRadio from '../InlineRadio';
import YearMonthDay from '../YearMonthDay';
import Cite from './Cite';

interface Props {
	cite: DeepReadonly<Cite>;
	onChange?: (cite: Cite) => void;
}

/**
 * Form with all the fields; receives data and notifies changes.
 */
const Form = memo<Props>(p => {
	const t = useLocale('*_CiteWeb');
	const txt1 = useRef<HTMLInputElement>(null);

	useEffect(() => {
		txt1 && txt1.current && txt1.current.focus();
	}, [txt1]);

	return (
		<div>
			<div>
				<DivName>{t`Ref name`}</DivName>
				<input type="text" size={18} value={p.cite.refName} autoComplete="off" ref={txt1}
					onChange={e => p.onChange && p.onChange({...p.cite, refName: e.target.value})}/>
			</div>
			<div>
				<DivName>{t`URL`}</DivName>
				<input type="text" size={100} value={p.cite.url} autoComplete="off"
					onChange={e => p.onChange && p.onChange({...p.cite, url: e.target.value})}/>
			</div>
			<div>
				<DivName>{t`Title`}</DivName>
				<input type="text" size={88} value={p.cite.title} autoComplete="off"
					onChange={e => p.onChange && p.onChange({...p.cite, title: e.target.value})}/>
			</div>
			<div>
				<DivName>{t`Translated title`}</DivName>
				<input type="text" size={88} value={p.cite.transTitle} autoComplete="off"
					onChange={e => p.onChange && p.onChange({...p.cite, transTitle: e.target.value})}/>
			</div>
			<div>
				<DivName>{t`Publisher`}</DivName>
				<input type="text" size={88} value={p.cite.publisher} autoComplete="off"
					onChange={e => p.onChange && p.onChange({...p.cite, publisher: e.target.value})}/>
			</div>
			<div>
				<DivName>{t`Date`}</DivName>
				<YearMonthDay value={p.cite.date}
					onChange={val => p.onChange && p.onChange({...p.cite, date: val})}/>
			</div>
			<div>
				<DivName>{t`Access date`}</DivName>
				<YearMonthDay value={p.cite.accessDate}
					onChange={val => p.onChange && p.onChange({...p.cite, accessDate: val})}/>
			</div>
			<div>
				<DivName>{t`Language`}</DivName>
				<InlineRadio locale="*_CiteWeb" name="language" value={p.cite.language}
					onChange={val => p.onChange && p.onChange({...p.cite, language: val})}
					options={['', 'en', 'es', 'fr', 'de', 'it', 'pt']}
					labels={['none', 'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese']}/>
			</div>
		</div>
	);
});

const DivName = styled.div`
	display: inline-block;
	width: 150px;
	padding: 6px 0;
`;

export default Form;
