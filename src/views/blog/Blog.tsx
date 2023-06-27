import React, { useState } from "react";
import WorkWithUs from "@/views/home/work-with-us/WorkWithUs";
import Articles from "@/views/blog/articles/Articles";
import { TextField, Box, Button, Container } from "@/components/common";
import Layout from "@/components/globals/Layout";

const Blog = () => {
  const [selected, setSelected] = useState<number>(0);
  return (
    <Layout
      height="h-auto"
      title={
        <TextField component="h1" variant="title">
          The latest <i>updates</i> on amet consectetur and aenean duis
          consequat <i>dictumst</i> purus.
        </TextField>
      }
    >
      <Container
        className="flex items-center space-x-3 md:space-x-5 py-5 text-sm md:text-base"
        variant={"fluid"}
      >
        {["All", "Updates", "Technology", "Strategy"].map((item, index) => (
          <Button
            variant={"text"}
            key={index}
            onClick={() => setSelected(index)}
            className={`px-0 py-1 ${selected == index && "border-b "}`}
          >
            {item}
          </Button>
        ))}
      </Container>
      <Articles />
      <WorkWithUs />
    </Layout>
  );
};

export default Blog;
