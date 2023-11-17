"use client";
import { Button, Form, Input, notification } from "antd";

const ProfileForm = () => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.error({
      message: "Profile infos could not be updated!!!",
    });
  };

  const onFinish = async (values: FieldType) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    displayName: string;
    photoURL: string;
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="flex flex-col items-center"
    >
      <Form.Item<FieldType>
        name="displayName"
        rules={[{ required: true, message: "Please input your Display Name!" }]}
      >
        <Input className="w-full" placeholder="Display Name" type="text" />
      </Form.Item>
      <Form.Item<FieldType>
        name="photoURL"
        rules={[
          {
            type: "url",
            required: true,
            message: "Please input your Photo Url!",
          },
        ]}
      >
        <Input className="w-full" placeholder="Profile Url" type="url" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProfileForm;
