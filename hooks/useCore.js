import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import ComponentInitializer from "@/utils/ComponentInitializer";
import StoreCore from "@/store/StoreCore";

import ModalAlert from '@/components/com/ModalAlert';
import ModalConfirm from '@/components/com/ModalConfirm';
import ModalBottom from '@/components/com/ModalBottom';

import PropertyUtils from '@/utils/PropertyUtils';


const { Log, HOF } = ComponentInitializer.init('useCore');

const coreData = {
    goBackFunction: null    // 브라우저 뒤로가기 시 실행할 함수.
}

// page parameter save data
export const movePageParams = {};

export default HOF(options => {
    const router = useRouter();
    const [  , setState ] = useState({});

    const forceUpdate = HOF(() => {
        setState({});
    }, 'forceUpdate');

    /** 메인 화면으로 이동 **/
    const goMain = HOF(() => {
        router.push('/samples/SampleMain')
    }, 'goMain');

    /** 페이지 이동 **/
    const goPage = HOF((uri, params) => {
        if (typeof uri !== 'string') {
            Log.error('Required uri parameters.....');
            return;
        }

        const key = uri.split('?')[0];

        movePageParams[key] = params;
        router.push(uri);
    }, 'goPage');

    /** 페이지 뒤로가기 **/
    const goBack = HOF(() => {
        coreData.goBackFunction = null;
        router.back();
    }, 'goBack');

    /** 현재 페이지 파라미터 가져오기 **/
    const getPageParams = HOF(() => {
        const uri = router.pathname;
        return movePageParams[uri];
    }, 'getPageParams');

    /** 현재 페이지 쿼리 파라미터 가져오기 **/
    const getQueryParams = HOF(() => {
        return router.query;
    }, 'getQueryParams');

    /** 브라우저 뒤로가기 이벤트 발생 시 실행할 함수 셋팅 **/
    const setGoBackFunction = HOF((func) => {
        coreData.goBackFunction = func;
    }, 'setGoBackFunction');

    /** 브라우저 뒤로가기 이벤트 발생 시 실행할 함수 가져오기 **/
    const getGoBackFunction = HOF(() => {
        return coreData.goBackFunction;
    }, 'getGoBackFunction');

    /** Alert 메시지창을 띄운다. */
    const alert = HOF((message) => {
        return new Promise(resolve => {
            const callbackFunc = () => {
                resolve();
            };

            const { addLayerList } = StoreCore.getState();

            addLayerList(ModalAlert, callbackFunc, { message });
        });
    }, 'alert');

    /** Confirm 메시지창을 띄운다. */
    const confirm = HOF((message) => {
        return new Promise(resolve => {
            const callbackFunc = (result) => {
                resolve(result);
            };

            const { addLayerList } = StoreCore.getState();

            addLayerList(ModalConfirm, callbackFunc, { message });
        });
    }, 'confirm');

    /** Bottom 팝업을 띄운다. **/
    const showBottomPopup = HOF((ContentsComponent, data) => {
        return new Promise(resolve => {
            const callbackFunc = (result) => {
                resolve(result);
            };

            const PopupComponent = (pageProps) => {
                return (
                    <ModalBottom {...pageProps}>
                        <ContentsComponent {...pageProps} />
                    </ModalBottom>
                );
            }

            const { addLayerList } = StoreCore.getState();

            addLayerList(PopupComponent, callbackFunc, data);
        });
    });

    /** 실행중인 환경이 로컬 PC 환경인지 여부 체크 */
    const isLocal = () => {
        return PropertyUtils.getProp('env') === 'local';
    }

    /** 실행중인 환경이 개발 서버 환경인지 여부 체크 */
    const isDev = () => {
        return PropertyUtils.getProp('env') === 'dev';
    }

    /** 실행중인 환경이 스테이징 서버 환경인지 여부 체크 */
    const isStg = () => {
        return PropertyUtils.getProp('env') === 'stg';
    }

    /** 실행중인 환경이 운영 서버 환경인지 여부 체크 */
    const isProd = () => {
        return PropertyUtils.getProp('env') === 'prod';
    }

    /** 스토어 목록에 대한 subscribe 설정 **/
    useEffect(() => {
        if (options?.storeList && options.storeList.length) {
            const unsubscriptList = [];
            options.storeList.forEach(item => {
                const unsubscribe = item.subscribe(() => {
                    forceUpdate();
                });

                unsubscriptList.push(unsubscribe);
            });
       
            return () => {
                unsubscriptList.forEach(item => {
                    item();
                });
            }    
        }
        
    }, [forceUpdate, options]);

    return {
        forceUpdate,
        goMain,
        goPage,
        goBack,
        getPageParams,
        getQueryParams,
        setGoBackFunction,
        getGoBackFunction,
        alert,
        confirm,
        showBottomPopup,
        isLocal,
        isDev,
        isStg,
        isProd
    }
})
