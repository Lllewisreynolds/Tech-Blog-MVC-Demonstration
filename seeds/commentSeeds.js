const { Comment } = require('../models');

// comment data
const commentData = [
    {
        user_id: 1,
        blog_id: 2,
        comment: "Incorrect. Do your research (and cite your sources!) next time."
    },
    {
        user_id: 2,
        blog_id: 1,
        comment: "Do you have a dedicated newsletter? I'd happily pay a subscription for more content like this."
    },
    {
        user_id: 3,
        blog_id: 3,
        comment: "Handlebars is moot. All dynamic injection is done with React nowadays."
    }
]

// provides a reusable function for quickly populating database with sample users

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;