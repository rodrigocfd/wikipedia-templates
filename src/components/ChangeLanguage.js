import React from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import styled from 'styled-components';

import Txt from './Txt';

/**
 * Changes the current locale file.
 */
const ChangeLanguage = ({store}) => (
	<div>
		<DivTitle><Txt val="Language"/></DivTitle>
		<DivOpts>
			{['en', 'pt'].map((lang) =>
				store.locale === lang ?
					<span key={lang}>{lang.toUpperCase()}</span> :
					<button key={lang} onClick={e => store.locale = lang}>
						{lang.toUpperCase()}
					</button>
			)}
		</DivOpts>
	</div>
);

ChangeLanguage.propTypes = {
	store: PropTypes.any.isRequired
};

const DivTitle = styled.div`
	display: inline-block;
	width: 100px;
`;
const DivOpts = styled.div`
	display: inline-block;
	border: 1px solid #ccc;
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
