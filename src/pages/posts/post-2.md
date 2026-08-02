---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Test Article'
pubDate: 2022-07-01
description: 'This is the first post of my new Astro blog.'
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["astro", "blogging", "learning in public"]
---

This article is designed to test how different **Markdown elements** are rendered on the website.

# Heading Level 1

This is a paragraph underneath a level-one heading. It contains **bold text**, *italicized text*, and ***bold italic text***.

## Heading Level 2

Markdown headings make it possible to divide an article into clear sections.

### Heading Level 3

This is a third-level heading.

#### Heading Level 4

This is a fourth-level heading.

##### Heading Level 5

This is a fifth-level heading.

###### Heading Level 6

This is a sixth-level heading.

---

## Text Formatting

This text is **bold**.

This text is *italicized*.

This text is ***bold and italicized***.

This text contains ~~strikethrough formatting~~.

This sentence contains ==highlighted text==.

Water can be written as H~2~O using subscript syntax.

The expression X^2^ uses superscript syntax.

You can also display small pieces of code inline, such as `const message = "Hello";`.

---

## Blockquote

> This is a blockquote.
>
> It can contain multiple paragraphs and other Markdown elements.
>
> **Markdown formatting** can also appear inside a blockquote.

### Nested Blockquote

> This is the first level of the blockquote.
>
> > This is a nested blockquote.
> >
> > > This is a third-level blockquote.

---

## Ordered List

1. First item
2. Second item
3. Third item
4. Fourth item

### Nested Ordered List

1. Plan the article

   1. Choose a title
   2. Create an outline
   3. Collect images
2. Write the article

   1. Write the introduction
   2. Add the main content
   3. Write the conclusion
3. Publish the article

---

## Unordered List

* First item
* Second item
* Third item
* Fourth item

### Nested Unordered List

* Frontend

  * HTML
  * CSS
  * JavaScript
* Frameworks

  * Astro
  * React
* Tools

  * Git
  * GitHub

---

## Mixed List

1. Create the project

   * Install Astro
   * Create the folder structure
2. Build the website

   * Add the layout
   * Add global styles
3. Test the website

   * Test light mode
   * Test dark mode

---

## Task List

* [x] Create the Astro project
* [x] Add the Markdown post layout
* [x] Write a test article
* [ ] Finish the website styling
* [ ] Add real blog posts
* [ ] Deploy the website

---

## Links

Here is a link to the [Markdown Guide](https://www.markdownguide.org).

Here is a link to the [Astro documentation](https://docs.astro.build).

You can also write an automatic URL such as https://astro.build.

---

## Image

The text inside the square brackets is used as the image's alternative text.

### Linked Image

---

## Horizontal Rule

The following line is a horizontal rule:

---

The article continues below the horizontal rule.

---

## Table

| Syntax  | Description               | Example       |
| ------- | ------------------------- | ------------- |
| Heading | Creates a section heading | `## Heading`  |
| Bold    | Makes text bold           | `**bold**`    |
| Italic  | Makes text italic         | `*italic*`    |
| Link    | Creates a hyperlink       | `[text](url)` |
| Image   | Displays an image         | `![alt](url)` |

### Alignment Table

| Left aligned | Center aligned | Right aligned |
| ------------ | -------------- | ------------- |
| Apple        | Red            | 3             |
| Banana       | Yellow         | 12            |
| Pear         | Green          | 7             |

---

## Inline Code

Use the `npm run dev` command to start the Astro development server.

A CSS variable can be accessed with `var(--default-text)`.

An Astro component might be imported with `import BaseLayout from "./BaseLayout.astro";`.

---

## Plain Fenced Code Block

```
This is a plain fenced code block.

It does not specify a programming language.
Markdown formatting such as **bold** is not rendered inside it.
```

---

## JavaScript Code Block

```javascript
const article = {
  title: "Test Article",
  published: true,
  tags: ["Astro", "Markdown", "CSS"],
};

function printArticleTitle(post) {
  console.log(post.title);
}

printArticleTitle(article);
```

---

## TypeScript Code Block

```typescript
interface BlogPost {
  title: string;
  author: string;
  published: boolean;
}

const post: BlogPost = {
  title: "Test Article",
  author: "Laurent Casagrande",
  published: true,
};

function getPostTitle(blogPost: BlogPost): string {
  return blogPost.title;
}
```

---

## Astro Code Block

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";

const pageTitle = "Test Article";
---

<BaseLayout pageTitle={pageTitle}>
  <main class="blog-post">
    <article class="markdown-content">
      <h1>{pageTitle}</h1>
      <p>This is an Astro component.</p>
    </article>
  </main>
</BaseLayout>
```

---

## HTML Code Block

```html
<article class="blog-post">
  <header>
    <h1>Test Article</h1>
    <p>Written by Laurent Casagrande</p>
  </header>

  <p>This is the article content.</p>
</article>
```

---

## CSS Code Block

```css
.markdown-content {
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  color: var(--default-text);
}

.markdown-content h1 {
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

.markdown-content code {
  padding: 0.15rem 0.35rem;
  border-radius: 0.25rem;
  background: var(--card-bg);
}
```

---

## JSON Code Block

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25,
  "website": "https://example.com",
  "skills": [
    "HTML",
    "CSS",
    "JavaScript"
  ]
}
```

---

## Bash Code Block

```bash
npm create astro@latest
cd my-blog
npm install
npm run dev
```

---

## Python Code Block

```python
def greet(name: str) -> str:
    return f"Hello, {name}!"


message = greet("Markdown")
print(message)
```

---

## Diff Code Block

```diff
- const title = "Old Article";
+ const title = "Test Article";
```

---

## Footnote

Markdown is a lightweight markup language.

Astro can render local Markdown files as pages or content collections.

Footnotes are useful when additional information would interrupt the flow of the main article.

---

## Heading with a Custom ID

### My Great Heading {#custom-id}

A custom heading ID can be used to link directly to a section.

[Jump to the custom heading](#custom-id).

---

## Definition List

Markdown
: A lightweight markup language used to format plain text.

Astro
: A web framework designed for building content-focused websites.

CSS
: A language used to control the appearance and layout of a website.

Static site
: A website whose pages are generated before they are requested by visitors.

---

## Emoji

That is so funny! :joy:

Markdown is useful! :rocket:

This article is complete! :white_check_mark:

Emoji can also be inserted directly: 🎉 🚀 💻 📝

---

## Escaped Characters

Use a backslash to display characters that would otherwise be interpreted as Markdown.

*This text is surrounded by literal asterisks.*

# This is not a heading.

- This is not a list item.

---

## Line Breaks

This is the first line.
This is the second line after a forced line break.

This is a new paragraph because there is an empty line above it.

---

## Combined Markdown Example

> ### Example Project
>
> This project uses **Astro**, *Markdown*, and `CSS`.
>
> The main goals are:
>
> 1. Build a personal website
> 2. Publish project articles
> 3. Learn frontend development
>
> Progress:
>
> * [x] Create the project
> * [x] Add a layout
> * [ ] Publish the website
>
> Visit the [Astro documentation](https://docs.astro.build) to learn more.

---

## Conclusion

This test article contains the most common basic and extended Markdown elements, including headings, paragraphs, emphasis, links, images, lists, tables, blockquotes, task lists, footnotes, definition lists, custom heading IDs, emoji, highlighting, subscript, superscript, inline code, and fenced code blocks.

The final task is now complete: **test the article in both light and dark mode**.
