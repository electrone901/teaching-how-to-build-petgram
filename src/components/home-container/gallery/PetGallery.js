import React, { useEffect, useState } from 'react'
import CircularStatic from '../../commons/CircularProgressWithLabel'
import ImageListItem from '@material-ui/core/ImageListItem'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import { Grid } from '@material-ui/core'
import './PetGallery.css'


function PetGallery() {
  const [petsData, setPetsData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
  }, [])

  return (
    <div style={{ minHeight: '70vh', paddingBottom: '3rem' }}>
       {/* Add pet's Data */}


    </div>
  )
}

export default PetGallery
