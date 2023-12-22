import CustomLink from "@/components/com/CustomLink";
import Layout from "@/components/com/Layout";
import ComponentInitializer from "@/utils/ComponentInitializer";
import { useRadioBind } from "@/hooks/useDataBind";
import { useState } from "react";

const { HOF } = ComponentInitializer.init('DataBindInputRadio');

const divStyle = {
    border: '1px solid black',
    padding: '10px 10px'
}

export default HOF(() => {

    const [ nomalSelectedValue, setNomalSelectedValue ] = useState('A');

    // custom hook 을 이용해 radio data 생성
    const { radioData, setSelectedValue } = useRadioBind({
        initValue: 'B', values: [
            { value: 'A' },
            { value: 'B', text: '가나' },
            { value: 'C', text: '다라' }
        ]
    });

    return (
        <Layout>
            <h1>input radio에 양방향 데이터 바인딩 셈플</h1>
            <br />
            <div style={divStyle}>
                <h2>일반적인 양방향 바인드</h2>
                <label>
                    <input type='radio' value="A" checked={nomalSelectedValue === 'A'} onChange={() => setNomalSelectedValue('A')} />
                    가나
                </label>
                <label>
                    <input type='radio' value="B" checked={nomalSelectedValue === 'B'} onChange={() => setNomalSelectedValue('B')} />
                    다라
                </label>
                <br /><br />
                <p>selected value: {nomalSelectedValue}</p>
            </div>

            <br/><br/><br/>

            <div style={divStyle}>
                <h2>hook 을 이용한 양방향 바인드</h2>
                {radioData.values.map((item, idx) => (
                    <label key={idx}>
                        <input type="radio" {...item.attr} />
                        {item.text}
                    </label>
                ))}
                <br /><br />
                <p>selected value: {radioData.selectedValue}</p>
                <button onClick={() => setSelectedValue('C')}>강제 C 로 셋팅</button>
            </div>


            <br /><br /><br />
            <CustomLink href="/samples/com/dataBind/DataBindMain">데이터 바인딩 셈플 메인 화면으로...</CustomLink>

        </Layout>
    )
});