import CustomLink from "@/components/com/CustomLink";
import ComponentInitializer from "@/utils/ComponentInitializer"
import Layout from "@/components/com/Layout"


const { HOF } = ComponentInitializer.init('SampleModalMain');

export default HOF(() => {
    return (
        <Layout>
            <h1>Modal 레이어 셈플 메인 화면</h1>
            
            <CustomLink href="/samples/com/modal/SampleModalAlert">Alert 메시지 셈플</CustomLink>

            <br/><br/>
            <CustomLink href="/samples/com/modal/SampleModalConfirm">Confirm 메시지 셈플</CustomLink>

            <br/><br/>
            <CustomLink href="/samples/com/modal/SampleModalBottom">Bottom 팝업 셈플</CustomLink>

            <br/><br/><br/>
            <CustomLink href="/samples/SampleMain">Sample Main 화면으로...</CustomLink>
        </Layout>
    )
});