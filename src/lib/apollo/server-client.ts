import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { cookies } from "next/headers";

function createApolloClient(token?: string) {
  return new ApolloClient({
    link: new HttpLink({
      uri:
        process.env.NEXT_PUBLIC_ERXES_ENDPOINT ??
        process.env.ERXES_ENDPOINT ??
        process.env.GRAPHQL_URL ??
        "/graphql",
      headers: {
        "x-app-token": process.env.NEXT_PUBLIC_ERXES_APP_TOKEN ?? process.env.ERXES_APP_TOKEN ?? "",
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      },
      fetchOptions: { cache: "no-store" },
    }),
    cache: new InMemoryCache(),
  });
}

export async function getServerApolloClient() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  return createApolloClient(token);
}

export function getStaticApolloClient() {
  return createApolloClient();
}
