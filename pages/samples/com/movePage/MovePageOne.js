import ComponentInitializer from "@/utils/ComponentInitializer";
import useCore from "@/hooks/useCore";
import Layout from "@/components/com/Layout";
import CustomLink from "@/components/com/CustomLink";

const { HOF } = ComponentInitializer.init('MovePageOne');

export default HOF(() => {
    const core = useCore();

    const twoPageUri = '/samples/com/movePage/MovePageTwo';

    /** 스크립트 로직에서 페이지 이동 처리 **/
    const go = HOF(() => {
        core.goPage(twoPageUri);
    }, 'go');

    /** 이동할 페이지로 데이터 전달 **/
    const goWithData = HOF(() => {
        const data = {
            aa: '11',
            bb: '22'
        };

        core.goPage(twoPageUri, data);
    }, 'goWithData');

    /** 이동할 페이지 URL에 Query 파라미터 사용 **/
    const goWithQuery = HOF(() => {
        const uriWithQuery = twoPageUri + '?cc=33&dd=44';
        core.goPage(uriWithQuery);
    }, 'goWithQuery');

    /** 이동할 페이지에 데이터와 Query 파라미터 모두 사용 **/
    const goWithAll = HOF(() => {
        const data = {
            aa: '11',
            bb: '22'
        };

        const uriWithQuery = twoPageUri + '?cc=33&dd=44';

        core.goPage(uriWithQuery, data);
    }, 'goWithAll');

    return (
        <Layout>
            <h1>This is move page 11111</h1>
            <br/>
            
            <CustomLink href={twoPageUri}>CustomLink 컴포넌트를 이용한 단순 화면 이동(a tag로 변환됨)</CustomLink>
            <br/><br/>
            <button onClick={go}>스크립트 로직에서 페이지 이동 처리</button>
            <br/><br/>
            <button onClick={goWithData}>이동할 페이지로 데이터 전달</button>
            <br/><br/>
            <button onClick={goWithQuery}>이동할 페이지 URL에 Query 파라미터 사용</button>
            <br/><br/>
            <button onClick={goWithAll}>이동할 페이지에 데이터와 Query 파라미터 모두 사용</button>
        </Layout>
    )
});