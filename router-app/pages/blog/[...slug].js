import { useRouter } from "next/router";
import React from "react";

const BlogPage = () => {
  const router = useRouter();
  console.log(router.query);
  return <div>BlogPage</div>;
};

export default BlogPage;
