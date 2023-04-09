import React, { Component } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const BlogPostDescription = (props) => {
    const location = useLocation();
    const description = location.state ?  location.state.description.content : null;
    console.log("description", description)


    if (!description){
      return <div> No description available! :( </div>
    } else

    return (
    <div className="blogPost">
            {description.map((item, index) => {
              if (item.type === "text") {
                return <p key={index}>{item.value}</p>;
              } else if (item.type === "code") {
                return (<pre key={index}><code>{item.value}</code></pre>);
              } else if (item.type === "h2heading") {
                return <h2 key={index}>{item.value}</h2>;
              } else if (item.type === "h3heading") {
                return <h3 key={index}>{item.value}</h3>
              }
              return null;
            }
            )}
        </div>
    )
    
}
export default BlogPostDescription;

































  



//     constructor(props) {
//         super(props)


//         // this.state = {
//         //     id : this.props.id,
//         //     description: this.props.description

//         // }

//         // YOU WERE LOOKING AT THE COMPARISON BETWEEN JOURNAL AND BLOGPOST TO SEE HOW TO PULL THE CONTENT FROM THIS BLOGPOSTS INTO THIS DYNAMIC COMPONENT.
//     }

// function BlogPost(){

//     // render() {

//         // const BlogDetails = ({
//         //         blog: { id, description, title, createdAt, myName, referenceLink },
//         //       })

//         const { key, id, description } = this.props

//         return (
//             <div>
//                 YOUR POST
//                 {/* {this.state.id} */}
//                 {/* {this.props.id} */}
//                 {id}
//                 {key}

//                 {/* {this.state.description} */}
//                 {/* {this.props.description} */}
//                 {description}
//             </div>
//         );
//     // };
// }




//     let params = useParams();
//     return <div>{params.description}</div>
// }

// export default BlogPost;


//  => (
//     <div className="blogItem">
//       {/* 48:22 */}
//       {/* image here */}
//       {/* <img src ={cover} alt =" cover"/> */}
//       {/* <CategoryLabel label={category} /> */}
//       <h3>{title}</h3>
  
//       <div className="blogItem-description">
//         <h5>{referenceLink}</h5>
//         {description}
//       </div>
  
//       <footer>
//         <div className="blogItem-footer">
//           {/* <img src={myAvatar} alt="avatar" /> */}
//           <div>
//             <h6>{myName}</h6>
//             <p>{createdAt}</p>
//           </div>
//         </div>
//         <Link to={`/codingJournal/${id}`}> Read More </Link>
//       </footer>
//     </div>
//   );