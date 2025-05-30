import { Link } from "react-router"
import NavBar from "~/components/NavBar/NavBar"
import Footer from "~/components/Footer/Footer"

export default function HomePage() {

	return (
		<div className="bg-blue-200">
			<NavBar />
			<div className="relative isolate px-6 pt-14 lg:px-8">
				<div
					aria-hidden="true"
					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				>
					<div
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
						className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					/>
				</div>
				<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
					<div className="text-center">
						<h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
							Simplify Your Links, Amplify Your Reach
						</h1>
						<p className="mt-8 text-base font-medium text-pretty text-gray-600 sm:text-xl/8">
							Transform long, complex URLs into short, shareable links. Perfect for businesses, social media, and personal use.
						</p>
						<p className="mt-4 text-md text-gray-700">
    						Start shortening your URLs today and track their performance with detailed analytics.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/new"
								className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
							>
								Shorten Your URL
							</Link>
							<a href="https://github.com/Mfrozzz/Url-shortener" className="text-sm/6 font-semibold text-gray-900 cursor-pointer">
								Learn more <span aria-hidden="true">→</span>
							</a>
						</div>
					</div>
				</div>
				<div
					aria-hidden="true"
					className="absolute inset-x-0 top-[calc(100%-10rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-35rem)]"
				>
					<div
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
						className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					/>
				</div>
			</div>
			<Footer />
		</div>
	)
}