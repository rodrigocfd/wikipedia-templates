import React, {memo} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import useLocale from '../react-use-locale';
import {DispatchProp, mapDispatchToProps, ReduxState} from '../store';
import {langDescriptions, LangDescription} from '../locales';

interface Props {
	readonly lang: string;
}

/**
 * Changes the current locale file.
 */
const ChangeLanguage = memo<Props & DispatchProp>(p => {
	const t = useLocale('*');

	return (
		<DivWrap>
			<DivTitle>{t`Language`}</DivTitle>
			<DivOpts>
				{langDescriptions.map((langDescr: LangDescription) =>
					p.lang === langDescr.id ?
						<span key={langDescr.id}>{t(langDescr.name)}</span> :
						<button key={langDescr.id}
							onClick={() => p.dispatchNow('setLang', langDescr.id)}>
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

export default connect<Props, DispatchProp, {}, ReduxState>(
	({lang}: ReduxState) => ({lang}),
	mapDispatchToProps
)(ChangeLanguage);
