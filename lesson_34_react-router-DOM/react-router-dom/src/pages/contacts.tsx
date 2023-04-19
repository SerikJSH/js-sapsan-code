import axios from "axios";
import { type } from "os";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// export const ContactsPage = () => {
//     return <h1>ContactsPage...</h1>
// }

type DataResponse = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export const PostsPage = () => {
  const [data, setData] = useState<DataResponse>();
  const params = useParams();
  //   console.log(params.postId);
  useEffect(function () {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then((response) => setData(response.data));
  }, []);
  useEffect(
    function () {
      console.log(data);
    },
    [data]
  );
  return <h1>PostsPage...<p></p> {data?.title && data?.body}</h1>;
};
