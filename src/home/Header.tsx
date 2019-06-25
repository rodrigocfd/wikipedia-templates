import React, {FC} from 'react';

import useStore from '../app/ContextStore';
import useLocale from '../app/useLocale';
import locales from './locales';

interface Props { }

const Header: FC<Props> = () => {
	const [store] = useStore();
	const t = useLocale(store.lang, locales);

	return (
		<div>
			{t`Wikipedia Templates`}
		</div>
	);
};

export default Header;
