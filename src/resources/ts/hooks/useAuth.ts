import * as api from '../api/AuthAPI'
import { queryClient } from "../queryClient";
import {useQueryClient,useMutation} from "react-query";
import {AxiosError} from "axios";

const authUserQuery = () => ({
    queryKey: ['user'],
    queryFn: api.getUser
})

export const useAuthUser = async () => {
    const query = authUserQuery()

    return queryClient.getQueryData(query.queryKey)
        ?? await queryClient.fetchQuery(query).catch(() => undefined)
}

export const useLogin = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: api.login,
        onError: (error:AxiosError) => {
            console.log(error)
        },
        onSuccess: (data) => {
            console.log(data)
            queryClient.invalidateQueries(['auth'])
            window.location.href = '/'
        }
    })
}

export const useLogout = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: api.logout,
        onError: (error:AxiosError) => {
            console.log(error)
        },
        onSuccess: (data) => {
            console.log(data)
            queryClient.invalidateQueries((['auth']))
            window.location.href = '/login'
        }
    })
}
