function userBox () {

    const button = document.getElementById('user');
    const box = document.getElementById('user-box');

    button.addEventListener('click', () => {
        box.classList.toggle('active');
    });

}

userBox();