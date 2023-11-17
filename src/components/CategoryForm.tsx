"use client";
import { addCategory } from "../app/firebase.config";
import { Button, Form, Input } from "antd";
import React from "react";

const CategoryForm = () => {
  const [form] = Form.useForm();
  const onFinish = async (values: any) => {
    addCategory(values.title);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    title?: string;
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
        name="title"
        rules={[{ required: true, message: "Please input your title!" }]}
      >
        <Input className="w-full" placeholder="Title" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Category
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CategoryForm;
