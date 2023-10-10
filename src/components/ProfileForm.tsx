"use client";
import { updateMyProfile } from "@/app/firebase.config";
import { Button, Form, Input, message, notification } from "antd";

const ProfileForm = () => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const updateHandler = async (displayName: string, photoURL: string) => {
    updateMyProfile({
      displayName: displayName,
      photoURL: photoURL,
    });
  };
  const openNotification = () => {
    api.error({
      message: "Profile infos could not be updated!!!",
    });
  };

  const onFinish = async (values: any) => {
    // console.log(values);
    try {
      await updateHandler(values.displayName, values.photoUrl);
      message.success("Profile Updated.");
    } catch (error) {
      openNotification();
    }
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
        rules={[{ required: true, message: "Please input your title!" }]}
      >
        <Input className="w-full" placeholder="Display Name" type="text" />
      </Form.Item>
      <Form.Item<FieldType>
        name="photoURL"
        rules={[{ required: true, message: "Please input your title!" }]}
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
