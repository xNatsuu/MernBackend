import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
// import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "react-material-ui-carousel";
import LinkedIn from "react-material-ui-carousel";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/shr1m0y";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://media.licdn.com/dms/image/D5603AQEoalBw_fCUSw/profile-displayphoto-shrink_400_400/0/1666334837528?e=1716422400&v=beta&t=uliNXHMbIuHHvZ2ueDjHJtb2HczqdwRmiKJQrU7poRs"
              alt="Founder"
            />
            <Typography>Shrimoy Nayak</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a E-commerce website made by me . I have used 
              MERN stack for it's implementation . I am learning more about 
              it as time progresses . Do visit the website and Give a comment.  
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            {/* <a
              href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a> */}

            <a href="https://www.linkedin.com/in/shrimoy-nayak-196112229/" target="blank">
              <LinkedIn className="LinkedInSvgIcon" />
            </a>


            <a href="https://instagram.com/shr1m0y" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            <a href="https://github.com/xNatsuu" target="blank">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
