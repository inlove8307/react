import ComponentInitializer from "@/utils/ComponentInitializer";
import StoreCore from "@/store/StoreCore";
import useCore from "@/hooks/useCore";
import { initLayerContextData, LayerContext } from "@/pages/_app";
import { useEffect, useState } from "react";

const { Log, HOF } = ComponentInitializer.init('ModalWrapper');

const modalOverlayStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '1040',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};



export default HOF(({ children, layerIndex }) => {
    useCore({ storeList: [StoreCore] });
    const [ layerContextData, setLayerContextData ] = useState({...initLayerContextData});
    const { layerList } = StoreCore.getState();

    // 팝업 레이어가 생성됐을 때 현재 화면상의 포커스 엘리먼트 객체를 저장해놓을 변수 정의
    let lastFocusElement = null;

    // layerList 가 바뀔때마다 실행되어야 하는 로직
    useEffect(() => {
        // layerList를 체크하여 페이지 레이어 컨텍스트의 ariaHidden 값을 변경 한다.
        layerContextData.ariaHidden = (layerList.length - 1) === layerIndex ? 'false' : 'true';
        setLayerContextData({...layerContextData});
        Log.debug("layerContextData.ariaHidden => ", layerContextData.ariaHidden)

    }, [layerList]);


    // 한번만 실행되어야 하는 로직
    useEffect(() => {
        lastFocusElement = document.activeElement;
        return () => {
            if (lastFocusElement) {
                lastFocusElement.focus();
            }
        }
    }, []);

    return (
        <div style={modalOverlayStyle}>
            <LayerContext.Provider value={[layerContextData, setLayerContextData]}>
                {children}
            </LayerContext.Provider>
        </div>
    )
});