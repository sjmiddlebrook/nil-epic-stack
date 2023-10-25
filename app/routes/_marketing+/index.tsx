import { type MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => [{ title: 'Epic Stack' }]

export default function Index() {
	return (
		<main className="flex flex-col flex-1 items-center justify-center sm:pb-16 sm:pt-8">
			<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
				<h1 className="text-center text-mega font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
					<a
						className="block uppercase text-purple-800"
						href="https://www.epicweb.dev/stack"
					>
						<span>Epic Stack</span>
						<svg
							className="mx-auto mt-2"
							xmlns="http://www.w3.org/2000/svg"
							width="120"
							height="120"
							fill="none"
							viewBox="0 0 65 65"
						>
							<path
								fill="currentColor"
								d="M39.445 25.555 37 17.163 65 0 47.821 28l-8.376-2.445Zm-13.89 0L28 17.163 0 0l17.179 28 8.376-2.445Zm13.89 13.89L37 47.837 65 65 47.821 37l-8.376 2.445Zm-13.89 0L28 47.837 0 65l17.179-28 8.376 2.445Z"
							></path>
						</svg>
					</a>
				</h1>
				<p className="mx-auto max-w-lg pt-20 text-center text-xl text-slate-700 sm:max-w-3xl">
					Check the{' '}
					<a
						className="underline"
						href="https://github.com/epicweb-dev/epic-stack/blob/main/docs/getting-started.md"
					>
						Getting Started
					</a>{' '}
					guide file for how to get your project off the ground!
				</p>
			</div>
		</main>
	)
}
