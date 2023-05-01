# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app on you system localhost:3000

### `npm i`

There are many packages & dependencies i have used. 
Inorder to install all those, you need to write 'npm i' in your terminal.
```
npm i
```

### `Packages & Dependencies`
<ul>
<li>Tailwind css : <a href="https://tailwindcss.com/docs/installation">Link</a> </li>
<li>React-icons</li>
<li>React-router-dom </li>
<li>Axios</li>
</ul>

```
npm i react-icons
```

```
npm i react-router-dom
 ```

 ```
npm i axios
 ```
## Component Information

There are 3 pages.
<ul>
<li>Root.jsx : It is a landing page</li>
<li>Home.jsx : Just to make the ui look good, this page is built & redirect to Registration page.</li>
<li>MerchantRegistration.js : Form page that take detail from the merchant and send it to backend through axios.</li>
<li>Toast.jsx : Inorder order to show the repsponse recieved from backend.</li>
<li>ShowMerchantDetails.jsx : Inorder order to show all the merchant details registered in database.</li>
</ul>

## `Axios`

Axios is used to hit server API to upload and fetch data from backend. Though the project is not that big so i did not used redux to manage states. I have called axios in MerchantRegistratin.jsx page.

