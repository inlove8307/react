import ComponentInitializer from "@/utils/ComponentInitializer";
import StoreCore from "@/store/StoreCore";
import useCore from "@/hooks/useCore";
import { useEffect } from "react";

const { HOF } = ComponentInitializer.init('ModalAlert');

const modalWrapperStyle = {
    zIndex: '1050',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const alertStyle = {
    width: '80vw',
    background: 'white',
    padding: '20px',
    zIndex: '100',
    borderRadius: '8px',
    boxSizing: 'border-box'
}

export default HOF(({ layerIndex, callbackFunc, message }) => {
    useCore({ storeList: [StoreCore] });
    const { layerList, removeLayer } = StoreCore.getState();
    const lastIndex = layerList.length - 1;

    // 팝업 닫힘 여부 플래그
    let isNotClosed = true;

    const btnClick = HOF(() => {
        isNotClosed = false;

        removeLayer(layerIndex);
        callbackFunc();

    }, 'btnClick');

    // 브라우저 뒤로가기 시 팝업이 강제로 닫히기 때문에 콜백 함수를 호출해 준다.
    useEffect(() => {
        return () => {
            if (isNotClosed) {
                callbackFunc();
            }
        }
    }, [isNotClosed, callbackFunc]);

    return (
        <div style={modalWrapperStyle} aria-hidden={layerIndex === lastIndex ? 'false' : 'true'} role="dialog">
            <div style={alertStyle}>
                <p>{message}</p>
                <div>
                    <button onClick={btnClick}>확인</button>
                </div>
            </div>
        </div>
    )
});