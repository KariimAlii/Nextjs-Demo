import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const DUMMY_NEWS = [
  {
    slug: 'will-ai-replace-humans',
    title: 'Will AI Replace Humans?',
    image: 'ai-robot.jpg',
    date: '2021-07-01',
    content:
      'Since late 2022 AI is on the rise and therefore many people worry whether AI will replace humans. The answer is not that simple. AI is a tool that can be used to automate tasks, but it can also be used to augment human capabilities. The future is not set in stone, but it is clear that AI will play a big role in the future. The question is how we will use it.',
  },
  {
    slug: 'beaver-plague',
    title: 'A Plague of Beavers',
    image: 'beaver.jpg',
    date: '2022-05-01',
    content:
      'Beavers are taking over the world. They are building dams everywhere and flooding entire cities. What can we do to stop them?',
  },
  {
    slug: 'couple-cooking',
    title: 'Spend more time together!',
    image: 'couple-cooking.jpg',
    date: '2024-03-01',
    content:
      'Cooking together is a great way to spend more time with your partner. It is fun and you get to eat something delicious afterwards. What are you waiting for? Get cooking!',
  },
  {
    slug: 'hiking',
    title: 'Hiking is the best!',
    image: 'hiking.jpg',
    date: '2024-01-01',
    content:
      'Hiking is a great way to get some exercise and enjoy the great outdoors. It is also a great way to clear your mind and reduce stress. So what are you waiting for? Get out there and start hiking!',
  },
  {
    slug: 'landscape',
    title: 'The beauty of landscape',
    image: 'landscape.jpg',
    date: '2022-07-01',
    content:
      'Landscape photography is a great way to capture the beauty of nature. It is also a great way to get outside and enjoy the great outdoors. So what are you waiting for? Get out there and start taking some pictures!',
  },
];

// 1. Mongoose Schema & Model
const newsSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: String, required: true },
  image: { type: String, required: true },
});

const News = mongoose.model('News', newsSchema);

// 2. Init function to insert dummy data if empty
async function initDb() {
  const count = await News.countDocuments();

  if (count === 0) {
    await News.insertMany(DUMMY_NEWS);
    console.log('Dummy data inserted.');
  }
}

const app = express();
app.use(cors());

// 3. Route to get all news
app.get('/news', async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

// 4. Connect to MongoDB and start server
mongoose
  .connect('mongodb://localhost:27017/news-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log('Connected to MongoDB.');
    await initDb();
    app.listen(8080, () => console.log('Server is running on http://localhost:8080'));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
