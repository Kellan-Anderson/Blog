'use client'

import {  } from "@radix-ui/react-accordion";
//import { TabsTrigger } from "@radix-ui/react-tabs";
import { useEffect, useState } from "react";
import { SubmitHandler, UseFormReturn, useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "~/components/ui/tabs";
import { Textarea } from "~/components/ui/textarea";

type BlogType = {
  content: string,
  categories: string[]
}

export default function MakePostPage() {

  const { handleSubmit, register, getValues, watch } = useForm<BlogType>();

  const Editor = () => {
    // State of the react-markdown editor
    const defaultStr = "## Type something to see it appear here"
    const [text, setText] = useState(defaultStr);
    useEffect(() => {
      const subscription = watch((value, { name, type }) => {
        if(value.content === "" || !value.content) {
          setText(defaultStr);
        } else {
          setText(value.content);
        }
      })
      return () => subscription.unsubscribe()
    }, [watch])

    return (
      <Card>
        <CardHeader>
          <CardTitle>Editor</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="editor">
            <TabsList>
              <TabsTrigger value="editor">Editor</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
            <TabsContent value="editor">
              <Textarea 
                className=""
                {...register('content')}
              />
            </TabsContent>
            <TabsContent value="preview">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {text}
              </ReactMarkdown>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    );
  }

  const Publisher = () => {
    return (
      <Card>
        <Accordion defaultValue="publisher" type="single" collapsible className="p-4">
          <AccordionItem value="publisher">
            <AccordionTrigger>Publish</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col">
                <Button variant='default' type='submit'>Publish</Button>
                <div className="flex flex-row">
                  <Button variant='secondary' type='button'>Save as draft</Button>
                  <Button variant='secondary' type='button'>Preview</Button>
                </div>
                <Button variant='destructive' type='button'>Discard</Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    );
  }

  const Categories = () => {
    return (
      <Card>
        <Accordion defaultValue='categories' type='single' collapsible className="p-4">
          <AccordionItem value="categories">
            <AccordionTrigger value='categories'>Categories</AccordionTrigger>
            <AccordionContent>
              <input type='checkbox' id='category-1' value="fake cat1" {...register('categories')} /><Label htmlFor="category-1">Fake Category</Label>
              <input type='checkbox' id='category-1' value="fake cat2" {...register('categories')} /><Label htmlFor="category-1">Fake Category</Label>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    );
  }

  const Tags = () => {

  }

  const Images = () => {

  }

  const Social = () => {

  }



  return (
    <form onSubmit={handleSubmit((values) => console.log(values.categories))}>
      <Editor />
      <Publisher />
      <Categories />
    </form>
  );
}

/*
Primary:
  Place for title
  Button to add media
  Button to add Thumbnail
  Editor
    Tab system to swap between page preview and text
Secondary
  Publish section
    Buttons for Save draft, preview and post
    Schedule post button
  Categories
    Selection of all user made categories
    Button to add a category
  Tags
    Input for user to select tags for the post
    Tags are what the post will be searched by
    Auto separate tags by semi-colon (;)
  Images
    List of images the user has uploaded to the post
    When you click on an image, it copies the link for the markdown editor
  Misc.
    Buttons to post to social media websites

  Layout
    Form
      Editor


  const savePost = async () => {
    const res = await fetch('/api/blog', {
      method: 'post',
      body: JSON.stringify({
        content: value
      })
    });
    console.log(res);
  }
*/
