import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import theme from './InitTheme'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import { ReactNode } from 'react'

function MatApp({ children }: { children: ReactNode }) {
    return (
        <CssVarsProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            React CS CMU
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Container
                style={{
                    marginTop: '1rem',
                }}
            >
                {children}
            </Container>
        </CssVarsProvider>
    )
}

export default MatApp
