import ComponentInitializer from "@/utils/ComponentInitializer";
import Layout from "@/components/com/Layout";
import CustomLink from "@/components/com/CustomLink";

const { Log, HOF } = ComponentInitializer.init('SampleLog');

export default HOF(() => {
    Log.debug('Debug 레벨 로그 출력');
    Log.info('Info 레벨 로그 출력');
    Log.error('Error 레벨 로그 출력');

    const sampleHof = HOF(() => {
        // 여기가 함수 본체

    }, 'sampleHof'); // <<<< 에러 발생시 해당 함수를 구분할 수 있는 식별자명을 두번째 인자로 입력

    return (
        <Layout>
            <h1>컴포넌트 초기화 및 로그 셈플</h1>
            <p>초기화: const {`{`} Log, HOF {`}`} = ComponentInitializer.init(&apos;요기는 컴포넌트 식별자명을 입력&lsquo;);</p>
            <p>Log 객체: 컴포넌트에서 콘솔 로그를 출력하고자 할 때 사용하는 객체(debug, info, error 함수 제공)</p>
            <p>HOF 함수: High Order Function의 약자로 오류 발생시 오류 위치를 추적하기 위해 함수 정의 시 해당 함수로 감싼다.</p>

            <br/><br/><br/>
            <CustomLink href="/samples/SampleMain">샘플 메인 화면으로....</CustomLink>
        </Layout>
    );
});