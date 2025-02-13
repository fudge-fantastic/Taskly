import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="my-2 mr-2 rounded-lg bg-zinc-200 flex flex-col items-center justify-center w-full">
      <h1>Some Crazy Shit! Btw this will be our Home/Dashboard Page</h1>
    </div>
  );
}