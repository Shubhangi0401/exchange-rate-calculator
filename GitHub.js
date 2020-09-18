class GitHub {

    constructor() { 
        this.client_id = 'fa938c37b68be2f77fff';
        this.client_secret = '80d4b8eec1bd5e823488b43f5c62c3a999e0230a';
    }

    async getuser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}`);

        const profileData = await profileResponse.json();

        return {
            profile: profileData
        };
    }

    async getRepos(user) {
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos`);

        const repoData = await repoResponse.json();

        return {
            repos: repoData
        };
    }
};
