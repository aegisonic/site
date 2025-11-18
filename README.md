# Aegisonic
Static site for Aegisonic, a project seeking to provide an equitable acoustic experience for those living with heightened sound sensitivity and autism.

## Content

### Blog posts

Located within `content/blog`. 
Blog posts are created as text (.md) files with the following frontmatter to the top of the document.

```
---
title: "{{title}}"
date: {{date}}
description: "{{description}}"
draft: true
---
```

To create a new blog post from the command line, enter:
```
hugo new blog/{{new post name}}.md
```

Or copy the frontmatter above and populate the placeholder fields.

**Note:** `draft` must be set to false for the blog post to be published/visible on the site.


### Photo gallery

Located within `content/gallery`. 

The name of each image file will be treated as the image caption within the site.
