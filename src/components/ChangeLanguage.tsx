import React, {FunctionComponent} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import useLocale from '../react-use-locale';
import {mapDispatchToProps, StateProps, DispatchProps} from '../store';
import {langDescriptions} from '../locales';

interface Props { }

type PropsAll = Props & StateProps & DispatchProps;

/**
 * Changes the current locale file.
 */
const ChangeLanguage: FunctionComponent<PropsAll> =
		({lang, dispatchNow}: PropsAll) => {
	const t = useLocale('*');

	return (
		<DivWrap>
			<DivTitle>{t`Language`}</DivTitle>
			<DivOpts>
				{langDescriptions.map(langDescr =>
					lang === langDescr.id ?
						<span key={langDescr.id}>{t(langDescr.name)}</span> :
						<button key={langDescr.id}
							onClick={() => dispatchNow('setLang', langDescr.id)}>
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
	({lang}: StateProps, {}: Props) => ({lang}),
	mapDispatchToProps
)(ChangeLanguage);
