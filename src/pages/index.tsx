import { useRouter } from "next/router"
import { useEffect } from "react"

import { useAppSelector } from "../app/redux/hooks"
import Logout from "./logout";



export default function Home() {
    const user = useAppSelector((state) => state.users.User)
    const router = useRouter()
    // const items = useAppSelector((state) => state.items.items)
    // const loading = useAppSelector((state) => state.items.loading)
    // const dispatch = useAppDispatch()
    // const handleClick = () => {
    //     dispatch(fetchList())
    // }

    useEffect(() => {
        if (user.isSignedIn === false) {
            router.push("/login")
        } else if (user.isSignedIn === true) {
            router.push("/dashboard")
        }
    })

    return (
        <div>
            Loading
            <Logout />
        </div>

    )
}
