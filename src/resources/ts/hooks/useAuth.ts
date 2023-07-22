import * as api from '../api/AuthAPI'
import { queryClient } from "../queryClient";

const authUserQuery = () => ({
    queryKey: ['user'],
    queryFn: api.getUser
})

export const useAuthUser = async () => {
    const query = authUserQuery()

    return queryClient.getQueryData(query.queryKey)
        ?? await queryClient.fetchQuery(query).catch(() => undefined)
}
