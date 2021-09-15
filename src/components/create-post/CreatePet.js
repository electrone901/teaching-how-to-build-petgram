import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import './CreatePet.css'
import {
  TextField,
  Container,
  StylesProvider,
  Typography,
  Button,
  IconButton,
  MenuItem,
} from '@material-ui/core'

function CreatePet() {
  const handleImage = (event) => {}

  const handleSubmit = async (e) => {}

  return (
    <StylesProvider injectFirst>
      <Container
        className="root-create-pet"
        style={{ minHeight: '70vh', paddingBottom: '3rem' }}
      >
        <div>
          <Typography className="title" color="textPrimary" gutterBottom>
            Add a photo of your pet
          </Typography>

          {/* Display image to be upload */}
          <div className="form-container">
            <h1>Add Form here</h1>
          </div>
        </div>
      </Container>
    </StylesProvider>
  )
}

export default CreatePet
