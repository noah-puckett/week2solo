const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters';

const avatarApi = {
    getAvatars(param) {
        let url = URL;
        if(param) {
            url = `${URL}${param}`;
        }
        return fetch(url)
            .then(response => response.json());
    }
};
export default avatarApi;