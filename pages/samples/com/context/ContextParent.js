import ComponentInitializer from "@/utils/ComponentInitializer"
import Layout from "@/components/com/Layout"
import CustomLink from "@/components/com/CustomLink";
import React, { useState } from 'react';
import ContextChild from "./ContextChild";

const { HOF } = ComponentInitializer.init('ContextParent');

// Context에 사용할 초기 데이터. 미리 데이터구조를 잡아놔야 SSR 렌더링시 정상 동작한다.
const initContextData = {
    name: 'SeongHeon',
    age: '20'
};

// 하위 컴포넌트에 공유할 context 생성
export const SampleContext = React.createContext([initContextData, () => {}, {}]);

export default HOF(() => {
    // 데이터 변경시 자동으로 화면 렌더링이 되게하기 위해 state 로 정의한다.
    const [ data, setData ] = useState(initContextData);

    // 하위 컴포넌트와 공통으로 사용할 함수를 정의 (필요없으면 생각해도 됨)
    const contextFunc = {
        sampleContextFunction: HOF(() => {
            window.alert(`${data.name} age is ${data.age}`);

        }, 'sampleContextFunction')
    };


    return (
        <Layout name={'default'}>
            <h1>Context 셈플 페이지</h1>
            <h2>Context는 하위 컴포넌트와 데이터를 편하게 공유하기 위해 사용된다.</h2>

            <label>상위 컴포넌트 name: <input type="text" value={data.name} onChange={(e) => setData({...data, name: e.target.value})} /></label>
            <br/>
            <label>상위 컴포넌트 age: <input type="text" value={data.age} onChange={(e) => setData({...data, age: e.target.value})} /></label>
            
            <br/><br/>
            <SampleContext.Provider value={[data, setData, contextFunc]}>
                <ContextChild />
            </SampleContext.Provider>
            
            <br/><br/><br/>
            <CustomLink href="/samples/SampleMain">Sample Main 화면으로...</CustomLink>
        </Layout>
    )
});