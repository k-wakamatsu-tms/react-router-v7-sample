import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

type Prefecture = {
  id: string;
  code: string;
  name: string;
  area_id:number;
  created_at:string;
  updated_at:string;
}

export async function loader({params}:Route.LoaderArgs) {
  const response = await fetch("https://apis.apima.net/k2srm05wzm1pdl3xk0sv/v1/prefectures/")
  const data:Prefecture[] = await response.json()
  console.log(data)

  return data
}

export default function Home({loaderData}:Route.ComponentProps) {
  const prefectures = loaderData;

  return <>
  <NavLink to="/test">Test</NavLink>
  <div>{prefectures.map((prefecture) => prefecture.name)}</div>
  </>;
}
