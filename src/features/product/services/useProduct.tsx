import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { api } from "../../../shared/api"

export const productKey = "productKey"

export const useProduct = () => {

    const queryClient = useQueryClient();

    const getProducts = () => useQuery<any, any>({
        queryKey: [productKey],
        queryFn: () => api.get("product").then(res => res.data)
    })

    const createProduct = useMutation<any, any, any>({
        mutationFn: body => api.post("product", body).then(res => res.data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [productKey] })
    })

    const deleteProduct = useMutation<any, any, {id:string}>({
        mutationFn: ({id}) => api.delete(`product/${id}`).then((res) => res.data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [productKey] })
    });


    return { createProduct, getProducts, deleteProduct }
}