import React from "react";
import { Breadcrumb, Layout, Menu, theme, DatePicker, Form, Select, Space, Button } from 'antd';

//const { Header, Content, Footer } = Layout;
const { RangePicker } = DatePicker;

const SelectBar = () => {


    return (
        <div>
            <div style={{
                padding:"10px 10px 10px 10px",
                flexDirection:'row',
                display:'flex',
                alignContent:'center',
                alignSelf:'center',
                justifyContent: 'space-between'
            }}>
                <div style={{flexDirection:'row', display:'flex', paddingLeft:'30px'}}>
                    <Form.Item label="Date : " style={{alignSelf:'center'/*paddingTop:'10px'*/}}>
                        <RangePicker showTime/>
                    </Form.Item>

                    <Form.Item label="Service : " style={{paddingLeft:'30px'}}>
                        <Select style={{
                            width:"200px"
                        }}>
                            <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Log Type : " style={{paddingLeft:'30px'}}>
                        <Select style={{
                            width:"200px"
                        }}>
                            <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                    </Form.Item>
                </div>
                <div style={{paddingRight:'30px'}}>
                    <Button  style={{width:'100px', backgroundColor:'#1677ff', color:'white'}}>
                        Search
                    </Button>
                </div>
                
            </div>
            
        </div>
    )

    
}

export default SelectBar;