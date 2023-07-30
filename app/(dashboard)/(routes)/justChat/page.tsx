"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import ReactMarkdown from "react-markdown";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Header from "@/components/Header";
import { Lightbulb } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChatCompletionRequestMessage } from "openai";
import Empty from "@/components/Empty";
import Loader from "@/components/Loader";
import { cn } from "@/lib/utils";
import { justChat } from "@/lib/constants";

const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Please tell me what you want to chat about.",
  }),
});

export default function ProfileForm() {
  const router = useRouter();
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([
    // ...initialMessage,
    // ...testMessages,
  ]);
  // Create a form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  // Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };

      setMessages([...messages, userMessage]);
      const newMessages = [...messages, userMessage];

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: newMessages }),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const stream = response.body;
      if (!stream) {
        return;
      }
      // console.log(stream);
      const reader = stream.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let currentMessage = "";

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);
        currentMessage += chunkValue;
        setCurrentMessage((prev) => prev + chunkValue);
        // console.log(currentMessage);
      }

      setMessages((current) => [
        ...current,
        // userMessage,
        { role: "assistant", content: currentMessage },
      ]);
      setCurrentMessage("");

      form.reset();
    } catch (error: any) {
      // TODO: handle pro plan?
      console.log(error);
    } finally {
      router.refresh();
    }
  }

  return (
    <div className="flex flex-col">
      <Header
        title={justChat.label}
        icon={justChat.icon}
        description={justChat.description}
        iconColor={justChat.color}
        bgColor={justChat.bgColor}
      />

      <div className="px-4 lg:px-8 flex flex-col h-full">
        <div className="grow">
          {/* {messages.length < 2 && !isLoading && (
            <Empty label={"What are you interested in?"}></Empty>
          )} */}

          {messages.map((m, index) =>
            m.role !== "system" ? (
              <div
                key={index}
                className={cn(
                  "flex w-full p-8 my-3 rounded-lg items-start",
                  m.role === "user"
                    ? "flex-row bg-indigo-100 border-indigo-200"
                    : "flex-row bg-purple-100 border-purple-200"
                )}
              >
                <div className={m.role === "user" ? "mr-4" : "mr-4"}>
                  <img
                    className="w-10 h-10 object-cover rounded-full bg-indigo"
                    src={
                      m.role === "user"
                        ? "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                        : "/Logo.png"
                    }
                    alt={m.role}
                  />
                </div>
                <div className="w-full prose text-sm text-gray-700">
                  <ReactMarkdown>{m.content || ""}</ReactMarkdown>
                </div>
              </div>
            ) : null
          )}
          {!!currentMessage && (
            <div
              className={cn(
                "flex w-full p-8 my-3 rounded-lg items-start",
                "flex-row bg-purple-100 border-purple-200"
              )}
            >
              <div className={"mr-4"}>
                <img
                  className="w-10 h-10 object-cover rounded-full bg-indigo"
                  src={"/Logo.png"}
                />
              </div>
              <div className="w-full prose text-sm text-gray-700">
                <ReactMarkdown>{currentMessage || ""}</ReactMarkdown>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-self-end">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl>
                      <Input
                        placeholder="How can I become a SWE...?"
                        {...field}
                        className="outline-none border-none focus-visible:ring-transparent"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="col-span-12 lg:col-span-2 w-full bg-indigo-600 hover:bg-indigo-500"
                disabled={isLoading}
              >
                Let{"'"}s chat
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
