import React, { createContext, useState, useContext } from "react";
import colorData from '../data/color-data.json';
import { v4 } from 'uuid';

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

// pretty sure this file is redundant