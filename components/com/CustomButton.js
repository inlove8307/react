import ComponentInitializer from "@/utils/ComponentInitializer";
import { LayerContext } from "@/pages/_app";
import React, { useContext } from "react";


const { HOF } = ComponentInitializer.init('CustomButton');

const componentFunction = HOF(({children, tabIndex, ...restProps}, ref) => {
    const [ layerContextData ] = useContext(LayerContext);
    const realTabIndex = tabIndex ? tabIndex : '0';

    return (
        <button ref={ref} {...restProps} tabIndex={layerContextData.ariaHidden === 'true' ? '-1' : realTabIndex}>{children}</button>
    )
});

export default React.forwardRef(componentFunction);