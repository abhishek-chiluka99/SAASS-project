import { useRouter, useSearchParams } from "next/navigation"
import { trpc } from "../_trpc/client"

const Page = async () => {

    // it get the value of the link which was occured in dashboard
    const router = useRouter()
    
    // based on the below function searchparam we find the origin which is the user id
    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')

    const {data, isLoading} = trpc.authCallback.useQuery(undefined, {
        onSuccess: ({sucess}) => {
            if(sucess){
                router.push(origin ? `/${origin}`: `/dashboard`)
            }
        }
    })


}