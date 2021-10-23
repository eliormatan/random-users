import { getQueryParam } from "./utils.js";
import { UsersStore } from "./UsersStore.js";
import { PAGE_SIZE, SEED } from "./constants.js";

let PAGE = getQueryParam('page') || 1;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const store = new UsersStore(PAGE_SIZE, SEED);

function moveToPage(page) {
    PAGE = page;
    history.replaceState(null, null, `index.html?page=${PAGE}`);
    initializePage();
}

function next() {
    moveToPage(Number(PAGE) + 1);
}

function previous() {
    if (PAGE > 1) {
        moveToPage(Number(PAGE) - 1);
    }
}

prevBtn.addEventListener('click', previous);
nextBtn.addEventListener('click', next);

function initializePage() {
    store.loadPage(PAGE).then((users) => {
        const tbody = document.querySelector('#usersTable tbody');

        tbody.innerHTML = users.map((user, idx) => {
            return `
                <tr>
                    <td>
                        <a href="user.html?username=${user.username}">
                            <img class="rounded-circle" width="48" height="48" src="${user.thumbnail}" />
                        </a>
                    </td>
                    <td>${user.fullName}</td>
                    <td><a href="mailto:${user.email}">${user.email}</a></td>
                    <td>${user.gender}</td>
                    <td>${user.age}</td>
                </tr>
            `;
        }).join('');
    });
}

initializePage();