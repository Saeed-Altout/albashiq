"use client";

import React, { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { Title, TitleSection } from "@/components/common/TitleSection";
import contactUs from "@/public/contact-us.svg";
import toast from "react-hot-toast";
import { CircleDashed } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Invalid full name",
  }),
  email: z.string().email(),
  phoneNumber: z.string().min(10, {
    message: "Invalid phone number, must be at least 10 numbers",
  }),
  message: z.string().optional(),
  services: z.string().min(1, {
    message: "Please select a service to order.",
  }),
});

const Contact = ({ page }: { page: any }) => {
  const [loading, setLoading] = useState(false);

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    emailjs
      .send(
        "service_4yxknul",
        "template_vz9jyt7",
        {
          from_name: values.username,
          to_name: "Albashiq Company",
          from_email: values.email,
          to_email: "services@albashiq.net",
          message: values.message,
          phoneNumber: values.phoneNumber,
          service: values.services,
        },
        "braUPkRv7rc2nn0fk"
      )
      .then(
        () => {
          setLoading(false);
          toast.success(page.contact.messageSuccess);
        },
        (error) => {
          setLoading(false);
          toast.error(page.contact.messageError);
          console.log(error);
        }
      );
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      phoneNumber: "",
      message: "",
      services: "",
    },
  });

  const services = [
    {
      label: page.contact.form.servicesData.serv01.label,
      value: page.contact.form.servicesData.serv01.value,
    },
    {
      label: page.contact.form.servicesData.serv02.label,
      value: page.contact.form.servicesData.serv02.value,
    },
    {
      label: page.contact.form.servicesData.serv03.label,
      value: page.contact.form.servicesData.serv03.value,
    },
    {
      label: page.contact.form.servicesData.serv04.label,
      value: page.contact.form.servicesData.serv04.value,
    },
    {
      label: page.contact.form.servicesData.serv05.label,
      value: page.contact.form.servicesData.serv05.value,
    },
    {
      label: page.contact.form.servicesData.serv06.label,
      value: page.contact.form.servicesData.serv06.value,
    },
    {
      label: page.contact.form.servicesData.serv07.label,
      value: page.contact.form.servicesData.serv07.value,
    },
    {
      label: page.contact.form.servicesData.serv08.label,
      value: page.contact.form.servicesData.serv08.value,
    },
    {
      label: page.contact.form.servicesData.serv09.label,
      value: page.contact.form.servicesData.serv09.value,
    },
    {
      label: page.contact.form.servicesData.serv10.label,
      value: page.contact.form.servicesData.serv10.value,
    },
    {
      label: page.contact.form.servicesData.serv11.label,
      value: page.contact.form.servicesData.serv11.value,
    },
    {
      label: page.contact.form.servicesData.serv12.label,
      value: page.contact.form.servicesData.serv12.value,
    },
    {
      label: page.contact.form.servicesData.serv13.label,
      value: page.contact.form.servicesData.serv13.value,
    },
  ];

  return (
    <section id="contact-us">
      <div className="container">
        <TitleSection>
          <Title>{page.contact.title}</Title>
        </TitleSection>

        <div className="mt-20 flex gap-10 justify-center items-center flex-col lg:flex-row">
          <Image
            src={contactUs}
            alt="Contact Us"
            priority
            loading="eager"
            className="w-full sm:w-[450px] md:w-[500px] lg:w-[550px]"
          />

          <div className="w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-5"
              >
                {/* FormField for username */}
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="col-span-1">
                      <FormLabel className="text-muted-foreground tracking-wider text-sm md:text-base lg:text-lg leading-8">
                        {page.contact.form.fullName.label}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={page.contact.form.fullName.placeholder}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* FormField for email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="col-span-1">
                      <FormLabel className="text-muted-foreground tracking-wider text-sm md:text-base lg:text-lg leading-8">
                        {page.contact.form.email.label}
                      </FormLabel>
                      <FormControl className="text-left">
                        <Input
                          placeholder={page.contact.form.email.placeholder}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* FormField for phone number */}
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="col-span-1">
                      <FormLabel className="text-muted-foreground tracking-wider text-sm md:text-base lg:text-lg leading-8">
                        {page.contact.form.phoneNumber.label}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={
                            page.contact.form.phoneNumber.placeholder
                          }
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* FormField for services */}
                <FormField
                  control={form.control}
                  name="services"
                  render={({ field }) => (
                    <FormItem className="col-span-1">
                      <FormLabel className="text-muted-foreground tracking-wider text-sm md:text-base lg:text-lg leading-8">
                        {page.contact.form.services.label}
                      </FormLabel>
                      {/* Select component for services */}
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="h-fit">
                            <SelectValue
                              placeholder={
                                page.contact.form.services.placeholder
                              }
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {/* Map through services and render SelectItem for each */}
                          {services.map((serv) => (
                            <SelectItem key={serv.label} value={serv.value}>
                              {serv.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* FormField for message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="col-span-1 md:col-span-2">
                      <FormLabel className="text-muted-foreground tracking-wider text-sm md:text-base lg:text-lg leading-8">
                        {page.contact.form.message.label}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          rows={10}
                          placeholder={page.contact.form.message.placeholder}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit button */}
                <Button
                  disabled={loading}
                  type="submit"
                  className="w-full px-10 md:w-fit mx-auto col-span-1 md:col-span-2 tracking-wider text-sm md:text-base lg:text-lg leading-8"
                >
                  {loading ? (
                    <div className="flex justify-center items-center gap-2">
                      {page.contact.sending}
                      <span>
                        {loading && (
                          <CircleDashed className="h-4 w-5 animate-spin" />
                        )}
                      </span>
                    </div>
                  ) : (
                    page.contact.send
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
