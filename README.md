This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Component Library

This project uses [Material UI components](https://mui.com/material-ui/).

## Overview

This is an application meant to simplify household management, starting out by matching recipes and pantry items. The main questions I set out to answer with this app were **What can I make with what I have?** and **What do I need to buy to make what I want?**. I want a place to store all my favorite internet recipes, all my pantry items, and coordinate my shopping list to make it easier to meal plan, shop, and cook.

Currently the application will tell you if you have all the ingredients needed to make the recipe, and it allows you to edit recipes and pantry items. If you click on the menu icon for a recipe, it will give you the full details for the recipe. This functionality doesn't extend yet to added recipes and pantry items; that's a feature I want to add in next.

Currently the application is very barebones, but it gives a good overview of how I organize code and write code.

I mocked all out the data in the frontend for the sake of time; ideally all of this would come from a backend server that is interacting with a database.

## Features

Here's a list of the features that I would like to build out in this application.
1. Check for ingredients. 
* from a recipe, check if all ingredients exist (checking measurements). If not, show missing ingredients.
* option to add missing ingredients to shopping list.
2. Household users
* add spouse/roommates/kids to join manage recipes and pantry items
3. Add recipes
* manually (need to update this to be able to add recipe details)
* scrape from URL
* OCR from photos (typed, handwritten)
4. Internet search for recipes
* pick pantry ingredients, search google for recipes
* search specific websites for recipes
* pick pantry ingredients, ask AI for recipe suggestions
5. Pantry Management
* If item checked off on shopping list, auto add to pantry
* if item used in recipe, autodecrement from pantry
* if item low/empty from pantry, auto add to shopping list
6. Ingredient Replacement
* If an ingredient for a recipe is missing, check to see if pantry contains a suitable replacement and replace
7. Meal Matching
* protein, veggie, carb combo suggestions to make a full meal
* ability to save favorite matches
8. Recipe multiplier
* scale recipe up or down
