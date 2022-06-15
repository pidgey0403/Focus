const snoowrap = require("snoowrap") ; // import snoowrap, a JS wrapper for Reddit's API

// Personal OAuth credentials: replace with your own if testing
const ID = '9V2g2Ux4GnLbmJvdhaUjYQ';
const secret = 'dSvAbBbp6a6LHjAhg1b88zYOQITG_Q';
const token = '71495886-kNq1PMoedl5cI4WK21pT6-FNevAeXw';

export const scrapeSubreddit = async () => { // create async function; allows us to create asynchronous requests
    const r = new snoowrap({ // make snoowrap object
        userAgent: 'pidge',
        clientId: ID,
        clientSecret: secret,
        refreshToken: token
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