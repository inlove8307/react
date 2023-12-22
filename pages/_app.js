import ComponentInitializer from "@/utils/ComponentInitializer";
import StoreCore from "@/store/StoreCore";
import useCore from "@/hooks/useCore";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import _ from 'lodash';
import PropertyUtils from "@/utils/PropertyUtils";

import ModalWrapper from "@/components/com/ModalWrapper";

import '@/public/resources/css/samples/sampleMain.css';

const { HOF } = ComponentInitializer.init('_app.js');

// Layer(페이지, 팝업 등..)별 사용되는 컨텍스트 데이터
export const initLayerContextData = {
    ariaHidden: 'false'
};

// 하위 컴포넌트에 공유할 context 생성
export const LayerContext = React.createContext([{...initLayerContextData}, () => {}]);

const App = HOF(({ Component, pageProps }) => {
    // 초기 데이터 셋팅
    if (pageProps.initData) {
        PropertyUtils.setProperty(pageProps.initData.property);
    }

    // 페이지 레이어 컨텍스트 데이터 상태 데이터 정의
    const [ pageLayerContextData, setPageLayerContextData ] = useState({...initLayerContextData});

    const { layerList, closeLastLayer } = StoreCore.getState();
    const router = useRouter();

    // store subscribe 
    const core = useCore({ storeList: [StoreCore] });

    // 뒤로가기 제어
    useEffect(() => {
        // layerList를 체크하여 페이지 레이어 컨텍스트의 ariaHidden 값을 변경 한다.
        pageLayerContextData.ariaHidden = layerList.length === 0 ? 'false' : 'true';
        setPageLayerContextData({...pageLayerContextData});

        const nowUrl = router.pathname;
        const nowState = _.cloneDeep(history.state);

        const handleBeforePopState = HOF(() => {
            const goBackFunction = core.getGoBackFunction();
            if (layerList.length > 0) {
                history.pushState(nowState, '', nowUrl);
                closeLastLayer();

                return false;

            } else if (typeof goBackFunction === 'function') {
                history.pushState(nowState, '', nowUrl);
                goBackFunction();

                return false;

            } else {
                return true;
            }

        }, 'handleBeforePopState');

        router.beforePopState(handleBeforePopState);

        return () => {
            router.beforePopState(null);
        };

    }, [router, layerList]);

    return (
        <div>
            <div aria-hidden={layerList.length === 0 ? 'false' : 'true'}>
                <LayerContext.Provider value={[pageLayerContextData, setPageLayerContextData]}>
                    <Component {...pageProps} />
                </LayerContext.Provider>
            </div>
            
            <br /><hr /><br />
            
            {layerList.map((item, index) => (
                <ModalWrapper key={index} layerIndex={index}>
                    <item.layerComponent layerIndex={index} callbackFunc={item.callbackFunc} {...item.layerProps} />
                </ModalWrapper>
            ))}
        </div>
    );
});

/**
 * 모든 페이지에서 필요한 초기화 작업 진행
 */
App.getInitialProps = async ({ctx}) => {
    let initData = null;

    // 아래 조건은 초기 페이지 로드시나 getServerSideProps를 사용한 페이지에서만 실행된다.
    if (typeof window === 'undefined') {
        const res = await fetch('http://127.0.0.1:3000/api/front/initData');
        const jsonRes = await res.json();
        initData = {
            property: jsonRes.property
        }
    }

    return {
        pageProps: {
            initData
        }
    }
};

export default App;