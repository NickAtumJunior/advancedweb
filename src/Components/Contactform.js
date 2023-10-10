import { Button, Form, Input, message, Space } from "antd";
import React from "react";
import img from "../assets/network-email-marketing-campaign-and-newsletter.gif";

const Contactform = () => {
  const [form] = Form.useForm();
  const onFinish = () => {
    message.success("Submit success!");
  };
  const onFinishFailed = () => {
    message.error("Submit failed!");
  };
  const onFill = () => {
    form.setFieldsValue({
      url: "https://taobao.com/",
    });
  };
  return (
    <div className="customInput-Whole-Wrapper">
      <div className="form-left">
        <h1
          style={{
            color: "#fff",
          }}
        >
          Build The Next Big Thing With Us
        </h1>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="Full_Name"
            label={
              <p
                style={{
                  color: "#fff",
                }}
              >
                Full Name
              </p>
            }
            rules={[
              {
                required: true,
              },
              {
                type: "string",
                min: 6,
              },
            ]}
          >
            <Input
              style={{
                padding: "0.5em 1em",
                borderRadius:'24px',
              }}
              placeholder="Fullname"
            />
          </Form.Item>

          <Form.Item
            name="Email"
            label={
              <p
                style={{
                  color: "#fff",
                }}
              >
                Email
              </p>
            }
            rules={[
              {
                required: true,
              },
              {
                type: "string",
                min: 6,
              },
            ]}
          >
            <Input
              style={{
                padding: "0.5em 1em",
                borderRadius:'24px',
              }}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            style={{
              color: "white",
            }}
            name="About"
            label={
              <p
                style={{
                  color: "#fff",
                }}
              >
                About
              </p>
            }
            rules={[
              {
                required: true,
              },
              {
                type: "string",
                min: 6,
              },
            ]}
          >
            <Input
              style={{
                padding: "0.5em 1em",
                borderRadius:'24px',
              }}
              placeholder="About"
            />
          </Form.Item>

          <Form.Item>
            <Space>
              <Button
                style={{
                  borderRadius:'24px',
                  height:'3em'
                }}
                type="primary"
                htmlType="submit"
              >
                Shoot Msg
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
      <div className="form-right">
        <img src={img} alt="jjjj"/>
      </div>
    </div>
  );
};

export default Contactform;
