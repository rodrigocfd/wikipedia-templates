import React from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import styled from 'styled-components';

import Intz, {Meta as IntzMeta} from '../intz';

/**
 * Changes the current locale file.
 */
const ChangeLanguage = ({store}) => (
	<DivWrap>
		<DivTitle><Intz str="Language"/></DivTitle>
		<DivOpts>
			<IntzMeta>
				{meta => Object.entries(meta.locales).map(([localeKey, _]) =>
					meta.curLang === localeKey ?
						<span key={localeKey}>{localeKey.toUpperCase()}</span> :
						<button key={localeKey} onClick={e => store.lang = localeKey}>
							{localeKey.toUpperCase()}
						</button>
				)}
			</IntzMeta>
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
	observer(ChangeLanguage)
);
