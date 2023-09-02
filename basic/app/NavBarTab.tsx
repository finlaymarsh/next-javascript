export default function NavBarTab(props: {
  name: string;
  link: string;
  text: string;
}) {
  return (
    <a href={props.link} rel="noopener noreferrer">
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {`${props.name} `}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{props.text}</p>
    </a>
  );
}
