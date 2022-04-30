import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Tabs, Form, Select, Button, Radio, Card } from 'antd';
import { environmentList } from '@/common/data';
// import styles from './Welcome.less';

const { TabPane } = Tabs;
const { Option } = Select;

const Welcome: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <PageContainer>
      <Card>
        <Tabs defaultActiveKey="1">
          <TabPane tab="默认" key="1">
            <Form
              name="basic"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 10 }}
              initialValues={{ version: 'dev' }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="环境"
                name="environment"
                rules={[{ required: true, message: '请选择环境' }]}
              >
                <Select>
                  {environmentList.map((item) => {
                    return <Option value={item.key}>{item.value}</Option>;
                  })}
                </Select>
              </Form.Item>
              <Form.Item name="version" label="版本" wrapperCol={{ span: 16 }}>
                <Radio.Group>
                  <Radio value={'dev'}>开发版</Radio>
                  <Radio value={'experience'}>体验版</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  确认
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="指定分支" key="2">
            <Form
              name="basic"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 10 }}
              initialValues={{ version: 'dev' }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="分支"
                name="branch"
                rules={[{ required: true, message: '请选择环境' }]}
              >
                <Select>
                  {environmentList.map((item) => {
                    return <Option value={item.key}>{item.value}</Option>;
                  })}
                </Select>
              </Form.Item>
              <Form.Item
                label="环境"
                name="environment"
                rules={[{ required: true, message: '请选择环境' }]}
              >
                <Select>
                  {environmentList.map((item) => {
                    return <Option value={item.key}>{item.value}</Option>;
                  })}
                </Select>
              </Form.Item>
              <Form.Item name="version" label="版本" wrapperCol={{ span: 16 }}>
                <Radio.Group>
                  <Radio value={'dev'}>开发版</Radio>
                  <Radio value={'experience'}>体验版</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  确认
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
