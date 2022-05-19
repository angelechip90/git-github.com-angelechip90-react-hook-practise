import axiosClient from "./axiosClient";

const userAPI = {
    getAll(params) {
        const url = '/users';

        //do cùng tên nên có thể viết như dưới, hoặc: return axiosClient.get(url,{params : params});
        return axiosClient.get(url, { params });
    },

    get(id) {
        const url = `/users/${id}`;
        return axiosClient.get(url);
    },

    add(data) {
        const url = '/users';

        //do cùng tên nên có thể viết như dưới, hoặc: return axiosClient.get(url,{params : params});
        return axiosClient.post(url, data);
    },

    update(data) {
        const url = `/users/${data.id}`;
        return axiosClient.patch(url, data);
    },

    remove(id) {
        const url = `/users/${id}`;
        return axiosClient.delete(url);
    },

    register(data) {
        const url = '/auth/local/register';
        return axiosClient.patch(url, data);
    }

};
export default userAPI;