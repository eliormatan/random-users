import { SEED } from "./constants.js";

export class UserItem {
    constructor(data) {
        this.data = data;
    }

    async loadUser(username) {
        const response = await fetch(`https://randomuser.me/api?seed=${SEED}&results=1&nat=us`);
        const data = await response.json();

        this.data = data.results[0];
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