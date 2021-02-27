import * as actions from './actions';
import menu from "./menuItems";

const initialState = {
    menuActive: true,
    menuItemActive: menu.MENU_INBOX,
    feedSelectAll: false,
    feedMailCategory: "PRIMARY",
    feedInboxMail: [
        {
            id : "1",
            from : "jonedoe@mail.com",
            subject : "Subject is an important part of a mail.",
            body : "Body is the core part of mail. Without body there is nothing.",
            read : false,
            starred: false,
            selected : false,
        },
        {
            id : "2",
            from : "jonedoe2@mail.com",
            subject : "Subject is an important part of a mail.",
            body : "Body is the core part of mail. Without body there is nothing.",
            read : false,
            starred: false,
            selected : false,
        },
        {
            id : "3",
            from : "jonedoe3@mail.com",
            subject : "Subject is an important part of a mail.",
            body : "Body is the core part of mail. Without body there is nothing.",
            read : false,
            starred: false,
            selected : false,
        }
    ]
};

const reducer = (state = initialState, action = null) => {
    let feedMail;
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
        case actions.READ_EMAIL:
            feedMail = state.feedInboxMail.map((mail) => {
                if (mail.id === action.payload) {
                    return {
                        ...mail,
                        read: true,
                    }
                }
                else return mail;
            })
            return {
                ...state,
                feedInboxMail: feedMail,
            };
        case actions.TOGGLE_SELECT_EMAIL:
            feedMail = state.feedInboxMail.map((mail) => {
                if (mail.id === action.payload) {
                    return {
                        ...mail,
                        selected: !mail.selected,
                    }
                }
                else return mail;
            })
            return {
                ...state,
                feedInboxMail: feedMail,
            };
        default:
            return state;
    }
};

export default reducer;
