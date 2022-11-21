

const errorHandler = (user, formattedCommand)=>{
    if(formattedCommand[0] === "ADD_SUBSCRIPTION" && user.userObject[formattedCommand[1]].cost !== ""){
        console.log("DUPLICATE_CATEGORY");
        return false;
    }
    if(formattedCommand[0] === "ADD_SUBSCRIPTION" && !user.userObject.subscriptionDate){
        console.log("SUBSCRIPTIONS_NOT_FOUND");
        return false;
    }
    if(formattedCommand[0] === "START_SUBSCRIPTION"){
        const [day, month, year] = formattedCommand[1].split("-");
        if(+day > 31 || +month > 12){
            console.log("INVALID_DATE");
            return false;
        }
    }

    if(formattedCommand[0] === "ADD_TOPUP" && user.userObject.TOP_UP.cost === ""){
        console.log("DUPLICATE_TOPUP");
        return false;
    }
    if(formattedCommand[0] === "PRINT_RENEWAL_DETAILS" && !user.userObject.subscriptionDate){
        console.log("SUBSCRIPTIONS_NOT_FOUND");
        return false;
    }
}

module.exports=errorHandler;