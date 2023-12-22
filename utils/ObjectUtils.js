/**
 * Object 데이터의 하위 계층까지의 데이터를 문자열 경로로 뽑아낸다.
 * 
 * @param obj Object 데이터 
 * @param path 계층구조 경로. 점을 이용해 하위 계층까지 접근한다. ex) info.name.value
 */
export function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, segment) => {
        return acc && acc[segment];
    }, obj);
}

/**
 * Object 데이터의 하위 계층까지의 데이터를 문자열 경로로 셋팅한다.
 * 
 * @param obj Object 데이터 
 * @param path 계층구조 경로. 점을 이용해 하위 계층까지 접근한다. ex) info.name.value
 * @param value 셋팅할 값
 */
export function setNestedValue(obj, path, value) {
    const segments = path.split('.');
    const lastSegment = segments.pop();

    const target = segments.reduce((acc, segment) => {
        if (!acc[segment]) acc[segment] = {};
        return acc[segment];
    }, obj);

    target[lastSegment] = value;
}