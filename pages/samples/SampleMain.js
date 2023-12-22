import ComponentInitializer from "@/utils/ComponentInitializer"
import Layout from "@/components/com/Layout"
import CustomLink from "@/components/com/CustomLink";

const { HOF } = ComponentInitializer.init('SampleMain');

export default HOF(() => {
    return (
        <Layout name={'default'}>
            <h1>This is Sample Main Page</h1>
            <br/>
            <CustomLink href={'/samples/com/log/SampleLog'}>컴포넌트 초기화 및 로그 셈플<br/>(/samples/com/log/SampleLog)</CustomLink>

            <br/><br/>
            <CustomLink href={'/samples/com/movePage/MovePageOne'}>페이지 이동 및 데이터(파라미터) 전달 셈플<br/>(/samples/com/movePage/MovePageOne)</CustomLink>
            
            <br/><br/>
            <CustomLink href={'/samples/com/dataBind/DataBindMain'}>Input text, checktbox, select, radio, textarea에 대한 양방향 데이터 바인드<br/>(/samples/com/dataBind/DataBindMain)</CustomLink>

            <br/><br/>
            <CustomLink href={'/samples/com/backBtn/BackBtnControll'}>브라우저 뒤로가기 버튼 제어<br/>(/samples/com/backBtn/BackBtnControll)</CustomLink>

            <br/><br/>
            <CustomLink href={'/samples/com/context/ContextParent'}>Context 셈플(하위 컴포넌트와 데이터 공유)<br/>(/samples/com/context/ContextParent)</CustomLink>

            <br/><br/>
            <CustomLink href={'/samples/com/store/GlobalData'}>Store 셈플(전역 데이터 공유)<br/>(/samples/com/store/GlobalData)</CustomLink>

            <br/><br/>
            <CustomLink href={'/samples/com/rendering/CsrSsr'}>CSR(Client Side Rendering) 및 SSR(Server Side Rendering) 셈플<br/>(/samples/com/rendering/CsrSsr)</CustomLink>

            <br/><br/>
            <CustomLink href={'/samples/com/modal/SampleModalMain'}>Modal 레이어(alert, confirm, popup) 셈플<br/>(/samples/com/modal/SampleModalMain)</CustomLink>

            <br/><br/>
            <CustomLink href={'/samples/com/focus/SampleFocus'}>Focus 처리 셈플<br/>(/samples/com/focus/SampleFocus)</CustomLink>

            <br/><br/>
            <CustomLink href={'/samples/com/slide/SampleSlide'}>슬라이드 셈플<br/>(/samples/com/slide/SampleSlide)</CustomLink>

            <br/><br/>
            <CustomLink href={'/samples/com/prop/SampleUseProperty'}>프로퍼티 및 서버 환경 체크 사용 셈플<br/>(/samples/com/prop/SampleUseProperty)</CustomLink>

            <br/><br/>
            <CustomLink href={'/samples/com/scroll/SampleScrollMove'}>스크롤 이동 셈플<br/>(/samples/com/scroll/SampleScrollMove)</CustomLink>
        </Layout>
    )
});