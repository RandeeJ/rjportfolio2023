// import React from "react";

export const blogPosts = [
  {
    id: 1,
    title: "{`<Switch>`} No More",
    // category: ,
    // subCategory: ,
    description:
      "<p> You are now using React Router v6? Apparently. Anyway, SWITCH is no longer a thing and when you make your Routes (to navigate from page to page) you no longer place the component within the {`<Route>`} tags. </p> <h2>The Update/Fix:</h2><p><h3>Old:</h3><pre><code>{`<Switch> </Switch>`}</code></pre><h3>New:</h3><pre><code>{`<Routes> </Routes>`}</code></pre></p><p><h3>Old:</h3><pre><code>{`<Route path='/' exact><Home /></Route><Route path='/about'><About /></Route>`}</code></pre><h3>New:</h3><pre><code>{`<Route path='/*' element={<Home />} /><Route path='/about' element={<About />} />`}</code></pre></p>",
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
];
