import React, {FC} from 'react';

import useStore from '../app/ContextStore';
import useLocale from '../app/useLocale';
import locales from './locales';

interface Props { }

const CiteWeb: FC<Props> = () => {
	const [store] = useStore();
	const t = useLocale(store.lang, locales);

	return (
		<div>
			{t`Cite web`}
		</div>
	);
};

export default CiteWeb;
