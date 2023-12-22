import ComponentInitializer from "@/utils/ComponentInitializer";
import { LayerContext } from "@/pages/_app";
import { useContext, forwardRef } from "react";


const { HOF } = ComponentInitializer.init('CustomInput');

const componentFunction = HOF(({children, tabIndex, ...restProps}, ref) => {
    const [ layerContextData ] = useContext(LayerContext);
    const realTabIndex = tabIndex ? tabIndex : '0';

    return (
        <input ref={ref} {...restProps} tabIndex={layerContextData.ariaHidden === 'true' ? '-1' : realTabIndex}>{children}</input>
    )
});

export default forwardRef(componentFunction);