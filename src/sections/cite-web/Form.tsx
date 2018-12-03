import React, {FunctionComponent, useEffect, useRef} from 'react';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import InlineRadio from '../InlineRadio';
import YearMonthDay from './YearMonthDay';
import Cite from './Cite';

interface Props {
	cite: Cite;
	onChange?: (cite: Cite) => void;
}

/**
 * Form with all the fields; receives data and notifies changes.
 */
const Form: FunctionComponent<Props> =
		({cite, onChange}: Props) => {

	const t = useLocale('*_CiteWeb');
	const txt1 = useRef<HTMLInputElement>(null);

	useEffect(() => {
		txt1 && txt1.current && txt1.current.focus();
	}, [txt1]);

	return (
		<div>
			<div>
				<DivName>{t`Ref name`}</DivName>
				<input type="text" size={18} value={cite.refName} autoComplete="off" ref={txt1}
					onChange={e => onChange && onChange({...cite, refName: e.target.value})}/>
			</div>
			<div>
				<DivName>{t`URL`}</DivName>
				<input type="text" size={100} value={cite.url} autoComplete="off"
					onChange={e => onChange && onChange({...cite, url: e.target.value})}/>
			</div>
			<div>
				<DivName>{t`Title`}</DivName>
				<input type="text" size={88} value={cite.title} autoComplete="off"
					onChange={e => onChange && onChange({...cite, title: e.target.value})}/>
			</div>
			<div>
				<DivName>{t`Publisher`}</DivName>
				<input type="text" size={88} value={cite.publisher} autoComplete="off"
					onChange={e => onChange && onChange({...cite, publisher: e.target.value})}/>
			</div>
			<div>
				<DivName>{t`Date`}</DivName>
				<YearMonthDay value={cite.date}
					onChange={val => onChange && onChange({...cite, date: val})}/>
			</div>
			<div>
				<DivName>{t`Access date`}</DivName>
				<YearMonthDay value={cite.accessDate}
					onChange={val => onChange && onChange({...cite, accessDate: val})}/>
			</div>
			<div>
				<DivName>{t`Language`}</DivName>
				<InlineRadio locale="*_CiteWeb" name="language" value={cite.language}
					onChange={val => onChange && onChange({...cite, language: val})}
					options={['', 'en', 'es', 'fr', 'de', 'pt']}
					labels={['none', 'English', 'Spanish', 'French', 'German', 'Portuguese']}/>
			</div>
		</div>
	);
};

const DivName = styled.div`
	display: inline-block;
	width: 150px;
	padding: 6px 0;
`;

export default Form;
