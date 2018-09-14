import React from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import styled from 'styled-components';

import Intz from './Intz';

/**
 * Changes the current locale file.
 */
const ChangeLanguage = ({store}) => (
	<DivWrap>
		<DivTitle><Intz val="Language"/></DivTitle>
		<DivOpts>
			{['en', 'pt'].map(lang =>
				store.lang === lang ?
					<span key={lang}>{lang.toUpperCase()}</span> :
					<button key={lang} onClick={e => store.lang = lang}>
						{lang.toUpperCase()}
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
	& > button {
		cursor: pointer;
	}
`;

export default inject('store')(
	observer(ChangeLanguage)
);
