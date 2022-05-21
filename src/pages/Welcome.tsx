import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Tabs, Form, Select, Button, Radio, Card, Switch, Row, Col } from 'antd';
import { ALPHA_BRANCH, ENV_LIST, FEATURES_BRANCH } from '@/common/data';
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
              initialValues={{ version: 'dev', channel: 'weapp', isMerge: '0', env: 'uat' }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item label="分支">
                <Row gutter={20}>
                  <Col span={16}>
                    <Form.Item name="branch" rules={[{ required: true, message: '请选择分支' }]}>
                      <Select>
                        {ALPHA_BRANCH.map((item) => {
                          return (
                            <Option key={item.key} value={item.key}>
                              {item.value}
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name="isMerge">
                      <Switch checkedChildren="合并" unCheckedChildren="不合并" />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item name="mergeBranch">
                  <Select>
                    {FEATURES_BRANCH.map((item) => {
                      return (
                        <Option key={item.key} value={item.key}>
                          {item.value}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </Form.Item>
              <Form.Item
                label="环境"
                name="env"
                rules={[{ required: true, message: '请选择环境' }]}
              >
                <Select>
                  {ENV_LIST.map((item) => {
                    return (
                      <Option disabled={item.key !== 'uat'} key={item.key} value={item.key}>
                        {item.value}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>

              <Form.Item name="version" label="版本" wrapperCol={{ span: 16 }}>
                <Radio.Group>
                  <Radio value={'dev'}>开发版</Radio>
                  <Radio value={'experience'}>体验版</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item name="channel" label="平台" wrapperCol={{ span: 16 }}>
                <Radio.Group>
                  <Radio value={'weapp'}>微信</Radio>
                  <Radio value={'alipay'}>支付宝</Radio>
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
