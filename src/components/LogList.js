import  React, {useEffect, useState } from 'react';
import { Divider, List, Typography, Collapse } from 'antd';

const {Panel} = Collapse;
const LogList = () => {

    //test data
    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
      ];

    return (
        <div style={{}}>
            <Divider orientation="left">Default Size</Divider>
            <List
                style={{width:'90%', margin: '0 auto', flex: '1 0 auto'}}
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={(item, idx) => (
                    <Collapse>
                        <Panel header="This is panel header 1" key={idx}>
                            <p>{item}</p>
                        </Panel>
                    </Collapse>
                )}
            />
        </div>
    )
}

export default LogList;