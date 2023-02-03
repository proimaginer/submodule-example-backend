import express from  'express';

const app = express();

app.get('/', (req, res, next) => {
  res.send('ok');
});

app.get('/api/articles', (req, res, next) => {
  const articles: Article[] = [
    {
      id: 141,
      content: '첫번째 게시글',
    },
    {
      id: 145,
      content: '두번째 게시글',
    },
  ];

  res.send({ articles });
});

app.listen(3030, () => {
   console.log('listening') ;
});
