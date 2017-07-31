webpackJsonp([0xb238d7d886907800],{"./node_modules/json-loader/index.js!./.cache/json/articles-continuous-deployment-with-surge.json":function(t,e){t.exports={data:{site:{siteMetadata:{title:"Steve Frost – Full Stack Web Developer",author:"Steve Frost"}},markdownRemark:{id:"/Users/stevefrost/Development/Websites/steveafrost.github.io/src/pages/articles/continuous-deployment-with-surge.md absPath of file >>> MarkdownRemark",html:'<p>As long as I’ve had a static-generated site, I’ve hosted it on GitHub Pages &#x26; built with Jekyll. If you take a quick look at <a href="https://www.staticgen.com/">what generators are the most popular</a>, Jekyll takes the cake. Although it is a well-thought, stable option, most of it’s popularity can be attributed to being natively supported by GitHub Pages which makes deployment seamless. Essentially, the entire file-system of Jekyll can be pushed up and GitHub will handle the build process – extremely convenient! But what about the other static-site generators or even a static-site built from scratch with a custom build process say through Gulp, <a href="https://steveafrost.com/articles/preprocessing-bundling-and-live-preview-with-gulp">as we covered before</a>. Well, that’s where Surge comes in.</p>\n<h3>What is Surge?</h3>\n<p>Surge is a CLI client that will feel familiar to developers who spend most of their time in Terminal - that’s most of us, right? It has plugins for popular build tools like Gulp &#x26; Grunt so that the publishing step can be built right into an app or you can publish straight from the CLI, or, our third option that we’ll be discussing here is using GitHooks to enable continuous deployment from the repository. </p>\n<h3>What is Continuous Deployment?</h3>\n<p>Continuous Deployment means that when code is published to the repository, it is set live without a step in-between. The action of GitHub w/ Jekyll building the static files &#x26; then deploying them is essentially this step. As a Jekyll site is being built, any commits are processed, built, then deployed.</p>\n<p>When using a custom environment or an alternate static-site generator that’s not hosted by GitHub Pages, we’re required to build this process into our own website or app. It sounds complicated, but it’s rather simple through GitHooks and a simple package.json script.</p>\n<p>(There’s also Continuous Delivery which is slightly different requiring a manual step to deploy - more about that <a href="https://puppet.com/blog/continuous-delivery-vs-continuous-deployment-what-s-diff">here</a>).</p>\n<h3>Build &#x26; Deploy w/ Surge</h3>\n<p>We’ll need to install a few dependencies in the project to get things started. </p>\n<ol>\n<li>If you don’t already have a package.json file, type <code>npm init</code> to create one. </li>\n<li>Following that, <code>npm install --save-dev surge git-scripts</code></li>\n<li>Add in a pre-push script in your package.json file. In addition to pre-push, there are several different parts of the git process that can be hooked into using GitHooks. Read more about those &#x26; GitHook managers <a href="http://githooks.com/">here</a>.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token string">"devDependencies"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  <span class="token string">"surge"</span><span class="token punctuation">:</span> <span class="token string">"latest"</span><span class="token punctuation">,</span>\n  <span class="token string">"git-scripts"</span><span class="token punctuation">:</span> <span class="token string">"latest"</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token string">"git"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  <span class="token string">"scripts"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"pre-push"</span><span class="token punctuation">:</span> <span class="token string">"surge --project ./public --domain steveafrost.com"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Now we’re ready to test it out. Try to commit some new changes to the repository and once you <code>git push</code>, the surge command will run on your ./public folder for the providing domain. Don’t forget to update those two parameters with your specific directory &#x26; domain.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>    Surge - surge.sh\n\n              email: hello@steveafrost.com\n              token: *****************\n       project path: /Users/stevefrost/Downloads/public</code></pre>\n      </div>\n<p>Awesome! Our most recent commit is pushed to GitHub while the ./public folder is sent over to Surge. One issue though, we haven’t rebuilt the ./public folder based on our most recent code. Let’s add that to the script too. In order to do this, use the specific command for the environment being worked in or the tool being used. In my case, I am using Gatsby so the command to take all dynamic files and make them static is <code>gatsby build</code>. Here is the new GitHook script.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token string">"git"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  <span class="token string">"scripts"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"pre-push"</span><span class="token punctuation">:</span> <span class="token string">"gatsby build &amp;&amp; surge --project ./public --domain steveafrost.com"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Simple as that! Now each time <code>git push</code> is run, Gatsby will run the build process, send that newly built ./public folder over to Surge, and commit the latest code to GitHub. Viva la automation!</p>',frontmatter:{title:"Continuous Deployment with Surge",date:"July 30, 2017"}}},pathContext:{path:"/articles/continuous-deployment-with-surge"}}}});
//# sourceMappingURL=path---articles-continuous-deployment-with-surge-dbd981726cd57f31795d.js.map