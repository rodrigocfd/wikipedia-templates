import {RefObject, useEffect, useRef} from 'react';

type Focusable = HTMLButtonElement | HTMLInputElement | HTMLSelectElement;

/**
 * Wrapper to useRef which sets the default focus to element.
 */
function useRefFocusFirst<T extends Focusable>(): RefObject<T> {
	const ref = useRef<T>(null);
	useEffect(() => {
		ref && ref.current && ref.current.focus();
	}, [ref]);
	return ref;
}

export default useRefFocusFirst;
