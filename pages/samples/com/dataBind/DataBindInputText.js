import CustomLink from "@/components/com/CustomLink";
import Layout from "@/components/com/Layout";
import ComponentInitializer from "@/utils/ComponentInitializer";
import { useState } from "react";
import { useTextStateBind, useTextValueBind } from "@/hooks/useDataBind";
import CustomInput from "@/components/com/CustomInput";
import CustomButton from "@/components/com/CustomButton";

const { HOF } = ComponentInitializer.init('DataBindInputText');

const inputTextStyle = {
    width: '100%'
};

export default HOF(() => {
    // 기본적인 양방향 바인드용 데이터
    const [ basicValue, setBasicValue ] = useState('기본적인 양방향 바인드 셈플');

    // hook을 이용한 양방향 바인드용 데이터
    const hookData = useTextValueBind('hook을 이용한 양방향 바인드 셈플');
    const initHookData = HOF(() => {    // hookData 초기 값으로 셋팅
        hookData.event.reset();

    }, 'initHookData');

    // 이미 정의해놓은 데이터(state)의 특정 필드를 바인딩 하는 hook
    const [ state, setState ] = useState({
        user: {
            name: 'state 데이터 바인드 셈플'
        }
    });
    const hookStateData = useTextStateBind(state, setState, 'user.name');   // 제공하는 기능은 hookData와 동일

    // hook data에 강제로 데이터 셋팅
    const changeHookData = HOF(() => {  // 원하는 값으로 hookData 변경
        hookData.event.setValue('스크립트로 변경한 hookData');
        
    }, 'changeHookData');

    return (
        <Layout>
            <h1>input text에 양방향 데이터 바인딩 셈플</h1>
            <br/>
            <div style={{border: '1px solid black', padding: '10px 10px'}}>
                <h3>Bind된 데이터 출력</h3>
                <div>- basicValue: {basicValue}</div>
                <div>- hookData: {hookData.attr.value}</div>
                <div>- hookStateData: {state.user.name}</div>
            </div>

            <br/><br/>

            <CustomInput type="text" style={inputTextStyle} value={basicValue} onChange={event => setBasicValue(event.target.value)} />

            <br/><br/>

            <CustomInput type="text" style={inputTextStyle} {...hookData.attr} /><br/>
            <CustomButton onClick={initHookData}>hookData 초기화</CustomButton>&nbsp;&nbsp;
            <CustomButton onClick={changeHookData}>hookData 변경</CustomButton>

            <br/><br/>

            <CustomInput type="text" style={inputTextStyle} {...hookStateData.attr} /><br/>

            <br/><br/>
            <CustomLink href="/samples/com/dataBind/DataBindMain">데이터 바인딩 셈플 메인 화면으로...</CustomLink>

        </Layout>
    )
});