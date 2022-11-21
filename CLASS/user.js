class user{
    constructor(){
        this.userObject = {
            MUSIC:{
                cost:"",
                endDate:""
            },
            VIDEO:{
                cost:"",
                endDate:""
            },
            PODCAST:{
                cost:"",
                endDate:""
            },
            TOP_UP: {
                cost:0,
            }
        }
    }
    output(){
        let totalSum = 0;
        Object.keys(this.userObject).forEach((key)=>{
            if(this.userObject[key].cost) totalSum+= this.userObject[key].cost;
        })
        console.log(`RENEWAL_REMINDER MUSIC ${this.userObject.MUSIC.endDate}`);
        console.log(`RENEWAL_REMINDER VIDEO ${this.userObject.VIDEO.endDate}`);
        console.log(`RENEWAL_REMINDER PODCAST ${this.userObject.PODCAST.endDate}`);
        console.log(`RENEWAL_AMOUNT ${totalSum}`);
    }
}

module.exports=user;