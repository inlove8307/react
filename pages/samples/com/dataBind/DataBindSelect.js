import CustomLink from "@/components/com/CustomLink";
import Layout from "@/components/com/Layout";
import ComponentInitializer from "@/utils/ComponentInitializer";
import { useState } from "react";
import { useSelectBind } from "@/hooks/useDataBind";

const { HOF } = ComponentInitializer.init('DataBindSelect');

const divStyle = {
    border: '1px solid black',
    padding: '10px 10px'
}

export default HOF(() => {
    // 일반적인 state 이용
    const [ nomalValue, setNomalValue ] = useState('A');

    // hook 을 이용
    const hookValue = useSelectBind('A');
    
    return (
        <Layout>
            <h1>select 에 양방향 데이터 바인딩 셈플</h1>
            <div style={divStyle}>
                <h2>일반적인 select 양방향 바인드</h2>
                <select value={nomalValue} onChange={(e) => setNomalValue(e.target.value)}>
                    <option value="A">가나</option>
                    <option value="B">다라</option>
                    <option value="C">마바</option>
                </select>
                <br/>
                <p>selected value: {nomalValue}</p>
            </div>

            <br/><br/>

            <div style={divStyle}>
                <h2>hook을 이용한 select 양방향 바인드</h2>
                <select {...hookValue.attr}>
                    <option value="A">가나</option>
                    <option value="B">다라</option>
                    <option value="C">마바</option>
                </select>
                <br/>
                <p>selected value: {hookValue.attr.value}</p>
                <button onClick={() => hookValue.event.setValue('C')}>스크립트를 이용해 강제로 C 선택</button><br/>
                <button onClick={() => hookValue.event.reset()}>초기 설정값으로 리셋</button>
            </div>

            <br/><br/>
            <CustomLink href="/samples/com/dataBind/DataBindMain">데이터 바인딩 셈플 메인 화면으로...</CustomLink>
        </Layout>
    )
});