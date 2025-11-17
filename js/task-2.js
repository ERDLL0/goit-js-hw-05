const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => user.friends.includes(friendName));
};

const allUsersTask2 = [
  { name: "Moore Hensley", friends: ["Sharron Pace"] },
  { name: "Sharlene Bush", friends: ["Briana Decker", "Sharron Pace"] },
  { name: "Ross Vazquez", friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"] },
  { name: "Elma Head", friends: ["Goldie Gentry", "Aisha Tran"] },
  { name: "Carey Barr", friends: ["Jordan Sampson", "Eddie Strong"] },
  { name: "Blackburn Dotson", friends: ["Jacklyn Lucas", "Linda Chapman"] },
  { name: "Sheree Anthony", friends: ["Goldie Gentry", "Briana Decker"] }
];

TEST_TASK_2 = {
  briana: getUsersWithFriend(allUsersTask2, "Briana Decker"),
  goldie: getUsersWithFriend(allUsersTask2, "Goldie Gentry"),
  none: getUsersWithFriend(allUsersTask2, "Adrian Cross"),
};
