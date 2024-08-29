// import React, { useEffect, useState } from "react";
// import { Col } from "reactstrap";
// import { styled } from "@mui/material/styles";
// import { Container } from "@mui/material";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { Button, CardActionArea, CardActions, TextField } from "@mui/material";
// // import './card.css'
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Popper from "@mui/material/Popper";
// import { Box } from "@mui/system";
// import CloseIcon from "@mui/icons-material/Close";
// import District from "../DistrictSelecting/District";
// import { useSelector } from "react-redux";
// import "./CarItem.css";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

// const Div = styled("div")(({ theme }) => ({
//   ...theme.typography.button,
//   backgroundColor: theme.palette.background.paper,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   fontSize: 30,
//   fontFamily: "revert",
// }));

// function Cards() {
//   const [visible, setVisible] = useState(3);
//   const [carsData, setCarsData] = useState([]);
//   const [render, SetRender] = useState(false);
//   const [userId, setUserId] = useState("");
//   const [searchText, setSearchText] = useState("");
//   const [searchData, setSearchData] = useState([]);
//   const [lowToHighData, setLowToHighData] = useState([]);
//   const [highToLowData, setHighToLowData] = useState([]);
//   const [HighToLow, SetHighToLow] = useState(false);
//   const [LowToHigh, SetLowToHigh] = useState(false);
//   const [SearchData, SetSearchData] = useState(false);
//   // console.log(carsData);

//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(anchorEl ? null : event.currentTarget);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "simple-popper" : undefined;

//   const userInfo = localStorage.getItem("userInfo");
//   const value = JSON.parse(userInfo);
//   const DistrictSort = useSelector((state) => state.DisSort);

//   const Datas = () => {
//     if (userInfo) {
//       setUserId(value._id);
//     }
//   };

//   const showMoreItem = () => {
//     setVisible((prevValue) => prevValue + 3);
//   };

//   const showLessItem = () => {
//     setVisible((prevValue) => prevValue - 3);
//   };

//   const navigate = useNavigate();

//   const GetCars = async () => {
//     const data = await axios
//       .get("https://moto-hire-backend.onrender.com/api/user/getcarData")
//       .then((res) => {
//         // console.log(res.data.data)

//         setCarsData(res.data.data);
//         SetRender(true);
//       });

//     // console.log(data);
//   };

//   //offer area

//   // const offerData = () => {
//   //   try {
//   //       axios.get
//   //   } catch (error) {

//   //   }
//   // }

//   //

//   const handleSearch = () => {
//     // console.log(searchText);

//     try {
//       axios
//         .post("https://moto-hire-backend.onrender.com/api/user/search", {
//           searchText,
//         })
//         .then((res) => {
//           // console.log(res.data.data);
//           setSearchData(res.data.data);
//         });
//       SetSearchData(true);
//     } catch (error) {
//       console.log("error occurred while searching", error);
//     }
//   };

//   const lowToHigh = () => {
//     try {
//       axios
//         .get("https://moto-hire-backend.onrender.com/api/user/lowtohigh")
//         .then((res) => {
//           // console.log(res);
//           setLowToHighData(res.data.sort);
//         });
//       SetLowToHigh(true);
//       SetHighToLow(false);
//     } catch (error) {
//       console.log("error occurred while sorting", error);
//     }
//   };

//   const highToLow = () => {
//     try {
//       axios
//         .get("https://moto-hire-backend.onrender.com/api/user/hightolow")
//         .then((res) => {
//           //  console.log(res);
//           setHighToLowData(res.data.sorttwo);
//         });
//       SetHighToLow(true);
//       SetLowToHigh(false);
//     } catch (error) {}
//   };

//   const handleSearchClear = () => {
//     // console.log("clearing");
//     SetSearchData(false);
//     setSearchText("");
//   };

//   useEffect(() => {
//     GetCars();
//     Datas();
//   }, [render]);

//   return (
//     <div>
//       {/* <Div>{"Choose your car."}</Div> */}
//       <br />

