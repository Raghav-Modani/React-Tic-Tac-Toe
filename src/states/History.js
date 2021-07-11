import {atom} from 'recoil';

export const History = atom({
    key : 'History',
    default : [Array(9).fill(null)] 
});
