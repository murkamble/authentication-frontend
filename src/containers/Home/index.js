import React, { useState, useEffect } from 'react'
import Layout from "../../components/Layout"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from 'react-router-dom'

/**
* @author
* @function Home
**/

const Home = (props) => {

  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch();

  useEffect(() => {
  }, [])

  return (
    <Layout>Home</Layout>
  )
}


export default Home