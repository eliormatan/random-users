import { UserItem } from "./UserItem.js";
import { getQueryParam } from "./utils.js";

const username = getQueryParam('username');

const user = new UserItem();

user.loadUser(username).then(render);

function createMap() {
    const mapLocation = {
        lat: Number(user.location.coordinates.latitude),
        lng: Number(user.location.coordinates.longitude),
    };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: mapLocation,
    });

    const marker = new google.maps.Marker({
        position: mapLocation,
        map,
        title: user.fullName,
    });
}

function goBack() {
    window.history.back();
}

function render() {
    document.querySelector('#picture').src = user.picture;
    document.querySelector('#fullName').innerText = user.fullName;
    document.querySelector('#email').innerText = user.email;
    document.querySelector('#gender').innerText = user.gender;
    document.querySelector('#age').innerText = user.age;
    document.querySelector('#goBackBtn').addEventListener('click', goBack);

    createMap();
}