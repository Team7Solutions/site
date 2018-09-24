import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './Profile.css'

export default class Profile extends Component {

    buildRating(rating) {
        var starsElements = []

        for (let stars = 0; stars < 5; stars++) {
            if (stars < rating) {
                starsElements.push(<StarIcon />)
            } else {
                starsElements.push(<StarBorderIcon />)
            }
        }
        return starsElements
    }

    render() {
        let user = this.props.user

        return (
            <Card className="profile">
                <CardMedia className="mediaProvile"
                    image="https://media.moddb.com/images/games/1/55/54791/backroundteal.jpg"
                    title=""
                />
                <CardContent>
                    <div className="userArea">
                        <img src={user.photo} alt="" />
                        <Typography color="textSecondary">
                            {user.name}
                        </Typography>
                        {/* <Button href={user.linkedin} target="_blank" size="small"><span className="fa fa-linkedin"></span></Button> */}
                    </div>
                    <div className="userInfo">
                        {user.about}
                        <br />
                        {user.skills.map(skill =>
                            <div className="skills">
                                <span className="skillName">{skill.name}</span>
                                <span className="rating">{this.buildRating(skill.rating)}</span>
                            </div>
                        )}
                    </div>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        );
    }
}