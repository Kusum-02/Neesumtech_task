import { CardHeader, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React,{useState}from "react";
import useProducts from "../hooks/components/useProducts";
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import SearchBar from "material-ui-search-bar";
// import { useGetProducts } from "../hooks/api/useProduct";

const Products = () => {
  // const { data } = useGetProducts();
  const { products: data } = useProducts({});
  console.log("data",data)
  const [searchtext,setSearchtext]=useState("");
  console.log("searchtext",searchtext)
  const filtered= !searchtext ? "" : data.filter((cat)=>{cat.category.toLowerCase().includes(searchtext.toLowerCase())})
   
//   const requestSearch = (searchtext) => {
//     const filteredRows = data.filter((row) => {
//       return row.category.toLowerCase().includes(searchtext.toLowerCase());
//     });
// };

  // console.log("filtered",filtered)
  return (
    <Container>
      <Typography variant="h4" sx={{ p: 6 }}>Products</Typography>
      <SearchBar
        sx={{ mb: "20px" }}
        value={searchtext}
        onChange={(e) => setSearchtext(e.target.value)}
      />
      <Grid container spacing={4}>
        {
          searchtext ? filtered.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product?.id}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' ,mt:"30px"}}
              >
                <CardMedia
                  component="img"
                  image={product?.images && product?.images?.url}
                  alt="product"
                  sx={{ height: 225 }}
                >
                </CardMedia>
                <CardContent>
                  <Typography align="right"> <Badge badgeContent={product?.category?.name} color="secondary" sx={{ mt: '-455px', mr: "25px" }}> </Badge></Typography>
                  <Typography variant="h6" align="left" color="black" sx={{ fontWeight: 'bold', fontSize: '18px' }}>{product?.name}</Typography>
                  {/* <Typography align="left" >{product?.category?.name}</Typography> */}
                  <Typography align="right" color="#76797a" sx={{ mt: '-8%', fontSize: '16px' }}>Rs.{product?.price}</Typography>
                  <Typography align="left" sx={{ mt: '2%', fontSize: '15px' }} color="#11a907"><CheckCircleOutlineIcon sx={{ height: '6%', width: '6%', pr: '4px', mt: '-1%' }}></CheckCircleOutlineIcon>{product?.stock} in stock</Typography>
                </CardContent>
              </Card>
            </Grid>
          )):""}
      </Grid>
      <Grid container spacing={4}>
        {
          data?.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product?.id}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' ,mt:"30px"}}
              >
                <CardMedia
                  component="img"
                  image={product?.images && product?.images?.url}
                  alt="product"
                  sx={{ height: 225 }}
                >
                </CardMedia>
                <CardContent>
                  <Typography align="right"> <Badge badgeContent={product?.category?.name} color="secondary" sx={{ mt: '-455px', mr: "25px" }}> </Badge></Typography>
                  <Typography variant="h6" align="left" color="black" sx={{ fontWeight: 'bold', fontSize: '18px' }}>{product?.name}</Typography>
                  {/* <Typography align="left" >{product?.category?.name}</Typography> */}
                  <Typography align="right" color="#76797a" sx={{ mt: '-8%', fontSize: '16px' }}>Rs.{product?.price}</Typography>
                  <Typography align="left" sx={{ mt: '2%', fontSize: '15px' }} color="#11a907"><CheckCircleOutlineIcon sx={{ height: '6%', width: '6%', pr: '4px', mt: '-1%' }}></CheckCircleOutlineIcon>{product?.stock} in stock</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container >
  );
};

export default Products;
