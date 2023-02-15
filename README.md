# Magical Meals Backend Server

## **_Description_**

This is the backend server that handles the data for all the models. All the models have full CRUD functionality, with some examples bellow. Additionally, I also integrated JSON Web Token Authentication functionally on some routes like User Login.

---

## **_Technologies_**

- Back-End
  - Sequelize
  - Express
  - PostgreSQL

---

## **_ERD_**

![image](https://i.imgur.com/ZnQjl5V.png)

---

<br>

## **_Routes_**

<br>

> ### Users Routes

- Get All Users:

        [GET]
        https://magic-meals-backend.herokuapp.com/api/users/get_all

- Get Users With Cart By Id:

        [GET]
        https://magic-meals-backend.herokuapp.com/api/users/get_all_cart/id/:id

<br>

> ### Carts Routes

- Get All Cart Items:

        [GET]
        https://magic-meals-backend.herokuapp.com/api/carts/cart_items

- Add Item To Cart:

        [POST]
        https://magic-meals-backend.herokuapp.com/api/carts/add_cart_item/cart_id/:cart_id/item_id/:item_id

- Delete Item From Cart:

        [DELETE]
        https://magic-meals-backend.herokuapp.com/api/carts/item_id/:item_id

<br>

> ### Recipes Routes

- Get Recipe By Id:

        [GET]
        https://magic-meals-backend.herokuapp.com/api/recipes/id/:id

- Create New Recipe:

        [POST]
        https://magic-meals-backend.herokuapp.com/api/recipes/new_recipe

- Delete Recipe:

        [DELETE]
        https://magic-meals-backend.herokuapp.com/api/recipes/id/:id

<br>

> ### Auth Routes

- Login:

        [POST]
        https://magic-meals-backend.herokuapp.com/api/auth/login

- Check Session:

        [GET]
        https://magic-meals-backend.herokuapp.com/api/auth/session

- Update Password:

        [PUT]
        https://magic-meals-backend.herokuapp.com/api/auth/session
