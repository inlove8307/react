import ComponentInitializer from "@/utils/ComponentInitializer"
import Layout from "@/components/com/Layout"
import CustomLink from "@/components/com/CustomLink";
import useCore from "@/hooks/useCore";

const { HOF } = ComponentInitializer.init('SampleModalAlert');

export default HOF(() => {
    const core = useCore();

    /** 일반 alert 메시지 노출 **/
    const nomalAlert = HOF(() => {
        core.alert('nomalAlert message test');

    }, 'nomalAlert');

    /** 메시지 노출 후 화인버튼 콜백 이벤트 처리 **/
    const callbackAfterAlert = HOF(() => {
        core.alert('callbackAfterAlert message test').then(() => {
            core.alert('callbackAfterAlert finished....');
        });

    }, 'callbackAfterAlert');

    /** Async 함수를 이용한 메시지 후처리 **/
    const alertWithAwait = HOF(async () => {
        await core.alert('alertWithAwait message test');

        core.alert('alertWithAwait finished....');

    }, 'alertWithAwait');

    return (
        <Layout>
            <h1>Alert 메시지 셈플</h1>
            <br />
            <button onClick={nomalAlert}>일반 alert 메시지 노출</button>
            
            <br/><br/>
            <button onClick={callbackAfterAlert}>메시지 노출 후 화인버튼 콜백 이벤트 처리</button>

            <br/><br/>
            <button onClick={alertWithAwait}>Async 함수를 이용한 메시지 후처리</button>

            <br/><br/><br/>
            <CustomLink href={'/samples/com/modal/SampleModalMain'}>Modal 레이어 셈플 메인 화면으로....</CustomLink>
        </Layout>
    )
});