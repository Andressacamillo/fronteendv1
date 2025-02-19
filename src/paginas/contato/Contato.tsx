import React, { useState } from "react";
import "./Contato.css"
import { Button, Grid, Snackbar, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";

function Contato() {
    const [enviado, setEnviado] = useState(false);

    const handleEnviar = () => {
        // Lógica para enviar a mensagem

        // Define o estado de enviado para true
        setEnviado(true);
    };

    const handleFecharSnackbar = () => {
        // Define o estado de enviado para false para fechar o Snackbar
        setEnviado(false);
    };

    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid item xs={12} sm={4}>
                    <Box textAlign='center'>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' className='textoCadastro'>Contato</Typography>
                        <Typography variant='h6' color='textPrimary' align='center'>Confira nossos canais de contato. Se preferir, preencha o formulário ao lado para nos contatar.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} alignItems='center'>
                    <main className="contato">
                        <form className="formulario">
                            <TextField
                                className="texto_form"
                                id="nome"
                                type="text"
                                label="Nome"
                                placeholder="Insira o seu nome completo..."
                                fullWidth
                            />
                            <TextField
                                className="texto_form"
                                id="email"
                                type="text"
                                label="Email"
                                placeholder="Insira o seu email completo..."
                                fullWidth
                            />
                            <TextField
                                className="texto_form"
                                id="assunto"
                                type="text"
                                label="Assunto"
                                placeholder="Insira o assunto da mensagem..."
                                fullWidth
                            />
                            <Box my={2}>
                                <TextField
                                    id="mensagem"
                                    label="Mensagem"
                                    multiline
                                    rows={8}
                                    placeholder="Insira a sua mensagem..."
                                    fullWidth
                                />
                            </Box>
                            <Box textAlign='center' my={2}>
                                <Button variant='contained' color='primary' type='submit' onClick={handleEnviar}>Enviar</Button>
                            </Box>
                        </form>
                    </main>
                </Grid>
            </Grid>
            <Snackbar
                open={enviado}
                autoHideDuration={3000}
                onClose={handleFecharSnackbar}
                message="Mensagem enviada com sucesso!"
            />
        </>
    )
}

export default Contato;
