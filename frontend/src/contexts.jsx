import React, { createContext } from 'react';

const userContext = createContext({user: {}});
const dishContext = createContext({dish: {}});
const mealPlansContext = createContext({mealplans: {}});

export { userContext, dishContext, mealPlansContext };