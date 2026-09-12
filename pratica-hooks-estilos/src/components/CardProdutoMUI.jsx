import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@mui/material';

export default function CardProdutoMUI({ imagem, nome, descricao, preco }) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="180"
        image={imagem}
        alt={nome}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descricao}
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 1, color: '#15803d' }}>
          R$ {preco}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
}