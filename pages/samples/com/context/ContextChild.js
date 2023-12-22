import ComponentInitializer from "@/utils/ComponentInitializer"
import { useContext } from 'react';
import { SampleContext } from "./ContextParent";
import { useTextContextBind } from "@/hooks/useDataBind";

const { HOF } = ComponentInitializer.init('ContextChild');

export default HOF(() => {
    const context = useContext(SampleContext);
    const [ data, setData, contextFunc ] = context;

    // input text 의 경우 hook을 이용해 context 데이터를 바인딩 할 수 있다.
    const contextBindData = useTextContextBind(context, 'age');
    
    return (
        <div style={{border: '1px solid black'}}>
            <h2>여기부터는 하위 컴포넌트</h2>
            <label>하위 컴포넌트 name: <input type="text" value={data.name} onChange={(e) => setData({...data, name: e.target.value})} /></label>
            <br/>
            <label>하위 컴포넌트 age: <input type="text" {...contextBindData.attr} /></label>
            <br/>
            <button onClick={() => contextFunc.sampleContextFunction()}>상위에서 전달된 함수 호출</button>
        </div>
    )
});