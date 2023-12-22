import ComponentInitializer from "@/utils/ComponentInitializer";
import Layout from "@/components/com/Layout";
import CustomLink from "@/components/com/CustomLink";
import PropertyUtils from "@/utils/PropertyUtils";
import useCore from "@/hooks/useCore";

const { HOF } = ComponentInitializer.init('SampleUseProperty');

export default HOF(() => {
    const core = useCore();

    const serverEnv = core.isLocal() ? 'Local PC 환경' : 
                        core.isDev() ? '개발 서버 환경' : 
                        core.isStg() ? '스테이징 서버 환경' : 
                        core.isProd() ? '운영 서버 환경' : 'Error';

    return (
        <Layout>
            <h1>프로퍼티 및 서버 환경 체크 사용 셈플</h1>
            <p>프로퍼티는 config 폴더 하위에 각 환경별로 존재하는 property 파일에 정의한다.</p>
            <ul>
                <li>defaultProperty.js: 공통 프로퍼티</li>
                <li>localProperty.js: local PC 환경 프로퍼티</li>
                <li>devProperty.js: 개발 서버 환경 프로퍼티</li>
                <li>stgProperty.js: 스테이징 서버 환경 프로퍼티</li>
                <li>prodProperty.js: 운영 환경 프로퍼티</li>
            </ul>
            <p>defaultProperty.js 파일은 모든 환경에서 사용되는 프로퍼티를 정의한다.</p>
            <p>defaultProperty.js 와 중복된 환경 프로퍼티 항목은 덮어씌워진다.</p>
            <p>프로퍼티에 정의된 common.prop.data 값: { PropertyUtils.getProp('common.prop.data') }</p>
            <p>현재 실행중인 서버 환경: { serverEnv }</p>

            <br /><br />
            <CustomLink href="/samples/SampleMain">샘플 메인 화면으로....</CustomLink>
        </Layout>
    );
});