//       <Container>
//         <Grid container spacing={4} style={{ margin: "auto" }}>
//           <Grid
//             item
//             sm={12}
//             xs={12}
//             md={6}
//             lg={4}
//             xl={4}
//             style={{ display: "flex" }}
//           >
//             <div className="d-flex" style={{ marginTop: "-1rem" }}>
//               <span className=" d-flex align-items-center gap-2">
//                 <i class="ri-sort-asc"></i> Sort By
//               </span>
//               <Box sx={{ marginTop: 1 }}>
//                 <Button
//                   aria-describedby={id}
//                   type="button"
//                   style={{ marginLeft: 80, marginTop: 2, color:"#34e89e" }}
//                   onClick={handleClick}
//                 >
//                   Price
//                 </Button>
//                 <Popper id={id} open={open} anchorEl={anchorEl}>
//                   <Box sx={{ border: 1, p: 1, bgcolor: "white" }}>
//                     <Button onClick={lowToHigh}>Price--Low to high</Button>
//                     <br />
//                     <Button onClick={highToLow}>Price--High to low</Button>
//                   </Box>
//                 </Popper>
//               </Box>
//             </div>
//           </Grid>

//           <Grid sm={12} xs={12} md={6} lg={4} xl={4}>
//             <Box sx={{ marginTop: 1, marginLeft: 4, maxWidth: 400 }}>
//               <District />
//             </Box>
//           </Grid>

//           <Grid></Grid>

//           <Grid item sm={12} xs={12} md={6} lg={4} xl={4}>
//             <Box sx={{ display: "flex" }}>
//               <Box sx={{ marginLeft: "-1.5rem" }}>
//                 <TextField
//                   id="outlined-basic"
//                   label="Search Cars"
//                   sx={{
//                     // Root class for the input field
//                     "& .MuiOutlinedInput-root": {
//                       color: "#000",
//                       fontFamily: "Arial",
//                       fontWeight: "bold",
//                       // Class for the border around the input field
//                       "& .MuiOutlinedInput-notchedOutline": {
//                         borderColor: "#2e2e2e",
//                         borderWidth: "2px",
//                       },
//                     },
//                     // Class for the label of the input field
//                     "& .MuiInputLabel-outlined": {
//                       color: "#2e2e2e",
//                       fontWeight: "bold",
//                     },
//                   }}
//                   InputLabelProps={{
//                     style: { color: '#858585' },
//                   }}
//                   color="primary"
//                   value={searchText}
//                   onChange={(e) => setSearchText(e.target.value)}
//                   InputProps={{
//                     style: { height: 50, color: "#858585", borderColor: "yellow" },
//                     endAdornment: (
//                       <CloseIcon
//                         onClick={handleSearchClear}
//                         style={{ cursor: "pointer" }}
//                       ></CloseIcon>
//                     ),
//                   }}
//                 />
//               </Box>
//               <Box sx={{ marginLeft: 1 }}>
//                 {/* <Button
//                   variant="contained"
//                   sx={{ marginTop: 1 }}
//                   onClick={handleSearch}
//                   background="#0f3443"
//                 >
//                   Search
//                 </Button> */}
//                 <button
//                   className="header__btn btn text-white"
//                   onClick={handleSearch}
//                 >
//                   Search
//                 </button>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>

