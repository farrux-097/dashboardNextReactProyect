import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { api } from "../../../shared/api"

export const profileKey = "profileKey"

export const useProfile = () => {

    const queryClient = useQueryClient();


    const getUser = () => useQuery<any, any>({
        queryKey: [profileKey],
        queryFn: () => api.get("user").then(res => res.data)
    })

    const updateProfile = useMutation<any, any, { id: string; body: any }>({
        mutationFn: ({ id, ...body }) => api.patch(`category/${id}`, body).then((res) => res.data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [profileKey] })
    });


    return { getUser, updateProfile }
}