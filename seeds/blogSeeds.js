const { Blog } = require('../models');

// blog data
const blogData = [
    {
        title: "Sequelize vs. MySQL",
        content: "Streamlined development, or granular control? The answer isn't so simple as a pure binary. Before abstracting away your database interactions, you should first understand how MySQL handles complex data structures.",
        user_id: 1
    },
    {
        title: "MVC Architecture - can it benefit your code?",
        content: "MVC provides a fine structure for your code, providing greater organisation, maintainability, and testability by separating your concerns into distinct layers.",
        user_id: 2
    },
    {
        title: "Handlebars and your front-end - what does it do?",
        content: "Handlebars simplifies dynamic content generation for your web pages by separating your presentation logic from any data through template expressions.",
        user_id: 3
    }
]

// provides a reusable function for quickly populating database with sample blog posts
const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;