//       <br />
//       <Container maxWidth="xl" style={{ marginBottom: "2rem" }}>
//         {SearchData ? (
//           <Grid container>
//             {searchData.slice(0, visible).map((obj, index) => {
//               return (
//                 <Grid item xl={3} lg={3} md={3} sm={6} xs={12} key={index}>
//                   <Card
//                     sx={{ maxWidth: 345 }}
//                     style={{
//                       margin: 15,
//                       Height: "auto",
//                       position: "relative",
//                       minHeight: 520,
//                       borderRadius: 25,
//                       background: "rgba(255, 255, 255, 0.05)",
//                       boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
//                       backdropFilter: "blur(18px)",
//                       border: "1px solid rgba(255, 255, 255, 0.18)",
//                       color: "#858585",
//                     }}
//                     className="card"
//                   >
//                     <CardMedia
//                       component="img"
//                       alt="cars"
//                       height="140"
//                       style={{ height: 180, objectFit: "contain" }}
//                       key={index}
//                       image={obj.imgUrl}
//                     />
//                     <CardContent>
//                       <div
//                         style={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                         }}
//                       >
//                         <Typography gutterBottom variant="h5" component="div">
//                           <strong>
//                             {obj.brand} {obj.model}
//                           </strong>
//                           {/* <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />}   /> */}
//                         </Typography>

//                         <Typography
//                           gutterBottom
//                           variant="h6"
//                           component="div"
//                           style={{ fontSize: "15px" }}
//                         >
//                           ₹{obj.price}/day
//                         </Typography>
//                       </div>
//                       {obj.OfferStatus ? (
//                         <Box sx={{ display: "flex" }}>
//                           <Typography
//                             gutterBottom
//                             variant="BUTTON TEXT"
//                             component="div"
//                           >
//                             <span style={{ fontWeight: "bold" }}>
//                               Orginal Price :
//                             </span>
//                           </Typography>
//                           <Typography
//                             style={{
//                               textDecoration: "line-through",
//                               marginLeft: "10px",
//                             }}
//                             variant="subtitle2"
//                           >
//                             ₹{obj.prevAmount}
//                           </Typography>
//                         </Box>
//                       ) : null}
//                       <Typography variant="subtitle2">
//                         <span style={{ fontWeight: "bold" }}>
//                           Available in :
//                         </span>{" "}
//                         {obj.location}
//                       </Typography>
//                       <Typography
//                         variant="body2"
                      
//                         marginTop={1}
//                       >
//                         {obj.description}
//                       </Typography>
//                     </CardContent>
//                     <CardActions
//                       style={{ bottom: 8 }}
//                       className=" d-flex align-items-center justify-content-center"
//                     >
//                       <button
//                         className="header__btn btn text-white"
//                         onClick={() => navigate(`/productpage/${obj._id}`)}
//                         style={{ bottom: 8, position: "absolute" }}
//                       >
//                         Book Now
//                       </button>
//                     </CardActions>
//                   </Card>
//                 </Grid>
//               );
//             })}
//           </Grid>
//         ) : LowToHigh ? (
//           <Grid container>
//             {lowToHighData.slice(0, visible).map((obj, index) => {
//               return (
//                 <Grid item xl={3} lg={3} md={3} sm={6} xs={12} key={index}>
//                   <Card
//                     sx={{ maxWidth: 345 }}
//                     style={{
//                       margin: 15,
//                       Height: "auto",
//                       position: "relative",
//                       minHeight: 520,
//                       borderRadius: 25,
//                       // position: relative,
//                       background: "rgba(255, 255, 255, 0.05)",
//                       boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
//                       backdropFilter: "blur(18px)",
//                       // -webkitBackdropFilter: 'blur(18px)',
//                       border: "1px solid rgba(255, 255, 255, 0.18)",
//                       color: "#858585",
//                       // border-radius: 8rem,
//                       // padding: 1.5rem,
//                       // zIndex: 1,
//                     }}
//                     className="card"
//                   >
//                     <CardMedia
//                       component="img"
//                       alt="cars"
//                       height="140"
//                       key={index}
//                       style={{ height: 180, objectFit: "contain" }}
//                       image={obj.imgUrl}
//                     />
//                     <CardContent>
//                       <div
//                         style={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                         }}
//                       >
//                         <Typography gutterBottom variant="h5" component="div">
//                           <strong>
//                             {obj.brand} {obj.model}
//                           </strong>
//                         </Typography>

