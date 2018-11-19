import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import useLocale from '../react-use-locale';
import {langDescriptions} from '../locales';

/**
 * Changes the current locale file.
 */
function ChangeLanguage({dispatch}) {
	const [t, curLang] = useLocale('*');

	return (
		<DivWrap>
			<DivTitle>{t`Language`}</DivTitle>
			<DivOpts>
				{langDescriptions.map(langName =>
					curLang === langName.id ?
						<span key={langName.id}>{t(langName.name)}</span> :
						<button key={langName.id}
							onClick={() => dispatch({type: 'setLang', val: langName.id})}>
							{t(langName.name)}
						</button>
				)}
			</DivOpts>
		</DivWrap>
	);
}

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

export default connect()(ChangeLanguage);
