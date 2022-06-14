const snoowrap = require("snoowrap") ;

const ID = '9V2g2Ux4GnLbmJvdhaUjYQ';
const secret = 'dSvAbBbp6a6LHjAhg1b88zYOQITG_Q';
const token = '71495886-kNq1PMoedl5cI4WK21pT6-FNevAeXw';

export const scrapeSubreddit = async () => {
    const r = new snoowrap({
        userAgent: 'pidge',
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