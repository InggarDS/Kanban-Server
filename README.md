**Create new user**
----
  Create new user

* **URL**

  https://kanban-ids.herokuapp.com/register

* **Method:**

  `POST`

* **Request Body:**
```javascript
   {
       "email" : "new@mail.com",
	   "password" : "1234%^&"
   }
```

* **Success Response:**

   * **Code:** 200 <br />
    **Content:** `access_token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJpbmdnYXJkc0BnbWFpbC5`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`

    * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ type : bad request`
                    `errors : [{ message: Email already in Use ! }]`
                   `}`

* **Sample Call:**
    ```javascript
    POST /register HTTP/1.1
    Host: kanban-ids.herokuapp.com
    Content-Type: application/json

    {
        "email" : "inggards@gmail.com",
        "password" : "1234"
    }
    ```


**Login User**
----
  Returns all json data about todo .

* **URL**

  https://kanban-ids.herokuapp.com/login

* **Method:**

  `POST`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `access_token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJpbmdnYXJkc0BnbWFpbC5jb20iLC `
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`

    * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ type : bad request`
                    `errors : [{ message: Invalid password/email }]`
                   `}`


* **Sample Call:**
    ```javascript
    POST /register HTTP/1.1
    Host: kanban-ids.herokuapp.com
    Content-Type: application/json

    {
	"email" : "user@mail.com",
	"password" : "1234"
    }
    ```

**Get Category**
----
  Returns Category data .

* **URL**

    https://kanban-ids.herokuapp.com/category

