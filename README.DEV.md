# Welcome

In this document, we will discuss the folder structure for ReactJS/NextJS projects.

### Introduction to the `src` Folder Structure in ReactJS/NextJS

Below is a brief overview of the key folders and their purposes:

- `/public/images/`: This folder is meant for global images. so that don't need to be imported into our JSX files :D.

- `assets`: This folder houses all media files such as fonts, animations, and so on.

- `components/common`: This folder should contain only _responsive/dynamic components_, such as input fields, buttons, etc.

- `components/globals`: This folder is for static reusable components, such as _review/testimonial sections_. This comes in handy when a website has multiple pages that contain the same sections.

- `pages`: This folder is primarily for importing pages from the `views` folder, and it's also used for defining pages.

- `views`: This is the core folder, where the implementation of pages occurs.

### File and Folder Organization

All related components should be in one folder. For instance, when creating a Home page, the folder and file organization might look like this:

```
/src
    /views
      /home
          Home.tsx
          Features.tsx
          /slider
              Slider.tsx
              slider.css
...
```

Carefully note the folder naming conventions in the structure above.

If you need any further assistance, feel free to contact me at:

Email: akashrahman.me@gmail.com
Facebook: https://fb.com/akashrahman.dev
Phone: +8801312907400
