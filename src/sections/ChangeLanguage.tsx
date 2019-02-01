import React, {memo, useContext} from 'react';
import styled from 'styled-components';

import useLocale from '../react-use-locale';
import StoreContext from '../StoreContext';
import {langDescriptions, LangDescription} from '../locales';

interface Props { }

/**
 * Changes the current locale file.
 */
const ChangeLanguage = memo<Props>(p => {
	const [store, setStore] = useContext(StoreContext);
	const t = useLocale('*');

	return (
		<DivWrap>
			<DivTitle>{t`Language`}</DivTitle>
			<DivOpts>
				{langDescriptions.map((langDescr: LangDescription) =>
					store.lang === langDescr.id ?
						<span key={langDescr.id}>{t(langDescr.name)}</span> :
						<button key={langDescr.id}
							onClick={() => setStore({...store, lang: langDescr.id})}>
							{t(langDescr.name)}
						</button>
				)}
			</DivOpts>
		</DivWrap>
	);
});

const DivWrap = styled.div`
	padding-top: 14px;
`;
const DivTitle = styled.div`
	display: inline-block;
`;
const DivOpts = styled.div`
	display: inline-block;
	border: 1px solid #ccc;
	margin-left: 10px;
	padding: 3px;
	& > span, & > button {
		margin: 0 5px;
	}
`;

export default ChangeLanguage;
