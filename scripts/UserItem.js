import { PAGE_SIZE, SEED } from "./constants.js";
import { getQueryParam } from "./utils.js";



export class UserItem {
    constructor(data) {
        this.data = data;
    }

    async loadUser(username) {
        //option 1 - load the same user
        // const response = await fetch(`https://randomuser.me/api?seed=${SEED}&results=1&nat=us`);
        //option 2 - load random user
        // const response = await fetch(`https://randomuser.me/api?results=1&nat=us`);

        //option 3 - load 10 users and get the right one
        const response = await fetch(`https://randomuser.me/api?seed=${SEED}&page=${getQueryParam('page')}&results=${PAGE_SIZE}&nat=us`);

        const data = await response.json();

        this.data = data.results[getQueryParam('index')];

        //for option 1 or 2
        // this.data = data.results[0];
    }

    get thumbnail() {
        return this.data.picture.thumbnail;
    }

    get picture() {
        return this.data.picture.large;
    }

    get fullName() {
        return this.data.name.first.charAt(0) + '. ' + this.data.name.last;
    }

    get email() {
        return this.data.email;
    }

    get gender() {
        return this.data.gender;
    }

    get age() {
        return this.data.dob.age;
    }

    get username() {
        return this.data.login.username;
    }

    get location() {
        return this.data.location;
    }
}