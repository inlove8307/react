import { create } from 'zustand';

export default create((set) => ({
    name: 'SeongHeon',
    age: '20',

    setName:  name => set(state => {
        return {...state, name};
    }),

    setAge: age => set(state => {
        return {...state, age};
    })
}));