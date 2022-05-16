import axiosClient from "./axiosClient";

const productAPI  = {
    getAll(params){
        const url='/products';

        //do cùng tên nên có thể viết như dưới, hoặc: return axiosClient.get(url,{params : params});
        return axiosClient.get(url,{params});
    },

    get(id){
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },

    add(data){
        const url='/products';

        //do cùng tên nên có thể viết như dưới, hoặc: return axiosClient.get(url,{params : params});
        return axiosClient.post(url,data);
    },
    
    update(data){
        const url = `/products/${data.id}`;
        return axiosClient.patch(url,data);
    },

    remove(id){
        const url = `/products/${id}`;
        return axiosClient.delete(url);
    }
};
export default productAPI;