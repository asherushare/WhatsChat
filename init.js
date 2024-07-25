const mongoose = require('mongoose');
const Chat = require('./models/chat');

main().then(() => {
  console.log("Connection is successfully established");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatschat');
}

let allChats = [
  {
    from: "Patra",
    to: "Priya",
    msg: "send me some memoties of your childwood",
    created_at: new Date()
  },
  {
    from: "Mahesh",
    to: "Patra",
    msg: "How are you doing my friend?",
    created_at: new Date()
  },
  {
    from: "Priyanka",
    to: "Pinesh",
    msg: "Hey, are you missing me?",
    created_at: new Date()
  },
  {
    from: "Mummy",
    to: "Patra",
    msg: "Love you beta!",
    created_at: new Date()
  }
];

Chat.insertMany(allChats);