import React, {FunctionComponent} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import useLocale from '../react-use-locale';
import {mapDispatchToProps, ReduxStateDispatch} from '../store';
import {langDescriptions} from '../locales';

interface ChangeLanguageProps { }

type ChangeLanguagePropsAll = ChangeLanguageProps & ReduxStateDispatch;

/**
 * Changes the current locale file.
 */
const ChangeLanguage: FunctionComponent<ChangeLanguagePropsAll> =
		({lang, dispatch}: ChangeLanguagePropsAll) => {
	const t = useLocale('*');

	return (
		<DivWrap>
			<DivTitle>{t`Language`}</DivTitle>
			<DivOpts>
				{langDescriptions.map(langDescr =>
					lang === langDescr.id ?
						<span key={langDescr.id}>{t(langDescr.name)}</span> :
						<button key={langDescr.id}
							onClick={() => dispatch({type: 'setLang', val: langDescr.id})}>
							{t(langDescr.name)}
						</button>
				)}
			</DivOpts>
		</DivWrap>
	);
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

export default connect(
	(state: ChangeLanguagePropsAll) => ({lang: state.lang}),
	mapDispatchToProps
)(ChangeLanguage);
