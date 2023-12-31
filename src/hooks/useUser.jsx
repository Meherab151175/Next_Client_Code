import { useQuery } from "@tanstack/react-query"

import useAuth from "./useAuth"
import useAxiosSecure from './useAxiosSecure';

export const useUser = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: currentUser  , isLoading , refetch} = useQuery({
        queryKey: ['user', user?.email],
        enabled: !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${user?.email}`);
            return res.data;
        },
    })
    return { currentUser  , isLoading , refetch}
}