//                         <Typography
//                           gutterBottom
//                           variant="h6"
//                           component="div"
//                           style={{ fontSize: "15px" }}
//                         >
//                           ₹{obj.price}/day
//                         </Typography>
//                       </div>
//                       {obj.OfferStatus ? (
//                         <Box sx={{ display: "flex" }}>
//                           <Typography
//                             gutterBottom
//                             variant="BUTTON TEXT"
//                             component="div"
//                           >
//                             <span style={{ fontWeight: "bold" }}>
//                               Orginal Price :
//                             </span>
//                           </Typography>
//                           <Typography
//                             style={{
//                               textDecoration: "line-through",
//                               marginLeft: "10px",
//                             }}
//                             variant="subtitle2"
//                           >
//                             ₹{obj.prevAmount}
//                           </Typography>
//                         </Box>
//                       ) : null}
//                       <Typography variant="subtitle2">
//                         <span style={{ fontWeight: "bold" }}>
//                           Available in :
//                         </span>{" "}
//                         {obj.location}
//                       </Typography>
//                       <Typography
//                         variant="body2"
                      
//                         marginTop={1}
//                       >
//                         {obj.description}
//                       </Typography>
//                     </CardContent>
//                     <CardActions
//                       style={{ bottom: 8 }}
//                       className=" d-flex align-items-center justify-content-center"
//                     >
//                       <button
//                         className="header__btn btn text-white"
//                         onClick={() => navigate(`/productpage/${obj._id}`)}
//                         style={{ bottom: 8, position: "absolute" }}
//                       >
//                         Book Now
//                       </button>
//                     </CardActions>
//                   </Card>
//                 </Grid>
//               );
//             })}
//           </Grid>
//         ) : HighToLow ? (
//           <Grid container>
//             {highToLowData.slice(0, visible).map((obj, index) => {
//               return (
//                 <Grid item xl={3} lg={3} md={3} sm={6} xs={12} key={index}>
//                   <Card
//                     sx={{ maxWidth: 345 }}
//                     style={{
//                       margin: 15,
//                       Height: "auto",
//                       position: "relative",
//                       minHeight: 520,
//                       borderRadius: 25,
//                       // position: relative,
//                       background: "rgba(255, 255, 255, 0.05)",
//                       boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
//                       backdropFilter: "blur(18px)",
//                       // -webkitBackdropFilter: 'blur(18px)',
//                       border: "1px solid rgba(255, 255, 255, 0.18)",
//                       color: "#858585",
//                       // border-radius: 8rem,
//                       // padding: 1.5rem,
//                       // zIndex: 1,
//                     }}
//                     className="card"
//                   >
//                     <CardMedia
//                       component="img"
//                       alt="cars"
//                       height="140"
//                       key={index}
//                       style={{ height: 180, objectFit: "contain" }}
//                       image={obj.imgUrl}
//                     />
//                     <CardContent>
//                       <div
//                         style={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                         }}
//                       >
//                         <Typography gutterBottom variant="h5" component="div">
//                           <strong>
//                             {obj.brand} {obj.model}
//                           </strong>
//                         </Typography>

//                         <Typography
//                           gutterBottom
//                           variant="h6"
//                           component="div"
//                           style={{ fontSize: "15px" }}
//                         >
//                           ₹{obj.price}/day
//                         </Typography>
//                       </div>
//                       {obj.OfferStatus ? (
//                         <Box sx={{ display: "flex" }}>
//                           <Typography
//                             gutterBottom
//                             variant="BUTTON TEXT"
//                             component="div"
//                           >
//                             <span style={{ fontWeight: "bold" }}>
//                               Orginal Price :
//                             </span>
//                           </Typography>
//                           <Typography
//                             style={{
//                               textDecoration: "line-through",
//                               marginLeft: "10px",
//                             }}
//                             variant="subtitle2"
//                           >
//                             ₹{obj.prevAmount}
//                           </Typography>
//                         </Box>
//                       ) : null}
//                       <Typography variant="subtitle2">
//                         <span style={{ fontWeight: "bold" }}>
//                           Available in :
//                         </span>{" "}
//                         {obj.location}
//                       </Typography>
//                       <Typography
//                         variant="body2"
                      
