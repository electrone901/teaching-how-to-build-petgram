import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import {
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  Grid,
  Container,
  Typography,
  Button,
  Card,
  StylesProvider,
} from '@material-ui/core'
import './PetDetails.css'


function PetDetails({ account, contractData }) {
  const { petId } = useParams()
  // Add state variables

  useEffect(() => {
    if (petId) {
      getMetadata()
      getImage()
    }
  }, [petId, contractData])

  const getImage = (ipfsURL) => {}

  const getMetadata = async () => {}

  const mintNFT = async (petId) => {}

  const handleChange = (event) => {}

  const handleSubmit = (event) => {}



  return (
    <StylesProvider injectFirst>
      <Container
        className="root-pet-details"
        style={{ minHeight: '50vh', paddingBottom: '3rem' }}
      >
        <div className="">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} className="grid-container">
              {/* Add pet details */}

              
            </Grid>

            <Grid item xs={12} sm={6}>
              {/*Add Transaction Confirmation: */}

              {/* Add form */}

              {/* Display comments  */}
            </Grid>
          </Grid>
        </div>
      </Container>
    </StylesProvider>
  )
}

export default PetDetails
