import React from "react";

export const BlogPosts = [
  {
    id: 1,
    title: "{`<Switch>`} No More",
    // category: ,
    // subCategory: ,
    content: [
      {type: "text", value: "You are now using React Router v6? Apparently. Anyway, SWITCH is no longer a thing and when you make your Routes (to navigate from page to page) you no longer place the component within the <Route> tags."},
      {type: "h2heading", value: "The Update/Fix:"},
      {type: "h3heading", value: "Old:"},
      {type: "code", value: `<Switch> </Switch>`},
      {type: "h3heading", value: "New:"},
      {type: "code", value: `<Routes> </Routes>`},
      {type: "text", value: "--------------------------------------"},
      {type: "h3heading", value: "Old:"},
      {type: "code", value:
`<Route path='/' exact>
  <Home />
</Route>
      
<Route path='/about'>
  <About />
</Route>`},
      {type: "h3heading", value: "New:"},
      {type: "code", value: `<Route path='/*' element={<Home />} />
<Route path='/about' element={<About />} />`}],
    myName: "Randee Johnson",
    // myAvatar: ,
    referenceLink: (
      <a href="https://reactrouter.com/en/main/upgrading/v5">
        Upgrading from v5 to v6.6.2 | React Router
      </a>
    ),
    createdAt: "Jan 17 2023",
    // cover:
  },
  {id: 2,
    title: "Getting Code to look like Code...",
    // category: ,
    // subCategory: ,
    content: [
      {type: "text", value: "While you were learning about how to put the last post into this Journal, you realized that you did not really know how to make it look like code on the webpage without VSCode thinking that it was supposed to do something on its end."},
      {type: "text", value: "Low and behold, you searched and searched until you learned about <pre> and <code>."},
      // {type: "code", value: "<pre>"},
      // {type: "text", value: "and"},
      // {type: "code", value: "<code>."},
      {type: "text", value: "Now, yes, you can just use these curly braces with backticks"},
      {type: "code", value:"`{INSERT CODE HERE}`"},
      {type: "text", value:"but it does not hold onto the formatting."},
      {type: "text", value: "Introduce <pre> and <code> where now you can just type in your code... you still need the {``}around your code, but now the formatting follows whatever you do. YAY!"},
      {type: "h3heading", value: "Do this"},
      {type: "code", value:
`<pre>
  <code>
    <div>Here is some text...</div>
  </code>
</pre>`
},
      {type: "h3heading", value: "to get..."},
      {type: "code", value:`<div>Here is some text...</div>`}],
                
    myName: "Randee Johnson",
    // myAvatar: ,
    referenceLink: (
      <a href="https://stackoverflow.com/questions/29460205/how-to-embed-literal-code-snippet-within-react-jsx-component">
      How to embed literal {`<code>`} snippet within React/JSX component?
      </a>
    ),
    createdAt: "Jan 17 2023",
    // cover:
  }
];

// {id: ,
//   title: ,
//   // category: ,
//   // subCategory: ,
//   description: ,
//   myName: "Randee Johnson",
//   // myAvatar: ,
//   referenceLink: (
//     <a href="">
      
//     </a>
//   ),
//   createdAt: "",
//   // cover:
// }




// -------------------------
{/* ENTRY 2 */}
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

    {
      /* ENTRY 3

https://stackoverflow.com/questions/53914013/failed-to-compile-module-not-found-cant-resolve-react-router-dom

switching to react-router-dom*/
    }

    {
      /* ENTRY 4

https://www.youtube.com/watch?v=uvB4cUi4RrI&t=923s&ab_channel=edutechional

How to Navigate Between Pages in React with React Router
*/
    }

    {
      /* 
ENTRY 5
scss/sass upgrade
@use instead of @import */
    }

    {
      /* ENTRY 6
https://write.corbpie.com/change-background-and-text-based-on-time-with-javascript/
change background based on time of day */
    }