//                         marginTop={1}
//                       >
//                         {obj.description}
//                       </Typography>
//                     </CardContent>
//                     <CardActions
//                       style={{ bottom: 8 }}
//                       className=" d-flex align-items-center justify-content-center"
//                     >
//                       <button
//                         className="header__btn btn text-white"
//                         onClick={() => navigate(`/productpage/${obj._id}`)}
//                         style={{ bottom: 8, position: "absolute" }}
//                       >
//                         Book Now
//                       </button>
//                     </CardActions>
//                   </Card>
//                 </Grid>
//               );
//             })}
//           </Grid>
//         ) : DistrictSort.length > 0 ? (
//           <Grid container>
//             {DistrictSort.slice(0, visible).map((obj, index) => {
//               return (
//                 <Grid item xl={3} lg={3} md={3} sm={6} xs={12} key={index}>
//                   <Card
//                     sx={{ maxWidth: 345 }}
//                     style={{
//                       margin: 15,
//                       Height: "auto",
//                       position: "relative",
//                       minHeight: 520,
//                       borderRadius: 25,
//                       // position: relative,
//                       background: "rgba(255, 255, 255, 0.05)",
//                       boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
//                       backdropFilter: "blur(18px)",
//                       // -webkitBackdropFilter: 'blur(18px)',
//                       border: "1px solid rgba(255, 255, 255, 0.18)",
//                       color: "#858585",
//                       // border-radius: 8rem,
//                       // padding: 1.5rem,
//                       // zIndex: 1,
//                     }}
//                     className="card"
//                   >
//                     <CardMedia
//                       component="img"
//                       alt="cars"
//                       height="140"
//                       key={index}
//                       style={{ height: 180, objectFit: "contain" }}
//                       image={obj.imgUrl}
//                     />
//                     <CardContent>
//                       <div
//                         style={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                         }}
//                       >
//                         <Typography gutterBottom variant="h5" component="div">
//                           <strong>
//                             {obj.brand} {obj.model}
//                           </strong>
//                         </Typography>

//                         <Typography
//                           gutterBottom
//                           variant="h6"
//                           component="div"
//                           style={{ fontSize: "15px" }}
//                         >
//                           ₹{obj.price}/day
//                         </Typography>
//                       </div>
//                       {obj.OfferStatus ? (
//                         <Box sx={{ display: "flex" }}>
//                           <Typography
//                             gutterBottom
//                             variant="BUTTON TEXT"
//                             component="div"
//                           >
//                             <span style={{ fontWeight: "bold" }}>
//                               Orginal Price :
//                             </span>
//                           </Typography>
//                           <Typography
//                             style={{
//                               textDecoration: "line-through",
//                               marginLeft: "10px",
//                             }}
//                             variant="subtitle2"
//                           >
//                             ₹{obj.prevAmount}
//                           </Typography>
//                         </Box>
//                       ) : null}
//                       <Typography variant="subtitle2">
//                         <span style={{ fontWeight: "bold" }}>
//                           Available in :{" "}
//                         </span>
//                         {obj.location}
//                       </Typography>
//                       <Typography
//                         variant="body2"
                      
