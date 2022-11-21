require("dotenv").config();
const InputOutputManager = require("./INPUT-OUTPUT/input-output");
const User = require("./CLASS/user");
const subscriptionOperation = require("./helperFunction/subscriptionOperation");

const inputOutput = new InputOutputManager();
let subscriptionData;


const main = async () => {
    const command = await inputOutput.readCommandLine();
    subscriptionData = await inputOutput.readSubscriptionAsync(process.env.DATA_SOURCE);
    subscriptionData = await JSON.parse(subscriptionData);
    const user = new User();
    command.forEach((item)=>{
        const formattedCommand = item.split(" ");
        subscriptionOperation(subscriptionData, user, formattedCommand);
    })

    user.output();

    
}
main();