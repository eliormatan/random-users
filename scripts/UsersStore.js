import { UserItem } from "./UserItem.js";

export class UsersStore {

    constructor(pageSize, seed) {
        this.pageSize = pageSize;
        this.seed = seed;
    }

    async loadPage(page) {
        const response = await fetch(`https://randomuser.me/api?seed=${this.seed}&page=${page}&results=${this.pageSize}&nat=us`);
        const data = await response.json();

        return data.results.map((user) => new UserItem(user));
    }
}