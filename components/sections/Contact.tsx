"use client";

import React from "react";
import Image from "next/image";

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
import conatctUs from "@/public/contact-us.svg";

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
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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
      label: page.conatct.form.servicesData.serv01.label,
      value: page.conatct.form.servicesData.serv01.value,
    },
    {
      label: page.conatct.form.servicesData.serv02.label,
      value: page.conatct.form.servicesData.serv02.value,
    },
    {
      label: page.conatct.form.servicesData.serv03.label,
      value: page.conatct.form.servicesData.serv03.value,
    },
    {
      label: page.conatct.form.servicesData.serv04.label,
      value: page.conatct.form.servicesData.serv04.value,
    },
    {
      label: page.conatct.form.servicesData.serv05.label,
      value: page.conatct.form.servicesData.serv05.value,
    },
    {
      label: page.conatct.form.servicesData.serv06.label,
      value: page.conatct.form.servicesData.serv06.value,
    },
    {
      label: page.conatct.form.servicesData.serv07.label,
      value: page.conatct.form.servicesData.serv07.value,
    },
    {
      label: page.conatct.form.servicesData.serv08.label,
      value: page.conatct.form.servicesData.serv08.value,
    },
    {
      label: page.conatct.form.servicesData.serv09.label,
      value: page.conatct.form.servicesData.serv09.value,
    },
    {
      label: page.conatct.form.servicesData.serv10.label,
      value: page.conatct.form.servicesData.serv10.value,
    },
    {
      label: page.conatct.form.servicesData.serv11.label,
      value: page.conatct.form.servicesData.serv11.value,
    },
    {
      label: page.conatct.form.servicesData.serv12.label,
      value: page.conatct.form.servicesData.serv12.value,
    },
    {
      label: page.conatct.form.servicesData.serv13.label,
      value: page.conatct.form.servicesData.serv13.value,
    },
  ];

  return (
    <section id="contact-us">
      <div className="container">
        <TitleSection>
          <Title>{page.conatct.title}</Title>
        </TitleSection>

        <div className="mt-20 flex gap-10 justify-center items-center flex-col lg:flex-row">
          <Image
            src={conatctUs}
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
                        {page.conatct.form.fullName.label}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={page.conatct.form.fullName.placeholder}
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
                        {page.conatct.form.email.label}
                      </FormLabel>
                      <FormControl className="text-left">
                        <Input
                          placeholder={page.conatct.form.email.placeholder}
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
                        {page.conatct.form.phoneNumber.label}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={
                            page.conatct.form.phoneNumber.placeholder
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
                        {page.conatct.form.services.label}
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
                                page.conatct.form.services.placeholder
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
                        {page.conatct.form.message.label}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={page.conatct.form.message.placeholder}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit button */}
                <Button
                  type="submit"
                  className="w-full px-10 md:w-fit mx-auto col-span-1 md:col-span-2 tracking-wider text-sm md:text-base lg:text-lg leading-8"
                >
                  {page.conatct.send}
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
