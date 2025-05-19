import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  token: process.env.TINA_TOKEN!,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "template1",
        label: "Template 1 Pages",
        path: "src/content/template1",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            ui: {
              component: 'markdown'
            }
          },
        ],
      },
      {
        name: "template2",
        label: "Template 2 Pages",
        path: "src/content/template2",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            ui: {
              component: 'markdown'
            }
          },
        ],
      },
    ],
  },
}); 