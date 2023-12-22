import ComponentInitializer from "@/utils/ComponentInitializer";
import StoreCore from "@/store/StoreCore";
import useCore from "@/hooks/useCore";
import React, { useEffect, useState } from "react";
import styles from "@/public/resources/css/samples/bottomSlideModal.module.css";
import CustomButton from "./CustomButton";

const { HOF } = ComponentInitializer.init('ModalConfirm');

export default HOF(({ layerIndex, callbackFunc, message, children }) => {
    useCore({ storeList: [StoreCore] });
    const { layerList, removeLayer } = StoreCore.getState();
    const lastIndex = layerList.length - 1;

    // 팝업 닫힘 여부 플래그
    let isNotClosed = true;

    const closePopup = HOF((result) => {
        isNotClosed = false;

        removeLayer(layerIndex);
        callbackFunc(result);

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
        <div className={styles.modalOverlay} aria-hidden={layerIndex === lastIndex ? 'false' : 'true'}>
            <div className={styles.modalContent}>
                {React.Children.map(children, child => {
                    return React.cloneElement(child, {closePopup})
                })}
                <br/><br/><hr/><br/>
                <CustomButton onClick={() => closePopup()} >닫기</CustomButton>
            </div>
        </div>
    )
});