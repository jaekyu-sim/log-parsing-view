import React from "react";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
//import "../styles/Header.css"


const Headers = () => {
    
    //Logic 구현 부분
    const NavList = new Array('WEB', 'WAS');



    return (
        <Header style={{ display: "flex" }}>
            <div style={{
                    width:"180px",
                    height:'64px',
                    alignContent:'center',
                    alignItems:'center',
                    justifyContent:'center',
                    display:'flex',
                    textAlign:'center',
                    
                }}>
                    <div style={{
                        alignContent:'center',
                        alignItems:'center',
                        color:'black',
                        fontWeight:'bold',
                        lineHeight:'30px',
                        backgroundColor:'#dddddd',
                        padding:'3px 10px 3px 10px',
                        borderRadius:'5px 5px 5px 5px'
                    }}>
                        RMS Log Viewer
                    </div>
                </div>
            <Menu
            style={{width:"100%"}}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}//초기 메뉴 중 WAS 가 기본으로 선택되도록 설정.
            items={NavList.map((nav, index) => {
                const key = index + 1;
                return {
                key,
                label: nav
                };
            })}
            />


      </Header>
    )
}
export default Headers;