import log from '@/utils/LogUtils';
import { CF } from '@/utils/FunctionWrapper';

export default class ComponentInitializer {
    constructor(componentName) {
        this.componentName = componentName;
    }

    static init(componentName) {
        return {
            Log: log.getComponentLog(componentName),
            HOF: (func, functionName) => CF(func, functionName, componentName)
        }
    }
}