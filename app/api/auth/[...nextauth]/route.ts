import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret: "CKSuub01x/OgczbAQ8igNeO9vQJzIdiksb6xdk5bs1c=",
});

export { handler as GET, handler as POST };
