import CustomLink from "@/components/com/CustomLink";
import Layout from "@/components/com/Layout";
import ComponentInitializer from "@/utils/ComponentInitializer";
import useCore from "@/hooks/useCore";

// 셈플용 Store
import StoreSample from "@/store/StoreSample";

const { HOF } = ComponentInitializer.init('GlobalData');

export default HOF(() => {
    // useCore 훅에 인자로 전달하면 store 값이 바꼈을 때 자동으로 화면 갱신처리를 해준다.
    useCore({storeList: [StoreSample]});

    // store 데이터나 함수를 사용하기 위해 상태 객체를 정의
    const storeState = StoreSample.getState();

    return (
        <Layout>
            <h1>Store를 이용한 전역 데이터 셈플</h1>
            <p>name: {storeState.name}</p>
            <p>age: {storeState.age}</p>
            <br/>
            name 변경: <input type="text" value={storeState.name} onChange={(e) => storeState.setName(e.target.value)} /><br/>
            age 변경: <input type="text" value={storeState.age} onChange={(e) => storeState.setAge(e.target.value)} />

            <br/><br/><br/>
            <CustomLink href="/samples/SampleMain">Sample Main 화면으로...</CustomLink>
        </Layout>
    )
});