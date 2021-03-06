import httpRequester from '../utils/http-requester.js';

var USERS_URL = 'http://localhost:3030/users';

function create(user) {
    var promise = new Promise(function(resolve, reject) {
        httpRequester
            .post(USERS_URL, user, true)
            .then(function(data) {
                if (!data.success) {
                    reject(data.reason);
                }

                resolve(data.user);
            })
            .catch(function(err) {
                reject(err);
            });
    });

    return promise;
}

export default {
    create
};
