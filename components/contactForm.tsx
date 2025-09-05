'use client';
import React, { useRef, useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from './ui/button';
import { sendMessage } from '@/actions/sendMessage';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = Object.fromEntries(new FormData(e.currentTarget)) as {
      name: string;
      email: string;
      phone?: string;
      message: string;
    };

    try {
      const res = await sendMessage(data);
      toast.success(res?.message || "Successfully Send Message");
      formRef.current?.reset();
    } catch (error) {
        const err = error as Error
      toast.error(err?.message || 'Failed to Send Message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <form ref={formRef} onSubmit={handleSubmit} className="max-w-[600px] mx-auto flex flex-col gap-3">
        <div className="flex gap-3">
          <input name="name" type="text" placeholder="Your name" required className="border p-2 w-full rounded-md" />
          <input name="email" type="email" placeholder="Your email" required className="border p-2 w-full rounded-md" />
        </div>
        <input name="phone" type="text" placeholder="Phone Number" className="border p-2 w-full rounded-md" />
        <textarea name="message" placeholder="Write your message..." required className="border p-2 w-full rounded-md" />
        <Button type="submit" className="flex items-center gap-3">
          <Send /> {loading ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </>
  );
}
