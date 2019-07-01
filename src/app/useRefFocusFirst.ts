import React from 'react';

type Focusable = HTMLButtonElement | HTMLInputElement | HTMLSelectElement;

/**
 * Wrapper to useRef which sets the default focus to element.
 */
function useRefFocusFirst<T extends Focusable>(): React.RefObject<T> {
	const ref = React.useRef<T>(null);
	React.useEffect(() => {
		ref && ref.current && ref.current.focus();
	}, [ref]);
	return ref;
}

export default useRefFocusFirst;
