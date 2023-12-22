import ComponentInitializer from "@/utils/ComponentInitializer";
import Layout from "@/components/com/Layout";
import CustomLink from "@/components/com/CustomLink";
import CustomButton from "@/components/com/CustomButton";
import { useRef } from "react";

const { HOF } = ComponentInitializer.init('SampleScrollMove') ;

export default HOF(() => {
    const topRef = useRef();
    const bottomRef = useRef();

    const scrollToBottom = () => {
        bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToTop = () => {
        topRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    /** 
     * scrollIntoView option 추가 설명 
     * 
     * behavior: 스크롤 동작을 어떻게 처리할지 결정합니다.
     *   - "auto": 브라우저 기본 동작을 사용합니다 (일반적으로 즉시 이동).
     *   - "smooth": 부드러운 스크롤 동작을 사용합니다.
     * 
     * block: 스크롤 이후 요소의 수직 정렬을 어떻게 할지 결정합니다.
     *   - "start": 요소가 화면의 상단에 오도록 스크롤합니다.
     *   - "center": 요소가 화면의 중앙에 오도록 스크롤합니다.
     *   - "end": 요소가 화면의 하단에 오도록 스크롤합니다.
     *   - "nearest": 가장 가까운 위치에 요소가 오도록 스크롤합니다 (화면에 이미 부분적으로 보이는 경우 변경 없음).
     * 
     * inline: 스크롤 이후 요소의 수평 정렬을 어떻게 할지 결정합니다 (주로 좌우 스크롤에 적용).
     *   - "start": 요소가 화면의 왼쪽에 오도록 스크롤합니다.
     *   - "center": 요소가 화면의 가운데에 오도록 스크롤합니다.
     *   - "end": 요소가 화면의 오른쪽에 오도록 스크롤합니다.
     *   - "nearest": 가장 가까운 위치에 요소가 오도록 스크롤합니다.
     * 
     * [ Example ]
     * element.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
     **/


    return (
        <Layout>
            <h1>원하는 위치로 스크롤 이동 셈플</h1>
            <p ref={topRef}>현재 스크롤바가 꼭대기에 있을때 아래 이동 버튼 클릭하면 스크롤이 하단 텍스트까지 내려감.</p>
            <CustomButton onClick={scrollToBottom}>스크롤 하단으로 이동</CustomButton>
            
            <br/><p>....</p><br/><p>....</p><br/><p>....</p><br/><p>....</p><br/><p>....</p><br/><p>....</p>
            <br/><p>....</p><br/><p>....</p><br/><p>....</p><br/><p>....</p><br/><p>....</p><br/><p>....</p>
            <br/><p>....</p><br/><p>....</p><br/><p>....</p><br/><p>....</p><br/><p>....</p><br/><p>....</p>
            <br/><p>....</p><br/><p>....</p><br/><p>....</p><br/><p>....</p><br/><p>....</p><br/><p>....</p>
            <br/><p>....</p><br/><p>....</p><br/><p>....</p><br/><p>....</p><br/><p>....</p><br/><p>....</p>
            <br/><p>....</p><br/><p>....</p><br/><p>....</p><br/><p>....</p><br/><p>....</p><br/><p>....</p>
            <br/><p>....</p><br/><p>....</p><br/><p>....</p><br/><p>....</p><br/><p>....</p><br/><p>....</p>
            <br/><p>....</p><br/><p>....</p><br/><p>....</p><br/><p>....</p><br/><p>....</p><br/><p>....</p>

            <br/><br/>
            <p ref={bottomRef}>하단 텍스트</p>
            <CustomButton onClick={scrollToTop}>스크롤 상단으로 이동</CustomButton>
            

            <br /><br />
            <CustomLink href="/samples/SampleMain">샘플 메인 화면으로....</CustomLink>
        </Layout>
    );
});