* **Method:**

  `GET`


  * **Request Headers:**
  `{ access_token : YOUR_TOKEN }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**  
    ``` javascript
    "categories": [
        {
            "id": 22,
            "name": "BackLog",
            "createdAt": "2020-04-10T09:02:41.865Z",
            "updatedAt": "2020-04-10T09:02:41.865Z",
            "UserId": 6
        }

    ```
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`

* **Code:** 400 BAD REQUEST <br />
**Content:** `{ type : bad request`
                `errors : [{ message: "Invalid Token !!" }]`
                `}`

* **Sample Call:**

     ``` javascript 
    GET /category HTTP/1.1
    Host: kanban-ids.herokuapp.com/
    access_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJqb2tvQGdtYWlsLmNvbSIsImlhdCI6MTU4NjUwOTMzNn
    Content-Type: application/json
    ```


**Create Category**
----
  Create Category data .

* **URL**

    https://kanban-ids.herokuapp.com/category

* **Method:**

  `POST`


  * **Request Headers:**
  `{ access_token : YOUR_TOKEN }`

  * **Request Body:**
```javascript
   {
	"name" : "Back Log",
   }
```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**  `"message": { "Success create category"}`

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`


* **Sample Call:**
    ``` javascript 
    POST /category HTTP/1.1
    Host: kanban-ids.herokuapp.com/
    access_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJqb2tvQGdtYWlsLmNvbSIsImlhdCI6MTU4NjUwOTMzNn
    Content-Type: application/json

    {
        "name" : "BackLog"
    }

    ```

**Update Category**
----

Update Category data .

* **URL**

    https://kanban-ids.herokuapp.com/category/:id

* **Method:**

  `PUT`

*  **URL Params**

   **Required:**
 
   `id=[integer]`


  * **Request Headers:**
  `{ access_token : YOUR_TOKEN }`


  * **Request Body:**
```javascript
   {
	"name" : "Back Log",
   }
```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**  `"message": { "Success update category"}`


* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`


* **Sample Call:**
    ``` javascript 
    PUT /category/21 HTTP/1.1
    Host: kanban-ids.herokuapp.com/
    access_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJqb2tvQGdtYWlsLmNvbSIsImlhdCI6MTU4NjUwOTMzNn
    Content-Type: application/json

    {
        "name" : "BackLog"
    }

    ```

**Delete Category**
----

Delete Category data .

* **URL**

    https://kanban-ids.herokuapp.com/category/:id

* **Method:**

  `DELETE`

*  **URL Params**

   **Required:**
 
   `id=[integer]`


  * **Request Headers:**
  `{ access_token : YOUR_TOKEN }`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:**  `"message": { "Success delete category"}`

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`


* **Sample Call:**
    ``` javascript 
    DELETE /category/21 HTTP/1.1
    Host: kanban-ids.herokuapp.com/
    access_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJqb2tvQGdtYWlsLmNvbSIsImlhdCI6MTU4NjUwOTMzNn
    Content-Type: application/json

    ```


**Get Tasks**
----
  Returns Tasks data .

* **URL**

    https://kanban-ids.herokuapp.com/tasks

* **Method:**

  `GET`

  * **Request Headers:**
  `{ access_token : YOUR_TOKEN }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**  
    ``` javascript

    "tasks": [
        {
            "id": 59,
            "title": "belajar",
            "UserId": 26,
            "CategoryId": 36,
            "createdAt": "2020-04-10T18:27:33.280Z",
            "updatedAt": "2020-04-11T00:46:20.699Z",
            "Category": {
                "id": 36,
                "name": "Progress",
                "createdAt": "2020-04-10T18:27:08.070Z",
                "updatedAt": "2020-04-10T18:27:08.070Z",
                "UserId": 26
            }
        }
    ]

    ```
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`

* **Code:** 400 BAD REQUEST <br />
**Content:** `{ type : bad request`
                `errors : [{ message: "Invalid Token !!" }]`
                `}`

* **Sample Call:**

     ``` javascript 
    GET /tasks HTTP/1.1
    Host: kanban-ids.herokuapp.com/
    access_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJqb2tvQGdtYWlsLmNvbSIsImlhdCI6MTU4NjUwOTMzNn
    Content-Type: application/json
    ```

**Create Tasks**
----
  Create Tasks data.

* **URL**

    https://kanban-ids.herokuapp.com/tasks

* **Method:**

  `POST`


  * **Request Headers:**
  `{ access_token : YOUR_TOKEN }`

  * **Request Body:**
```javascript
   {
	"title" : "Task 3",
	"CategoryId" : "21"
    }
```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**  `"message": { "Success create tasks"}`

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`


* **Sample Call:**
    ``` javascript 
    POST /tasks HTTP/1.1
    Host: kanban-ids.herokuapp.com
    access_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJqb2tvQG1haWwuY29tIiwiaWF0IjoxN
    Content-Type: application/json

    {
        "title" : "Task 3",
        "CategoryId" : "21"
    }

    ```

**Update Categories tasks**
----

Update data tasks in category.

* **URL**

    https://kanban-ids.herokuapp.com/tasks/:id

* **Method:**

  `PATCH`

*  **URL Params**

   **Required:**
 
   `id=[integer]`


  * **Request Headers:**
  `{ access_token : YOUR_TOKEN }`


  * **Request Body:**
```javascript
   {
	"CategoryId" : "27",
   }
```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**  `"message": { "Success update tasks"}`


* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`


* **Sample Call:**
    ``` javascript 
    PATCH /tasks/58 HTTP/1.1
    Host: kanban-ids.herokuapp.com
    access_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsImVtYWlsIjoibmV3QG1haWwuY29tIiwiaWF0IjoxN
    Content-Type: application/json

    {
        "CategoryId" : 36
    }

    ```

**Update Task's Title**
----

Update task's Title.

* **URL**

    https://kanban-ids.herokuapp.com/tasks/:id

* **Method:**

  `PUT`

*  **URL Params**

   **Required:**
 
   `id=[integer]`


  * **Request Headers:**
  `{ access_token : YOUR_TOKEN }`


  * **Request Body:**
```javascript
   {
	"title" : "Reading",
   }
```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**  `"message": { "Success update tasks"}`


* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`


* **Sample Call:**
    ``` javascript 
    PUT /tasks/58 HTTP/1.1
    Host: kanban-ids.herokuapp.com
    access_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsImVtYWlsIjoibmV3QG1haWwuY29tIiwiaWF0IjoxN
    Content-Type: application/json

    {
        "title" : "Reading",
    }

    ```


**Delete Category**
----

Delete Category data .

* **URL**

    https://kanban-ids.herokuapp.com/tasks/:id

* **Method:**

  `DELETE`

*  **URL Params**

   **Required:**
 
   `id=[integer]`


  * **Request Headers:**
  `{ access_token : YOUR_TOKEN }`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:**  `"message": { "Success delete task"}`

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`


* **Sample Call:**
    ``` javascript 
    DELETE /tasks/21 HTTP/1.1
    Host: kanban-ids.herokuapp.com/
    access_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJqb2tvQGdtYWlsLmNvbSIsImlhdCI6MTU4NjUwOTMzNn
    Content-Type: application/json

    ```
