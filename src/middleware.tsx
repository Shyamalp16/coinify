import { authMiddleware, clerkMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
    publicRoutes:["/site"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};