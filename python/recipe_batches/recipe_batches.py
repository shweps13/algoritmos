#!/usr/bin/python

# Need to know how many batches we can get from available ingredients
# Number of ingredients can be different
# Return maximum number of whole batches that can be made for the supplied recipe

import math


def recipe_batches(recipe, ingredients):
  if len(recipe) != len(ingredients):
    print("Recipe and ingredients have different products!")
    return 0
  
  products = []
  for item in recipe.keys():
    products.append(item)
  print("Products we using:", products)

  recipe_n = []
  for item in recipe.values():
    recipe_n.append(item)
  print("Recipe", recipe_n)

  ingredients_n = []
  for item in ingredients.values():
    ingredients_n.append(item)
  print("Ingredient", ingredients_n)

  pieces = []
  for i in range(0, len(ingredients_n)):
    pieces.append(ingredients_n[i] // recipe_n[i])
  print("Pieces", pieces)

  result = pieces[0]
  for i in pieces:
    if i < result:
      result = i

  print("We can make", result, "batches")
  return result


# recipe_batches({ 'milk': 100, 'butter': 50, 'flour': 5 }, { 'milk': 132, 'butter': 48, 'flour': 51 })

# if __name__ == '__main__':
#   # Change the entries of these dictionaries to test 
#   # your implementation with different inputs
#   recipe = { 'milk': 100, 'butter': 50, 'flour': 5 }
#   ingredients = { 'milk': 132, 'butter': 48, 'flour': 51 }
#   print("{batches} batches can be made from the available ingredients: {ingredients}.".format(batches=recipe_batches(recipe, ingredients), ingredients=ingredients))