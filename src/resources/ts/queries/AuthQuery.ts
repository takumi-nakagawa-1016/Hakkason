import * as api from "../api/AuthAPI"
import { useQuery} from "react-query";

const useUser = () => {
    return useQuery('users', api.getUser)
}

export  {
    useUser,
}
