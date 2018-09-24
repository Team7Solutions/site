import React, { Component } from 'react'
import './About.css'
import Profile from './Profile';
import Grid from '@material-ui/core/Grid';

export default class About extends Component {

    render() {

        let gabriel = {
            name: "Gabriel Barros",
            photo: "https://media.licdn.com/dms/image/C4E03AQFNPAz64aQRfg/profile-displayphoto-shrink_800_800/0?e=1542240000&v=beta&t=gXrDI8cowsBRFEOVGn6_vG2_DTTh8jbIE1pnWV6jXnw",
            linkedin: "https://www.linkedin.com/in/gabriel-dos-santos-barros/",
            email: "g.santos.barros@gmail.com",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu libero pharetra, vestibulum enim et, hendrerit urna. Integer non elit tempor, tristique ligula vel, maximus magna",
            skills: [
                {
                    name: "Backend",
                    rating: 5
                },
                {
                    name: "Frontend",
                    rating: 4
                },
                {
                    name: "DevOps",
                    rating: 3
                },
                {
                    name: "Hardware",
                    rating: 4
                },
                {
                    name: "Mobile",
                    rating: 3
                },
            ]
        }

        let gustavo = {
            name: "Gustavo Kishima",
            photo: "https://media.licdn.com/dms/image/C5603AQG84JIy81CkbQ/profile-displayphoto-shrink_800_800/0?e=1542240000&v=beta&t=G_7_KShcozXaKH9Xx1YFjHjRbsGy9rExTcHpsplby2s",
            linkedin: "https://www.linkedin.com/in/gustavo-kendy-souza-kishima-79676843/",
            email: "gustavo.kishima@gmail.com",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu libero pharetra, vestibulum enim et, hendrerit urna. Integer non elit tempor, tristique ligula vel, maximus magna",
            skills: [
                {
                    name: "Backend",
                    rating: 5
                },
                {
                    name: "Designer",
                    rating: 4
                },
                {
                    name: "Frontend",
                    rating: 3
                },
                {
                    name: "DevOps",
                    rating: 4
                },
                {
                    name: "Mobile",
                    rating: 3
                },
            ]
        }


        return (
            <div id="About">
                <h1>About us</h1>
                <p className="AboutText">
                    We are experienced software developers that worked for
                    companies like Ericsson, Atech, Pismo, and have the expertise
                    to deliver great solutions with quality, scalability and maintenability
                <br />
                    <br />
                    We as a company deliver products that perform our client needs with quality,
                    while also leaving maintainable solutions, capable of increasing in size
                    and functionality
                </p>
                <div className="profileArea">
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={6}>
                            <Profile user={gabriel} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Profile user={gustavo} />
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}