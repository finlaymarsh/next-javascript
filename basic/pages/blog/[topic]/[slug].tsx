import { useRouter } from "next/router";

export default function BlogPost() {
  const router = useRouter();
  const { topic, slug } = router.query;

  return (
    <p>
      Post: {topic}/{slug}
    </p>
  ); // ... you will see the query params i.e 'Post: hello/123'
  // example request: http://localhost:3000/blog/hello/123
}
