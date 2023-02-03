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
      content: '첫번째 게시글',
      created_at: new Date(),
    },
    {
      id: 145,
      content: '두번째 게시글',
      created_at: new Date(),
    },
  ];

  res.send(articles);
});

app.listen(3030, () => {
   console.log('listening') ;
});
