import { create } from 'zustand';
import _ from 'lodash';

export default create((set) => ({
    layerList: [],
    
    addLayerList: (layerComponent, callbackFunc, layerProps) => set(state => {
        state.layerList.push({layerComponent, callbackFunc, layerProps});
        return {...state, layerList: [...state.layerList]};
    }),

    removeLayer: removeIndex => set(state => {
        state.layerList.splice(removeIndex, 1);
        return {...state, layerList: [...state.layerList]};
    }),

    closeLastLayer: () => set(state => {
        state.layerList.pop();
        return {...state, layerList: [...state.layerList]};
    }),
    
    clearLayer: () => set(state => {
        state.layerList = [];
        return {...state, layerList: [...state.layerList]};
    })
}));