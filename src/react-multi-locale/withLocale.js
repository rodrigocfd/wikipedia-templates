import React from 'react';

import LocaleContext from './LocaleContext';
import rawTranslate from './rawTranslate';

/**
 * HOC to inject translation into components.
 */
function withLocale(wildcard) {
	return function(WrappedComponent) {
		return class extends React.Component {
			render() {
				return (
					<LocaleContext.Consumer>
						{contextData =>
							<WrappedComponent
								t={(str, ...args) =>
									rawTranslate(contextData, wildcard, str, ...args)}
								localeInfo={contextData}
								{...this.props}
							/>
						}
					</LocaleContext.Consumer>
				);
			}
		};
	}
}

export default withLocale;
