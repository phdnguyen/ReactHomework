import { CHANGE_VALUE} from './type';

export const changeValueAction = newValue => ({
        type: CHANGE_VALUE,
        payload: newValue
    });