import "antd/dist/antd.css"

import { Layout, Menu, Breadcrumb } from 'antd';
import { useRouter } from "next/router"
import { useEffect } from "react"

import { useAppSelector } from "../app/redux/hooks"
import Logout from "./logout"

const { Header, Content, Footer } = Layout;

export default function Dashboard() {
    const router = useRouter()
    const user = useAppSelector((state) => state.users.User)

    useEffect(() => {
        if (user.isSignedIn === false) {
            router.push("/landing")
        }
    }, [])

    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />

            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">dashing a board</div>
            </Content>
        </Layout>
    )
}
