const { Recipe, Comment, User } = require('../models')

const CreateComment = async (req, res) => {
  try {
    const userId = parseInt(req.params.user_id)
    const recipeId = parseInt(req.params.recipe_id)

    let itemBody = {
      userId,
      recipeId,
      ...req.body
    }
    const addToComment = await Comment.create(itemBody)
    res.send(addToComment)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const UpdateComment = async (req, res) => {
  try {
    const updateComment = await Comment.update(
      { ...req.body },
      {
        where: {
          userId: req.params.userId,
          recipeId: req.params.recipeId
        },
        returning: true
      }
    )
    res.send(updateComment)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const DeleteComment = async (req, res) => {
  try {
    let recipeId = parseInt(req.params.recipe_id)
    let userId = parseInt(req.params.user_id)
    await Comment.destroy({ where: { recipeId: recipeId, userId: userId } })
    res.send({ message: `Deleted Comment recipe with and id of ${recipeId}` })
  } catch (error) {
    throw error
  }
}

const GetallComments = async (req, res) => {
  try {
    const Comments = await Comment.findAll()
    res.send(Comments)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetCommentsByRecipeId = async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: {
        recipeId: req.params.recipe_id
      }
    })

    res.send(comments)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetUsersComments = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [{ model: Recipe, as: 'user_comments' }, { model: Comment }]
    })
    res.send(users)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetUsersCommentsById = async (req, res) => {
  try {
    const users = await User.findByPk(req.params.id, {
      include: [{ model: Recipe, as: 'user_Comments' }]
    })
    res.send(users)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetRecipesWithUserComments = async (req, res) => {
  try {
    const recipes = await Recipe.findAll({
      include: [{ model: User, as: 'comments_list' }]
    })
    res.send(recipes)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetRecipesWithUserCommentsById = async (req, res) => {
  try {
    const recipes = await Recipe.findByPk(req.params.recipe_id, {
      include: [{ model: User, as: 'comments_list' }]
    })
    res.send(recipes)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  CreateComment,
  UpdateComment,
  GetallComments,
  GetCommentsByRecipeId,
  GetUsersComments,
  GetUsersCommentsById,
  GetRecipesWithUserComments,
  GetRecipesWithUserCommentsById,
  DeleteComment
}
