import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import 'react-markdown-editor-lite/lib/index.css';

const MarkdownDisplay = ({ children }: { children: string }) => {
	return (
		<Markdown
			remarkPlugins={[remarkGfm]}
			components={{
				code(props) {
					const { children, className, ...rest } = props;
					const match = /language-(\w+)/.exec(className || '');
					return match ? (
						<SyntaxHighlighter PreTag="div" language={match[1]} style={dracula}>
							{String(children).replace(/\n$/, '')}
						</SyntaxHighlighter>
					) : (
						<code {...rest} className={className}>
							{children}
						</code>
					);
				},
				h1: ({ children }) => (
					<h1 className="text-4xl font-bold mt-4 mb-2">{children}</h1>
				),
				h2: ({ children }) => (
					<h2 className="text-3xl font-bold mt-4 mb-2">{children}</h2>
				),
				h3: ({ children }) => (
					<h3 className="text-2xl font-bold mt-4 mb-2">{children}</h3>
				),
				h4: ({ children }) => (
					<h4 className="text-xl font-bold mt-4 mb-2">{children}</h4>
				),
				p: ({ children }) => <p className="text-lg mt-4 mb-2">{children}</p>,
				br: ({ children }) => <br className="text-lg mt-4 mb-2">{children}</br>,
				ul: ({ children }) => (
					<ul className="ml-10 list-disc list-inside mt-4 mb-4">{children}</ul>
				),
				ol: ({ children }) => (
					<ol className="ml-10 list-decimal list-inside mt-4 mb-4">
						{children}
					</ol>
				),
				li: ({ children }) => (
					<li className="ml-10 list-inside text-lg lg mt-4 mb-4">{children}</li>
				),
				blockquote: ({ children }) => (
					<blockquote className="border-l-4 border-myPrimaryBlue/50 p-2 pl-4 italic mt-4 mb-4 bg-slate-50 rounded-sm">
						{children}
					</blockquote>
				),
				table: ({ children }) => (
					<table className="table-auto w-full mt-6 mb-6">{children}</table>
				),
				thead: ({ children }) => <thead className="text-lg">{children}</thead>,
				tbody: ({ children }) => <tbody className="text-lg">{children}</tbody>,
				tr: ({ children }) => <tr className="text-lg">{children}</tr>,
				th: ({ children }) => (
					<th className="border p-2 text-left border-myPrimaryBlue/80">
						{children}
					</th>
				),
				td: ({ children }) => (
					<td className="border p-2 text-left border-myPrimaryBlue/80">
						{children}
					</td>
				),
				a: ({ children }) => (
					<a className="text-myPrimaryBlue underline hover:text-myPrimaryRed hover:cursor-pointer">
						{children}
					</a>
				),
				// img: ({ children }) => (
				// 	<img className="object-cover" alt="image" width={900} height={500}>
				// 		{children}
				// 	</img>
				// ),
				img: ({ ...props }) => {
					return (
						<div className="flex items-center justify-center my-10">
							<img
								{...props}
								style={{ maxWidth: '100%' }}
								alt="image"
								className="object-cover"
								width={900}
								height={500}
							/>
						</div>
					);
				},
			}}
		>
			{children}
		</Markdown>
	);
};

export default MarkdownDisplay;
