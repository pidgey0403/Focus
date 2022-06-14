const snoowrap = require('snoowrap');

export const scrapeSubreddit = async () => {
  const r = new snoowrap({ 
    userAgent: 'pidge',
    clientId: '9V2g2Ux4GnLbmJvdhaUjYQ',
    clientSecret: 'dSvAbBbp6a6LHjAhg1b88zYOQITG_Q',
    refreshToken: '71495886-Bn8NsfuTPipx81tYn63FvvvbGTqfYg'
  });

 
  const post = await r.getSubreddit("quotes").getTop({time: 'week',limit:5});
  let data = [];
  post.forEach((item) => {
    data.push({
      text: item.title
    })
  })
  return data;
};

