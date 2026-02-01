import { Button, Typography } from '@mui/material';

const DemoComponent = () => {
    return (
        <div>
            <Typography variant="h1">Hello MUI</Typography>
            <Button variant="contained" size="small" color="primary" sx={{ width: '200px' }}>Click me</Button>
        </div>
    )
}

export default DemoComponent;
