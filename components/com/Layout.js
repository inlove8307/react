import ComponentInitializer from "@/utils/ComponentInitializer";
import _ from 'lodash';

const { Log, HOF } = ComponentInitializer.init('Layout');


const DefaultLayout = ({children}) => {
    return (
        <div>
            <div><h1>Custom Header</h1></div>
            <div>{children}</div>
            <div><h2>Bottom</h2></div>
        </div>
    )
};


export default HOF(({children, name}) => {
    const layerName = _.defaultTo(name, 'default');

    const LayoutComponent = layerName === 'default' ? DefaultLayout : null;
    
    if (LayoutComponent === null) {
        throw new Error(`"${layerName}" is not supported layout name.`);
    }

    return (
        <LayoutComponent>
            {children}
        </LayoutComponent>
    )
})