"use client";
import { addAnime, getCategories } from "../app/firebase.config";
import { Category } from "@/lib/Interface";
import { Button, Form, Input, Select, message, notification } from "antd";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

async function getData() {
  const res = await getCategories();
  if (!res) {
    throw new Error("Failed to fetch data");
  }
  return res;
}

const AnimeForm = () => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const [categories, setCategories] = useState<Category[]>([]);
  const { data: sesion, status } = useSession();

  const openNotification = () => {
    api.error({
      message: "Anime could not be added!!!",
    });
  };

  const onFinish = async (values: any) => {
    try {
      await addAnime(
        values.categories,
        values.title,
        values.summary,
        values.image,
        sesion?.user?.name || "Anonymous"
      );
      form.resetFields();
      message.success("Anime was added.");
    } catch (error) {
      openNotification();
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    categories: string[];
    title: string;
    summary: string;
    image: string;
  };

  const initialAciton = async () => {
    const data = await getData();
    setCategories(data);
  };
  useEffect(() => {
    initialAciton();
    return () => {
      setCategories([]);
    };
  }, []);
  return (
    <Form
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        name="categories"
        rules={[{ required: true, message: "Please select category!" }]}
      >
        <Select
          showSearch
          mode="multiple"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          placeholder="Categories"
          options={categories.map((category) => {
            return {
              value: category.id,
              label: category.title,
            };
          })}
        />
      </Form.Item>
      <Form.Item<FieldType>
        name="title"
        rules={[{ required: true, message: "Please input title!" }]}
      >
        <Input className="w-full" placeholder="Title" type="text" />
      </Form.Item>
      <Form.Item<FieldType>
        name="summary"
        rules={[{ required: true, message: "Please input summary!" }]}
      >
        <Input.TextArea className="w-full" placeholder="Summary of Anime" />
      </Form.Item>
      <Form.Item<FieldType>
        name="image"
        rules={[{ required: true, message: "Please input image url!" }]}
      >
        <Input className="w-full" placeholder="Image Url of Anime" type="url" />
      </Form.Item>

      <Form.Item className="float-right">
        <Button type="primary" htmlType="submit">
          Add Anime
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AnimeForm;
