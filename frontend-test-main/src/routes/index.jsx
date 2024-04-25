import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Homepage,
});

function Homepage() {
  return (
    <section className='h-full flex justify-center items-center flex-col gap-8'>
      <Stage
        title={"第一階段 JS 測驗"}
        link={"/js"}
      />
      <Stage
        title={"第二階段 react 測驗"}
        link={"/react"}
      />
    </section>
  );
}

function Stage({ title, link }) {
  return (
    <section className='flex flex-col gap-2 justify-center items-center'>
      <h3 className='text-xl'>{title}</h3>
      <Link
        to={link}
        className='uppercase border-2 px-2 py-1'
      >
        go
      </Link>
    </section>
  );
}
