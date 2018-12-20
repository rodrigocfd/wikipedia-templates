import React, {memo, useEffect} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import useLocale from '../../react-use-locale';
import {DispatchProps, mapDispatchToProps, State} from '../../store';
import SectionFooter from '../SectionFooter';
import Form from './Form';
import Output from './Output';
import Album, {newAlbum} from './Album';

interface StateProps {
	album: Album;
}

interface Props extends StateProps, DispatchProps { }

/**
 * Main component for app route: infobox-album.
 */
const InfoboxAlbum = memo<Props>(({album, dispatchNow}) => {
	const t = useLocale('*_InfoboxAlbum');

	useEffect(() => {
		document.title = t`Infobox album` + ' - ' + t`Wikipedia Templates`;
	}, [t]);

	return (
		<div>
			<h2>{t`Infobox album`}</h2>
			<DivGridWrap>
				<Form album={album} onChange={al => dispatchNow('setAlbum', al)}/>
				<Output album={album}/>
			</DivGridWrap>
			<SectionFooter onClear={() => dispatchNow('setAlbum', newAlbum())}/>
		</div>
	);
});

const DivGridWrap = styled.div`
	display: grid;
	grid-template-columns: 600px auto;
`;

export default connect<StateProps, DispatchProps, {}, State>(
	({album}: State) => ({album}),
	mapDispatchToProps
)(InfoboxAlbum);
