import React from 'react';

import {newContextData} from './model';

/**
 * Context API object, for internal communication between provider and HOC.
 */
const LocaleContext = React.createContext(newContextData());

export default LocaleContext;
