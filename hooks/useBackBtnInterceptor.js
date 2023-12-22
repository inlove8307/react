import { useEffect } from 'react';
import ComponentInitializer from "@/utils/ComponentInitializer";
import useCore from './useCore';

import _ from 'lodash';

const { HOF } = ComponentInitializer.init('useBackBtnInterceptor');

export default HOF((func) => {
    const core = useCore();

    useEffect(HOF(() => {
        if (typeof func === 'function') {
            core.setGoBackFunction(func);

        } else {
            core.setGoBackFunction(() => {
                core.goMain();
            });

        }
        
        return () => {
            core.setGoBackFunction(null);
        }
    }, 'useEffect'), []);
})
