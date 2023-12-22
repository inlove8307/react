import CustomLink from "@/components/com/CustomLink";
import Layout from "@/components/com/Layout";
import ComponentInitializer from "@/utils/ComponentInitializer";

const { HOF } = ComponentInitializer.init('DataBindMain');

export default HOF(() => {
    return (
        <Layout>
            <h1>데이터 바인딩 셈플 메인 화면</h1>
            <br />
            <CustomLink href="/samples/com/dataBind/DataBindInputText">input text에 양방향 데이터 바인딩 셈플 화면으로...</CustomLink>
            <br /><br />
            <CustomLink href="/samples/com/dataBind/DataBindInputRadio">input radio 양방향 데이터 바인딩 셈플 화면으로...</CustomLink>
            <br /><br />
            <CustomLink href="/samples/com/dataBind/DataBindInputCheckbox">input checkbox 양방향 데이터 바인딩 셈플 화면으로...</CustomLink>
            <br /><br />
            <CustomLink href="/samples/com/dataBind/DataBindTextarea">textarea 양방향 데이터 바인딩 셈플 화면으로...</CustomLink>
            <br /><br />
            <CustomLink href="/samples/com/dataBind/DataBindSelect">select 양방향 데이터 바인딩 셈플 화면으로...</CustomLink>

            <br/><br/><br/>
            <CustomLink href="/samples/SampleMain">Sample Main 화면으로...</CustomLink>

        </Layout>
    )
});