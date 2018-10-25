import React from 'react';

import IntzContext from './IntzContext';
import translateStr from './translateStr';

/**
 * HOC to inject translation into components.
 */
function withIntz(customLocale) {
	return function(WrappedComponent) {
		return class extends React.Component {
			render() {
				return (
					<IntzContext.Consumer>
						{contextData =>
							<WrappedComponent
								t={(str, ...args) =>
									translateStr(contextData, customLocale, str, ...args)}
								intzInfo={contextData}
								{...this.props}
							/>
						}
					</IntzContext.Consumer>
				);
			}
		};
	}
}

export default withIntz;
