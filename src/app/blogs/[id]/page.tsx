import Comments from "@/components/Comments";
import FormComment from "@/components/FormComment";
import React from "react";

const BlogDetailsPage = () => {
  return (
    <div className="max-w-4xl max-auto py-8">
      <h1 className="text-3xl font-bold"> Blog 1</h1>
      <p>Written by: sumon0002001</p>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          fugit? Maxime doloremque reprehenderit accusamus totam consequuntur
          tempora error blanditiis unde neque, non soluta suscipit optio, libero
          omnis tempore sed quisquam.
        </p>
      </div>
      <Comments />
      <FormComment />
    </div>
  );
};

export default BlogDetailsPage;
