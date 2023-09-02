import Link from "next/link";

export default function about() {
  return (
    <div>
      <h1>About</h1>

      <div>
        <ul>
          <li>
            <Link
              href={{
                pathname: "/blog/[topic]/[slug]",
                query: {
                  topic: "coding",
                  slug: "123",
                },
              }}
            >
              Example blog post under a topic
            </Link>
          </li>
          <li>
            <Link href="/">home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
