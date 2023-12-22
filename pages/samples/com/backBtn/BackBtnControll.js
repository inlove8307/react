import ComponentInitializer from "@/utils/ComponentInitializer";
import useBackBtnInterceptor from "@/hooks/useBackBtnInterceptor";
import Layout from "@/components/com/Layout";
import CustomLink from "@/components/com/CustomLink";
import useCore from "@/hooks/useCore";

const { Log, HOF } = ComponentInitializer.init('BackBtnControll');

export default HOF(() => {
    const core = useCore();

    // 뒤로가기 버튼 클릭시 원하는 로직을 작성
    const backBtnAfterCallback = HOF(() => {
        if (window.confirm('뒤로 가시겠습니까?')) {
            core.goBack();
        }
        
    }, 'backBtnAfterCallback');

    // 훅을 이용하여 인자로 콜백 함수를 전달한다. 인자 없이 훅을 사용하면 뒤로가기 눌렀을 때 메인 화면으로 이동 됨.
    useBackBtnInterceptor(backBtnAfterCallback);

    return (
        <Layout>
            <h1>브라우저 뒤로가기 버튼 제어 셈플</h1>
            <br/>

            <br/><br/>
            <CustomLink href="/samples/SampleMain">Sample Main 화면으로...</CustomLink>

        </Layout>
    );
});