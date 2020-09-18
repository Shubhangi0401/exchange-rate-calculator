class UI {
    constructor() {
        // this.profile = document.querySelector('primary-section');
        // this.repos = document.querySelector('secondary-section');
    }

    showProfile(user) {
        // console.log(user);
        const profile = document.querySelector('.second-box');

        profile.innerHTML = `
            <div class="left">
                <img src="${user.avatar_url}";
                <div class="btn">
                    <button type="submit">View Profile</button>
                </div>
            </div>
            <div class="right">
                <div class="boxes">
                    <div class="box1 box-edit">Public Repos : ${user.public_repos}</div>
                    <div class="box2 box-edit">Public Gists : ${user.public_gists}</div>
                    <div class="box3 box-edit">Followers : ${user.followers}</div>
                    <div class="box4 box-edit">Following : ${user.following}</div>
                </div>
                <div class="list">
                    <ul>
                        <li>Company : ${user.company}</li>
                        <li>Website / Blog : ${user.blog}</li>
                        <li>Location : ${user.location}</li>
                        <li>Member Since : ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        `;
    }

    showRepos(repos) {
        // console.log(repos);
        const repo = document.querySelector('.grid');

        repo.innerHTML = '';

        for (let i = 0; i < repos.length; i++) {

            const element = repos[i];

            // document.querySelector('.name').innerHTML = `${element.name}`;
            // document.querySelector('.stats').innerHTML = `${repos.stats}`;
            // document.querySelector('.watchers').innerHTML = `${element.watchers}`;
            // document.querySelector('.forks').innerHTML = `${element.forks}`;

            repo.innerHTML += `
            
                <div class="box">
                    <div class="name"> ${element.name} </div>
                    <div class="content">
                        <div class="content-1 box-edit">Stars : ${element.stargazers_count}</div>
                        <div class="content-2 box-edit">Watchers : ${element.watchers}</div>
                        <div class="content-3 box-edit">Forks : ${element.forks}</div>
                    </div>
                </div>
            
                    
            `;
        }
    }
}
