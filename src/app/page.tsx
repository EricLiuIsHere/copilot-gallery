import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          A guide to demonstrate how to utilize copilot to build a frontend app
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          By Copilot FE learning group
        </div>
      </div>
      <div className="flex justify-center">
        <video controls autoPlay={true} loop={true} style={{ width: 600 }} >
          <source src="/videos/0.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-5 lg:text-left">
        <a
          href="https://github.com/features/copilot/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className={`text-xl font-bold mb-2`}>
            Github Copilot{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h3>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Your AI pair programmer
          </p>
        </a>

        <a
          href="/intro"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          rel="noopener noreferrer"
        >
          <h3 className={`text-xl font-bold mb-2`}>
            Get Started{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h3>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore how we can make use of copilot in our daily work.
          </p>
        </a>

        <a
          href="/gallery"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          rel="noopener noreferrer"
        >
          <h3 className={`text-xl font-bold mb-2`}>
            Gallery{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h3>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore how we can make use of copilot in our daily work.
          </p>
        </a>
        <a
          href="/posts"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h3 className={`text-xl font-bold mb-2`}>
            Posts{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h3>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            You may interested in some articles.
          </p>
        </a>
        <a
          href="/limitations"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h3 className={`text-xl font-bold mb-2`}>
            Limitations{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h3>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            There are things Github Copilot are not so good at.
          </p>
        </a>
      </div>
    </main>
  )
}
