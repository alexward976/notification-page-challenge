const unreadNotifs = document.getElementsByClassName('unread');

const notifCountElement = document.getElementById('notif-count');
notifCountElement.textContent = unreadNotifs.length;

function markAllAsRead() {    

    let staticNotifCount = unreadNotifs.length;

    for (let i = 0; i < staticNotifCount; i++) {
        unreadNotifs[0].classList.remove('unread');
    }

    notifCountElement.textContent = unreadNotifs.length;
}