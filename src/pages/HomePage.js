import React from "react";
import { useNavigate } from "react-router-dom";
import Headers from "../components/Headers";
import SelectBar from "../components/SelectBar";
import LogList from "../components/LogList";
import "../styles/HomePage.css";

import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

const HomePage = () => {

    const navigate = useNavigate();
    const navigateToTestpage1 = () => {
        navigate("/TestPage1")
    }
    const navigateToTestpage2 = () => {
        navigate("/TestPage2")
    }
    return(
        
            <Layout id="layout">
                <Headers id = "content-header"></Headers>
                <Content id = "content-layout">
                    <SelectBar></SelectBar>
                    
                    <LogList></LogList>

                </Content>
                <Footer id="footer-layout">
                    Made by SK C&C TF
                </Footer>
            </Layout>
            
        
    )
}
export default HomePage;