import actions from "./actions";
import menu from "./menuItems";

const initialState = {
    menuActive: true,
    menuItemActive: menu.MENU_INBOX,
    feedSelectAll: false,
    feedMailCategory: "PRIMARY",
    feedInboxMail: [
        {
            from : "jonedoe@mail.com",
            subject : "Subject is an important part of a mail.",
            body : "Body is the core part of mail. Without body there is nothing.",
            read : false
        },
        {
            from : "jonedoe2@mail.com",
            subject : "Subject is an important part of a mail.",
            body : "Body is the core part of mail. Without body there is nothing.",
            read : false
        },
        {
            from : "jonedoe3@mail.com",
            subject : "Subject is an important part of a mail.",
            body : "Body is the core part of mail. Without body there is nothing.",
            read : false
        }
    ]
};

const reducer = (state = initialState, action = null) => {
    switch (action.type) {
        case actions.TOGGLE_MENU:
            return {
                ...state,
                menuActive: !state.menuActive,
            };
        case actions.SELECT_ITEM:
            return {
                ...state,
                menuItemActive: action.payload,
            };
        case actions.TOGGLE_SELECT_ALL:
            return {
                ...state,
                feedSelectAll: !state.feedSelectAll,
            };
        case actions.SELECT_MAIL_CAT:
            return {
                ...state,
                feedMailCategory: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
