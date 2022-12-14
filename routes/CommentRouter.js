const router = require('express').Router()
const controller = require('../controllers/CommentController')

router.get('/get_all', controller.GetallComments)
router.get('/users_comments', controller.GetUsersComments)
router.get('/users_comments/id/:id', controller.GetUsersCommentsById)
router.get('/recipe_users', controller.GetRecipesWithUserComments)
router.post(
  '/create/user_id/:user_id/recipe_id/:recipe_id',
  controller.CreateComment
)
router.put(
  '/update/user_id/:userId/recipe_id/:recipeId',
  controller.UpdateComment
)
router.delete(
  '/user_id/:user_id/recipe_id/:recipe_id',
  controller.DeleteComment
)
module.exports = router
