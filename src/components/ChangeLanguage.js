import React from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import styled from 'styled-components';

import withIntz from '../intz';

/**
 * Changes the current locale file.
 */
const ChangeLanguage = ({store, t, intzInfo}) => (
	<DivWrap>
		<DivTitle>{t`Language`}</DivTitle>
		<DivOpts>
			{Object.entries(intzInfo.locales).map(([localeLang, _]) =>
				intzInfo.curLang === localeLang ?
					<span key={localeLang}>{localeLang.toUpperCase()}</span> :
					<button key={localeLang} onClick={e => store.lang = localeLang}>
						{localeLang.toUpperCase()}
					</button>
			)}
		</DivOpts>
	</DivWrap>
);

ChangeLanguage.propTypes = {
	store: PropTypes.any.isRequired
};

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

export default inject('store')(
	observer(
		withIntz()(ChangeLanguage)
	)
);
