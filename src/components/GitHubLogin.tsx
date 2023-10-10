"use client";
import { Button } from "antd";
import { signIn } from "next-auth/react";
import React from "react";

const GitHubLogin = () => {
  async function handleGithubSignin() {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  }
  return (
    <Button
      icon={<i className="fa-brands fa-github" />}
      onClick={() => handleGithubSignin()}
      size="large"
      className="w-full"
    >
      LOGIN
    </Button>
  );
};

export default GitHubLogin;
