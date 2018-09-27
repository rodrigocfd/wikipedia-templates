import React from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import styled from 'styled-components';

import Intz, {IntzMeta} from './Intz';

/**
 * Changes the current locale file.
 */
const ChangeLanguage = ({store}) => (
	<DivWrap>
		<DivTitle><Intz str="Language"/></DivTitle>
		<DivOpts>
			<IntzMeta>
				{meta => Object.entries(meta.locales).map(([localeKey, _]) =>
					meta.lang === localeKey ?
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
	& > button {
		cursor: pointer;
	}
`;

export default inject('store')(
	observer(ChangeLanguage)
);
