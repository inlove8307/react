import ComponentInitializer from "@/utils/ComponentInitializer";
import useCore from "@/hooks/useCore";
import Layout from "@/components/com/Layout";

const { HOF } = ComponentInitializer.init('MovePageTwo');

export default HOF(() => {
    const core = useCore();

    // 이전 페이지에서 전달한 데이터 가져오기
    const pageParams = core.getPageParams();

    // 파라미터가 포함된 URL에서 파라미터 가져오기
    const queryParams = core.getQueryParams();

    return (
        <Layout>
            <h1>This is move page 22222</h1>
            <br/>
            <p>전달된 데이터: {JSON.stringify(pageParams)}</p>
            <p>URL 파라미터 : {JSON.stringify(queryParams)}</p>
            
            <br/>
            <button onClick={() => core.goBack()}>뒤로가기</button>
        </Layout>
    )
});