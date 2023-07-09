console.log('hello from river again!');

function calculateReadingTime(content) {
  // The average reading speed in words per minute
  var wordsPerMinute = 200;

  // Calculate the number of words in the content
  var wordCount = content.trim().split(/\s+/).length;

  // Calculate the reading time in minutes
  var readingTime = Math.ceil(wordCount / wordsPerMinute);

  return readingTime;
}
