const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Route handler for dynamic Blog id created
router.get('/editBlog/:id', withAuth, async (req, res) => {

    try {
        /* withAuth middleware invoked above - if the blog already exists (accessed by Primary Key), 
        it should only be accessible to logged-in users in the first place */
        const updateBlog = await Blog.findByPk(req.params.id);
        if (updateBlog) {

            const blog = updateBlog.get({ plain: true });

            res.render('editBlog', {
                ...blog,
                logged_in: true
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json(e);

    }
});

module.exports = router;