import React, {FC} from 'react'
import styled from 'styled-components';

import useStore from '../app/ContextStore';
import genLocaleFunc, {LocaleList} from '../app/genLocaleFunc';
import TextAreaOut from '../app/TextAreaOut';

const Output: FC = () => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, locales);
	const tl = store.trackListing;

	const out = '{{' + t`Track listing` + '\n'
		+ '}}';

	return (
		<TextAreaTrackListing value={out} />
	);
};

const TextAreaTrackListing = styled(TextAreaOut)`
	width: 900px;
	height: 200px;
	margin-top: 20px;
`;

const locales: LocaleList = {
	en: {
		'Track listing': 'Track listing'
	},
	pt: {
		'Track listing': 'Lista de faixas'
	}
};

export default Output;
