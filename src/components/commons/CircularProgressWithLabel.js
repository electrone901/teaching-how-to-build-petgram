import React, { useState, useEffect } from 'react'
import { StylesProvider } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { CircularProgress, Typography, Box } from '@material-ui/core'

function CircularProgressWithLabel(props) {
  return (
    <div
      style={{
        height: 'auto',
        textAlign: 'center',
        justifyContent: 'center',
        paddingTop: '5rem',
      }}
    >
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          {...props}
          style={{ width: '200px', height: '200px' }}
        />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="caption"
            component="div"
            color="textSecondary"
            style={{ fontSize: '1rem' }}
          >
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    </div>
  )
}

CircularProgressWithLabel.protoTypes = {
  value: PropTypes.number.isRequired,
}

export default function CircularStatic() {
  const [progress, setPogress] = useState(10)

  useEffect(() => {
    const timer = setInterval(() => {
      setPogress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10,
      )
    }, 800)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return <CircularProgressWithLabel value={progress} />
}
