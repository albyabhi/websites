import React from 'react';
import { Box, CardContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import brightonLogo from "../matches/Team logo/Brighton.png";
import liverpoolLogo from '../matches/Team logo/Liverpool.png';
import newcastleLogo from '../matches/Team logo/Newcastle.png';
import chelseaLogo from '../matches/Team logo/Chelsea.png';
import manchesterUnitedLogo from '../matches/Team logo/Manchester United.png';
import leicesterLogo from '../matches/Team logo/Leicester.png';
import tottenhamLogo from '../matches/Team logo/Tottenham.png';
import manchesterCityLogo from '../matches/Team logo/Manchester City.png';

const Live = () => {
    const theme = useTheme();

    const matches = [
        {
            matchNumber: 1,
            homeTeamName: 'Brighton',
            awayTeamName: 'Liverpool',
            score: { home: 2, away: 3 },
            homeLogo: brightonLogo,
            awayLogo: liverpoolLogo,
            matchTime: "85 ' ",
        },
        {
            matchNumber: 2,
            homeTeamName: 'Newcastle',
            awayTeamName: 'Chelsea',
            score: { home: 2, away: 0 },
            homeLogo: newcastleLogo,
            awayLogo: chelseaLogo,
            matchTime: "45 ' ",
        },
        {
            matchNumber: 3,
            homeTeamName: 'Man United',
            awayTeamName: 'Leicester',
            score: { home: 5, away: 2 },
            homeLogo: manchesterUnitedLogo,
            awayLogo: leicesterLogo,
            matchTime: "85' ",
        },
        {
            matchNumber: 4,
            homeTeamName: 'Tottenham',
            awayTeamName: 'Man City',
            score: { home: 2, away: 1 },
            homeLogo: tottenhamLogo,
            awayLogo: manchesterCityLogo,
            matchTime: "35 ' ",
        },
    ];

    return (
        <Box sx={{ overflowY: 'auto', padding: 2, backgroundColor: theme.palette.background.default }}>
            <Typography variant="h4" gutterBottom color="text.primary" textAlign="center">
                Live Now
            </Typography>
            {matches.map((match) => (
                <Box
                    key={match.matchNumber}
                    sx={{
                        marginBottom: 2,
                        width: { xs: '95%', sm: '90%', md: '80%' },
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: '10px',
                        padding: 2,
                        mx: 'auto',
                    }}
                >
                    <CardContent>
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                            <Box display="flex" flexDirection="column" alignItems="center" flexGrow={1}>
                                <img 
                                    src={match.homeLogo} 
                                    alt={`Logo of ${match.homeTeamName}`} 
                                    style={{ width: 40, height: 40, marginBottom: 4 }} 
                                />
                                <Typography 
                                    color="text.primary" 
                                    noWrap 
                                    sx={{ textAlign: 'center' }}
                                >
                                    {match.homeTeamName}
                                </Typography>
                            </Box>
                            <Typography variant="h6" color="text.primary" textAlign="center" mx={2}>
                                {match.score.home} - {match.score.away}
                            </Typography>
                            <Box display="flex" flexDirection="column" alignItems="center" flexGrow={1}>
                               
                                <img 
                                    src={match.awayLogo} 
                                    alt={`Logo of ${match.awayTeamName}`} 
                                    style={{ width: 40, height: 40, marginTop: 4 }} 
                                />
                                 <Typography 
                                    color="text.primary" 
                                    noWrap 
                                    sx={{ textAlign: 'center' }}
                                >
                                    {match.awayTeamName}
                                </Typography>
                            </Box>
                        </Box>
                        <Box 
                            display="flex" 
                            justifyContent="center" 
                            marginTop="20px"
                            alignItems="center" 
                            sx={{ width: '100%' }} // Ensures the Box takes full width
                        >
                            <Typography 
                                color="text.primary" 
                                noWrap 
                                sx={{ width: '60px', textAlign: 'center' }}
                            >
                                {match.matchTime}
                            </Typography>
                        </Box>
                    </CardContent>
                </Box>
            ))}
        </Box>
    );
};

export default Live;
