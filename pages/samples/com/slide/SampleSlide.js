import CustomLink from "@/components/com/CustomLink";
import Layout from "@/components/com/Layout";
import ComponentInitializer from "@/utils/ComponentInitializer";

import {Slider, SlideItem} from "@/components/com/Slider";

const { HOF } = ComponentInitializer.init('SampleSlide');

export default HOF(() => {
    const slideData = ['One', 'Two', 'Three'];

    return (
        <Layout>
            <h1>슬라이드 셈플</h1>

            <h3>기본 슬라이드</h3>
            <Slider slideLength={slideData.length}>
                {slideData.map((item, index) => (
                    <SlideItem key={index}><p>{item}</p></SlideItem>
                ))}
            </Slider>

            <br/><br/>

            <h3>자동 슬라이드(자동 슬라이드 옵션 적용)</h3>
            <Slider slideLength={slideData.length} options={{autoSlide: true}}>
                {slideData.map((item, index) => (
                    <SlideItem key={index}><p>{item}</p></SlideItem>
                ))}
            </Slider>

            <br/><br/><br/>
            <CustomLink href="/samples/SampleMain">셈플 메인화면으로....</CustomLink>
        </Layout>
    )
});