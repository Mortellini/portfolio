import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary:{
            main : '#232649',
            deep : '#1a1c3a'
        },
        secondary:{
            main: '#449B57' 
        },
    
    },
    typography: {
        fontFamily: '"VT323", monospace',
        fontSize: 18,
       

        
       
    }
});

export default theme;