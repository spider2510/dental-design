import React from 'react';
import { Grid, TextField, Button, Typography, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import WeekendIcon from '@mui/icons-material/Weekend';

export const Footer = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "#13192d",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                color: "white"
            }} >
            <Box paddingX={5}>
                <Grid container spacing={2}>
                    {/* Get in Touch Section */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom fontWeight={'bold'}>
                            Get in Touch
                        </Typography>
                        <Box display={"flex"} justifyContent={"space-between"} gap={3}>
                            <Grid item xs={12} md={6}>
                                <form noValidate autoComplete="off">
                                    <TextField
                                        // label="Name"
                                        placeholder='Name'
                                        fullWidth
                                        margin="normal"
                                        sx={{ backgroundColor: 'white', fontFamily: '"FontAwesome', fontSize: '16px' }}
                                    />
                                    <TextField
                                        placeholder="Email"
                                        type="email"
                                        fullWidth
                                        margin="normal"
                                        sx={{ backgroundColor: 'white', fontFamily: '"FontAwesome', fontSize: '16px' }}
                                    />
                                    <Box display={"flex"} justifyContent={"space-between"} gap={3}>
                                        <Box>
                                            <TextField
                                                placeholder="Phone Number"
                                                type="tel"
                                                fullWidth
                                                margin="normal"
                                                InputProps={{ sx: { height: '75%' } }}
                                                sx={{ backgroundColor: 'white', fontFamily: '"FontAwesome', fontSize: '16px' }}
                                            />
                                        </Box>
                                        <Box alignContent={"center"}>
                                            <Button variant="outlined" color="inherit" type="submit">
                                                submit
                                            </Button>
                                        </Box>

                                    </Box>

                                </form>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box paddingLeft={4}>
                                    <Typography variant="h6" gutterBottom>
                                        Contact Info
                                    </Typography>
                                    <Box sx={{ marginBottom: '10px' }}>
                                        <Typography variant="body1">
                                            <LocationOnIcon /> Address
                                        </Typography>
                                        <Typography variant="body2">
                                            4321 Invasign St, CA 12345
                                        </Typography>
                                    </Box>
                                    <Box sx={{ marginBottom: '10px' }}>
                                        <Typography variant="body1">
                                            <PhoneIcon /> Phone
                                        </Typography>
                                        <Typography variant="body2">
                                            +1 123 456 789
                                        </Typography>
                                    </Box>
                                    <Box sx={{ marginBottom: '10px' }}>
                                        <Typography variant="body1">
                                            <EmailIcon /> Email
                                        </Typography>
                                        <Typography variant="body2">
                                            info@company.com
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>

                    {/* Opening Timing Section */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="h4" gutterBottom fontWeight={'bold'}>
                            Opening Hours

                        </Typography>
                        <Typography >
                            <AccessTimeIcon /> Monday - Friday: 9am - 8pm
                        </Typography>
                        <Typography >
                            <CalendarTodayIcon /> Saturday: 10am - 6pm
                        </Typography>
                        <Typography >
                            <WeekendIcon /> Sunday: Closed
                        </Typography>
                    </Grid>

                    {/* Subscription Section */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="h4" gutterBottom fontWeight={'bold'} >
                            Subscribe to our Newsletter
                        </Typography>
                        <form noValidate autoComplete="off">
                            <Box paddingY={'19px'}>
                                <TextField
                                    placeholder="Email"
                                    type="email"
                                    fullWidth
                                    margin="normal"
                                    sx={{ backgroundColor: 'white', fontFamily: '"FontAwesome', fontSize: '10px', border: "red" }}
                                />
                            </Box>

                            <Button variant="outlined" color="inherit" type="submit">
                                Subscribe
                            </Button>
                        </form>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Footer;
