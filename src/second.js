import React from "react";
import "./first.css";
import {Container,Row,Col} from "react-bootstrap";
import MediaCard from "./categoryCard";
export default function Second(){
    return(
        <>
        <h1 className="course" style={{marginTop:"80px"}}>Lawyer Categories</h1>
        <br/>

        <Container>
            <Row>
                <Col  sm={12} md={6} lg={4} ><a style={{textDecoration:"none"}} href="/lawyers/bankruptcy"><MediaCard  title="Bankruptcy" URL="https://res.cloudinary.com/shubhampersonal/image/upload/v1614854968/bakruptcy_hboqyv.jpg" /></a></Col>
                <Col sm={12} md={6} lg={4} ><a style={{textDecoration:"none"}} href="/lawyers/corporate"><MediaCard title="Corporate" URL="https://res.cloudinary.com/shubhampersonal/image/upload/v1614855032/Corporate-Law_e1mk59.jpg"/></a></Col>
                <Col sm={12} md={6} lg={4} ><a style={{textDecoration:"none"}} href="/lawyers/civil"><MediaCard title="Civil Rights" URL="https://res.cloudinary.com/shubhampersonal/image/upload/v1614855091/civil-rights-law_khyyf0.jpg"/></a> </Col>
               
           
                <Col sm={12} md={6} lg={4} ><a style={{textDecoration:"none"}} href="/lawyers/criminal"><MediaCard title="Criminal law" URL="https://res.cloudinary.com/shubhampersonal/image/upload/v1614855155/judge-s-gavel-handcuffs-white-wooden-background-criminal-law-concept-judge-s-gavel-handcuffs-white-wooden-background-159805912_uivl9x.jpg"/></a></Col>
                <Col sm={12} md={6} lg={4} ><a style={{textDecoration:"none"}} href="/lawyers/family"><MediaCard title="Family Law" URL="https://res.cloudinary.com/shubhampersonal/image/upload/v1614855198/Family-Law_ggzh7v.jpg"/></a></Col>
                <Col sm={12} md={6} lg={4} ><a style={{textDecoration:"none"}} href="/lawyers/environmental"><MediaCard title="Environmental Law" URL="https://res.cloudinary.com/shubhampersonal/image/upload/v1614855268/Environmental-Law_sg6fwh.jpg"/></a></Col>
                
            </Row>
        </Container>
        </>
    )
}