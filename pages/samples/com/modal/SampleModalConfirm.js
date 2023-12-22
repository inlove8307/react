import ComponentInitializer from "@/utils/ComponentInitializer"
import Layout from "@/components/com/Layout"
import CustomLink from "@/components/com/CustomLink";
import useCore from "@/hooks/useCore";

const { HOF } = ComponentInitializer.init('SampleModalCofirm');

export default HOF(() => {
    const core = useCore();

    /** 메시지 노출 후 버튼 콜백 이벤트 처리 **/
    const callbackAfterConfirm = HOF(() => {
        core.confirm('callbackAfterConfirm message test').then((result) => {
            core.alert(`callbackAfterConfirm ${result ? '확인' : '취소'}버튼 클릭`);
        });

    }, 'callbackAfterConfirm');

    /** Async 함수를 이용한 메시지 후처리 **/
    const confirmWithAwait = HOF(async () => {
        const result = await core.confirm('confirmWithAwait message test');

        core.alert(`confirmWithAwait ${result ? '확인' : '취소'}버튼 클릭`);

    }, 'confirmWithAwait');

    return (
        <Layout>
            <h1>Confirm 메시지 셈플</h1>
            <br />
            <button onClick={callbackAfterConfirm}>메시지 노출 후 화인 및 취소버튼 콜백 이벤트 처리</button>

            <br/><br/>
            <button onClick={confirmWithAwait}>Async 함수를 이용한 메시지 후처리</button>

            <br/><br/><br/>
            <CustomLink href={'/samples/com/modal/SampleModalMain'}>Modal 레이어 셈플 메인 화면으로....</CustomLink>
        </Layout>
    )
});