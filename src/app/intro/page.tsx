function IntroPage() {
    return (
        <div className="w-full">
            <div className="w-full px-4 py-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
                    Getting Onboard GitHub Copilot
                </h1>
                <p className="text-lg text-gray-800 dark:text-gray-100 mb-8">
                    GitHub Copilot is an AI-powered code assistant that helps developers write better code, faster.
                    To get started with GitHub Copilot, you'll need to follow these steps:
                </p>
                <div className="mb-8 flex flex-col items-center">
                    <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">Pre-requisite - Set Payment Info</h2>
                    <a href="/images/copilot-payment-info.png" className="contents" target="_blank" rel="noopener noreferrer">
                        <img src="/images/copilot-payment-info.png" alt="GitHub Copilot Payment Info" className="w-1/3 mx-auto rounded-lg shadow-lg cursor-pointer" />
                    </a>
                    <p className="text-sm text-gray-500 dark:text-gray-400">GitHub Copilot Payment Info</p>

                </div>
                <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">Getting started</h2>

                <ol className="list-decimal list-inside mb-8">
                    <li className="text-lg text-gray-800 dark:text-gray-100 mb-2">
                        Find Github Copilot in your account settings{' '}
                        <a
                            href="https://github.com/settings/copilot"
                            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://github.com/settings/copilot
                        </a>
                        .
                        <span className="text-sm text-gray-500 dark:text-gray-400"> (You may need to login first)</span>
                    </li>
                    <div className="mb-8 flex flex-col items-center">
                        <a href="/images/copilot-subscribe.png" className="contents" target="_blank" rel="noopener noreferrer">
                            <img src="/images/copilot-subscribe.png" alt="GitHub Copilot subscribe Info" className="w-1/3 mx-auto rounded-lg shadow-lg cursor-pointer" />
                        </a>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Buy Github Copilot</p>

                    </div>
                    <div className="mb-8 flex flex-col items-center">
                        <a href="/images/copilot-pay-frequency.png" className="contents" target="_blank" rel="noopener noreferrer">
                            <img src="/images/copilot-pay-frequency.png" alt="GitHub Copilot Payment Frequency" className="w-1/3 mx-auto rounded-lg shadow-lg cursor-pointer" />
                        </a>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Choose pay frequency</p>

                    </div>
                    <li className="text-lg text-gray-800 dark:text-gray-100 mb-2">
                        Install the GitHub Copilot extension for Visual Studio Code.
                    </li>
                    <div className="mb-8 flex flex-col items-center">
                        <a href="/images/copilot-plugin.png" className="contents" target="_blank" rel="noopener noreferrer">
                            <img src="/images/copilot-plugin.png" alt="GitHub Copilot Plugin" className="w-1/3 mx-auto rounded-lg shadow-lg cursor-pointer" />
                        </a>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Basic plugin in VS code</p>

                    </div>
                    <li className="text-lg text-gray-800 dark:text-gray-100 mb-2">
                        Open a project in Visual Studio Code and start coding!
                    </li>
                    <li className="text-lg text-gray-800 dark:text-gray-100 mb-2">
                        Enroll in the GitHub Copilot beta.{' '}
                        <span className="text-sm text-gray-500 dark:text-gray-400"> (Copilot Chat)</span>
                        <br />
                        <a
                            href="https://github.com/github-copilot/chat_waitlist_signup/join"
                            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://github.com/github-copilot/chat_waitlist_signup/join
                        </a>


                        <br />
                        Once you are enrolled, you will be able to get an email to notify you that you can start using Copilot Chat
                    </li>
                    <li className="text-lg text-gray-800 dark:text-gray-100 mb-2">
                        Install the GitHub Copilot Chat extension.
                    </li>
                    <div className="mb-8 flex flex-col items-center">
                        <a href="/images/copilot-plugin-chat.png" className="contents" target="_blank" rel="noopener noreferrer">
                            <img src="/images/copilot-plugin-chat.png" alt="GitHub Copilot Plugin for Chat" className="w-1/3 mx-auto rounded-lg shadow-lg cursor-pointer" />
                        </a>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Copilot Chat plugin</p>

                    </div>
                    <li className="text-lg text-gray-800 dark:text-gray-100 mb-2">
                        Enjoy the GPT-4 powered AI code assistant! More examples you may visit the {' '}
                        <a
                            href="/gallery"
                            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Gallery
                        </a>
                    </li>
                    

                </ol>
                <p className="text-lg text-gray-800 dark:text-gray-100 mb-8">
                    With GitHub Copilot, you'll be able to generate code snippets, complete code based on your context, and more.
                    It's a powerful tool that can help you save time and write better code.
                    Give it a try and see how it can improve your development workflow!
                </p>

            </div>
        </div>
    );
}

export default IntroPage;