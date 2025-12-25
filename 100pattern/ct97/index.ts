// function getUser(id: string) {}
// function getPost(id: string) {}

// const userId = 'abc1234';

// getPost(userId);

type UserId = string & { __brand: 'UserId' };
type PostId = string & { __brand: 'PostId' };

function getUser(id: UserId) {}
function getPost(id: PostId) {}

function createUserId(id: string): UserId {
    return id as UserId;
}

const userId = createUserId('abc1234');

getUser(userId);

