import React from 'react'
import { useTheme } from '@mui/material/styles';
import { Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';


const Table = () => {
    const theme = useTheme(); 

    const leagueData = [
        {
          club: "Barcelona",
          mp: 11,
          w: 10,
          d: 0,
          l: 1,
          gf: 37,
          ga: 10,
          gd: 27,
          pts: 30,
          last5: ["Win", "Loss", "Win", "Win", "Win"],
          competition: "UEFA Champions League group stage"
        },
        {
          club: "Real Madrid",
          mp: 11,
          w: 7,
          d: 3,
          l: 1,
          gf: 21,
          ga: 11,
          gd: 10,
          pts: 24,
          last5: ["Win", "Draw", "Win", "Win", "Loss"],
          competition: "UEFA Champions League group stage"
        },
        {
          club: "Villarreal",
          mp: 11,
          w: 6,
          d: 3,
          l: 2,
          gf: 20,
          ga: 19,
          gd: 1,
          pts: 21,
          last5: ["Win", "Win", "Loss", "Draw", "Win"],
          competition: "UEFA Champions League group stage"
        },
        {
          club: "Atlético Madrid",
          mp: 11,
          w: 5,
          d: 5,
          l: 1,
          gf: 16,
          ga: 7,
          gd: 9,
          pts: 20,
          last5: ["Win", "Draw", "Draw", "Win", "Loss"],
          competition: "UEFA Champions League group stage"
        },
        {
          club: "Athletic Club",
          mp: 11,
          w: 5,
          d: 3,
          l: 3,
          gf: 17,
          ga: 11,
          gd: 6,
          pts: 18,
          last5: ["Win", "Draw", "Loss", "Win", "Draw"],
          competition: "Europa League group stage"
        },
        {
          club: "Real Betis",
          mp: 11,
          w: 5,
          d: 3,
          l: 3,
          gf: 11,
          ga: 9,
          gd: 2,
          pts: 18,
          last5: ["Draw", "Win", "Loss", "Win", "Win"],
          competition: "Europa Conference League qualifiers"
        },
        {
          club: "Mallorca",
          mp: 11,
          w: 5,
          d: 3,
          l: 3,
          gf: 10,
          ga: 8,
          gd: 2,
          pts: 18,
          last5: ["Win", "Win", "Loss", "Win", "Draw"],
          competition: "Europa Conference League qualifiers"
        },
        {
          club: "Osasuna",
          mp: 11,
          w: 5,
          d: 3,
          l: 3,
          gf: 16,
          ga: 16,
          gd: 0,
          pts: 18,
          last5: ["Draw", "Win", "Draw", "Loss", "Win"],
          competition: "Europa Conference League qualifiers"
        },
        {
          club: "Rayo Vallecano",
          mp: 11,
          w: 4,
          d: 4,
          l: 3,
          gf: 12,
          ga: 10,
          gd: 2,
          pts: 16,
          last5: ["Draw", "Draw", "Win", "Loss", "Win"],
          competition: "Europa Conference League qualifiers"
        },
        {
          club: "Sevilla",
          mp: 11,
          w: 4,
          d: 3,
          l: 4,
          gf: 12,
          ga: 15,
          gd: -3,
          pts: 15,
          last5: ["Win", "Draw", "Win", "Loss", "Win"],
          competition: "Europa Conference League qualifiers"
        },
        {
          club: "Celta Vigo",
          mp: 11,
          w: 4,
          d: 1,
          l: 6,
          gf: 17,
          ga: 20,
          gd: -3,
          pts: 13,
          last5: ["Loss", "Draw", "Win", "Loss", "Loss"],
          competition: "Europa Conference League qualifiers"
        },
        {
          club: "Real Sociedad",
          mp: 11,
          w: 3,
          d: 3,
          l: 5,
          gf: 8,
          ga: 10,
          gd: -2,
          pts: 12,
          last5: ["Draw", "Win", "Draw", "Win", "Loss"],
          competition: "Europa Conference League qualifiers"
        },
        {
          club: "Girona",
          mp: 11,
          w: 3,
          d: 3,
          l: 5,
          gf: 11,
          ga: 14,
          gd: -3,
          pts: 12,
          last5: ["Draw", "Draw", "Win", "Loss", "Loss"],
          competition: "Europa Conference League qualifiers"
        },
        {
          club: "Leganes",
          mp: 11,
          w: 2,
          d: 5,
          l: 4,
          gf: 9,
          ga: 12,
          gd: -3,
          pts: 11,
          last5: ["Draw", "Draw", "Draw", "Loss", "Win"],
          competition: "Europa Conference League qualifiers"
        },
        {
          club: "Getafe",
          mp: 11,
          w: 1,
          d: 7,
          l: 3,
          gf: 8,
          ga: 9,
          gd: -1,
          pts: 10,
          last5: ["Loss", "Win", "Draw", "Draw", "Draw"],
          competition: "Europa Conference League qualifiers"
        },
        {
          club: "Alavés",
          mp: 11,
          w: 3,
          d: 1,
          l: 7,
          gf: 13,
          ga: 19,
          gd: -6,
          pts: 10,
          last5: ["Loss", "Loss", "Loss", "Loss", "Loss"],
          competition: "Relegation"
        },
        {
          club: "Espanyol",
          mp: 11,
          w: 3,
          d: 1,
          l: 7,
          gf: 10,
          ga: 19,
          gd: -9,
          pts: 10,
          last5: ["Loss", "Loss", "Win", "Loss", "Loss"],
          competition: "Relegation"
        },
        {
          club: "Las Palmas",
          mp: 11,
          w: 2,
          d: 3,
          l: 6,
          gf: 13,
          ga: 19,
          gd: -6,
          pts: 9,
          last5: ["Draw", "Loss", "Loss", "Win", "Win"],
          competition: "Relegation"
        },
        {
          club: "Valladolid",
          mp: 11,
          w: 2,
          d: 2,
          l: 7,
          gf: 9,
          ga: 23,
          gd: -14,
          pts: 8,
          last5: ["Loss", "Loss", "Loss", "Win", "Loss"],
          competition: "Relegation"
        },
        {
          club: "Valencia",
          mp: 11,
          w: 1,
          d: 4,
          l: 6,
          gf: 8,
          ga: 17,
          gd: -9,
          pts: 7,
          last5: ["Draw", "Loss", "Draw", "Loss", "Draw"],
          competition: "Relegation"
        }
      ];
      

  return (
    
    <TableContainer component={Paper} sx={{ borderRadius:"10px", marginTop: 4, backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white for glass effect
        backdropFilter: 'blur(10px)', }}>
    <Typography variant="h6" align="center" sx={{ margin: 2, color: theme.palette.text.primary }}>
        League Standings
    </Typography>
    <MuiTable size="small">
        <TableHead>
            <TableRow>
                {['Club', 'MP', 'W', 'D', 'L', 'GF', 'GA', 'GD', 'Pts', 'Last 5', 'Competition'].map((header) => (
                    <TableCell align="center" key={header} sx={{ color: theme.palette.text.primary }}>
                        {header}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
        <TableBody>
            {leagueData.map((team, index) => (
                <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: theme.palette.action.hover } }}>
                    <TableCell sx={{ color: theme.palette.text.primary }}>{team.club}</TableCell>
                    <TableCell align="center" sx={{ color: theme.palette.text.primary }}>{team.mp}</TableCell>
                    <TableCell align="center" sx={{ color: theme.palette.text.primary }}>{team.w}</TableCell>
                    <TableCell align="center" sx={{ color: theme.palette.text.primary }}>{team.d}</TableCell>
                    <TableCell align="center" sx={{ color: theme.palette.text.primary }}>{team.l}</TableCell>
                    <TableCell align="center" sx={{ color: theme.palette.text.primary }}>{team.gf}</TableCell>
                    <TableCell align="center" sx={{ color: theme.palette.text.primary }}>{team.ga}</TableCell>
                    <TableCell align="center" sx={{ color: theme.palette.text.primary }}>{team.gd}</TableCell>
                    <TableCell align="center" sx={{ color: theme.palette.text.primary }}>{team.pts}</TableCell>
                    <TableCell align="center">
                        {team.last5.map((result, i) => (
                            <span
                                key={i}
                                style={{
                                    margin: '0 2px',
                                    color: result === 'Win' ? theme.palette.success.main : result === 'Draw' ? theme.palette.warning.main : theme.palette.error.main,
                                }}
                            >
                                {result[0]}
                            </span>
                        ))}
                    </TableCell>
                    <TableCell align="center" sx={{ color: theme.palette.text.primary }}>{team.competition}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </MuiTable>
</TableContainer>
  );
};

export default Table