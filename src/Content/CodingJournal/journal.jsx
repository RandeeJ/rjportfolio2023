import React, { Component } from "react";
import BlogHeader from "./header";
import { BlogPosts } from "./posts/blogPosts";
import BlogList from "./list";
import BlogSearch from "./searchBar";

class Journal extends Component {
  render() {


    return (
      <div className="blogPost">
        {/* Page Header */}
        {/* <BlogHeader /> */}
        {/* Search Bar */}
        <BlogSearch />
        {/* Blog List and Empty List */}
        <BlogList blogs={BlogPosts} />
      </div>
    );
    }
  }
    export default Journal;

    // return (
    //       <div>
    //         {/* ENTRY 1 */}

    //         <div className="journal-entry entry1">
    //           <h1>1. {`<Switch>`} No More</h1>
    //           <h5 className="date">Jan 17 2023</h5>
    //           <a href="https://reactrouter.com/en/main/upgrading/v5">
    //             Upgrading from v5 to v6.6.2 | React Router
    //           </a>
    //           <p>
    //             You are now using React Router v6? Apparently.
    //             <br />
    //             Anyway, SWITCH is no longer a thing and when you make your Routes
    //             (to navigate from page to page) you no longer place the component
    //             within the {`<Route>`} tags.
    //           </p>
    //           <h2>The Update/Fix:</h2>
    //           <p>
    //             <h3>Old:</h3>
    //             <pre>
    //               <code>{`<Switch> </Switch>`}</code>
    //             </pre>
    //             <h3>New:</h3>
    //             <pre>
    //               <code>{`<Routes> </Routes>`}</code>
    //             </pre>
    //           </p>
    //           <p>
    //             <h3>Old:</h3>
    //             <pre>
    //               <code>
    //                 {`<Route path="/" exact>
    //     <Home />
    // </Route>

    // <Route path="/about">
    //     <About />
    // </Route>
    // `}
    //               </code>
    //             </pre>
    //             <h3>New:</h3>
    //             <pre>
    //               <code>{`<Route path="/*" element={<Home />} />
    // <Route path="/about" element={<About />} />`}</code>
    //             </pre>
    //           </p>
    //         </div>

    //         {/* ENTRY 2 */}
    //         <div className="journal-entry entry2">
    //           <h1>2. Getting Code to look like Code...</h1>
    //           <h5 className="date">Jan 17 2023</h5>
    //           <a href="https://stackoverflow.com/questions/29460205/how-to-embed-literal-code-snippet-within-react-jsx-component">
    //             How to embed literal {`<code>`} snippet within React/JSX component?
    //           </a>
    //           <p>
    //             While you were learning about how to put the last post into this
    //             Journal, you realized that you did not really know how to make it
    //             look like code on the webpage without VSCode thinking that it was
    //             supposed to do something on its end.
    //           </p>
    //           <p>
    //             Low and behold, you searched and searched until you learned about{" "}
    //             {`<pre>`} and {`<code>`}. Now, yes, you can just use these curly
    //             braces with backticks {"({`INSERT CODE HERE`})"} but it does not
    //             hold onto the formatting.
    //           </p>
    //           <p>
    //             Introduce {`<pre>`} and {`<code>`} where now you can just type in
    //             your code... you still need the {"{``}"} around your code, but now
    //             the formatting follows whatever you do. YAY!
    //           </p>

    //           <h3>Do this</h3>
    //           <pre>
    //             <code>
    //               {`<pre>
    //     <code>
    //         <div>
    //             Here is some text...
    //         </div>
    //     </code>
    // </pre>`}
    //             </code>
    //           </pre>

    //           <h3> to get...</h3>
    //           <pre>
    //             <code>{`<div>
    //     Here is some text...
    // </div>`}</code>
    //           </pre>
    //         </div>

//     {
//       /* ENTRY 3

// https://stackoverflow.com/questions/53914013/failed-to-compile-module-not-found-cant-resolve-react-router-dom

// switching to react-router-dom*/
//     }

//     {
//       /* ENTRY 4

// https://www.youtube.com/watch?v=uvB4cUi4RrI&t=923s&ab_channel=edutechional

// How to Navigate Between Pages in React with React Router
// */
//     }

//     {
//       /* 
// ENTRY 5
// scss/sass upgrade
// @use instead of @import */
//     }

//     {
//       /* ENTRY 6
// https://write.corbpie.com/change-background-and-text-based-on-time-with-javascript/
// change background based on time of day */
//     }

//     {
//       /* NEXT JOURNAL ENTRY ABOVE HERE */
//     }
//     // </div>
//     // );
//   }
// }

// export default Journal;
