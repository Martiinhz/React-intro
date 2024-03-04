import React from 'react'
import { NavLink } from 'react-router-dom'


export const Item = ({content,route}) => <li><NavLink to={route}>{content}</NavLink></li>
