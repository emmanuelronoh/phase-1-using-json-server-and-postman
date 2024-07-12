const axios = require('axios');

const baseURL = 'http://localhost:3000';

// Function to get all articles
async function getArticles() {
  try {
    const response = await axios.get(`${baseURL}/articles`);
    console.log('GET Response:', response.data);
  } catch (error) {
    console.error('Error getting articles:', error);
  }
}

// Function to create a new article
async function createArticle(article) {
  try {
    const response = await axios.post(`${baseURL}/articles`, article);
    console.log('POST Response:', response.data);
  } catch (error) {
    console.error('Error creating article:', error);
  }
}

// Test the functions
async function test() {
  // Get all articles
  await getArticles();

  // Create a new article
  const newArticle = {
    title: 'Fourth Article',
    content: 'This is another example!'
  };
  await createArticle(newArticle);

  // Get all articles again to verify the new article was added
  await getArticles();
}

test();
