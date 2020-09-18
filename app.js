const github = new GitHub;

const ui = new UI;

const searchUser = document.getElementById('search-user');
const repo = document.querySelector('.grid');
const profile = document.querySelector('.second-box');

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;    

    if (userText !== '') {
        github.getuser(userText)
            .then(data => {
                console.log(data);
                if (data.profile.message === 'Not Found') {
                    console.log('not found');
                } else {
                    ui.showProfile(data.profile);
                }
            });

        github.getRepos(userText)
            .then(repoData => {
                console.log(repoData);
                ui.showRepos(repoData.repos);
            });

    } else {
        profile.innerHTML = '';
        repo.innerHTML = '';
    }
});
