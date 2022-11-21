require("dotenv").config();
class Subscription{

    createSubscription(user, command){
        const [day, month, year] = command[1].split("-");
        if(day >31 || month > 12){
            return false;
        }
        const dateString = `${year}-${month}-${day}`;
        user.userObject.subscriptionDate = dateString;

    }
    createEndSubscription(subscriptionStartDate, months){
        const days = 10;
        const subscriptionEnd = new Date(subscriptionStartDate);
        let date = new Date(subscriptionEnd.setMonth(subscriptionEnd.getMonth()+months));
        date = new Date(subscriptionEnd.setDate(subscriptionEnd.getDate()-days));
        const [day, month, year] =  date.toLocaleDateString().split("/");
        return `${day}-0${month}-${year};`
    }
    addSubscription(user, subscriptionData, subscriptionName, subscriptionType){
        const money = subscriptionData[subscriptionName][subscriptionType];
        const startDate = user.userObject.subscriptionDate;
        user.userObject[subscriptionName].cost = money;
        let personal = 1, premium=3, free=1, months;
        if(subscriptionType === "PERSONAL") months = personal;;
        if(subscriptionType === "PREMIUM") months = premium;
        if(subscriptionType === "FREE") months = free;
        user.userObject[subscriptionName].endDate = this.createEndSubscription(startDate, months)
    }

    addTopUp(subscriptionData, user, device, numberOfMonths){
        const money = subscriptionData[device] * numberOfMonths;
        user.userObject.TOP_UP.cost = money;
    }
}

module.exports=Subscription;