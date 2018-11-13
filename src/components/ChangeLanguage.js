import React from 'react';
import {inject as mobxInject, observer as mobxObserver} from 'mobx-react';
import styled from 'styled-components';

import {withLocale} from '../react-multi-locale';
import {langs} from '../locales';

/**
 * Changes the current locale file.
 */
function ChangeLanguage({store, t, localeInfo}) {
	return (
		<DivWrap>
			<DivTitle>{t`Language`}</DivTitle>
			<DivOpts>
				{langs.map(lang =>
					localeInfo.curLang === lang.id ?
						<span key={lang.id}>{t(lang.name)}</span> :
						<button key={lang.id} onClick={() => store.lang = lang.id}>
							{t(lang.name)}
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

export default mobxInject('store')(
	mobxObserver(
		withLocale('*')(ChangeLanguage)
	)
);
