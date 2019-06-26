import React, {FC} from 'react';

import useStore from '../app/ContextStore';
import genLocaleFunc from '../app/genLocaleFunc';
import locales from './locales';

interface Props { }

const Header: FC<Props> = () => {
	const [store] = useStore();
	const t = genLocaleFunc(store.lang, locales);

	return (
		<div>
			{t`Wikipedia Templates`}
		</div>
	);
};

export default Header;
