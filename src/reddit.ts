const snoowrap = require("snoowrap") ;

const ID = '';
const secret = '';
const token = '';

export const scrapeSubreddit = async () => {
    const r = new snoowrap({
        userAgent: '',
        clientId: ID,
        clientSecret: secret,
        refreshToken: token
    });

    const post = await r.getSubreddit("quotes").getTop({time: 'week',limit:5});
    let data: { text: string; }[] = [];
    post.forEach((item: { title: any; }) => {
      data.push({
        text: item.title
      })
    })
    return data;
}