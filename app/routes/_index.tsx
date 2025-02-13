import type { MetaFunction } from "@remix-run/node";
import {Component} from "~/components/donutChart"

export const meta: MetaFunction = () => {
  return [
    { title: "Taskly" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
      <div className="my-2 mr-2 rounded-lg bg-zinc-100 border-zinc-400 border w-full">
        <div className="flex justify-between">
          <Component />
          <Component />
          <Component />
        </div>
      </div>
  );
}

