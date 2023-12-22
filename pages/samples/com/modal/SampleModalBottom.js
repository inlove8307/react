import ComponentInitializer from "@/utils/ComponentInitializer"
import Layout from "@/components/com/Layout"
import CustomLink from "@/components/com/CustomLink";
import useCore from "@/hooks/useCore";

const { Log, HOF } = ComponentInitializer.init('SampleModalBottom');

// 팝업 컨텐츠 영역에 들어갈 컴포넌트. 별도 컴포넌트 파일로 분리해서 작성하며, 본 페이지는 셈플이라 한눈에 보기 좋게 하나의 파일에다가 정의 하였음.
const PopupComponent = ({closePopup, aa, bb}) => {
    const core = useCore();

    Log.debug(`receiv parameters: aa[${aa}], bb[${bb}]`);

    const showAlert = () => {
        core.alert('test alert on bottom popup...');
    };

    const close = () => {
        closePopup();
    }

    const closeWithResult = () => {
        closePopup({dd: '33'});
    }

    return (
        <div>
            <h1>하단 팝업 셈플</h1>
            <button onClick={showAlert}>alert 띄우기</button>

            <br/><br/>
            <button onClick={close}>팝업 컨텐츠에서 팝업 닫기</button>

            <br/><br/>
            <button onClick={closeWithResult}>팝업 닫을때 데이터 응답하기</button>
        </div>
    )
};

// 팝업을 띄울 컴포넌트
export default HOF(() => {
    const core = useCore();

    const showPopup = HOF(() => {
        core.showBottomPopup(PopupComponent);

    }, 'showPopup');

    const showPopupWithData = HOF(async () => {
        const result = await core.showBottomPopup(PopupComponent, {aa: '11', bb: '22'});

        core.alert(`Result is ${JSON.stringify(result)}`);

    }, 'showPopupWithData');

    return (
        <Layout>
            <h1>Bottom 팝업 셈플</h1>
            <br />
            
            <button onClick={showPopup}>PopupComponent 를 하단 팝업으로 띄우기</button>
            <br/><br/>
            <button onClick={showPopupWithData}>팝업으로 띄우때 데이터 전달 및 응답 받기</button>

            <br/><br/><br/>
            <CustomLink href={'/samples/com/modal/SampleModalMain'}>Modal 레이어 셈플 메인 화면으로....</CustomLink>
        </Layout>
    )
});