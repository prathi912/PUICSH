"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Bot, User, Send } from "lucide-react";

import { answerFAQ } from "@/ai/flows/answer-faq";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const faqSchema = z.object({
  question: z.string().min(5, "Question must be at least 5 characters."),
});

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

export function Faq() {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof faqSchema>>({
    resolver: zodResolver(faqSchema),
    defaultValues: { question: "" },
  });

  async function onSubmit(values: z.infer<typeof faqSchema>) {
    setIsLoading(true);
    const userMessage: ChatMessage = { role: 'user', content: values.question };
    setChatHistory(prev => [...prev, userMessage]);
    form.reset();

    try {
      const result = await answerFAQ({ question: values.question });
      const assistantMessage: ChatMessage = { role: 'assistant', content: result.answer };
      setChatHistory(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = { role: 'assistant', content: "Sorry, I couldn't fetch an answer. Please try again." };
      setChatHistory(prev => [...prev, errorMessage]);
      console.error("Error fetching FAQ answer:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="faq" className="py-16 md:py-24 bg-card transition-all duration-500 ease-out data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold font-headline">Frequently Asked Questions</CardTitle>
            <CardDescription>Have a question? Ask our AI assistant!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 h-64 md:h-80 overflow-y-auto p-4 border rounded-md mb-4 bg-background">
              {chatHistory.map((message, index) => (
                <div key={index} className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}>
                  {message.role === 'assistant' && (
                    <Avatar>
                      <AvatarFallback><Bot /></AvatarFallback>
                    </Avatar>
                  )}
                  <div className={`rounded-lg p-3 max-w-[80%] ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                    <p className="text-sm">{message.content}</p>
                  </div>
                   {message.role === 'user' && (
                    <Avatar>
                      <AvatarFallback><User /></AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              {isLoading && (
                 <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarFallback><Bot /></AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg p-3 bg-muted">
                        <Skeleton className="h-4 w-32" />
                    </div>
                 </div>
              )}
               {chatHistory.length === 0 && !isLoading && (
                 <div className="flex items-center justify-center h-full text-muted-foreground text-center">
                    <p>Ask a question to start the conversation.</p>
                 </div>
               )}
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-2">
                <FormField
                  control={form.control}
                  name="question"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input placeholder="e.g., What is the conference date?" {...field} autoComplete="off" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} size="icon">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
