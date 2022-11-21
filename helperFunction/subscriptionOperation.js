const Subscription = require("../CLASS/subscription-class");
const subscription = new Subscription();

const subscriptionOperation = (subscriptionData, user, command)=>{
    switch(command[0]){
        case "START_SUBSCRIPTION":
            subscription.createSubscription(user, command);
            break;
        case "ADD_SUBSCRIPTION":
            subscription.addSubscription(user, subscriptionData, command[1], command[2]);
            break;
        case "ADD_TOPUP":
            subscription.addTopUp(subscriptionData, user, command[1], command[2]);
            break;
    }
}

module.exports=subscriptionOperation;

