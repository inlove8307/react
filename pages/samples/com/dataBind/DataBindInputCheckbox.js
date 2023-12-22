import CustomLink from "@/components/com/CustomLink";
import Layout from "@/components/com/Layout";
import ComponentInitializer from "@/utils/ComponentInitializer";
import { useCheckboxBind } from "@/hooks/useDataBind";
import { useState } from "react";

const { HOF } = ComponentInitializer.init('DataBindInputRadio');

const divStyle = {
    border: '1px solid black',
    padding: '10px 10px'
}

export default HOF(() => {

    const [ nomalChecked, setNomalChecked ] = useState({
        one: false,
        two: false,
        three: false
    });

    const { checkboxData, checkAll } = useCheckboxBind({
        values: [
            { value: 'A' },
            { value: 'B', text: '가나' },
            { value: 'C', text: '다라' }
        ]
    })

    return (
        <Layout>
            <h1>input Checkbox에 양방향 데이터 바인딩 셈플</h1>
            <br />
            <div style={divStyle}>
                <h2>일반적인 양방향 바인드</h2>
                <label>
                    <input type='checkbox' checked={nomalChecked.one} onChange={() => setNomalChecked({...nomalChecked, one: !nomalChecked.one})} />
                    가나
                </label>
                <label>
                    <input type='checkbox' checked={nomalChecked.two} onChange={() => setNomalChecked({...nomalChecked, two: !nomalChecked.two})} />
                    다라
                </label>
                <label>
                    <input type='checkbox' checked={nomalChecked.three} onChange={() => setNomalChecked({...nomalChecked, three: !nomalChecked.three})} />
                    마바
                </label>
                
                <br /><br />
                <p>selected value: {JSON.stringify(nomalChecked)}</p>
            </div>

            <br/><br/><br/>

            <div style={divStyle}>
                <h2>hook 을 이용한 양방향 바인드</h2>
                {checkboxData.values.map((item, idx) => (
                    <label key={idx}>
                        <input type="checkbox" {...item.attr} />
                        {item.text}
                    </label>
                ))}
                <br /><br />
                <p>selected value: {JSON.stringify(checkboxData.checkedList)}</p>
                <button onClick={() => checkAll(true)}>전체 체크 하기</button>
            </div>


            <br /><br /><br />
            <CustomLink href="/samples/com/dataBind/DataBindMain">데이터 바인딩 셈플 메인 화면으로...</CustomLink>

        </Layout>
    )
});