import LogUtils from "./LogUtils";

const setErrorCustomMessage = function (error, componentName, funcionName) {
    if (typeof error?.customMessage !== 'string') {
        if (funcionName) {
            error.customMessage = `[${componentName}] [${funcionName}]`;
        } else {
            error.customMessage = `[${componentName}]`;
        }
    }

    LogUtils.printErrorLog(error);
};

// Component Function Wrapper
export const CF = function (func, funcionName, componentName) {
    return function () {
        const self = this;
        try {
            if (func.constructor.name === 'AsyncFunction') {
                
                const promise = func.apply(self, arguments);

                promise.catch(error => {
                    if (typeof error === 'object') {
                        setErrorCustomMessage(error, componentName, funcionName);
                    }
                });

                return promise;

            } else {
                const result = func.apply(self, arguments);

                // result 객체가 Promise 일경우 async 함수로 간주하고 위와 동일한 catch 구문을 추가.
                if (result instanceof Promise) {
                    result.catch(error => {
                        if (typeof error === 'object') {
                            setErrorCustomMessage(error, componentName, funcionName);
                        }
                    });
                }

                return result;
            }

        } catch (error) {
            setErrorCustomMessage(error, componentName, funcionName)
            throw error;
        }
    };
}

// Utils Function Wrapper
export const UF = function (data, utilId, functionName) {
    // object 유형일경후 object 안에 정의된 utilId 필드를 체크 후 정의된 함수를 모두 자동 랩핑 처리한다.
    if (typeof data === 'object') {
        if (!data.utilId) {
            throw new Error(`Required utilId Field: utilId[${data.utilId}]`)
        }

        for (let key in data) {
            if (typeof data[key] === 'function') {
                const wrappFunc = CF(data[key], key);
                data[key] = wrappFunc.bind({ '$options': { 'name': data.utilId } });
            }
        }

        return data;

    }

    // function 유형일경우 랩핑된 함수를 리턴한다.
    else if (typeof data === 'function') {
        if (!utilId || !functionName) {
            throw new Error(`Required utilId and functionName parameters: utilId[${utilId}], functionName[${functionName}]`)
        }

        return CF(data, functionName).bind({ '$options': { 'name': utilId } });
    }

    // 지원하지 않는 유형일 경우 오류를 발생
    else {
        throw new Error('functionWrapper.UF Supported only object and function type.....');
    }
}