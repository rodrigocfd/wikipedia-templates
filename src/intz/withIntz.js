import React from 'react';

import IntzContext from './IntzContext';
import translateStr from './translateStr';

/**
 * HOC to inject translation into components.
 */
function withIntz(opts) {
	return function(WrappedComponent) {
		return class extends React.Component {
			render() {
				return (
					<IntzContext.Consumer>
						{contextData =>
							<WrappedComponent
								t={(str, ...args) =>
									translateStr(contextData, str, ...args)}
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
