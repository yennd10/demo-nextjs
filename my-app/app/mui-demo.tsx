'use client';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  TextField,
  Stack,
  Chip,
  Avatar,
  Grid,
  Paper,
} from '@mui/material';
import { useState } from 'react';

export default function MUIDemo() {
  const [inputValue, setInputValue] = useState('');

  return (
    <Box sx={{ p: 4, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
        MUI Components Demo
      </Typography>

      <Grid container spacing={3}>
        {/* Buttons */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Buttons
              </Typography>
              <Stack spacing={2} sx={{ mt: 2 }}>
                <Button variant="contained" color="primary">
                  Contained Primary
                </Button>
                <Button variant="outlined" color="primary">
                  Outlined Primary
                </Button>
                <Button variant="text" color="primary">
                  Text Button
                </Button>
                <Button variant="contained" color="secondary">
                  Contained Secondary
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Text Field */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Text Field
              </Typography>
              <Stack spacing={2} sx={{ mt: 2 }}>
                <TextField
                  label="Standard"
                  variant="outlined"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  fullWidth
                />
                <TextField
                  label="Filled"
                  variant="filled"
                  fullWidth
                />
                <TextField
                  label="With Helper Text"
                  helperText="This is helper text"
                  fullWidth
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Chips & Avatars */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Chips & Avatars
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 2, flexWrap: 'wrap', gap: 1 }}>
                <Chip label="Default" />
                <Chip label="Primary" color="primary" />
                <Chip label="Secondary" color="secondary" />
                <Chip label="Success" color="success" />
                <Chip label="Error" color="error" />
              </Stack>
              <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                <Avatar>JD</Avatar>
                <Avatar sx={{ bgcolor: 'primary.main' }}>AB</Avatar>
                <Avatar sx={{ bgcolor: 'secondary.main' }}>CD</Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Paper */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Paper Component
              </Typography>
              <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
                <Typography>
                  This is a Paper component with elevation. It's great for
                  creating cards and containers with shadow effects.
                </Typography>
              </Paper>
            </CardContent>
          </Card>
        </Grid>

        {/* Card with Actions */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Card with Actions
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                This card demonstrates the CardActions component along with
                CardContent.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
