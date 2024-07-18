import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the items in the slice
interface ItemType {
    id: string;
    fullName: string;
    email: string;
    number: string;
    dob: string;
    gender: string;
    height: string;
    portfolioLink: string;
    address: string;
    instagramHandle: string;
    profession: string;
    about: string;
    leftSideShot: string | null;
    rightSideShot: string | null;
    headShot: string | null;
    fullLength: string | null;
    privacyNotice: boolean;
    ageConsent: boolean;
}

// Define the initial state with the type
const initialState: { slice: ItemType[] } = { slice: [] };

export const addItems = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Omit<ItemType, 'id'>>) => {
            const addThis = {
                id: nanoid(),
                fullName: action.payload.fullName,
                email: action.payload.email,
                number: action.payload.number,
                dob: action.payload.dob,
                gender: action.payload.gender,
                height: action.payload.height,
                portfolioLink: action.payload.portfolioLink,
                address: action.payload.address,
                instagramHandle: action.payload.instagramHandle,
                profession: action.payload.profession,
                about: action.payload.about,
                leftSideShot: action.payload.leftSideShot,
                rightSideShot: action.payload.rightSideShot,
                headShot: action.payload.headShot,
                fullLength: action.payload.fullLength,
                privacyNotice: action.payload.privacyNotice,
                ageConsent: action.payload.ageConsent
            }
            state.slice.push(addThis);
            // console.log('State after adding item:', JSON.parse(JSON.stringify(state)));
        }
    }
})

export const { addItem } = addItems.actions;

export default addItems.reducer;
