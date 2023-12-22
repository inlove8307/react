import Layout from "@/components/com/Layout";
import ComponentInitializer from "@/utils/ComponentInitializer";
import useCore from "@/hooks/useCore";
import { useEffect, useRef } from "react";
import { useTextValueBind } from "@/hooks/useDataBind";
import CustomInput from "@/components/com/CustomInput";
import CustomButton from "@/components/com/CustomButton";

const { HOF } = ComponentInitializer.init('SampleFocus');

const PopupContents = HOF(() => {
    const core = useCore();

    const inputOne = useTextValueBind('popup input 1');
    const inputTwo = useTextValueBind('popup input 2');

    const showConfirm = () => {
        core.confirm('show confirm....');
    }

    return (
        <div>
            <p>Popup Contents</p>
            <br/>

            <CustomInput type="text" {...inputOne.attr} />

            <br/><br/>
            <CustomInput type="text" {...inputTwo.attr} />

            <br/><br/>
            <CustomButton onClick={showConfirm}>confirm 띄우기</CustomButton>
        </div>
    );
});

export default HOF(() => {
    const core = useCore();
    const inputOne = useTextValueBind('input 1');
    const inputTwo = useTextValueBind('input 2');

    const showPopup = HOF(async () => {
        await core.showBottomPopup(PopupContents);

    }, 'showPopup')

    return (
        <Layout>
            <h1>Focus 처리 셈플</h1>

            <CustomInput tabIndex={10} type="text" {...inputOne.attr} />

            <br/><br/>
            <CustomInput type="text" {...inputTwo.attr} />

            <br/><br/>
            <CustomButton onClick={showPopup}>팝업 띄우기</CustomButton>

        </Layout>
    )
});