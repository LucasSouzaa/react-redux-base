import axios from 'axios';
// import { reset } from '../services/navigator';

const HOST = 'https://exemple.com/';

export {
    HOST,
};

export default {
    default: {
        client: axios.create({
            baseURL: HOST,
            responseType: 'json',
        }),
        options: {
            returnRejectedPromiseOnError: true,
            interceptors: {
                request: [
                    ({ getState }, config) => {
                        return {
                            ...config,
                            headers: {
                                Authorization: 'authorizations aqui',
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                            },
                        };
                    },
                ],
                response: [
                    {
                        success: (store, response) => response,
                        error: (store, error) => {
                            // if (error.response && error.response.data.status === 401) {
                            //     return AsyncStorage.multiRemove(['@/user', '@/token'])
                            //         .then(() => reset('Login'));
                            // }
                            // console.log('error', error);
                            return Promise.reject(error);
                        },
                    },
                ],
            },
        },
    },
};
