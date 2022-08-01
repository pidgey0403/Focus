import { StyledRedditComponent } from "./RedditComponent.styles";
import React, { useEffect, useState } from "react";
import { scrapeSubreddit } from "../../functions/reddit";

const RedditComponent = () => {
  // array of quotes for initialization of the quote widget state
  const dudQuotes = [
    "When you have a dream, you’ve got to grab it and never let go. - Carol Burnett",
    "There is nothing impossible to they who will try. - Alexander the Great",
    "Spread love everywhere you go. - Mother Teresa",
    "Perfection is not attainable, but if we chase perfection we can catch excellence. - Vince Lombardi",
    "No act of kindness, no matter how small, is ever wasted. - Aesop",
  ];

  /* Display results of calling Snoowrap, a Reddit API wrapper */
  let rand = Math.floor(Math.random() * 5); // generate random number within our array length
  const [redditPost, setRedditPost] = useState(dudQuotes[rand]); // create a state to handle displaying quotes from Reddit API

  useEffect(() => {
    //effect hook for updating quote widget
    const interval = setInterval(() => {
      let rand = Math.floor(Math.random() * 5);
      scrapeSubreddit()
        .then((posts) => {
          setRedditPost(posts[rand].text);
        }) // on successful return from promise, update reddit post state with a random quote
        .catch((error) => {
          console.log(`Could not retrieve quote: ${error}`);
        }); // on rejected return from promise, print error
    }, 300000); // call function after 5 minutes
    return () => clearInterval(interval); // unmount function to prevent mem. leaks
  }, []);

  return <StyledRedditComponent>{redditPost}</StyledRedditComponent>;
};

export default RedditComponent;
