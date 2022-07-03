const snoowrap = require("snoowrap") ; // import snoowrap, a JS wrapper for Reddit's API
import auth from './config.json' // import reddit API credentials


export const scrapeSubreddit = async () => { // create async function; allows us to create asynchronous requests
    const r = new snoowrap({ // make snoowrap object
        userAgent: '',
        clientId: auth.id,
        clientSecret: auth.secret,
        refreshToken: auth.token
    });

    const post = await r.getSubreddit("quotes").getTop({time: 'week',limit:5}); // grab 5 top posts from subreddit "quotes"
    let data: { text: string; }[] = []; // create empty array to hold text
    post.forEach((item: { title: any; }) => { // iterate over post object and push the title of each reddit post into the data array
      data.push({
        text: item.title
      })
    })
    return data;
}
