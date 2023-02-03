import express from 'express';
import cors from 'cors';

import { Article } from './@core/types/types';

const app = express();

app.use(cors());

app.get('/', (req, res, next) => {
  res.send('ok');
});

app.get('/api/articles', (req, res, next) => {
  const articles: Article[] = [
    {
      id: 141,
      title: '첫번째 제목',
      content: '첫번째 게시글',
      created_at: new Date().toISOString(),
    },
    {
      id: 145,
      title: '두번째 제목',
      content: '두번째 게시글',
      created_at: new Date().toISOString(),
    },
  ];

  res.send(articles);
});

app.listen(3030, () => {
   console.log('listening') ;
});
