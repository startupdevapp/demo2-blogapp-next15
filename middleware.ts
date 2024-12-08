import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export const adminUserId = process.env.CLERK_ADMIN_USER_ID;

// For only admin user is allowed to access the dashboard

export default clerkMiddleware(async (auth, req) => {
	const { userId } = await auth();
	const url = req.nextUrl.clone();
	url.pathname = '/unauthorized';
	if (!userId && isProtectedRoute(req)) {
		return (await auth()).redirectToSignIn();
	}
	if (userId !== adminUserId && isProtectedRoute(req)) {
		return NextResponse.rewrite(url);
	}
});

export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		'/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
		// Always run for API routes
		'/(api|trpc)(.*)',
	],
};
