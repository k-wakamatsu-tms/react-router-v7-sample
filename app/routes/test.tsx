import { Route } from "./+types/test"

export async function loader({params}:Route.LoaderArgs) {
    // delay 3 seconds
    await new Promise(resolve => setTimeout(resolve, 3000));

    return {
        message: "Hello World"
    }
}

export default function Test({loaderData}:Route.ComponentProps) {
    const {message} = loaderData;
    return <div>{message}</div>
}