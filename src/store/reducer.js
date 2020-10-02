import actions from './actions';
import menu from './menuItems';

const initialState = {
    menuActive: true,
    menuItemActive: menu.MENU_INBOX,
    feedSelectAll: false
};

const reducer = (state = initialState, action = null) => {
    switch(action.type){
        case actions.TOGGLE_MENU:
            return {
                ...state,
                menuActive: !state.menuActive
            }
        case actions.SELECT_ITEM:
            return {
                ...state,
                menuItemActive: action.payload
            }
        case actions.TOGGLE_SELECT_ALL:
            return {
                ...state,
                feedSelectAll: !state.feedSelectAll
            }
        default:
            return state;
    }
}

export default reducer