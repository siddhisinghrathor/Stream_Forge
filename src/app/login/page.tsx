"use client";

import { useState } from "react";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Card from "@/components/ui/card";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  function handleLogin() {
    console.log({
      email,
      password,
    });
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black p-6">
      <div className="w-full max-w-md">
        <Card title="Login to StreamForge">
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
            />

            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
            />

            <Button onClick={handleLogin}>
              Login
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}