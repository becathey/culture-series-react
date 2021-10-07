# React Blog Frontend

This project is a blog frontend or basic website built with React. It has a Home page, About page, and an Articles List page, which displays the title, a short excerpt of the text, and a small image for each article/page. Each article/page has a larger image, the text of the article/page, and below a listing of the other articles/pages.

## Install the Dependencies

To install the dependencies, run:

```
npm install
```

## Create Data File

In the `src/pages/` directory, create an `article-content.js` file for your data:

```
const articles = [
    {
        name: "file-name",
        title: "Article/Page Title",
        image: "http://www.example.com/path-to-image/image01.jpg",
        content: [
            `Paragraph 1 text ...`,
            `Paragraph 2 text ...`,
        ]
    },
    ...
]
```

## Run the App

To run the app in development mode, in the project directory run:

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) in the browser to view the application.

The page will reload if you make edits.

## Build the App

To build the app for production into a `build/` directory, run:

```
npm run build
```

This will bundle React in production mode and optimize the build for best performance.

The application is ready to be deployed.
