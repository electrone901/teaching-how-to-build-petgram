import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import Card from '@material-ui/core/Card'
import { StylesProvider } from '@material-ui/core/styles'
import './PetDetails.css'
import {
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
} from '@material-ui/core'

function PetDetails({ account, contractData }) {
  const handleChange = (event) => {}

  const handleSubmit = (event) => {}

  const mintNFT = async (petId) => {}

  return (
    <StylesProvider injectFirst>
      <Container
        className="root-pet-details"
        style={{ minHeight: '50vh', paddingBottom: '3rem' }}
      >
        <div className="">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} className="grid-container">
              Add pet's details here
              {/* Add pet's details here */}
            </Grid>

            <Grid item xs={12} sm={6}>
              {/*Add Transaction Confirmation: */}

              {/* Add form comments */}

              {/* Display Comments  */}
            </Grid>
          </Grid>
        </div>
      </Container>
    </StylesProvider>
  )
}

export default PetDetails
