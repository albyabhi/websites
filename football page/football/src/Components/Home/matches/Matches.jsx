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

const matches = [
  {
    matchNumber: 1,
    homeTeamName: 'Brighton',
    awayTeamName: 'Liverpool',
    score: {
      home: 2,
      away: 3,
    },
    homeLogo: brightonLogo,
    awayLogo: liverpoolLogo,
    youtubeUrl: 'https://www.youtube-nocookie.com/embed/BX7CP1k3m1Y?si=YtvxA_Ykbbr6j0fd',
  },
  {
    matchNumber: 2,
    homeTeamName: 'Newcastle',
    awayTeamName: 'Chelsea',
    score: {
      home: 2,
      away: 0,
    },
    homeLogo: newcastleLogo,
    awayLogo: chelseaLogo,
    youtubeUrl: 'https://www.youtube.com/watch?v=pv_JcItk9Js',
  },
  {
    matchNumber: 3,
    homeTeamName: 'Manchester United',
    awayTeamName: 'Leicester',
    score: {
      home: 5,
      away: 2,
    },
    homeLogo: manchesterUnitedLogo,
    awayLogo: leicesterLogo,
    youtubeUrl: 'https://www.youtube.com/watch?v=BvpEAfTN7fk',
  },
  {
    matchNumber: 4,
    homeTeamName: 'Tottenham',
    awayTeamName: 'Manchester City',
    score: {
      home: 2,
      away: 1,
    },
    homeLogo: tottenhamLogo,
    awayLogo: manchesterCityLogo,
    youtubeUrl: 'https://www.youtube.com/watch?v=0TypP8H-75A',
  },
];

const Matches = () => {
  const theme = useTheme();

  return (
    <Box sx={{ overflowY: 'auto', padding: 2, backgroundColor: theme.palette.background.default }}>
      <Typography variant="h4" gutterBottom color="text.primary" textAlign="center">
        Matches
      </Typography>
      {matches.map((match) => (
  <Box
    key={match.matchNumber}
    sx={{
      mb: 2,
      width: { xs: '95%', sm: '90%', md: '80%', lg: '60%' },
      backgroundColor: theme.palette.primary.main,
      borderRadius: '10px',
      padding: { xs: 1, sm: 2, md: 3 },
      mx: 'auto',
    }}
  >
    <CardContent>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mb={{ xs: 1, sm: 0 }}
          sx={{ width: { xs: '100%', sm: 'auto' } }}
        >
          <img
            src={match.homeLogo}
            alt={match.homeTeamName}
            style={{ width: 50, height: 50, marginBottom: 4 }}
          />
          <Typography
            color="text.primary"
            noWrap
            sx={{ width: { xs: '100%', sm: 150 }, textAlign: 'center' }}
          >
            {match.homeTeamName}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
          <Typography variant="h6" color="text.primary" textAlign="center">
            {match.score.home} - {match.score.away}
          </Typography>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mb={{ xs: 1, sm: 0 }}
          sx={{ width: { xs: '100%', sm: 'auto' } }}
        >
          <img
            src={match.awayLogo}
            alt={match.awayTeamName}
            style={{ width: 50, height: 50, marginTop: 4 }}
          />
          <Typography
            color="text.primary"
            noWrap
            sx={{ width: { xs: '100%', sm: 150 }, textAlign: 'center' }}
          >
            {match.awayTeamName}
          </Typography>
        </Box>
      </Box>

      {match.youtubeUrl && (
        <Box
          sx={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            width: '100%',
            mt: 2,
          }}
        >
          <iframe
            src={match.youtubeUrl.replace('watch?v=', 'embed/')}
            title={`Match ${match.matchNumber} Highlights`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '10px',
            }}
          ></iframe>
        </Box>
      )}
    </CardContent>
  </Box>
))}

    </Box>
  );
};

export default Matches;