//                         marginTop={1}
//                       >
//                         {obj.description}
//                       </Typography>
//                     </CardContent>
//                     <CardActions
//                       style={{ bottom: 8 }}
//                       className=" d-flex align-items-center justify-content-center"
//                     >
//                       <button
//                         className="header__btn btn text-white"
//                         onClick={() => navigate(`/productpage/${obj._id}`)}
//                         style={{ bottom: 8, position: "absolute" }}
//                       >
//                         Book Now
//                       </button>
//                     </CardActions>
//                   </Card>
//                 </Grid>
//               );
//             })}
//           </Grid>
//         ) : (
//           <Grid container>
//             {carsData.slice(0, visible).map((obj, index) => {
//               return (
//                 <Grid item xl={3} lg={3} md={3} sm={6} xs={12} key={index}>
//                   <Card
//                     sx={{ maxWidth: 345 }}
//                     style={{
//                       margin: 15,
//                       Height: "auto",
//                       position: "relative",
//                       minHeight: 520,
//                       borderRadius: 25,
//                       // position: relative,
//                       background: "rgba(255, 255, 255, 0.05)",
//                       boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
//                       backdropFilter: "blur(18px)",
//                       // -webkitBackdropFilter: 'blur(18px)',
//                       border: "1px solid rgba(255, 255, 255, 0.18)",
//                       color: "#858585",
//                       // border-radius: 8rem,
//                       // padding: 1.5rem,
//                       // zIndex: 1,
//                     }}
//                     className="card"
//                   >
//                     <CardMedia
//                       component="img"
//                       alt="cars"
//                       height="140"
//                       key={index}
//                       style={{ height: 180, objectFit: "contain" }}
//                       image={obj.imgUrl}
//                     />
//                     <CardContent>
//                       <div
//                         style={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                         }}
//                       >
//                         <Typography gutterBottom variant="h5" component="div">
//                           <strong>
//                             {obj.brand} {obj.model}
//                           </strong>
//                         </Typography>

//                         <Typography
//                           gutterBottom
//                           variant="h6"
//                           component="div"
//                           style={{ fontSize: "15px" }}
//                         >
//                           ₹{obj.price}/day
//                         </Typography>
//                       </div>
//                       {obj.OfferStatus ? (
//                         <Box sx={{ display: "flex" }}>
//                           <Typography
//                             gutterBottom
//                             variant="BUTTON TEXT"
//                             component="div"
//                           >
//                             <span style={{ fontWeight: "bold" }}>
//                               Orginal Price :
//                             </span>
//                           </Typography>
//                           <Typography
//                             style={{
//                               textDecoration: "line-through",
//                               marginLeft: "10px",
//                             }}
//                             variant="subtitle2"
//                           >
//                             ₹{obj.prevAmount}
//                           </Typography>
//                         </Box>
//                       ) : null}
//                       <Typography variant="subtitle2">
//                         <span style={{ fontWeight: "bold" }}>
//                           Available in :
//                         </span>{" "}
//                         {obj.location}
//                       </Typography>

//                       <Typography
//                         variant="body2"
                      
//                         marginTop={1}
//                       >
//                         {obj.description}
//                       </Typography>
//                     </CardContent>
//                     <CardActions
//                       style={{ bottom: 8 }}
//                       className=" d-flex align-items-center justify-content-center"
//                     >
//                       <button
//                         className="header__btn btn text-white"
//                         onClick={() => navigate(`/productpage/${obj._id}`)}
//                         style={{ bottom: 8, position: "absolute" }}
//                       >
//                         Book Now
//                       </button>
//                     </CardActions>
//                   </Card>
//                 </Grid>
//               );
//             })}
//           </Grid>
//         )}
//       </Container>
//       <div style={{ justifyContent: "center", display: "flex" }}>
//         {carsData.length === visible ? null : carsData.length ? (
//           // <Button onClick={showMoreItem} variant="contained">
//           //   Load More
//           //   <ArrowDropDownIcon />
//           // </Button>
//           <button
//             className="header__btn btn text-white"
//             onClick={showMoreItem}
//             style={{ marginRight: "2rem" }}
//           >
//             Load More
//             <ArrowDropDownIcon />
//           </button>
//         ) : null}

//         {visible > 4 ? (
//           // <Button
//           //   onClick={showLessItem}
//           //   variant="contained"
//           //   style={{ marginLeft: 5 }}
//           // >
//           //   Load less
//           //   <ArrowDropUpIcon />
//           // </Button>
//           <button className="header__btn btn text-white" onClick={showLessItem}>
//             Load less
//             <ArrowDropUpIcon />
//           </button>
//         ) : null}
//       </div>
//     </div>
//   );
// }

// export default Cards;
