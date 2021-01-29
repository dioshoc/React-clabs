import profileReducer, { addPost, deletePost } from "./profile-reducer";
let initialState = {
    PostData: [
        { id: 1, message: "Joy?" },
        { id: 2, message: "Tes?" },
        { id: 3, message: "Hey, why nobody love me?" }
    ],
}
test('New post should be added', () => {
    // 1. test data
    let action = addPost("it")
    // 2. action
    let newState = profileReducer(initialState, action)
    // 3. expectation
    expect(newState.PostData.length).toBe(4)
});

test('Message of new post should be correct', () => {
    // 1. test data
    let action = addPost("it")
    // 2. action
    let newState = profileReducer(initialState, action)
    // 3. expectation
    expect(newState.PostData[3].message).toBe("it")
});

test('after deleting length of messages shuold be decrement', () => {
    // 1. test data
    let action = deletePost(1)
    // 2. action
    let newState = profileReducer(initialState, action)
    // 3. expectation
    expect(newState.PostData.length).toBe(2)
});

test(`after deleting length shoudn't be decrement if if is incorrect `, () => {
    // 1. test data
    let action = deletePost(1000)
    // 2. action
    let newState = profileReducer(initialState, action)
    // 3. expectation
    expect(newState.PostData.length).toBe(3)
});
