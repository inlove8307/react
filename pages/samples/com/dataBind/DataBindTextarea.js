import CustomLink from "@/components/com/CustomLink";
import Layout from "@/components/com/Layout";
import ComponentInitializer from "@/utils/ComponentInitializer";
import { useTextValueBind } from "@/hooks/useDataBind";

const { HOF } = ComponentInitializer.init('DataBindTextarea');

export default HOF(() => {
    const textData = useTextValueBind('초기데이터');
    
    return (
        <Layout>
            <h1>Textarea 에 양방향 데이터 바인딩 셈플</h1>
            <h2>input text와 동일하게 처리하면 됨.</h2>
            <br/>
            <textarea rows="15" style={{width: '100%'}}  {...textData.attr} />

            <br/><br/>
            <CustomLink href="/samples/com/dataBind/DataBindMain">데이터 바인딩 셈플 메인 화면으로...</CustomLink>

        </Layout>
    )
});